import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Reveal } from "@/components/Reveal";
import { CountUp } from "@/components/CountUp";
import { ContactForm } from "@/components/ContactForm";
import { CardCostBar } from "@/components/CardCostBar";
import { OfferVisual } from "@/components/OfferVisual";
import { ProcessSteps } from "@/components/ProcessSteps";
import { SectionDeco } from "@/components/SectionDeco";
import { Marquee } from "@/components/Marquee";
import { WaveField } from "@/components/WaveField";
import { Intro } from "@/components/Intro";
import {
  home,
  stats,
  offers,
  work,
  additional,
  testimonials,
  marqueeTech,
} from "@/lib/site";
import { ui } from "@/lib/i18n";

const TG_URL = "https://t.me/rtp_agency";
const EMAIL = "solutions@rtp-agency.com";

export default function Home() {
  return (
    <>
      <Intro />
      <div className="bg-grid" aria-hidden="true" />
      <Nav variant="home" />

      {/* Hero — 3D brand over the red dot-wave, with the proof stats */}
      <section className="hero">
        <WaveField />
        <div className="container">
          <div className="hero-center">
            <h1 className="hero-3d">RTP Agency</h1>
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

          <ProcessSteps />
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
                      {ui.readCase} <span className="arrow">→</span>
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
            <ContactForm />
            <div className="price-note">{home.priceNote}</div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
