import { integrations } from "@/lib/integrations";
import { strings } from "@/lib/ui";
import type { Locale } from "@/lib/locale";

const PICK = [
  "telegram", "openai", "claude", "googlegemini", "hubspot", "slack", "stripe",
  "notion", "python", "fastapi", "postgresql", "docker", "redis", "github",
  "threads", "elevenlabs", "googlesheets", "cloudflare", "grafana", "xero",
];

export function LogoMarquee({ locale }: { locale: Locale }) {
  const t = strings[locale].marquee;
  const items = PICK.map((s) => integrations.find((i) => i.slug === s)).filter(
    (i): i is (typeof integrations)[number] => !!i
  );
  const row = (hidden: boolean) => (
    <ul className="lm-row" aria-hidden={hidden || undefined}>
      {items.map((it) => (
        <li key={it.slug}>
          <img src={`/logos/${it.slug}.svg`} alt="" width={22} height={22} loading="lazy" />
          {it.name}
        </li>
      ))}
    </ul>
  );
  return (
    <div className="lm" role="group" aria-label={t.label}>
      <p className="lm-title">{t.title}</p>
      <div className="lm-track">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
