# Entrega — site principal de Carla Gerhard

Data: 27/09/2026 · Branch local: `feat/site-principal-carla` · Base: `main` em `3be4e6a` (site NR-1 publicado).
Nada foi publicado, enviado ao GitHub ou alterado em DNS, WordPress, checkouts ou ferramentas de anúncio.

## Rodar localmente

```bash
npm ci
npm run dev            # http://localhost:3000 (modo revisão: pendências visíveis)
# ou, como em produção:
NEXT_PUBLIC_SITE_MODE=production npm run build && npm start
```

## Arquitetura

| Rota | Página | Tema | Conversão |
|---|---|---|---|
| `/` | Apresentação de Carla e direcionamento | `theme-carla` | Âncoras e links para cada frente |
| `/nr1` | NR-1 (conteúdo do site anterior) | `theme-nr1` (paleta original) | WhatsApp/e-mail NR-1 |
| `/analise-comportamental` | Serviço com devolutiva | `theme-pp` | Contato (canal pendente) |
| `/perfil-e-proposito` | Combo de 16 eBooks | `theme-pp` | Checkout Eduzz `pvcyogot` |
| `/advento` | Escolha entre as edições | `theme-sementes` | Links para as edições |
| `/advento/familia` | Venda Família | `theme-sementes edition-familia` | Checkout pendente |
| `/advento/igrejas` | Venda Igrejas | `theme-sementes edition-igrejas` | Checkout pendente |
| `/advento-familia`, `/advento-igrejas` | 308 → rotas acima | — | — |
| 404 | Página não encontrada real | `theme-carla` | Links para as frentes |

- Next.js 16 (App Router), React 19, Tailwind 3. Sem CMS, banco ou novas dependências de runtime.
- Temas por CSS variables escopadas (`src/app/globals.css`); nenhuma regra da NR-1 vale fora de `.theme-nr1`.
- Fontes: Manrope (todas as páginas) e Fraunces (títulos fora da NR-1, carregada só no grupo `(site)` e na 404).
- URL canônica sem barra final, host `https://www.carlagerhard.com` (é o único que aponta para a Vercel hoje).
- **Modo do site** (`next.config.ts`): `production` apenas no deploy de produção da Vercel ou com `NEXT_PUBLIC_SITE_MODE=production`; qualquer outro ambiente é `review`. Em revisão, pendências aparecem marcadas na página e nada é indexado. Em produção, pendências somem, botões sem destino confirmado viram texto informativo, e ofertas não liberadas saem do menu, do sitemap e recebem `noindex`.
- `/365dias` e `/crises` estão só na configuração, como rascunho: não existem como página, não aparecem em menu nem sitemap.

## Onde editar

| O quê | Arquivo |
|---|---|
| Preços, checkouts, status de cada oferta, pendências comerciais | `src/config/offers.ts` |
| WhatsApp, e-mail, Instagram (com origem da confirmação) | `src/config/contacts.ts` |
| Depoimentos (bloqueados até `approved: true`) | `src/config/testimonials.ts` |
| Títulos dos eBooks e extras do combo | `src/content/perfil-e-proposito.ts` |
| Semanas, amostras e listas dos Adventos | `src/content/advento.ts` |
| Títulos/descrições de SEO, OG e regra de indexação | `src/config/pages.ts` e `export const metadata` de cada página |
| URL do site, GTM | `src/config/site.ts`, variável `NEXT_PUBLIC_GTM_ID` |

## Arquivos

**Movidos (histórico preservado com `git mv`)**: `src/app/page.tsx → src/app/nr1/page.tsx`; `src/components/*.tsx → src/components/nr1/*.tsx`.

**Modificados**: `src/app/layout.tsx`, `src/app/globals.css`, `tailwind.config.ts`, `next.config.ts`, `tsconfig.json`, `package.json`, `package-lock.json`, `.gitignore`, e os componentes da NR-1 listados abaixo.

**Removido**: `.eslintrc.json` (substituído por `eslint.config.mjs`).

**Criados**:
- Páginas: `src/app/(site)/{layout,page}.tsx`, `src/app/(site)/analise-comportamental/page.tsx`, `src/app/(site)/perfil-e-proposito/page.tsx`, `src/app/(site)/advento/{page,familia/page,igrejas/page}.tsx`, `src/app/not-found.tsx`, `src/app/sitemap.ts`, `src/app/robots.ts`, `src/app/fonts.ts`, `src/app/icon.svg`
- Componentes: `src/components/site/*` (cabeçalhos, rodapé, CTAs, FAQ, galeria, vídeo, medição), `src/components/advento/Blocks.tsx`
- Configuração e conteúdo: `src/config/*`, `src/content/*`, `src/lib/analytics.ts`, `src/lib/utm.ts`
- Testes: `tests/*.test.ts`
- Imagens: `public/images/carla/*`, `public/images/advento/**`, `public/og/*`
- Documentos: `docs/*`, `eslint.config.mjs`

