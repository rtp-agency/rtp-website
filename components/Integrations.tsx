"use client";

import { useState } from "react";
import { integrations, integrationCats, type IntegrationCat } from "@/lib/integrations";

const FEATURED = [
  "telegram", "threads", "instagram", "whatsapp", "hubspot", "slack", "notion", "stripe",
  "googlesheets", "gmail", "openai", "claude", "googlegemini", "elevenlabs", "perplexity", "ffmpeg",
  "python", "fastapi", "postgresql", "redis", "docker", "github", "cloudflare", "grafana",
];

export function Integrations() {
  const [cat, setCat] = useState<IntegrationCat | "all">("all");
  const list =
    cat === "all"
      ? FEATURED.map((f) => integrations.find((i) => i.slug === f)).filter(
          (i): i is (typeof integrations)[number] => !!i
        )
      : integrations.filter((i) => i.cat === cat);

  return (
    <div className="ig">
      <div className="ig-tabs" role="tablist" aria-label="Категории интеграций">
        {[{ id: "all" as const, label: "Все" }, ...integrationCats].map((c) => (
          <button
            key={c.id}
            type="button"
            role="tab"
            aria-selected={cat === c.id}
            className={cat === c.id ? "is-on" : ""}
            onClick={() => setCat(c.id)}
          >
            {c.label}
          </button>
        ))}
      </div>

      <ul className="ig-grid" key={cat}>
        {list.map((it, i) => (
          <li key={it.slug} style={{ ["--i" as string]: i }}>
            <span className="ig-chip">
              <img src={`/logos/${it.slug}.svg`} alt="" width={22} height={22} loading="lazy" />
            </span>
            <span className="ig-name">{it.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
