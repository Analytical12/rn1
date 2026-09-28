import Image from "next/image";
import Link from "next/link";
import { AboutSementes, SeedStripe } from "@/components/advento/Blocks";
import { LandingHeader } from "@/components/site/LandingHeader";
import { PendingNote } from "@/components/site/Pending";
import { SiteFooter } from "@/components/site/SiteFooter";
import { getOffer, isSellable } from "@/config/offers";
import { pageMetadata, pages } from "@/config/pages";
import { isReview } from "@/config/site";
import { familia, igrejas } from "@/content/advento";

export const metadata = pageMetadata("advento", {
  title: "Advento de Natal 2026 | Pequenas Sementes",
  description:
    "Duas propostas para colocar Jesus no centro da preparação para o Natal: uma para viver em família e outra para conectar o ministério infantil à rotina da casa.",
  absoluteTitle: true,
});

export default function AdventoPage() {
  const editions = [
    {
      key: "familia",
      theme: "edition-familia",
      path: pages.adventoFamilia.path,
      productId: "advento_familia" as const,
      label: "Família",
      title: "Advento de Natal 2026 — Família",
      text: "Uma caminhada de 1º a 25 de dezembro, com atividades, cartinhas, figurinhas e orientações para pais e responsáveis.",
      facts: [
        ["Onde", "Em casa"],
        ["Quando", "1º a 25 de dezembro"],
        ["Quem conduz", "Pais e responsáveis"],
      ],
      cover: familia.cover,
      cta: "Conhecer o Advento Família",
    },
    {
      key: "igrejas",
      theme: "edition-igrejas",
      path: pages.adventoIgrejas.path,
      productId: "advento_igrejas" as const,
      label: "Igrejas / Ministério Infantil",
      title: "Advento de Natal 2026 — Igrejas",
      text: "Uma programação organizada por semanas, com orientações para professores e atividades que continuam com as famílias.",
      facts: [
        ["Onde", "Na igreja e em casa"],
        ["Quando", "Seis semanas, de 15 de novembro ao Natal"],
        ["Quem conduz", "Professores e líderes do ministério infantil"],
      ],
      cover: igrejas.cover,
      cta: "Conhecer o Advento Igrejas",
    },
  ] as const;

  return (
    <div className="theme-sementes bg-paper">
      <LandingHeader brand="sementes" />
      <SeedStripe />

      <main id="conteudo" data-page-type="product_chooser">
        <section>
          <div className="mx-auto max-w-content px-4 pb-10 pt-14 sm:px-6 lg:px-8 lg:pt-20">
            <p className="eyebrow">Pequenas Sementes · Advento de Natal 2026</p>
            <h1 className="font-display mt-5 max-w-3xl text-balance text-[2.4rem] leading-[1.08] text-ink sm:text-[3.1rem] lg:text-[3.5rem]">
              O Natal se aproxima. Como vocês querem viver esse tempo?
            </h1>
            <p className="mt-6 max-w-[40rem] text-[1.15rem] leading-relaxed">
              Duas propostas para colocar Jesus no centro da preparação para o Natal: uma para viver em família e outra
              para conectar o ministério infantil à rotina da casa.
            </p>
            <PendingNote className="max-w-xl">as duas edições estão com checkout pendente; os preços ficam nas páginas de cada edição.</PendingNote>
          </div>
        </section>

        <section aria-label="Escolha a edição">
          <div className="mx-auto grid max-w-content gap-10 px-4 pb-20 sm:px-6 md:grid-cols-2 lg:gap-12 lg:px-8 lg:pb-28">
            {editions.map((e) => (
              <article key={e.key} className={`${e.theme} flex flex-col rounded-2xl border border-line bg-white p-5 sm:p-7`}>
                <Image
                  src={e.cover.src}
                  width={e.cover.width}
                  height={e.cover.height}
                  alt={e.cover.alt}
                  priority
                  sizes="(min-width: 768px) 520px, 92vw"
                  className="h-auto w-full rounded-xl"
                />
                <p className="eyebrow mt-6" style={{ color: "var(--accent)" }}>
                  {e.label}
                </p>
                <h2 className="font-display mt-2 text-[1.75rem] leading-tight text-ink">{e.title}</h2>
                <p className="mt-3 text-[1.05rem] leading-relaxed">{e.text}</p>
                <dl className="mt-6 divide-y divide-line border-y border-line">
                  {e.facts.map(([k, v]) => (
                    <div key={k} className="grid grid-cols-[7.5rem_1fr] gap-3 py-3 text-[0.98rem]">
                      <dt className="font-bold text-ink">{k}</dt>
                      <dd>{v}</dd>
                    </div>
                  ))}
                </dl>
                <div className="mt-auto pt-7">
                  {!isReview && !isSellable(getOffer(e.productId)) && (
                    <p className="mb-3 text-[0.95rem] font-semibold text-ink">Vendas desta edição ainda não abertas.</p>
                  )}
                  <Link
                    href={e.path}
                    className="btn btn-primary w-full"
                    data-event="select_item"
                    data-product-id={e.productId}
                    data-cta-position="escolha"
                    data-destination-type="page"
                  >
                    {e.cta}
                  </Link>
                </div>
              </article>
            ))}
          </div>
          <p className="mx-auto max-w-content px-4 pb-16 text-[1rem] text-muted sm:px-6 lg:px-8">
            São materiais diferentes, com calendários próprios, vendidos separadamente.
          </p>
        </section>

        <AboutSementes />
      </main>

      <SiteFooter note="Pequenas Sementes · Materiais desenvolvidos por Pra. Carla Gerhard e equipe." />
    </div>
  );
}
