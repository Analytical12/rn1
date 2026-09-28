import type { NextConfig } from "next";

// Modo VISUAL: "production" no ambiente Production da Vercel ou com
// NEXT_PUBLIC_SITE_MODE=production (ex.: preview da branch configurado para ter
// a aparência do lançamento). Nos demais casos, "review", com pendências visíveis.
const siteMode =
  process.env.NEXT_PUBLIC_SITE_MODE === "production" ||
  (!process.env.NEXT_PUBLIC_SITE_MODE && process.env.VERCEL_ENV === "production")
    ? "production"
    : "review";

// Indexação depende do AMBIENTE, não do modo visual: na Vercel, só o ambiente
// Production indexa. Um preview com NEXT_PUBLIC_SITE_MODE=production fica noindex.
// Fora da Vercel (build local, não publicado) segue o modo, para os testes.
const allowIndexing =
  siteMode === "production" && (process.env.VERCEL_ENV ? process.env.VERCEL_ENV === "production" : true);

const nextConfig: NextConfig = {
  env: {
    SITE_MODE: siteMode,
    SITE_INDEXING: allowIndexing ? "on" : "off",
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
