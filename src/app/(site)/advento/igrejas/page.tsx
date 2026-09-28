import { AdventoArtwork } from "@/components/advento/AdventoArtwork";
import Link from "next/link";
import { AboutSementes, OfferPanel, SeedStripe, Steps, WeekList, offerCtaLabel, seedColor } from "@/components/advento/Blocks";
import { Faq, type FaqEntry } from "@/components/site/Faq";
import { LandingHeader } from "@/components/site/LandingHeader";
import { SampleGallery } from "@/components/site/SampleGallery";
import { SiteFooter } from "@/components/site/SiteFooter";
import { TrackView } from "@/components/site/TrackView";
import { contacts } from "@/config/contacts";
import { getOffer } from "@/config/offers";
import { isPageListed, pageMetadata, pages } from "@/config/pages";
import { igrejas } from "@/content/advento";

export const metadata = pageMetadata("adventoIgrejas", {
  title: "Advento de Natal 2026 — Igrejas e Ministério Infantil | Pequenas Sementes",
  description:
    "Um Advento em seis semanas para o ministério infantil, com orientações para professores, atividades para as crianças e propostas para continuar a caminhada em casa. Material digital em PDF.",
  absoluteTitle: true,
});

const offer = getOffer("advento_igrejas");

export default function AdventoIgrejasPage() {
  const showFamilia = isPageListed("adventoFamilia");

  const faq: FaqEntry[] = [
    {
      q: "O material é digital?",
      a: "Sim. É um material digital em PDF. Nenhum item físico é enviado: impressões, pastas, papéis e materiais das atividades ficam por conta da igreja e das famílias, conforme as orientações de cada semana.",
    },
    {
      q: "Quanto preciso imprimir?",
      a: "O manual orienta ler as orientações da semana antes de imprimir e imprimir apenas a quantidade necessária para as crianças da turma. Há páginas para os professores e páginas para os alunos.",
    },
    {
      q: "Qual é a faixa etária?",
      a: "A faixa etária sugerida é de 3 a 12 anos. O professor adapta a explicação e as atividades à idade da turma.",
    },
    {
      q: "Como funciona a divisão por semanas?",
      a: "São seis semanas, de 15 de novembro ao Natal, com as 25 etapas do Advento distribuídas entre elas. Cada semana traz tema, versículo, objetivo, atividades e orientações. O encontro na igreja se adapta ao tempo que o ministério já reserva para as crianças.",
    },
    {
      q: "As famílias precisam participar?",
      a: "A continuidade em casa faz parte da proposta. O material traz mensagens para o grupo dos pais e o que a família faz com a criança durante a semana; a última etapa, a Cápsula do Advento, acontece em casa.",
    },
    {
      q: "Qual a diferença para a edição Família?",
      a: (
        <>
          A edição Igrejas é aplicada pelo ministério infantil em seis semanas, com orientações para professores e
          continuidade em casa. A edição Família é vivida só em casa, de 1º a 25 de dezembro. São materiais diferentes,
          vendidos separadamente.
          {showFamilia && (
            <>
              {" "}
              <Link href={pages.adventoFamilia.path} className="font-semibold text-ink underline underline-offset-4">
                Conheça a edição Família
              </Link>
              .
            </>
          )}
        </>
      ),
    },
    {
      q: "Posso compartilhar o PDF com outras igrejas ou com as famílias?",
      a: "Os termos do material restringem o uso ao contexto pedagógico e espiritual do ministério; reprodução, distribuição ou uso fora dele exigem autorização prévia. A equipe imprime e entrega às crianças as páginas previstas para elas. O arquivo completo não deve ser repassado a famílias, outras igrejas ou terceiros.",
      pending: "definir os termos de licença por igreja, congregação e filial antes do lançamento (o PDF, p. 2, não especifica).",
    },
    {
      q: "Como recebo o acesso e a quem peço ajuda?",
      a: `O acesso é liberado após a confirmação do pagamento. Para dúvidas sobre o material, o próprio PDF indica o direct do Instagram @${contacts.sementesInstagram.handle} ou @${contacts.carlaInstagram.handle}.`,
      pending: "confirmar plataforma de pagamento, forma de entrega do PDF e canal de suporte da compra.",
    },
  ];

  return (
    <div className="theme-sementes edition-igrejas bg-paper">
      <TrackView productId={offer.id} pageType="product" />
      <LandingHeader brand="sementes" cta={{ href: "#oferta", label: offerCtaLabel(offer.id, "Ver oferta", "Ver detalhes") }} />
      <SeedStripe />

      <main id="conteudo" data-page-type="product">
        {/* HERO */}
        <section className="editorial-hero advent-edition-hero">
          <div className="mx-auto grid max-w-content items-center gap-12 px-4 py-14 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14 lg:px-8 lg:py-20">
            <div>
              <p className="eyebrow" style={{ color: "var(--accent)" }}>
                Advento de Natal 2026 · Igrejas / Ministério Infantil
              </p>
              <h1 className="font-display mt-5 text-balance text-[2.4rem] leading-[1.08] text-ink sm:text-[3.1rem] lg:text-[3.25rem]">
                E se a conversa sobre Jesus continuasse depois da aula?
              </h1>
              <p className="mt-6 max-w-[34rem] text-[1.15rem] leading-relaxed">
                Um Advento que conecta ministério infantil e família, com orientações para professores, atividades para as
                crianças e propostas para continuar a caminhada em casa.
              </p>
              <div className="mt-8">
                <a href="#oferta" className="btn btn-primary w-full sm:w-auto" data-event="cta_click" data-product-id={offer.id} data-cta-position="hero" data-destination-type="section">
                  {offerCtaLabel(offer.id, "Quero levar o Advento para meu ministério")}
                </a>
                <p className="mt-3 text-[0.95rem] text-muted">Material digital em PDF para aplicação no ministério infantil.</p>
              </div>
            </div>
            <AdventoArtwork cover={igrejas.cover} samples={igrejas.samples} />
          </div>
        </section>

        {/* REFLEXÃO */}
        <section aria-labelledby="reflexao-titulo" className="bg-paper-2">
          <div className="mx-auto max-w-content px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
              <h2 id="reflexao-titulo" className="font-display text-balance text-[2rem] leading-[1.15] text-ink sm:text-[2.5rem]">
                A aula pode ser o começo de uma conversa maior.
              </h2>
              <div className="prose-body max-w-reading text-[1.1rem] leading-relaxed">
                <p>O professor apresenta a proposta. A criança participa. A família encontra uma forma de continuar em casa.</p>
                <p>
                  O Advento Pequenas Sementes organiza essa ligação, reunindo orientações, atividades e materiais que ajudam
                  o ministério a preparar a caminhada até o Natal.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* DEMONSTRAÇÃO */}
        <section aria-labelledby="dentro-titulo">
          <div className="mx-auto max-w-content px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
            <div className="max-w-2xl">
              <p className="eyebrow">Por dentro do material</p>
              <h2 id="dentro-titulo" className="font-display mt-3 text-[2rem] leading-tight text-ink sm:text-[2.4rem]">
                Páginas reais da edição Igrejas
              </h2>
              <p className="mt-4 text-[1.05rem] leading-relaxed">Toque em uma página para ver em tamanho maior.</p>
            </div>
            <div className="mt-10">
              <SampleGallery samples={igrejas.samples} productId={offer.id} />
            </div>
          </div>
        </section>

        {/* ESTRUTURA */}
        <section aria-labelledby="estrutura-titulo" className="border-t border-line">
          <div className="mx-auto max-w-content px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
            <p className="eyebrow">Estrutura</p>
            <h2 id="estrutura-titulo" className="font-display mt-3 max-w-2xl text-balance text-[2rem] leading-tight text-ink sm:text-[2.4rem]">
              Seis semanas, de novembro ao Natal
            </h2>
            <p className="mt-4 max-w-reading text-[1.05rem] leading-relaxed">
              São 25 etapas do Advento distribuídas em seis semanas. Algumas acontecem na igreja, outras em casa, com a
              família.
            </p>
            <div className="mt-10">
              <WeekList weeks={igrejas.weeks} columns="sm:grid-cols-2 lg:grid-cols-3" />
            </div>

            <h3 className="mt-20 text-[1.35rem] font-bold text-ink">O que o material reúne</h3>
            <dl className="mt-6 grid gap-x-14 md:grid-cols-2">
              {igrejas.structure.map((item, i) => (
                <div key={item.title} className="border-t border-line py-5">
                  <dt className="flex items-center gap-3 font-bold text-ink">
                    <span aria-hidden="true" className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: seedColor(i) }} />
                    {item.title}
                  </dt>
                  <dd className="mt-1.5 pl-[1.4rem] leading-relaxed">{item.text}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* VALOR */}
        <section aria-labelledby="valor-titulo" className="bg-accent-soft">
          <div className="mx-auto grid max-w-content gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
            <div>
              <h2 id="valor-titulo" className="font-display text-balance text-[2rem] leading-[1.15] text-ink sm:text-[2.4rem]">
                Uma estrutura preparada para que você não precise começar do zero.
              </h2>
              <p className="mt-5 max-w-reading text-[1.08rem] leading-relaxed">
                O material ajuda na organização. O professor continua sendo essencial para acolher, explicar, ouvir e
                adaptar cada proposta à realidade das crianças e ao tempo que a igreja já reserva para o ministério infantil.
              </p>
            </div>
            <div>
              <h3 className="text-[1.15rem] font-bold text-ink">O que a equipe vai precisar</h3>
              <ul className="mt-4 space-y-3">
                {igrejas.supplies.map((item) => (
                  <li key={item} className="border-b border-[#bfe1f2] pb-3 leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* COMO FUNCIONA */}
        <section aria-labelledby="como-titulo">
          <div className="mx-auto max-w-content px-4 py-20 sm:px-6 lg:px-8">
            <h2 id="como-titulo" className="font-display text-[2rem] leading-tight text-ink sm:text-[2.4rem]">
              Como funciona
            </h2>
            <div className="mt-10">
              <Steps
                steps={[
                  { title: "Comprar", text: "Escolha a edição Igrejas e conclua o pagamento." },
                  { title: "Receber o acesso", text: "O acesso é liberado após a confirmação do pagamento." },
                  { title: "Preparar a equipe", text: "Leiam o planejamento, organizem as impressões e avisem as famílias." },
                  { title: "Aplicar semana a semana", text: "De 15 de novembro ao Natal, com continuidade em casa." },
                ]}
              />
            </div>
          </div>
        </section>

        {/* OFERTA */}
        <section id="oferta" aria-labelledby="oferta-titulo" className="bg-paper-2">
          <div className="mx-auto max-w-content px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
            <OfferPanel
              offerId={offer.id}
              ctaLabel="Quero levar o Advento para meu ministério"
              microcopy="Material digital em PDF para aplicação no ministério infantil."
              included={[
                "Planejamento das seis semanas, com mapa de utilização e impressão",
                "Manual e orientações para professores em cada semana",
                "Atividades, cartinhas, figurinhas e trilha para as crianças",
                "Mensagens e orientações para a continuidade com as famílias",
                "Encerramento com celebração na igreja e Cápsula do Advento em casa",
              ]}
              notIncluded="Impressões, papéis, pastas e materiais das atividades. Nenhum item físico é enviado."
              license="Uso no contexto pedagógico e espiritual do ministério infantil. Reprodução, distribuição ou uso fora desse contexto exigem autorização prévia."
              licensePending="definir e publicar os termos de licença por igreja, congregação e filial."
            />
          </div>
        </section>

        {/* FAQ */}
        <section aria-labelledby="faq-titulo">
          <div className="mx-auto grid max-w-content gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-8 lg:py-24">
            <div>
              <p className="eyebrow">Perguntas frequentes</p>
              <h2 id="faq-titulo" className="font-display mt-3 text-[2rem] leading-tight text-ink sm:text-[2.4rem]">
                Para a equipe do ministério
              </h2>
            </div>
            <Faq items={faq} />
          </div>
        </section>

        {/* FECHAMENTO */}
        <section aria-labelledby="fechamento-titulo" className="bg-paper-2">
          <SeedStripe />
          <div className="mx-auto max-w-content px-4 py-20 sm:px-6 lg:px-8">
            <h2 id="fechamento-titulo" className="font-display max-w-3xl text-balance text-[2rem] leading-[1.2] text-ink sm:text-[2.6rem]">
              Prepare uma caminhada que começa no ministério e encontra espaço dentro de casa.
            </h2>
            <a href="#oferta" className="btn btn-primary mt-8 w-full sm:w-auto" data-event="cta_click" data-product-id={offer.id} data-cta-position="fechamento" data-destination-type="section">
              {offerCtaLabel(offer.id, "Quero levar o Advento para meu ministério")}
            </a>
          </div>
        </section>

        <AboutSementes />
      </main>

      <SiteFooter note="Pequenas Sementes · Materiais desenvolvidos por Pra. Carla Gerhard e equipe." />
    </div>
  );
}
