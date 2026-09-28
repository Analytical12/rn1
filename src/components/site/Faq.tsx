import { isReview } from "@/config/site";
import { PendingNote } from "./Pending";

export interface FaqEntry {
  q: string;
  a: React.ReactNode;
  /** Resposta depende de confirmação: aparece só na revisão, com a pendência. */
  pending?: string;
}

/** Perguntas frequentes com <details>: acessível por teclado, sem altura fixa e sem JS. */
export function Faq({ items, className = "" }: { items: FaqEntry[]; className?: string }) {
  const visible = items.filter((item) => isReview || !item.pending);
  return (
    <div className={`divide-y divide-line border-y border-line ${className}`}>
      {visible.map((item) => (
        <details key={item.q} className="faq-item">
          <summary className="flex min-h-[56px] items-start justify-between gap-6 py-5">
            <span className="text-[1.05rem] font-bold leading-snug text-ink">{item.q}</span>
            <span
              aria-hidden="true"
              className="faq-icon mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-line text-lg leading-none text-accent transition-transform"
            >
              +
            </span>
          </summary>
          <div className="max-w-reading pb-6 pr-2 text-[1rem] leading-relaxed text-copy">
            {item.pending && <PendingNote>{item.pending}</PendingNote>}
            {item.a}
          </div>
        </details>
      ))}
    </div>
  );
}
