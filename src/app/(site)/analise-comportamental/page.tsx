import Image from "next/image";
import Link from "next/link";
import { ContactCTA } from "@/components/site/Cta";
import { Faq, type FaqEntry } from "@/components/site/Faq";
import { LandingHeader } from "@/components/site/LandingHeader";
import { PendingNote } from "@/components/site/Pending";
import { SiteFooter } from "@/components/site/SiteFooter";
import { TrackView } from "@/components/site/TrackView";
import { isPageListed, pageMetadata, pages } from "@/config/pages";
import { isReview } from "@/config/site";
import { analiseTestimonials } from "@/config/testimonials";

export const metadata = pageMetadata("analise", {
  title: "Análise comportamental com devolutiva",
  description:
    "Avaliação de perfil acompanhada de devolutiva com Carla Gerhard, para pessoas, casais e equipes. Entenda tendências de comunicação, decisão e relacionamento.",
});

const etapas = [
  {
    titulo: "Avaliação de perfil",
    texto:
      "Você responde a uma avaliação comportamental na plataforma Sólides (Profiler). O resultado descreve tendências de comportamento, não um rótulo definitivo.",
  },
  {
    titulo: "Devolutiva com Carla",
    texto: "Em uma conversa, Carla apresenta o resultado e explica o que cada parte dele indica, respondendo às suas dúvidas.",
  },
  {
    titulo: "Leitura contextualizada",
    texto:
      "O resultado é lido junto com o seu momento: família, casamento, trabalho, liderança ou ministério. As suas perguntas orientam a conversa.",
  },
  {
    titulo: "Aplicações práticas",
    texto:
      "Vocês conversam sobre como esse conhecimento pode aparecer na forma de se comunicar, decidir e conviver com as pessoas ao seu redor.",
  },
];

const modalidades = [
  {
    nome: "Individual",
    texto:
      "Para quem quer compreender as próprias tendências de comunicação, decisão e relacionamento e conversar sobre elas com acompanhamento.",
    cta: "Conversar sobre atendimento individual",
    mensagem: "Olá, gostaria de saber sobre a análise comportamental individual.",
  },
  {
    nome: "Casais",
    texto:
      "Para casais que querem entender como cada um tende a se comunicar e a decidir, e conversar sobre as diferenças com mais clareza.",
    cta: "Conversar sobre atendimento para casal",
    mensagem: "Olá, gostaria de saber sobre a análise comportamental para casais.",
  },
  {
    nome: "Grupos e equipes",
    texto:
      "Para equipes de trabalho, lideranças e outros grupos que querem conhecer a composição de perfis e conversar sobre comunicação e convivência. O formato é definido conforme o tamanho e o objetivo do grupo.",
    cta: "Solicitar proposta para minha equipe",
    mensagem: "Olá, gostaria de solicitar uma proposta de análise comportamental para minha equipe.",
  },
];

