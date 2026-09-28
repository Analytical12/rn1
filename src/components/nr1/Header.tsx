"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "NR-1", href: "#nr1" },
  { label: "DRPS", href: "#drps" },
  { label: "Programas", href: "#programas" },
  { label: "Sobre", href: "#sobre" },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "#contato" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-[#ECE8E1]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 h-[68px] flex items-center justify-between gap-3">
        {/* Marca: Carla Gerhard (site principal) / RN1 */}
        <div className="flex items-center gap-2 min-w-0">
          <Link
            href="/"
            className="text-sm font-semibold text-[#4A4A46] hover:text-[#315C4B] transition-colors whitespace-nowrap"
          >
            Carla Gerhard
          </Link>
          <span aria-hidden="true" className="text-[#8FAF9B]">/</span>
          <a
            href="#inicio"
            className="flex items-center gap-2 group"
            aria-label="RN1 — início da página NR-1"
          >
            <span className="text-[22px] font-extrabold tracking-tight text-[#1F2A2E] group-hover:text-[#315C4B] transition-colors">
              RN1
            </span>
            <span className="hidden 2xl:inline-block text-xs font-medium text-[#315C4B] border border-[#DDEBE3] rounded-full px-2.5 py-0.5 bg-[#DDEBE3]/60">
              NR-1 e Programas Contínuos
            </span>
          </a>
        </div>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1" aria-label="Seções da página NR-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3 py-2 text-sm font-medium whitespace-nowrap text-[#4A4A46] hover:text-[#315C4B] hover:bg-[#DDEBE3]/70 rounded-lg transition-all duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="#contato"
          className="hidden lg:inline-flex items-center gap-2 bg-[#315C4B] text-white text-sm font-semibold px-5 py-2.5 rounded-xl hover:bg-[#2F7D7E] transition-colors duration-200 shadow-sm whitespace-nowrap"
          data-event="cta_click"
          data-product-id="nr1"
          data-cta-position="header"
          data-destination-type="section"
        >
          Conversar sobre minha empresa
        </a>

        {/* Mobile menu toggle */}
        <button
          ref={toggleRef}
          className="lg:hidden min-h-[44px] min-w-[44px] flex items-center justify-center rounded-lg text-[#1F2A2E] hover:bg-[#ECE8E1] transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          aria-controls="menu-nr1"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu: fora da árvore de foco quando fechado */}
      <div id="menu-nr1" className={`lg:hidden ${menuOpen ? "block" : "hidden"} bg-white border-t border-[#ECE8E1]`}>
        <nav className="px-4 sm:px-6 py-4 flex flex-col gap-1" aria-label="Menu da página NR-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="px-3.5 py-3 text-base font-medium text-[#4A4A46] hover:text-[#315C4B] hover:bg-[#DDEBE3]/70 rounded-lg transition-all"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 border-t border-[#ECE8E1]">
            <a
              href="#contato"
              onClick={() => setMenuOpen(false)}
              className="block text-center bg-[#315C4B] text-white text-base font-semibold px-5 py-3 rounded-xl hover:bg-[#2F7D7E] transition-colors"
              data-event="cta_click"
              data-product-id="nr1"
              data-cta-position="header"
              data-destination-type="section"
            >
              Conversar sobre minha empresa
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
