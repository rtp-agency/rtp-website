"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { useReducedMotion } from "framer-motion";
import { WaveField } from "./WaveField";
import { MatrixText } from "./MatrixText";
import { CountUp } from "./CountUp";
import { ServicesCarousel } from "./ServicesCarousel";
import { stats } from "@/lib/site";

const TG_URL = "https://t.me/rtp_agency";

// Pinned "main" stage over the red wave: the hero is visible on landing, then
// as you scroll it lifts away and the services fade in on the same background.
export function MainStage() {
  const reduce = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  useEffect(() => setMounted(true), []);
  const live = mounted && !reduce;

  useEffect(() => {
    if (!live) return;
    const root = rootRef.current;
    if (!root) return;
    const el = root;
    const heroEl = el.querySelector<HTMLElement>(".ms-hero");
    const svcEl = el.querySelector<HTMLElement>(".ms-services");
    if (!heroEl || !svcEl) return;
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

      const heroOut = smooth((p - 0.24) / 0.2);
      heroEl.style.opacity = String(1 - heroOut);
      heroEl.style.transform = `translateY(${-60 * heroOut}px)`;
      heroEl.style.pointerEvents = heroOut > 0.5 ? "none" : "auto";

      const svcIn = smooth((p - 0.44) / 0.18);
      svcEl.style.opacity = String(svcIn);
      svcEl.style.transform = `translateY(${40 * (1 - svcIn)}px)`;
      svcEl.style.pointerEvents = svcIn > 0.5 ? "auto" : "none";
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
  }, [live]);

  return (
    <div
      ref={rootRef}
      className={`main-stage${live ? " ms-live" : ""}`}
      style={{ "--hold": 1.7 } as CSSProperties}
    >
      <div className="ms-sticky">
        <WaveField />

        <div className="ms-layer ms-hero">
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
                      <CountUp
                        value={s.value}
                        prefix={s.prefix}
                        suffix={s.suffix}
                      />
                    </div>
                    <div className="hero-stat-label">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="ms-layer ms-services" id="services">
          <div className="container">
            <div className="section-header">
              <div className="eyebrow">Что мы разрабатываем</div>
              <h2>Разработка под задачу.</h2>
              <p className="lead">
                Не «ИИ-консалтинг» вообще, а конкретные вещи, которые собираем
                под ключ. Листайте карточки.
              </p>
            </div>
          </div>
          <ServicesCarousel />
        </div>
      </div>
    </div>
  );
}
