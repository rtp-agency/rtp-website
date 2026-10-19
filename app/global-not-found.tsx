import "./globals.css";
import "./redesign.css";
import { display, sans, mono } from "@/lib/fonts";

// Shown for URLs that match no route at all (the per-language 404s handle the rest).
export default function GlobalNotFound() {
  return (
    <html lang="ru" className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <body>
        <main className="notfound dark-page" style={{ textAlign: "center" }}>
          <div className="container">
            <div className="eyebrow" style={{ justifyContent: "center" }}>404</div>
            <h1>Страница не найдена · Page not found</h1>
            <p className="lead" style={{ margin: "0 auto 40px", maxWidth: 460 }}>
              Похоже, страница переехала или никогда не существовала.
            </p>
            <a href="/" className="btn btn-primary">
              На главную · Home <span className="arrow">→</span>
            </a>
          </div>
        </main>
      </body>
    </html>
  );
}
