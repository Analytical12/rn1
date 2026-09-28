import Link from "next/link";
import { contacts, instagramHref, whatsappHref } from "@/config/contacts";
import { CookiePreferencesButton } from "./AnalyticsRoot";
import { footerLinks } from "./nav";

/** Rodapé comum às páginas de Carla Gerhard (usa as cores do tema da página). */
export function SiteFooter({ note }: { note?: React.ReactNode }) {
  const links = footerLinks();
  const nr1Whats = whatsappHref(contacts.nr1WhatsApp, "Olá, gostaria de conversar sobre a NR-1 na minha empresa.");
  const instagram = instagramHref(contacts.carlaInstagram);

  return (
    <footer className="border-t border-line bg-paper-2 text-copy">
      <div className="mx-auto grid max-w-content gap-10 px-4 py-14 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <Link href="/" className="font-display text-[1.5rem] text-ink">
            Carla Gerhard
          </Link>
          <p className="mt-3 max-w-xs text-[0.98rem] leading-relaxed">Psicanalista, analista comportamental e pastora.</p>
          {note && <div className="mt-4 text-[0.9rem] leading-relaxed text-muted">{note}</div>}
        </div>

        <nav aria-label="Páginas do site">
          <p className="eyebrow mb-4">Frentes de trabalho</p>
          <ul className="space-y-1">
            <li>
              <Link href="/" className="inline-block py-1.5 hover:text-ink hover:underline">
                Página inicial
              </Link>
            </li>
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="inline-block py-1.5 hover:text-ink hover:underline">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="eyebrow mb-4">Contato</p>
          <ul className="space-y-3 text-[0.98rem]">
            {nr1Whats && (
              <li>
                <span className="block font-semibold text-ink">Empresas e NR-1</span>
                <a
                  href={nr1Whats}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block py-1 hover:text-ink hover:underline"
                  data-event="contact_click"
                  data-product-id="nr1"
                  data-cta-position="footer"
                  data-destination-type="whatsapp"
                >
                  WhatsApp {contacts.nr1WhatsApp.display}
                </a>
                <br />
                <a
                  href={`mailto:${contacts.nr1Email.address}`}
                  className="inline-block py-1 hover:text-ink hover:underline"
                  data-event="contact_click"
                  data-product-id="nr1"
                  data-cta-position="footer"
                  data-destination-type="email"
                >
                  {contacts.nr1Email.address}
                </a>
              </li>
            )}
            <li>
              <Link href="/#contato" className="inline-block py-1 hover:text-ink hover:underline">
                Outros assuntos: veja o canal de cada frente
              </Link>
            </li>
            {instagram && (
              <li>
                <a href={instagram} target="_blank" rel="noopener noreferrer" className="inline-block py-1 hover:text-ink hover:underline">
                  Instagram @{contacts.carlaInstagram.handle}
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="mx-auto flex max-w-content flex-col gap-2 px-4 py-6 text-[0.85rem] text-muted sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} Carla Gerhard. Todos os direitos reservados.</p>
          <CookiePreferencesButton className="self-start underline underline-offset-4 hover:text-ink" />
        </div>
      </div>
    </footer>
  );
}
