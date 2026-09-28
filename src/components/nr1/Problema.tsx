const problemas = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: "Afastamentos e adoecimento emocional",
    desc: "Fatores psicossociais mal identificados podem contribuir para sofrimento, afastamentos e perda de capacidade produtiva.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Sobrecarga e pressão excessiva",
    desc: "Demandas desorganizadas, pressão contínua e ausência de pausas podem elevar o risco de esgotamento.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
      </svg>
    ),
    title: "Assédio moral e psicológico",
    desc: "Ambientes com violência, humilhação ou medo exigem identificação, prevenção e medidas estruturadas.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    title: "Falhas de comunicação e liderança",
    desc: "Ruídos, cobranças pouco claras e baixa escuta dificultam o trabalho e fragilizam vínculos.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
    title: "Baixo reconhecimento",
    desc: "A falta de reconhecimento e justiça organizacional pode impactar engajamento, pertencimento e clima.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Clima organizacional fragilizado",
    desc: "Relações tensas, conflitos recorrentes e baixa confiança reduzem segurança psicológica.",
  },
];

export default function Problema() {
  return (
    <section id="nr1" className="py-20 lg:py-28 bg-white">
      <div className="max-w-content mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-[640px] mb-14 reveal">
          <p className="text-xs font-semibold text-[#2F7D7E] uppercase tracking-widest mb-4">
            Por que isso importa
          </p>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-[#1F2A2E] leading-tight mb-5">
            Por que sua empresa precisa olhar para os riscos psicossociais
          </h2>
          <p className="text-[1.05rem] text-[#4A4A46] leading-relaxed">
            A saúde mental no trabalho deixou de ser uma pauta paralela. Sobrecarga,
            conflitos, assédio, falhas de comunicação, baixa clareza de função e
            adoecimento emocional impactam pessoas, produtividade, clima e gestão.
          </p>
          <p className="text-[1.05rem] text-[#4A4A46] leading-relaxed mt-3">
            O DRPS ajuda empresas a organizar esse processo com método, escuta
            estruturada, análise por fatores e relatórios que apoiam decisões
            responsáveis.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {problemas.map((item, i) => (
            <div
              key={item.title}
              className={`reveal reveal-delay-${Math.min(i + 1, 6)} nr1-editorial-item group p-6 transition-all duration-300 cursor-default`}
            >
              <div className="w-9 h-9 rounded-xl bg-[#DDEBE3] text-[#315C4B] flex items-center justify-center mb-4 group-hover:bg-[#315C4B] group-hover:text-white transition-all duration-300">
                {item.icon}
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
