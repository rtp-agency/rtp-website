import Link from "next/link";
import { CountUp } from "./CountUp";
import { stats, home } from "@/lib/site";
import { partners } from "@/lib/partners";
import { caseShots } from "@/lib/shots";

const dash = caseShots["threads-content-system"].cover;
const editor = caseShots["black-camel"].cover;

export function Hero() {
  return (
    <section className="hero2">
      <div className="wrap hero2-grid">
        <div className="hero2-copy">
          <p className="kicker">Автоматизация бизнес-процессов с помощью ИИ</p>
          <h1>
            <span className="dim">{home.heroTitle.pre}</span>
            {home.heroTitle.em}
            <span className="dim">{home.heroTitle.post}</span>
          </h1>
          <p className="hero2-lead">{home.heroLead}</p>
          <div className="hero2-actions">
            <a href="#contact" className="btn2 btn2-primary">
              Бесплатный разбор <span aria-hidden="true">→</span>
            </a>
            <a href="#work" className="btn2 btn2-ghost">
              Смотреть кейсы
            </a>
          </div>
        </div>

        <div className="hero2-visual" aria-hidden="true">
          <figure className="hv hv-main">
            <img src={dash.src} width={dash.w} height={dash.h} alt="" />
          </figure>
          <figure className="hv hv-sub">
            <img src={editor.src} width={editor.w} height={editor.h} alt="" />
          </figure>
        </div>
      </div>

      <div className="wrap">
        <dl className="hero2-stats">
          {stats.map((s) => (
            <div key={s.label}>
              <dt>
                <CountUp value={s.value} prefix={s.prefix} suffix={s.suffix} />
              </dt>
              <dd>{s.label}</dd>
            </div>
          ))}
        </dl>

        <div className="hero2-partners" id="partners">
          <span>Партнёры</span>
          {partners.map((p) => (
            <Link key={p.slug} href={`/partners/${p.slug}`} aria-label={p.name}>
              <img src={p.logoWhite} alt={p.name} loading="lazy" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
