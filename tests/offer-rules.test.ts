import { test } from "node:test";
import assert from "node:assert/strict";
import {
  checkoutHref,
  confirmedPrice,
  isConversionReady,
  isIndexable,
  isSellable,
  shouldShowPrice,
} from "../src/config/offer-rules.ts";

type Rules = Parameters<typeof isSellable>[0];

// Produto pago completo: liberado, checkout https e preço confirmado.
const pago: Rules = {
  status: "published",
  conversion: "checkout",
  price: { amount: 97, currency: "BRL", status: "current", source: "teste" },
  checkout: { url: "https://checkout.exemplo.com/abc", platform: "teste", forwardUtm: false },
  contact: null,
};

const com = (patch: Partial<Rules>): Rules => ({ ...pago, ...patch });
const preco = (patch: Partial<NonNullable<Rules["price"]>>) => com({ price: { ...pago.price!, ...patch } });

test("produto pago completo: vendável, pronto, indexável e com preço em produção", () => {
  assert.equal(confirmedPrice(pago), 97);
  assert.equal(isSellable(pago), true);
  assert.equal(isConversionReady(pago, false), true);
  assert.equal(isIndexable(pago, false), true);
  assert.equal(shouldShowPrice(pago, false), true);
});

test("preço ausente bloqueia venda, indexação e exibição", () => {
  const semPreco = com({ price: null });
  assert.equal(confirmedPrice(semPreco), null);
  assert.equal(isSellable(semPreco), false);
  assert.equal(isConversionReady(semPreco, true), false);
  assert.equal(isIndexable(semPreco, true), false);
  assert.equal(shouldShowPrice(semPreco, false), false);
  assert.equal(shouldShowPrice(semPreco, true), false);
});

test("preço inválido (zero, negativo, NaN, infinito, não numérico) bloqueia tudo", () => {
  for (const amount of [0, -10, Number.NaN, Number.POSITIVE_INFINITY, "97" as unknown as number]) {
    const invalido = preco({ amount });
    assert.equal(confirmedPrice(invalido), null, `amount=${String(amount)}`);
    assert.equal(isSellable(invalido), false, `amount=${String(amount)}`);
    assert.equal(isIndexable(invalido, true), false, `amount=${String(amount)}`);
    assert.equal(shouldShowPrice(invalido, false), false, `produção amount=${String(amount)}`);
    assert.equal(shouldShowPrice(invalido, true), false, `revisão amount=${String(amount)}`);
  }
});

test("preço não confirmado (working, provisional): sem venda e oculto em produção, visível na revisão", () => {
  for (const status of ["working", "provisional"] as const) {
    const naoConfirmado = preco({ status, amount: 59.9 });
    assert.equal(confirmedPrice(naoConfirmado), null, status);
    assert.equal(isSellable(naoConfirmado), false, status);
    assert.equal(isConversionReady(naoConfirmado, true), false, status);
    assert.equal(isIndexable(naoConfirmado, true), false, status);
    assert.equal(shouldShowPrice(naoConfirmado, false), false, `produção ${status}`);
    assert.equal(shouldShowPrice(naoConfirmado, true), true, `revisão ${status}`);
  }
});

test("oferta não liberada não vende nem mostra preço em produção, mesmo com preço confirmado", () => {
  for (const status of ["pending", "draft"] as const) {
    const naoLiberada = com({ status });
    assert.equal(isSellable(naoLiberada), false, status);
    assert.equal(isIndexable(naoLiberada, true), false, status);
    assert.equal(shouldShowPrice(naoLiberada, false), false, status);
    assert.equal(shouldShowPrice(naoLiberada, true), true, `revisão ${status}`);
  }
});

test("checkout ausente, sem https, com credenciais ou malformado bloqueia a venda", () => {
  const casos = [
    null,
    { url: "http://checkout.exemplo.com/abc", platform: "t", forwardUtm: false },
    { url: "https://user:senha@checkout.exemplo.com/abc", platform: "t", forwardUtm: false },
    { url: "#", platform: "t", forwardUtm: false },
    { url: "", platform: "t", forwardUtm: false },
  ];
  for (const checkout of casos) {
    const oferta = com({ checkout });
    assert.equal(checkoutHref(oferta), null, JSON.stringify(checkout));
    assert.equal(isSellable(oferta), false, JSON.stringify(checkout));
    assert.equal(isIndexable(oferta, true), false, JSON.stringify(checkout));
  }
});

test("serviço por contato não depende de preço público", () => {
  const servico: Rules = { status: "published", conversion: "contact", price: null, checkout: null, contact: "nr1WhatsApp" };
  assert.equal(isSellable(servico), false);
  assert.equal(shouldShowPrice(servico, false), false);
  assert.equal(isConversionReady(servico, true), true);
  assert.equal(isIndexable(servico, true), true);
  // Contato não confirmado: sem conversão e sem indexação
  assert.equal(isConversionReady(servico, false), false);
  assert.equal(isIndexable(servico, false), false);
  // Serviço sem canal definido
  assert.equal(isConversionReady({ ...servico, contact: null }, true), false);
});

test("rascunho sem conversão definida nunca fica pronto", () => {
  const rascunho: Rules = { status: "draft", conversion: null, price: null, checkout: null, contact: null };
  assert.equal(isConversionReady(rascunho, true), false);
  assert.equal(isIndexable(rascunho, true), false);
});
