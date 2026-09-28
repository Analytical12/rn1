# Rastreamento — instruções para a próxima etapa

Estado em 27/09/2026 (branch `feat/site-principal-carla`). Nenhuma conta foi criada, nenhuma tag publicada, nenhum ID configurado.

## Como o site mede hoje

- O site só escreve em `window.dataLayer`. Nada sai do navegador enquanto não houver GTM.
- O GTM é carregado **somente** se `NEXT_PUBLIC_GTM_ID` estiver definido (formato `GTM-XXXXXXX`) **e** o visitante permitir estatísticas ou marketing no aviso de cookies.
- Sem `NEXT_PUBLIC_GTM_ID`, o aviso de cookies não aparece e nenhum script de terceiros é carregado.
- GA4 e Meta Pixel devem ser configurados **dentro do GTM**. Não instalar `gtag.js` nem o pixel direto no código.

Código: `src/lib/analytics.ts` (contrato e sanitização), `src/components/site/AnalyticsRoot.tsx` (page_view, cliques, consentimento, carregamento do GTM), `src/components/site/TrackView.tsx` (view_item), `src/lib/utm.ts` (UTMs).

## Contrato de eventos

Formato no dataLayer: `{ event: "<nome>", product_id, page_type, cta_position, destination_type, currency, value }` — só os parâmetros aplicáveis.

| Evento | Quando dispara | Parâmetros |
|---|---|---|
| `page_view` | Carregamento e cada troca de rota (App Router). Antes de qualquer outro evento da página. | `page_type` |
| `view_item` | Abertura de página de produto ou serviço. | `product_id`, `page_type`; `currency` e `value` só no combo (preço vigente) |
| `select_item` | Clique em uma frente/produto na home, em /advento e no link para o combo. | `product_id`, `cta_position`, `destination_type=page` |
| `cta_click` | Âncoras internas (ex.: "Ver oferta", "Conhecer o combo") e ativação de vídeo. | `product_id`, `cta_position`, `destination_type=section` ou `video` |
| `checkout_click` | Clique no botão de compra que leva ao checkout. **Não é compra.** | `product_id`, `cta_position`, `destination_type=checkout`, `currency`, `value` (só se preço vigente) |
| `contact_click` | Clique em WhatsApp, e-mail ou Instagram. **Não é lead nem conversa iniciada.** | `product_id`, `cta_position`, `destination_type=whatsapp|email|instagram` |
| `preview_open` | Abertura de uma página de amostra do Advento. | `product_id`, `cta_position=gallery` |
| `generate_lead` | **Não disparado pelo site.** Só quando um lead for registrado de fato (não há formulário nesta versão). | — |
| `purchase` | **Não disparado pelo site.** Só a partir da confirmação da plataforma de pagamento. | — |

`pushEvent` recusa `purchase` e `generate_lead`, e `sanitizeParams` descarta qualquer chave fora do contrato e valores fora do formato `[a-z0-9_]` (e-mail, nome, telefone, texto livre nunca passam). Testes: `tests/analytics.test.ts`.

Valores de `page_type`: `home`, `service`, `product`, `product_chooser`, `not_found`.
Valores de `product_id`: `nr1`, `analise_comportamental`, `combo_perfil_proposito`, `advento_familia`, `advento_igrejas`, `advento` (página de escolha).

## Seletores estáveis

Para gatilhos no GTM ou testes, use os atributos, nunca classes CSS:

- `[data-event="checkout_click"]`, `[data-event="contact_click"]`, etc.
- `[data-product-id="…"]`, `[data-cta-position="…"]`, `[data-destination-type="…"]`
- `main[data-page-type]`

O caminho recomendado é o gatilho de **Evento personalizado** do GTM com o nome do evento; os seletores ficam como alternativa.

## Configuração no GTM (a fazer)

