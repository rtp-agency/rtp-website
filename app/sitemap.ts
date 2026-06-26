import type { MetadataRoute } from "next";
import { caseSlugs } from "@/lib/cases";
import { languages } from "@/lib/i18n";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://rtp-agency.com";
  const lastModified = new Date();

  const langAlternates = (path: string) => ({
    languages: Object.fromEntries(
      languages.map((l) => [l, `${base}/${l}${path}`])
    ),
  });

  const home = languages.map((lang) => ({
    url: `${base}/${lang}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 1,
    alternates: langAlternates(""),
  }));

  const work = languages.flatMap((lang) =>
    caseSlugs.map((slug) => ({
      url: `${base}/${lang}/work/${slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
      alternates: langAlternates(`/work/${slug}`),
    }))
  );

  return [...home, ...work];
}
