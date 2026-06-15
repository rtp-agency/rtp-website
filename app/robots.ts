import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://rtp-agency.com/sitemap.xml",
    host: "https://rtp-agency.com",
  };
}
