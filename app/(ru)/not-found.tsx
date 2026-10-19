import Link from "next/link";
import { Nav } from "@/components/Nav";
import { strings } from "@/lib/ui";
import { lp } from "@/lib/locale";

export default function NotFound() {
  const t = strings["ru"].notFound;
  return (
    <>
      <Nav locale="ru" variant="page" altHref="/en" />
      <main className="notfound dark-page" id="main">
        <div className="container" style={{ textAlign: "center" }}>
          <div className="eyebrow" style={{ justifyContent: "center" }}>404</div>
          <h1>{t.title}</h1>
          <p className="lead" style={{ margin: "0 auto 40px", maxWidth: 460 }}>{t.body}</p>
          <Link href={lp("ru", "/")} className="btn btn-primary">
            {t.home} <span className="arrow">→</span>
          </Link>
        </div>
      </main>
    </>
  );
}
