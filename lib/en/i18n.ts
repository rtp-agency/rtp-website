// English locale (/en). Shared chrome / UI strings, page metadata,
// and JSON-LD live here as plain constants.

export const ui = {
  nav: {
    services: "Services",
    work: "Cases",
    testimonials: "Clients",
    contact: "Contact",
    back: "← Back to cases",
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
    titleSuffix: "— Case study · RTP Agency",
    role: "Role:",
    timeline: "Timeline:",
    status: "Status:",
    ctaHeading: "Have a similar task?",
    ctaBody: "Tell us what you're building — we'd be glad to talk it through.",
    ctaButton: "Discuss",
    breadcrumbHome: "Home",
    breadcrumbWork: "Cases",
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
  title: "RTP Agency — AI business process automation",
  description:
    "We automate the routine in your business: leads, customer replies, content, documents, reports. Reliable, affordable, in the tools you already use. Free teardown.",
  keywords: [
    "business process automation",
    "AI for business",
    "lead handling automation",
    "customer support chatbot",
    "content automation",
    "AI assistant",
    "automation for small business",
    "Telegram bot for business",
    "RTP Agency",
  ],
  ogTitle: "RTP Agency — AI business process automation",
  ogDescription:
    "We automate the routine in your business: leads, customer replies, content, documents, reports. Reliable, affordable, in the tools you already use.",
  twitterDescription:
    "We automate the routine in your business with AI. Free teardown.",
  ogAlt: "RTP Agency — AI business process automation",
  ogHeroLine1: "We automate the routine",
  ogHeroLine2: "in your business with AI.",
  ogTagline: "AI business process automation",
  ogCta: "Free teardown →",
  caseOgTagline: "Business process automation",
  caseFallback: "Case",
} as const;

// JSON-LD structured data.
export const jsonLd: Record<string, unknown> = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://www.rtp-agency.com/en/#service",
  name: "RTP Agency — AI business process automation",
  url: "https://www.rtp-agency.com/en",
  inLanguage: "en",
  description:
    "We automate routine business processes with AI: lead handling, customer replies, content, documents and reports. Reliable, affordable, in the tools you already use.",
  image: "https://www.rtp-agency.com/opengraph-image",
  priceRange: "$$",
  areaServed: "Worldwide",
  sameAs: ["https://github.com/rtp-agency"],
  knowsAbout: [
    "business process automation",
    "AI for business",
    "lead handling automation",
    "customer support chatbot",
    "content automation",
    "AI assistant",
    "Telegram bot for business",
  ],
  serviceType: [
    "Business process automation",
    "Customer support chatbot",
    "Content automation",
    "AI assistant for business",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Automation services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Customer communication and lead handling",
          description:
            "An AI assistant answers customers 24/7, takes and qualifies leads, and hands the manager only what needs a human.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Content and routine at scale",
          description:
            "We generate posts, product descriptions and newsletters in your style, and prepare standard documents and reports automatically, with quality checks.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "An AI assistant connected to your systems",
          description:
            "A digital employee connected to your CRM, spreadsheets and Telegram that prepares replies and documents and carries out actions on its own.",
        },
      },
    ],
  },
};
