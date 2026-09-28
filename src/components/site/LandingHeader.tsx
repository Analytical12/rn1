import Image from "next/image";
import Link from "next/link";

interface Props {
  brand: "carla" | "sementes";
  cta?: { href: string; label: string };
}

/**
 * Cabeçalho enxuto das páginas de venda: marca, volta para a home e um único
 * atalho para a oferta. Sem menu de produtos concorrendo com o CTA.
 */
export function LandingHeader({ brand, cta }: Props) {
  return (
    <header className="border-b border-line bg-paper">
      <div className="mx-auto flex max-w-content items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        {brand === "carla" ? (
          <Link href="/" className="font-display text-[1.35rem] leading-none text-ink" aria-label="Carla Gerhard — página inicial">
            Carla Gerhard
          </Link>
        ) : (
          <div className="flex items-center gap-3">
            <Link href="/advento" aria-label="Pequenas Sementes — Advento de Natal 2026">
              <Image src="/images/advento/pequenas-sementes.webp" alt="Pequenas Sementes" width={503} height={221} priority className="h-11 w-auto sm:h-12" />
            </Link>
            <Link href="/" className="hidden text-[0.9rem] font-semibold text-muted underline-offset-4 hover:text-ink hover:underline sm:inline">
              por Carla Gerhard
            </Link>
          </div>
        )}
        {cta && (
          <a
            href={cta.href}
            className="btn btn-primary min-h-[44px] px-4 py-2 text-[0.95rem]"
            data-event="cta_click"
            data-cta-position="header"
            data-destination-type="section"
          >
            {cta.label}
          </a>
        )}
      </div>
    </header>
  );
}
