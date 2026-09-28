import type { Metadata } from "next";
import { getOffer, isIndexable, type OfferId } from "./offers";
import { allowIndexing, isReview, SITE_NAME } from "./site";

export type PageType = "home" | "service" | "product" | "product_chooser";

export interface PageEntry {
  path: string;
  pageType: PageType;
  offerIds: OfferId[];
  ogImage: string;
  ogAlt: string;
}

export const pages = {
  home: {
    path: "/",
    pageType: "home",
    offerIds: [],
    ogImage: "/og/home.jpg",
    ogAlt: "Carla Gerhard",
  },
  nr1: {
    path: "/nr1",
    pageType: "service",
    offerIds: ["nr1"],
    ogImage: "/og/nr1.jpg",
    ogAlt: "Carla Gerhard, implementadora da NR-1",
  },
  analise: {
    path: "/analise-comportamental",
    pageType: "service",
    offerIds: ["analise_comportamental"],
    ogImage: "/og/analise-comportamental.jpg",
    ogAlt: "Carla Gerhard, analista comportamental",
  },
  perfil: {
    path: "/perfil-e-proposito",
    pageType: "product",
    offerIds: ["combo_perfil_proposito"],
    ogImage: "/og/perfil-e-proposito.jpg",
    ogAlt: "Carla Gerhard, autora do Combo Perfil e Propósito",
  },
  advento: {
    path: "/advento",
    pageType: "product_chooser",
    offerIds: ["advento_familia", "advento_igrejas"],
    ogImage: "/og/advento.jpg",
    ogAlt: "Capas do Advento de Natal 2026 Pequenas Sementes: Família e Igrejas",
  },
  adventoFamilia: {
    path: "/advento/familia",
    pageType: "product",
    offerIds: ["advento_familia"],
    ogImage: "/og/advento-familia.jpg",
    ogAlt: "Capa do Advento de Natal 2026 Pequenas Sementes para a Família",
  },
  adventoIgrejas: {
    path: "/advento/igrejas",
    pageType: "product",
    offerIds: ["advento_igrejas"],
    ogImage: "/og/advento-igrejas.jpg",
    ogAlt: "Capa do Advento de Natal Pequenas Sementes para o Ministério Infantil",
  },
} as const satisfies Record<string, PageEntry>;

export type PageKey = keyof typeof pages;

/** Regras de publicação (independem do modo): home sempre; demais conforme as ofertas. */
export function isPagePublishable(page: PageEntry): boolean {
  if (page.offerIds.length === 0) return true;
  return page.offerIds.some((id) => isIndexable(getOffer(id)));
}

/** Menu, rodapé e home só listam páginas publicáveis (na revisão, todas). */
export function isPageListed(key: PageKey): boolean {
  return isReview || isPagePublishable(pages[key]);
}

export function pageMetadata(
  key: PageKey,
  { title, description, absoluteTitle = false }: { title: string; description: string; absoluteTitle?: boolean },
): Metadata {
  const page: PageEntry = pages[key];
  const indexable = allowIndexing && isPagePublishable(page);
  const fullTitle = absoluteTitle ? title : `${title} | ${SITE_NAME}`;
  return {
    title: { absolute: fullTitle },
    description,
    alternates: { canonical: page.path },
    robots: indexable ? { index: true, follow: true } : { index: false, follow: allowIndexing },
    openGraph: {
      type: "website",
      locale: "pt_BR",
      siteName: SITE_NAME,
      url: page.path,
      title: fullTitle,
      description,
      images: [{ url: page.ogImage, width: 1200, height: 630, alt: page.ogAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [page.ogImage],
    },
  };
}
