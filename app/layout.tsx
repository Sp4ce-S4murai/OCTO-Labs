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
    "Octo Labs é uma fábrica de produtos digitais. Conheça nossos produtos e fale com a gente.",
  authors: [{ name: site.brand }],
  creator: site.brand,
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: site.url,
    siteName: site.brand,
    title: `${site.brand} — ${site.tagline}`,
    description: "Octo Labs é uma fábrica de produtos digitais.",
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
    description: "Octo Labs é uma fábrica de produtos digitais.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.brand,
  description: "Fábrica de produtos digitais.",
  telephone: `+${site.whatsapp.number}`,
  url: site.url,
};

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
