"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    __revealReady?: boolean;
  }
}

/**
 * Animação de entrada da NR-1. O conteúdo só fica oculto enquanto <html> tem
 * .js-reveal (ver script em app/layout.tsx); sem JS, com falha de hidratação
 * ou com movimento reduzido, tudo aparece normalmente.
 */
export default function ScrollReveal() {
  useEffect(() => {
    const root = document.documentElement;
    const elements = Array.from(document.querySelectorAll(".theme-nr1 .reveal"));
    const reduced = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    if (reduced || !("IntersectionObserver" in window)) {
      root.classList.remove("js-reveal");
      return;
    }

    // Em navegação interna o script inicial já pode ter liberado o conteúdo:
    // o que está na tela fica visível antes de reativar a animação.
    elements.forEach((el) => {
      if (el.getBoundingClientRect().top < window.innerHeight) el.classList.add("visible");
    });
    window.__revealReady = true;
    root.classList.add("js-reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return null;
}
