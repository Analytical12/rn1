"use client";

import { usePathname } from "next/navigation";
import { useCallback, useEffect, useLayoutEffect, useRef, useState, useSyncExternalStore } from "react";
import { analyticsConfig } from "@/config/site";
import { pushEvent } from "@/lib/analytics";
import { pickUtm, withUtm, type Utm } from "@/lib/utm";

const CONSENT_KEY = "cg.consent.v1";
const UTM_KEY = "cg.utm.v1";
export const CONSENT_OPEN_EVENT = "cg:consent-open";
const CONSENT_CHANGE_EVENT = "cg:consent-change";
const SERVER_SNAPSHOT = "__server__";

type Consent = { analytics: boolean; marketing: boolean };
type DataLayerWindow = Window & { dataLayer?: unknown[] };

// Sem localStorage (modo privado, bloqueio), a escolha vale só para esta visita.
let memoryConsent: string | null = null;

function readConsentRaw(): string | null {
  try {
    return localStorage.getItem(CONSENT_KEY) ?? memoryConsent;
  } catch {
    return memoryConsent;
  }
}

function parseConsent(raw: string | null): Consent | null {
  try {
    const value = JSON.parse(raw || "null");
    if (value && typeof value.analytics === "boolean" && typeof value.marketing === "boolean") {
      return { analytics: value.analytics, marketing: value.marketing };
    }
  } catch {
    /* valor inválido: trata como sem escolha */
  }
  return null;
}

function writeConsent(consent: Consent) {
  const raw = JSON.stringify({ ...consent, updatedAt: new Date().toISOString() });
  memoryConsent = raw;
  try {
    localStorage.setItem(CONSENT_KEY, raw);
  } catch {
    /* segue apenas em memória */
  }
  window.dispatchEvent(new Event(CONSENT_CHANGE_EVENT));
}

function subscribeConsent(onChange: () => void) {
  window.addEventListener("storage", onChange);
  window.addEventListener(CONSENT_CHANGE_EVENT, onChange);
  return () => {
    window.removeEventListener("storage", onChange);
    window.removeEventListener(CONSENT_CHANGE_EVENT, onChange);
  };
}

function readUtm(): Utm | null {
  try {
    return JSON.parse(sessionStorage.getItem(UTM_KEY) || "null");
  } catch {
    return null;
  }
}

// Comando no formato gtag (GTM reconhece objetos "arguments" para Consent Mode).
function gtag(...args: unknown[]) {
  void args; // o GTM espera o objeto "arguments", não um array
  const w = window as DataLayerWindow;
  w.dataLayer = w.dataLayer || [];
  // eslint-disable-next-line prefer-rest-params
  w.dataLayer.push(arguments);
}

function consentState(consent: Consent) {
  const a = consent.analytics ? "granted" : "denied";
  const m = consent.marketing ? "granted" : "denied";
  return { analytics_storage: a, ad_storage: m, ad_user_data: m, ad_personalization: m };
}