export default function AnalisePage() {
  const showCombo = isPageListed("perfil");
  const showTestimonials = analiseTestimonials.approved || isReview;

  const faq: FaqEntry[] = [
    {
      q: "A análise comportamental é um teste psicológico?",
      a: "Não. É uma ferramenta de autoconhecimento que descreve tendências de comportamento. Não é diagnóstico médico, teste psicológico nem tratamento, e não substitui acompanhamento de saúde quando ele for necessário.",
    },
    {
      q: "Preciso estar passando por uma dificuldade para fazer?",
      a: "Não. A análise pode ser útil para quem quer se conhecer melhor, organizar decisões ou pensar na comunicação em casa, no trabalho ou no ministério.",
    },
    {
      q: "Como funciona para casais?",
      a: "A avaliação é individual: cada pessoa responde à sua. A forma da devolutiva para o casal é combinada na conversa inicial.",
    },
    {
      q: "A análise para equipes é o mesmo que o diagnóstico da NR-1?",
      a: (
        <>
          Não. A análise comportamental olha para perfis de pessoas. O Diagnóstico de Riscos Psicossociais (DRPS), ligado à
          NR-1, é organizacional, coletivo e não identifica colaboradores. Para esse serviço, veja a{" "}
          <Link href={pages.nr1.path} className="font-semibold text-ink underline underline-offset-4">
            página para empresas
          </Link>
          .
        </>
      ),
    },
    {
      q: "Quanto custa e quanto tempo leva?",
      a: "Valores, duração e formato dependem da modalidade e são informados na conversa inicial.",
    },
    {
      q: "O Combo Perfil e Propósito substitui a análise?",
      a: "Não. O combo é uma coleção de eBooks para leitura e reflexão, sem avaliação individual e sem devolutiva. A análise é um atendimento com Carla.",
    },
  ];

  return (
    <div className="theme-pp bg-paper">
      <TrackView productId="analise_comportamental" pageType="service" />
      <LandingHeader brand="carla" cta={{ href: "#modalidades", label: "Ver modalidades" }} />

      <main id="conteudo" data-page-type="service">
        {/* HERO */}
        <section className="overflow-hidden">
          <div className="mx-auto grid max-w-content gap-10 px-4 pt-12 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14 lg:px-8 lg:pt-16">
            <div className="lg:pb-24 lg:pt-10">
              <p className="eyebrow">Análise comportamental com devolutiva</p>
              <h1 className="font-display mt-5 text-balance text-[2.35rem] leading-[1.08] text-ink sm:text-[3rem] lg:text-[3.5rem]">
                Entender como você age pode mudar a forma como você se relaciona.
              </h1>
              <p className="mt-7 max-w-[36rem] text-[1.125rem] leading-relaxed">
                Uma análise comportamental acompanhada de devolutiva com Carla Gerhard, para compreender tendências de
                comunicação, decisão e relacionamento e refletir sobre como elas aparecem no seu dia a dia.
              </p>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
                <a href="#como-funciona" className="btn btn-primary" data-event="cta_click" data-product-id="analise_comportamental" data-cta-position="hero" data-destination-type="section">
                  Quero entender como funciona
                </a>
                <a href="#modalidades" className="link-arrow px-1">
                  Ver modalidades <span aria-hidden="true">↓</span>
                </a>
              </div>
            </div>
            <div className="relative flex justify-center self-end">
              <div aria-hidden="true" className="absolute inset-x-[8%] bottom-0 top-[18%] rounded-t-[2.5rem] bg-rose" />
              <Image
                src="/images/carla/carla-camisa-laranja.webp"
                width={706}
                height={1500}
                priority
                sizes="(min-width: 1024px) 290px, 210px"
                alt="Carla Gerhard, de camisa laranja, sentada"
                className="relative h-[430px] w-auto sm:h-[500px] lg:h-[580px]"
              />
            </div>
          </div>
        </section>

        {/* REFLEXÃO */}
        <section aria-labelledby="reflexao-titulo" className="border-y border-line bg-paper-2">
          <div className="mx-auto max-w-content px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
            <div className="max-w-3xl border-l-4 border-rose pl-6 sm:pl-10">
              <h2 id="reflexao-titulo" className="font-display text-balance text-[2rem] leading-[1.15] text-ink sm:text-[2.6rem]">
                Você percebe o padrão. Mas consegue entender o que está por trás dele?
              </h2>
              <p className="mt-6 max-w-reading text-[1.125rem] leading-relaxed">
                Às vezes, a mesma dificuldade aparece em conversas diferentes: na família, na liderança ou no trabalho.
                Observar o próprio comportamento pode ajudar a reconhecer essas repetições e pensar em respostas mais
                conscientes.
              </p>
            </div>
          </div>
        </section>

        {/* COMO FUNCIONA */}
        <section id="como-funciona" aria-labelledby="como-titulo">
          <div className="mx-auto max-w-content px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
            <div className="max-w-2xl">
              <p className="eyebrow">Como funciona</p>
              <h2 id="como-titulo" className="font-display mt-4 text-balance text-[2.1rem] leading-[1.12] text-ink sm:text-[2.6rem]">
                Uma avaliação, uma conversa e um olhar para o seu contexto
              </h2>
            </div>
            <ol className="mt-12 grid gap-x-14 gap-y-10 md:grid-cols-2">
              {etapas.map((etapa, i) => (
                <li key={etapa.titulo} className="border-t-2 border-ink pt-6">
                  <span className="font-display text-[1.1rem] text-accent">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="mt-2 text-[1.3rem] font-bold text-ink">{etapa.titulo}</h3>
                  <p className="mt-2 max-w-reading text-[1.05rem] leading-relaxed">{etapa.texto}</p>
                </li>
              ))}
            </ol>
            <div className="mt-14 max-w-3xl rounded-xl bg-rose-soft px-6 py-6 sm:px-8">
              <h3 className="text-[1.05rem] font-bold text-ink">O que a análise não é</h3>
              <p className="mt-2 leading-relaxed">
                A análise comportamental é uma ferramenta de autoconhecimento. Não é diagnóstico médico, teste psicológico
                nem tratamento, e não prevê resultados. Ela oferece uma leitura de tendências para você refletir com mais
                clareza.
              </p>
            </div>
          </div>
        </section>

        {/* MODALIDADES */}
        <section id="modalidades" aria-labelledby="modalidades-titulo" className="bg-panel">
          <div className="mx-auto max-w-content px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
            <div className="max-w-2xl">
              <p className="eyebrow">Modalidades</p>
              <h2 id="modalidades-titulo" className="font-display mt-4 text-balance text-[2.1rem] leading-[1.12] text-ink sm:text-[2.6rem]">
                Para você, para o casal ou para a equipe
              </h2>
              <p className="mt-5 text-[1.05rem] leading-relaxed">
                Duração, valores e formato são combinados na conversa inicial, de acordo com a modalidade.
              </p>
              <PendingNote>duração, valores e formato (online ou presencial) só serão publicados depois de confirmados.</PendingNote>
            </div>

            <div className="mt-12 divide-y divide-[#cfdcd1] border-y border-[#cfdcd1]">
              {modalidades.map((m) => (
                <article key={m.nome} className="grid gap-6 py-10 lg:grid-cols-[14rem_1fr_auto] lg:items-center lg:gap-12">
                  <h3 className="font-display text-[1.9rem] leading-tight text-ink">{m.nome}</h3>
                  <p className="max-w-reading text-[1.05rem] leading-relaxed">{m.texto}</p>
                  <ContactCTA
                    contactId="analiseWhatsApp"
                    productId="analise_comportamental"
                    position={`modalidade_${m.nome === "Individual" ? "individual" : m.nome === "Casais" ? "casal" : "equipe"}`}
                    label={m.cta}
                    message={m.mensagem}
                    className="lg:max-w-[20rem]"
                  />
                </article>
              ))}
            </div>
            <p className="mt-8 max-w-reading leading-relaxed">
              Procura o diagnóstico de riscos psicossociais para atender à NR-1? É outro serviço, voltado à organização:{" "}
              <Link href={pages.nr1.path} className="font-semibold text-ink underline underline-offset-4">
                conheça a atuação para empresas
              </Link>
              .
            </p>
          </div>
        </section>

        {/* DEPOIMENTOS: somente com autorização */}
        {showTestimonials && (
          <section aria-labelledby="depoimentos-titulo">
            <div className="mx-auto max-w-content px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
              <p className="eyebrow">Depoimentos</p>
              <h2 id="depoimentos-titulo" className="font-display mt-4 text-[2rem] leading-tight text-ink">
                Quem já fez a análise comportamental
              </h2>
              {!analiseTestimonials.approved && (
                <PendingNote>
                  confirmar autorização e contexto destes depoimentos (origem: {analiseTestimonials.source.replace(/\.$/, "")}). Sem
                  aprovação, o bloco não aparece na publicação.
                </PendingNote>
              )}
              <div className="mt-10 columns-1 gap-10 md:columns-2">
                {analiseTestimonials.items.map((t) => (
                  <figure key={t.author} className="mb-10 break-inside-avoid border-l-2 border-rose pl-6">
                    <blockquote className="text-[1.05rem] leading-relaxed text-ink">“{t.quote}”</blockquote>
                    <figcaption className="mt-3 text-[0.95rem] font-semibold text-muted">{t.author}</figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* FAQ */}
        <section aria-labelledby="faq-titulo" className="border-t border-line">
          <div className="mx-auto grid max-w-content gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-8 lg:py-28">
            <div>
              <p className="eyebrow">Perguntas frequentes</p>
              <h2 id="faq-titulo" className="font-display mt-4 text-[2rem] leading-tight text-ink sm:text-[2.4rem]">
                Antes de marcar a conversa
              </h2>
              <p className="mt-5 max-w-sm leading-relaxed">
                Carla Gerhard é psicanalista, analista comportamental e pastora.{" "}
                <Link href="/#sobre" className="font-semibold text-ink underline underline-offset-4">
                  Conheça o trabalho dela
                </Link>
                .
              </p>
            </div>
            <Faq items={faq} />
          </div>
        </section>

        {/* ALTERNATIVA: COMBO */}
        {showCombo && (
          <section aria-labelledby="combo-titulo" className="bg-rose-soft">
            <div className="mx-auto grid max-w-content gap-6 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-16 lg:px-8">
              <div>
                <h2 id="combo-titulo" className="font-display text-[1.8rem] leading-tight text-ink sm:text-[2.1rem]">
                  Prefere começar por uma leitura?
                </h2>
                <p className="mt-3 max-w-reading text-[1.05rem] leading-relaxed">
                  Conheça o Combo Perfil e Propósito: 16 eBooks sobre comportamento, propósito, família e liderança, para
                  ler no seu ritmo. É outro formato: não inclui avaliação individual nem devolutiva.
                </p>
              </div>
              <Link
                href={pages.perfil.path}
                className="link-arrow"
                data-event="select_item"
                data-product-id="combo_perfil_proposito"
                data-cta-position="analise_alternativa"
                data-destination-type="page"
              >
                Conhecer o Combo Perfil e Propósito <span aria-hidden="true">→</span>
              </Link>
            </div>
          </section>
        )}

        {/* CTA FINAL */}
        <section aria-labelledby="final-titulo">
          <div className="mx-auto max-w-content px-4 py-20 text-left sm:px-6 lg:px-8 lg:py-24">
            <h2 id="final-titulo" className="font-display max-w-2xl text-balance text-[2.1rem] leading-[1.12] text-ink sm:text-[2.6rem]">
              Quer conversar sobre o seu momento?
            </h2>
            <p className="mt-4 max-w-reading text-[1.05rem] leading-relaxed">
              Conte qual modalidade faz sentido para você. Na conversa inicial, você recebe as informações de formato,
              duração e valores.
            </p>
            <div className="mt-8">
              <ContactCTA
                contactId="analiseWhatsApp"
                productId="analise_comportamental"
                position="final"
                label="Conversar sobre análise comportamental"
                message="Olá, gostaria de saber mais sobre a análise comportamental."
              />
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
