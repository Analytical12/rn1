/**
 * Configuração geral do site.
 *
 * SITE_MODE é resolvido em next.config.ts no momento do build:
 * - "production": deploy de produção na Vercel (VERCEL_ENV=production) ou
 *   NEXT_PUBLIC_SITE_MODE=production. Pendências ficam ocultas e ofertas sem
 *   checkout/contato confirmado não exibem botão de compra nem são indexadas.
 * - "review": qualquer outro ambiente (local, preview). Pendências aparecem
 *   marcadas na própria página para revisão.
 */
export const SITE_URL = "https://www.carlagerhard.com";
export const SITE_NAME = "Carla Gerhard";

export type SiteMode = "review" | "production";

export const SITE_MODE: SiteMode =
  process.env.SITE_MODE === "production" ? "production" : "review";

export const isReview = SITE_MODE === "review";

/** Só o ambiente Production da Vercel é indexável (ver next.config.ts). */
export const allowIndexing = process.env.SITE_INDEXING === "on";

/**
 * Integrações de medição. Nenhum ID é inventado: sem valor válido, nenhum
 * script de terceiros é carregado e o aviso de consentimento não aparece.
 * GA4 e Meta devem ser configurados DENTRO do GTM (ver docs/RASTREAMENTO_PARA_CLAUDE.md),
 * para não duplicar tags.
 */
const gtmId = process.env.NEXT_PUBLIC_GTM_ID ?? "";
export const analyticsConfig = {
  gtmId: /^GTM-[A-Z0-9]{4,12}$/.test(gtmId) ? gtmId : "",
};
