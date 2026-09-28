# Checklist de liberação

Branch: `feat/site-principal-carla` (local). Produção da Vercel publica a partir de `main`. A conta usada nesta entrega tem só leitura no GitHub: o envio da branch precisa ser feito pelo dono do repositório (Analytical12).

## 1. Decisões comerciais que bloqueiam cada oferta

Tudo é editado em `src/config/offers.ts` e `src/config/contacts.ts`. Uma oferta só vira botão de compra, entra no menu/sitemap e é indexada quando estiver `status: "published"` com checkout (ou contato) confirmado.

### Advento Família (`advento_familia`)
- [ ] URL do checkout da edição Família → `checkout: { url, platform, forwardUtm: false }`
- [ ] Preço confirmado (hoje R$ 59,90 é valor de trabalho) → `price.status: "current"`
- [ ] Forma de entrega do PDF e canal de suporte da compra (ajustar a última pergunta do FAQ e remover o `pending`)
- [ ] `status: "published"`

### Advento Igrejas (`advento_igrejas`)
- [ ] URL do checkout da edição Igrejas
- [ ] Preço confirmado (hoje R$ 49,90 provisório)
- [ ] Termos de licença por igreja / congregação / filial (o PDF, p. 2, não define) → texto do FAQ e do bloco "Uso do material"
- [ ] Forma de entrega: o manual (p. 15) diz que o material completo sai a partir da 3ª semana → responder "Quando recebo o material completo?"
- [ ] Corrigir no PDF o período da semana 3 ("29/11/26 a 15/11/26", pp. 66, 67, 70, 75)
- [ ] `status: "published"`

### Análise comportamental (`analise_comportamental`)
- [ ] Número de WhatsApp (ou outro canal) para agendamento → `contacts.analiseWhatsApp` com `number`, `display` e `status: "confirmed"`. O site antigo tem três números diferentes (ver nota no arquivo).
- [ ] (Opcional) Autorização dos depoimentos → `approved: true` em `src/config/testimonials.ts`
- [ ] (Opcional) Duração, valores e formato, se forem ser publicados

### Combo Perfil e Propósito (`combo_perfil_proposito`) — já liberado
- [ ] Confirmar que `chk.eduzz.com/pvcyogot` é o checkout vigente (o `/365dias/` antigo usa `G9618Q4YW1`)
- [ ] Confirmar R$ 97,00 no checkout
- [ ] Decidir extras antigos (live mensal, testes, exercícios, garantia de 7 dias) → `comboExtras.approved` em `src/content/perfil-e-proposito.ts`
- [ ] Canal de suporte para compradores

### NR-1 — já liberada
- [ ] Confirmar "há 12 anos" em Sobre Carla (outras páginas antigas citam 8, 20 e 23 anos)
- [ ] Revisar as descrições das etapas 06 a 08 de "Como funciona" (parecem deslocadas uma posição em relação aos títulos; mantidas como estavam)

## 2. Verificações técnicas antes do merge

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

## 3. Publicação

- [ ] Merge em `main` (dispara produção)
- [ ] Conferir: `/`, `/nr1`, `/perfil-e-proposito`, `/sitemap.xml`, `/robots.txt`
- [ ] `/advento-familia` e `/advento-igrejas` respondem 308 para `/advento/familia` e `/advento/igrejas`
- [ ] Um link antigo como `https://www.carlagerhard.com/#drps` leva a `/nr1#drps`
- [ ] Enviar o sitemap no Google Search Console

## 4. Depois da publicação (etapas separadas)

- [ ] Política de privacidade e termos no novo site
- [ ] Medição: `docs/RASTREAMENTO_PARA_CLAUDE.md`
- [ ] Domínio sem www (`carlagerhard.com`) apontando para a Vercel (mudança de DNS)
- [ ] Migração do `.com.br`: `docs/MIGRACAO_COM_BR.md`

## Rollback

- **Antes do merge**: nada a fazer; produção segue no commit `3be4e6a`.
- **Depois do merge**: na Vercel, *Deployments* → deployment de produção anterior → *Instant Rollback*. Em seguida, `git revert -m 1 <commit do merge>` em `main` para o código voltar a corresponder ao que está no ar.
- Após um rollback, `/nr1` deixa de existir e a NR-1 volta para `/`. Se links para `/nr1` já tiverem sido divulgados, eles darão 404 até a nova publicação.
