import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import { footerLinks, mainNavLinks } from "@/components/site/nav";
import { fraunces } from "./fonts";

export const metadata: Metadata = {
  title: { absolute: "Página não encontrada | Carla Gerhard" },
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className={`${fraunces.variable} theme-carla bg-paper`}>
      <SiteHeader links={mainNavLinks()} />
      <main id="conteudo" data-page-type="not_found" className="mx-auto max-w-content px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <p className="eyebrow">Erro 404</p>
        <h1 className="font-display mt-4 max-w-2xl text-balance text-[2.4rem] leading-[1.1] text-ink sm:text-[3rem]">
          Esta página não foi encontrada.
        </h1>
        <p className="mt-5 max-w-reading text-[1.1rem] leading-relaxed">
          O endereço pode ter mudado. Estes caminhos levam às frentes do trabalho de Carla Gerhard:
        </p>
        <ul className="mt-8 flex flex-col gap-4">
          <li>
            <Link href="/" className="link-arrow">
              Página inicial <span aria-hidden="true">→</span>
            </Link>
          </li>
          {footerLinks().map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="link-arrow">
                {link.label} <span aria-hidden="true">→</span>
              </Link>
            </li>
          ))}
        </ul>
      </main>
      <SiteFooter />
    </div>
  );
}
