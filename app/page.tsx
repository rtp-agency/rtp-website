import { Nav } from "@/components/Nav";
import { Reveal } from "@/components/Reveal";
import { CountUp } from "@/components/CountUp";
import { ContactForm } from "@/components/ContactForm";
import { SectionDeco } from "@/components/SectionDeco";
import { WaveField } from "@/components/WaveField";
import { WaveWash } from "@/components/WaveWash";
import { Intro } from "@/components/Intro";
import { MatrixText } from "@/components/MatrixText";
import { ServicesCarousel } from "@/components/ServicesCarousel";
import { CasesScrolly } from "@/components/CasesScrolly";
import { PinnedReveal } from "@/components/PinnedReveal";
import { Scrolly } from "@/components/Scrolly";
import { home, stats, work, additional, testimonials } from "@/lib/site";

const TG_URL = "https://t.me/rtp_agency";
const EMAIL = "solutions@rtp-agency.com";

export default function Home() {
  return (
    <>
      <Intro />
      <div className="bg-grid" aria-hidden="true" />
      <Nav variant="home" />

      {/* Hero — pin-scroll start: RTP + stats reveal over the red wave */}
      <section className="hero hero-pinned">
        <PinnedReveal hold={1}>
          <>
            <WaveField />
            <div className="container">
              <div className="hero-center">
                <h1 className="hero-brand" data-role="heading">
                  <MatrixText text="RTP" className="matrix-rtp" />
                  <span className="hero-agency">Agency</span>
                </h1>
                <p className="hero-tagline" data-role="lead">
                  Преврати рутину в профит.
                  <br />
                  Воплоти свои идеи в реальность.
                </p>
                <a
                  href={TG_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary hero-cta"
                  data-role="body"
                >
                  Бесплатная консультация <span className="arrow">→</span>
                </a>
                <div className="hero-stats" data-role="body">
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
          </>
        </PinnedReveal>
      </section>

      {/* Services — pinned intro + coverflow carousel */}
      <section id="services" className="section-line">
        <PinnedReveal hold={0.8}>
          <div className="svc-stagewrap">
            <WaveField />
            <div className="svc-stage-content">
              <div className="container">
                <div className="section-header">
                  <div className="eyebrow" data-role="eyebrow">
                    Что мы разрабатываем
                  </div>
                  <h2 data-role="heading">Разработка под задачу.</h2>
                  <p className="lead" data-role="lead">
                    Не «ИИ-консалтинг» вообще, а конкретные вещи, которые
                    собираем под ключ. Листайте карточки.
                  </p>
                </div>
              </div>
              <div data-role="body">
                <ServicesCarousel />
              </div>
            </div>
          </div>
        </PinnedReveal>
      </section>

      {/* Wave washes over the screen → into the cases */}
      <WaveWash />

      {/* Work — pinned scroll-choreography */}
      <section id="work">
        <CasesScrolly
          items={work}
          intro={{
            eyebrow: home.workEyebrow,
            heading: home.workHeading,
            sub: "Реальные проекты в продакшене — листайте вниз.",
          }}
        />
      </section>

      {/* Additional projects — pinned scrolly */}
      <section className="section-line">
        <Scrolly
          seg="58vh"
          intro={{
            eyebrow: home.additionalEyebrow,
            heading: home.additionalHeading,
          }}
          items={additional.map((a, i) => ({
            key: a.title,
            content: (
              <div className="cs-alt">
                <div className="cs-tag" data-role="tag">
                  Проект {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="cs-title" data-role="title">
                  {a.title}
                </h3>
                <p className="cs-desc" data-role="desc">
                  {a.body}
                </p>
              </div>
            ),
          }))}
          fallback={
            <div className="container-read">
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
            </div>
          }
        />
      </section>

      {/* Testimonials — pinned scrolly */}
      <section id="testimonials" className="section-line section-raised">
        <Scrolly
          seg="60vh"
          intro={{
            eyebrow: home.testimonialsEyebrow,
            heading: home.testimonialsHeading,
          }}
          items={testimonials.map((tm) => ({
            key: tm.name,
            content: (
              <div className="cs-quote">
                <p className="cs-quote-text" data-role="title">
                  «{tm.quote}»
                </p>
                <div className="cs-quote-author" data-role="sub">
                  <strong>{tm.name}</strong> — {tm.title}
                </div>
              </div>
            ),
          }))}
          fallback={
            <div className="container-read">
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
                        <span className="testimonial-author-title">
                          {tm.title}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          }
        />
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
