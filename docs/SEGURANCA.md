# Auditoria de segurança de dependências — 27/09/2026

Fontes: `npm audit` (registro npm) e GitHub Advisory Database (`gh api /advisories`), que publica os avisos oficiais do Next.js (vercel/next.js) e do React (facebook/react).

## Resultado

| | Antes | Depois |
|---|---|---|
| `next` | 16.2.6 | **16.3.3** (mesma versão principal; a menor que corrige todos os avisos) |
| `npm audit` | 9 (1 crítico, 5 altos, 1 moderado, 2 baixos) | **0** |
| Advisories do GitHub afetando `next` instalado | 11 | 0 |
| React embutido no Next (`next/dist/compiled/react`) | `19.3.0-canary-3f0b9e61-20260317` | `19.3.0-canary-cbb046ab-20260731` |
| `react` / `react-dom` do projeto | 19.2.6 (0 advisories) | inalterados |

Mudanças: `package.json` só em `next` (`^16.2.6` → `^16.3.3`). O restante foi no lockfile, por `npm install next@16.3.3` e `npm audit fix` **sem** `--force`, dentro das faixas já declaradas. Nenhuma outra dependência direta foi alterada. `eslint-config-next` segue em 16.2.6 (não tem aviso e não interfere).

## Avisos do Next.js (corrigidos)

Uso real do projeto, verificado no código e no build: sem `middleware`/`proxy`; sem `"use server"` nem `"use cache"`; nenhum `fetch` no servidor; nenhum runtime edge; sem `i18n`, `rewrites` ou `images.remotePatterns`; `redirects()` só com destinos fixos; 12 rotas estáticas e 0 dinâmicas. Hospedagem de produção: Vercel (Linux). **Usa** a Image Optimization API (`next/image`) com imagens locais.

| Advisory | CVE | Severidade | Condição de exploração | Aplicava a este site? | Corrigido em |
|---|---|---|---|---|---|
| GHSA-2xp9-vwfh-vxw4 | — | crítica | RCE via `libheif` do `sharp` ao otimizar arquivos AVIF | **Sim, em parte**: o site usa o otimizador de imagens. Sem imagens remotas, o atacante não escolhe o arquivo, mas o componente vulnerável estava presente | 16.3.3 (+ `sharp` 0.35.5) |
| GHSA-p293-qw3h-jr36 | CVE-2026-75604 | crítica | RCE em servidor hospedado em sistema de arquivos Windows | Não: produção na Vercel (Linux) | 16.3.3 |
| GHSA-6gpp-xcg3-4w24 | CVE-2026-64642 | alta | Bypass de middleware/proxy com Turbopack e `i18n.locales` com um único locale | Não: sem middleware/proxy e sem `i18n` | 16.2.11 |
| GHSA-m99w-x7hq-7vfj | CVE-2026-64641 | alta | DoS com pelo menos uma Server Action | Não: nenhuma Server Action | 16.2.11 |
| GHSA-89xv-2m56-2m9x | CVE-2026-64649 | alta | SSRF quando Server Action redireciona/encaminha em servidor customizado | Não: sem Server Actions e sem servidor customizado | 16.2.11 |
| GHSA-p9j2-gv94-2wf4 | CVE-2026-64645 | alta | SSRF em `rewrites()`/`redirects()` cujo host de destino vem da requisição | Não: destinos fixos (`/advento/…` e o host `https://www.carlagerhard.com`); nenhum host vem da requisição | 16.2.11 |
| GHSA-68g3-v927-f742 | CVE-2026-64648 | média | `fetch` no servidor com corpo retornando resposta em cache de outra requisição | Não: nenhum `fetch` no servidor | 16.2.11 |
| GHSA-4633-3j49-mh5q | CVE-2026-64647 | média | Idem, com corpo em charset diferente de UTF-8 | Não | 16.2.11 |
| GHSA-4c39-4ccg-62r3 | CVE-2026-64646 | média | Payload ilimitado de Server Action no runtime edge | Não | 16.2.11 |
| GHSA-q8wf-6r8g-63ch | CVE-2026-64644 | média | DoS no otimizador com SVG **remoto** (`remotePatterns`) | Não: sem imagens remotas; teste local devolveu 400 para URL externa | 16.2.11 |
| GHSA-955p-x3mx-jcvp | CVE-2026-64643 | média | Exposição de endpoints de Server Functions / `use cache` | Não: não há esses endpoints | 16.2.11 |

## Outros avisos (corrigidos)

| Pacote | Advisory | Onde é usado | Antes → depois |
|---|---|---|---|
| `postcss` (raiz e do Next) | GHSA-qx2v-qp2m-jg93, GHSA-6g55-p6wh-862q, GHSA-fxqj-rqcc-2cmp, GHSA-r28c-9q8g-f849 | Build (Tailwind/Autoprefixer/Next). Exploração exige CSS ou source map de terceiros; o CSS do site é próprio | 8.5.15 / 8.4.31 → 8.5.23 |
| `sharp` | GHSA-f88m-g3jw-g9cj, GHSA-rgj7-g3m4-5g8c | Otimização de imagens do Next | 0.34.5 → 0.35.5 |
| `nanoid` | GHSA-28wg-ghj8-5hjv, GHSA-2v37-7h3g-55p8 | Via `postcss` | 3.3.12 → 3.3.19 |
| `react-server-dom-*` embutido no Next | GHSA-wx67-qw84-cm4g (CVE-2026-44907, DoS em Server Functions) | Runtime do App Router | Canary de 17/03/2026 → canary de 31/07/2026 |
| `brace-expansion` | GHSA-3jxr-9vmj-r5cp, GHSA-mh99-v99m-4gvg, GHSA-rgw5-rvv9-x895 | Só lint (ESLint, typescript-eslint) | 1.1.14 / 5.0.6 → 1.1.21 / 5.0.12 |
| `browserslist` | GHSA-c83g-rgw3-j3cx, GHSA-73wf-gq98-2v4g | Só build | 4.28.2 → 4.29.1 |
| `baseline-browser-mapping` | GHSA-w5vr-8v7q-w6rv | Build (dados de navegadores) | 2.10.31 → 2.11.26 |
| `@babel/core` | GHSA-4x5r-pxfx-6jf8 | Só lint (`eslint-plugin-react-hooks`) | 7.29.0 → 7.29.7 |
| `postcss-selector-parser` | GHSA-w9m9-85wc-3x92 | Só build (Tailwind) | 6.1.2 → 6.1.4 |

## Verificação após a atualização

- `eslint .`, `tsc --noEmit`: sem erros.
- `next build` nos modos produção e revisão, seguidos de `npm test`: 17 aprovados, 1 ignorado por modo, 0 falhas.
- `next start`: 7 rotas 200, alias 308, 404 real; `/_next/image` com imagem local 200; com URL externa 400.

## Limitações

- O resultado vale para as bases consultadas em 27/09/2026. Novos avisos exigem nova auditoria (`npm audit`).
- CVE-2026-44907: o GitHub lista a correção para os pacotes estáveis `react-server-dom-*` (19.2.8). O Next embute um canary do React; a versão embutida na 16.3.3 é posterior à publicação do aviso e a base do GitHub não lista avisos para `next@16.3.3`, mas não conferi o commit do React dentro do canary. O site não usa Server Functions.
- Na Vercel, `/_next/image` é atendido pela infraestrutura de imagens da própria Vercel; a correção do `sharp` vale para o servidor Next (local ou auto-hospedado).
- Nada foi testado em um deploy da Vercel nesta etapa.
