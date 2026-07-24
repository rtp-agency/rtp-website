"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { useReducedMotion } from "framer-motion";
import { WaveField } from "./WaveField";
import { MatrixText } from "./MatrixText";
import { CountUp } from "./CountUp";
import { ServicesCarousel } from "./ServicesCarousel";
import { stats, work } from "@/lib/site";
import { ui } from "@/lib/i18n";

const TG_URL = "https://t.me/rtp_agency";

// staggered per-element reveal inside a case: [start, end, dy]
const ROLE: Record<string, [number, number, number]> = {
  tag: [0.06, 0.32, 22],
  metric: [0.12, 0.46, 52],
  sub: [0.18, 0.5, 34],
  title: [0.2, 0.52, 40],
  desc: [0.3, 0.66, 42],
  tech: [0.44, 0.8, 40],
};

// One continuous pinned journey over the shared red wave:
// hero (visible) → services → the wave zooms in → cases grow out of it.
export function Journey() {
  const reduce = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  useEffect(() => setMounted(true), []);
  const live = mounted && !reduce;

  const N = work.length;
  // hold ≈ number of "screens": hero+services ~2.4, cases (intro + N) scaled
  const hold = 2.4 + (N + 1) * 0.72;
  const S = 2.4 / (1 + hold); // p-fraction where the cases phase begins

  useEffect(() => {
    if (!live) return;
    const root = rootRef.current;
    if (!root) return;
    const el = root;
    const heroEl = el.querySelector<HTMLElement>(".jr-hero");
    const svcEl = el.querySelector<HTMLElement>(".jr-services");
    const waveEl = el.querySelector<HTMLElement>(".jr-wave");
    const introEl = el.querySelector<HTMLElement>(".jr-intro");
    const glow = el.querySelector<HTMLElement>(".jr-glow");
    if (!heroEl || !svcEl || !waveEl || !introEl) return;
    const caseEls = Array.from(el.querySelectorAll<HTMLElement>(".jr-case"));
    const dots = Array.from(el.querySelectorAll<HTMLElement>(".cs-dot"));
    const roles = caseEls.map((c) =>
      Array.from(c.querySelectorAll<HTMLElement>("[data-role]"))
    );
    const clamp = (t: number) => (t < 0 ? 0 : t > 1 ? 1 : t);
    const smooth = (t: number) => {
      t = clamp(t);
      return t * t * (3 - 2 * t);
    };
    const SEG = 1 / (N + 1);

    let ticking = false;
    const update = () => {
      ticking = false;
      const total = el.offsetHeight - window.innerHeight;
      if (total <= 0) return;
      const p = clamp(-el.getBoundingClientRect().top / total);

      // ---- hero + services (p in [0, S]) ----
      const h = clamp(p / S);
      const heroOut = smooth((h - 0.36) / 0.2);
      heroEl.style.opacity = String(1 - heroOut);
      heroEl.style.transform = `translateY(${-60 * heroOut}px)`;
      heroEl.style.pointerEvents = heroOut > 0.5 ? "none" : "auto";
      const svcIn = smooth((h - 0.4) / 0.16);
      const svcOut = smooth((h - 0.82) / 0.14);
      const svcO = clamp(svcIn - svcOut);
      svcEl.style.opacity = String(svcO);
      svcEl.style.transform = `translateY(${40 * (1 - svcIn)}px)`;
      svcEl.style.pointerEvents = svcO > 0.5 ? "auto" : "none";

      // ---- cases (q in [0, 1]) ----
      const q = clamp((p - S) / (1 - S));
      const gate = smooth(clamp((p - (S - 0.02)) / 0.05));

      // shared wave: sits as background during hero/services, zooms during cases
      const zoomP = smooth(clamp(q / (SEG * 1.05)));
      const waveFade = smooth(clamp((q - SEG * 0.8) / (SEG * 0.95)));
      waveEl.style.transform = `scale(${1 + zoomP * 1.7})`;
      waveEl.style.opacity = String(1 - waveFade * 0.76);

      if (glow) glow.style.opacity = String(gate * 0.14);

      const introLp = clamp(q / SEG);
      const introOut = smooth((introLp - 0.38) / 0.4);
      introEl.style.opacity = String((1 - introOut) * gate);
      introEl.style.transform = `translateY(${-80 * introOut}px)`;

      let active = 0;
      caseEls.forEach((card, i) => {
        const lpRaw = (q - SEG * (i + 1)) / SEG;
        const lp = clamp(lpRaw);
        const fadeIn = smooth((lpRaw + 0.1) / 0.26);
        const fadeOut = 1 - smooth((lpRaw - 0.82) / 0.3);
        const cardO = clamp(Math.min(fadeIn, fadeOut)) * gate;
        card.style.opacity = String(cardO);
        card.style.pointerEvents = cardO > 0.6 ? "auto" : "none";
        if (lpRaw >= -0.05) active = i;
        roles[i].forEach((r) => {
          const cfg = ROLE[r.dataset.role || ""] || ROLE.desc;
          const t = smooth((lp - cfg[0]) / (cfg[1] - cfg[0]));
          r.style.opacity = String(t);
          r.style.transform = `translateY(${cfg[2] * (1 - t)}px)`;
        });
      });
      dots.forEach((d, i) => {
        if (i === active && q >= SEG - 0.0001 && gate > 0.5) d.classList.add("on");
        else d.classList.remove("on");
      });
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    update();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [live, S, N]);

  const heroContent = (
    <div className="container">
      <div className="hero-center">
        <h1 className="hero-brand">
          <MatrixText text="RTP" className="matrix-rtp" />
          <span className="hero-agency">Agency</span>
        </h1>
        <p className="hero-tagline">
          Преврати рутину в профит.
          <br />
          Воплоти свои идеи в реальность.
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
      </div>
    </div>
  );

  const servicesContent = (
    <>
      <div className="container">
        <div className="section-header">
          <div className="eyebrow">Что мы разрабатываем</div>
          <h2>Разработка под задачу.</h2>
          <p className="lead">
            Не «ИИ-консалтинг» вообще, а конкретные вещи, которые собираем под
            ключ. Листайте карточки.
          </p>
        </div>
      </div>
      <ServicesCarousel />
    </>
  );

  if (!live) {
    return (
      <>
        <section className="hero jr-fallback-hero">{heroContent}</section>
        <section id="services" className="section-line">
          {servicesContent}
        </section>
        <section id="work" className="section-line container-read">
          <div className="section-header">
            <div className="eyebrow">{ui.nav.work}</div>
            <h2>Что мы уже автоматизировали.</h2>
          </div>
          <div className="work-grid">
            {work.map((c) => (
              <a key={c.slug} href={`/work/${c.slug}`} className="case-study">
                <div className="case-number">{c.number}</div>
                <h3>{c.title}</h3>
                <div className="case-summary">{c.summary}</div>
                <div className="case-footer">
                  <div className="case-tech-mini">{c.tech}</div>
                  <span className="case-read-more">{ui.readCase} →</span>
                </div>
              </a>
            ))}
          </div>
        </section>
      </>
    );
  }

  return (
    <div
      ref={rootRef}
      className="journey jr-live"
      style={{ "--hold": hold } as CSSProperties}
    >
      <div className="jr-sticky">
        <div className="jr-wave" aria-hidden="true">
          <WaveField />
        </div>
        <div className="jr-glow" aria-hidden="true" />

        <div className="jr-layer jr-hero">{heroContent}</div>
        <div className="jr-layer jr-services" id="services">
          {servicesContent}
        </div>

        <div className="jr-layer jr-intro" id="work">
          <div className="jr-inner">
            <div className="eyebrow">{ui.nav.work}</div>
            <h2>Что мы уже автоматизировали.</h2>
            <p className="lead">Реальные проекты в продакшене — листайте вниз.</p>
          </div>
        </div>

        {work.map((c) => {
          const hero = c.highlights[0];
          return (
            <article className="jr-layer jr-case" key={c.slug}>
              <a href={`/work/${c.slug}`} className="jr-inner cs-link">
                <div className="cs-tag" data-role="tag">
                  {c.number}
                </div>
                {hero && (
                  <>
                    <div className="cs-metric" data-role="metric">
                      {hero.number}
                    </div>
                    <div className="cs-sub" data-role="sub">
                      {hero.label}
                    </div>
                  </>
                )}
                <h3 className="cs-title" data-role="title">
                  {c.title}
                </h3>
                <p className="cs-desc" data-role="desc">
                  {c.summary}
                </p>
                <div className="cs-foot" data-role="tech">
                  <span className="cs-tech">{c.tech}</span>
                  <span className="cs-more">{ui.readCase} →</span>
                </div>
              </a>
            </article>
          );
        })}

        <div className="cs-dots jr-dots" aria-hidden="true">
          {work.map((c) => (
            <span className="cs-dot" key={c.slug} />
          ))}
        </div>
      </div>
    </div>
  );
}
