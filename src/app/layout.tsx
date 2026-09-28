import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import { AnalyticsRoot } from "@/components/site/AnalyticsRoot";
import { ReviewBanner } from "@/components/site/Pending";
import { allowIndexing, SITE_NAME, SITE_URL } from "@/config/site";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

// Metadados padrão. Cada rota define título, descrição, canonical e OG próprios.
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: SITE_NAME, template: `%s | ${SITE_NAME}` },
  description:
    "Carla Gerhard é psicanalista, analista comportamental e pastora. Análise comportamental, apoio a empresas na NR-1 e materiais para famílias e ministérios.",
  applicationName: SITE_NAME,
  formatDetection: { telephone: false, email: false, address: false },
  robots: allowIndexing ? undefined : { index: false, follow: false },
};

export const viewport: Viewport = {
  themeColor: "#faf7f2",
};

// Ativa o reveal da NR-1 antes da primeira pintura, só com JS e sem preferência
// por movimento reduzido. Se a página não hidratar em 2,5 s, mostra tudo.
const revealBoot = `(function(){try{var d=document.documentElement;if(!('IntersectionObserver' in window))return;if(window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;d.classList.add('js-reveal');setTimeout(function(){if(!window.__revealReady)d.classList.remove('js-reveal')},2500)}catch(e){}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={manrope.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: revealBoot }} />
      </head>
      <body className="font-sans antialiased">
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-3 focus:font-bold focus:text-black"
        >
          Pular para o conteúdo
        </a>
        {children}
        <ReviewBanner />
        <AnalyticsRoot />
      </body>
    </html>
  );
}
