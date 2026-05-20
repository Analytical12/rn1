import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problema from "@/components/Problema";
import Solucao from "@/components/Solucao";
import DRPS from "@/components/DRPS";
import Relatorios from "@/components/Relatorios";
import Programas from "@/components/Programas";
import SobreCarla from "@/components/SobreCarla";
import TransparenciaFAQ from "@/components/TransparenciaFAQ";
import CTAFooter from "@/components/CTAFooter";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <>
      <ScrollReveal />
      <Header />
      <main>
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
    </>
  );
}
