# QA checklist — Site institucional RN1

## SEO

- [ ] Há apenas um H1.
- [ ] O H1 contém a palavra-chave principal.
- [ ] Title SEO está configurado.
- [ ] Meta description está configurada.
- [ ] Open Graph básico está configurado.
- [ ] H2s organizam as seções principais.
- [ ] H3s aparecem em cards e subtópicos.
- [ ] Há links internos por âncoras.
- [ ] O CTA principal aparece acima da dobra.
- [ ] A página é indexável, se for produção pública.

## Conteúdo

- [ ] O site é sobre RN1, não sobre Insad.
- [ ] O site é sobre RN1, não sobre Constante.
- [ ] O site não é apenas pessoal da Carla.
- [ ] Carla aparece como profissional responsável/implementadora.
- [ ] O texto explica NR-1.
- [ ] O texto explica riscos psicossociais.
- [ ] O texto explica DRPS.
- [ ] O texto explica relatórios e evidências.
- [ ] O texto explica programas preventivos/corretivos.
- [ ] O texto inclui contato da Carla.
- [ ] O texto usa os contatos corretos: +55 (49) 99155-8180 e nr1@e31.com.br.

## Claims e risco jurídico

- [ ] Não aparece “conformidade garantida”.
- [ ] Não aparece “garanta sua adequação”.
- [ ] Não aparece “evita multas”.
- [ ] Não aparece “elimina processos”.
- [ ] Não aparece “fiscalização começa em maio”.
- [ ] Não aparece “resolve a NR-1 sozinho”.
- [ ] Não aparece “substitui o GRO/PGR”.
- [ ] Não promete diagnóstico clínico individual.
- [ ] Linguagem é consultiva e preventiva.

## Design

- [ ] Paleta usa saúde mental corporativa.
- [ ] Verde sálvia/teal/azul petróleo aparecem com equilíbrio.
- [ ] Off-white/cinza quente ajudam na leitura.
- [ ] Não usa azul saturado do PDF como base.
- [ ] Não parece template genérico.
- [ ] Cards têm espaçamento adequado.
- [ ] Botões são claros.
- [ ] Visual é profissional e confiável.
- [ ] Animações são suaves.
- [ ] Não há excesso de movimento.

## Acessibilidade

- [ ] Contraste suficiente.
- [ ] Botões com área clicável adequada.
- [ ] Foco visível.
- [ ] Imagens com alt, se houver.
- [ ] Não depende só de cor para comunicar informações.
- [ ] Navegação por teclado funciona.

## Mobile

- [ ] Header funciona no mobile.
- [ ] Hero não quebra.
- [ ] Cards empilham corretamente.
- [ ] CTA fica visível.
- [ ] FAQ é legível.
- [ ] Footer não quebra.

## Performance

- [ ] Sem imagens pesadas desnecessárias.
- [ ] Sem animações pesadas.
- [ ] Build limpo.
- [ ] Sem warnings críticos.
- [ ] Sem dependências excessivas.

## Técnico

- [ ] `tsc --noEmit` sem erros.
- [ ] `npm run build` limpo.
- [ ] Rotas existentes continuam funcionando.
- [ ] `/login` não quebrou.
- [ ] `/app` não quebrou.
- [ ] `/portal` não quebrou.
- [ ] `/drps/[slug]` não quebrou.
- [ ] Sem dados sensíveis hardcoded.
- [ ] Sem chaves em frontend.
