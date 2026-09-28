/**
 * Verificações sobre o HTML pré-renderizado. Rode depois de `npm run build`.
 * Detecta o modo pelo aviso de revisão: checagens de publicação só valem para
 * o build de produção (NEXT_PUBLIC_SITE_MODE=production npm run build).
 */
import { test } from "node:test";
import assert from "node:assert/strict";
import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";
import { ebooks } from "../src/content/perfil-e-proposito.ts";

const ROOT = join(import.meta.dirname, "..");
const APP = join(ROOT, ".next/server/app");
const SITE = "https://www.carlagerhard.com";

const routes: Record<string, string> = {
  "/": "index.html",
  "/nr1": "nr1.html",
  "/analise-comportamental": "analise-comportamental.html",
  "/perfil-e-proposito": "perfil-e-proposito.html",
  "/advento": "advento.html",
  "/advento/familia": "advento/familia.html",
  "/advento/igrejas": "advento/igrejas.html",
};

if (!existsSync(join(APP, "index.html"))) {
  throw new Error("Build não encontrado. Rode `npm run build` antes de `npm test`.");
}

const html = Object.fromEntries(Object.entries(routes).map(([r, f]) => [r, readFileSync(join(APP, f), "utf8")]));
// Texto visível aproximado: remove scripts (payload RSC) e tags.
const text = Object.fromEntries(
  Object.entries(html).map(([r, h]) => [
    r,
    h
      .replace(/<script[\s\S]*?<\/script>/g, " ")
      .replace(/<[^>]+>/g, " ")
      .replace(/&nbsp;|&#x27;|&quot;|&amp;/g, " ")
      .replace(/\s+/g, " "),
  ]),
);
const isReviewBuild = html["/"].includes("Versão de revisão");

function walk(dir: string): string[] {
  return readdirSync(dir).flatMap((name) => {
    const p = join(dir, name);
    return statSync(p).isDirectory() ? walk(p) : [p];
  });
}

test("nenhum PDF no projeto publicado (public/ e .next/)", () => {
  const pdfs = [...walk(join(ROOT, "public")), ...walk(join(ROOT, ".next"))].filter((f) => f.toLowerCase().endsWith(".pdf"));
  assert.deepEqual(pdfs, []);
});

test("cada página: um h1, canonical, og:image existente, sem href='#', IDs únicos", () => {
  for (const [route, h] of Object.entries(html)) {
    assert.equal((h.match(/<h1[\s>]/g) || []).length, 1, `${route}: h1`);
    const canonical = h.match(/<link rel="canonical" href="([^"]+)"/)?.[1];
    assert.equal(canonical, route === "/" ? SITE : `${SITE}${route}`, `${route}: canonical`);
    const og = h.match(/<meta property="og:image" content="([^"]+)"/)?.[1];
    assert.ok(og, `${route}: og:image`);
    assert.ok(existsSync(join(ROOT, "public", new URL(og!).pathname)), `${route}: arquivo OG ${og}`);
    assert.ok(!/href="#"/.test(h), `${route}: href="#"`);
    const ids = [...h.replace(/<script[\s\S]*?<\/script>/g, "").matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]);
    assert.deepEqual(ids.filter((id, i) => ids.indexOf(id) !== i), [], `${route}: IDs repetidos`);
  }
});

