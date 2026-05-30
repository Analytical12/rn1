const steps = [
  {
    n: "01",
    title: "Reunião inicial",
    desc: "Entendimento da empresa, estrutura, setores e objetivos do diagnóstico.",
  },
  {
    n: "02",
    title: "Mapeamento da empresa",
    desc: "Levantamento de contexto, porte, funções e áreas a serem avaliadas.",
  },
  {
    n: "03",
    title: "Aplicação do DRPS",
    desc: "Aplicação do diagnóstico de riscos psicossociais de forma coletiva e anonimizada.",
  },
  {
    n: "04",
    title: "Análise por fatores e setores",
    desc: "Leitura dos dados por área quando houver amostra suficiente para preservar anonimato.",
  },
  {
    n: "05",
    title: "Relatório técnico",
    desc: "Classificação dos fatores identificados por gravidade, probabilidade e nível final.",
  },
  {
    n: "06",
    title: "Indicação de programas de intervenção",
    desc: "Organização dos resultados em relatórios claros com recomendações e evidências para gestão.",
  },
  {
    n: "07",
    title: "Programas contínuos",
    desc: "Orientações iniciais para priorização de ações preventivas e corretivas.",
  },
  {
    n: "08",
    title: "Acompanhamento e revisão",
    desc: "Estruturação de programas adaptados à realidade identificada no diagnóstico.",
  },
];

export default function Solucao() {
  return (
    <section
      className="py-20 lg:py-28"
      style={{
        background: "linear-gradient(180deg, #F7F5F0 0%, #FFFFFF 100%)",
      }}
    >
      <div className="max-w-content mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-[620px] mb-14 reveal">
          <p className="text-xs font-semibold text-[#2F7D7E] uppercase tracking-widest mb-4">
            Como funciona
          </p>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-[#1F2A2E] leading-tight mb-5">
            Como o DRPS e os programas de intervenção apoiam a implementação da NR-1
          </h2>
          <p className="text-[1.05rem] text-[#4A4A46] leading-relaxed">
            O DRPS estrutura o diagnóstico dos riscos psicossociais por meio de uma
            avaliação coletiva e organizacional. Após a avaliação, o relatório consolida
            os resultados e aponta os programas de intervenção mais adequados conforme
            os riscos identificados.
          </p>
        </div>

        {/* Steps grid — 2 columns on desktop */}
        <div className="grid sm:grid-cols-2 gap-4 lg:gap-5">
          {steps.map((step, i) => (
            <div
              key={step.n}
              className={`reveal reveal-delay-${Math.min((i % 4) + 1, 6)} group flex gap-5 bg-white border border-[#ECE8E1] rounded-2xl p-6 hover:border-[#8FAF9B] hover:shadow-sm transition-all duration-300`}
            >
              {/* Number */}
              <div className="shrink-0 w-10 h-10 rounded-xl bg-[#315C4B]/8 border border-[#315C4B]/20 flex items-center justify-center">
                <span className="text-xs font-bold text-[#315C4B]">{step.n}</span>
              </div>

              {/* Content */}
              <div>
                <h3 className="text-[0.95rem] font-bold text-[#1F2A2E] mb-1.5 leading-snug">
                  {step.title}
                </h3>
                <p className="text-sm text-[#6A6A66] leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Support text */}
        <p className="text-sm text-[#8FAF9B] mt-10 text-center reveal">
          O objetivo é transformar dados em leitura executiva, apoiar RH e gestores e
          organizar uma base inicial para ações preventivas e corretivas.
        </p>
      </div>
    </section>
  );
}
