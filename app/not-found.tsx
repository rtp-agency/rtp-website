import Link from "next/link";

export default function NotFound() {
  return (
    <main className="notfound">
      <div className="container" style={{ textAlign: "center" }}>
        <div className="eyebrow" style={{ justifyContent: "center" }}>
          404
        </div>
        <h1>Страница не найдена.</h1>
        <p className="lead" style={{ margin: "0 auto 40px", maxWidth: 460 }}>
          Похоже, страница переехала или никогда не существовала.
        </p>
        <Link href="/" className="btn btn-primary">
          На главную <span className="arrow">→</span>
        </Link>
      </div>
    </main>
  );
}
