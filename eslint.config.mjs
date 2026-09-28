// Equivalente em flat config do antigo .eslintrc.json ("next/core-web-vitals"),
// exigido pelo eslint-config-next 16 / ESLint 9.
import coreWebVitals from "eslint-config-next/core-web-vitals";
import typescript from "eslint-config-next/typescript";

const config = [
  ...coreWebVitals,
  ...typescript,
  { ignores: [".next/**", "node_modules/**", "next-env.d.ts", "rn1_site_mds_v2/**"] },
];

export default config;
