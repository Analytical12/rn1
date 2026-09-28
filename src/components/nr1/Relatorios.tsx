const relatorios = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: "Relatório consolidado",
    desc: "Visão geral dos fatores psicossociais identificados na empresa.",
    tag: "Visão geral",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: "Relatório por setor",
    desc: "Leitura setorial quando houver amostra suficiente para preservar anonimato.",
    tag: "Setorial",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
      </svg>
    ),
    title: "Matriz de risco",
    desc: "Classificação dos fatores conforme gravidade, probabilidade e nível final de risco.",
    tag: "Priorização",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    title: "Recomendações preliminares",
    desc: "Orientações iniciais para priorização de ações preventivas e corretivas.",
    tag: "Ação",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    title: "Evidências de prevenção",
    desc: "Registros organizados para apoiar acompanhamento interno e gestão.",
    tag: "Rastreabilidade",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Apoio à tomada de decisão",
    desc: "Informações mais claras para RH, gestores e responsáveis por saúde ocupacional.",
    tag: "RH & Gestão",
  },
];

export default function Relatorios() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-content mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end gap-8 mb-14">
          <div className="max-w-[560px] reveal">
            <p className="text-xs font-semibold text-[#2F7D7E] uppercase tracking-widest mb-4">
              Resultados do diagnóstico
            </p>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#1F2A2E] leading-tight mb-5">
              Relatórios para apoiar decisões de RH, gestão e saúde ocupacional
            </h2>
            <p className="text-[1.05rem] text-[#4A4A46] leading-relaxed">
              Após o diagnóstico, a RN1 organiza os resultados em relatórios claros,
              com classificação de risco, leitura por fatores, recomendações
              preliminares e evidências para acompanhamento interno.
            </p>
          </div>

          {/* Mini mockup */}
          <div className="shrink-0 reveal reveal-delay-2">
            <div className="bg-[#F7F5F0] border border-[#ECE8E1] rounded-2xl p-5 w-full lg:w-[240px]">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2.5 h-2.5 rounded-full bg-[#315C4B]" />
                <span className="text-[11px] font-semibold text-[#315C4B] uppercase tracking-widest">Relatório RN1</span>
              </div>
              <div className="flex flex-col gap-2">
                {[
                  { label: "Diagnóstico DRPS", done: true },
                  { label: "Análise por fatores", done: true },
                  { label: "Matriz de risco", done: true },
                  { label: "Recomendações", done: true },
                  { label: "Evidências", done: true },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-[#315C4B]/15 flex items-center justify-center shrink-0">
                      <svg className="w-2.5 h-2.5 text-[#315C4B]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-xs text-[#4A4A46]">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {relatorios.map((item, i) => (
            <div
              key={item.title}
              className={`reveal reveal-delay-${Math.min((i % 3) + 1, 6)} nr1-editorial-item group relative p-6 transition-all duration-300`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-9 h-9 rounded-xl bg-[#DDEBE3] text-[#315C4B] flex items-center justify-center group-hover:bg-[#315C4B] group-hover:text-white transition-all duration-300">
                  {item.icon}
                </div>
                <span className="text-[10px] font-semibold text-[#2F7D7E] bg-[#DDEAF0] px-2.5 py-1 rounded-full uppercase tracking-wide">
                  {item.tag}
                </span>
              </div>
              <h3 className="text-[0.95rem] font-bold text-[#1F2A2E] mb-2 leading-snug">
                {item.title}
              </h3>
              <p className="text-base lg:text-[0.95rem] text-[#5A5A56] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