1. Criar o contêiner Web e definir `NEXT_PUBLIC_GTM_ID` nas variáveis de ambiente da Vercel (Production e, se quiser testar, Preview). Redeploy necessário: o ID entra no build.
2. Variáveis de Camada de Dados: `product_id`, `page_type`, `cta_position`, `destination_type`, `currency`, `value`.
3. **Tag do Google (GA4)** com `send_page_view = false`. Disparar o evento GA4 `page_view` a partir do evento personalizado `page_view`. Não usar gatilho "Alteração de histórico" (contaria em dobro).
4. Tags de evento GA4 para `view_item`, `select_item`, `cta_click`, `checkout_click`, `contact_click`, `preview_open`, com os parâmetros acima. Se quiser relatórios de e-commerce, mapear `view_item` para o formato `items` no GTM; o site não envia `items`.
5. **Meta Pixel** via modelo da galeria do GTM, com verificação de consentimento `ad_storage`. `PageView` no evento `page_view`; `ViewContent` no `view_item`. **Não** mapear `checkout_click` para `Purchase`. Mapear para `InitiateCheckout` só se aceitar que é um clique, não o início efetivo do checkout.
6. Configurações de consentimento: GA4 exige `analytics_storage`; Meta e anúncios exigem `ad_storage`. O site já envia `consent default` (tudo negado) e `consent update` conforme a escolha.

## IDs e acessos ainda necessários

- ID do contêiner GTM.
- ID de medição GA4 (usado só dentro do GTM).
- Meta Pixel: o site antigo (`carlagerhard.com.br`, plugin PixelYourSite) usa o pixel `2684298408389805`. Confirmar se é o mesmo a usar no novo site.
- Acesso à Eduzz para configurar o rastreamento de compra do combo (e dos Adventos, quando houver checkout).

## Checkout e compra confirmada

- `checkout_click` é um evento do site. A compra só é confirmada pela plataforma de pagamento.
- `purchase` deve vir da integração da própria Eduzz (pixel/GA configurado no produto) ou de postback/webhook servidor-a-servidor. Não criar página pública de "obrigado" que dispare `purchase`.
- Checkouts configurados: somente o combo (`https://chk.eduzz.com/pvcyogot`). Adventos sem checkout.

## UTMs

- Capturadas da URL de entrada: apenas `utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, `utm_term` (sessão do navegador). `gclid`, `fbclid` e o restante da query string não são repassados.
- O repasse ao checkout está **desligado** (`checkout.forwardUtm: false` em `src/config/offers.ts`). Para ligar: confirmar que a Eduzz aceita e registra esses parâmetros no link do checkout, mudar para `true`, testar uma compra de teste e conferir o relatório da Eduzz.
- O repasse nunca sobrescreve parâmetros que o link de checkout já tenha (`tests/utm.test.ts`).

## Consentimento

- Aviso não bloqueante no rodapé da tela, com "Recusar", "Permitir estatísticas" e "Permitir estatísticas e marketing". Reabre por "Preferências de cookies" no rodapé.
- Escolha salva em `localStorage` (`cg.consent.v1`). Sem armazenamento disponível, vale só para a visita.
- Recusar depois de aceitar atualiza o Consent Mode para negado, mas não descarrega o GTM já carregado na página.
- Navegação, preços e compra funcionam sem aceitar.
- Falta uma **política de privacidade** no novo site antes de ativar a medição (a antiga está em `carlagerhard.com.br/privacy-policy/`, redigida em nome da e31 Marketing).

## O que foi testado nesta entrega

Com um ID de teste local (`GTM-TESTE01`, nunca publicado), no Chrome:

- Aviso aparece; **0** requisições a Google/Meta antes da escolha.
- "Recusar": continua 0 requisições; `consent update` tudo negado.
- "Permitir estatísticas": GTM requisitado; `analytics_storage=granted`, `ad_storage=denied`.
- Eventos observados no dataLayer: home `page_view → select_item → contact_click`; combo `page_view → view_item (BRL 97) → checkout_click (BRL 97)`; Advento Família `page_view → view_item (sem value) → preview_open`.
- Link de checkout sem UTMs repassadas (repasse desligado), mesmo com `utm_*` e `gclid` na URL.

Não testado: GTM real, GA4, Meta, pagamento na Eduzz.

## Cuidados para não duplicar

- Um único contêiner GTM. Nenhum `gtag.js` ou pixel no código.
- `send_page_view=false` na tag do Google; `page_view` só pelo evento do site.
- Não criar gatilho de "Todos os elementos/cliques" para as mesmas ações já emitidas como eventos.
- Se o WordPress antigo continuar no ar com o mesmo pixel, as visitas dos dois sites vão para o mesmo pixel: filtrar por domínio nos relatórios.
