import { Nav } from "@/components/Nav";
import { Reveal } from "@/components/Reveal";
import { ContactForm } from "@/components/ContactForm";
import { Intro } from "@/components/Intro";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { CaseSlider } from "@/components/CaseSlider";
import { Integrations } from "@/components/Integrations";
import { LogoMarquee } from "@/components/LogoMarquee";
import { Rise } from "@/components/Rise";
import { Faq } from "@/components/Faq";
import { getContent } from "@/lib/content";
import { lp, type Locale } from "@/lib/locale";

const TG_URL = "https://t.me/rtp_agency";
const EMAIL = "solutions@rtp-agency.com";

function Head({ eyebrow, title, lead }: { eyebrow: string; title: string; lead?: string }) {
  return (
    <Rise className="head3">
      <p className="eyebrow3">{eyebrow}</p>
      <h2>{title}</h2>
      {lead && <p className="head3-lead">{lead}</p>}
    </Rise>
  );
}

export function HomeView({ locale }: { locale: Locale }) {
  const C = getContent(locale);
  const { t, ui } = C;
  const { home, work, additional, testimonials, stats, services } = C.site;
  const alt = lp(locale === "ru" ? "en" : "ru", "/");

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: locale,
    mainEntity: C.faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const caseSlides = work.map((c, i) => {
    const cover = C.getShots(c.slug)?.cover;
    const hi = c.highlights[0];
    const href = lp(locale, `/work/${c.slug}`);
    return (
      <article className="case3">
        <div className="case3-body">
          <div className="case3-meta">
            <span>{String(i + 1).padStart(2, "0")}</span>
            {c.number.split("—")[1]?.trim()}
          </div>
          <h3>{c.title}</h3>
          <p>{c.summary}</p>
          <dl className="case3-metrics">
            {c.highlights.map((h) => (
              <div key={h.label}>
                <dt>{h.number}</dt>
                <dd>{h.label}</dd>
              </div>
            ))}
          </dl>
          <div className="case3-foot">
            <a href={href} className="pill pill-ink">
              {ui.readCase} <span aria-hidden="true">→</span>
            </a>
            <span className="case3-tech">{c.tech}</span>
          </div>
        </div>

        <a href={href} className="case3-panel" aria-label={c.title} tabIndex={-1}>
          {cover ? (
            <figure className="float-shot">
              <div className="float-bar" aria-hidden="true">
                <i />
                <i />
                <i />
                {cover.chrome && <span>{cover.chrome}</span>}
              </div>
              <img src={cover.src} width={cover.w} height={cover.h} alt={cover.alt} loading="lazy" decoding="async" />
            </figure>
          ) : (
            <div className="case3-stat">
              <span>{hi?.number}</span>
              <small>{hi?.label}</small>
              {c.costBar && (
                <i aria-hidden="true">
                  <b style={{ width: `${c.costBar.afterPct}%` }} />
                </i>
              )}
            </div>
          )}
        </a>
      </article>
    );
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(C.jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <Intro scrollLabel={t.intro.scroll} />
      <Nav locale={locale} variant="home" altHref={alt} />

      <main id="main">
        <Hero locale={locale} home={home} stats={stats} />
        <LogoMarquee locale={locale} />

        <section id="services" className="band band-cream">
          <div className="wrap3">
            <Head eyebrow={t.services.eyebrow} title={t.services.title} lead={t.services.lead} />
            <Services locale={locale} services={services} />
          </div>
        </section>

        <section id="stack" className="band">
          <div className="wrap3">
            <Head eyebrow={t.stack.eyebrow} title={t.stack.title} lead={t.stack.lead} />
            <Integrations
              items={C.integrations}
              cats={C.integrationCats}
              allLabel={t.stack.all}
              tabsLabel={t.stack.tabs}
            />
          </div>
        </section>

        <section id="work" className="band band-cream">
          <div className="wrap3">
            <Head eyebrow={t.work.eyebrow} title={t.work.title} />
            <CaseSlider
              slides={caseSlides}
              labels={{ region: t.work.label, prev: t.work.prev, next: t.work.next }}
            />
          </div>
        </section>

        <section className="band">
          <div className="wrap3">
            <Head eyebrow={home.additionalEyebrow} title={home.additionalHeading} />
            <Rise as="ol" className="rows3">
              {additional.map((a, i) => (
                <li key={a.title}>
                  <span>{String(i + 1).padStart(2, "0")}</span>
                  <h3>{a.title}</h3>
                  <p>{a.body}</p>
                </li>
              ))}
            </Rise>
          </div>
        </section>

        <section id="testimonials" className="band band-cream">
          <div className="wrap3">
            <Head eyebrow={home.testimonialsEyebrow} title={home.testimonialsHeading} />
            <Rise className="quotes3">
              {testimonials.map((tm) => (
                <figure key={tm.name}>
                  <blockquote>«{tm.quote}»</blockquote>
                  <figcaption>
                    <span className="quotes3-av">{tm.avatar}</span>
                    <span>
                      <b>
                        {tm.link ? (
                          <a href={tm.link} target="_blank" rel="noopener noreferrer">
                            {tm.name}
                          </a>
                        ) : (
                          tm.name
                        )}
                      </b>
                      <small>{tm.title}</small>
                    </span>
                  </figcaption>
                </figure>
              ))}
            </Rise>
          </div>
        </section>

        <section id="faq" className="band">
          <div className="wrap3">
            <Head eyebrow={t.faq.eyebrow} title={t.faq.title} lead={t.faq.lead} />
            <Faq items={C.faq} />
          </div>
        </section>

        <section id="contact" className="inset-wrap">
          <div className="cta3">
            <div className="cta3-copy">
              <p className="eyebrow3 eyebrow3-dark">{home.ctaEyebrow}</p>
              <h2>{home.ctaHeading.replace("-", "‑")}</h2>
              <p className="cta3-lead">{home.ctaLead}</p>
              <ul className="cta3-list">
                {home.auditList.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="cta3-direct">
                {home.ctaContactPrefix}{" "}
                <a href={TG_URL} target="_blank" rel="noopener noreferrer">
                  Telegram @rtp_agency
                </a>
                {" · "}
                <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
              </p>
            </div>
            <Reveal className="cta3-form">
              <ContactForm t={ui.form} />
              <p className="cta3-note">{home.priceNote}</p>
            </Reveal>
          </div>
        </section>
      </main>
    </>
  );
}
