import Header from "@/components/nr1/Header";
import Hero from "@/components/nr1/Hero";
import Problema from "@/components/nr1/Problema";
import Solucao from "@/components/nr1/Solucao";
import DRPS from "@/components/nr1/DRPS";
import Relatorios from "@/components/nr1/Relatorios";
import Programas from "@/components/nr1/Programas";
import SobreCarla from "@/components/nr1/SobreCarla";
import TransparenciaFAQ from "@/components/nr1/TransparenciaFAQ";
import CTAFooter from "@/components/nr1/CTAFooter";
import ScrollReveal from "@/components/nr1/ScrollReveal";
import { TrackView } from "@/components/site/TrackView";
import { pageMetadata } from "@/config/pages";

// Título e descrição preservados do site NR-1 original.
export const metadata = pageMetadata("nr1", {
  title: "RN1 | NR-1, DRPS e Programas Contínuos",
  description:
    "A RN1 apoia empresas com DRPS, relatórios e programas contínuos para gestão dos riscos psicossociais relacionados ao trabalho.",
  absoluteTitle: true,
});

export default function Nr1Page() {
  return (
    <div className="theme-nr1">
      <ScrollReveal />
      <TrackView productId="nr1" pageType="service" />
      <Header />
      <main id="conteudo" data-page-type="service">
        <Hero />
        <Problema />
        <Solucao />
        <DRPS />
        <Relatorios />
        <Programas />
        <SobreCarla />
        <TransparenciaFAQ />
      </main>
      <CTAFooter />
    </div>
  );
}
