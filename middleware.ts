import { NextResponse, type NextRequest } from "next/server";
import { languages, defaultLang } from "@/lib/i18n";

// All pages live under /[lang]. Any request without a locale prefix is
// redirected to the default locale, so "/" -> "/uk", "/work/x" -> "/uk/work/x".
export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  const hasLocale = languages.some(
    (l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`)
  );
  if (hasLocale) return NextResponse.next();

  const url = req.nextUrl.clone();
  url.pathname = `/${defaultLang}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  // Skip Next internals, the metadata icon route, and any file with an extension
  // (sitemap.xml, robots.txt, /public assets, etc.).
  matcher: ["/((?!_next/|icon|.*\\..*).*)"],
};
