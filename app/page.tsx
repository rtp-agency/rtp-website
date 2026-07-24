import { Nav } from "@/components/Nav";
import { Reveal } from "@/components/Reveal";
import { CountUp } from "@/components/CountUp";
import { ContactForm } from "@/components/ContactForm";
import { ProcessSteps } from "@/components/ProcessSteps";
import { SectionDeco } from "@/components/SectionDeco";
import { Marquee } from "@/components/Marquee";
import { WaveField } from "@/components/WaveField";
import { Intro } from "@/components/Intro";
import { MatrixText } from "@/components/MatrixText";
import { ServicesCarousel } from "@/components/ServicesCarousel";
import { CasesScrolly } from "@/components/CasesScrolly";
import {
  home,
  stats,
  work,
  additional,
  testimonials,
  marqueeTech,
} from "@/lib/site";

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
      </section>

      {/* Offers — 3 SMB plays */}
      <section id="services" className="section-line">
        <SectionDeco variant={0} />
        <div className="container">
          <div className="section-header">
            <Reveal>
              <div className="eyebrow">Что мы разрабатываем</div>
            </Reveal>
            <Reveal delay={0.05}>
              <h2>Разработка под задачу.</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="lead">
                Не «ИИ-консалтинг» вообще, а конкретные вещи, которые собираем
                под ключ. Листайте карточки.
              </p>
            </Reveal>
          </div>
        </div>
        <ServicesCarousel />
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