## Mudanças na NR-1

Conteúdo, contatos, disclaimers, DRPS, relatórios, programas e FAQ preservados. Alterações:

- Rota `/nr1`; metadados originais mantidos; canonical e OG próprios.
- Cabeçalho: caminho "Carla Gerhard / RN1" de volta à home; menu mobile fora da ordem de foco quando fechado e com Esc; itens sem quebra de linha.
- CTA principal: "Conversar sobre a realidade da minha empresa" (mesmo WhatsApp e mensagem).
- Hero: removida a animação contínua do cartão; o mockup com números agora diz "Exemplo ilustrativo, com valores fictícios"; "NR-1" não quebra no hífen.
- Reveal: o conteúdo só é ocultado quando o JS está ativo e sem movimento reduzido; se a hidratação falhar, tudo aparece em 2,5 s.
- FAQ com `<details>`: a resposta longa sobre DRPS não é mais cortada pelo limite de altura.
- Legibilidade: textos de apoio de 13–14 px passaram a 16 px no celular (~15 px no desktop); contraste de rótulos claros aumentado.
- "Sobre Carla": corrigida a rolagem horizontal em 360–390 px.
- Rodapé: link para a página principal.
- Links antigos com âncora (ex.: `www.carlagerhard.com/#drps`) são levados para `/nr1#drps`.

## Assets reaproveitados

| Arquivo | Origem |
|---|---|
| `images/carla-gerhard.png` | Repositório (já usado na NR-1) |
| `images/carla/carla-blazer-branco.webp` | Foto oficial do site antigo (`Analise-Comportamental-3.png`), margens transparentes recortadas |
| `images/carla/carla-sorrindo.webp` | Foto oficial do site antigo (`ffsdgsdg.png`) |
| `images/carla/carla-camisa-laranja.webp` | Foto oficial do site antigo (versão 3200 px), margens transparentes recortadas |
| `images/advento/pequenas-sementes.webp` | Logo extraído do PDF do Advento (imagem original com transparência) |
| `images/advento/familia/*`, `images/advento/igrejas/*` | Capa + 3 páginas de cada PDF final, exportadas e conferidas visualmente |
| `og/*.jpg` | Composições 1200×630 sem texto, com as fotos e capas acima |

Nenhum rosto foi alterado, nenhuma imagem gerada, nenhum hotlink para o WordPress. Foto de banco do site antigo (`hero-background-2.jpg`) e peças antigas de anúncio não foram usadas.

## Decisões de conteúdo

- Bio: só os títulos confirmados (psicanalista, analista comportamental, pastora). Não entram 20/14/23/8 anos, "25 anos de casamento", "centenas de pessoas", "pós-graduada" nem certificações.
- Análise: plataforma Sólides (Profiler) citada; sem a lista de metodologias do FAQ antigo do combo; explicado o que a análise **não** é; separada do DRPS/NR-1 e do combo.
- Combo: sem "De R$ 497", sem parcelamento calculado, sem garantia, live ou testes até validação; o FAQ deixa claro que não há atendimento individual.
- Adventos: calendários próprios (Família 1º–25/12 em 4 semanas; Igrejas 6 semanas desde 15/11, com a semana 3 exibida como "a partir de 29 de novembro" por causa do erro no PDF); sem materiais físicos; impressão e itens por conta do comprador; licença conforme a p. 2 de cada PDF; sem combo entre as edições.
- Podcasts: identificados como participações no canal **e31 Marketing** (não canal oficial da Carla); vídeos carregam só após clique.
- Instagram: `@carlagerhard` e `@pequenassementesvnn` conforme a página de titularidade dos PDFs; `@carlagerhard_` (só no WordPress antigo) não é usado.

## Testes e QA

Comandos executados no estado final:

| Verificação | Resultado |
|---|---|
| `npm run lint` (ESLint 9, flat config) | 0 erros, 0 avisos |
| `npm run typecheck` | 0 erros |
| `npm run build` (revisão) | 11 rotas estáticas geradas |
| `NEXT_PUBLIC_SITE_MODE=production npm run build` + `npm test` | 17 testes aprovados, 1 ignorado (exclusivo do modo revisão) |
| `npm run build` (revisão) + `npm test` | 17 aprovados, 1 ignorado (exclusivo do modo produção) |
| Rotas, 308, 404, `/365dias` e `/crises` | 200 / 308 / 404 / 404 conferidos com `curl` |

