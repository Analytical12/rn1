"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { pushEvent } from "@/lib/analytics";

export interface Sample {
  src: string;
  width: number;
  height: number;
  alt: string;
  title: string;
  caption: string;
}

/**
 * Amostras reais do produto. Cada miniatura abre a página inteira num <dialog>
 * nativo (Esc fecha, o foco volta ao botão). Nenhum PDF é exposto.
 */
export function SampleGallery({ samples, productId }: { samples: Sample[]; productId: string }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [active, setActive] = useState<Sample | null>(null);

  function open(sample: Sample) {
    setActive(sample);
    dialogRef.current?.showModal();
    pushEvent("preview_open", { product_id: productId, page_type: "product", cta_position: "gallery" });
  }

  function close() {
    dialogRef.current?.close();
  }

  return (
    <>
      <ul className="grid gap-x-8 gap-y-12 md:grid-cols-3">
        {samples.map((sample) => (
          <li key={sample.src}>
            <figure>
              <button
                type="button"
                onClick={() => open(sample)}
                className="group block w-full overflow-hidden rounded-lg border border-line bg-white text-left"
                aria-label={`Ampliar página: ${sample.title}`}
              >
                <Image
                  src={sample.src}
                  width={sample.width}
                  height={sample.height}
                  alt={sample.alt}
                  sizes="(min-width: 1160px) 360px, (min-width: 768px) 30vw, 92vw"
                  className="h-auto w-full transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </button>
              <figcaption className="mt-4">
                <span className="block text-[1.05rem] font-bold text-ink">{sample.title}</span>
                <span className="mt-1 block text-[0.98rem] leading-relaxed text-copy">{sample.caption}</span>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialogRef}
        onClose={() => setActive(null)}
        onClick={(event) => {
          if (event.target === dialogRef.current) close();
        }}
        aria-label={active ? `Página ampliada: ${active.title}` : "Página ampliada"}
        className="m-auto w-[min(96vw,1200px)] max-w-none rounded-xl bg-white p-0 backdrop:bg-black/70"
      >
        {active && (
          <div className="p-3 sm:p-5">
            <div className="mb-3 flex items-center justify-between gap-4">
              <p className="text-[1rem] font-bold text-ink">{active.title}</p>
              <button
                type="button"
                onClick={close}
                autoFocus
                className="min-h-[44px] rounded-lg border border-line px-4 text-[0.95rem] font-bold text-ink hover:bg-paper-2"
              >
                Fechar
              </button>
            </div>
            <Image
              src={active.src}
              width={active.width}
              height={active.height}
              alt={active.alt}
              sizes="96vw"
              className="mx-auto h-auto max-h-[78vh] w-auto"
            />
          </div>
        )}
      </dialog>
    </>
  );
}
