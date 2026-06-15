import type { MetadataRoute } from "next";
import { cases } from "@/lib/cases";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://rtp-agency.com";
  const lastModified = new Date();

  return [
    { url: base, lastModified, changeFrequency: "monthly", priority: 1 },
    ...cases.map((c) => ({
      url: `${base}/work/${c.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
