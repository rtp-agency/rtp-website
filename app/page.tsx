import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Reveal } from "@/components/Reveal";
import { CountUp } from "@/components/CountUp";
import { ProcessCycle } from "@/components/ProcessCycle";
import { Particles } from "@/components/Particles";
import { ContactForm } from "@/components/ContactForm";
import { CardCostBar } from "@/components/CardCostBar";
import { OfferVisual } from "@/components/OfferVisual";
import { ProcessSteps } from "@/components/ProcessSteps";
import { SectionDeco } from "@/components/SectionDeco";
import { Marquee } from "@/components/Marquee";
import {
  stats,
  offers,
  work,
  additional,
  testimonials,
  marqueeTech,
} from "@/lib/site";

const TG_URL = "https://t.me/rtp_agency";

export default function Home() {
  return (
    <>
      <div className="bg-grid" aria-hidden="true" />
      <Nav variant="home" />

      {/* Hero */}
      <section className="hero">
        <Particles />
        <div className="hero-deco" aria-hidden="true">
          <svg className="hero-deco-1" viewBox="0 0 200 200">
            <circle cx="100" cy="100" r="98" />
          </svg>
          <svg className="hero-deco-2" viewBox="0 0 200 200">
            <polygon points="100,5 182,52 182,148 100,195 18,148 18,52" />
          </svg>
          <svg className="hero-deco-3" viewBox="0 0 200 200">
            <polygon points="100,12 188,180 12,180" />
          </svg>
          <svg className="hero-deco-4" viewBox="0 0 200 200">
            <rect x="40" y="40" width="120" height="120" />
          </svg>
          <svg className="hero-deco-5" viewBox="0 0 200 200">
            <circle cx="100" cy="100" r="70" />
            <circle cx="100" cy="100" r="40" />
          </svg>
        </div>
        <div className="container">
          <div className="hero-grid">
            <div className="hero-copy">
              <Reveal>
                <h1>
                  Платите за ИИ <em>в разы меньше</em>.
                </h1>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="lead">
                  Сокращаем расходы компаний на ИИ — и делаем его надёжным там,
                  где он обычно даёт сбои.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="hero-actions">
                  <a
                    href={TG_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    Бесплатный аудит расходов на ИИ{" "}
                    <span className="arrow">→</span>
                  </a>
                  <a href="#work" className="btn btn-secondary">
                    Смотреть кейсы
                  </a>
                </div>
              </Reveal>
            </div>

            <div className="hero-visual">
              <ProcessCycle />
            </div>
          </div>
        </div>
        <div className="scroll-cue" aria-hidden="true">
          <span className="scroll-cue-track">
            <span className="scroll-cue-dot" />
          </span>
        </div>
      </section>

      {/* Tech credibility marquee */}
      <Marquee items={marqueeTech} />

      {/* Stats */}
      <section className="stats">
        <div className="container">
          <div className="stats-grid">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.1} className="stat">
                <div className="stat-number">
                  <CountUp value={s.value} prefix={s.prefix} suffix={s.suffix} />
                </div>
                <div className="stat-label">{s.label}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Offers */}
      <section id="services" className="section-line">
        <SectionDeco variant={0} />
        <div className="container">
          <div className="section-header">
            <Reveal>
              <div className="eyebrow">Чем помогаем</div>
            </Reveal>
            <Reveal delay={0.05}>
              <h2>Две услуги — обе делаем на максимум.</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="lead">
                Без абстрактного «ИИ-консалтинга». Два направления с понятным
                результатом: счёт меньше — и ИИ, которому можно доверять.
              </p>
            </Reveal>
          </div>

          <div className="offers">
            {offers.map((o, i) => (
              <Reveal key={o.num} delay={i * 0.1}>
                <div className="offer">
                  <OfferVisual kind={o.visual} />
                  <div className="offer-num">{o.num}</div>
                  <h3 className="offer-name">{o.name}</h3>
                  <p className="offer-promise">{o.promise}</p>
                  <div className="offer-does-label">Что делаем</div>
                  <ul className="offer-does">
                    {o.does.map((d) => (
                      <li key={d}>{d}</li>
                    ))}
                  </ul>
                  <div className="offer-metric">
                    <span className="offer-metric-num">{o.metric}</span>
                    <span className="offer-metric-label">{o.metricLabel}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-line section-raised">
        <SectionDeco variant={1} />
        <div className="container">
          <div className="section-header">
            <Reveal>
              <div className="eyebrow">Как мы работаем</div>
            </Reveal>
            <Reveal delay={0.05}>
              <h2>Аудит, архитектура, результат.</h2>
            </Reveal>
          </div>

          <ProcessSteps />
        </div>
      </section>

      {/* Work */}
      <section id="work" className="section-line">
        <SectionDeco variant={2} />
        <div className="container">
          <div className="section-header">
            <Reveal>
              <div className="eyebrow">Избранные кейсы</div>
            </Reveal>
            <Reveal delay={0.05}>
              <h2>ИИ-системы в продакшене.</h2>
            </Reveal>
          </div>

          <div className="work-grid">
            {work.map((c) => (
              <Reveal key={c.slug}>
                <Link href={`/work/${c.slug}`} className="case-study">
                  <div className="case-number">{c.number}</div>
                  <h3>{c.title}</h3>
                  <div className="case-meta">
                    {c.meta.map((m, i) => (
                      <span key={m} style={{ display: "contents" }}>
                        {i > 0 && <span className="case-meta-divider">·</span>}
                        <span>{m}</span>
                      </span>
                    ))}
                  </div>
                  <div className="case-summary">{c.summary}</div>
                  <div className="case-highlights">
                    {c.highlights.map((h) => (
                      <div key={h.label}>
                        <div className="case-highlight-number">{h.number}</div>
                        <div className="case-highlight-label">{h.label}</div>
                      </div>
                    ))}
                  </div>
                  {c.costBar && <CardCostBar {...c.costBar} />}
                  <div className="case-footer">
                    <div className="case-tech-mini">{c.tech}</div>
                    <span className="case-read-more">
                      Читать кейс <span className="arrow">→</span>
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Additional */}
      <section className="section-line section-raised">
        <SectionDeco variant={3} />
        <div className="container-read">
          <div className="section-header">
            <Reveal>
              <div className="eyebrow">Также сделали</div>
            </Reveal>
            <Reveal delay={0.05}>
              <h2>Другие инженерные проекты.</h2>
            </Reveal>
          </div>

          <div className="additional-grid reading-col">
            {additional.map((a) => (
              <div className="additional-item" key={a.title}>
                <h4>{a.title}</h4>
                <p>{a.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="section-line">
        <SectionDeco variant={4} />
        <div className="container-read">
          <div className="section-header">
            <Reveal>
              <div className="eyebrow">Клиенты</div>
            </Reveal>
            <Reveal delay={0.05}>
              <h2>Что говорят клиенты.</h2>
            </Reveal>
          </div>

          <div className="testimonials-grid reading-col">
            {testimonials.map((t) => (
              <Reveal key={t.name}>
                <div className="testimonial">
                  <p
                    className={`testimonial-quote${
                      t.large ? " testimonial-quote-large" : ""
                    }`}
                  >
                    {t.quote}
                  </p>
                  {t.list && (
                    <ul className="testimonial-list">
                      {t.list.map((li) => (
                        <li key={li}>{li}</li>
                      ))}
                    </ul>
                  )}
                  {t.quote2 && (
                    <p className="testimonial-quote" style={{ marginTop: 24 }}>
                      {t.quote2}
                    </p>
                  )}
                  <div className="testimonial-author">
                    <div className="testimonial-avatar">{t.avatar}</div>
                    <div className="testimonial-author-info">
                      <span className="testimonial-author-name">
                        {t.link ? (
                          <a
                            href={t.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="testimonial-author-link"
                          >
                            {t.name}
                          </a>
                        ) : (
                          t.name
                        )}
                      </span>
                      <span className="testimonial-author-title">{t.title}</span>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — Free AI Cost Audit */}
      <section id="contact" className="cta section-line">
        <SectionDeco variant={5} />
        <div className="container">
          <Reveal>
            <div className="eyebrow">Бесплатно, без обязательств</div>
          </Reveal>
          <Reveal delay={0.05}>
            <h2>Бесплатный 30-минутный аудит расходов на ИИ.</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="lead">
              Покажем, сколько реально можно сэкономить на ИИ и как сделать его
              надёжнее. Без впаривания — просто честная диагностика.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <ul className="audit-list">
              <li>Разбор вашего текущего ИИ-стека и куда уходят деньги</li>
              <li>Конкретные места, где вы переплачиваете</li>
              <li>1–3 конкретные, более дешёвые альтернативы под вашу задачу</li>
              <li>Оценка потенциальной годовой экономии</li>
            </ul>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="contact-options">
              <a
                href={TG_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Записаться на бесплатный аудит <span className="arrow">→</span>
              </a>
            </div>
            <div className="contact-or">или напишите нам</div>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
