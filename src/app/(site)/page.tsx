import Image from "next/image";
import Link from "next/link";
import { ContactCTA } from "@/components/site/Cta";
import { LegacyAnchorRedirect } from "@/components/site/LegacyAnchorRedirect";
import { PendingNote } from "@/components/site/Pending";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import { YouTubeFacade } from "@/components/site/YouTubeFacade";
import { mainNavLinks } from "@/components/site/nav";
import { contacts, instagramHref } from "@/config/contacts";
import { isPageListed, pageMetadata, pages } from "@/config/pages";
import { SITE_URL } from "@/config/site";

export const metadata = pageMetadata("home", {
  title: "Carla Gerhard | Comportamento, relações, empresas e família",
  description:
    "Psicanalista, analista comportamental e pastora. Análise comportamental com devolutiva, apoio a empresas na NR-1 e materiais para famílias e ministérios.",
  absoluteTitle: true,
});

type Frente = {
  audience: string;
  title: string;
  text: string;
  color: string;
  links: { href: string; label: string; productId: string }[];
};

function accentStyle(color: string) {
  return { ["--accent" as string]: color } as React.CSSProperties;
}

export default function HomePage() {
  const listed = {
    nr1: isPageListed("nr1"),
    analise: isPageListed("analise"),
    perfil: isPageListed("perfil"),
    advento: isPageListed("advento"),
    familia: isPageListed("adventoFamilia"),
    igrejas: isPageListed("adventoIgrejas"),
  };

  const frentes: Frente[] = [];
  if (listed.nr1) {
    frentes.push({
      audience: "Para empresas",
      title: "NR-1 e riscos psicossociais",
      text:
        "Diagnóstico de riscos psicossociais (DRPS), relatórios técnicos e programas contínuos para apoiar RH e gestores na gestão dos fatores psicossociais relacionados ao trabalho.",
      color: "#1f5f68",
      links: [{ href: pages.nr1.path, label: "Conhecer a atuação em NR-1", productId: "nr1" }],
    });
  }
  if (listed.analise) {
    frentes.push({
      audience: "Para pessoas, casais e equipes",
      title: "Análise comportamental e devolutiva",
      text:
        "Uma avaliação de perfil acompanhada de devolutiva com Carla, para compreender tendências de comunicação, decisão e relacionamento e pensar em como elas aparecem no dia a dia.",
      color: "#3f6848",
      links: [{ href: pages.analise.path, label: "Entender como funciona", productId: "analise_comportamental" }],
    });
  }
  const materiaisLinks: Frente["links"] = [];
  if (listed.perfil) materiaisLinks.push({ href: pages.perfil.path, label: "Combo Perfil e Propósito", productId: "combo_perfil_proposito" });
  if (listed.advento) materiaisLinks.push({ href: pages.advento.path, label: "Advento de Natal 2026", productId: "advento" });
  if (materiaisLinks.length > 0) {
    frentes.push({
      audience: "Para aprender e viver em família",
      title: "Materiais digitais e projetos cristãos",
      text: listed.advento
        ? "eBooks sobre comportamento, propósito e relações, e os materiais do Pequenas Sementes para viver o Advento em casa e no ministério infantil."
        : "eBooks sobre comportamento, propósito, família e liderança, com linguagem cristã e propostas para o dia a dia.",
      color: "#9b3d4a",
      links: materiaisLinks,
    });
  }

  const instagram = instagramHref(contacts.carlaInstagram);
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Carla Gerhard",
    url: SITE_URL,
    image: `${SITE_URL}/images/carla/carla-blazer-branco.webp`,
    jobTitle: ["Psicanalista", "Analista comportamental", "Pastora"],
    ...(instagram ? { sameAs: [instagram] } : {}),
  };

  return (
    <div className="theme-carla bg-paper">
      <LegacyAnchorRedirect />
      <SiteHeader links={mainNavLinks()} />

      <main id="conteudo" data-page-type="home">
        {/* HERO */}
        <section className="editorial-hero home-hero overflow-hidden">
          <div className="mx-auto grid max-w-content gap-8 px-4 pt-12 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:gap-14 lg:px-8 lg:pt-16">
            <div className="lg:pb-24 lg:pt-12">
              <h1>
                <span className="eyebrow block">Carla Gerhard</span>
                <span className="font-display mt-5 block text-balance text-[2.6rem] leading-[1.04] text-ink sm:text-[3.4rem] lg:text-[4.15rem]">
                  Para compreender pessoas e cuidar das relações.
                </span>
              </h1>
              <p className="mt-7 max-w-[34rem] text-[1.125rem] leading-relaxed sm:text-[1.2rem]">
                Análise comportamental, apoio a empresas e materiais para a vida em família e a caminhada cristã. Conheça
                as diferentes frentes do trabalho de Carla Gerhard.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a href="#frentes" className="btn btn-primary" data-event="cta_click" data-cta-position="hero" data-destination-type="section">
                  Conhecer serviços e materiais
                </a>
                <a href="#sobre" className="btn btn-secondary" data-event="cta_click" data-cta-position="hero" data-destination-type="section">
                  Sobre a Carla
                </a>
              </div>
              <p className="mt-8 text-[0.95rem] text-muted">Psicanalista · Analista comportamental · Pastora</p>
            </div>

            <div className="portrait-stage relative flex justify-center self-end">
              <div aria-hidden="true" className="portrait-wash absolute inset-x-[6%] bottom-0 top-[14%] rounded-t-full bg-panel" />
              <Image
                src="/images/carla/carla-blazer-branco.webp"
                width={866}
                height={1500}
                priority
                sizes="(min-width: 1024px) 350px, 260px"
                alt="Carla Gerhard, de blazer branco, com a mão apoiada no queixo"
                className="portrait-image relative h-[440px] w-auto sm:h-[520px] lg:h-[600px]"
              />
            </div>
          </div>
        </section>

        {/* FRENTES */}
        <section id="frentes" aria-labelledby="frentes-titulo" className="border-t border-line bg-paper">
          <div className="mx-auto grid max-w-content gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-8 lg:py-28">
            <div className="lg:sticky lg:top-10 lg:self-start">
              <p className="eyebrow">Frentes de trabalho</p>
              <h2 id="frentes-titulo" className="font-display mt-4 text-balance text-[2.2rem] leading-[1.1] text-ink sm:text-[2.75rem]">
                Encontre o que faz sentido para você
              </h2>
              <p className="mt-5 max-w-sm text-[1.05rem] leading-relaxed">
                Cada frente tem uma página própria, com o público, o formato e a forma de contato adequados.
              </p>
            </div>

            <ol className="border-t border-line">
              {frentes.map((frente, i) => (
                <li key={frente.title} className="grid gap-4 border-b border-line py-10 sm:grid-cols-[4.5rem_1fr] sm:gap-6">
                  <span aria-hidden="true" className="font-display text-[2.4rem] leading-none" style={{ color: frente.color }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="text-[0.85rem] font-bold uppercase tracking-[0.12em]" style={{ color: frente.color }}>
                      {frente.audience}
                    </p>
                    <h3 className="font-display mt-2 text-balance text-[1.8rem] leading-tight text-ink sm:text-[2.05rem]">{frente.title}</h3>
                    <p className="mt-3 max-w-reading text-[1.05rem] leading-relaxed">{frente.text}</p>
                    <ul className="mt-5 flex flex-wrap gap-x-8 gap-y-3">
                      {frente.links.map((link) => (
                        <li key={link.href}>
                          <Link
                            href={link.href}
                            className="link-arrow"
                            style={accentStyle(frente.color)}
                            data-event="select_item"
                            data-product-id={link.productId}
                            data-cta-position="frentes"
                            data-destination-type="page"
                          >
                            {link.label} <span aria-hidden="true">→</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* SOBRE */}
        <section id="sobre" aria-labelledby="sobre-titulo" className="bg-paper-2">
          <div className="mx-auto grid max-w-content items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 lg:px-8 lg:py-28">
            <Image
              src="/images/carla/carla-sorrindo.webp"
              width={888}
              height={840}
              sizes="(min-width: 1024px) 460px, 92vw"
              alt="Carla Gerhard sorrindo, de camisa branca"
              className="author-portrait h-auto w-full rounded-2xl"
            />
            <div>
              <p className="eyebrow">Sobre</p>
              <h2 id="sobre-titulo" className="font-display mt-4 text-[2.4rem] leading-tight text-ink sm:text-[2.9rem]">
                Carla Gerhard
              </h2>
              <p className="mt-6 max-w-reading text-[1.15rem] leading-relaxed text-ink">
                Carla Gerhard é psicanalista, analista comportamental e pastora. Seu trabalho reúne diferentes frentes de
                atuação: compreensão do comportamento, relações, apoio a organizações e produção de materiais para
                famílias e ministérios.
              </p>
              <dl className="mt-10 divide-y divide-line border-y border-line">
                <div className="grid gap-1 py-5 sm:grid-cols-[11rem_1fr] sm:gap-6">
                  <dt className="font-bold text-ink">Comportamento</dt>
                  <dd className="leading-relaxed">Análise comportamental com devolutiva para pessoas, casais e equipes.</dd>
                </div>
                <div className="grid gap-1 py-5 sm:grid-cols-[11rem_1fr] sm:gap-6">
                  <dt className="font-bold text-ink">Organizações</dt>
                  <dd className="leading-relaxed">
                    Implementação da NR-1, com diagnóstico de riscos psicossociais, relatórios e programas contínuos.
                  </dd>
                </div>
                <div className="grid gap-1 py-5 sm:grid-cols-[11rem_1fr] sm:gap-6">
                  <dt className="font-bold text-ink">Famílias e ministérios</dt>
                  <dd className="leading-relaxed">
                    Materiais do Pequenas Sementes, desenvolvidos com sua equipe para a formação espiritual das crianças,
                    em casa e na igreja.
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        {/* MATERIAIS */}
        {(listed.perfil || listed.advento) && (
          <section id="materiais" aria-labelledby="materiais-titulo">
            <div className="mx-auto max-w-content px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
              <div className="max-w-2xl">
                <p className="eyebrow">Materiais</p>
                <h2 id="materiais-titulo" className="font-display mt-4 text-balance text-[2.2rem] leading-[1.1] text-ink sm:text-[2.75rem]">
                  Para ler, estudar e viver em família
                </h2>
                <p className="mt-5 text-[1.05rem] leading-relaxed">
                  Produtos digitais com linguagem cristã. Cada um tem sua página, com o conteúdo completo e as condições
                  de compra.
                </p>
              </div>

              {listed.perfil && (
                <article className="collection-intro mt-12 grid gap-6 rounded-2xl bg-panel px-6 py-10 sm:px-10 lg:grid-cols-[auto_1fr] lg:items-center lg:gap-16 lg:px-14">
                  <p aria-hidden="true" className="font-display text-[6.5rem] leading-[0.85] text-accent sm:text-[8.5rem]">
                    16
                  </p>
                  <div>
                    <p className="eyebrow">Coleção de eBooks</p>
                    <h3 className="font-display mt-2 text-[1.9rem] leading-tight text-ink sm:text-[2.2rem]">Combo Perfil e Propósito</h3>
                    <p className="mt-3 max-w-reading text-[1.05rem] leading-relaxed">
                      Dezesseis eBooks sobre comportamento, propósito, família e liderança, com linguagem cristã e
                      propostas para levar a reflexão ao cotidiano.
                    </p>
                    <p className="mt-3 max-w-reading text-[0.98rem] leading-relaxed text-muted">
                      Entre os títulos: Descobrindo seu propósito, Harmonia conjugal através dos perfis e Lidere com propósito.
                    </p>
                    <Link
                      href={pages.perfil.path}
                      className="link-arrow mt-6"
                      data-event="select_item"
                      data-product-id="combo_perfil_proposito"
                      data-cta-position="materiais"
                      data-destination-type="page"
                    >
                      Conhecer o combo <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </article>
              )}

              {listed.advento && (
                <div className="mt-16">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                    <h3 className="font-display text-[1.7rem] leading-tight text-ink">Advento de Natal 2026 · Pequenas Sementes</h3>
                    <Link href={pages.advento.path} className="link-arrow" data-event="select_item" data-product-id="advento" data-cta-position="materiais" data-destination-type="page">
                      Comparar as duas versões <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                  <PendingNote>as duas edições estão com checkout pendente. Na publicação, cada uma só aparece aqui depois de liberada.</PendingNote>
                  <div className="mt-8 grid gap-10 md:grid-cols-2">
                    {listed.familia && (
                      <article>
                        <Image
                          src="/images/advento/familia/capa.webp"
                          width={1600}
                          height={1131}
                          sizes="(min-width: 768px) 540px, 92vw"
                          alt="Capa do Advento de Natal 2026 Pequenas Sementes para a Família"
                          className="h-auto w-full rounded-xl border border-line"
                        />
                        <h4 className="mt-5 text-[1.2rem] font-bold text-ink">Advento de Natal 2026 — Família</h4>
                        <p className="mt-2 leading-relaxed">
                          Uma caminhada de 1º a 25 de dezembro, com atividades, cartinhas, figurinhas e orientações para
                          pais e responsáveis.
                        </p>
                        <Link href={pages.adventoFamilia.path} className="link-arrow mt-4" data-event="select_item" data-product-id="advento_familia" data-cta-position="materiais" data-destination-type="page">
                          Conhecer o Advento Família <span aria-hidden="true">→</span>
                        </Link>
                      </article>
                    )}
                    {listed.igrejas && (
                      <article>
                        <Image
                          src="/images/advento/igrejas/capa.webp"
                          width={1600}
                          height={1131}
                          sizes="(min-width: 768px) 540px, 92vw"
                          alt="Capa do Advento de Natal Pequenas Sementes para o Ministério Infantil"
                          className="h-auto w-full rounded-xl border border-line"
                        />
                        <h4 className="mt-5 text-[1.2rem] font-bold text-ink">Advento de Natal 2026 — Igrejas / Ministério Infantil</h4>
                        <p className="mt-2 leading-relaxed">
                          Uma programação organizada por semanas, com orientações para professores e atividades que
                          continuam com as famílias.
                        </p>
                        <Link href={pages.adventoIgrejas.path} className="link-arrow mt-4" data-event="select_item" data-product-id="advento_igrejas" data-cta-position="materiais" data-destination-type="page">
                          Conhecer o Advento Igrejas <span aria-hidden="true">→</span>
                        </Link>
                      </article>
                    )}
                  </div>
                </div>
              )}
            </div>
          </section>
        )}

        {/* ENTREVISTAS */}
        <section aria-labelledby="entrevistas-titulo" className="border-t border-line">
          <div className="mx-auto grid max-w-content gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-8">
            <div>
              <p className="eyebrow">Entrevistas</p>
              <h2 id="entrevistas-titulo" className="font-display mt-4 text-[1.9rem] leading-tight text-ink sm:text-[2.2rem]">
                Conversas sobre análise comportamental
              </h2>
              <p className="mt-4 max-w-sm leading-relaxed">
                Participações de Carla Gerhard no podcast do canal e31 Marketing, no YouTube. Os vídeos só carregam quando
                você clica.
              </p>
            </div>
            <div className="grid gap-8 sm:grid-cols-2">
              <YouTubeFacade id="oS1B9FMj9zo" title="Podcast Análise Comportamental, com Jamille Nemerski" credit="Canal e31 Marketing · YouTube" />
              <YouTubeFacade id="U9HUrlPJc9Q" title="Podcast Análise Comportamental, com Aline Canal" credit="Canal e31 Marketing · YouTube" />
            </div>
          </div>
        </section>

        {/* CONTATO */}
        <section id="contato" aria-labelledby="contato-titulo" className="bg-paper-2">
          <div className="mx-auto max-w-content px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
            <div className="max-w-2xl">
              <p className="eyebrow">Contato</p>
              <h2 id="contato-titulo" className="font-display mt-4 text-[2.2rem] leading-[1.1] text-ink sm:text-[2.75rem]">
                Fale com a frente certa
              </h2>
              <p className="mt-5 text-[1.05rem] leading-relaxed">
                Cada assunto tem o seu canal. Assim, a mensagem chega a quem pode responder.
              </p>
            </div>

            <div className="mt-12 divide-y divide-line border-y border-line">
              {listed.nr1 && (
                <div className="grid gap-5 py-8 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-12">
                  <div>
                    <h3 className="text-[1.25rem] font-bold text-ink">Empresas e NR-1</h3>
                    <p className="mt-2 max-w-reading leading-relaxed">
                      Diagnóstico de riscos psicossociais, relatórios e programas para empresas, RH e gestores.
                    </p>
                  </div>
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                    <ContactCTA
                      contactId="nr1WhatsApp"
                      productId="nr1"
                      position="contato"
                      label="Conversar sobre a NR-1 na minha empresa"
                      message="Olá, gostaria de conversar sobre a NR-1 na minha empresa."
                    />
                    <a
                      href={`mailto:${contacts.nr1Email.address}`}
                      className="font-semibold text-ink underline underline-offset-4"
                      data-event="contact_click"
                      data-product-id="nr1"
                      data-cta-position="contato"
                      data-destination-type="email"
                    >
                      {contacts.nr1Email.address}
                    </a>
                  </div>
                </div>
              )}

              {listed.analise && (
                <div className="grid gap-5 py-8 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-12">
                  <div>
                    <h3 className="text-[1.25rem] font-bold text-ink">Análise comportamental</h3>
                    <p className="mt-2 max-w-reading leading-relaxed">
                      Atendimento individual, para casais e para grupos e equipes.{" "}
                      <Link href={pages.analise.path} className="font-semibold text-ink underline underline-offset-4">
                        Ver como funciona
                      </Link>
                    </p>
                  </div>
                  <ContactCTA
                    contactId="analiseWhatsApp"
                    productId="analise_comportamental"
                    position="contato"
                    label="Conversar sobre análise comportamental"
                    message="Olá, gostaria de saber mais sobre a análise comportamental."
                    variant="secondary"
                  />
                </div>
              )}

              {(listed.perfil || listed.advento) && (
                <div className="grid gap-5 py-8 lg:grid-cols-[1fr_auto] lg:gap-12">
                  <div>
                    <h3 className="text-[1.25rem] font-bold text-ink">Compras de materiais</h3>
                    <ul className="mt-3 max-w-reading space-y-3 leading-relaxed">
                      {listed.perfil && (
                        <li>
                          <strong className="text-ink">Combo Perfil e Propósito:</strong> a compra é processada pela Eduzz,
                          que envia a confirmação ao e-mail usado na compra.
                          <PendingNote>definir um canal de suporte próprio para compradores do combo.</PendingNote>
                        </li>
                      )}
                      {listed.advento && (
                        <li>
                          <strong className="text-ink">Advento Pequenas Sementes:</strong> dúvidas sobre o material pelo
                          direct do Instagram{" "}
                          <a
                            href={instagramHref(contacts.sementesInstagram) ?? undefined}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-semibold text-ink underline underline-offset-4"
                            data-event="contact_click"
                            data-product-id="advento"
                            data-cta-position="contato"
                            data-destination-type="instagram"
                          >
                            @{contacts.sementesInstagram.handle}
                          </a>
                          , como indicado no próprio material.
                        </li>
                      )}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
    </div>
  );
}
