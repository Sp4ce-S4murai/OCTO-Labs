// Conteúdo centralizado do site. Edite aqui para trocar textos, preços,
// depoimentos e links sem precisar mexer nos componentes.

export const site = {
  brand: "Octo Páginas",
  parentBrand: "Octo Labs",
  tagline: "Landing pages para clínicas odontológicas",
  url: "https://octo-labs.vercel.app",
  whatsapp: {
    number: "555494058603",
    displayNumber: "+55 54 9405-8603",
    defaultMessage:
      "Olá! Vim pelo site da Octo Páginas e quero saber mais sobre os planos.",
  },
  social: {
    instagram: "https://instagram.com/octopaginas",
    linkedin: "https://linkedin.com/company/octolabs",
  },
};

export const whatsappLink = (message?: string) => {
  const text = encodeURIComponent(message ?? site.whatsapp.defaultMessage);
  return `https://wa.me/${site.whatsapp.number}?text=${text}`;
};

export const nav = [
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Planos", href: "#planos" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "FAQ", href: "#faq" },
];

export const hero = {
  eyebrow: "Landing pages para dentistas que anunciam online",
  headline: "Pare de perder paciente por falta de uma página profissional",
  subheadline:
    "A Octo Páginas cria a landing page da sua clínica, hospeda e cuida da manutenção todo mês — para que o clique do seu anúncio vire consulta marcada, não uma mensagem perdida no Instagram.",
  ctaPrimary: { label: "Ver planos", href: "#planos" },
  ctaSecondary: {
    label: "Falar no WhatsApp",
    href: "#contato",
  },
  bullets: [
    "No ar em até 48h",
    "Preço fixo mensal, sem contrato de agência",
    "Suporte e ajustes inclusos",
  ],
};

export const painPoints = {
  title: "Cada dia sem uma página otimizada é receita perdida",
  subtitle:
    "Se você já investe em anúncio, o problema não é falta de interessado — é o que acontece depois do clique.",
  items: [
    {
      title: "O lead chega no Instagram e some",
      description:
        "Sem uma página que explique o serviço e gere confiança antes do contato, boa parte do tráfego se perde na primeira dúvida.",
    },
    {
      title: "Anúncio caro sem página que converte",
      description:
        "Você paga por clique, mas manda esse clique para um perfil genérico ou direto pro WhatsApp, sem filtrar nem qualificar quem chega.",
    },
    {
      title: "Cada agenda vazia é receita perdida",
      description:
        "Um paciente que não agenda hoje é um tratamento que não acontece esse mês — e o investimento em mídia que não voltou.",
    },
  ],
};

export const howItWorks = {
  title: "Como funciona",
  subtitle: "Um processo simples, pensado para quem não tem tempo de aprender ferramenta nova.",
  steps: [
    {
      number: "01",
      title: "Briefing rápido",
      description:
        "Você conta sobre sua clínica, especialidades e diferenciais em uma conversa curta ou formulário guiado.",
    },
    {
      number: "02",
      title: "Criamos sua página em 48h",
      description:
        "Nosso time desenvolve e estrutura a landing page da sua clínica, otimizada para converter visitantes em agendamentos.",
    },
    {
      number: "03",
      title: "Você aprova",
      description:
        "Revisa tudo, pede ajustes se quiser, e só aprova quando estiver do jeito que representa sua clínica.",
    },
    {
      number: "04",
      title: "Fica no ar com suporte incluso",
      description:
        "Hospedagem, manutenção e pequenos ajustes mensais inclusos na assinatura. Você foca em atender.",
    },
  ],
};

export type PricingFeature = { text: string; included: boolean };

export const pricing = {
  title: "Planos e preços",
  subtitle:
    "Um preço fixo, sem letra miúda. Cancele quando quiser, sem multa de fidelidade.",
  plans: [
    {
      id: "essencial",
      name: "Essencial",
      price: "R$ 147",
      period: "/mês",
      description: "Para quem quer sair do zero com uma página profissional no ar.",
      highlighted: false,
      ctaLabel: "Quero o Essencial",
      features: [
        { text: "1 landing page profissional", included: true },
        { text: "Hospedagem inclusa", included: true },
        { text: "Domínio próprio (você já tem ou orientamos a comprar)", included: true },
        { text: "Formulário de contato integrado ao WhatsApp", included: true },
        { text: "Até 2 ajustes de texto/imagem por mês", included: true },
        { text: "Suporte por e-mail", included: true },
        { text: "Otimização para anúncios (Google/Meta)", included: false },
        { text: "Relatório mensal de desempenho", included: false },
      ] as PricingFeature[],
    },
    {
      id: "profissional",
      name: "Profissional",
      price: "R$ 297",
      period: "/mês",
      description: "Para quem já anuncia e quer extrair o máximo de cada clique.",
      highlighted: true,
      badge: "Mais popular",
      ctaLabel: "Quero o Profissional",
      features: [
        { text: "1 landing page profissional", included: true },
        { text: "Hospedagem inclusa", included: true },
        { text: "Domínio próprio (você já tem ou orientamos a comprar)", included: true },
        { text: "Formulário de contato integrado ao WhatsApp", included: true },
        { text: "Ajustes ilimitados de texto/imagem por mês", included: true },
        { text: "Suporte prioritário via WhatsApp", included: true },
        { text: "Otimização para anúncios (Google/Meta)", included: true },
        { text: "Relatório mensal de desempenho", included: true },
      ] as PricingFeature[],
    },
  ],
  footnote:
    "Setup inicial sem custo extra. Valores para landing page única — para múltiplas unidades, fale com a gente.",
};

