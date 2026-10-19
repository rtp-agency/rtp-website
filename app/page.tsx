import { Nav } from "@/components/Nav";
import { Reveal } from "@/components/Reveal";
import { ContactForm } from "@/components/ContactForm";
import { Intro } from "@/components/Intro";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { CaseSlider } from "@/components/CaseSlider";
import { home, work, additional, testimonials } from "@/lib/site";
import { ui } from "@/lib/i18n";
import { getShots } from "@/lib/shots";

const TG_URL = "https://t.me/rtp_agency";
const EMAIL = "solutions@rtp-agency.com";

function Head({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
}) {
  return (
    <div className="head3">
      <p className="eyebrow3">{eyebrow}</p>
      <h2>{title}</h2>
      {lead && <p className="head3-lead">{lead}</p>}
    </div>
  );
}

export default function Home() {
  const caseSlides = work.map((c, i) => {
    const cover = getShots(c.slug)?.cover;
    const hi = c.highlights[0];
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
            <a href={`/work/${c.slug}`} className="pill pill-ink">
              {ui.readCase} <span aria-hidden="true">→</span>
            </a>
            <span className="case3-tech">{c.tech}</span>
          </div>
        </div>

        <a href={`/work/${c.slug}`} className="case3-panel" aria-label={c.title} tabIndex={-1}>
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
      <Intro />
      <Nav variant="home" />

      <main id="main">
        <Hero />

        <section id="services" className="band band-cream">
          <div className="wrap3">
            <Head
              eyebrow="Услуги"
              title="Разработка под задачу."
              lead="Не «ИИ-консалтинг» вообще, а конкретные вещи, которые собираем под ключ."
            />
            <Services />
          </div>
        </section>

        <section id="work" className="band">
          <div className="wrap3">
            <Head eyebrow="Кейсы" title="Что мы уже автоматизировали." />
            <CaseSlider slides={caseSlides} />
          </div>
        </section>

        <section className="band band-cream">
          <div className="wrap3">
            <Head eyebrow={home.additionalEyebrow} title={home.additionalHeading} />
            <ol className="rows3">
              {additional.map((a, i) => (
                <li key={a.title}>
                  <span>{String(i + 1).padStart(2, "0")}</span>
                  <h3>{a.title}</h3>
                  <p>{a.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="testimonials" className="band">
          <div className="wrap3">
            <Head eyebrow={home.testimonialsEyebrow} title={home.testimonialsHeading} />
            <div className="quotes3">
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
            </div>
          </div>
        </section>

        <section id="contact" className="inset-wrap">
          <div className="cta3">
            <div className="cta3-copy">
              <p className="eyebrow3 eyebrow3-dark">{home.ctaEyebrow}</p>
              <h2>{home.ctaHeading}</h2>
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
              <ContactForm />
              <p className="cta3-note">{home.priceNote}</p>
            </Reveal>
          </div>
        </section>
      </main>
    </>
  );
}
