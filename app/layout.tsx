import type { Metadata } from "next";
import { Manrope, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import "./redesign.css";
import { Footer } from "@/components/Footer";
import { meta, jsonLd } from "@/lib/i18n";

const sans = Manrope({
  subsets: ["latin", "cyrillic"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700", "800"],
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
  title: meta.title,
  description: meta.description,
  keywords: [...meta.keywords],
  authors: [{ name: "RTP Agency" }],
  creator: "RTP Agency",
  alternates: { canonical: "/" },
  openGraph: {
    title: meta.ogTitle,
    description: meta.ogDescription,
    type: "website",
    url: "https://rtp-agency.com",
    siteName: "RTP Agency",
    locale: "ru_RU",
  },
  twitter: {
    card: "summary_large_image",
    title: meta.ogTitle,
    description: meta.twitterDescription,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className={`${sans.variable} ${jetbrains.variable}`}>
      <body>
        <a href="#main" className="skip-link">
          К содержимому
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <div className="site">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
