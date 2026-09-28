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
import { familia } from "@/content/advento";

export const metadata = pageMetadata("adventoFamilia", {
  title: "Advento de Natal 2026 — Família | Pequenas Sementes",
  description:
    "De 1º a 25 de dezembro, atividades, cartinhas, figurinhas e orientações para pais viverem o Advento com as crianças, com Jesus no centro do Natal. Material digital em PDF para imprimir.",
  absoluteTitle: true,
});

const offer = getOffer("advento_familia");

export default function AdventoFamiliaPage() {
  const showIgrejas = isPageListed("adventoIgrejas");

  const faq: FaqEntry[] = [
    {
      q: "É um material físico ou digital?",
      a: "Digital. O Advento é um material em PDF. Nada é enviado pelos Correios.",
    },
    {
      q: "Preciso imprimir?",
      a: "Sim. As páginas podem ser impressas em casa ou em uma gráfica. O manual orienta organizar as atividades por dia e separar cada semana em pasta, envelope ou clipes. Impressão, papéis e materiais das atividades ficam por conta da família.",
    },
    {
      q: "Para qual idade é?",
      a: "O material foi preparado para viver com crianças e orienta adaptar as propostas à idade de cada uma. Algumas atividades indicam faixa etária própria, como a Expedição “Encontrando Jesus”, sugerida para 3 a 12 anos. Quem ainda não lê participa com um adulto lendo a cartinha.",
    },
    {
      q: "Precisa de acompanhamento de um adulto?",
      a: "Sim. O Advento foi feito para ser vivido em família: um adulto lê a orientação do dia, separa os materiais e participa da atividade com a criança. Atividades com recorte, cozinha ou potes de vidro pedem supervisão.",
    },
    {
      q: "E se não conseguirmos participar todos os dias?",
      a: "Tudo bem. O próprio manual orienta: se não for possível fazer uma atividade no dia indicado, retomem quando puderem. O Advento é para aproximar a família de Jesus, não para virar cobrança.",
    },
    {
      q: "Posso compartilhar o PDF ou usar com outras famílias?",
      a: "A compra permite imprimir as páginas necessárias para uso na sua própria casa. Não é permitido compartilhar o arquivo, reproduzir para terceiros, publicar, revender ou usar em grupos, igrejas e escolas sem autorização prévia da autora.",
    },
    {
      q: "Qual a diferença para a edição Igrejas?",
      a: (
        <>
          A edição Família é vivida em casa, de 1º a 25 de dezembro. A edição Igrejas é organizada em seis semanas, a partir
          de novembro, para o ministério infantil aplicar na igreja com continuidade nas casas. São materiais diferentes,
          vendidos separadamente.
          {showIgrejas && (
            <>
              {" "}
              <Link href={pages.adventoIgrejas.path} className="font-semibold text-ink underline underline-offset-4">
                Conheça a edição Igrejas
              </Link>
              .
            </>
          )}
        </>
      ),
    },
    {
      q: "Como recebo o acesso e a quem peço ajuda?",
      a: `O acesso é liberado após a confirmação do pagamento. Para dúvidas sobre o material, o próprio PDF indica o direct do Instagram @${contacts.sementesInstagram.handle} ou @${contacts.carlaInstagram.handle}.`,
      pending: "confirmar plataforma de pagamento, forma de entrega do PDF e canal de suporte da compra.",
    },
  ];

  return (
    <div className="theme-sementes edition-familia bg-paper">
      <TrackView productId={offer.id} pageType="product" />
      <LandingHeader brand="sementes" cta={{ href: "#oferta", label: offerCtaLabel(offer.id, "Ver oferta", "Ver detalhes") }} />
      <SeedStripe />

      <main id="conteudo" data-page-type="product">
        {/* HERO */}
        <section className="editorial-hero advent-edition-hero">
          <div className="mx-auto grid max-w-content items-center gap-12 px-4 py-14 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14 lg:px-8 lg:py-20">
            <div>
              <p className="eyebrow" style={{ color: "var(--accent)" }}>
                Advento de Natal 2026 · Família
              </p>
              <h1 className="font-display mt-5 text-balance text-[2.4rem] leading-[1.08] text-ink sm:text-[3.1rem] lg:text-[3.25rem]">
                Além dos presentes, o que vocês querem guardar deste Natal?
              </h1>
              <p className="mt-6 max-w-[34rem] text-[1.15rem] leading-relaxed">
                De 1º a 25 de dezembro, viva uma caminhada de atividades, conversas e momentos em família para celebrar
                Jesus com as crianças.
              </p>
              <div className="mt-8">
                <a href="#oferta" className="btn btn-primary w-full sm:w-auto" data-event="cta_click" data-product-id={offer.id} data-cta-position="hero" data-destination-type="section">
                  {offerCtaLabel(offer.id, "Quero viver esse Advento em família")}
                </a>
                <p className="mt-3 text-[0.95rem] text-muted">Material digital em PDF. Para imprimir e utilizar em casa.</p>
              </div>
            </div>
            <AdventoArtwork cover={familia.cover} samples={familia.samples} />
          </div>
        </section>

        {/* REFLEXÃO */}
        <section aria-labelledby="reflexao-titulo" className="bg-paper-2">
          <div className="mx-auto max-w-content px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
              <h2 id="reflexao-titulo" className="font-display text-balance text-[2rem] leading-[1.15] text-ink sm:text-[2.5rem]">
                O Natal também é feito dos momentos que vocês escolhem viver juntos.
              </h2>
              <div className="prose-body max-w-reading text-[1.1rem] leading-relaxed">
                <p>
                  Os preparativos ocupam a agenda. As crianças esperam pelos presentes. E conversar sobre Jesus pode acabar
                  ficando para depois.
                </p>
                <p>
                  O Advento Pequenas Sementes oferece um caminho organizado para trazer essa conversa para dentro da rotina:
                  com atividades, oração, criatividade, gratidão e pequenos gestos de amor.
                </p>
                <p className="font-bold text-ink">Não é uma cobrança para fazer tudo perfeitamente. É um convite para participar.</p>
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
                Páginas reais da edição Família
              </h2>
              <p className="mt-4 text-[1.05rem] leading-relaxed">Toque em uma página para ver em tamanho maior.</p>
            </div>
            <div className="mt-10">
              <SampleGallery samples={familia.samples} productId={offer.id} />
            </div>
          </div>
        </section>

        {/* CONTEÚDO */}
        <section aria-labelledby="conteudo-titulo" className="border-t border-line">
          <div className="mx-auto max-w-content px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
            <p className="eyebrow">O que vocês vão encontrar</p>
            <h2 id="conteudo-titulo" className="font-display mt-3 max-w-2xl text-balance text-[2rem] leading-tight text-ink sm:text-[2.4rem]">
              Quatro semanas, uma atividade por dia
            </h2>
            <div className="mt-10">
              <WeekList weeks={familia.weeks} columns="sm:grid-cols-2 lg:grid-cols-4" />
            </div>
            <div className="mt-16 grid gap-x-14 gap-y-10 md:grid-cols-2">
              {familia.resources.map((r, i) => (
                <div key={r.title} className="flex gap-5">
                  <span aria-hidden="true" className="font-display text-[2rem] leading-none" style={{ color: seedColor(i) }}>
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="text-[1.2rem] font-bold text-ink">{r.title}</h3>
                    <p className="mt-2 leading-relaxed">{r.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* O QUE PROVIDENCIAR */}
        <section aria-labelledby="providenciar-titulo" className="bg-accent-soft">
          <div className="mx-auto grid max-w-content gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-8">
            <div>
              <h2 id="providenciar-titulo" className="font-display text-[1.8rem] leading-tight text-ink sm:text-[2.1rem]">
                O que vocês vão precisar
              </h2>
              <p className="mt-3 max-w-sm leading-relaxed">O material é digital. A impressão e os itens das atividades ficam por conta da família.</p>
            </div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {familia.supplies.map((item) => (
                <li key={item} className="border-b border-[#f3cbc3] pb-3 leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>
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
                  { title: "Comprar", text: "Escolha a edição Família e conclua o pagamento." },
                  { title: "Receber o acesso", text: "O acesso é liberado após a confirmação do pagamento." },
                  { title: "Preparar", text: "Leiam as orientações, imprimam as páginas da semana e separem os materiais." },
                  { title: "Viver em família", text: "De 1º a 25 de dezembro, no horário que funcionar para a casa." },
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
              ctaLabel="Quero viver esse Advento em família"
              microcopy="Material digital em PDF. Para imprimir e utilizar em casa."
              included={[
                "Manual para os pais e organização das quatro semanas",
                "25 dias com atividade, cartinha e figurinha",
                "Trilha do Advento, em duas opções",
                "Atividades para imprimir, como Árvore dos Frutos, Pote da Gratidão, Expedição “Encontrando Jesus”, medalhas e Cápsula do Advento",
              ]}
              notIncluded="Impressão, papéis, ingredientes e demais materiais das atividades. Nenhum item físico é enviado."
              license="Para imprimir e usar na sua própria casa. Compartilhar o arquivo ou usar em grupos, igrejas e escolas depende de autorização prévia da autora."
            />
          </div>
        </section>

        {/* FAQ */}
        <section aria-labelledby="faq-titulo">
          <div className="mx-auto grid max-w-content gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-8 lg:py-24">
            <div>
              <p className="eyebrow">Perguntas frequentes</p>
              <h2 id="faq-titulo" className="font-display mt-3 text-[2rem] leading-tight text-ink sm:text-[2.4rem]">
                Antes de começar
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
              Uma atividade por vez. Uma conversa por vez. Um Natal vivido com mais intenção.
            </h2>
            <a href="#oferta" className="btn btn-primary mt-8 w-full sm:w-auto" data-event="cta_click" data-product-id={offer.id} data-cta-position="fechamento" data-destination-type="section">
              {offerCtaLabel(offer.id, "Quero viver esse Advento em família")}
            </a>
          </div>
        </section>

        <AboutSementes />
      </main>

      <SiteFooter note="Pequenas Sementes · Materiais desenvolvidos por Pra. Carla Gerhard e equipe." />
    </div>
  );
}
