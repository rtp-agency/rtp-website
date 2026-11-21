// English locale (/en). Shared chrome / UI strings, page metadata,
// and JSON-LD live here as plain constants.

export const ui = {
  nav: {
    services: "Services",
    work: "Work",
    testimonials: "Clients",
    contact: "Contact",
    back: "← All work",
  },
  readCase: "Read case",
  step: "STEP",
  toCosts: "to costs",
  stickyCta: "Contact us",
  form: {
    name: "Your name",
    business: "Business / niche",
    message: "Which process do you want to automate?",
    contact: "Contact: Telegram / email / phone",
    send: "Send",
    sending: "Sending…",
    sent: "Sent ✓",
    ok: "Thank you — we'll reply shortly.",
    error: "Something went wrong. Write to us directly at ",
    subject: "New request (RTP Agency)",
  },
  notFound: {
    title: "Page not found.",
    body: "The page may have moved or never existed.",
    home: "Back to home",
  },
  casePage: {
    titleSuffix: "— Case study · RTP",
    role: "Role:",
    timeline: "Timeline:",
    status: "Status:",
    ctaHeading: "Have a similar problem?",
    ctaBody: "Tell us what's slowing you down. A few sentences is enough.",
    ctaButton: "Discuss",
    breadcrumbHome: "Home",
    breadcrumbWork: "Work",
    keywords: [
      "business process automation",
      "AI for business",
      "lead handling automation",
      "automation case study",
      "production AI",
    ],
  },
} as const;

// Page-level metadata (title / description / keywords / OG).
export const meta = {
  title: "RTP — Routine to Profit · Automation & Engineering Studio",
  description:
    "RTP is an independent automation and engineering studio. We design automations, connect business systems and build custom software that makes operations work better.",
  keywords: [
    "business process automation",
    "system integration",
    "API integration",
    "custom software development",
    "workflow automation",
    "internal tools",
    "AI workflows",
    "automation studio",
    "RTP",
    "Routine to Profit",
  ],
  ogTitle: "RTP — Less busywork. Better business.",
  ogDescription:
    "We design automations, connect your tools, and build custom systems that turn everyday operations into measurable results.",
  twitterDescription:
    "Automation & engineering studio: automations, integrations and custom software.",
  ogAlt: "RTP — Routine to Profit. Less busywork. Better business.",
  ogHeroLine1: "Less busywork.",
  ogHeroLine2: "Better business.",
  ogTagline: "Automation & Engineering Studio",
  ogCta: "Tell us what you need →",
  caseOgTagline: "Case study · RTP — Routine to Profit",
  caseFallback: "Case",
} as const;

// JSON-LD structured data.
export const jsonLd: Record<string, unknown> = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://www.rtp-agency.com/en/#service",
  name: "RTP — Routine to Profit",
  alternateName: ["RTP", "RTP Agency"],
  url: "https://www.rtp-agency.com/en",
  inLanguage: "en",
  description:
    "Independent automation and engineering studio: business process automation, cross-system integrations, custom software, internal applications and AI workflows.",
  image: "https://www.rtp-agency.com/en/opengraph-image",
  areaServed: "Worldwide",
  sameAs: ["https://github.com/rtp-agency"],
  knowsAbout: [
    "business process automation",
    "system integration",
    "API integration",
    "middleware",
    "custom software development",
    "internal applications",
    "operational dashboards",
    "AI workflows",
    "document processing",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Automate",
          description:
            "Remove repetitive work and build reliable workflows: document processing, communication routing, AI-assisted operations, approval workflows.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Connect",
          description:
            "Make disconnected business systems work together: API integrations, data synchronization, cross-system workflows, middleware.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Build",
          description:
            "Custom tools around the way a business operates: internal applications, dashboards, backend services, business software.",
        },
      },
    ],
  },
};
