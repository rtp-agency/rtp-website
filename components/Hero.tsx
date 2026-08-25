"use client";

import Link from "next/link";
import { MatrixText } from "./MatrixText";
import { CountUp } from "./CountUp";
import { stats } from "@/lib/site";
import { partners } from "@/lib/partners";

const TG_URL = "https://t.me/rtp_agency";

// Static hero block: the red dot-wave behind the RTP brand, tagline, CTA and
// proof stats. A normal section — no pinning.
export function Hero() {
  return (
    <section className="hero hero-home">
      <div className="container">
        <div className="hero-center">
          <h1 className="hero-brand">
            <MatrixText text="RTP" className="matrix-rtp" />
            <span className="hero-agency">Agency</span>
          </h1>
          <p className="hero-tagline">
            Эффективная автоматизация процессов в вашей команде.
            <br />
            Превратите рутину в профит.
          </p>
          <a
            href={TG_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary hero-cta"
          >
            Бесплатная консультация <span className="arrow">→</span>
          </a>
          <div className="hero-stats">
            {stats.map((s) => (
              <div className="hero-stat" key={s.label}>
                <div className="hero-stat-num">
                  <CountUp value={s.value} prefix={s.prefix} suffix={s.suffix} />
                </div>
                <div className="hero-stat-label">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="hero-partners" id="partners">
            <span className="hero-partners-label">Партнёры</span>
            <div className="hero-partners-logos">
              {partners.map((p) => (
                <Link
                  key={p.slug}
                  href={`/partners/${p.slug}`}
                  className="hero-partner"
                  aria-label={p.name}
                >
                  <img src={p.logoWhite} alt={p.name} loading="lazy" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
