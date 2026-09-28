import type { NextConfig } from "next";

// "production" só no deploy de produção da Vercel ou quando definido explicitamente.
// Local e previews ficam em "review", com pendências visíveis e sem indexação.
const siteMode =
  process.env.NEXT_PUBLIC_SITE_MODE === "production" ||
  (!process.env.NEXT_PUBLIC_SITE_MODE && process.env.VERCEL_ENV === "production")
    ? "production"
    : "review";

const nextConfig: NextConfig = {
  env: {
    SITE_MODE: siteMode,
  },
  // Convenção de URL: sem barra final (padrão do Next). /nr1/ redireciona para /nr1.
  trailingSlash: false,
  async redirects() {
    return [
      // Aliases discutidos antes da arquitetura final. Permanentes (308).
      { source: "/advento-familia", destination: "/advento/familia", permanent: true },
      { source: "/advento-igrejas", destination: "/advento/igrejas", permanent: true },
    ];
  },
};

export default nextConfig;
