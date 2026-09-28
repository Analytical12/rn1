import { isPageListed, pages } from "@/config/pages";
import type { NavLink } from "./SiteHeader";

/** Menu curto da home: frentes principais e âncoras da própria home. */
export function mainNavLinks(): NavLink[] {
  const links: NavLink[] = [];
  if (isPageListed("nr1")) links.push({ href: pages.nr1.path, label: "Empresas" });
  if (isPageListed("analise")) links.push({ href: pages.analise.path, label: "Análise comportamental" });
  links.push({ href: "/#materiais", label: "Materiais" });
  links.push({ href: "/#sobre", label: "Sobre" });
  links.push({ href: "/#contato", label: "Contato" });
  return links;
}

/** Todas as páginas publicáveis, para o rodapé. */
export function footerLinks(): NavLink[] {
  const entries: [Parameters<typeof isPageListed>[0], string][] = [
    ["nr1", "NR-1 para empresas"],
    ["analise", "Análise comportamental"],
    ["perfil", "Combo Perfil e Propósito"],
    ["advento", "Advento de Natal 2026"],
  ];
  return entries.filter(([key]) => isPageListed(key)).map(([key, label]) => ({ href: pages[key].path, label }));
}
