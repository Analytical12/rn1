import type { Sample } from "@/components/site/SampleGallery";

/**
 * Conteúdo das duas edições do Advento Pequenas Sementes 2026.
 * Conferido nos PDFs finais (Família: 143 p.; Igreja: 160 p.). As páginas
 * citadas entre parênteses são a posição física no PDF.
 * As edições têm calendários próprios: não misturar.
 */

const page = { width: 1600, height: 1131 };

export const familia = {
  cover: {
    src: "/images/advento/familia/capa.webp",
    ...page,
    alt: "Capa do Advento de Natal 2026 Pequenas Sementes para a Família: pais e filhos com Bíblias e Jesus ao fundo",
  },
  samples: [
    {
      src: "/images/advento/familia/trilha.webp",
      ...page,
      alt: "Página da Trilha do Advento de Natal, com os 25 dias num caminho ilustrado e a Sagrada Família",
      title: "Trilha do Advento",
      caption: "A cada dia vivido, a criança marca a trilha com uma figurinha, do 1º ao 25º dia.", // PDF p. 16
    },
    {
      src: "/images/advento/familia/dia-03.webp",
      ...page,
      alt: "Página do 3º dia do Advento: local, atividade de colorir e montar os dias da criação, propósito, versículo e orientação para os pais",
      title: "A orientação de cada dia",
      caption: "Local, atividade, propósito, versículo e orientação para os pais. No exemplo, o 3º dia.", // PDF p. 34
    },
    {
      src: "/images/advento/familia/capsula.webp",
      ...page,
      alt: "Página da Cápsula do Advento com o passo a passo, sugestões de recipientes, onde guardar e cuidados",
      title: "Cápsula do Advento",
      caption: "No 25º dia, a família guarda desenhos, fotos e orações para abrir no próximo Advento ou Natal.", // PDF p. 113
    },
  ] satisfies Sample[],
  weeks: [
    { label: "Semana 1", period: "1º a 5 de dezembro", theme: "Jesus é a Promessa" },
    { label: "Semana 2", period: "6 a 12 de dezembro", theme: "Crescendo com Jesus" },
    { label: "Semana 3", period: "13 a 19 de dezembro", theme: "A fidelidade de Deus atravessa gerações" },
    { label: "Semana 4", period: "20 a 25 de dezembro", theme: "Jesus é o presente perfeito" },
  ],
  resources: [
    {
      title: "Orientação para os pais e organização das semanas",
      text: "Um manual com o passo a passo antes de cada atividade, sugestões para organizar a impressão e as quatro semanas com tema, versículo e objetivo.",
    },
    {
      title: "Trilha, cartinhas e figurinhas",
      text: "Uma cartinha e uma figurinha para cada dia e duas opções de trilha para a criança acompanhar a caminhada.",
    },
    {
      title: "Atividades e materiais para imprimir",
      text: "Árvore dos Frutos, Pote da Gratidão, receitas de bolo para presentear alguém, a Expedição “Encontrando Jesus”, medalhas e a Cápsula do Advento, entre outras propostas.",
    },
    {
      title: "Propostas para conversar, orar, criar e servir",
      text: "Os dias alternam leitura bíblica, oração, conversa, desenho, louvor e gestos de amor, cada um ligado a um pilar, como gratidão, serviço, generosidade e intercessão.",
    },
  ],
  supplies: [
    "Impressão em casa ou em gráfica, em papel comum",
    "Papel adesivo para as figurinhas",
    "Papel de maior gramatura para as atividades que pedem firmeza",
    "Tesoura, cola e materiais de uso escolar",
    "Pasta, envelope ou clipes para separar cada semana",
    "Itens da casa em algumas atividades, como potes, ingredientes de receita e uma caixa para a cápsula",
  ],
};

