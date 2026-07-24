import { Nav } from "@/components/Nav";
import { Reveal } from "@/components/Reveal";
import { ContactForm } from "@/components/ContactForm";
import { SectionDeco } from "@/components/SectionDeco";
import { Intro } from "@/components/Intro";
import { Journey } from "@/components/Journey";
import { ProjectsScrolly } from "@/components/ProjectsScrolly";
import { ReviewsScrolly } from "@/components/ReviewsScrolly";
import { home, additional, testimonials } from "@/lib/site";

const TG_URL = "https://t.me/rtp_agency";
const EMAIL = "solutions@rtp-agency.com";

export default function Home() {
  return (
    <>
      <Intro />
      <div className="bg-grid" aria-hidden="true" />
      <Nav variant="home" />

      {/* Hero → services → wave → cases: one pinned journey */}
      <Journey />

      {/* Other work — pinned vertical card column.
          NB: no .section-line here — its content-visibility:auto clips the
          sticky pin and fakes an off-screen height. */}
      <section className="scrub-section">
        <ProjectsScrolly
          items={additional}
          intro={{
            eyebrow: home.additionalEyebrow,
            heading: home.additionalHeading,
          }}
        />
      </section>

      {/* Testimonials — pinned horizontal card row */}
      <section id="testimonials" className="scrub-section">
        <ReviewsScrolly
          items={testimonials}
          intro={{
            eyebrow: home.testimonialsEyebrow,
            heading: home.testimonialsHeading,
          }}
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
