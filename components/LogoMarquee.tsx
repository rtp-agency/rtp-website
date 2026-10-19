import { integrations } from "@/lib/integrations";

const PICK = [
  "telegram", "openai", "claude", "googlegemini", "hubspot", "slack", "stripe",
  "notion", "python", "fastapi", "postgresql", "docker", "redis", "github",
  "threads", "elevenlabs", "googlesheets", "cloudflare", "grafana", "xero",
];

export function LogoMarquee() {
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
    <div className="lm" role="group" aria-label="Технологии и сервисы, с которыми мы работаем">
      <p className="lm-title">С чем мы работаем</p>
      <div className="lm-track">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
