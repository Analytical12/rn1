# Artes pendentes

Revisão de 27/09/2026, com capturas reais em 1366 px e 390 px (`qa-capturas/`, local) e medição da resolução de cada imagem contra o maior tamanho em que ela aparece no site.

Todas as imagens em uso são reais: fotos oficiais da Carla (site antigo e repositório), capas e páginas dos PDFs do Advento e o logo Pequenas Sementes extraído do próprio PDF (confirmado como oficial em 27/09/2026). Nenhuma foi gerada, e nenhuma ilustração foi desenhada em CSS/SVG.

## A. Essenciais para publicação

**Nenhuma.** Não há imagem ausente, quebrada, provisória ou inadequada em área importante de nenhuma rota.

## B. Opcionais (já existe um asset real e adequado)

| Item | Rota · seção | Situação medida | Melhoria possível |
|---|---|---|---|
| Retrato blazer branco | `/` · Hero | 866 px para 346 px exibidos: nítido em telas 2×, abaixo do ideal em 3× | Original da mesma sessão, fundo removido, ~1300×2250 |
| Foto "Carla sorrindo" | `/` · Sobre; `/perfil-e-proposito` · Autora | 888 px para 432 px: 2× ok, 3× abaixo do ideal | Original em ~1600 px de largura |
| Retrato camisa laranja | `/analise-comportamental` · Hero | 706 px para 273 px: 2× ok, 3× abaixo do ideal | Original, fundo removido, ~1100×2340 |
| Logo Pequenas Sementes | `/advento*` · Cabeçalho | 503 px para 109 px: ok até 3× | Versão vetorial (SVG), só para manutenção futura |
| Imagens de compartilhamento (OG) | todas · metadados | Composições reais sem texto, 1200×630 | Opcional: foto/capa + nome da página |
| Páginas de amostra do Advento | `/advento/familia`, `/advento/igrejas` · Por dentro | 1600 px para 356 px: ok até 3× | Reexportar só se o PDF final mudar nessas páginas |
| Capas dos 16 eBooks | `/perfil-e-proposito` · Hero | Não existem; o hero usa um painel tipográfico com os temas reais | Só se houver capas reais; exige ajuste de layout |

Substituir um arquivo mantendo nome, formato e proporção não altera o layout. Detalhes (arquivo, proporção, dimensão, posição, fundo, área segura, instrução e fallback) em [`artes-manifest.json`](./artes-manifest.json).

## Regras

- Não gerar nem alterar o rosto de Carla Gerhard.
- Não inventar capas (dos eBooks ou do Advento), páginas de produto ou logos.
- Preço, CTA e parágrafos ficam no HTML. Imagens não levam texto comercial.
- CSS e SVG só para interface (linhas, faixas de cor, setas). Nada de árvores, pessoas ou cenários desenhados com formas.

## Como as amostras do Advento foram escolhidas

Para cada edição: capa + três páginas que explicam o produto, conferidas em tamanho real.

- **Família**: trilha do Advento (p. 16), orientação de um dia (3º dia, p. 34), Cápsula do Advento (p. 113).
- **Igrejas**: orientação ao professor (semana 1, p. 26), cartinhas para a turma (p. 35), mensagem aos pais (p. 24).

Excluídas: a página "7 days of creation" (Família p. 36, Igreja p. 41), por estar em inglês; páginas da semana 3 da Igreja (erro de data no PDF). Os PDFs completos ficam fora do repositório e da pasta `public`.
