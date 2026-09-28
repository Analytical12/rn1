# Plano de migração — carlagerhard.com.br

Nada foi alterado no WordPress, no DNS ou nos checkouts. Este é o mapa para uma etapa futura. Inventário feito em 27/09/2026 a partir do sitemap do Rank Math (`/page-sitemap.xml`, `/post-sitemap.xml`) e da leitura de cada página.

## Situação dos domínios

| Host | Hoje | Observação |
|---|---|---|
| `https://www.carlagerhard.com` | Vercel, site NR-1 (este repositório, branch `main`) | Host canônico do novo site. |
| `carlagerhard.com` (sem www) | Página "Parked Domain" da Hostinger em HTTP; HTTPS não responde | Quem digita o domínio sem www não chega ao site. Recomendação: apontar o apex para a Vercel e redirecionar para `www`. **Exige mudança de DNS: não feita.** |
| `carlagerhard.com.br` | WordPress (LiteSpeed). `www.` redireciona para sem www | Mantido intacto nesta entrega. |

## Mapa de URLs (proposta)

Redirecionar com 301 **somente** depois que a página de destino estiver publicada e liberada.

| URL antiga | O que exibe hoje | Destino proposto | Condição |
|---|---|---|---|
| `/` | Venda do Combo Perfil e Propósito (checkout `pvcyogot`) | `https://www.carlagerhard.com/perfil-e-proposito` | Combo publicado. **Não** mandar para a nova home. |
| `/365dias/` | **Venda do Combo** (título "365Dias"), com outro checkout: `chk.eduzz.com/G9618Q4YW1` | `https://www.carlagerhard.com/perfil-e-proposito` | Confirmar antes qual checkout do combo vale. Links de bio chamam esta página de "Livro 365 Dias de Transformação": quando o devocional tiver página própria, reavaliar. Não apontar para `/365dias` do novo site enquanto ele não existir. |
| `/quiz/` | Cópia da venda do combo | `/perfil-e-proposito` | Igual ao anterior. |
| `/quest2/`, `/quest3/`, `/quest4/`, `/resultado/` | Funil de perguntas que leva à venda do combo | `/perfil-e-proposito` | Ou desativar o funil. |
| `/analisevalor/` | Página de análise comportamental com "Planos" (textos de teste "testeeeeeeete") e WhatsApp (49) 3027-2050 | `https://www.carlagerhard.com/analise-comportamental` | Contato da análise confirmado. |
| `/descubraseuperfilcomportamental/` | Venda ligada à análise/perfil de liderança, "Sessão de Devolutiva Online" | `/analise-comportamental` | Confirmar se a oferta ainda existe. |
| `/lider/` | "Perfil & Propósito para Líderes de Ministério" (curso de 6 meses), checkout `chk.eduzz.com/R9JYPQ769X` | Sem equivalente | Decidir: manter no WordPress, desativar ou criar página. |
| `/maes/` | eBook "Perfil Comportamental para Mães", checkout `chk.eduzz.com/2355115` | Sem equivalente direto | O título existe dentro do combo, mas é outra oferta. Decidir. |
| `/diagnostico-crises/` | Guia "A Nova Estação Começa na Crise", R$ 27,90, checkout `chk.eduzz.com/39ZBNZ4B9E`, depoimentos não verificados | Sem equivalente | Oferta "Crises" está como rascunho. Não reaproveitar os depoimentos. |
| `/links/`, `/biowhatsaap/` | Páginas de link na bio (misturam análise, e31 — certificado digital, registro de marcas — e produtos) | `https://www.carlagerhard.com/` | Revisar links que são da e31 antes. |
| `/livediadasmaes/`, `/obrigadamamae/`, `/parabens/`, `/obrigado/` | Páginas de etapa/obrigado de campanhas antigas | `https://www.carlagerhard.com/` ou 410 | Não mandar páginas de obrigado para páginas de venda. |
| `/privacy-policy/`, `/termo-de-uso/` | Textos em nome da e31 Marketing | Novas páginas de privacidade e termos | **Criar no novo site antes** de ativar medição. |
| `/hello-world/`, `/category/uncategorized/` | Conteúdo padrão do WordPress | 410 | — |

## Checkouts encontrados no site antigo

| Checkout | Onde aparece | Situação no novo site |
|---|---|---|
| `chk.eduzz.com/pvcyogot` | `/` | Configurado no Combo (`src/config/offers.ts`) |
| `chk.eduzz.com/G9618Q4YW1` | `/365dias/` | Não usado. Confirmar se é o mesmo produto |
| `chk.eduzz.com/2290310`, `2290652`, `2356061`, `2355115` | `/links/` (combos por público e eBooks avulsos) | Não usados |
| `chk.eduzz.com/R9JYPQ769X` | `/lider/` | Não usado |
| `chk.eduzz.com/39ZBNZ4B9E` | `/diagnostico-crises/` | Não usado |

## Ordem sugerida

1. Publicar e validar o novo site (checklist de liberação).
2. Criar política de privacidade e termos no novo site.
3. Decidir o destino das páginas "sem equivalente".
4. Aplicar os 301 no WordPress (plugin de redirecionamento ou `.htaccess` do LiteSpeed), um grupo por vez, e conferir no Search Console.
5. Só depois considerar mudança de DNS do `.com.br`.
