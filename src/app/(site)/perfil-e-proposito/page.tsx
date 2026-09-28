import Image from "next/image";
import Link from "next/link";
import { CheckoutCTA } from "@/components/site/Cta";
import { Faq, type FaqEntry } from "@/components/site/Faq";
import { LandingHeader } from "@/components/site/LandingHeader";
import { PendingNote } from "@/components/site/Pending";
import { SiteFooter } from "@/components/site/SiteFooter";
import { TrackView } from "@/components/site/TrackView";
import { confirmedPrice, formatPrice, getOffer, priceStatusLabel, shouldShowPrice } from "@/config/offers";
import { isPageListed, pageMetadata, pages } from "@/config/pages";
import { isReview } from "@/config/site";
import { comboExtras, ebookGroups, ebooks } from "@/content/perfil-e-proposito";

export const metadata = pageMetadata("perfil", {
  title: "Combo Perfil e Propósito — 16 eBooks",
  description:
    "Uma coleção de 16 eBooks de Carla Gerhard sobre comportamento, propósito, família e liderança, com linguagem cristã e propostas para levar a reflexão ao cotidiano.",
});

const offer = getOffer("combo_perfil_proposito");

export default function PerfilPropositoPage() {
  const price = offer.price;
  const showPrice = shouldShowPrice(offer) && price;
  const showAnalise = isPageListed("analise");

  const faq: FaqEntry[] = [
    {
      q: "O combo inclui atendimento individual ou devolutiva?",
      a: (
        <>
          Não. O combo é uma coleção de eBooks para leitura e reflexão. A avaliação de perfil com devolutiva é outro
          serviço
          {showAnalise ? (
            <>
              : a{" "}
              <Link href={pages.analise.path} className="font-semibold text-ink underline underline-offset-4">
                análise comportamental
              </Link>
            </>
          ) : null}
          .
        </>
      ),
    },
    {
      q: "É só para cristãos?",
      a: "O conteúdo usa princípios e linguagem cristã como base. Pode ser lido por qualquer pessoa interessada em se conhecer melhor que se sinta à vontade com essa abordagem.",
    },
    {
      q: "Vou receber algum material físico?",
      a: "Não. O combo é formado por eBooks digitais.",
    },
    {
      q: "Como recebo o acesso?",
      a: "O pagamento é processado pela Eduzz. Depois da confirmação, as instruções de acesso chegam ao e-mail informado na compra.",
      pending: "confirmar o formato de entrega (PDF ou área de membros) e o prazo de acesso.",
    },
    {
      q: "Quais são as formas de pagamento?",
      a: "As formas de pagamento disponíveis e eventuais condições de parcelamento aparecem no checkout da Eduzz.",
    },
    {
      q: "Posso comprar um eBook separado?",
      a: "Nesta página, a oferta é o combo com os 16 títulos.",
    },
    {
      q: "A oferta inclui live mensal, testes ou garantia?",
      a: "A oferta anterior mencionava live mensal, testes de perfis, exercícios aplicados e garantia de 7 dias. Essas condições estão em validação e não fazem parte da oferta publicada até serem confirmadas.",
      pending: "validar extras e garantia com a oferta cadastrada na Eduzz.",
    },
  ];

  return (
    <div className="theme-pp bg-paper">
      <TrackView
        productId={offer.id}
        pageType="product"
        currency={price?.currency}
        value={confirmedPrice(offer) ?? undefined}
      />
      <LandingHeader brand="carla" cta={{ href: "#oferta", label: "Ver oferta" }} />

      <main id="conteudo" data-page-type="product">
        {/* HERO */}
        <section className="editorial-hero collection-hero">
          <div className="mx-auto grid max-w-content gap-12 px-4 py-14 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-16 lg:px-8 lg:py-24">
            <div>
              <p className="eyebrow">Combo Perfil e Propósito</p>
              <h1 className="font-display mt-5 text-[2.3rem] leading-[1.1] text-ink sm:text-[3rem] lg:text-[3.4rem]">
                <span className="block">Conheça seus padrões.</span>
                <span className="block">Reflita sobre suas escolhas.</span>
                <span className="block text-accent">Aprofunde suas relações.</span>
              </h1>
              <p className="mt-7 max-w-[36rem] text-[1.125rem] leading-relaxed">
                Uma coleção de 16 eBooks sobre comportamento, propósito, família e liderança, com linguagem cristã e
                propostas para levar a reflexão ao cotidiano.
              </p>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
                <a href="#colecao" className="btn btn-primary" data-event="cta_click" data-product-id={offer.id} data-cta-position="hero" data-destination-type="section">
                  Conhecer o combo
                </a>
                <a href="#oferta" className="link-arrow px-1" data-event="cta_click" data-product-id={offer.id} data-cta-position="hero" data-destination-type="section">
                  Ir direto para a oferta <span aria-hidden="true">↓</span>
                </a>
              </div>
            </div>

            <aside aria-label="Temas da coleção" className="collection-index rounded-2xl bg-panel px-6 py-8 sm:px-9">
              <p className="font-display text-[4.5rem] leading-none text-accent">16</p>
              <p className="mt-1 font-bold text-ink">eBooks em quatro temas</p>
              <ul className="mt-6 divide-y divide-[#cfdcd1] border-t border-[#cfdcd1]">
                {ebookGroups.map((g) => (
                  <li key={g.id} className="flex items-baseline justify-between gap-4 py-3">
                    <span className="text-[1rem] text-ink">{g.label}</span>
                    <span className="font-display text-[1.3rem] text-accent">{ebooks.filter((e) => e.group === g.id).length}</span>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </section>

        {/* REFLEXÃO */}
        <section aria-labelledby="reflexao-titulo" className="border-y border-line bg-rose-soft">
          <div className="mx-auto max-w-content px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
            <div className="max-w-3xl">
              <h2 id="reflexao-titulo" className="font-display text-balance text-[1.9rem] leading-[1.18] text-ink sm:text-[2.4rem]">
                Conhecer a si mesmo também é uma forma de cuidar de quem está perto.
              </h2>
              <p className="mt-5 max-w-reading text-[1.1rem] leading-relaxed">
                Há padrões que aparecem nas escolhas, nos medos e na maneira de conversar com a família, com a equipe ou
                com a igreja. Dar nome a eles não resolve tudo, mas abre espaço para perguntas melhores: sobre quem você
                é, sobre as pessoas com quem convive e sobre o propósito que orienta as suas decisões.
              </p>
            </div>
          </div>
        </section>

        {/* A COLEÇÃO + OS 16 TÍTULOS */}
        <section id="colecao" aria-labelledby="colecao-titulo">
          <div className="mx-auto max-w-content px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
              <div>
                <p className="eyebrow">A coleção</p>
                <h2 id="colecao-titulo" className="font-display mt-4 text-balance text-[2.1rem] leading-[1.12] text-ink sm:text-[2.6rem]">
                  Dezesseis leituras sobre comportamento, à luz da fé
                </h2>
              </div>
              <div className="prose-body max-w-reading text-[1.08rem] leading-relaxed">
                <p>
                  A maior parte dos títulos parte dos perfis comportamentais para olhar para temas do cotidiano: medos,
                  propósito, casamento, criação dos filhos, liderança e vida na igreja.
                </p>
                <p>
                  A linguagem e os princípios são cristãos. Você pode começar pelo tema que mais conversa com o seu
                  momento e seguir no seu ritmo.
                </p>
              </div>
            </div>

            <h3 id="titulos" className="mt-16 text-[1.35rem] font-bold text-ink">
              Os 16 títulos do combo
            </h3>
            <div className="mt-6 grid gap-x-16 gap-y-10 md:grid-cols-2">
              {ebookGroups.map((g) => (
                <div key={g.id}>
                  <p className="eyebrow border-b-2 border-rose pb-3">{g.label}</p>
                  <ol className="divide-y divide-line">
                    {ebooks
                      .filter((e) => e.group === g.id)
                      .map((e) => (
                        <li key={e.n} className="flex gap-4 py-3.5">
                          <span className="w-7 shrink-0 font-display text-[1.05rem] text-accent" aria-hidden="true">
                            {String(e.n).padStart(2, "0")}
                          </span>
                          <span className="text-[1.05rem] leading-snug text-ink">{e.title}</span>
                        </li>
                      ))}
                  </ol>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ACESSO E USO */}
        <section aria-labelledby="acesso-titulo" className="bg-paper-2">
          <div className="mx-auto max-w-content px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
            <p className="eyebrow">Como acessar e utilizar</p>
            <h2 id="acesso-titulo" className="font-display mt-4 text-[2rem] leading-tight text-ink sm:text-[2.4rem]">
              Da compra à leitura
            </h2>
            <ol className="mt-10 grid gap-10 md:grid-cols-3">
              <li className="editorial-step border-t-2 border-ink pt-5">
                <h3 className="text-[1.2rem] font-bold text-ink">1. Compra</h3>
                <p className="mt-2 leading-relaxed">No checkout da Eduzz, com as formas de pagamento exibidas lá.</p>
              </li>
              <li className="editorial-step border-t-2 border-ink pt-5">
                <h3 className="text-[1.2rem] font-bold text-ink">2. Acesso</h3>
                <p className="mt-2 leading-relaxed">Liberado pela plataforma depois da confirmação do pagamento.</p>
              </li>
              <li className="editorial-step border-t-2 border-ink pt-5">
                <h3 className="text-[1.2rem] font-bold text-ink">3. Leitura</h3>
                <p className="mt-2 leading-relaxed">No seu ritmo, começando pelo tema que fizer mais sentido agora.</p>
              </li>
            </ol>
            {showAnalise && (
              <p className="mt-12 max-w-reading leading-relaxed">
                Os eBooks não incluem avaliação individual nem devolutiva. Se você quer uma leitura do seu próprio perfil
                com Carla,{" "}
                <Link href={pages.analise.path} className="font-semibold text-ink underline underline-offset-4">
                  conheça a análise comportamental
                </Link>
                .
              </p>
            )}
          </div>
        </section>

        {/* SOBRE */}
        <section aria-labelledby="autora-titulo">
          <div className="mx-auto grid max-w-content items-center gap-10 px-4 py-20 sm:px-6 md:grid-cols-[16rem_1fr] lg:gap-16 lg:px-8">
            <Image
              src="/images/carla/carla-sorrindo.webp"
              width={888}
              height={840}
              sizes="256px"
              alt="Carla Gerhard sorrindo"
              className="author-portrait h-auto w-56 rounded-2xl md:w-full"
            />
            <div>
              <p className="eyebrow">Autora</p>
              <h2 id="autora-titulo" className="font-display mt-3 text-[2rem] leading-tight text-ink">
                Carla Gerhard
              </h2>
              <p className="mt-4 max-w-reading text-[1.08rem] leading-relaxed">
                Psicanalista, analista comportamental e pastora. Nos eBooks do combo, reúne temas presentes no seu
                trabalho com pessoas, famílias e lideranças.
              </p>
            </div>
          </div>
        </section>

        {/* OFERTA */}
        <section id="oferta" aria-labelledby="oferta-titulo" className="bg-panel">
          <div className="mx-auto max-w-content px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
            <div className="collection-offer mx-auto max-w-xl text-center">
              <p className="eyebrow">Oferta</p>
              <h2 id="oferta-titulo" className="font-display mt-3 text-[2.2rem] leading-tight text-ink">
                Combo Perfil e Propósito
              </h2>
              <p className="mt-3 text-[1.08rem]">16 eBooks digitais sobre comportamento, propósito, família e liderança.</p>
              {showPrice && (
                <p className="mt-8">
                  <span className="font-display block text-[3.4rem] leading-none text-ink">{formatPrice(price.amount)}</span>
                </p>
              )}
              {isReview && price && <PendingNote className="mx-auto max-w-md">valor exibido: {priceStatusLabel[price.status]} ({price.source.replace(/\.$/, "")}). Conferir no checkout antes de publicar.</PendingNote>}
              <div className="mt-8 flex justify-center">
                <CheckoutCTA offerId={offer.id} position="oferta" label="Quero acessar os 16 eBooks" className="w-full sm:w-auto" />
              </div>
              <p className="mt-4 text-[0.95rem] text-muted">
                Pagamento processado pela Eduzz. Formas de pagamento e parcelamento aparecem no checkout.
              </p>
            </div>

            {(comboExtras.approved || isReview) && (
              <div className="mx-auto mt-12 max-w-2xl">
                {!comboExtras.approved && (
                  <PendingNote>
                    extras da oferta antiga em validação. Só aparecem na publicação depois de confirmados na oferta da Eduzz.
                  </PendingNote>
                )}
                <ul className="mt-4 grid gap-4 sm:grid-cols-2">
                  {comboExtras.items.map((item) => (
                    <li key={item.title} className="border-l-2 border-accent pl-4">
                      <strong className="block text-ink">{item.title}</strong>
                      <span className="text-[0.95rem]">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </section>

        {/* FAQ */}
        <section aria-labelledby="faq-titulo">
          <div className="mx-auto grid max-w-content gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-8 lg:py-28">
            <div>
              <p className="eyebrow">Perguntas frequentes</p>
              <h2 id="faq-titulo" className="font-display mt-4 text-[2rem] leading-tight text-ink sm:text-[2.4rem]">
                Antes de comprar
              </h2>
            </div>
            <Faq items={faq} />
          </div>
        </section>

        {/* CTA FINAL */}
        <section aria-labelledby="final-titulo" className="border-t border-line bg-rose-soft">
          <div className="mx-auto flex max-w-content flex-col gap-8 px-4 py-16 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
            <h2 id="final-titulo" className="font-display max-w-xl text-balance text-[1.9rem] leading-[1.15] text-ink sm:text-[2.3rem]">
              Comece pela leitura que conversa com o seu momento.
            </h2>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <CheckoutCTA offerId={offer.id} position="final" label="Quero acessar os 16 eBooks" />
              <a href="#oferta" className="link-arrow px-1">
                Ver detalhes da oferta
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
