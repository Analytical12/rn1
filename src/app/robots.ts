import type { MetadataRoute } from "next";
import { isReview, SITE_URL } from "@/config/site";

// Fora da produção (local, previews), nada é indexável.
export default function robots(): MetadataRoute.Robots {
  if (isReview) {
    return { rules: [{ userAgent: "*", disallow: "/" }] };
  }
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
