import { getContent } from "@/lib/content";
import { abs } from "@/lib/locale";

export const dynamic = "force-static";

// Plain-text summary for LLM crawlers (llmstxt.org format).
export function GET() {
  const ru = getContent("ru");
  const en = getContent("en");
  const lines = [
    "# RTP Agency",
    "",
    "> We automate business processes with AI: customer replies and lead handling, content, documents, video at scale, Telegram bots and CRM integrations. Free 30-minute teardown. Site languages: Russian (default), English.",
    "",
    "## Main pages",
    `- [Home (RU)](${abs("ru", "/")}): services, cases, integrations, FAQ, contact`,
    `- [Home (EN)](${abs("en", "/")}): same in English`,
    `- [Blog (RU)](${abs("ru", "/blog")})`,
    `- [Blog (EN)](${abs("en", "/blog")})`,
    "",
    "## Cases",
    ...en.cases.map((c) => `- [${c.title}](${abs("en", `/work/${c.slug}`)}): ${c.lead}`),
    "",
    "## Articles",
    ...en.posts.map((p) => `- [${p.title}](${abs("en", `/blog/${p.slug}`)}): ${p.description}`),
    "",
    "## Статьи (RU)",
    ...ru.posts.map((p) => `- [${p.title}](${abs("ru", `/blog/${p.slug}`)})`),
    "",
    "## Contact",
    "- Telegram: https://t.me/rtp_agency",
    "- Email: solutions@rtp-agency.com",
    "",
  ];
  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
