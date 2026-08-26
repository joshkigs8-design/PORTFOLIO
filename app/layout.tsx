import type { Metadata, Viewport } from "next";
import { Playfair_Display, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/data/siteConfig";

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#F6F1E8",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://joshkigen.com"),
  title: {
    default: "Josh Kigen — Developer, Entrepreneur & Creative Builder",
    template: `%s | Josh Kigen`,
  },
  description: siteConfig.heroBio,
  keywords: [
    "Josh Kigen",
    "Josh Kigs",
    "Codevanta Ventures",
    "Kenyan creative builder",
    "Software developer Kenya",
    "Product builder",
    "RentReceipt Pro",
    "FareFinder",
    "EduPath AI",
    "O&N FITS",
    "PesaTrend",
    "Josh Data Solution",
  ],
  authors: [{ name: siteConfig.name, url: "https://joshkigen.com" }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://joshkigen.com",
    title: siteConfig.title,
    description: siteConfig.heroBio,
    siteName: siteConfig.name,
    images: [
      {
        url: "/josh-kigen.jpg",
        width: 1200,
        height: 630,
        alt: "Josh Kigen — Developer, Entrepreneur & Creative Builder",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.heroBio,
    creator: "@joshkigen",
    images: ["/josh-kigen.jpg"],
  },
  icons: {
    icon: "/avatar.jpg",
    apple: "/avatar.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Josh Kigen",
    alternateName: "Josh Kigs",
    jobTitle: "Developer, Entrepreneur & Creative Builder",
    worksFor: {
      "@type": "Organization",
      name: "CODEVANTA VENTURES",
    },
    email: siteConfig.email,
    telephone: siteConfig.phone,
    url: "https://joshkigen.com",
    sameAs: [
      siteConfig.socials.github,
      siteConfig.socials.linkedin,
      siteConfig.socials.x,
      siteConfig.socials.instagram,
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Nairobi",
      addressCountry: "Kenya",
    },
    alumniOf: "Bachelor of Business Information Technology (BBIT), JKUAT",
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${plusJakarta.variable} ${playfair.variable} ${jetbrainsMono.variable} font-sans antialiased bg-[#F6F1E8] text-[#171717] selection:bg-[#12372A] selection:text-[#F6F1E8]`}
      >
        {children}
      </body>
    </html>
  );
}
