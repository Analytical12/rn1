# Artes pendentes

O site já está montado com material real: fotos oficiais da Carla (site antigo e repositório), capas e páginas reais dos PDFs do Advento e o logo Pequenas Sementes extraído do próprio PDF. **Nenhuma ilustração foi simulada em código** e nenhuma imagem foi gerada.

As artes abaixo melhoram a qualidade das que já estão no ar. Todas podem ser trocadas **sem mudar o layout**: basta substituir o arquivo mantendo nome, formato e proporção. O detalhamento completo (proporção, dimensão, posição, área segura, fallback) está em [`artes-manifest.json`](./artes-manifest.json).

## Regras

- Não gerar nem alterar o rosto de Carla Gerhard.
- Não inventar capas (dos eBooks ou do Advento), páginas de produto ou logos.
- Preço, CTA e parágrafos ficam no HTML. Imagens não levam texto comercial.
- CSS e SVG só para interface (linhas, setas, faixas de cor). Nada de ilustração improvisada.

## Prioridade alta

| Item | Onde | O que pedir |
|---|---|---|
| Logo Pequenas Sementes vetorial | Cabeçalho das páginas do Advento | Arquivo SVG (ou PNG 1140×500 transparente) oficial. A logo em uso (extraída do PDF) foi confirmada como a oficial em 27/09/2026, mas tem só ~500 px e perde nitidez em telas de alta densidade. O JPG de 572×259 recebido tem a mesma resolução e fundo branco. |

## Prioridade média

| Item | Onde | O que pedir |
|---|---|---|
| Retrato da home (blazer branco) | `/`, hero | Original da mesma sessão de fotos, fundo removido, 1300×2250. |
| Foto "Carla sorrindo" | `/` Sobre e `/perfil-e-proposito` Autora | Original em alta resolução (1600 px de largura). |

## Prioridade baixa ou condicional

| Item | Onde | Observação |
|---|---|---|
| Retrato da análise (camisa laranja) | `/analise-comportamental`, hero | Atual já tem boa resolução; trocar só se houver foto mais recente. |
| Imagens de compartilhamento (OG) | Todas as rotas | Opcional: foto/capa + nome da página. |
| Páginas de amostra do Advento | `/advento/*` | Reexportar só se o PDF final mudar nas páginas usadas. |
| Capas dos 16 eBooks | `/perfil-e-proposito` | Só se existirem capas reais. Exige ajuste de layout no hero. |

## Como as amostras do Advento foram escolhidas

Para cada edição: capa + três páginas que explicam o produto, conferidas visualmente em tamanho real.

- **Família**: trilha do Advento (p. 16), orientação de um dia (3º dia, p. 34), Cápsula do Advento (p. 113).
- **Igrejas**: orientação ao professor (semana 1, p. 26), cartinhas para a turma (p. 35), mensagem aos pais (p. 24).

Excluídas: a página "7 days of creation" (Família p. 36, Igreja p. 41), por estar em inglês; páginas das semanas 3 da Igreja (erro de data no PDF). Os PDFs completos ficam fora do repositório e da pasta `public`.
