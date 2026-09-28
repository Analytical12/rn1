import { contacts, type ContactId } from "./contacts";
import { isReview } from "./site";

/**
 * Fonte única de nomes, preços, checkouts, contatos e estado comercial.
 *
 * status:
 * - "published": oferta liberada. Vai ao ar e é indexada quando a conversão
 *   (checkout ou contato) estiver configurada.
 * - "pending": página existe para revisão, mas a compra não é ativada na
 *   publicação e a página não é indexada.
 * - "draft": sem página, fora do menu e do sitemap.
 *
 * price.status:
 * - "current": preço da oferta vigente (exibido em produção quando liberada).
 * - "working": valor de trabalho da conversa, ainda não é decisão comercial.
 * - "provisional": sujeito a confirmação final.
 */
export type OfferId =
  | "nr1"
  | "analise_comportamental"
  | "combo_perfil_proposito"
  | "advento_familia"
  | "advento_igrejas"
  | "devocional_365_dias"
  | "crises";

export type OfferKind = "service" | "digital_product";
export type OfferStatus = "published" | "pending" | "draft";
export type PriceStatus = "current" | "working" | "provisional";

export interface Offer {
  id: OfferId;
  name: string;
  shortName: string;
  path: string | null;
  kind: OfferKind;
  status: OfferStatus;
  conversion: "contact" | "checkout" | null;
  price: { amount: number; currency: "BRL"; status: PriceStatus; source: string } | null;
  checkout: { url: string; platform: string; forwardUtm: boolean } | null;
  contact: ContactId | null;
  confirmed: string[];
  pending: string[];
}

