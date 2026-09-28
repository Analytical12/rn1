"use client";

import { useState } from "react";
import { pushEvent } from "@/lib/analytics";

/**
 * Vídeo do YouTube carregado somente após o clique: nada do YouTube é
 * requisitado antes da interação.
 */
export function YouTubeFacade({ id, title, credit }: { id: string; title: string; credit: string }) {
  const [active, setActive] = useState(false);

  return (
    <figure>
      <div className="aspect-video overflow-hidden rounded-lg border border-line bg-ink">
        {active ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
            title={title}
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
            className="h-full w-full"
          />
        ) : (
          <button
            type="button"
            onClick={() => {
              setActive(true);
              pushEvent("cta_click", { page_type: "home", cta_position: "podcast", destination_type: "video" });
            }}
            className="group flex h-full w-full flex-col items-center justify-center gap-3 p-6 text-center text-white"
            aria-label={`Carregar vídeo: ${title}`}
          >
            <span
              aria-hidden="true"
              className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-white/80 transition-colors group-hover:bg-white group-hover:text-ink"
            >
              <svg viewBox="0 0 24 24" className="ml-1 h-6 w-6" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
            <span className="text-[0.95rem] font-semibold">Carregar vídeo do YouTube</span>
          </button>
        )}
      </div>
      <figcaption className="mt-3">
        <span className="block font-bold text-ink">{title}</span>
        <span className="block text-[0.95rem] text-muted">{credit}</span>
      </figcaption>
    </figure>
  );
}
