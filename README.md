# Octo Labs — site institucional

Site oficial da Octo Labs: página central da marca, com um produto por
rota em `/produtos/`.

## Estrutura

```
octo-labs/
├── index.html                       # home: sobre + lista de produtos + contato
├── produtos/
│   ├── landing-pages/index.html     # produto: Landing Pages
│   └── nfc/index.html               # produto: Placas NFC (em desenvolvimento)
├── assets/
│   ├── css/style.css
│   ├── js/main.js
│   └── img/logo.jpg
├── BRAND.md                         # guia de marca (cor, tipografia, tom de voz)
├── CLIENTS.md                       # planilha simples de leads
└── README.md
```

## Como usar

Não há build nem dependências. Basta abrir `index.html` no navegador, ou
usar um servidor estático simples (`npx serve .`) pra testar os links
absolutos (`/assets/...`, `/produtos/...`) corretamente.

Para hospedar, suba a pasta inteira em qualquer serviço de hosting
estático (Vercel, Netlify, GitHub Pages, etc). O Vercel detecta site
estático automaticamente — não precisa de `vercel.json`.

## Adicionar um novo produto

1. Crie uma pasta `produtos/<slug>/index.html` copiando a estrutura de
   `produtos/nfc/index.html`.
2. Adicione uma linha em `.product-list` no `index.html` da home,
   apontando pra rota nova.
3. Siga o guia de tom de voz em `BRAND.md` — sem "atendimento
   humanizado", sem estatística inventada, CTA sempre pro WhatsApp.
