import { CheckoutCTA } from "@/components/site/Cta";
import { PendingNote } from "@/components/site/Pending";
import { contacts, instagramHref } from "@/config/contacts";
import { formatPrice, getOffer, isSellable, priceStatusLabel, shouldShowPrice, type OfferId } from "@/config/offers";
import { isReview } from "@/config/site";

/**
 * Enquanto a edição não está à venda, a publicação não usa texto de compra
 * em botões que levam à seção da oferta. Na revisão, mostra o texto final.
 */
export function offerCtaLabel(offerId: OfferId, label: string, fallback = "Ver detalhes da edição") {
  return isReview || isSellable(getOffer(offerId)) ? label : fallback;
}

const seedColors = ["var(--s-green)", "var(--s-orange)", "var(--s-blue)", "var(--s-pink)", "var(--s-yellow)"];

/** Faixa com as cores do logo Pequenas Sementes (detalhe de interface). */
export function SeedStripe({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden="true" className={`seed-stripe flex h-1.5 w-full ${className}`}>
      {seedColors.map((c) => (
        <span key={c} className="flex-1" style={{ backgroundColor: c }} />
      ))}
    </div>
  );
}

export function seedColor(i: number) {
  // Tons de apoio com contraste para números e textos; o logo mantém suas cores.
  const colors = ["#427041", "#a94e28", "#356b80", "#a03e58", "#826622"];
  return colors[i % colors.length];
}

interface Week {
  label: string;
  period: string;
  theme: string;
  steps?: string;
}

export function WeekList({ weeks, columns }: { weeks: Week[]; columns: string }) {
  return (
    <ol className={`week-list grid gap-x-8 gap-y-10 ${columns}`}>
      {weeks.map((w, i) => (
        <li key={w.label} className="border-t-4 pt-4" style={{ borderColor: seedColor(i) }}>
          <p className="text-[0.85rem] font-bold uppercase tracking-[0.12em] text-muted">{w.label}</p>
          <p className="mt-1 text-[1.05rem] font-bold text-ink">
            {w.period}
            {w.steps && <span className="block text-[0.95rem] font-semibold text-muted">{w.steps}</span>}
          </p>
          <p className="font-display mt-3 text-[1.25rem] leading-snug text-ink">{w.theme}</p>
        </li>
      ))}
    </ol>
  );
}

export function Steps({ steps }: { steps: { title: string; text: string }[] }) {
  return (
    <ol className="advent-steps grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
      {steps.map((s, i) => (
        <li key={s.title}>
          <span
            aria-hidden="true"
            className="font-display flex h-11 w-11 items-center justify-center rounded-full text-[1.2rem] text-white"
          >
            {i + 1}
          </span>
          <h3 className="mt-4 text-[1.15rem] font-bold text-ink">{s.title}</h3>
          <p className="mt-1.5 leading-relaxed">{s.text}</p>
        </li>
      ))}
    </ol>
  );
}

interface OfferPanelProps {
  offerId: OfferId;
  ctaLabel: string;
  included: string[];
  notIncluded: string;
  microcopy: string;
  license: React.ReactNode;
  licensePending?: string;
}

/** Oferta: preço vindo da configuração, CTA único e condições sem falsa escassez. */
export function OfferPanel({ offerId, ctaLabel, included, notIncluded, microcopy, license, licensePending }: OfferPanelProps) {
  const offer = getOffer(offerId);
  const price = offer.price;
  return (
    <div className="advent-offer mx-auto max-w-2xl rounded-2xl border border-line bg-white px-6 py-10 text-center sm:px-12">
      <p className="eyebrow">Pequenas Sementes</p>
      <h2 id="oferta-titulo" className="font-display mt-3 text-balance text-[1.9rem] leading-tight text-ink sm:text-[2.2rem]">
        {offer.name}
      </h2>
      {shouldShowPrice(offer) && price && (
        <p className="font-display mt-6 text-[3.2rem] leading-none text-ink">{formatPrice(price.amount)}</p>
      )}
      {isReview && price && (
        <PendingNote className="mx-auto max-w-md">
          preço: {priceStatusLabel[price.status]}. Em produção, só aparece com a oferta liberada.
        </PendingNote>
      )}
      <div className="mt-8 flex justify-center">
        <CheckoutCTA offerId={offerId} position="oferta" label={ctaLabel} className="w-full sm:w-auto" />
      </div>
      <p className="mt-4 text-[0.95rem] text-muted">{microcopy}</p>

      <div className="mt-10 border-t border-line pt-8 text-left">
        <p className="font-bold text-ink">O que está incluído</p>
        <ul className="mt-3 space-y-2">
          {included.map((item) => (
            <li key={item} className="flex gap-3 leading-relaxed">
              <span aria-hidden="true" className="mt-2 h-2 w-2 shrink-0 rounded-full" style={{ backgroundColor: "var(--accent)" }} />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-6 font-bold text-ink">Não incluído</p>
        <p className="mt-2 leading-relaxed">{notIncluded}</p>
        <p className="mt-6 font-bold text-ink">Uso do material</p>
        <div className="mt-2 leading-relaxed">{license}</div>
        {licensePending && <PendingNote>{licensePending}</PendingNote>}
      </div>
    </div>
  );
}

export function AboutSementes() {
  const sementes = instagramHref(contacts.sementesInstagram);
  return (
    <section aria-labelledby="sementes-titulo" className="border-t border-line">
      <div className="mx-auto grid max-w-content gap-6 px-4 py-16 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-8">
        <h2 id="sementes-titulo" className="font-display text-[1.7rem] leading-tight text-ink">
          Sobre o Pequenas Sementes
        </h2>
        <div className="max-w-reading leading-relaxed">
          <p>
            O Pequenas Sementes nasceu em 2012 com o propósito de caminhar com as famílias na formação espiritual das
            crianças, ajudando a ensinar a Palavra de Deus de maneira simples e presente no dia a dia. Os materiais são
            desenvolvidos por Pra. Carla Gerhard e equipe.
          </p>
          {sementes && (
            <p className="mt-3">
              Instagram:{" "}
              <a href={sementes} target="_blank" rel="noopener noreferrer" className="font-semibold text-ink underline underline-offset-4">
                @{contacts.sementesInstagram.handle}
              </a>
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
