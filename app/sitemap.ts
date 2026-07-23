import type { MetadataRoute } from "next";
import { caseSlugs } from "@/lib/cases";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://rtp-agency.com";
  const lastModified = new Date();

  return [
    {
      url: base,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 1,
    },
    ...caseSlugs.map((slug) => ({
      url: `${base}/work/${slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
