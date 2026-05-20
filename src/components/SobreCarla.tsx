"use client";

import { useState } from "react";
import Image from "next/image";

const pontos = [
  "Psicanalista e analista comportamental há 12 anos",
  "Implementadora da NR-1",
  "Apoio a empresas, RH e gestores",
  "Diagnóstico organizacional e riscos psicossociais",
  "Programas de prevenção em saúde mental no trabalho",
];

function CarlaAvatar() {
  const [imgError, setImgError] = useState(false);

  if (imgError) {
    return (
      <div
        className="w-28 h-28 rounded-2xl flex items-center justify-center shadow-sm shrink-0"
        style={{
          background: "linear-gradient(135deg, #315C4B 0%, #2F7D7E 100%)",
        }}
      >
        <span className="text-3xl font-extrabold text-white tracking-tight">CG</span>
      </div>
    );
  }

  return (
    <div className="w-28 h-28 rounded-2xl overflow-hidden shadow-sm shrink-0 border-2 border-[#DDEBE3]">
      <Image
        src="/images/carla-gerhard.png"
        alt="Carla Gerhard — Implementadora da NR-1"
        width={112}
        height={112}
        className="w-full h-full object-cover object-top"
        onError={() => setImgError(true)}
        priority
      />
    </div>
  );
}

export default function SobreCarla() {
  return (
    <section id="sobre" className="py-20 lg:py-28 bg-white">
      <div className="max-w-content mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — card visual */}
          <div className="reveal order-2 lg:order-1">
            <div className="relative">
              {/* Background tilt shape */}
              <div
                className="absolute inset-0 rounded-3xl opacity-60"
                style={{
                  background: "linear-gradient(135deg, #DDEBE3 0%, #DDEAF0 100%)",
                  transform: "rotate(-2deg)",
                }}
              />

              {/* Card */}
              <div className="relative bg-white border border-[#ECE8E1] rounded-3xl p-8 shadow-sm">
                {/* Photo + name row */}
                <div className="flex items-start gap-5 mb-6">
                  <CarlaAvatar />
                  <div className="pt-1">
                    <p className="text-xl font-extrabold text-[#1F2A2E] mb-1 leading-tight">
                      Carla Gerhard
                    </p>
                    <p className="text-sm text-[#8FAF9B] font-semibold leading-snug">
                      Psicanalista&nbsp;•&nbsp;Analista comportamental&nbsp;•&nbsp;Implementadora da NR-1
                    </p>
                  </div>
                </div>

                {/* Points */}
                <div className="flex flex-col gap-3 mb-7">
                  {pontos.map((p) => (
                    <div key={p} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#315C4B] shrink-0" />
                      <span className="text-sm text-[#4A4A46]">{p}</span>
                    </div>
                  ))}
                </div>

                {/* Contact chips */}
                <div className="flex flex-wrap gap-2.5">
                  <a
                    href="https://wa.me/5549991558180"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#DDEBE3] text-[#315C4B] text-xs font-semibold px-3.5 py-2 rounded-full hover:bg-[#315C4B] hover:text-white transition-colors"
                  >
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                    +55 (49) 99155-8180
                  </a>
                  <a
                    href="mailto:nr1@e31.com.br"
                    className="inline-flex items-center gap-2 bg-[#DDEAF0] text-[#1F5F68] text-xs font-semibold px-3.5 py-2 rounded-full hover:bg-[#1F5F68] hover:text-white transition-colors"
                  >
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    nr1@e31.com.br
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right — text */}
          <div className="reveal reveal-delay-2 order-1 lg:order-2">
            <p className="text-xs font-semibold text-[#2F7D7E] uppercase tracking-widest mb-4">
              Quem está à frente
            </p>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#1F2A2E] leading-tight mb-6">
              Sobre Carla Gerhard
            </h2>

            <p className="text-[1.05rem] text-[#4A4A46] leading-relaxed mb-5">
              Carla Gerhard atua como psicanalista e analista comportamental há 12 anos,
              e como implementadora da NR-1, apoiando empresas na estruturação de ações
              voltadas à saúde mental, prevenção de riscos psicossociais e fortalecimento
              de ambientes de trabalho mais seguros e saudáveis.
            </p>

            <p className="text-[1.05rem] text-[#4A4A46] leading-relaxed mb-8">
              Seu trabalho conecta escuta, análise comportamental, diagnóstico
              organizacional e orientação para ações práticas junto a empresas, RH e
              gestores.
            </p>

            <a
              href="#contato"
              className="inline-flex items-center gap-2 bg-[#315C4B] text-white font-semibold px-6 py-3 rounded-xl hover:bg-[#2F7D7E] transition-colors"
            >
              Agendar conversa inicial
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
