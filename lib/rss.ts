import { getContent } from "./content";
import { SITE_URL, abs, lp, type Locale } from "./locale";

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

export function rssFeed(locale: Locale) {
  const C = getContent(locale);
  const items = C.posts
    .map(
      (p) => `    <item>
      <title>${esc(p.title)}</title>
      <link>${abs(locale, `/blog/${p.slug}`)}</link>
      <guid isPermaLink="true">${abs(locale, `/blog/${p.slug}`)}</guid>
      <pubDate>${new Date(p.published).toUTCString()}</pubDate>
      <category>${esc(p.tag)}</category>
      <description>${esc(p.description)}</description>
    </item>`
    )
    .join("\n");
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${esc(C.t.blog.metaTitle)}</title>
    <link>${abs(locale, "/blog")}</link>
    <description>${esc(C.t.blog.metaDescription)}</description>
    <language>${locale}</language>
    <atom:link href="${SITE_URL}${lp(locale, "/blog")}/rss.xml" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>
`;
  return new Response(xml, {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
  });
}
