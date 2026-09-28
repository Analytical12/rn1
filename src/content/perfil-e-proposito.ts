/**
 * Os 16 eBooks do Combo Perfil e Propósito, com a numeração da oferta original.
 * Títulos preservados exatamente. O agrupamento por tema é só de leitura.
 */
export const ebooks = [
  { n: 1, title: "Combinações de perfis e seus comportamentos", group: "perfis" },
  { n: 2, title: "Crise – Uma oportunidade", group: "proposito" },
  { n: 3, title: "Descobrindo seu propósito", group: "proposito" },
  { n: 4, title: "Desvendando os medos da mente", group: "perfis" },
  { n: 5, title: "Entre Temperamentos e Promessas", group: "perfis" },
  { n: 6, title: "Lidere com propósito", group: "lideranca" },
  { n: 7, title: "Ministrações comportamentais", group: "lideranca" },
  { n: 8, title: "Os medos de cada perfil", group: "perfis" },
  { n: 9, title: "Perfil Comportamental para Igreja", group: "lideranca" },
  { n: 10, title: "Perfis Únicos de Pais e Filhos", group: "familia" },
  { n: 11, title: "Perfil Comportamental para Mães", group: "familia" },
  { n: 12, title: "O seu comportamento como liderança na igreja", group: "lideranca" },
  { n: 13, title: "Identificando o perfil no meio eclesiástico", group: "lideranca" },
  { n: 14, title: "Harmonia conjugal através dos perfis", group: "familia" },
  { n: 15, title: "A Linguagem do Amor para Casais", group: "familia" },
  { n: 16, title: "Perfil Comportamental para Cristãos e Personalidades Bíblicas", group: "perfis" },
] as const;

export const ebookGroups = [
  { id: "perfis", label: "Perfis e comportamento" },
  { id: "familia", label: "Família e relacionamentos" },
  { id: "proposito", label: "Propósito e momentos de mudança" },
  { id: "lideranca", label: "Liderança e igreja" },
] as const;

/** Extras citados na oferta antiga. Fora da versão publicável até validação. */
export const comboExtras = {
  approved: false,
  items: [
    { title: "Live mensal", text: "Encontro em grupo com Carla para aprofundar os temas e tirar dúvidas." },
    { title: "Testes de perfis", text: "Ferramentas para identificar padrões de comportamento." },
    { title: "Exercícios aplicados", text: "Atividades para levar os aprendizados ao dia a dia." },
    { title: "Garantia de 7 dias", text: "Condição anunciada na oferta antiga." },
  ],
};
