"use client";

import { useEffect } from "react";
import { pushEvent } from "@/lib/analytics";

/** Dispara view_item uma vez ao abrir a página de um produto ou serviço. */
export function TrackView({ productId, pageType, currency, value }: { productId: string; pageType: string; currency?: string; value?: number }) {
  useEffect(() => {
    pushEvent("view_item", { product_id: productId, page_type: pageType, currency, value });
  }, [productId, pageType, currency, value]);
  return null;
}
