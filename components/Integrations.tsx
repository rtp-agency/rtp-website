"use client";

import { useState } from "react";

type Item = { slug: string; name: string; cat: string };
type Cat = { id: string; label: string };

const FEATURED = [
  "telegram", "threads", "instagram", "whatsapp", "hubspot", "slack", "notion", "stripe",
  "googlesheets", "gmail", "openai", "claude", "googlegemini", "elevenlabs", "perplexity", "ffmpeg",
  "python", "fastapi", "postgresql", "redis", "docker", "github", "cloudflare", "grafana",
];

export function Integrations({
  items,
  cats,
  allLabel,
  tabsLabel,
}: {
  items: Item[];
  cats: Cat[];
  allLabel: string;
  tabsLabel: string;
}) {
  const [cat, setCat] = useState<string>("all");
  const list =
    cat === "all"
      ? FEATURED.map((f) => items.find((i) => i.slug === f)).filter((i): i is Item => !!i)
      : items.filter((i) => i.cat === cat);

  return (
    <div className="ig">
      <div className="ig-tabs" role="tablist" aria-label={tabsLabel}>
        {[{ id: "all", label: allLabel }, ...cats].map((c) => (
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
