"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";
import { useReducedMotion } from "framer-motion";
import { WaveField } from "./WaveField";
import { MatrixText } from "./MatrixText";
import { CountUp } from "./CountUp";
import { ServicesCarousel } from "./ServicesCarousel";
import { stats, work, additional, testimonials, home } from "@/lib/site";
import { ui } from "@/lib/i18n";

const TG_URL = "https://t.me/rtp_agency";

// staggered per-element reveal inside a case slide: [start, end, dy]
const ROLE: Record<string, [number, number, number]> = {
  tag: [0.06, 0.32, 22],
  metric: [0.12, 0.46, 52],
  sub: [0.18, 0.5, 34],
  title: [0.2, 0.52, 40],
  desc: [0.3, 0.66, 42],
  tech: [0.44, 0.8, 40],
};

type Slide = { key: string; node: ReactNode };

// One continuous pinned journey over the shared red wave. Everything lives in a
// single sticky stage and is driven by one scroll progress, so it reads as one
// pin rather than separate blocks:
//   hero → services → wave zoom → cases (cross-fade) →
//   other work (vertical card scrub) → reviews (horizontal card scrub).
export function Journey() {
  const reduce = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  const [narrow, setNarrow] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  useEffect(() => setMounted(true), []);
  useEffect(() => {
    const m = () => setNarrow(window.innerWidth < 620);
    m();
    window.addEventListener("resize", m);
    return () => window.removeEventListener("resize", m);
  }, []);
  const live = mounted && !reduce;

  // cases as cross-fade slides: intro + one per case
  const caseSlides: Slide[] = [
    {
      key: "cases-intro",
      node: (
        <div className="jr-inner jr-chapter">
          <div className="eyebrow" data-role="tag">
            {ui.nav.work}
          </div>
          <h2 data-role="title">Что мы уже автоматизировали.</h2>
          <p className="lead" data-role="desc">
            Реальные проекты в продакшене — листайте вниз.
          </p>
        </div>
      ),
    },
    ...work.map((c) => {
      const hero = c.highlights[0];
      return {
        key: c.slug,
        node: (
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
        ),
      } as Slide;
    }),
  ];

  // phase weights in "screens" — shorter on phones (less finger-scrolling)
  const W = narrow
    ? { hero: 2.0, cases: caseSlides.length * 0.5, proj: 2.6, rev: 2.4 }
    : { hero: 2.4, cases: caseSlides.length * 0.62, proj: 3.4, rev: 3.0 };
  const hold = W.hero + W.cases + W.proj + W.rev;
  const b1 = W.hero / hold; // hero/services → cases
  const b2 = (W.hero + W.cases) / hold; // cases → projects
  const b3 = (W.hero + W.cases + W.proj) / hold; // projects → reviews
  const SEG = 1 / caseSlides.length;
  const fracFor = (p: number) => (p * hold) / (1 + hold);
  const servicesFrac = fracFor(0.62 * b1);
  const workFrac = fracFor(b1 + 1.5 * SEG * (b2 - b1));
  const reviewsFrac = fracFor(b3 + 0.2 * (1 - b3));

  useEffect(() => {
    if (!live) return;
    const root = rootRef.current;
    if (!root) return;
    const el = root;
    const heroEl = el.querySelector<HTMLElement>(".jr-hero");
    const svcEl = el.querySelector<HTMLElement>(".jr-services");
    const waveEl = el.querySelector<HTMLElement>(".jr-wave");
    const glow = el.querySelector<HTMLElement>(".jr-glow");
    const casesEl = el.querySelector<HTMLElement>(".jr-cases");
    const projEl = el.querySelector<HTMLElement>(".jr-projects");
    const revEl = el.querySelector<HTMLElement>(".jr-reviews");
    if (!heroEl || !svcEl || !waveEl) return;
    const slideEls = Array.from(el.querySelectorAll<HTMLElement>(".jr-slide"));
    const roles = slideEls.map((c) =>
      Array.from(c.querySelectorAll<HTMLElement>("[data-role]"))
    );
    const vcol = el.querySelector<HTMLElement>(".jr-vcol");
    const vvp = el.querySelector<HTMLElement>(".jr-vviewport");
    const vcards = vcol
      ? Array.from(vcol.querySelectorAll<HTMLElement>(".vsc-card"))
      : [];
    const hrow = el.querySelector<HTMLElement>(".jr-hrow");
    const hvp = el.querySelector<HTMLElement>(".jr-hviewport");
    const hcards = hrow
      ? Array.from(hrow.querySelectorAll<HTMLElement>(".hsc-card"))
      : [];

    const clamp = (t: number) => (t < 0 ? 0 : t > 1 ? 1 : t);
    const smooth = (t: number) => {
      t = clamp(t);
      return t * t * (3 - 2 * t);
    };

    let ticking = false;
    const update = () => {
      ticking = false;
      const total = el.offsetHeight - window.innerHeight;
      if (total <= 0) return;
      const p = clamp(-el.getBoundingClientRect().top / total);

      // content scrub finishes here (as a fraction of a phase window); the last
      // item then holds so it can be read before the group hands off
      const CONTENT_END = 0.8;
      // Group opacity + translateY around the phase boundaries. Adjacent groups
      // cross near half opacity (no black gap) but are pushed apart vertically
      // (outgoing slides up, incoming rises from below) so they never read as
      // two stacked blocks.
      const FADE = 0.055;
      const OFF = 44;
      const upC = (c: number) => smooth((p - c) / FADE + 0.5);
      const mk = (inC: number, outC: number, hasOut: boolean) => {
        const fi = upC(inC);
        const fo = hasOut ? upC(outC) : 0;
        return { g: clamp(fi - fo), off: (1 - fi) * OFF - fo * OFF };
      };

      // ---- hero + services (p in [0, b1]) ----
      const h = clamp(p / b1);
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

      // ---- cases cross-fade (p in [b1, b2]) ----
      const qc = clamp((p - b1) / (b2 - b1));
      const gateC = mk(b1, b2, true);
      if (casesEl) {
        casesEl.style.opacity = String(gateC.g);
        casesEl.style.transform = `translateY(${gateC.off}px)`;
      }
      const zoomP = smooth(clamp(qc / (SEG * 0.85)));
      const waveFade = smooth(clamp((qc - SEG * 0.7) / (SEG * 0.8)));
      waveEl.style.transform = `scale(${1 + zoomP * 1.7})`;
      waveEl.style.opacity = String(1 - waveFade * 0.76);
      if (glow) glow.style.opacity = String(gateC.g * 0.14);
      // slides scrub over the first CONTENT_END of the window; the last case
      // then holds full so it can be read before the projects take over.
      const sc = clamp(qc / CONTENT_END);
      const lastSlide = slideEls.length - 1;
      slideEls.forEach((card, i) => {
        const lpRaw = sc / SEG - i;
        const lp = clamp(lpRaw);
        const fadeIn = smooth((lpRaw + 0.1) / 0.26);
        const fadeOut = i === lastSlide ? 1 : 1 - smooth((lpRaw - 0.82) / 0.3);
        const cardO = clamp(Math.min(fadeIn, fadeOut));
        card.style.opacity = String(cardO);
        card.style.pointerEvents = cardO > 0.6 && gateC.g > 0.6 ? "auto" : "none";
        roles[i].forEach((r) => {
          const cfg = ROLE[r.dataset.role || ""] || ROLE.desc;
          const t = smooth((lp - cfg[0]) / (cfg[1] - cfg[0]));
          r.style.opacity = String(t);
          r.style.transform = `translateY(${cfg[2] * (1 - t)}px)`;
        });
      });

      // ---- other work: vertical card scrub (p in [b2, b3]) ----
      const qp = clamp((p - b2) / (b3 - b2));
      const gateP = mk(b2, b3, true);
      if (projEl) {
        projEl.style.opacity = String(gateP.g);
        projEl.style.transform = `translateY(${gateP.off}px)`;
        projEl.style.pointerEvents = gateP.g > 0.6 ? "auto" : "none";
      }
      if (gateP.g > 0.001 && vcol && vvp && vcards.length) {
        const scp = clamp(qp / CONTENT_END); // last card centred by CONTENT_END, then holds
        const vpH = vvp.clientHeight;
        const first = vcards[0];
        const last = vcards[vcards.length - 1];
        const y0 = vpH / 2 - (first.offsetTop + first.offsetHeight / 2);
        const y1 = vpH / 2 - (last.offsetTop + last.offsetHeight / 2);
        vcol.style.transform = `translateY(${y0 + scp * (y1 - y0)}px)`;
        const cRect = vvp.getBoundingClientRect();
        const center = cRect.top + cRect.height / 2;
        vcards.forEach((card) => {
          const r = card.getBoundingClientRect();
          const d = Math.abs(r.top + r.height / 2 - center) / (cRect.height / 2);
          const k = clamp(1 - d);
          card.style.opacity = String(0.3 + 0.7 * k);
          card.style.transform = `scale(${0.95 + 0.05 * k})`;
          card.classList.toggle("is-focus", k > 0.72);
        });
      }

      // ---- reviews: horizontal card scrub (p in [b3, 1]) ----
      const qr = clamp((p - b3) / (1 - b3));
      const gateR = mk(b3, 1, false); // last phase — no fade-out
      if (revEl) {
        revEl.style.opacity = String(gateR.g);
        revEl.style.transform = `translateY(${gateR.off}px)`;
        revEl.style.pointerEvents = gateR.g > 0.6 ? "auto" : "none";
      }
      if (gateR.g > 0.001 && hrow && hvp && hcards.length) {
        const scr = clamp(qr / CONTENT_END);
        const vpW = hvp.clientWidth;
        const first = hcards[0];
        const last = hcards[hcards.length - 1];
        const x0 = vpW / 2 - (first.offsetLeft + first.offsetWidth / 2);
        const x1 = vpW / 2 - (last.offsetLeft + last.offsetWidth / 2);
        hrow.style.transform = `translateX(${x0 + scr * (x1 - x0)}px)`;
        const cRect = hvp.getBoundingClientRect();
        const center = cRect.left + cRect.width / 2;
        hcards.forEach((card) => {
          const r = card.getBoundingClientRect();
          const d = Math.abs(r.left + r.width / 2 - center) / (cRect.width / 2);
          const k = clamp(1 - d);
          card.style.opacity = String(0.38 + 0.62 * k);
          card.style.transform = `scale(${0.955 + 0.045 * k})`;
          card.classList.toggle("is-focus", k > 0.72);
        });
      }
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
  }, [live, b1, b2, b3, SEG]);

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
        <section className="section-line container-read">
          <div className="section-header">
            <div className="eyebrow">{home.additionalEyebrow}</div>
            <h2>{home.additionalHeading}</h2>
          </div>
          <div className="additional-grid reading-col">
            {additional.map((a) => (
              <div className="additional-item" key={a.title}>
                <h4>{a.title}</h4>
                <p>{a.body}</p>
              </div>
            ))}
          </div>
        </section>
        <section id="testimonials" className="section-line container-read">
          <div className="section-header">
            <div className="eyebrow">{home.testimonialsEyebrow}</div>
            <h2>{home.testimonialsHeading}</h2>
          </div>
          <div className="testimonials-grid reading-col">
            {testimonials.map((tm) => (
              <div className="testimonial" key={tm.name}>
                <p className="testimonial-quote">{tm.quote}</p>
                <div className="testimonial-author">
                  <div className="testimonial-avatar">{tm.avatar}</div>
                  <div className="testimonial-author-info">
                    <span className="testimonial-author-name">{tm.name}</span>
                    <span className="testimonial-author-title">{tm.title}</span>
                  </div>
                </div>
              </div>
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
      {/* in-flow anchor markers so the nav can jump into the pinned journey */}
      <span
        id="services"
        className="jr-anchor"
        style={{ top: `${servicesFrac * 100}%` }}
        aria-hidden="true"
      />
      <span
        id="work"
        className="jr-anchor"
        style={{ top: `${workFrac * 100}%` }}
        aria-hidden="true"
      />
      <span
        id="testimonials"
        className="jr-anchor"
        style={{ top: `${reviewsFrac * 100}%` }}
        aria-hidden="true"
      />
      <div className="jr-sticky">
        <div className="jr-wave" aria-hidden="true">
          <WaveField />
        </div>
        <div className="jr-glow" aria-hidden="true" />

        <div className="jr-layer jr-hero">{heroContent}</div>
        <div className="jr-layer jr-services">{servicesContent}</div>

        <div className="jr-cases">
          {caseSlides.map((s) => (
            <div className="jr-layer jr-slide" key={s.key}>
              {s.node}
            </div>
          ))}
        </div>

        {/* other work — vertical card scrub, inside the same pin */}
        <div className="jr-layer jr-projects jr-scrub">
          <div className="jr-scrub-inner">
            <div className="section-header jr-scrub-head">
              <div className="eyebrow">{home.additionalEyebrow}</div>
              <h2>{home.additionalHeading}</h2>
            </div>
            <div className="vsc-viewport jr-vviewport">
              <div className="vsc-col jr-vcol">
                {additional.map((a, i) => (
                  <article className="vsc-card" key={a.title}>
                    <span className="vsc-cardglow" aria-hidden="true" />
                    <div className="vsc-num">
                      Проект {String(i + 1).padStart(2, "0")}
                    </div>
                    <h4>{a.title}</h4>
                    <p>{a.body}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* reviews — horizontal card scrub, inside the same pin */}
        <div className="jr-layer jr-reviews jr-scrub">
          <div className="jr-scrub-inner">
            <div className="section-header jr-scrub-head">
              <div className="eyebrow">{home.testimonialsEyebrow}</div>
              <h2>{home.testimonialsHeading}</h2>
            </div>
            <div className="hsc-viewport jr-hviewport">
              <div className="hsc-row jr-hrow">
                {testimonials.map((tm) => (
                  <figure className="hsc-card" key={tm.name}>
                    <span className="vsc-cardglow" aria-hidden="true" />
                    <p className="hsc-quote">«{tm.quote}»</p>
                    <div className="testimonial-author">
                      <div className="testimonial-avatar">{tm.avatar}</div>
                      <div className="testimonial-author-info">
                        <span className="testimonial-author-name">
                          {tm.link ? (
                            <a
                              href={tm.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="testimonial-author-link"
                            >
                              {tm.name}
                            </a>
                          ) : (
                            tm.name
                          )}
                        </span>
                        <span className="testimonial-author-title">
                          {tm.title}
                        </span>
                      </div>
                    </div>
                  </figure>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
