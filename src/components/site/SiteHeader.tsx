"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export interface NavLink {
  href: string;
  label: string;
}

/** Cabeçalho da home e das páginas institucionais. Menu curto, utilizável por teclado. */
export function SiteHeader({ links }: { links: NavLink[] }) {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="relative z-40 border-b border-line bg-paper">
      <div className="mx-auto flex max-w-content items-center justify-between gap-6 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="font-display text-[1.45rem] leading-none text-ink" aria-label="Carla Gerhard — página inicial">
          Carla Gerhard
        </Link>

        <button
          ref={buttonRef}
          type="button"
          className="flex min-h-[44px] items-center gap-2 rounded-lg border border-line px-3 text-[0.95rem] font-bold text-ink lg:hidden"
          aria-expanded={open}
          aria-controls="menu-principal"
          onClick={() => setOpen((value) => !value)}
        >
          <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2}>
            {open ? <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" /> : <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
          Menu
        </button>

        <nav
          id="menu-principal"
          aria-label="Principal"
          className={`${open ? "block" : "hidden"} absolute inset-x-0 top-full border-b border-line bg-paper px-4 pb-4 sm:px-6 lg:static lg:block lg:border-0 lg:p-0`}
        >
          <ul className="flex flex-col lg:flex-row lg:items-center lg:gap-1">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-3 text-[1rem] font-semibold text-copy hover:bg-accent-soft hover:text-ink lg:py-2 lg:text-[0.95rem]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
