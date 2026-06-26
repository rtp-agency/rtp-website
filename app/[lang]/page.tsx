import Link from "next/link";
import { notFound } from "next/navigation";
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
import { getSite, marqueeTech } from "@/lib/site";
import { isLang, ui, type Lang } from "@/lib/i18n";

const TG_URL = "https://t.me/rtp_agency";
const EMAIL = "solutions@rtp-agency.com";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  const l: Lang = lang;
  const t = ui[l];
  const { home, stats, offers, work, additional, testimonials } = getSite(l);

  return (
    <>
      <div className="bg-grid" aria-hidden="true" />
      <Nav variant="home" lang={l} />

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
                  {home.heroTitle.pre}
                  <em>{home.heroTitle.em}</em>
                  {home.heroTitle.post}
                </h1>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="lead">{home.heroLead}</p>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="hero-actions">
                  <a href="#contact" className="btn btn-primary">
                    {home.heroCtaPrimary} <span className="arrow">→</span>
                  </a>
                  <a href="#work" className="btn btn-secondary">
                    {home.heroCtaSecondary}
                  </a>
                </div>
              </Reveal>
              <Reveal delay={0.3}>
                <div className="hero-chips">
                  <div className="hero-chips-label">{home.heroChipsLabel}</div>
                  <ul className="hero-chips-list">
                    {home.heroChips.map((c) => (
                      <li key={c}>{c}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>

            <div className="hero-visual">
              <ProcessCycle steps={home.cycle} />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="stats">
        <SectionDeco variant={6} />
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

      {/* Offers — 3 SMB plays */}
      <section id="services" className="section-line">
        <SectionDeco variant={0} />
        <div className="container">
          <div className="section-header">
            <Reveal>
              <div className="eyebrow">{home.offersEyebrow}</div>
            </Reveal>
            <Reveal delay={0.05}>
              <h2>{home.offersHeading}</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="lead">{home.offersLead}</p>
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
                  <div className="offer-does-label">{home.offerDoesLabel}</div>
                  <ul className="offer-does">
                    {o.does.map((d) => (
                      <li key={d}>{d}</li>
                    ))}
                  </ul>
                  <div className="offer-foot">
                    <div className="offer-foot-row">
                      <span className="offer-foot-label">
                        {home.offerAudienceLabel}
                      </span>
                      <span className="offer-foot-val">{o.audience}</span>
                    </div>
                    <div className="offer-foot-row">
                      <span className="offer-foot-label">
                        {home.offerResultLabel}
                      </span>
                      <span className="offer-foot-val offer-foot-val-hi">
                        {o.result}
                      </span>
                    </div>
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
              <div className="eyebrow">{home.processEyebrow}</div>
            </Reveal>
            <Reveal delay={0.05}>
              <h2>{home.processHeading}</h2>
            </Reveal>
          </div>

          <ProcessSteps lang={l} />
        </div>
      </section>

      {/* Why it works */}
      <section className="section-line">
        <SectionDeco variant={6} />
        <div className="container-read">
          <div className="section-header">
            <Reveal>
              <div className="eyebrow">{home.whyEyebrow}</div>
            </Reveal>
            <Reveal delay={0.05}>
              <h2>{home.whyHeading}</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="lead">{home.whyText}</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="section-line section-raised">
        <SectionDeco variant={2} />
        <div className="container">
          <div className="section-header">
            <Reveal>
              <div className="eyebrow">{home.workEyebrow}</div>
            </Reveal>
            <Reveal delay={0.05}>
              <h2>{home.workHeading}</h2>
            </Reveal>
          </div>

          <div className="work-grid">
            {work.map((c) => (
              <Reveal key={c.slug}>
                <Link href={`/${l}/work/${c.slug}`} className="case-study">
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
                  {c.costBar && <CardCostBar {...c.costBar} lang={l} />}
                  <div className="case-footer">
                    <div className="case-tech-mini">{c.tech}</div>
                    <span className="case-read-more">
                      {t.readCase} <span className="arrow">→</span>
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Additional */}
      <section className="section-line">
        <SectionDeco variant={3} />
        <div className="container-read">
          <div className="section-header">
            <Reveal>
              <div className="eyebrow">{home.additionalEyebrow}</div>
            </Reveal>
            <Reveal delay={0.05}>
              <h2>{home.additionalHeading}</h2>
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

      {/* Tech credibility marquee — proof for technical readers, kept low */}
      <Marquee items={marqueeTech} />

      {/* Testimonials */}
      <section id="testimonials" className="section-line section-raised">
        <SectionDeco variant={4} />
        <div className="container-read">
          <div className="section-header">
            <Reveal>
              <div className="eyebrow">{home.testimonialsEyebrow}</div>
            </Reveal>
            <Reveal delay={0.05}>
              <h2>{home.testimonialsHeading}</h2>
            </Reveal>
          </div>

          <div className="testimonials-grid reading-col">
            {testimonials.map((tm) => (
              <Reveal key={tm.name}>
                <div className="testimonial">
                  <p
                    className={`testimonial-quote${
                      tm.large ? " testimonial-quote-large" : ""
                    }`}
                  >
                    {tm.quote}
                  </p>
                  {tm.list && (
                    <ul className="testimonial-list">
                      {tm.list.map((li) => (
                        <li key={li}>{li}</li>
                      ))}
                    </ul>
                  )}
                  {tm.quote2 && (
                    <p className="testimonial-quote" style={{ marginTop: 24 }}>
                      {tm.quote2}
                    </p>
                  )}
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
                      <span className="testimonial-author-title">{tm.title}</span>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — Free teardown */}
      <section id="contact" className="cta section-line">
        <SectionDeco variant={5} />
        <div className="container">
          <Reveal>
            <div className="eyebrow">{home.ctaEyebrow}</div>
          </Reveal>
          <Reveal delay={0.05}>
            <h2>{home.ctaHeading}</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="lead">{home.ctaLead}</p>
          </Reveal>
          <Reveal delay={0.15}>
            <ul className="audit-list">
              {home.auditList.map((item) => (
                <li key={item}>{item}</li>
              ))}
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
                {home.ctaButton} <span className="arrow">→</span>
              </a>
            </div>
            <div className="contact-line">
              {home.ctaContactPrefix}{" "}
              <a href={TG_URL} target="_blank" rel="noopener noreferrer">
                Telegram @rtp_agency
              </a>
              {" · "}
              <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            </div>
            <ContactForm lang={l} />
            <div className="price-note">{home.priceNote}</div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
