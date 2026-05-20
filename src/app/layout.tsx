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
  title: "RN1 | Implementação da NR-1 e Diagnóstico de Riscos Psicossociais",
  description:
    "A RN1 apoia empresas na implementação da NR-1, diagnóstico de riscos psicossociais, DRPS, relatórios, evidências e programas de prevenção em saúde mental no trabalho.",
  openGraph: {
    title: "RN1 | Implementação da NR-1 e Diagnóstico de Riscos Psicossociais",
    description:
      "Diagnóstico, relatórios e programas para apoiar empresas na gestão dos fatores psicossociais relacionados ao trabalho.",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "RN1 | Implementação da NR-1 e Diagnóstico de Riscos Psicossociais",
    description:
      "A RN1 apoia empresas na implementação da NR-1, diagnóstico de riscos psicossociais, DRPS, relatórios, evidências e programas de prevenção.",
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
