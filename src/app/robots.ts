import type { MetadataRoute } from "next";
import { allowIndexing, SITE_URL } from "@/config/site";

// Fora do ambiente Production (previews, revisão), nada é indexável.
export default function robots(): MetadataRoute.Robots {
  if (!allowIndexing) {
    return { rules: [{ userAgent: "*", disallow: "/" }] };
  }
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
