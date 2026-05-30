# Design system — Site RN1

## Direção visual

O site deve transmitir:

- saúde mental corporativa;
- confiança;
- técnica;
- cuidado;
- equilíbrio;
- sobriedade;
- profissionalismo.

Não deve parecer:

- site genérico de Canva;
- apresentação institucional antiga;
- página alarmista de multa;
- app RN1 Platform;
- Insad;
- Constante.

## Paleta recomendada

### Base

- Off-white: `#F7F5F0`
- Branco: `#FFFFFF`
- Cinza quente claro: `#ECE8E1`
- Cinza texto: `#4A4A46`
- Grafite: `#1F2A2E`

### Saúde mental / confiança

- Verde sálvia: `#8FAF9B`
- Verde profundo: `#315C4B`
- Teal: `#2F7D7E`
- Azul petróleo: `#1F5F68`

### Apoio suave

- Areia: `#D9CBB8`
- Menta clara: `#DDEBE3`
- Azul névoa: `#DDEAF0`

### Acento opcional

- Terracota suave: `#B9785F`

Usar terracota apenas em pequenos acentos, não como cor principal.

## Gradientes sugeridos

### Hero

```css
background: linear-gradient(135deg, #F7F5F0 0%, #DDEBE3 45%, #DDEAF0 100%);
```

### CTA

```css
background: linear-gradient(135deg, #315C4B 0%, #2F7D7E 100%);
```

### Cards destacados

```css
background: linear-gradient(180deg, #FFFFFF 0%, #F7F5F0 100%);
```

## Tipografia

Usar fonte moderna, legível e sóbria.

Sugestões:

- Inter
- Manrope
- Geist
- Source Sans 3

Hierarquia:

- H1: grande, forte, com line-height controlado.
- H2: claro e objetivo.
- H3: usado em cards e blocos.
- Body: legível, 16–18px.
- Microcopy: 13–14px.

## Layout

### Header

- altura confortável;
- fundo translúcido ou branco;
- borda inferior sutil;
- navegação por âncoras;
- CTA visível.

### Hero

- grande respiro;
- H1 forte;
- subtítulo com boa largura;
- CTA duplo;
- mockup/card visual com indicadores;
- animação discreta.

### Cards

- bordas arredondadas;
- sombra suave;
- ícones lineares;
- hover com leve elevação;
- sem excesso de cores.

### Seções

- alternar fundos claros;
- evitar blocos 100% azul saturado;
- usar espaçamento amplo;
- máxima largura de conteúdo: ~1120–1200px.

## Animações

Usar movimento com moderação:

- fade-in no scroll;
- slide-up suave;
- hover de botão;
- hover de card;
- transição de opacidade/transform;
- hero com floating card discreto.

Não usar:

- animações agressivas;
- parallax pesado;
- autoplay intrusivo;
- efeitos que prejudiquem acessibilidade.

## Componentes desejados

- Header fixo ou sticky leve.
- Hero com mockup de dashboard/relatório.
- Cards de dor.
- Timeline/steps da solução.
- Grid dos 13 fatores DRPS.
- Cards de programas.
- Seção de segurança/transparência.
- FAQ em accordion.
- CTA final com fundo destacado.
- Footer corporativo.

## Iconografia

Usar ícones simples, relacionados a:

- diagnóstico;
- relatório;
- escuta;
- segurança;
- saúde mental;
- equipe;
- matriz de risco;
- documentação;
- RH.

Evitar:

- sirenes;
- emojis de alerta;
- ícones de multa/pânico;
- imagens clínicas sensíveis.

## Imagens

Se usar imagens:

- profissionais em ambiente corporativo;
- pessoas em reunião;
- RH/gestão;
- ambiente acolhedor;
- abstrações suaves.

Evitar:

- imagens de sofrimento explícito;
- estetização de saúde mental;
- fotos genéricas demais;
- logos não autorizados.

## Acessibilidade

- contraste adequado;
- botões claros;
- foco visível;
- texto alternativo em imagens;
- navegação por teclado;
- não depender apenas de cor para comunicar risco.

## Responsividade

Mobile:

- header compacto;
- menu colapsado;
- hero com CTA empilhado;
- cards em uma coluna;
- FAQ legível;
- botões grandes o suficiente.

Desktop:

- grid com 2–3 colunas;
- hero em duas colunas;
- timeline horizontal ou cards em sequência.
