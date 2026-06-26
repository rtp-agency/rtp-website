"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { isLang, ui, defaultLang, type Lang } from "@/lib/i18n";

export default function NotFound() {
  const pathname = usePathname();
  const seg = pathname.split("/")[1] ?? "";
  const lang: Lang = isLang(seg) ? seg : defaultLang;
  const t = ui[lang].notFound;

  return (
    <main className="notfound">
      <div className="container" style={{ textAlign: "center" }}>
        <div className="eyebrow" style={{ justifyContent: "center" }}>
          404
        </div>
        <h1>{t.title}</h1>
        <p className="lead" style={{ margin: "0 auto 40px", maxWidth: 460 }}>
          {t.body}
        </p>
        <Link href={`/${lang}`} className="btn btn-primary">
          {t.home} <span className="arrow">→</span>
        </Link>
      </div>
    </main>
  );
}
