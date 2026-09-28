import { contacts, instagramHref, whatsappHref, type ContactId } from "@/config/contacts";
import { checkoutHref, getOffer, isSellable, type OfferId } from "@/config/offers";
import { isReview } from "@/config/site";

type Variant = "primary" | "secondary";

interface CheckoutProps {
  offerId: OfferId;
  position: string;
  label: string;
  variant?: Variant;
  className?: string;
}

/**
 * Botão de compra. Só vira link quando a oferta está liberada e tem URL de
 * checkout válida. Nunca usa href="#" nem checkout de outra oferta.
 */
export function CheckoutCTA({ offerId, position, label, variant = "primary", className = "" }: CheckoutProps) {
  const offer = getOffer(offerId);
  const href = isSellable(offer) ? checkoutHref(offer) : null;

  if (href) {
    const price = offer.price;
    return (
      <a
        href={href}
        rel="noopener"
        className={`btn btn-${variant} ${className}`}
        data-event="checkout_click"
        data-product-id={offer.id}
        data-cta-position={position}
        data-destination-type="checkout"
        data-currency={price?.currency}
        data-value={price && price.status === "current" ? price.amount : undefined}
        data-forward-utm={offer.checkout?.forwardUtm ? "true" : undefined}
      >
        {label}
      </a>
    );
  }

  if (isReview) {
    return (
      <span role="note" className={`pending-cta ${className}`}>
        Checkout pendente: “{label}” será ativado quando a URL de pagamento desta oferta for configurada e a oferta liberada.
      </span>
    );
  }

  return <p className={`text-[1rem] font-semibold text-ink ${className}`}>As vendas desta edição ainda não foram abertas.</p>;
}

interface ContactProps {
  contactId: ContactId;
  position: string;
  label: string;
  productId: OfferId;
  message?: string;
  variant?: Variant;
  className?: string;
}

/** Link de contato. Canal sem confirmação não vira link público. */
export function ContactCTA({ contactId, position, label, productId, message, variant = "primary", className = "" }: ContactProps) {
  const contact = contacts[contactId];
  let href: string | null = null;
  if (contact.kind === "whatsapp") href = whatsappHref(contact, message);
  else if (contact.kind === "email") href = contact.status === "confirmed" ? `mailto:${contact.address}` : null;
  else href = instagramHref(contact);

  if (href) {
    const external = !href.startsWith("mailto:");
    return (
      <a
        href={href}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        className={`btn btn-${variant} ${className}`}
        data-event="contact_click"
        data-product-id={productId}
        data-cta-position={position}
        data-destination-type={contact.kind}
      >
        {label}
      </a>
    );
  }

  if (isReview) {
    return (
      <span role="note" className={`pending-cta ${className}`}>
        Contato pendente: “{label}” precisa de um canal confirmado em config/contacts.ts.
      </span>
    );
  }

  return (
    <p className={`text-[1rem] font-semibold text-ink ${className}`}>
      O agendamento por este site ainda não está disponível.
    </p>
  );
}