let gtmLoaded = false;
function loadGtm(id: string) {
  if (gtmLoaded) return;
  gtmLoaded = true;
  const w = window as DataLayerWindow;
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push({ "gtm.start": Date.now(), event: "gtm.js" });
  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtm.js?id=${encodeURIComponent(id)}`;
  document.head.appendChild(script);
}

/**
 * Medição do site:
 * - page_view a cada rota e cliques rastreados por atributos data-event;
 * - UTMs aprovadas guardadas na sessão (repasse ao checkout só se a oferta permitir);
 * - GTM carregado apenas com ID configurado E consentimento. Sem ID, nada é
 *   carregado e o aviso de cookies não aparece.
 */
export function AnalyticsRoot() {
  const pathname = usePathname();
  const gtmId = analyticsConfig.gtmId;
  const consentRaw = useSyncExternalStore(subscribeConsent, readConsentRaw, () => SERVER_SNAPSHOT);
  const [reopened, setReopened] = useState(false);
  const bannerRef = useRef<HTMLDivElement>(null);
  const onServer = consentRaw === SERVER_SNAPSHOT;
  const stored = onServer ? null : parseConsent(consentRaw);
  const showBanner = Boolean(gtmId) && !onServer && (stored === null || reopened);

  // UTMs aprovadas da URL de entrada
  useEffect(() => {
    const utm = pickUtm(window.location.search);
    if (Object.keys(utm).length === 0) return;
    try {
      sessionStorage.setItem(UTM_KEY, JSON.stringify(utm));
    } catch {
      /* sem armazenamento: não repassa */
    }
  }, []);

  // page_view por rota (layout effect: sai antes do view_item da página)
  useLayoutEffect(() => {
    const pageType = document.querySelector("main")?.getAttribute("data-page-type") ?? undefined;
    pushEvent("page_view", { page_type: pageType });
  }, [pathname]);

  // Cliques rastreados
  useEffect(() => {
    function onClick(event: MouseEvent) {
      const target = event.target instanceof Element ? event.target : null;
      const el = target?.closest<HTMLElement>("[data-event]");
      if (!el) return;
      const data = el.dataset;
      if (data.forwardUtm === "true" && el instanceof HTMLAnchorElement) {
        const utm = readUtm();
        if (utm) el.href = withUtm(el.href, utm);
      }
      const pageType = document.querySelector("main")?.getAttribute("data-page-type") ?? undefined;
      pushEvent(data.event ?? "", {
        product_id: data.productId,
        page_type: pageType,
        cta_position: data.ctaPosition,
        destination_type: data.destinationType,
        currency: data.currency,
        value: data.value,
      });
    }
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  // Consent Mode: tudo negado por padrão, antes de qualquer tag
  useEffect(() => {
    if (!gtmId) return;
    gtag("consent", "default", {
      analytics_storage: "denied",
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
      wait_for_update: 500,
    });
    const reopen = () => setReopened(true);
    window.addEventListener(CONSENT_OPEN_EVENT, reopen);
    return () => window.removeEventListener(CONSENT_OPEN_EVENT, reopen);
  }, [gtmId]);

  // Escolha salva: aplica e carrega o GTM somente se algo foi permitido
  useEffect(() => {
    const saved = consentRaw === SERVER_SNAPSHOT ? null : parseConsent(consentRaw);
    if (!gtmId || !saved) return;
    gtag("consent", "update", consentState(saved));
    if (saved.analytics || saved.marketing) loadGtm(gtmId);
  }, [gtmId, consentRaw]);

  // O aviso não cobre o fim da página
  useEffect(() => {
    if (!showBanner) {
      document.body.style.paddingBottom = "";
      return;
    }
    const height = bannerRef.current?.offsetHeight ?? 0;
    document.body.style.paddingBottom = `${height}px`;
    return () => {
      document.body.style.paddingBottom = "";
    };
  }, [showBanner]);

  const choose = useCallback((consent: Consent) => {
    writeConsent(consent);
    setReopened(false);
  }, []);

  if (!showBanner) return null;

  return (
    <div
      ref={bannerRef}
      role="region"
      aria-label="Preferências de cookies"
      className="fixed inset-x-0 bottom-0 z-[60] border-t border-[#d8d4cc] bg-white px-4 py-4 text-[#2b2f33] shadow-[0_-8px_24px_rgba(0,0,0,0.08)]"
    >
      <div className="mx-auto flex max-w-content flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        <p className="text-[0.95rem] leading-relaxed">
          Usamos cookies de medição e de marketing somente com a sua permissão. A navegação, os preços e as compras
          funcionam normalmente sem eles.
        </p>
        <div className="flex flex-wrap gap-2">
          <button type="button" onClick={() => choose({ analytics: false, marketing: false })} className="min-h-[44px] rounded-lg border border-[#c9c4bb] px-4 font-semibold">
            Recusar
          </button>
          <button type="button" onClick={() => choose({ analytics: true, marketing: false })} className="min-h-[44px] rounded-lg border border-[#c9c4bb] px-4 font-semibold">
            Permitir estatísticas
          </button>
          <button type="button" onClick={() => choose({ analytics: true, marketing: true })} className="min-h-[44px] rounded-lg bg-[#2b2f33] px-4 font-semibold text-white">
            Permitir estatísticas e marketing
          </button>
        </div>
      </div>
    </div>
  );
}

/** Reabre o aviso de cookies (exibido só quando há GTM configurado). */
export function CookiePreferencesButton({ className = "" }: { className?: string }) {
  if (!analyticsConfig.gtmId) return null;
  return (
    <button type="button" onClick={() => window.dispatchEvent(new Event(CONSENT_OPEN_EVENT))} className={className}>
      Preferências de cookies
    </button>
  );
}
