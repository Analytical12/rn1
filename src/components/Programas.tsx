const programas = [
  {
    title: "Gestão do estresse e prevenção ao burnout",
    desc: "Ações educativas e preventivas para lidar com sobrecarga, exaustão e limites saudáveis.",
    color: "#315C4B",
  },
  {
    title: "Saúde mental e clima organizacional",
    desc: "Intervenções para fortalecer escuta, vínculo, confiança e clima emocional.",
    color: "#2F7D7E",
  },
  {
    title: "Psicologia positiva no trabalho",
    desc: "Práticas voltadas ao reconhecimento, forças coletivas e recursos protetivos.",
    color: "#1F5F68",
  },
  {
    title: "Prevenção e manejo da ansiedade",
    desc: "Ações para psicoeducação, autorregulação e manejo de sintomas no contexto laboral.",
    color: "#315C4B",
  },
  {
    title: "Inteligência emocional para lideranças",
    desc: "Desenvolvimento de lideranças mais conscientes, respeitosas e emocionalmente maduras.",
    color: "#2F7D7E",
  },
  {
    title: "Equilíbrio vida-trabalho",
    desc: "Reflexões e práticas sobre tempo, limites, rotina e cultura de disponibilidade.",
    color: "#8FAF9B",
  },
  {
    title: "Prevenção ao assédio moral e psicológico",
    desc: "Ações educativas e preventivas para fortalecer respeito, segurança e canais adequados.",
    color: "#B9785F",
  },
  {
    title: "Apoio psicológico dentro da empresa",
    desc: "Estruturação de espaços de escuta e encaminhamento, conforme escopo acordado.",
    color: "#315C4B",
  },
  {
    title: "Avaliação psicossocial para atividades de risco",
    desc: "Apoio técnico em avaliações quando aplicável e conforme requisitos profissionais.",
    color: "#1F5F68",
  },
  {
    title: "Treinamento de RH para NR-1",
    desc: "Capacitação do RH para atuar como ponte entre norma, cuidado e gestão organizacional.",
    color: "#2F7D7E",
  },
];

export default function Programas() {
  return (
    <section
      id="programas"
      className="py-20 lg:py-28"
      style={{
        background: "linear-gradient(180deg, #F7F5F0 0%, #DDEBE3 100%)",
      }}
    >
      <div className="max-w-content mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-[620px] mb-14 reveal">
          <p className="text-xs font-semibold text-[#315C4B] uppercase tracking-widest mb-4">
            Intervenções adaptadas
          </p>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-[#1F2A2E] leading-tight mb-5">
            Programas para prevenção e intervenção em saúde mental no trabalho
          </h2>
          <p className="text-[1.05rem] text-[#4A4A46] leading-relaxed">
            A RN1 apoia a estruturação de programas adaptados à realidade da empresa,
            conforme diagnóstico, porte, setores avaliados e necessidades identificadas.
            Os programas são possibilidades de intervenção — não pacotes prontos.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {programas.map((p, i) => (
            <div
              key={p.title}
              className={`reveal reveal-delay-${Math.min((i % 3) + 1, 6)} group bg-white border border-[#ECE8E1] rounded-2xl p-5 hover:shadow-md transition-all duration-300`}
            >
              <div
                className="w-1 h-8 rounded-full mb-4 transition-all duration-300 group-hover:h-10"
                style={{ backgroundColor: p.color }}
              />
              <h3 className="text-sm font-bold text-[#1F2A2E] mb-2 leading-snug">
                {p.title}
              </h3>
              <p className="text-[13px] text-[#6A6A66] leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="mt-10 flex items-start gap-3 bg-white/70 border border-[#DDEBE3] rounded-xl px-5 py-4 reveal">
          <svg className="w-5 h-5 text-[#8FAF9B] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className="text-sm text-[#4A4A46] leading-relaxed">
            Os programas são estruturados conforme as necessidades identificadas no
            diagnóstico, e não substituem avaliação clínica individual ou
            responsabilidades técnicas da empresa.
          </p>
        </div>
      </div>
    </section>
  );
}
