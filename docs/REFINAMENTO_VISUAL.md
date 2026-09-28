# Refinamento visual — Carla Gerhard

28/09/2026. Base: commit `c34e02d` da branch `feat/site-principal-carla`.

O refinamento foi produzido numa cópia de trabalho temporária e trazido para o repositório por patch revisado arquivo a arquivo. Configuração comercial, conteúdo, CTAs, metadados, analytics, robots, sitemap, redirecionamentos, dependências e testes não foram alterados.

## Auditoria por rota e execução

| Rota | Avaliação inicial | Refinamento implementado |
| --- | --- | --- |
| `/` | Boa hierarquia e lista editorial de frentes. Retrato apoiado em arco rígido; fundos planos e imagem alta no celular. | Luz suave em tons de papel e sálvia, textura quase imperceptível, fundo difuso do retrato, hero mais compacto, foto da autora em moldura em arco e apresentação mais leve da coleção. |
| `/nr1` | Conteúdo organizado e relatório identificado como ilustrativo. Muitas caixas iguais, badges sobre o relatório e fundo muito colorido. | Gradiente mais sóbrio, relatório com sombra leve, badges abaixo da imagem e blocos informativos abertos com divisórias. Melhor quebra dos CTAs no celular. |
| `/analise-comportamental` | Foto real e etapas claras. Fundo rosa retangular e títulos muito pesados. | Tom quente discreto atrás do retrato, retrato menor no celular, serifada mais leve, divisórias finas nas etapas e FAQ com estados mais claros. |
| `/perfil-e-proposito` | Conteúdo e condições claros. Hero parecia um painel informativo, oferta pouco diferenciada. | Índice da coleção com tipografia editorial e acabamento de papel; oferta destacada com espaço próprio, autorretrato enquadrado, divisórias mais leves e CTA com maior presença. Os 16 títulos foram preservados. |
| `/advento` | Comparação objetiva das edições. Cards fechados, capas muito saturadas contra branco e tipografia pesada. | Duas apresentações abertas, capas sobre passe-partout suave, ritmo e paleta coerentes, textura discreta no hero e menor peso dos títulos. |
| `/advento/familia` | Conteúdo fiel ao produto. Moldura verde intensa, capa isolada e listas longas no celular. | Capa original com duas amostras reais, fundo quente discreto, vermelho terroso, galeria com indicação de ampliação, semanas e passos compactos no celular. |
| `/advento/igrejas` | Diferenciação de calendário clara. Mesma rigidez visual da edição Família. | Composição própria com orientação ao professor e cartinhas, tons de sálvia e azul mais sóbrio, oferta e galeria refinadas; calendário próprio mantido. |
| `404` | Orientação funcional, pouco acabamento. | Links em lista editorial com divisórias, duas colunas no desktop e uma no celular. |

## Decisões e componentes

- Mantidas Manrope e Fraunces; ajustados peso, distribuição e quebras de títulos.
- Tokens refinados dentro dos temas existentes. NR-1 mantém sua identidade e fonte.
- Fundos em CSS com gradientes e textura SVG discreta; nenhum serviço ou dependência adicionado.
- `AdventoArtwork` apresenta capa e duas amostras da própria edição, sem modificar o conteúdo dos arquivos.
- `SampleGallery` conserva modal nativo, fechamento com Escape e retorno de foco. Miniaturas receberam base de papel e indicação de ampliação.
- `Blocks` conserva a lógica comercial; mudanças se limitam às classes e às cores de apoio dos elementos visuais.
- FAQ, botões, composição de retratos e ofertas receberam ajustes de apresentação.
- Sem imagens geradas, capas fictícias, novos depoimentos, novas ofertas ou reescrita da copy.

## Assets e futuras melhorias

Foram inventariados os 20 arquivos de `public`: três retratos WebP, um retrato PNG legado da NR-1, oito páginas/capas do Advento, a marca Pequenas Sementes e sete imagens OG. Os arquivos foram preservados. As fotografias reais são um ponto forte; as páginas reais do material sustentam a apresentação do Advento.

1. **Capas do Advento:** continuam com estética cartoon e muitos elementos. Uma futura edição oficial em guache/aquarela, aprovada pela autora e aplicada também ao produto entregue, aproximaria melhor a direção de livro infantil premium. A interface não deve simular uma capa que o comprador não recebe.
2. **Perfil e Propósito:** não há capas oficiais dos 16 eBooks nesta base. Solicitar exports em boa resolução, com proporções consistentes, permitiria apresentar a coleção com mais força. Até lá, o índice editorial apresenta os títulos e temas reais.
3. **Retratos:** preservar as fotos atuais; uma próxima sessão com luz natural e cenas reais de atendimento/escrita pode acrescentar contexto, sem recorrer a fotos de banco genéricas.
4. **OG:** arquivos existentes preservados; uma atualização futura pode acompanhar o acabamento do site.

## Consolidação no repositório (28/09/2026)

Recuperado da cópia temporária: ajustes de apresentação em home, NR-1 (Hero, Problema, Relatórios, Programas), análise, Perfil e Propósito, `/advento`, Família, Igrejas, 404, `SampleGallery`, `Blocks` (classes e cores de apoio) e o componente novo `AdventoArtwork`.

Ajustado ou descartado na consolidação:

- **Cores de Perfil e Propósito:** mantidos títulos `#1e293b` e texto `#334155` do HTML de referência. A versão temporária trocava por tons esverdeados; ficou só o peso mais leve da serifada.
- **FAQ:** os estilos novos passaram a valer só em Carla, Perfil/Análise e Pequenas Sementes. Sem escopo, alteravam também o FAQ da NR-1, que usa a mesma classe.
- **Botões:** removidos a altura mínima global (sobrescrevia o `min-h-[44px]` do cabeçalho) e o brilho sob o botão primário.
- **404:** removido o fundo radial, que ocupava só o contêiner central e deixava uma borda visível.
- **Análise:** fundo do retrato suavizado; a versão temporária formava um halo rosado.
- **Cabeçalho das páginas de venda:** abaixo de 360 px o botão do cabeçalho some (o CTA do hero continua logo abaixo) e a marca não quebra em duas linhas.
- **Não transportados:** `AGENTS.md` e `CLAUDE.md` gerados automaticamente pelo `next dev`, e as capturas da cópia temporária.

## Preservação funcional e comercial

Sem alterações em `src/config` (incluindo `offer-rules.ts`), `src/content`, `src/lib`, `Cta`, `Pending`, `AnalyticsRoot`, metadados, regras de páginas, contatos, valores, checkouts, analytics, sitemap, robots, `next.config.ts`, dependências ou testes. Única mudança fora do escopo visual declarado: `LandingHeader` em telas < 360 px, descrita acima.

As configurações de build usadas em QA são variáveis de ambiente temporárias. A aparência de produção foi conferida com `NEXT_PUBLIC_SITE_MODE=production VERCEL_ENV=preview`, mantendo `noindex`.

## Validação

- `eslint .`, `tsc --noEmit`, `next build` e a suíte `npm test` nos modos revisão, preview com aparência de produção (`VERCEL_ENV=preview NEXT_PUBLIC_SITE_MODE=production`, `noindex`) e produção local.
- Oito rotas (incluindo uma inexistente para a 404) em 320, 390, 768 e 1440 px: primeira dobra e página completa, sem overflow horizontal, sem imagens quebradas, um `h1` por página, sem texto de revisão no modo de produção.
- Capturas finais em `qa-capturas/refinamento-visual-final/` (local, fora do git), com `relatorio.json` e grades-resumo. Navegador: Chrome; Safari e Firefox não testados.
