/**
 * Regras comerciais das ofertas, sem dependências de execução (testáveis com
 * `node --test`). `offers.ts` aplica estas regras ao modo do site e aos contatos.
 */
import type { Offer } from "./offers";

type Rules = Pick<Offer, "status" | "conversion" | "price" | "checkout" | "contact">;

export function checkoutHref(offer: Pick<Offer, "checkout">): string | null {
  if (!offer.checkout) return null;
  try {
    const url = new URL(offer.checkout.url);
    return url.protocol === "https:" && !url.username && !url.password ? url.href : null;
  } catch {
    return null;
  }
}

function isValidAmount(amount: unknown): amount is number {
  return typeof amount === "number" && Number.isFinite(amount) && amount > 0;
}

/** Valor confirmado: preço presente, status "current" e número finito maior que zero. */
export function confirmedPrice(offer: Pick<Offer, "price">): number | null {
  const price = offer.price;
  if (!price || price.status !== "current") return null;
  return isValidAmount(price.amount) ? price.amount : null;
}

/** Produto pago à venda: liberado, com checkout válido e preço confirmado. */
export function isSellable(offer: Rules): boolean {
  return (
    offer.status === "published" &&
    offer.conversion === "checkout" &&
    checkoutHref(offer) !== null &&
    confirmedPrice(offer) !== null
  );
}

/** Serviço por contato: não depende de preço público. */
export function isConversionReady(offer: Rules, contactConfirmed: boolean): boolean {
  if (offer.conversion === "checkout") return isSellable(offer);
  if (offer.conversion === "contact") return offer.contact !== null && contactConfirmed;
  return false;
}

export function isIndexable(offer: Rules, contactConfirmed: boolean): boolean {
  return offer.status === "published" && isConversionReady(offer, contactConfirmed);
}

/**
 * Revisão: mostra qualquer valor numérico válido (inclusive de trabalho ou
 * provisório, sempre com marcação na página). Produção: só preço confirmado
 * de oferta liberada.
 */
export function shouldShowPrice(offer: Rules, reviewMode: boolean): boolean {
  if (!offer.price || !isValidAmount(offer.price.amount)) return false;
  if (reviewMode) return true;
  return offer.status === "published" && confirmedPrice(offer) !== null;
}
