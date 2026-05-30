import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "RN1 | NR-1, DRPS e Programas Contínuos",
  description:
    "A RN1 apoia empresas com DRPS, relatórios e programas contínuos para gestão dos riscos psicossociais relacionados ao trabalho.",
  openGraph: {
    title: "RN1 | NR-1, DRPS e Programas Contínuos",
    description:
      "A RN1 apoia empresas com DRPS, relatórios e programas contínuos para gestão dos riscos psicossociais relacionados ao trabalho.",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "RN1 | NR-1, DRPS e Programas Contínuos",
    description:
      "A RN1 apoia empresas com DRPS, relatórios e programas contínuos para gestão dos riscos psicossociais relacionados ao trabalho.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={manrope.variable}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
