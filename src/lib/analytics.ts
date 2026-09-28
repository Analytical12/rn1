/**
 * Contrato de eventos do site. Os eventos vão apenas para window.dataLayer;
 * nenhum dado sai do navegador enquanto o GTM não for carregado (o que só
 * acontece com ID configurado e consentimento). Ver docs/RASTREAMENTO_PARA_CLAUDE.md.
 *
 * Este arquivo não importa nada do projeto para poder ser testado com
 * `node --test` sem bundler.
 */

export const SITE_EVENTS = [
  "page_view",
  "view_item",
  "select_item",
  "cta_click",
  "checkout_click",
  "contact_click",
  "preview_open",
] as const;

/**
 * Eventos que dependem de confirmação externa. O site NÃO os dispara a partir
 * de cliques: generate_lead só quando um lead é efetivamente registrado (não há
 * formulário nesta versão) e purchase só a partir do checkout/webhook.
 */
export const CONFIRMED_EVENTS = ["generate_lead", "purchase"] as const;

export type SiteEvent = (typeof SITE_EVENTS)[number];

export const ALLOWED_PARAMS = [
  "product_id",
  "page_type",
  "cta_position",
  "destination_type",
  "currency",
  "value",
] as const;

export type EventParams = Partial<Record<(typeof ALLOWED_PARAMS)[number], string | number>>;

const TOKEN = /^[a-z0-9_]{1,48}$/;

/** Mantém somente parâmetros do contrato, com formatos seguros. Nada de PII. */
export function sanitizeParams(input: Record<string, unknown>): EventParams {
  const out: EventParams = {};
  for (const key of ALLOWED_PARAMS) {
    const raw = input[key];
    if (raw === undefined || raw === null || raw === "") continue;
    if (key === "value") {
      const n = typeof raw === "number" ? raw : Number(raw);
      if (Number.isFinite(n) && n >= 0 && n < 100000) out.value = Math.round(n * 100) / 100;
      continue;
    }
    if (key === "currency") {
      if (typeof raw === "string" && /^[A-Z]{3}$/.test(raw)) out.currency = raw;
      continue;
    }
    if (typeof raw === "string" && TOKEN.test(raw)) out[key] = raw;
  }
  // value sem moeda não é enviado
  if (out.value !== undefined && !out.currency) delete out.value;
  return out;
}

export function isSiteEvent(name: string): name is SiteEvent {
  return (SITE_EVENTS as readonly string[]).includes(name);
}

type DataLayerWindow = { dataLayer?: unknown[] };

export function pushEvent(name: string, params: Record<string, unknown> = {}): void {
  if (typeof window === "undefined") return;
  if (!isSiteEvent(name)) return; // purchase/generate_lead nunca por aqui
  const w = window as unknown as DataLayerWindow;
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push({ event: name, ...sanitizeParams(params) });
}
