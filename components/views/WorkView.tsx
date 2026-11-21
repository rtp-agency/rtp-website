import { Nav } from "@/components/Nav";
import { Crosses, WorkGrid } from "@/components/ee/Sections";
import { getContent } from "@/lib/content";
import { abs, lp, type Locale } from "@/lib/locale";
import { studio } from "@/lib/studio";

// /work — every case study, smaller builds and all client quotes.
export function WorkView({ locale }: { locale: Locale }) {
  const C = getContent(locale);
  const s = studio[locale];
  const alt = lp(locale === "ru" ? "en" : "ru", "/work");

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: s.workPage.metaTitle,
    inLanguage: locale,
    url: abs(locale, "/work"),
    hasPart: C.site.work.map((c) => ({
      "@type": "Article",
      headline: C.getCase(c.slug)?.title ?? c.title,
      url: abs(locale, `/work/${c.slug}`),
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Nav locale={locale} variant="page" altHref={alt} />
      <main id="main" className="xframe">
        <header className="xwork-head xwrap">
          <nav className="xcs-crumbs mono" aria-label="Breadcrumb">
            <a href={lp(locale, "/")}>{C.ui.casePage.breadcrumbHome}</a>
            <span aria-hidden="true">/</span>
            <span>{s.workPage.title}</span>
          </nav>
          <h1>{s.workPage.title}</h1>
          <p>{s.workPage.lead}</p>
        </header>

        <section className="xsec" aria-labelledby="all-cases">
          <Crosses />
          <div className="xwrap">
            <h2 id="all-cases" className="xlabel">
              {s.work.allTitle} / {String(C.site.work.length).padStart(2, "0")}
            </h2>
            <WorkGrid C={C} slugs={C.site.work.map((c) => c.slug)} />
          </div>
        </section>

        <section className="xsec" aria-labelledby="also-built">
          <Crosses />
          <div className="xwrap xalso">
            <h2 id="also-built" className="xlabel">
              {s.work.alsoTitle}
            </h2>
            <ul>
              {C.site.additional.map((a) => (
                <li key={a.title}>
                  <b>{a.title}</b>
                  <span>{a.body}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="clients" className="xsec" aria-labelledby="clients-title">
          <Crosses />
          <div className="xwrap">
            <h2 id="clients-title" className="xlabel">
              {s.about.quotesTitle}
            </h2>
            <div className="xquotes-grid">
              {C.site.testimonials.map((t) => (
                <figure key={t.name}>
                  <blockquote>“{t.quote}”</blockquote>
                  <figcaption>
                    <b>
                      {t.link ? (
                        <a href={t.link} target="_blank" rel="noopener noreferrer">
                          {t.name}
                        </a>
                      ) : (
                        t.name
                      )}
                    </b>
                    <span>{t.title}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      </main>

      <section className="xcta-band" aria-labelledby="work-cta">
        <div>
          <p className="xlabel">{s.contact.index}</p>
          <h2 id="work-cta">{s.contact.title}</h2>
        </div>
        <a href={lp(locale, "/#contact")} className="xbtn xbtn-light">
          {s.hero.cta}
        </a>
      </section>
    </>
  );
}
