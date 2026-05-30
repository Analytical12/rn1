"use client";

import { useEffect, useRef } from "react";

const badges = ["DRPS", "NR-1", "Relatórios", "Programas", "RH & Gestores"];

const mockupRows = [
  { label: "Sobrecarga", risk: "Alto", color: "#B9785F", pct: 72 },
  { label: "Comunicação", risk: "Médio", color: "#2F7D7E", pct: 48 },
  { label: "Reconhecimento", risk: "Alto", color: "#B9785F", pct: 65 },
  { label: "Autonomia", risk: "Baixo", color: "#315C4B", pct: 31 },
  { label: "Relações interpessoais", risk: "Médio", color: "#2F7D7E", pct: 53 },
];

export default function Hero() {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frame: number;
    let start: number | null = null;

    const animate = (ts: number) => {
      if (!start) start = ts;
      const elapsed = ts - start;
      const y = Math.sin(elapsed / 2000) * 7;
      if (cardRef.current) {
        cardRef.current.style.transform = `translateY(${y}px)`;
      }
      frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <section
      id="inicio"
      className="relative pt-[120px] pb-20 lg:pt-[148px] lg:pb-28 overflow-hidden"
      style={{
        background: "linear-gradient(145deg, #F7F5F0 0%, #DDEBE3 50%, #DDEAF0 100%)",
      }}
    >
      {/* Subtle background texture */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 80%, #8FAF9B22 0%, transparent 50%), radial-gradient(circle at 80% 20%, #2F7D7E18 0%, transparent 50%)",
        }}
      />

      <div className="max-w-content mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — copy */}
          <div className="flex flex-col gap-7">
            {/* Tag */}
            <div className="inline-flex items-center gap-2 self-start bg-white/80 border border-[#DDEBE3] rounded-full px-4 py-1.5 text-xs font-semibold text-[#315C4B] shadow-sm backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#315C4B] animate-pulse" />
              Saúde mental corporativa — NR-1
            </div>

            {/* H1 */}
            <h1 className="text-[2.15rem] sm:text-[2.6rem] lg:text-[3rem] font-extrabold leading-[1.15] tracking-tight text-[#1F2A2E]">
              Implementação da NR-1 e Diagnóstico de Riscos{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #315C4B, #2F7D7E)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Psicossociais
              </span>{" "}
              para Empresas
            </h1>

            {/* Subtitle */}
            <p className="text-[1.05rem] text-[#4A4A46] leading-relaxed max-w-[520px]">
              A RN1 apoia empresas na identificação, organização e gestão dos fatores
              psicossociais relacionados ao trabalho, por meio do DRPS, relatórios
              técnicos e programas contínuos de intervenção.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://wa.me/5549991558180?text=Ol%C3%A1%2C%20gostaria%20de%20conhecer%20a%20RN1."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-[#315C4B] text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-[#2F7D7E] transition-all duration-200 shadow-md hover:shadow-lg"
              >
                <svg className="w-4.5 h-4.5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Falar pelo WhatsApp
              </a>
              <a
                href="#nr1"
                className="inline-flex items-center justify-center gap-2 bg-white/80 border border-[#DDEBE3] text-[#315C4B] font-semibold px-7 py-3.5 rounded-xl hover:bg-white hover:border-[#8FAF9B] transition-all duration-200 backdrop-blur-sm"
              >
                Entender como funciona
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>

            {/* Microcopy */}
            <p className="text-xs text-[#8FAF9B] font-medium tracking-wide">
              Diagnóstico organizacional&ensp;•&ensp;Dados agregados&ensp;•&ensp;Relatórios executivos&ensp;•&ensp;Apoio ao RH e gestores
            </p>
          </div>

          {/* Right — Dashboard mockup */}
          <div ref={cardRef} className="relative">
            <div className="relative bg-white rounded-2xl shadow-xl border border-[#ECE8E1] overflow-hidden">
              {/* Card header */}
              <div className="px-5 pt-5 pb-4 border-b border-[#F0EDE7]">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-semibold text-[#8FAF9B] uppercase tracking-widest">DRPS — Relatório</span>
                  <span className="text-xs text-[#A0A09C] bg-[#F7F5F0] px-2.5 py-1 rounded-full font-medium">Dados agregados</span>
                </div>
                <p className="text-base font-bold text-[#1F2A2E]">Diagnóstico de Riscos Psicossociais</p>
                <p className="text-xs text-[#9A9A96] mt-0.5">Análise coletiva por fatores</p>
              </div>

              {/* Risk bars */}
              <div className="px-5 py-4 flex flex-col gap-3.5">
                {mockupRows.map((row) => (
                  <div key={row.label}>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-sm font-medium text-[#1F2A2E]">{row.label}</span>
                      <span
                        className="text-[11px] font-semibold px-2 py-0.5 rounded-full"
                        style={{
                          color: row.color,
                          backgroundColor: row.color + "1A",
                        }}
                      >
                        {row.risk}
                      </span>
                    </div>
                    <div className="h-1.5 bg-[#F0EDE7] rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-700"
                        style={{ width: `${row.pct}%`, backgroundColor: row.color }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Card footer */}
              <div className="px-5 py-3.5 bg-[#F7F5F0] border-t border-[#ECE8E1] flex items-center justify-between">
                <span className="text-xs text-[#9A9A96]">Análise organizacional • não clínica individual</span>
                <span className="w-2 h-2 rounded-full bg-[#315C4B]" />
              </div>
            </div>

            {/* Floating badges */}
            <div className="absolute -top-4 -right-4 flex flex-wrap gap-2 justify-end max-w-[220px]">
              {badges.map((b, i) => (
                <span
                  key={b}
                  className="bg-white border border-[#ECE8E1] text-[#315C4B] text-[11px] font-semibold px-3 py-1.5 rounded-full shadow-sm"
                  style={{ animationDelay: `${i * 0.15}s` }}
                >
                  {b}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
