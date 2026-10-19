import { Rise } from "@/components/Rise";

export function Faq({ items }: { items: { q: string; a: string }[] }) {
  return (
    <Rise className="faq">
      {items.map((it) => (
        <details key={it.q} className="faq-item">
          <summary>
            <span>{it.q}</span>
            <i aria-hidden="true" />
          </summary>
          <p>{it.a}</p>
        </details>
      ))}
    </Rise>
  );
}
