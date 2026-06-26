import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Inter, JetBrains_Mono } from "next/font/google";
import "../globals.css";
import { Footer } from "@/components/Footer";
import { StickyContact } from "@/components/StickyContact";
import {
  languages,
  isLang,
  htmlLang,
  ogLocale,
  meta as metaDict,
  jsonLdByLang,
  type Lang,
} from "@/lib/i18n";

// Conservative, Replit-style: one clean grotesque (Inter) for headings + body,
// JetBrains Mono for labels/numbers. No display serif.
const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
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

export function generateStaticParams() {
  return languages.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isLang(lang)) return {};
  const m = metaDict[lang];
  return {
    metadataBase: new URL("https://rtp-agency.com"),
    title: m.title,
    description: m.description,
    keywords: [...m.keywords],
    authors: [{ name: "RTP Agency" }],
    creator: "RTP Agency",
    alternates: {
      canonical: `/${lang}`,
      languages: { uk: "/uk", en: "/en", "x-default": "/uk" },
    },
    openGraph: {
      title: m.ogTitle,
      description: m.ogDescription,
      type: "website",
      url: `https://rtp-agency.com/${lang}`,
      siteName: "RTP Agency",
      locale: ogLocale[lang],
    },
    twitter: {
      card: "summary_large_image",
      title: m.ogTitle,
      description: m.twitterDescription,
    },
    robots: { index: true, follow: true },
  };
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  const typedLang: Lang = lang;

  return (
    <html
      lang={htmlLang[typedLang]}
      className={`${inter.variable} ${jetbrains.variable}`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdByLang[typedLang]),
          }}
        />
        <div className="grain" aria-hidden="true" />
        {children}
        <StickyContact lang={typedLang} />
        <Footer />
      </body>
    </html>
  );
}
