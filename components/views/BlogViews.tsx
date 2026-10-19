import { notFound } from "next/navigation";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Rise } from "@/components/Rise";
import { getContent, readingMinutes, postText } from "@/lib/content";
import { abs, lp, type Locale } from "@/lib/locale";
import type { Post, PostBlock } from "@/lib/posts";

function fmt(locale: Locale, iso: string) {
  return new Intl.DateTimeFormat(locale === "ru" ? "ru-RU" : "en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(iso));
}

function Block({ b, id }: { b: PostBlock; id?: string }) {
  switch (b.t) {
    case "h2":
      return <h2 id={id}>{b.text}</h2>;
    case "h3":
      return <h3>{b.text}</h3>;
    case "p":
      return <p dangerouslySetInnerHTML={{ __html: b.html }} />;
    case "ul":
      return (
        <ul>
          {b.items.map((it, i) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: it }} />
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol>
          {b.items.map((it, i) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: it }} />
          ))}
        </ol>
      );
    case "note":
      return <aside className="post-note" dangerouslySetInnerHTML={{ __html: b.html }} />;
    case "table":
      return (
        <div className="post-table">
          <table>
            <thead>
              <tr>
                {b.head.map((h, i) => (
                  <th key={i}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {b.rows.map((r, i) => (
                <tr key={i}>
                  {r.map((c, j) => (
                    <td key={j}>{c}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
  }
}

function PostCard({ p, locale, big }: { p: Post; locale: Locale; big?: boolean }) {
  const C = getContent(locale);
  return (
    <a href={lp(locale, `/blog/${p.slug}`)} className={`bc${big ? " bc-big" : ""}`}>
      <div className="bc-top">
        <span className="bc-tag">{p.tag}</span>
        <span className="bc-time">
          {readingMinutes(p)} {C.t.blog.minutes}
        </span>
      </div>
      <h2 className="bc-title">{p.title}</h2>
      <p className="bc-ex">{p.excerpt}</p>
      <span className="bc-read">
        {C.t.blog.read} <span aria-hidden="true">→</span>
      </span>
    </a>
  );
}

export function BlogIndexView({ locale }: { locale: Locale }) {
  const C = getContent(locale);
  const b = C.t.blog;
  const alt = lp(locale === "ru" ? "en" : "ru", "/blog");
  const [first, ...rest] = C.posts;

  const ld = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: b.metaTitle,
    description: b.metaDescription,
    url: abs(locale, "/blog"),
    inLanguage: locale,
    publisher: { "@type": "Organization", name: "RTP Agency", url: abs(locale, "/") },
    blogPost: C.posts.map((p) => ({
      "@type": "BlogPosting",
      headline: p.title,
      url: abs(locale, `/blog/${p.slug}`),
      datePublished: p.published,
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <Nav locale={locale} variant="page" current="blog" altHref={alt} />
      <main id="main" className="blog">
        <div className="wrap3">
          <header className="blog-head">
            <p className="eyebrow3">{b.eyebrow}</p>
            <h1>{b.title}</h1>
            <p className="head3-lead">{b.lead}</p>
          </header>
          <Rise className="bc-grid">
            <PostCard p={first} locale={locale} big />
            {rest.map((p) => (
              <PostCard key={p.slug} p={p} locale={locale} />
            ))}
          </Rise>
        </div>
      </main>
    </>
  );
}

export function PostView({ locale, slug }: { locale: Locale; slug: string }) {
  const C = getContent(locale);
  const b = C.t.blog;
  const p = C.getPost(slug);
  if (!p) notFound();
  const alt = lp(locale === "ru" ? "en" : "ru", `/blog/${p.slug}`);
  const url = abs(locale, `/blog/${p.slug}`);
  const toc = p.body.map((x, i) => ({ x, i })).filter((o) => o.x.t === "h2") as {
    x: { t: "h2"; text: string };
    i: number;
  }[];
  const related = p.related
    .map((s) => C.getPost(s))
    .filter((x): x is Post => !!x);
  const words = postText(p).split(/\s+/).length;

  const ld = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: p.title,
      description: p.description,
      inLanguage: locale,
      datePublished: p.published,
      dateModified: p.updated,
      keywords: p.keywords.join(", "),
      articleSection: p.tag,
      wordCount: words,
      mainEntityOfPage: { "@type": "WebPage", "@id": url },
      image: abs(locale, `/blog/${p.slug}/opengraph-image`),
      author: { "@type": "Organization", name: "RTP Agency", url: abs(locale, "/") },
      publisher: {
        "@type": "Organization",
        name: "RTP Agency",
        url: abs(locale, "/"),
        logo: { "@type": "ImageObject", url: "https://rtp-agency.com/icon" },
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: b.breadcrumbHome, item: abs(locale, "/") },
        { "@type": "ListItem", position: 2, name: b.breadcrumbBlog, item: abs(locale, "/blog") },
        { "@type": "ListItem", position: 3, name: p.title, item: url },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      inLanguage: locale,
      mainEntity: p.faq.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <Nav locale={locale} variant="page" current="blog" altHref={alt} />
      <main id="main" className="blog">
        <article className="wrap3 post">
          <div className="crumbs" role="navigation" aria-label="Breadcrumb">
            <Link href={lp(locale, "/")}>{b.breadcrumbHome}</Link>
            <span aria-hidden="true">/</span>
            <Link href={lp(locale, "/blog")}>{b.breadcrumbBlog}</Link>
          </div>

          <header className="post-head">
            <div className="bc-top">
              <span className="bc-tag">{p.tag}</span>
              <span className="bc-time">
                {readingMinutes(p)} {b.minutes}
              </span>
            </div>
            <h1>{p.title}</h1>
            <p className="post-lead">{p.excerpt}</p>
            <div className="post-meta">
              <span>{b.by}</span>
              <span aria-hidden="true">·</span>
              <span>
                {b.updated}{" "}
                <time dateTime={p.updated}>{fmt(locale, p.updated)}</time>
              </span>
            </div>
          </header>

          <div className="post-layout">
            <aside className="post-toc" aria-label={b.toc}>
              <p>{b.toc}</p>
              <ol>
                {toc.map((o) => (
                  <li key={o.i}>
                    <a href={`#s${o.i}`}>{o.x.text}</a>
                  </li>
                ))}
              </ol>
            </aside>

            <div className="post-body">
              {p.body.map((x, i) => (
                <Block key={i} b={x} id={x.t === "h2" ? `s${i}` : undefined} />
              ))}

              <section className="post-faq">
                <h2>{b.faq}</h2>
                {p.faq.map((f) => (
                  <details key={f.q} className="faq-item">
                    <summary>
                      <span>{f.q}</span>
                      <i aria-hidden="true" />
                    </summary>
                    <p>{f.a}</p>
                  </details>
                ))}
              </section>
            </div>
          </div>

          <section className="post-cta">
            <div>
              <h2>{b.ctaTitle}</h2>
              <p>{b.ctaLead}</p>
            </div>
            <a href={lp(locale, "/#contact")} className="pill pill-paper">
              {b.ctaButton} <span aria-hidden="true">→</span>
            </a>
          </section>

          {related.length > 0 && (
            <section className="post-related">
              <h2>{b.related}</h2>
              <div className="bc-grid bc-grid-2">
                {related.map((r) => (
                  <PostCard key={r.slug} p={r} locale={locale} />
                ))}
              </div>
            </section>
          )}
        </article>
      </main>
    </>
  );
}
