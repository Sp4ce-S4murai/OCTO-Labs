# Octo Labs

Boilerplate institucional da **Octo Labs** — fábrica de produtos digitais.

> Este repo já está no ar na Vercel (`octo-labs.vercel.app`) e é usado como
> ambiente de teste, por isso ficou reservado para o site institucional da
> holding. O produto que vai a mercado primeiro — **Octo Páginas**,
> landing pages para clínicas odontológicas — foi movido para um repo
> separado ("OctoPaginas"), que também precisa de um projeto Vercel
> próprio quando for publicado de verdade.

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

## Onde editar o conteúdo

Todo o texto e link do site fica centralizado em
[`lib/content.ts`](lib/content.ts):

| Export | O que controla |
| --- | --- |
| `site` | Marca, WhatsApp e redes sociais |
| `hero` | Headline, subheadline e CTAs do topo |
| `products` | Lista de produtos da Octo Labs (hoje só o Octo Páginas) |
| `footer` | Texto do rodapé |

## Estrutura de pastas

```
app/
  layout.tsx        # layout raiz, metadata, Open Graph, schema.org Organization
  page.tsx           # Header + Hero + Produtos + Contato + Footer
  sitemap.ts, robots.ts, manifest.ts  # SEO técnico
components/
  Header.tsx, Hero.tsx, Products.tsx, Contact.tsx, Footer.tsx, Logo.tsx
lib/
  content.ts          # conteúdo centralizado do site
```

Este boilerplate não tem formulário de captura de lead — só um CTA de
WhatsApp. Se um dia esse site passar a coletar dado de visitante (form,
newsletter etc.), volte a adicionar uma política de privacidade (LGPD).

## Deploy

Este repo já é o que está publicado em `octo-labs.vercel.app`. Antes de
tratar como institucional "de verdade", atualize em `lib/content.ts`:

- `site.social` — confirme se as contas de Instagram/LinkedIn existem;
- `products` — mantenha a lista de produtos e o link de cada um
  atualizados conforme forem publicados em domínios próprios.

### Imagem de Open Graph

A imagem usada nos previews de compartilhamento é o arquivo estático
[`public/og-image.png`](public/og-image.png) (1200×630), referenciado em
`openGraph.images` e `twitter.images` no [`app/layout.tsx`](app/layout.tsx).
