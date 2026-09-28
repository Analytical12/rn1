/**
 * Repasse de UTMs aprovadas para links de checkout.
 * - Apenas as chaves abaixo (nunca a query string inteira, nem gclid/fbclid).
 * - Nunca sobrescreve parâmetros que o link de checkout já traz.
 * - Só é aplicado a ofertas com checkout.forwardUtm = true (ver config/offers.ts),
 *   depois de testado com a plataforma de pagamento.
 *
 * Sem imports para permitir teste com `node --test`.
 */

export const APPROVED_UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"] as const;

export type Utm = Partial<Record<(typeof APPROVED_UTM_KEYS)[number], string>>;

export function pickUtm(search: string): Utm {
  const params = new URLSearchParams(search);
  const out: Utm = {};
  for (const key of APPROVED_UTM_KEYS) {
    const value = params
      .get(key)
      ?.replace(/[\u0000-\u001F\u007F]/g, "")
      .trim()
      .slice(0, 100);
    if (value) out[key] = value;
  }
  return out;
}

export function withUtm(href: string, utm: Utm): string {
  let url: URL;
  try {
    url = new URL(href);
  } catch {
    return href;
  }
  if (url.protocol !== "https:") return href;
  for (const key of APPROVED_UTM_KEYS) {
    const value = utm[key];
    if (value && !url.searchParams.has(key)) url.searchParams.set(key, value);
  }
  return url.href;
}