export const offers: Record<OfferId, Offer> = {
  nr1: {
    id: "nr1",
    name: "NR-1 e riscos psicossociais (RN1)",
    shortName: "NR-1",
    path: "/nr1",
    kind: "service",
    status: "published",
    conversion: "contact",
    price: null,
    checkout: null,
    contact: "nr1WhatsApp",
    confirmed: [
      "Conteúdo, escopo e contatos preservados do site NR-1 publicado.",
    ],
    pending: [
      "Confirmar \"há 12 anos\" em Sobre Carla: outras páginas antigas citam 8, 20 e 23 anos.",
      "Revisar descrições das etapas 06 a 08 em \"Como funciona\": parecem deslocadas uma posição.",
    ],
  },
  analise_comportamental: {
    id: "analise_comportamental",
    name: "Análise comportamental com devolutiva",
    shortName: "Análise comportamental",
    path: "/analise-comportamental",
    kind: "service",
    status: "published",
    conversion: "contact",
    price: null,
    checkout: null,
    contact: "analiseWhatsApp",
    confirmed: [
      "Modalidades: individual, casais, grupos e equipes.",
      "Plataforma de avaliação informada: Sólides (Profiler).",
    ],
    pending: [
      "Canal de contato para agendamento (WhatsApp ou outro).",
      "Autorização para publicar os depoimentos antigos, com contexto.",
      "Duração, valores e formato (online/presencial) não são publicados até confirmação.",
    ],
  },
  combo_perfil_proposito: {
    id: "combo_perfil_proposito",
    name: "Combo Perfil e Propósito",
    shortName: "Perfil e Propósito",
    path: "/perfil-e-proposito",
    kind: "digital_product",
    status: "published",
    conversion: "checkout",
    price: {
      amount: 97,
      currency: "BRL",
      status: "current",
      source: "Oferta vigente em carlagerhard.com.br (setembro/2026).",
    },
    checkout: {
      // Pertence SOMENTE ao combo. Não reutilizar em outras ofertas.
      url: "https://chk.eduzz.com/pvcyogot",
      platform: "Eduzz",
      forwardUtm: false,
    },
    contact: null,
    confirmed: [
      "16 eBooks (títulos preservados da oferta).",
      "Checkout fornecido: https://chk.eduzz.com/pvcyogot (pagamento não testado nesta entrega).",
    ],
    pending: [
      "Validar extras antigos: live mensal, testes de perfis, exercícios aplicados.",
      "Validar garantia de 7 dias e condições de parcelamento no checkout.",
      "Preço de referência \"De R$497\" não é exibido (desconto sem confirmação).",
      "A página antiga /365dias/ vende o combo com outro checkout (chk.eduzz.com/G9618Q4YW1): confirmar qual checkout é o vigente.",
      "Canal de suporte para compradores do combo.",
    ],
  },
  advento_familia: {
    id: "advento_familia",
    name: "Advento de Natal 2026 — Família",
    shortName: "Advento Família",
    path: "/advento/familia",
    kind: "digital_product",
    status: "pending",
    conversion: "checkout",
    price: {
      amount: 59.9,
      currency: "BRL",
      status: "working",
      source: "Valor de trabalho da conversa comercial.",
    },
    checkout: null,
    contact: null,
    confirmed: [
      "Conteúdo conferido no PDF final da edição Família (143 páginas).",
      "Uso doméstico da família compradora (PDF, p. 2).",
    ],
    pending: [
      "URL do checkout da edição Família.",
      "Confirmação do preço (R$ 59,90 é valor de trabalho).",
      "Forma de entrega e canal de suporte da plataforma de pagamento.",
      "Revisão editorial do PDF, p. 79: atividade cita filme \"na igreja\" num dia vivido em casa.",
    ],
  },
  advento_igrejas: {
    id: "advento_igrejas",
    name: "Advento de Natal 2026 — Igrejas / Ministério Infantil",
    shortName: "Advento Igrejas",
    path: "/advento/igrejas",
    kind: "digital_product",
    status: "pending",
    conversion: "checkout",
    price: {
      amount: 49.9,
      currency: "BRL",
      status: "provisional",
      source: "Valor de trabalho, sujeito a confirmação final.",
    },
    checkout: null,
    contact: null,
    confirmed: [
      "Conteúdo conferido no PDF final da edição Igreja (160 páginas).",
      "Seis semanas, de 15/11/2026 ao Natal, com 25 etapas.",
    ],
    pending: [
      "URL do checkout da edição Igrejas.",
      "Confirmação final do preço (R$ 49,90 é provisório).",
      "Termos de licença por igreja/congregação/filial (o PDF, p. 2, não define).",
      "Forma de entrega: o manual (p. 15) diz que o material completo é disponibilizado a partir da 3ª semana.",
      "Corrigir no PDF o período da semana 3 (\"29/11/26 a 15/11/26\", pp. 66, 67, 70 e 75).",
    ],
  },
  devocional_365_dias: {
    id: "devocional_365_dias",
    name: "365 Dias de Transformação",
    shortName: "365 Dias",
    path: null, // rota futura /365dias
    kind: "digital_product",
    status: "draft",
    conversion: null,
    price: null,
    checkout: null,
    contact: null,
    confirmed: [],
    pending: [
      "Conteúdo, capa, preço e checkout aprovados.",
      "Atenção: a página antiga carlagerhard.com.br/365dias/ exibe o Combo Perfil e Propósito, não o devocional.",
    ],
  },
  crises: {
    id: "crises",
    name: "Crise – Uma oportunidade",
    shortName: "Crises",
    path: null, // rota futura /crises
    kind: "digital_product",
    status: "draft",
    conversion: null,
    price: null,
    checkout: null,
    contact: null,
    confirmed: ["O eBook \"Crise – Uma oportunidade\" integra o Combo Perfil e Propósito."],
    pending: [
      "Confirmar se haverá oferta avulsa; conteúdo, preço e checkout.",
      "A página antiga /diagnostico-crises/ vende outro guia (R$ 27,90) com depoimentos não verificados: não reaproveitar.",
    ],
  },
};

export function getOffer(id: OfferId): Offer {
  return offers[id];
}

export function checkoutHref(offer: Offer): string | null {
  if (!offer.checkout) return null;
  try {
    const url = new URL(offer.checkout.url);
    return url.protocol === "https:" && !url.username && !url.password ? url.href : null;
  } catch {
    return null;
  }
}

export function isSellable(offer: Offer): boolean {
  return offer.status === "published" && offer.conversion === "checkout" && checkoutHref(offer) !== null;
}

export function isContactReady(offer: Offer): boolean {
  if (offer.conversion !== "contact" || !offer.contact) return false;
  return contacts[offer.contact].status === "confirmed";
}

export function isConversionReady(offer: Offer): boolean {
  return offer.conversion === "checkout" ? isSellable(offer) : isContactReady(offer);
}

export function isIndexable(offer: Offer): boolean {
  return offer.status === "published" && isConversionReady(offer);
}

/** Em produção, preço só aparece em oferta liberada. Na revisão, sempre (com marcação). */
export function shouldShowPrice(offer: Offer): boolean {
  if (!offer.price) return false;
  return isReview || offer.status === "published";
}

export function formatPrice(amount: number, currency = "BRL"): string {
  return new Intl.NumberFormat("pt-BR", { style: "currency", currency }).format(amount);
}

export const priceStatusLabel: Record<PriceStatus, string> = {
  current: "preço da oferta vigente",
  working: "valor de trabalho, ainda não confirmado",
  provisional: "valor provisório, sujeito a confirmação final",
};
