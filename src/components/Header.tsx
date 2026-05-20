"use client";

import { useState, useEffect } from "react";

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

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-[#ECE8E1]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-content mx-auto px-6 lg:px-8 h-[68px] flex items-center justify-between">
        {/* Logo */}
        <a
          href="#inicio"
          className="flex items-center gap-2 group"
          aria-label="RN1 — Página inicial"
        >
          <span className="text-[22px] font-extrabold tracking-tight text-[#1F2A2E] group-hover:text-[#315C4B] transition-colors">
            RN1
          </span>
          <span className="hidden sm:inline-block text-xs font-medium text-[#8FAF9B] border border-[#DDEBE3] rounded-full px-2.5 py-0.5 bg-[#DDEBE3]/60">
            NR-1 & Riscos Psicossociais
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1" aria-label="Navegação principal">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3.5 py-2 text-sm font-medium text-[#4A4A46] hover:text-[#315C4B] hover:bg-[#DDEBE3]/70 rounded-lg transition-all duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="#contato"
          className="hidden lg:inline-flex items-center gap-2 bg-[#315C4B] text-white text-sm font-semibold px-5 py-2.5 rounded-xl hover:bg-[#2F7D7E] transition-colors duration-200 shadow-sm"
        >
          Falar com especialista
        </a>

        {/* Mobile menu toggle */}
        <button
          className="lg:hidden p-2 rounded-lg text-[#1F2A2E] hover:bg-[#ECE8E1] transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"
        } bg-white/98 border-t border-[#ECE8E1]`}
      >
        <nav className="px-6 py-4 flex flex-col gap-1" aria-label="Menu mobile">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="px-3.5 py-3 text-sm font-medium text-[#4A4A46] hover:text-[#315C4B] hover:bg-[#DDEBE3]/70 rounded-lg transition-all"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 border-t border-[#ECE8E1]">
            <a
              href="#contato"
              onClick={() => setMenuOpen(false)}
              className="block text-center bg-[#315C4B] text-white text-sm font-semibold px-5 py-3 rounded-xl hover:bg-[#2F7D7E] transition-colors"
            >
              Falar com especialista
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
