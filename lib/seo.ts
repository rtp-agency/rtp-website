import type { Metadata } from "next";
import { getContent } from "./content";
import { SITE_URL, alternatesFor, ogLocale, type Locale } from "./locale";

const verification = {
  google: process.env.GOOGLE_SITE_VERIFICATION,
  yandex: process.env.YANDEX_VERIFICATION,
};

export function siteMetadata(locale: Locale): Metadata {
  const { meta } = getContent(locale);
  return {
    metadataBase: new URL(SITE_URL),
    title: { default: meta.title, template: `%s` },
    description: meta.description,
    keywords: [...meta.keywords],
    applicationName: "RTP Agency",
    authors: [{ name: "RTP Agency", url: SITE_URL }],
    creator: "RTP Agency",
    publisher: "RTP Agency",
    category: "technology",
    formatDetection: { email: false, address: false, telephone: false },
    verification,
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
    },
    openGraph: {
      siteName: "RTP Agency",
      locale: ogLocale[locale],
      alternateLocale: ogLocale[locale === "ru" ? "en" : "ru"],
      type: "website",
    },
    twitter: { card: "summary_large_image" },
  };
}

export function homeMetadata(locale: Locale): Metadata {
  const { meta } = getContent(locale);
  return {
    title: { absolute: meta.title },
    description: meta.description,
    alternates: alternatesFor(locale, "/"),
    openGraph: {
      title: meta.ogTitle,
      description: meta.ogDescription,
      type: "website",
      url: locale === "ru" ? SITE_URL : `${SITE_URL}/en`,
    },
    twitter: {
      card: "summary_large_image",
      title: meta.ogTitle,
      description: meta.twitterDescription,
    },
  };
}

export function caseMetadata(locale: Locale, slug: string): Metadata {
  const C = getContent(locale);
  const c = C.getCase(slug);
  if (!c) return {};
  const path = `/work/${c.slug}`;
  const a = alternatesFor(locale, path);
  return {
    title: { absolute: `${c.title} ${C.ui.casePage.titleSuffix}` },
    description: c.lead,
    keywords: [...C.ui.casePage.keywords],
    alternates: a,
    openGraph: {
      title: c.title,
      description: c.lead,
      type: "article",
      url: `${SITE_URL}${a.canonical}`,
    },
  };
}

export function partnerMetadata(locale: Locale, slug: string): Metadata {
  const C = getContent(locale);
  const p = C.getPartner(slug);
  if (!p) return {};
  const a = alternatesFor(locale, `/partners/${p.slug}`);
  return {
    title: { absolute: `${p.name} — ${C.t.partner.titleSuffix}` },
    description: p.intro,
    keywords: p.category,
    alternates: a,
    openGraph: {
      title: `${p.name} — ${p.tagline}`,
      description: p.intro,
      type: "website",
      url: `${SITE_URL}${a.canonical}`,
      images: [{ url: p.logoWhite }],
    },
  };
}

export function blogIndexMetadata(locale: Locale): Metadata {
  const b = getContent(locale).t.blog;
  const a = alternatesFor(locale, "/blog");
  return {
    title: { absolute: b.metaTitle },
    description: b.metaDescription,
    alternates: {
      ...a,
      types: { "application/rss+xml": `${SITE_URL}${locale === "ru" ? "" : "/en"}/blog/rss.xml` },
    },
    openGraph: {
      title: b.metaTitle,
      description: b.metaDescription,
      type: "website",
      url: `${SITE_URL}${a.canonical}`,
    },
  };
}

export function postMetadata(locale: Locale, slug: string): Metadata {
  const C = getContent(locale);
  const p = C.getPost(slug);
  if (!p) return {};
  const a = alternatesFor(locale, `/blog/${p.slug}`);
  return {
    title: { absolute: `${p.title} — RTP Agency` },
    description: p.description,
    keywords: p.keywords,
    authors: [{ name: C.t.blog.by, url: SITE_URL }],
    alternates: a,
    openGraph: {
      title: p.title,
      description: p.description,
      type: "article",
      url: `${SITE_URL}${a.canonical}`,
      publishedTime: p.published,
      modifiedTime: p.updated,
      section: p.tag,
      tags: p.keywords,
    },
    twitter: { card: "summary_large_image", title: p.title, description: p.description },
  };
}
