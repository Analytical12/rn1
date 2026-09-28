import { Fraunces } from "next/font/google";

// Fonte de títulos das páginas de Carla Gerhard, Análise/Perfil e Pequenas Sementes.
// A NR-1 não a carrega: mantém somente a Manrope da identidade original.
export const fraunces = Fraunces({
  subsets: ["latin"],
  axes: ["SOFT", "WONK", "opsz"],
  variable: "--font-fraunces",
  display: "swap",
});
