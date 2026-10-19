import { services, type Service } from "@/lib/site";
import { Rise } from "@/components/Rise";

const TG_URL = "https://t.me/rtp_agency";

function Icon({ kind }: { kind: Service["icon"] }) {
  const p = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  switch (kind) {
    case "video":
      return (
        <svg viewBox="0 0 24 24" {...p}>
          <rect x="3" y="6" width="18" height="12" rx="2" />
          <path d="M10 9.5l4.5 2.5L10 14.5z" />
        </svg>
      );
    case "telegram":
      return (
        <svg viewBox="0 0 24 24" {...p}>
          <path d="M21 4L3 11l6 2 2 6 3-4 4 3z" />
          <path d="M9 13l8-6" />
        </svg>
      );
    case "crm":
      return (
        <svg viewBox="0 0 24 24" {...p}>
          <rect x="3" y="4" width="18" height="16" rx="2" />
          <path d="M3 9h18M9 9v11" />
        </svg>
      );
    case "sites":
      return (
        <svg viewBox="0 0 24 24" {...p}>
          <rect x="3" y="4" width="18" height="16" rx="2" />
          <path d="M3 8h18M6.5 6h.01M9 6h.01" />
        </svg>
      );
    case "infra":
      return (
        <svg viewBox="0 0 24 24" {...p}>
          <rect x="3" y="4" width="18" height="6" rx="1.5" />
          <rect x="3" y="14" width="18" height="6" rx="1.5" />
          <path d="M7 7h.01M7 17h.01" />
        </svg>
      );
    case "custom":
      return (
        <svg viewBox="0 0 24 24" {...p}>
          <rect x="6" y="6" width="12" height="12" rx="2" />
          <path d="M9 3v3M15 3v3M9 18v3M15 18v3M3 9h3M3 15h3M18 9h3M18 15h3" />
        </svg>
      );
    default:
      return null;
  }
}

export function Services() {
  return (
    <Rise as="ul" className="svc3">
      {services.map((s) => (
        <li key={s.title}>
          <a href={TG_URL} target="_blank" rel="noopener noreferrer" className="svc3-card">
            <span className="svc3-icon">
              <Icon kind={s.icon} />
            </span>
            <h3>{s.title}</h3>
            <ul>
              {s.items.map((it) => (
                <li key={it}>{it}</li>
              ))}
            </ul>
            <span className="svc3-go" aria-hidden="true">
              →
            </span>
          </a>
        </li>
      ))}
    </Rise>
  );
}