export const testimonials = {
  title: "Quem já usa, recomenda",
  subtitle: "Depoimentos de clínicas que trocaram o improviso por uma página que trabalha por elas.",
  metrics: [
    { value: "+40%", label: "de agendamentos via WhatsApp reportados por clientes" },
    { value: "48h", label: "tempo médio de entrega da primeira versão" },
    { value: "98%", label: "de clientes que renovam a assinatura mês a mês" },
  ],
  items: [
    {
      quote:
        "Antes eu mandava todo mundo pro Instagram e perdia metade no caminho. Com a página, o paciente já chega sabendo o que eu faço e decidido a marcar.",
      name: "Dr. Rafael Menezes",
      clinic: "Clínica OdontoVida",
    },
    {
      quote:
        "O que mais pesou pra mim foi não precisar aprender nada. Mando a mudança por WhatsApp e no mesmo dia já está no ar.",
      name: "Dra. Camila Torres",
      clinic: "Sorriso & Cia Odontologia",
    },
    {
      quote:
        "Contratei agência antes e pagava muito mais por muito menos suporte. Aqui o preço é fixo e eu sei exatamente no que estou investindo.",
      name: "Dr. Eduardo Salles",
      clinic: "Salles Odontologia Avançada",
    },
  ],
};

export const about = {
  title: "Um produto Octo Labs, não um freelancer solto",
  description:
    "Octo Páginas é um produto da Octo Labs, uma fábrica de software que desenvolve produtos digitais. Isso significa processo, equipe e estrutura por trás da sua página — não depende de uma pessoa só, nem some depois da entrega. Você contrata uma empresa comprometida em manter sua página no ar e funcionando.",
  points: [
    "Processo padronizado de produção e revisão",
    "Infraestrutura de hospedagem profissional",
    "Time responsável por suporte e manutenção contínua",
  ],
};

export const faq = {
  title: "Perguntas frequentes",
  subtitle: "Se ficar alguma dúvida depois, é só chamar no WhatsApp.",
  items: [
    {
      question: "Preciso saber programar?",
      answer:
        "Não. Você não mexe em nada técnico. Qualquer alteração de texto, imagem ou informação é feita pela nossa equipe — você só descreve o que precisa.",
    },
    {
      question: "Posso cancelar quando quiser?",
      answer:
        "Sim. A assinatura é mensal e sem fidelidade. Você pode cancelar quando quiser, sem multa.",
    },
    {
      question: "Quanto tempo leva pra ficar no ar?",
      answer:
        "A primeira versão da sua página fica pronta em até 48h após o briefing. Depois de aprovada, publicamos no mesmo dia.",
    },
    {
      question: "Vocês cuidam do domínio?",
      answer:
        "Sim. Se você já tem um domínio, nós configuramos. Se ainda não tem, te orientamos na compra e cuidamos de toda a configuração técnica.",
    },
    {
      question: "E se eu quiser mudar o texto depois?",
      answer:
        "É só chamar no WhatsApp ou e-mail. No plano Essencial você tem até 2 ajustes por mês inclusos; no Profissional, os ajustes são ilimitados.",
    },
    {
      question: "Funciona com meu Instagram/WhatsApp atual?",
      answer:
        "Sim. A página é feita para complementar seus canais, não substituí-los. Ela filtra e qualifica o visitante antes de direcionar para o seu WhatsApp, com os links dos seus perfis integrados.",
    },
  ],
};

export const ctaFinal = {
  title: "Sua clínica merece uma página que trabalha por ela",
  subtitle:
    "Comece agora e tenha sua landing page profissional no ar em até 48 horas, com suporte incluso todo mês.",
  ctaLabel: "Falar no WhatsApp agora",
};

export const footer = {
  description:
    "Octo Páginas — um produto Octo Labs. Criação e manutenção de landing pages para clínicas odontológicas.",
  links: {
    privacy: "/privacidade",
  },
};
