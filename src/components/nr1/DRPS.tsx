const fatores = [
  "Assédio de qualquer natureza no trabalho",
  "Falta de suporte e apoio organizacional",
  "Má gestão de mudanças organizacionais",
  "Baixa clareza de papel e função",
  "Baixas recompensas e reconhecimento",
  "Baixo controle e autonomia",
  "Baixa justiça organizacional",
  "Eventos violentos ou traumáticos",
  "Baixa demanda e subcarga",
  "Excesso de demandas e sobrecarga",
  "Relações interpessoais no trabalho",
  "Comunicação organizacional",
  "Trabalho remoto e isolamento",
];

export default function DRPS() {
  return (
    <section
      id="drps"
      className="py-20 lg:py-28"
      style={{
        background: "linear-gradient(170deg, #1F2A2E 0%, #315C4B 100%)",
      }}
    >
      <div className="max-w-content mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-[660px] mb-14 reveal">
          <p className="text-xs font-semibold text-[#8FAF9B] uppercase tracking-widest mb-4">
            Ferramenta de diagnóstico
          </p>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-white leading-tight mb-5">
            Diagnóstico de Riscos Psicossociais — DRPS
          </h2>
          <p className="text-[1.05rem] text-[#DDEBE3] leading-relaxed">
            O DRPS é uma ferramenta de diagnóstico organizacional para mapear fatores
            psicossociais percebidos pelos colaboradores. O foco é{" "}
            <strong className="text-white">coletivo e organizacional</strong>, não
            clínico individual.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 items-start">
          {/* Left — What DRPS allows */}
          <div className="reveal">
            <h3 className="text-lg font-bold text-white mb-6">
              O que o DRPS permite identificar
            </h3>

            <div className="flex flex-col gap-3">
              {fatores.map((fator, i) => (
                <div
                  key={fator}
                  className="flex items-start gap-3 group"
                >
                  <div className="shrink-0 mt-0.5 w-5 h-5 rounded-full bg-[#8FAF9B]/20 border border-[#8FAF9B]/40 flex items-center justify-center">
                    <span className="text-[9px] font-bold text-[#8FAF9B]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <p className="text-base lg:text-[0.95rem] text-[#DDEBE3] leading-relaxed group-hover:text-white transition-colors">
                    {fator}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Info cards */}
          <div className="flex flex-col gap-5 reveal reveal-delay-2">
            <div className="bg-white/8 border border-white/12 rounded-2xl p-6 backdrop-blur-sm">
              <div className="w-9 h-9 rounded-xl bg-[#8FAF9B]/20 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-[#8FAF9B]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-base font-bold text-white mb-2">Aplicação coletiva</h3>
              <p className="text-base lg:text-[0.95rem] text-[#DDEBE3] leading-relaxed">
                O diagnóstico é aplicado por link, sem coleta de dados individuais como
                nome, CPF, e-mail ou matrícula, conforme escopo definido.
              </p>
            </div>

            <div className="bg-white/8 border border-white/12 rounded-2xl p-6 backdrop-blur-sm">
              <div className="w-9 h-9 rounded-xl bg-[#2F7D7E]/30 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-[#DDEAF0]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-base font-bold text-white mb-2">Análise por fatores e setores</h3>
              <p className="text-base lg:text-[0.95rem] text-[#DDEBE3] leading-relaxed">
                Os resultados são analisados de forma agregada, com leitura por setor
                quando houver amostra suficiente para preservar o anonimato.
              </p>
            </div>

            <div className="bg-white/8 border border-white/12 rounded-2xl p-6 backdrop-blur-sm">
              <div className="w-9 h-9 rounded-xl bg-[#B9785F]/20 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-[#B9785F]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h3 className="text-base font-bold text-white mb-2">Orientado à gestão organizacional</h3>
              <p className="text-base lg:text-[0.95rem] text-[#DDEBE3] leading-relaxed">
                A análise deve ser interpretada de forma agregada e orientada à gestão
                organizacional. Não é diagnóstico clínico ou psicológico individual.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
