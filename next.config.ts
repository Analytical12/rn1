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
      // Domínio sem www -> host principal, preservando caminho e query string.
      // Só tem efeito quando carlagerhard.com apontar para este projeto na Vercel
      // (ver docs/DOMINIO.md). O redirecionamento de domínio no painel da Vercel
      // faz o mesmo antes de chegar aqui; os dois não conflitam.
      {
        source: "/:path*",
        has: [{ type: "host", value: "carlagerhard.com" }],
        destination: "https://www.carlagerhard.com/:path*",
        permanent: true,
      },
      // Aliases discutidos antes da arquitetura final. Permanentes (308).
      { source: "/advento-familia", destination: "/advento/familia", permanent: true },
      { source: "/advento-igrejas", destination: "/advento/igrejas", permanent: true },
    ];
  },
};

export default nextConfig;