export const igrejas = {
  cover: {
    src: "/images/advento/igrejas/capa.webp",
    ...page,
    alt: "Capa do Advento de Natal Pequenas Sementes para o Ministério Infantil: crianças com Bíblias e Jesus ao fundo",
  },
  samples: [
    {
      src: "/images/advento/igrejas/professores.webp",
      ...page,
      alt: "Página de orientação aos professores da semana 1, com período, tema, versículo, objetivo e os quatro pilares da semana",
      title: "Orientação ao professor",
      caption: "Período, tema, versículo, objetivo e pilares de cada semana. No exemplo, a semana 1.", // PDF p. 26
    },
    {
      src: "/images/advento/igrejas/cartinhas.webp",
      ...page,
      alt: "Página com cartinhas ilustradas “Estrela” (1º dia, 15/11/26) e “Cartinha” (2º dia), em quatro cópias cada",
      title: "Atividade para a turma",
      caption: "As cartinhas de cada etapa vêm em várias cópias por página, prontas para imprimir para as crianças.", // PDF p. 35
    },
    {
      src: "/images/advento/igrejas/pais.webp",
      ...page,
      alt: "Página do manual da semana 1 com o que explicar aos pais e a mensagem para enviar no grupo das famílias",
      title: "Continuidade com as famílias",
      caption: "Mensagem para o grupo dos pais, com o que fazer em casa e o que preparar para a semana seguinte.", // PDF p. 24
    },
  ] satisfies Sample[],
  weeks: [
    { label: "Semana 1", period: "15 a 21 de novembro", steps: "1ª à 4ª etapa", theme: "Jesus é a Promessa" },
    { label: "Semana 2", period: "22 a 28 de novembro", steps: "5ª à 10ª etapa", theme: "Crescendo com Jesus em gratidão, louvor, serviço e fé" },
    // O PDF traz "29/11/26 a 15/11/26" (erro de digitação): exibimos só o início.
    { label: "Semana 3", period: "a partir de 29 de novembro", steps: "11ª à 15ª etapa", theme: "Jesus é o maior presente e a fidelidade de Deus atravessa gerações" },
    { label: "Semana 4", period: "6 a 12 de dezembro", steps: "16ª à 20ª etapa", theme: "A alegria que vem de Jesus e a presença de Deus na nossa família" },
    { label: "Semana 5", period: "13 a 19 de dezembro", steps: "21ª à 23ª etapa", theme: "Caminhando com Jesus: ouvindo Sua voz, servindo com amor e vivendo em comunhão" },
    { label: "Semana 6", period: "20 a 25 de dezembro", steps: "24ª e 25ª etapas", theme: "Guardando no coração o caminho vivido com Jesus" },
  ],
  structure: [
    { title: "Organização semanal", text: "Cronograma das seis semanas e um mapa de utilização e impressão." },
    { title: "Temas e objetivos", text: "Cada semana tem tema, versículo, objetivo e pilares." },
    { title: "Orientações para professores", text: "Manual da semana, orientações para os professores e checklist de preparação." },
    { title: "Atividades", text: "Propostas para as crianças, como a Criação do Mundo, a Árvore dos Frutos e o Pote da Gratidão." },
    { title: "Cartinhas, figurinhas e trilha", text: "Trilha individual para cada criança e figurinhas maiores para montar uma trilha da sala em A3." },
    { title: "Materiais para impressão", text: "Páginas para professores e páginas para os alunos, organizadas por semana." },
    { title: "Continuidade em casa", text: "Mensagens para o grupo dos pais e o que a família faz com a criança durante a semana." },
    { title: "Encerramento", text: "Celebração na igreja no domingo, 20 de dezembro, com entrega das medalhas; a 25ª etapa é a Cápsula do Advento, em casa." },
  ],
  supplies: [
    "Impressora e papéis para as páginas de professores e alunos",
    "Folhas adesivas para as figurinhas",
    "Papel de maior gramatura para as atividades que pedem firmeza",
    "Clipes, pastinhas ou plásticos para separar o material de cada criança",
    "Um grupo com os pais para combinar e acompanhar a semana",
  ],
};