O teste de build verifica, entre outros: ausência de PDFs em `public/` e `.next/`; um `h1`, canonical e OG existente por página; IDs únicos; nenhuma imagem referenciada ausente; checkout do combo só na página do combo; calendários distintos dos Adventos; os 16 títulos; conteúdo e contatos da NR-1; sitemap só com páginas publicáveis; e, no build de produção, nenhuma pendência, preço provisório, "garantia", "497", depoimento não autorizado ou tempo de atuação antigo.

Revisão visual com Chrome (Playwright), capturas de página inteira em **360, 390, 768 e 1366 px** para as 7 páginas e a 404: sem rolagem horizontal, sem IDs repetidos, sem imagens quebradas, sem erros de console. Problemas encontrados e corrigidos na revisão: rolagem horizontal na NR-1 em 360/390 px; selo "ilustrativo" escondido atrás dos badges; menu da NR-1 quebrando em 1366 px; título da Família em 5 linhas; sublinhado dos links "→"; favicon ausente.

Testes de interação: menus mobile por teclado (Enter abre, Esc fecha e devolve o foco, links ocultos não recebem foco); galeria abre em `<dialog>` e fecha com Esc; eventos de medição e consentimento (detalhes em `RASTREAMENTO_PARA_CLAUDE.md`).

Não medido: notas de Lighthouse/PageSpeed, leitor de tela real, Safari/iOS e Android reais.

## Dependências e configuração

- `eslint` 8 → 9 (devDependency). `eslint-config-next@16` exige ESLint 9; o conflito estava oculto pelo `legacy-peer-deps`. `next lint` não existe mais no Next 16: o script agora é `eslint .`.
- `tsconfig.json`: `allowImportingTsExtensions` (os testes usam o runner nativo do Node, sem novas dependências).
- Novos scripts: `typecheck`, `test`.
- `npm audit` (27/09/2026): 9 avisos em dependências que já existiam antes desta entrega. O crítico é o próprio `next@16.2.6` (mesma versão hoje em produção): *Middleware/Proxy bypass* e *DoS com Server Actions*. Este site não usa middleware, proxy nem Server Actions (todas as rotas são estáticas), mas **recomenda-se atualizar `next` para a versão 16.x corrigida numa etapa separada**, com build e testes. Os demais (`postcss`, `sharp`, `browserslist`, `nanoid`, `brace-expansion`, `@babel/core`) são de build/otimização de imagem. Nenhuma atualização foi feita aqui.

## Situação inicial registrada

Em `3be4e6a`, antes de qualquer alteração: `next build` OK (rotas `/` e `/_not-found`), `tsc --noEmit` OK, `npm run lint` **quebrado** (`next lint` não existe no Next 16: "Invalid project directory provided, no such directory: …/lint"). Não havia testes.

## Pendências

Lista acionável em [`CHECKLIST_LIBERACAO.md`](./CHECKLIST_LIBERACAO.md). Resumo:

1. Checkout da edição Família.
2. Checkout da edição Igrejas.
3. Confirmação dos preços dos Adventos (R$ 59,90 e R$ 49,90 são valores de trabalho).
4. Canal de contato da análise comportamental (três números diferentes no site antigo).
5. Termos de licença do Advento Igrejas por igreja/congregação/filial.
6. Forma de entrega do Advento Igrejas (manual cita material completo a partir da 3ª semana).
7. Correção no PDF Igreja: período da semana 3; revisão no PDF Família, p. 79 ("na igreja" num dia em casa).
8. Confirmar qual checkout do combo vale (`pvcyogot` × `G9618Q4YW1` do `/365dias/` antigo) e o preço no checkout.
9. Decidir extras do combo (live mensal, testes, exercícios, garantia de 7 dias).
10. Canal de suporte para compradores (combo e Adventos).
11. Autorização dos depoimentos da análise.
12. NR-1: confirmar "há 12 anos"; revisar descrições das etapas 06–08.
13. Política de privacidade e termos no novo site (antes da medição).
14. Logo vetorial Pequenas Sementes.
15. Domínio sem www fora do ar (estacionado na Hostinger).

Rastreamento: [`RASTREAMENTO_PARA_CLAUDE.md`](./RASTREAMENTO_PARA_CLAUDE.md) · Artes: [`ARTES_PENDENTES.md`](./ARTES_PENDENTES.md) · Migração: [`MIGRACAO_COM_BR.md`](./MIGRACAO_COM_BR.md) · Rollback: final de [`CHECKLIST_LIBERACAO.md`](./CHECKLIST_LIBERACAO.md).
