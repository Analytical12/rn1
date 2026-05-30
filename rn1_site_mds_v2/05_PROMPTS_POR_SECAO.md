# Prompts por seção — Construção do site RN1

Use estes prompts em sequência. Não tente construir tudo de uma vez. O objetivo é evitar uma landing page genérica, visualmente fraca ou confusa.

## Parte 0 — Preparação

```text
Antes de codar, leia os arquivos:

- 01_SITE_BRIEF_RN1.md
- 02_SEO_E_ARQUITETURA.md
- 03_COPY_HOME_RN1.md
- 04_DESIGN_SYSTEM_RN1.md

Use também como referência de conteúdo o arquivo:
- Apresentação NR-1_CARLA_GERHARD.pdf

Use os anexos de design/UI enviados como referência de qualidade visual e polimento:
- taste-skill-main(1).zip
- ui-ux-pro-max-skill-main(1).zip
- awesome-design-md-main(1).zip

Não copie o visual do PDF literalmente. Extraia o conteúdo útil e reescreva com tom técnico, seguro e comercial.

Não usar:
- conformidade garantida;
- garanta sua adequação;
- evita multas;
- elimina processos;
- fiscalização começa em maio;
- resolve a NR-1 sozinho.
```

## Parte 1 — Estrutura base, metadata e header

```text
Implemente apenas a fundação da landing page RN1:

1. Metadata SEO:
- title: RN1 | Implementação da NR-1 e Diagnóstico de Riscos Psicossociais
- description: A RN1 apoia empresas na implementação da NR-1, diagnóstico de riscos psicossociais, DRPS, relatórios, evidências e programas de prevenção em saúde mental no trabalho.
- Open Graph básico em pt_BR.

2. Header:
- logo textual RN1;
- navegação por âncoras: Início, NR-1, DRPS, Programas, Sobre, FAQ, Contato;
- botão “Falar com especialista”;
- responsivo mobile.

3. Estrutura semântica:
- header, main, section, footer;
- apenas um H1 no site;
- não implementar o restante ainda, só criar esqueleto das seções com placeholders.

Visual:
- usar paleta de saúde mental: verde sálvia, teal, azul petróleo, off-white e cinza quente;
- não usar azul saturado do PDF como base;
- não usar marcas Insad/Constante/RN1 Platform App.

Ao final, rodar TypeScript e build.
```

## Parte 2 — Hero section

```text
Agora implemente apenas o Hero da home RN1.

H1:
Implementação da NR-1 e Diagnóstico de Riscos Psicossociais para Empresas

Subtítulo:
A RN1 apoia empresas na identificação, organização e gestão dos fatores psicossociais relacionados ao trabalho, com diagnóstico estruturado, relatórios, evidências e programas preventivos.

CTAs:
- Falar pelo WhatsApp
- Entender como funciona

Microcopy:
Diagnóstico organizacional • Dados agregados • Relatórios executivos • Apoio ao RH e gestores

Elementos visuais:
- mockup/card de dashboard ou relatório;
- badges: DRPS, NR-1, Relatórios, Programas, RH e gestores;
- animação sutil de entrada.

Requisitos:
- hero precisa ter CTA acima da dobra;
- responsivo;
- visual premium e confiável;
- sem alarmismo;
- sem promessas absolutas.
```

## Parte 3 — Problema

```text
Implemente a seção “Por que sua empresa precisa olhar para os riscos psicossociais”.

Usar H2:
Por que sua empresa precisa olhar para os riscos psicossociais

Texto:
A saúde mental no trabalho deixou de ser uma pauta paralela. Sobrecarga, conflitos, assédio, falhas de comunicação, baixa clareza de função e adoecimento emocional impactam pessoas, produtividade, clima e gestão.

Cards H3:
- Afastamentos e adoecimento emocional
- Sobrecarga e pressão excessiva
- Assédio moral e psicológico
- Falhas de comunicação e liderança
- Baixo reconhecimento
- Clima organizacional fragilizado

Visual:
- grid responsivo;
- cards com hover suave;
- ícones discretos;
- evitar vermelho, sirene, alerta agressivo.
```

## Parte 4 — Solução e fluxo RN1

```text
Implemente a seção “Como a RN1 apoia a implementação da NR-1”.

H2:
Como a RN1 apoia a implementação da NR-1

Texto:
A RN1 estrutura uma jornada prática para apoiar empresas na identificação, avaliação e gestão dos riscos psicossociais, conectando diagnóstico, análise, relatórios e programas de intervenção.

Criar uma timeline/stepper com:
1. Reunião inicial
2. Mapeamento da empresa
3. Diagnóstico de riscos psicossociais — DRPS
4. Análise por setores
5. Matriz de risco
6. Relatórios e evidências
7. Recomendações preliminares
8. Programas preventivos e corretivos

Animação:
- steps entrando no scroll;
- hover discreto;
- layout bonito em desktop e mobile.
```

## Parte 5 — DRPS e 13 fatores

