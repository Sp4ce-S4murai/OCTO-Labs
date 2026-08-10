# Octo Páginas

Landing page do produto **Octo Páginas** (Octo Labs) — criação e manutenção
mensal de landing pages para clínicas odontológicas.

## Stack

- [Next.js 14](https://nextjs.org/) (App Router) + TypeScript
- Tailwind CSS
- [lucide-react](https://lucide.dev/) para ícones

## Rodando localmente

Pré-requisitos: Node.js 18.17+ e npm.

```bash
npm install
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

Outros comandos úteis:

```bash
npm run build   # build de produção
npm run start   # roda o build de produção localmente
npm run lint    # checagem de lint
```

## Onde editar o conteúdo

Praticamente todo o texto, preço e depoimento do site fica centralizado em
[`lib/content.ts`](lib/content.ts). Para trocar qualquer informação (preços,
headline, depoimentos, perguntas do FAQ, número de WhatsApp, links de redes
sociais etc.) edite esse arquivo — não é necessário mexer nos componentes.

Principais blocos do arquivo:

| Export | O que controla |
| --- | --- |
| `site` | Marca, WhatsApp, e-mail e redes sociais |
| `hero` | Headline, subheadline e CTAs do topo |
| `painPoints` | Bullets de dor/problema |
| `howItWorks` | Passos do "como funciona" |
| `pricing` | Planos, preços e features |
| `testimonials` | Depoimentos e métricas |
| `about` | Bloco "sobre / Octo Labs" |
| `faq` | Perguntas frequentes |
| `ctaFinal` | Textos da seção final de contato |
| `footer` | Textos do rodapé |

## Estrutura de pastas

```
app/
  layout.tsx        # layout raiz, metadata, Open Graph, schema.org
  page.tsx           # monta a página juntando todas as seções
  privacidade/        # página de política de privacidade
  api/contact/route.ts  # endpoint (mock) que recebe o lead do formulário
  sitemap.ts, robots.ts, manifest.ts  # SEO técnico
components/
  Header.tsx, Hero.tsx, PainPoints.tsx, HowItWorks.tsx,
  Pricing.tsx, PricingCard.tsx, Testimonials.tsx, About.tsx,
  Faq.tsx, FaqAccordion.tsx, ContactForm.tsx, CtaFinal.tsx,
  Footer.tsx, Logo.tsx
lib/
  content.ts          # conteúdo centralizado do site
```

## Formulário de lead

O formulário da seção final (`components/ContactForm.tsx`) envia os dados
para `app/api/contact/route.ts`, que hoje apenas valida o payload e loga o
lead no console (`app/api/contact/route.ts`).

Para conectar a um serviço real, edite o bloco marcado com `TODO` nesse
arquivo e plugue, por exemplo:

- **[Resend](https://resend.com/docs/send-with-nextjs)** — para enviar um
  e-mail transacional a cada novo lead;
- **[Formspree](https://formspree.io/)** — trocando a rota mockada pelo
  endpoint do Formspree;
- **Webhook para WhatsApp** (Meta Cloud API, Twilio, Z-API, etc.) — para
  disparar uma mensagem automática assim que o lead chegar.

O contrato de entrada (`{ name, clinic, whatsapp, message }`) e saída
(`{ ok: boolean, error?: string }`) já está pronto, então a integração real
não exige mudanças no formulário nem no restante do site.

## Deploy

O projeto é um app Next.js padrão e pode ser publicado em qualquer
plataforma compatível (ex.: Vercel). Antes de publicar, atualize:

- `site.url` em `lib/content.ts` com o domínio final;
- `public/og-image.png` com uma imagem de Open Graph real (1200×630);
- os dados de contato, redes sociais e CNPJ em `lib/content.ts` e no rodapé.
