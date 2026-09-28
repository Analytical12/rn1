"use client";

import { useEffect } from "react";

// Âncoras que existiam quando a NR-1 ocupava "/" (ex.: www.carlagerhard.com/#drps).
const NR1_ANCHORS = new Set(["#inicio", "#nr1", "#drps", "#programas", "#faq"]);

/** Leva links antigos da NR-1 com âncora para a seção correspondente em /nr1. */
export function LegacyAnchorRedirect() {
  useEffect(() => {
    const hash = window.location.hash;
    if (NR1_ANCHORS.has(hash)) window.location.replace(`/nr1${hash}`);
  }, []);
  return null;
}
