import type { MetadataRoute } from "next";
import { isPagePublishable, pages, type PageEntry } from "@/config/pages";
import { SITE_URL } from "@/config/site";

// Somente páginas publicáveis pelas regras de produção: ofertas pendentes,
// rascunhos (365 Dias, Crises) e a 404 ficam de fora.
export default function sitemap(): MetadataRoute.Sitemap {
  return (Object.values(pages) as PageEntry[])
    .filter((page) => isPagePublishable(page))
    .map((page) => ({
      url: page.path === "/" ? SITE_URL : `${SITE_URL}${page.path}`,
      changeFrequency: "monthly",
      priority: page.path === "/" ? 1 : 0.8,
    }));
}
