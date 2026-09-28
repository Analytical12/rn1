import { test } from "node:test";
import assert from "node:assert/strict";
import { pickUtm, withUtm } from "../src/lib/utm.ts";

test("captura só as UTMs aprovadas", () => {
  const utm = pickUtm("?utm_source=instagram&utm_campaign=advento&gclid=abc&fbclid=def&email=x@y.com&utm_medium=%20social%20");
  assert.deepEqual(utm, { utm_source: "instagram", utm_medium: "social", utm_campaign: "advento" });
});

test("não sobrescreve parâmetros que o checkout já tem", () => {
  const href = withUtm("https://chk.exemplo.com/abc?utm_source=origem_do_checkout", { utm_source: "instagram", utm_campaign: "natal" });
  const url = new URL(href);
  assert.equal(url.searchParams.get("utm_source"), "origem_do_checkout");
  assert.equal(url.searchParams.get("utm_campaign"), "natal");
});

test("ignora URLs que não são https", () => {
  assert.equal(withUtm("http://exemplo.com", { utm_source: "x" }), "http://exemplo.com");
  assert.equal(withUtm("#oferta", { utm_source: "x" }), "#oferta");
});
