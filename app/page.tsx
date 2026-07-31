import { Nav } from "@/components/Nav";
import { Reveal } from "@/components/Reveal";
import { ContactForm } from "@/components/ContactForm";
import { SectionDeco } from "@/components/SectionDeco";
import { Intro } from "@/components/Intro";
import { Hero } from "@/components/Hero";
import { ServicesCarousel } from "@/components/ServicesCarousel";
import { CardScrolly } from "@/components/CardScrolly";
import { home, work, additional, testimonials } from "@/lib/site";
import { ui } from "@/lib/i18n";

const TG_URL = "https://t.me/rtp_agency";
const EMAIL = "solutions@rtp-agency.com";

export default function Home() {
  const caseCards = work.map((c) => {
    const hi = c.highlights[0];
    return (
      <a key={c.slug} href={`/work/${c.slug}`} className="vsc-card vsc-case">
        <span className="vsc-cardglow" aria-hidden="true" />
        <div className="vsc-num">{c.number}</div>
        {hi && (
          <div className="vsc-metric">
            <span className="vsc-metric-num">{hi.number}</span>
            <span className="vsc-metric-label">{hi.label}</span>
          </div>
        )}
        <h4>{c.title}</h4>
        <p>{c.summary}</p>
        <div className="vsc-foot">
          <span className="vsc-tech">{c.tech}</span>
          <span className="vsc-more">{ui.readCase} →</span>
        </div>
      </a>
    );
  });

  const projectCards = additional.map((a, i) => (
    <article key={a.title} className="vsc-card">
      <span className="vsc-cardglow" aria-hidden="true" />
      <div className="vsc-num">Проект {String(i + 1).padStart(2, "0")}</div>
      <h4>{a.title}</h4>
      <p>{a.body}</p>
    </article>
  ));

  return (
    <>
      <Intro />
      <div className="bg-grid" aria-hidden="true" />
      <Nav variant="home" />

      {/* Hero — static */}
      <Hero />

      {/* Services — static block with the 3D carousel */}
      <section id="services" className="section-line services-block">
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
      </section>

      {/* Cases — pinned card scrolly */}
      <CardScrolly
        id="work"
        intro={{ eyebrow: ui.nav.work, heading: "Что мы уже автоматизировали." }}
        cards={caseCards}
        fallback={
          <div className="work-grid reading-col">
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
        }
      />

      {/* Other work — pinned card scrolly */}
      <CardScrolly
        intro={{
          eyebrow: home.additionalEyebrow,
          heading: home.additionalHeading,
        }}
        cards={projectCards}
        fallback={
          <div className="additional-grid reading-col">
            {additional.map((a) => (
              <div className="additional-item" key={a.title}>
                <h4>{a.title}</h4>
                <p>{a.body}</p>
              </div>
            ))}
          </div>
        }
      />

      {/* Reviews — static card grid */}
      <section id="testimonials" className="section-line section-raised reviews-block">
        <div className="container">
          <div className="section-header">
            <div className="eyebrow">{home.testimonialsEyebrow}</div>
            <h2>{home.testimonialsHeading}</h2>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((tm) => (
              <figure className="testimonial" key={tm.name}>
                <p className="testimonial-quote">«{tm.quote}»</p>
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
              </figure>
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
