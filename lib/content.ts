// Conteúdo centralizado do site institucional da Octo Labs.
// Isto é um boilerplate simples — o produto de verdade que vai a mercado
// primeiro é o Octo Páginas (repo separado, "OctoPaginas").

export const site = {
  brand: "Octo Labs",
  parentBrand: "Octo Labs",
  tagline: "Fábrica de produtos digitais",
  // TODO: domínio final. Hoje este repo é o que ocupa octo-labs.vercel.app.
  url: "https://octo-labs.vercel.app",
  whatsapp: {
    number: "555494058603",
    displayNumber: "+55 54 9405-8603",
    defaultMessage: "Olá! Vim pelo site da Octo Labs.",
  },
  social: {
    // TODO: confirmar se essas contas existem de fato antes de publicar.
    instagram: "https://instagram.com/octolabs",
    linkedin: "https://linkedin.com/company/octolabs",
  },
};

export const whatsappLink = (message?: string) => {
  const text = encodeURIComponent(message ?? site.whatsapp.defaultMessage);
  return `https://wa.me/${site.whatsapp.number}?text=${text}`;
};

export const nav = [
  { label: "Produtos", href: "#produtos" },
  { label: "Contato", href: "#contato" },
];

export const hero = {
  eyebrow: "Octo Labs",
  headline: "Construímos produtos digitais para pequenos negócios venderem mais",
  subheadline:
    "Somos uma fábrica de software focada em produtos enxutos, no ar rápido, com processo e suporte por trás — não freelancer solto.",
  ctaPrimary: { label: "Ver produtos", href: "#produtos" },
  ctaSecondary: { label: "Falar no WhatsApp", href: "#contato" },
};

export type Product = {
  name: string;
  tagline: string;
  description: string;
  href: string;
  status: string;
};

export const products = {
  title: "Nossos produtos",
  subtitle: "Cada produto resolve um problema específico de um nicho específico.",
  items: [
    {
      name: "Octo Páginas",
      tagline: "Landing pages para clínicas odontológicas",
      description:
        "Criação e manutenção mensal de landing pages de alta conversão, com CTA direto no WhatsApp, para clínicas odontológicas de 1 a 5 cadeiras.",
      // TODO: trocar pelo domínio final assim que o produto for publicado
      // em um projeto Vercel próprio.
      href: "https://octo-paginas.vercel.app",
      status: "Em teste",
    },
  ] as Product[],
};

export const footer = {
  description: "Octo Labs — fábrica de produtos digitais.",
};
