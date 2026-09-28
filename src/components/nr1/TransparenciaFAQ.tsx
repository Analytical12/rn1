const limites = [
  "Não substitui a responsabilidade formal da empresa no GRO/PGR",
  "Não substitui avaliação clínica individual",
  "Não promete conformidade automática",
  "Não elimina riscos jurídicos por si só",
  "Não substitui SESMT, jurídico, contabilidade ou medicina do trabalho",
  "Não faz diagnóstico individual de colaboradores sem processo específico",
  "Não dispensa análise técnica individualizada da realidade da empresa",
];

const faqs = [
  {
    q: "O que são riscos psicossociais?",
    a: "São fatores relacionados à organização, gestão, relações e condições de trabalho que podem impactar saúde mental, física e social dos trabalhadores.",
  },
  {
    q: "O que é DRPS?",
    a: "É um diagnóstico organizacional dos riscos psicossociais, voltado à análise coletiva dos fatores percebidos pelos colaboradores.",
  },
  {
    q: "O DRPS identifica colaboradores individualmente?",
    a: "Não. O foco é coletivo e organizacional. A análise deve ser feita de forma agregada e com cuidado para preservar anonimato.",
  },
  {
    q: "O relatório substitui o PGR?",
    a: "Não. O relatório apoia a gestão e organização de evidências, mas não substitui a responsabilidade formal da organização no GRO/PGR.",
  },
  {
    q: "O diagnóstico garante conformidade?",
    a: "Não. Ele apoia o processo de gestão, mas a conformidade depende de conjunto maior de ações, responsáveis técnicos, documentação e acompanhamento.",
  },
  {
    q: "Quais setores devem participar?",
    a: "A definição depende da estrutura da empresa, exposição percebida, porte, funções e objetivos do diagnóstico.",
  },
  {
    q: "O que acontece depois do diagnóstico?",
    a: "Os resultados são analisados, classificados e transformados em recomendações preliminares, relatórios e possíveis programas de intervenção.",
  },
  {
    q: "O DRPS também oferece programas de prevenção?",
    a: "O DRPS é o Diagnóstico de Riscos Psicossociais. Após a avaliação, é elaborado um relatório completo com os fatores identificados. A partir desse resultado, são apontados os programas de intervenção e prevenção mais adequados para a realidade da empresa. O DRPS não é um programa de intervenção em si; ele é a etapa de diagnóstico.",
  },
  {
    q: "O colaborador precisa fazer login?",
    a: "Não. O diagnóstico pode ser aplicado por link, sem coleta de nome, CPF, e-mail ou matrícula, conforme escopo definido.",
  },
  {
    q: "Como contratar uma avaliação inicial?",
    a: "Entre em contato pelo WhatsApp ou e-mail para agendar uma conversa inicial.",
  },
];

// <details> nativo: acessível por teclado, sem altura máxima que corte respostas longas.
function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  return (
    <details className="faq-item group border-b border-[#ECE8E1] last:border-0">
      <summary className="w-full flex items-center justify-between gap-4 py-4 text-left">
        <span className="flex items-center gap-3">
          <span className="text-[11px] font-bold text-[#5E7F6B] w-6 shrink-0">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="text-[0.95rem] font-semibold text-[#1F2A2E] group-hover:text-[#315C4B] transition-colors leading-snug">
            {q}
          </span>
        </span>
        <span
          aria-hidden="true"
          className="faq-icon shrink-0 w-6 h-6 rounded-full border border-[#ECE8E1] flex items-center justify-center transition-all duration-300 bg-[#F7F5F0] group-open:bg-[#315C4B] group-open:border-[#315C4B]"
        >
          <svg
            className="w-3 h-3 transition-colors text-[#4A4A46] group-open:text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
        </span>
      </summary>
      <p className="text-[0.95rem] text-[#5A5A56] leading-relaxed pl-9 pb-4">{a}</p>
    </details>
  );
}

export default function TransparenciaFAQ() {
  return (
    <>
      {/* Transparência */}
      <section
        className="py-20 lg:py-24"
        style={{
          background: "linear-gradient(180deg, #DDEBE3 0%, #F7F5F0 100%)",
        }}
      >
        <div className="max-w-content mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="reveal">
              <p className="text-xs font-semibold text-[#315C4B] uppercase tracking-widest mb-4">
                Clareza antes de tudo
              </p>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-[#1F2A2E] leading-tight mb-5">
                Transparência sobre o escopo
              </h2>
              <p className="text-[1.05rem] text-[#4A4A46] leading-relaxed">
                A RN1 apoia o processo de diagnóstico, organização de evidências,
                relatórios e programas, mas não substitui responsabilidades técnicas e
                organizacionais da empresa.
              </p>
            </div>

            <div className="reveal reveal-delay-2">
              <div className="bg-white border border-[#ECE8E1] rounded-2xl p-6">
                <p className="text-sm font-bold text-[#1F2A2E] mb-4">A RN1 não:</p>
                <div className="flex flex-col gap-3">
                  {limites.map((limite) => (
                    <div key={limite} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#ECE8E1] flex items-center justify-center shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-[#8FAF9B]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </div>
                      <p className="text-base lg:text-[0.95rem] text-[#4A4A46] leading-relaxed">{limite}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 lg:py-28 bg-white">
        <div className="max-w-content mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_1.6fr] gap-12 items-start">
            <div className="reveal lg:sticky lg:top-24">
              <p className="text-xs font-semibold text-[#2F7D7E] uppercase tracking-widest mb-4">
                Dúvidas frequentes
              </p>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-[#1F2A2E] leading-tight mb-5">
                Perguntas frequentes
              </h2>
              <p className="text-[1rem] text-[#4A4A46] leading-relaxed mb-7">
                Respostas diretas sobre diagnóstico, DRPS, relatórios e escopo de atuação
                da RN1.
              </p>
              <a
                href="#contato"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#315C4B] hover:text-[#2F7D7E] transition-colors"
              >
                Ainda tem dúvidas? Fale conosco
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>

            <div className="reveal reveal-delay-2 bg-[#F7F5F0] rounded-2xl border border-[#ECE8E1] px-6 py-2">
              {faqs.map((faq, i) => (
                <FAQItem key={faq.q} q={faq.q} a={faq.a} index={i} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