```text
Implemente a seção DRPS.

H2:
Diagnóstico de Riscos Psicossociais — DRPS

Texto:
O DRPS é uma ferramenta de diagnóstico organizacional para mapear fatores psicossociais percebidos pelos colaboradores. O foco é coletivo e organizacional, não clínico individual.

H3:
O que o DRPS permite identificar

Criar grid com os 13 fatores:
1. Assédio de qualquer natureza no trabalho
2. Falta de suporte/apoio
3. Má gestão de mudanças organizacionais
4. Baixa clareza de papel/função
5. Baixas recompensas e reconhecimento
6. Baixo controle/autonomia
7. Baixa justiça organizacional
8. Eventos violentos ou traumáticos
9. Baixa demanda/subcarga
10. Excesso de demandas/sobrecarga
11. Relações interpessoais no trabalho
12. Comunicação organizacional
13. Trabalho remoto e isolamento

Adicionar nota:
A análise deve ser interpretada de forma agregada e orientada à gestão organizacional.

Não apresentar como teste psicológico individual.
```

## Parte 6 — Relatórios e evidências

```text
Implemente a seção de relatórios.

H2:
Relatórios para apoiar decisões de RH, gestão e saúde ocupacional

Texto:
Após o diagnóstico, a RN1 organiza os resultados em relatórios claros, com classificação de risco, leitura por fatores, recomendações preliminares e evidências para acompanhamento interno.

Cards:
- Relatório consolidado
- Relatório por setor
- Matriz de risco
- Recomendações preliminares
- Evidências de prevenção
- Apoio à tomada de decisão

Visual:
- usar mockup de relatório/PDF;
- cards com estética premium;
- incluir nota sobre amostra suficiente para relatórios setoriais.
```

## Parte 7 — Programas estratégicos

```text
Implemente a seção de programas.

H2:
Programas para prevenção e intervenção em saúde mental no trabalho

Texto:
A RN1 também apoia a estruturação de programas adaptados à realidade da empresa, conforme diagnóstico, porte, setores avaliados e necessidades identificadas.

Cards H3:
- Gestão do estresse e prevenção ao burnout
- Saúde mental e clima organizacional
- Psicologia positiva no trabalho
- Prevenção e manejo da ansiedade
- Inteligência emocional para lideranças
- Equilíbrio vida-trabalho
- Prevenção ao assédio moral e psicológico
- Apoio psicológico dentro da empresa
- Avaliação psicossocial para atividades de risco
- Treinamento de RH para NR-1

Não vender como pacote milagroso. Vender como possibilidades de intervenção conforme diagnóstico.
```

## Parte 8 — Sobre Carla Gerhard

```text
Implemente a seção “Sobre Carla Gerhard”.

H2:
Sobre Carla Gerhard

Texto:
Carla Gerhard atua como psicanalista, analista comportamental há 12 anos e implementadora da NR-1, apoiando empresas na estruturação de ações voltadas à saúde mental, prevenção de riscos psicossociais e fortalecimento de ambientes de trabalho mais seguros e saudáveis.

Complemento:
Seu trabalho conecta escuta, análise comportamental, diagnóstico organizacional e orientação para ações práticas junto a empresas, RH e gestores.

Incluir:
- nome;
- atuação;
- contato;
- foto profissional se existir; se não existir, usar bloco visual abstrato e não imagem genérica forçada.

Corrigir qualquer redação do tipo “à 12 anos” para “há 12 anos”.
```

## Parte 9 — Transparência e FAQ

```text
Implemente as seções:

1. Transparência sobre o escopo
2. FAQ

H2:
Transparência sobre o escopo

Listar:
- não substitui a responsabilidade formal da empresa no GRO/PGR;
- não substitui avaliação clínica individual;
- não promete conformidade automática;
- não elimina riscos jurídicos por si só;
- não substitui SESMT, jurídico, contabilidade ou medicina do trabalho;
- não faz diagnóstico individual de colaboradores sem processo específico;
- não dispensa análise técnica individualizada da realidade da empresa.

H2:
Perguntas frequentes

FAQ com:
1. O que são riscos psicossociais?
2. O que é DRPS?
3. O DRPS identifica colaboradores individualmente?
4. O relatório substitui o PGR?
5. O diagnóstico garante conformidade?
6. Quais setores devem participar?
7. O que acontece depois do diagnóstico?
8. A RN1 também oferece programas de prevenção?
9. O colaborador precisa fazer login?
10. Como contratar uma avaliação inicial?

Usar accordion se já houver componente. Se não houver, usar cards colapsáveis simples ou lista bem formatada.
```

## Parte 10 — CTA final, footer e QA

```text
Implemente CTA final e footer.

CTA final H2:
Sua empresa está pronta para organizar a gestão dos riscos psicossociais?

Texto:
Fale com a RN1 e entenda como estruturar diagnóstico, relatórios e ações preventivas para apoiar sua empresa na gestão dos fatores psicossociais relacionados ao trabalho.

Botões:
- Falar pelo WhatsApp
- Enviar e-mail

Contatos:
- Carla Gerhard
- WhatsApp: +55 (49) 99155-8180
- E-mail: nr1@e31.com.br

Footer:
- RN1
- Implementação da NR-1 e riscos psicossociais
- Carla Gerhard
- WhatsApp
- E-mail
- links de navegação
- aviso: conteúdo informativo, não substitui análise técnica individualizada da empresa

Ao final:
- revisar H1/H2/H3;
- revisar title e meta;
- revisar responsividade;
- rodar tsc --noEmit;
- rodar npm run build;
- entregar relatório final.
```
