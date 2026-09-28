/**
 * Depoimentos. Só são publicados com autorização e contexto confirmados
 * (approved = true). Texto preservado como no original, sem reescrita.
 * Referem-se à análise comportamental: não usar como prova de outros produtos.
 */
export interface Testimonial {
  quote: string;
  author: string;
}

export const analiseTestimonials: {
  approved: boolean;
  context: string;
  source: string;
  items: Testimonial[];
} = {
  approved: false,
  context: "Análise comportamental",
  source:
    "carlagerhard.com.br (página do combo, primeiro bloco \"O que dizem sobre o conteúdo\"). " +
    "A mesma página traz uma segunda versão reescrita desses textos, que não é usada.",
  items: [
    {
      quote:
        "Maravilhosa! Uma oportunidade de ressignificar aqueles detalhes de nossa personalidade que por vezes acreditamos ser 'falhas' e compreendemos simplesmente fazer parte da obra fantástica que é a nossa essência.",
      author: "Luh Ferrazza",
    },
    {
      quote:
        "Uma experiência incrível a análise comportamental! Uma descoberta sobre sua personalidade, sobre como Deus nos fez, me levou à aceitação de minha personalidade e também à santificação!",
      author: "Débora Slotnicki",
    },
    {
      quote:
        "Momento de excelência!!! Descoberta!!! Uma visão mais limpa e real de quem eu sou, o que ajustar, onde posso melhorar para alcançar novos resultados.",
      author: "Maristela Rolao",
    },
    {
      quote:
        "Divisor de águas na minha vida. A contribuição que essa análise traz é fundamental e necessária. Um novo olhar a partir da sua identidade pessoal.",
      author: "Andréia M Carpes",
    },
    {
      quote:
        "Super indico Análise Comportamental. É transformador! Um grande passo para mudança de vida. Conhecendo o perfil aprendemos a aceitar quem somos.",
      author: "Renata Fernandes",
    },
    {
      quote:
        "Venci a 'insegurança' de aprender mais sobre mim e sobre o próximo através dessa ferramenta que traz luz diante de tantas dúvidas individuais.",
      author: "Yulixa Fecker",
    },
  ],
};
