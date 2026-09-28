/**
 * Canais de contato. Cada canal registra a origem da confirmação e o escopo
 * em que pode ser usado. Um canal "pending" nunca vira link público.
 */
export type ContactStatus = "confirmed" | "pending";

export interface WhatsAppContact {
  kind: "whatsapp";
  number: string | null; // somente dígitos, com DDI
  display: string | null;
  status: ContactStatus;
  scope: string[];
  source: string;
  note?: string;
}

export interface EmailContact {
  kind: "email";
  address: string;
  status: ContactStatus;
  scope: string[];
  source: string;
}

export interface InstagramContact {
  kind: "instagram";
  handle: string; // sem @
  status: ContactStatus;
  scope: string[];
  source: string;
}

export const contacts = {
  nr1WhatsApp: {
    kind: "whatsapp",
    number: "5549991558180",
    display: "+55 (49) 99155-8180",
    status: "confirmed",
    scope: ["nr1"],
    source: "Site NR-1 publicado (repositório rn1, commit 3be4e6a).",
  },
  nr1Email: {
    kind: "email",
    address: "nr1@e31.com.br",
    status: "confirmed",
    scope: ["nr1"],
    source: "Site NR-1 publicado (repositório rn1, commit 3be4e6a).",
  },
  analiseWhatsApp: {
    kind: "whatsapp",
    // Preencher com o número confirmado e trocar status para "confirmed".
    number: null,
    display: null,
    status: "pending",
    scope: ["analise_comportamental"],
    source: "Aguardando confirmação.",
    note:
      "O site antigo usa três números diferentes para análise comportamental: " +
      "(49) 98809-8180 (página /links, também usado para certificado digital e registro de marcas), " +
      "(49) 3027-2050 (página /analisevalor) e (49) 99155-8180 (\"Precisa de ajuda?\" em /links, mesmo número da NR-1).",
  },
  carlaInstagram: {
    kind: "instagram",
    handle: "carlagerhard",
    status: "confirmed",
    scope: ["home", "advento"],
    source:
      "PDFs do Advento 2026 (Família e Igreja), página de titularidade: \"Instagram oficial: @carlagerhard | @pequenassementesvnn\". " +
      "O perfil @carlagerhard_ aparece só nas páginas antigas do combo e não é usado.",
  },
  sementesInstagram: {
    kind: "instagram",
    handle: "pequenassementesvnn",
    status: "confirmed",
    scope: ["advento"],
    source: "PDFs do Advento 2026, página de titularidade e rodapé de todas as páginas.",
  },
} as const satisfies Record<string, WhatsAppContact | EmailContact | InstagramContact>;

export type ContactId = keyof typeof contacts;

export function whatsappHref(contact: WhatsAppContact, message?: string): string | null {
  if (contact.status !== "confirmed" || !contact.number) return null;
  const text = message ? `?text=${encodeURIComponent(message)}` : "";
  return `https://wa.me/${contact.number}${text}`;
}

export function instagramHref(contact: InstagramContact): string | null {
  return contact.status === "confirmed" ? `https://www.instagram.com/${contact.handle}/` : null;
}
