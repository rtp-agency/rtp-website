import { notFound } from "next/navigation";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Reveal } from "@/components/Reveal";
import { CaseVisual } from "@/components/CaseVisual";
import { ShotFrame } from "@/components/ShotFrame";
import { CaseGallery } from "@/components/CaseGallery";
import { Arrow } from "@/components/ee/Arrow";
import { getContent } from "@/lib/content";
import { abs, lp, type Locale } from "@/lib/locale";
import { studio, caseMeta } from "@/lib/studio";
import type { Block } from "@/lib/cases";

function BlockView({ block }: { block: Block }) {
  switch (block.t) {
    case "p":
      return <p dangerouslySetInnerHTML={{ __html: block.html }} />;
    case "h3":
      return <h3>{block.text}</h3>;
    case "ul":
      return (
        <ul>
          {block.items.map((item, i) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
          ))}
        </ul>
      );
    case "quote":
      return <div className="case-quote-block">{block.text}</div>;
    case "stats":
      return (
        <div className="case-stats-grid">
          {block.items.map((s) => (
            <div key={s.label}>
              <div className="case-stat-number">{s.number}</div>
              <div className="case-stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      );
    case "table":
      return (
        <table className="tech-table">
          <tbody>
            {block.rows.map(([k, v]) => (
              <tr key={k}>
                <td>{k}</td>
                <td>{v}</td>
              </tr>
            ))}
          </tbody>
        </table>
      );
    default:
      return null;
  }
}

const L = {
  en: { client: "Client", discipline: "Discipline", flow: "System flow", contents: "Contents", prev: "Previous", next: "Next", all: "All work" },
  ru: { client: "Клиент", discipline: "Направление", flow: "Схема системы", contents: "Содержание", prev: "Назад", next: "Дальше", all: "Все работы" },
};

// "← Back: Black Camel →" → "Black Camel"
const cleanLabel = (s: string) =>
  s
    .replace(/^←\s*/, "")
    .replace(/\s*→$/, "")
    .replace(/^(Back|Next|Назад|Далее|Следующий|Предыдущий|Дальше)\s*:\s*/i, "");

const anchor = (i: number) => `s${i + 1}`;

export function CaseView({ locale, slug }: { locale: Locale; slug: string }) {
  const C = getContent(locale);
  const { ui } = C;
  const c = C.getCase(slug);
  if (!c) notFound();
  const s = studio[locale];
  const l = L[locale];
  const m = caseMeta[locale][c.slug];
  const shots = C.getShots(c.slug);
  const alt = lp(locale === "ru" ? "en" : "ru", `/work/${c.slug}`);
  const no = c.eyebrow.replace(/\D/g, "").padStart(2, "0");

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: c.title,
      description: c.lead,
      image: abs(locale, `/work/${c.slug}/opengraph-image`),
      inLanguage: locale,
      author: { "@type": "Organization", name: "RTP Agency", url: abs(locale, "/") },
      publisher: { "@type": "Organization", name: "RTP Agency" },
      mainEntityOfPage: abs(locale, `/work/${c.slug}`),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: ui.casePage.breadcrumbHome, item: abs(locale, "/") },
        { "@type": "ListItem", position: 2, name: ui.casePage.breadcrumbWork, item: abs(locale, "/#work") },
        { "@type": "ListItem", position: 3, name: c.title, item: abs(locale, `/work/${c.slug}`) },
      ],
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Nav locale={locale} variant="case" altHref={alt} back={{ href: lp(locale, "/#work"), label: ui.nav.back }} />

      <main id="main" className="xframe">
        <div className="xwrap">
          <header className="xcs-head">
            <nav className="xcs-crumbs mono" aria-label="Breadcrumb">
              <Link href={lp(locale, "/")}>{ui.casePage.breadcrumbHome}</Link>
              <span aria-hidden="true">/</span>
              <Link href={lp(locale, "/#work")}>{ui.casePage.breadcrumbWork}</Link>
              <span aria-hidden="true">/</span>
              <span>{c.eyebrow}</span>
            </nav>
            <div>
              <p className="xlabel">
                {no} / {m ? m.discipline.map((d) => s.work.discipline[d]).join(" · ") : c.eyebrow}
              </p>
              <h1>{c.title}</h1>
              <p className="xcs-lead">{c.lead}</p>
            </div>
            {m && (
              <div className="xcs-out">
                {m.outcome.map((o) => (
                  <div key={o.label}>
                    <b>{o.value}</b>
                    <span>{o.label}</span>
                  </div>
                ))}
              </div>
            )}
          </header>

          <dl className="xcs-spec">
            {m && (
              <div>
                <dt className="mono">{l.client}</dt>
                <dd>{m.client}</dd>
              </div>
            )}
            {m && (
              <div>
                <dt className="mono">{l.discipline}</dt>
                <dd>{m.kind}</dd>
              </div>
            )}
            <div>
              <dt className="mono">{ui.casePage.role.replace(":", "")}</dt>
              <dd>{c.meta.role}</dd>
            </div>
            <div>
              <dt className="mono">{ui.casePage.timeline.replace(":", "")}</dt>
              <dd>{c.meta.timeline}</dd>
            </div>
            <div>
              <dt className="mono">{ui.casePage.status.replace(":", "")}</dt>
              <dd>
                {c.meta.status}
                {c.meta.link && (
                  <>
                    <br />
                    <a href={c.meta.link.href} target="_blank" rel="noopener noreferrer">
                      {c.meta.link.text.replace(/\s*→$/, "")}
                    </a>
                  </>
                )}
              </dd>
            </div>
          </dl>

          {shots && (
            <Reveal className="xcs-cover">
              <ShotFrame shot={shots.cover} priority />
              <p className="xcs-cap mono">
                <span>{shots.cover.caption ?? ""}</span>
              </p>
            </Reveal>
          )}

          {c.visual && (
            <section className="xcs-flow" aria-label={l.flow}>
              <p className="xlabel">
                {l.flow}
              </p>
              <CaseVisual visual={c.visual} toCosts={ui.toCosts} />
            </section>
          )}

          <div className="xcs-body">
            <nav className="xcs-toc" aria-label={l.contents}>
              <p className="xlabel">{l.contents}</p>
              <ol>
                {c.sections.map((sec, i) => (
                  <li key={sec.heading}>
                    <a href={`#${anchor(i)}`}>
                      <span>{String(i + 1).padStart(2, "0")}</span>
                      {sec.heading}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
            <div>
              {c.sections.map((sec, i) => (
                <section key={sec.heading} id={anchor(i)} className="xcs-sec" aria-labelledby={`${anchor(i)}-h`}>
                  <p className="xlabel">{String(i + 1).padStart(2, "0")}</p>
                  <h2 id={`${anchor(i)}-h`}>{sec.heading}</h2>
                  {sec.blocks.map((block, j) => (
                    <BlockView key={j} block={block} />
                  ))}
                </section>
              ))}
            </div>
          </div>

          {shots && shots.groups.length > 0 && (
            <div className="xcs-gallery">
              <CaseGallery groups={shots.groups} labels={C.t.gallery} />
            </div>
          )}

          <nav className="xcs-next" aria-label={l.all}>
            <Link href={c.prev.href}>
              <span className="mono">← {l.prev}</span>
              <b>{cleanLabel(c.prev.label)}</b>
            </Link>
            <Link href={c.next.href}>
              <span className="mono">{l.next} →</span>
              <b>{cleanLabel(c.next.label)}</b>
            </Link>
          </nav>
        </div>
      </main>

      <section className="xcta-band" aria-labelledby="case-cta">
        <div>
          <p className="xlabel">{s.contact.index}</p>
          <h2 id="case-cta">{ui.casePage.ctaHeading}</h2>
        </div>
        <Link href={lp(locale, "/#contact")} className="xbtn xbtn-light">
          {s.hero.cta} <Arrow />
        </Link>
      </section>
    </>
  );
}
