# Checklist de liberação

Branch: `feat/site-principal-carla` (local). Produção da Vercel publica a partir de `main`. A conta usada nesta entrega tem só leitura no GitHub: o envio da branch precisa ser feito pelo dono do repositório (Analytical12).

## 1. Estado de cada página e oferta

| Rota | Página implementada | Revisada (visual e conteúdo) | Oferta comercial liberada | Pagamento/entrega testados |
|---|---|---|---|---|
| `/` | Sim | Sim | — | — |
| `/nr1` | Sim | Sim | Sim (contato comercial) | — |
| `/perfil-e-proposito` | Sim | Sim | Sim (checkout `pvcyogot`) | **Não** (pagamento e entrega não testados) |
| `/analise-comportamental` | Sim | Sim | Não: falta o canal de contato | — |
| `/advento/familia` | Sim | Sim | Não: faltam checkout e preço | Não |
| `/advento/igrejas` | Sim | Sim | Não: faltam checkout, preço e licença | Não |
| `/advento` | Sim | Sim | Depende das edições | — |

Cada oferta é liberada de forma independente. Enquanto uma oferta não está liberada, na publicação: não há botão de compra ou contato; os botões que levam à seção da oferta dizem "Ver detalhes"; a página não entra no menu, na home nem no sitemap e recebe `noindex`; continua acessível por endereço direto. A regra está em `src/config/offers.ts` (`isSellable`, `isContactReady`, `isIndexable`) e `src/config/pages.ts` (`isPagePublishable`).

## 2. Campos comerciais a preencher

Arquivo principal: `src/config/offers.ts` (objeto `offers`).

### Advento Família — `offers.advento_familia`

| Campo | Hoje | Valor esperado |
|---|---|---|
| `checkout` | `null` | `{ url: "https://…", platform: "<nome da plataforma>", forwardUtm: false }` com a URL do checkout **da edição Família**. Nunca o `chk.eduzz.com/pvcyogot` do combo |
| `price.amount` | `59.9` (valor de trabalho) | preço confirmado, número com ponto decimal (ex.: `59.9`) |
| `price.status` | `"working"` | `"current"` |
| `price.source` | "Valor de trabalho…" | origem da confirmação |
| `status` | `"pending"` | `"published"` |

**Libera a compra**: `status: "published"` **e** `checkout.url` https válido. Depois, em `src/app/(site)/advento/familia/page.tsx`, na pergunta "Como recebo o acesso e a quem peço ajuda?", ajustar `a` à entrega real e remover `pending`.

### Advento Igrejas — `offers.advento_igrejas`

| Campo | Hoje | Valor esperado |
|---|---|---|
| `checkout` | `null` | `{ url: "https://…", platform: "…", forwardUtm: false }` com a URL **da edição Igrejas** |
| `price.amount` | `49.9` (provisório) | preço confirmado |
| `price.status` | `"provisional"` | `"current"` |
| `status` | `"pending"` | `"published"` |

**Libera a compra**: `status: "published"` e checkout válido. Em `src/app/(site)/advento/igrejas/page.tsx`: texto de licença aprovado no `OfferPanel` (`license`) removendo `licensePending`; pergunta "Posso compartilhar o PDF…" com o texto aprovado e sem `pending`; pergunta "Como recebo o acesso…" ajustada à entrega real e sem `pending`.

### Análise comportamental — `src/config/contacts.ts`, `contacts.analiseWhatsApp`

| Campo | Hoje | Valor esperado |
|---|---|---|
| `number` | `null` | só dígitos, com DDI e DDD (formato `55DDNNNNNNNNN`) |
| `display` | `null` | `"+55 (DD) NNNNN-NNNN"` |
| `status` | `"pending"` | `"confirmed"` |
| `source` | "Aguardando confirmação." | quem confirmou e quando |

**Libera o contato**: `status: "confirmed"` com `number` preenchido (`offers.analise_comportamental.status` já é `"published"`). Os depoimentos continuam ocultos até `approved: true` em `src/config/testimonials.ts` (opcional).

### Combo Perfil e Propósito — já liberado

Confirmações recomendadas, sem bloquear: checkout vigente (`pvcyogot` × `G9618Q4YW1` do `/365dias/` antigo); R$ 97,00 no checkout; extras antigos (`comboExtras.approved` em `src/content/perfil-e-proposito.ts`); canal de suporte ao comprador.

### NR-1 — já liberada

Confirmar "há 12 anos" em Sobre Carla (outras páginas antigas citam 8, 20 e 23 anos) e revisar as descrições das etapas 06 a 08 de "Como funciona".

### Pendências editoriais dos PDFs (não mudam o site e não são decisões comerciais)

- Igreja, pp. 66, 67, 70 e 75: período da semana 3 ("29/11/26 a 15/11/26"). O site mostra "a partir de 29 de novembro".
- Igreja, p. 15: menção ao material completo "a partir da 3ª semana". Conferir se o trecho permanece na versão final; o site não trata isso como entrega parcelada.
- Família, p. 79: atividade cita filme "na igreja" num dia vivido em casa.

## 3. Verificações técnicas antes do merge

```bash
npm ci
npm run lint
npm run typecheck
NEXT_PUBLIC_SITE_MODE=production npm run build
npm test
```

- [ ] Todos verdes (o teste "build de produção" só roda no build de produção)
- [ ] Nenhum PDF no repositório (`git ls-files '*.pdf'` vazio)
- [ ] Enviar a branch e abrir a **Preview** da Vercel (em preview o site fica em modo revisão, com pendências visíveis e sem indexação)
- [ ] Conferir a preview em 360, 390, 768 e 1366 px
- [ ] Na Vercel, confirmar que a branch de produção é `main` e que não há `NEXT_PUBLIC_SITE_MODE=review` definido em Production

## 4. Publicação

- [ ] Merge em `main` (dispara produção)
- [ ] Conferir: `/`, `/nr1`, `/perfil-e-proposito`, `/sitemap.xml`, `/robots.txt`
- [ ] `/advento-familia` e `/advento-igrejas` respondem 308 para `/advento/familia` e `/advento/igrejas`
- [ ] Um link antigo como `https://www.carlagerhard.com/#drps` leva a `/nr1#drps`
- [ ] Enviar o sitemap no Google Search Console

## 5. Depois da publicação (etapas separadas)

- [ ] Política de privacidade e termos no novo site
- [ ] Medição: `docs/RASTREAMENTO_PARA_CLAUDE.md`
- [ ] Domínio sem www (`carlagerhard.com`) apontando para a Vercel: `docs/DOMINIO.md`
- [ ] Migração do `.com.br`: `docs/MIGRACAO_COM_BR.md`

## Rollback

- **Antes do merge**: nada a fazer; produção segue no commit `3be4e6a`.
- **Depois do merge**: na Vercel, *Deployments* → deployment de produção anterior → *Instant Rollback*. Em seguida, `git revert -m 1 <commit do merge>` em `main` para o código voltar a corresponder ao que está no ar.
- Após um rollback, `/nr1` deixa de existir e a NR-1 volta para `/`. Se links para `/nr1` já tiverem sido divulgados, eles darão 404 até a nova publicação.
