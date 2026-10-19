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

function SecHead({
  idx,
  eyebrow,
  title,
  lead,
}: {
  idx: string;
  eyebrow: string;
  title: string;
  lead?: string;
}) {
  return (
    <div className="sec-head">
      <div className="sec-label">
        <span>{idx}</span>
        {eyebrow}
      </div>
      <h2>{title}</h2>
      {lead && <p>{lead}</p>}
    </div>
  );
}

export default function Home() {
  const caseSlides = work.map((c, i) => {
    const cover = getShots(c.slug)?.cover;
    const hi = c.highlights[0];
    return (
      <article className="case">
        <a href={`/work/${c.slug}`} className="case-media" aria-label={c.title} tabIndex={-1}>
          {cover ? (
            <figure className="frame">
              <div className="frame-bar" aria-hidden="true">
                <i />
                <i />
                <i />
                {cover.chrome && <span>{cover.chrome}</span>}
              </div>
              <img src={cover.src} width={cover.w} height={cover.h} alt={cover.alt} loading="lazy" decoding="async" />
            </figure>
          ) : (
            <div className="case-stat">
              <span className="case-stat-num">{hi?.number}</span>
              <span className="case-stat-label">{hi?.label}</span>
              {c.costBar && (
                <span className="case-stat-bar" aria-hidden="true">
                  <span style={{ width: `${c.costBar.afterPct}%` }} />
                </span>
              )}
            </div>
          )}
        </a>

        <div className="case-body">
          <div className="case-idx">
            {String(i + 1).padStart(2, "0")}
            <span> — {c.number.split("—")[1]?.trim()}</span>
          </div>
          <h3>{c.title}</h3>
          <p>{c.summary}</p>
          <dl className="case-metrics">
            {c.highlights.map((h) => (
              <div key={h.label}>
                <dt>{h.number}</dt>
                <dd>{h.label}</dd>
              </div>
            ))}
          </dl>
          <div className="case-foot">
            <span className="case-tech">{c.tech}</span>
            <a href={`/work/${c.slug}`} className="case-link">
              {ui.readCase} <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </article>
    );
  });

  return (
    <>
      <Intro />
      <Nav variant="home" />

      <main id="main">
        <Hero />

        <section id="services" className="blk">
          <div className="wrap">
            <SecHead
              idx="01"
              eyebrow="Услуги"
              title="Разработка под задачу."
              lead="Не «ИИ-консалтинг» вообще, а конкретные вещи, которые собираем под ключ."
            />
            <Services />
          </div>
        </section>

        <section id="work" className="blk">
          <div className="wrap">
            <SecHead idx="02" eyebrow="Кейсы" title="Что мы уже автоматизировали." />
            <CaseSlider slides={caseSlides} />
          </div>
        </section>

        <section className="blk">
          <div className="wrap">
            <SecHead idx="03" eyebrow={home.additionalEyebrow} title={home.additionalHeading} />
            <ol className="rows">
              {additional.map((a, i) => (
                <li key={a.title}>
                  <span className="rows-idx">{String(i + 1).padStart(2, "0")}</span>
                  <h3>{a.title}</h3>
                  <p>{a.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="testimonials" className="blk">
          <div className="wrap">
            <SecHead idx="04" eyebrow={home.testimonialsEyebrow} title={home.testimonialsHeading} />
            <div className="quotes">
              {testimonials.map((tm) => (
                <figure className="quote" key={tm.name}>
                  <blockquote>«{tm.quote}»</blockquote>
                  <figcaption>
                    <span className="quote-avatar">{tm.avatar}</span>
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

        <section id="contact" className="blk blk-cta">
          <div className="wrap cta2">
            <div className="cta2-copy">
              <div className="sec-label">
                <span>05</span>
                {home.ctaEyebrow}
              </div>
              <h2>{home.ctaHeading}</h2>
              <p className="cta2-lead">{home.ctaLead}</p>
              <ul className="cta2-list">
                {home.auditList.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="cta2-direct">
                {home.ctaContactPrefix}{" "}
                <a href={TG_URL} target="_blank" rel="noopener noreferrer">
                  Telegram @rtp_agency
                </a>
                {" · "}
                <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
              </div>
            </div>
            <Reveal className="cta2-form">
              <ContactForm />
              <p className="cta2-note">{home.priceNote}</p>
            </Reveal>
          </div>
        </section>
      </main>
    </>
  );
}
