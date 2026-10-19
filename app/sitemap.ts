import type { MetadataRoute } from "next";
import { getContent } from "@/lib/content";
import { abs, locales, type Locale } from "@/lib/locale";

const UPDATED = new Date("2026-10-19");

type Entry = MetadataRoute.Sitemap[number];

// Every URL exists in both languages, so each entry carries hreflang alternates.
function both(
  path: string,
  priority: number,
  changeFrequency: Entry["changeFrequency"],
  lastModified: Date = UPDATED
): Entry[] {
  const languages = {
    ru: abs("ru", path),
    en: abs("en", path),
    "x-default": abs("ru", path),
  };
  return locales.map((l: Locale) => ({
    url: abs(l, path),
    lastModified,
    changeFrequency,
    priority,
    alternates: { languages },
  }));
}

export default function sitemap(): MetadataRoute.Sitemap {
  const C = getContent("ru");
  return [
    ...both("/", 1, "weekly"),
    ...both("/blog", 0.9, "weekly"),
    ...C.postSlugs.flatMap((slug) => {
      const p = C.getPost(slug)!;
      return both(`/blog/${slug}`, 0.8, "monthly", new Date(p.updated));
    }),
    ...C.caseSlugs.flatMap((slug) => both(`/work/${slug}`, 0.8, "monthly")),
    ...C.partnerSlugs.flatMap((slug) => both(`/partners/${slug}`, 0.6, "monthly")),
  ];
}
