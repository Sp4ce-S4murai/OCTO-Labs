import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/content";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.brand} — ${site.tagline}`,
    template: `%s — ${site.brand}`,
  },
  description:
    "Criamos e mantemos a landing page da sua clínica odontológica. No ar em 48h, preço fixo mensal, suporte incluso. Um produto Octo Labs.",
  keywords: [
    "landing page para dentista",
    "site para clínica odontológica",
    "landing page odontologia",
    "marketing para dentistas",
    "página de captura odontologia",
  ],
  authors: [{ name: site.parentBrand }],
  creator: site.parentBrand,
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: site.url,
    siteName: site.brand,
    title: `${site.brand} — ${site.tagline}`,
    description:
      "Pare de perder paciente por falta de uma página profissional. Criação e manutenção mensal de landing pages para clínicas odontológicas.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: site.brand,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.brand} — ${site.tagline}`,
    description:
      "Pare de perder paciente por falta de uma página profissional. Criação e manutenção mensal de landing pages para clínicas odontológicas.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: site.brand,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description:
      "Criação e manutenção mensal de landing pages para clínicas odontológicas, com hospedagem e suporte inclusos.",
    offers: [
      {
        "@type": "Offer",
        name: "Plano Essencial",
        price: "147",
        priceCurrency: "BRL",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: "147",
          priceCurrency: "BRL",
          billingIncrement: 1,
          unitCode: "MON",
        },
      },
      {
        "@type": "Offer",
        name: "Plano Profissional",
        price: "297",
        priceCurrency: "BRL",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: "297",
          priceCurrency: "BRL",
          billingIncrement: 1,
          unitCode: "MON",
        },
      },
    ],
    brand: {
      "@type": "Brand",
      name: site.parentBrand,
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: site.brand,
    parentOrganization: {
      "@type": "Organization",
      name: site.parentBrand,
    },
    description:
      "Produto da Octo Labs especializado em landing pages para clínicas odontológicas.",
    telephone: `+${site.whatsapp.number}`,
    url: site.url,
    areaServed: "BR",
  },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  );
}
