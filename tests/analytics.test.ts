import { test } from "node:test";
import assert from "node:assert/strict";
import { CONFIRMED_EVENTS, isSiteEvent, sanitizeParams } from "../src/lib/analytics.ts";

test("mantém somente parâmetros do contrato", () => {
  const out = sanitizeParams({
    product_id: "advento_familia",
    page_type: "product",
    cta_position: "oferta",
    destination_type: "checkout",
    currency: "BRL",
    value: 59.9,
    email: "pessoa@exemplo.com",
    name: "Maria",
    phone: "5549999999999",
    message: "texto livre",
  });
  assert.deepEqual(out, {
    product_id: "advento_familia",
    page_type: "product",
    cta_position: "oferta",
    destination_type: "checkout",
    currency: "BRL",
    value: 59.9,
  });
});

test("descarta valores fora do formato (evita PII em campos permitidos)", () => {
  const out = sanitizeParams({ product_id: "pessoa@exemplo.com", cta_position: "Texto Livre", page_type: "x".repeat(60) });
  assert.deepEqual(out, {});
});

test("value sem moeda não é enviado", () => {
  assert.deepEqual(sanitizeParams({ value: 97 }), {});
  assert.deepEqual(sanitizeParams({ value: "97", currency: "BRL" }), { value: 97, currency: "BRL" });
  assert.deepEqual(sanitizeParams({ value: "abc", currency: "BRL" }), { currency: "BRL" });
});

test("purchase e generate_lead não podem ser disparados pelo site", () => {
  for (const name of CONFIRMED_EVENTS) assert.equal(isSiteEvent(name), false);
  assert.equal(isSiteEvent("checkout_click"), true);
  assert.equal(isSiteEvent("contact_click"), true);
});
