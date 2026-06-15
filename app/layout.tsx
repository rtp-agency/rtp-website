import type { Metadata } from "next";
import { Inter, Playfair_Display, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  weight: ["400", "500", "600"],
  display: "swap",
});

// Fraunces has no Cyrillic — Playfair Display is the closest high-contrast
// display serif that covers Cyrillic. Keep the same CSS variable name.
const fraunces = Playfair_Display({
  subsets: ["latin", "cyrillic"],
  variable: "--font-fraunces",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin", "cyrillic"],
  variable: "--font-jb",
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rtp-agency.com"),
  title: "RTP Agency — ИИ-консалтинг и оптимизация расходов",
  description:
    "ИИ-консалтинг, оптимизация расходов и внедрение. Сокращаем расходы на ИИ на 80–99% и делаем его надёжным в сложных production-задачах.",
  keywords: [
    "ИИ-консалтинг",
    "оптимизация расходов на ИИ",
    "снижение расходов на ИИ",
    "внедрение ИИ",
    "ИИ-консультант",
    "оптимизация затрат на LLM",
    "сократить расходы на ИИ",
    "мультиагентные ИИ-системы",
    "production ИИ",
    "надёжность ИИ",
    "оптимизация ИИ-инфраструктуры",
    "RTP Agency",
  ],
  authors: [{ name: "RTP Agency" }],
  creator: "RTP Agency",
  alternates: { canonical: "/" },
  openGraph: {
    title: "RTP Agency — ИИ-консалтинг и оптимизация расходов",
    description:
      "Сокращаем расходы на ИИ на 80–99% и делаем его надёжным в продакшене. ИИ-консалтинг и оптимизация расходов.",
    type: "website",
    url: "https://rtp-agency.com",
    siteName: "RTP Agency",
    locale: "ru_RU",
  },
  twitter: {
    card: "summary_large_image",
    title: "RTP Agency — ИИ-консалтинг и оптимизация расходов",
    description:
      "Сокращаем расходы на ИИ на 80–99% и делаем его надёжным в продакшене.",
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://rtp-agency.com/#service",
  name: "RTP Agency — ИИ-консалтинг и оптимизация расходов",
  url: "https://rtp-agency.com",
  description:
    "ИИ-консалтинг с фокусом на оптимизацию расходов на ИИ и надёжное внедрение для компаний, использующих ИИ в масштабе.",
  image: "https://rtp-agency.com/opengraph-image",
  priceRange: "$$",
  areaServed: "Worldwide",
  sameAs: ["https://github.com/rtp-agency"],
  knowsAbout: [
    "ИИ-консалтинг",
    "оптимизация расходов на ИИ",
    "снижение расходов на ИИ",
    "внедрение ИИ",
    "мультиагентные ИИ-системы",
    "оркестрация LLM",
    "надёжность ИИ в продакшене",
  ],
  serviceType: [
    "ИИ-консалтинг",
    "Оптимизация расходов на ИИ",
    "Внедрение ИИ",
    "Надёжность ИИ-систем",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "ИИ-услуги",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Оптимизация расходов на ИИ",
          description:
            "Снижаем расходы на ИИ на 80–99%, заменяя переоценённые части стека на более дешёвые аналоги того же качества.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Надёжность ИИ-систем",
          description:
            "Делаем ИИ надёжным в сложных многошаговых production-задачах через мультиагентную архитектуру и слои верификации.",
        },
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ru"
      className={`${inter.variable} ${fraunces.variable} ${jetbrains.variable}`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <div className="grain" aria-hidden="true" />
        {children}
        <Footer />
      </body>
    </html>
  );
}