test("todas as imagens locais referenciadas existem", () => {
  for (const [route, h] of Object.entries(html)) {
    const srcs = [...h.matchAll(/\/_next\/image\?url=([^&"]+)/g)].map((m) => decodeURIComponent(m[1]));
    for (const src of new Set(srcs)) assert.ok(existsSync(join(ROOT, "public", src)), `${route}: ${src}`);
  }
});

test("checkout do combo só aparece na página do combo", () => {
  for (const [route, h] of Object.entries(html)) {
    const has = h.includes("chk.eduzz.com/pvcyogot");
    assert.equal(has, route === "/perfil-e-proposito", `${route}: checkout do combo`);
    assert.ok(!h.includes("G9618Q4YW1"), `${route}: checkout antigo do /365dias`);
  }
  assert.ok(!html["/advento/familia"].includes("chk.eduzz.com"));
  assert.ok(!html["/advento/igrejas"].includes("chk.eduzz.com"));
});

test("cada Advento tem o próprio calendário", () => {
  const fam = text["/advento/familia"];
  const igr = text["/advento/igrejas"];
  assert.ok(fam.includes("1º a 5 de dezembro") && fam.includes("20 a 25 de dezembro"));
  assert.ok(!fam.includes("15 a 21 de novembro"));
  assert.ok(igr.includes("15 a 21 de novembro") && igr.includes("a partir de 29 de novembro"));
  assert.ok(!igr.includes("1º a 5 de dezembro"));
  assert.ok(!igr.includes("29/11/26 a 15/11/26"), "erro de digitação do PDF não pode ir para o site");
});

test("os 16 títulos do combo estão na página, sem alteração", () => {
  assert.equal(ebooks.length, 16);
  for (const e of ebooks) assert.ok(text["/perfil-e-proposito"].includes(e.title), e.title);
});

test("NR-1 preservada em /nr1 com contatos, escopo e mockup identificado", () => {
  const t = text["/nr1"];
  for (const trecho of [
    "Diagnóstico de Riscos Psicossociais — DRPS",
    "Transparência sobre o escopo",
    "Não substitui avaliação clínica individual",
    "Programas para prevenção e intervenção em saúde mental no trabalho",
    "Perguntas frequentes",
    "nr1@e31.com.br",
    "Exemplo ilustrativo",
    "Conversar sobre a realidade da minha empresa",
  ]) {
    assert.ok(t.includes(trecho), trecho);
  }
  assert.ok(html["/nr1"].includes("wa.me/5549991558180"));
  assert.ok(!html["/"].includes('href="/#drps"'), "DRPS fora da NR-1 deve apontar para /nr1#drps");
});

test("home direciona para as frentes e não anuncia ofertas futuras", () => {
  assert.ok(html["/"].includes('href="/nr1"'));
  for (const h of Object.values(html)) {
    assert.ok(!/href="\/(365dias|crises)"/.test(h));
  }
  assert.ok(!text["/"].includes("365 Dias"));
});

test("sitemap e robots conforme o modo", () => {
  const sitemap = readFileSync(join(APP, "sitemap.xml.body"), "utf8");
  const robots = readFileSync(join(APP, "robots.txt.body"), "utf8");
  assert.ok(sitemap.includes(`<loc>${SITE}</loc>`));
  assert.ok(sitemap.includes(`${SITE}/nr1`) && sitemap.includes(`${SITE}/perfil-e-proposito`));
  // Ofertas pendentes (checkout/contato sem confirmação) ficam fora do sitemap
  assert.ok(!sitemap.includes("/advento"));
  assert.ok(!sitemap.includes("/analise-comportamental"));
  if (isReviewBuild) assert.match(robots, /Disallow: \//);
  else assert.match(robots, /Allow: \//);
});

test("build de produção: sem pendências, preços provisórios ou alegações não confirmadas", { skip: isReviewBuild ? "build de revisão" : false }, () => {
  const proibidos = [
    "Pendência",
    "pendente",
    "R$ 59,90",
    "R$ 49,90",
    "497",
    "garantia",
    "Garantia",
    "psicóloga",
    "20 anos",
    "14 anos",
    "25 anos",
    "centenas",
    "adequação garantida",
    "100% regularizada",
    "Live mensal",
  ];
  for (const [route, t] of Object.entries(text)) {
    for (const p of proibidos) assert.ok(!t.includes(p), `${route}: "${p}"`);
  }
  // Depoimentos sem autorização não aparecem
  assert.ok(!text["/analise-comportamental"].includes("Luh Ferrazza"));
  // Advento sem checkout: nenhum texto de compra; a escolha mostra as duas edições com o status
  for (const cta of ["Quero viver esse Advento em família", "Quero levar o Advento para meu ministério"]) {
    for (const route of ["/advento/familia", "/advento/igrejas"]) assert.ok(!text[route].includes(cta), `${route}: "${cta}"`);
  }
  assert.ok(html["/advento"].includes('href="/advento/familia"') && html["/advento"].includes('href="/advento/igrejas"'));
  assert.equal((text["/advento"].match(/Vendas desta edição ainda não abertas/g) || []).length, 2);
  // Ofertas não liberadas: noindex
  for (const route of ["/advento", "/advento/familia", "/advento/igrejas", "/analise-comportamental"]) {
    assert.match(html[route], /<meta name="robots" content="noindex/, route);
  }
  for (const route of ["/", "/nr1", "/perfil-e-proposito"]) {
    assert.match(html[route], /<meta name="robots" content="index, follow"/, route);
  }
});

test("build de revisão: nada é indexável", { skip: isReviewBuild ? false : "build de produção" }, () => {
  for (const [route, h] of Object.entries(html)) assert.match(h, /<meta name="robots" content="noindex/, route);
});

test("domínio sem www redireciona para o host principal preservando o caminho", () => {
  const manifest = JSON.parse(readFileSync(join(ROOT, ".next/routes-manifest.json"), "utf8"));
  const rule = manifest.redirects.find((r: { has?: { type: string; value: string }[] }) =>
    r.has?.some((h) => h.type === "host" && h.value === "carlagerhard.com"),
  );
  assert.ok(rule, "regra de host ausente");
  assert.equal(rule.destination, "https://www.carlagerhard.com/:path*");
  assert.equal(rule.statusCode, 308);
});
