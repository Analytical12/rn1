import { isReview } from "@/config/site";

/**
 * Pendência visível apenas no modo de revisão. Em produção não renderiza nada.
 * É um <span> em bloco para poder ser usado dentro de parágrafos.
 */
export function PendingNote({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  if (!isReview) return null;
  return (
    <span role="note" className={`pending-note ${className}`}>
      Pendência: {children}
    </span>
  );
}

export function ReviewBanner() {
  if (!isReview) return null;
  return (
    <aside
      aria-label="Aviso de revisão"
      className="border-t-4 border-dashed border-[#c2410c] bg-[#fff7ed] px-4 py-5 text-[0.95rem] text-[#7c2d12]"
    >
      <div className="mx-auto max-w-content">
        <strong>Versão de revisão.</strong> Os blocos marcados como “Pendência” não aparecem na publicação.
        Compras e contatos sem destino confirmado ficam desativados. Páginas em revisão não são indexadas.
      </div>
    </aside>
  );
}
