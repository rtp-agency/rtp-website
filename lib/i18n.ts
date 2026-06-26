export const languages = ["uk", "en"] as const;
export type Lang = (typeof languages)[number];

export const defaultLang: Lang = "uk";

export function isLang(value: string): value is Lang {
  return (languages as readonly string[]).includes(value);
}

// Maps a locale to the html lang / OG locale codes.
export const htmlLang: Record<Lang, string> = { uk: "uk", en: "en" };
export const ogLocale: Record<Lang, string> = { uk: "uk_UA", en: "en_US" };

// Shared chrome / UI strings used across components and pages.
export const ui = {
  uk: {
    langLabel: "EN",
    langSwitchAria: "Switch to English",
    nav: {
      services: "Послуги",
      work: "Кейси",
      testimonials: "Клієнти",
      contact: "Контакти",
      back: "← Назад до кейсів",
    },
    readCase: "Читати кейс",
    step: "КРОК",
    toCosts: "до витрат",
    form: {
      name: "Ваше ім'я",
      email: "Email",
      message:
        "Чим ви займаєтесь і де болить за вартістю чи надійністю ШІ?",
      send: "Надіслати",
      sending: "Надсилаємо…",
      sent: "Надіслано ✓",
      ok: "Дякуємо — скоро відповімо.",
      error: "Щось пішло не так. Напишіть напряму на ",
      subject: "Нова заявка (RTP Agency)",
    },
    notFound: {
      title: "Сторінку не знайдено.",
      body: "Схоже, сторінка переїхала або ніколи не існувала.",
      home: "На головну",
    },
    casePage: {
      titleSuffix: "— Кейс · RTP Agency",
      role: "Роль:",
      timeline: "Терміни:",
      status: "Статус:",
      ctaHeading: "Схожа задача?",
      ctaBody: "Розкажіть, що ви будуєте — будемо раді обговорити.",
      ctaButton: "Обговорити",
      breadcrumbHome: "Головна",
      breadcrumbWork: "Кейси",
      keywords: [
        "оптимізація витрат на ШІ",
        "зниження витрат на ШІ",
        "впровадження ШІ",
        "кейс ШІ-консалтингу",
        "production ШІ",
      ],
    },
  },
  en: {
    langLabel: "UA",
    langSwitchAria: "Перемкнути на українську",
    nav: {
      services: "Services",
      work: "Case studies",
      testimonials: "Clients",
      contact: "Contact",
      back: "← Back to case studies",
    },
    readCase: "Read case study",
    step: "STEP",
    toCosts: "on costs",
    form: {
      name: "Your name",
      email: "Email",
      message:
        "What do you do, and where does it hurt — AI cost or reliability?",
      send: "Send",
      sending: "Sending…",
      sent: "Sent ✓",
      ok: "Thanks — we'll be in touch soon.",
      error: "Something went wrong. Write to us directly at ",
      subject: "New inquiry (RTP Agency)",
    },
    notFound: {
      title: "Page not found.",
      body: "Looks like this page moved or never existed.",
      home: "Go home",
    },
    casePage: {
      titleSuffix: "— Case study · RTP Agency",
      role: "Role:",
      timeline: "Timeline:",
      status: "Status:",
      ctaHeading: "Similar challenge?",
      ctaBody: "Tell us what you're building — we'd be glad to talk it through.",
      ctaButton: "Let's talk",
      breadcrumbHome: "Home",
      breadcrumbWork: "Case studies",
      keywords: [
        "AI cost optimization",
        "reduce AI costs",
        "AI deployment",
        "AI consulting case study",
        "production AI",
      ],
    },
  },
} as const;

// Page-level metadata (title / description / keywords / OG).
export const meta = {
  uk: {
    title: "RTP Agency — ШІ-консалтинг і оптимізація витрат",
    description:
      "ШІ-консалтинг, оптимізація витрат і впровадження. Знижуємо витрати на ШІ на 80–99% і робимо його надійним у складних production-задачах.",
    keywords: [
      "ШІ-консалтинг",
      "оптимізація витрат на ШІ",
      "зниження витрат на ШІ",
      "впровадження ШІ",
      "ШІ-консультант",
      "оптимізація витрат на LLM",
      "скоротити витрати на ШІ",
      "мультиагентні ШІ-системи",
      "production ШІ",
      "надійність ШІ",
      "оптимізація ШІ-інфраструктури",
      "RTP Agency",
    ],
    ogTitle: "RTP Agency — ШІ-консалтинг і оптимізація витрат",
    ogDescription:
      "Знижуємо витрати на ШІ на 80–99% і робимо його надійним у продакшені. ШІ-консалтинг і оптимізація витрат.",
    twitterDescription:
      "Знижуємо витрати на ШІ на 80–99% і робимо його надійним у продакшені.",
    ogAlt: "RTP Agency — ШІ-консалтинг і оптимізація витрат",
    ogHeroLine1: "Платіть за ШІ",
    ogHeroLine2: "у рази менше.",
    ogTagline: "ШІ-консалтинг · Оптимізація витрат · Впровадження",
    ogCta: "Безкоштовний аудит →",
    caseOgTagline: "Оптимізація витрат і надійність ШІ",
    caseFallback: "Кейс",
  },
  en: {
    title: "RTP Agency — AI consulting & cost optimization",
    description:
      "AI consulting, cost optimization and deployment. We cut AI costs by 80–99% and make it reliable in complex production tasks.",
    keywords: [
      "AI consulting",
      "AI cost optimization",
      "reduce AI costs",
      "AI deployment",
      "AI consultant",
      "LLM cost optimization",
      "cut AI costs",
      "multi-agent AI systems",
      "production AI",
      "AI reliability",
      "AI infrastructure optimization",
      "RTP Agency",
    ],
    ogTitle: "RTP Agency — AI consulting & cost optimization",
    ogDescription:
      "We cut AI costs by 80–99% and make it reliable in production. AI consulting and cost optimization.",
    twitterDescription:
      "We cut AI costs by 80–99% and make it reliable in production.",
    ogAlt: "RTP Agency — AI consulting & cost optimization",
    ogHeroLine1: "Pay far less",
    ogHeroLine2: "for AI.",
    ogTagline: "AI consulting · Cost optimization · Deployment",
    ogCta: "Free audit →",
    caseOgTagline: "AI cost optimization & reliability",
    caseFallback: "Case study",
  },
} as const;

// JSON-LD structured data, localized.
export const jsonLdByLang: Record<Lang, Record<string, unknown>> = {
  uk: {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://rtp-agency.com/#service",
    name: "RTP Agency — ШІ-консалтинг і оптимізація витрат",
    url: "https://rtp-agency.com",
    description:
      "ШІ-консалтинг з фокусом на оптимізацію витрат на ШІ та надійне впровадження для компаній, що використовують ШІ в масштабі.",
    image: "https://rtp-agency.com/uk/opengraph-image",
    priceRange: "$$",
    areaServed: "Worldwide",
    sameAs: ["https://github.com/rtp-agency"],
    knowsAbout: [
      "ШІ-консалтинг",
      "оптимізація витрат на ШІ",
      "зниження витрат на ШІ",
      "впровадження ШІ",
      "мультиагентні ШІ-системи",
      "оркестрація LLM",
      "надійність ШІ в продакшені",
    ],
    serviceType: [
      "ШІ-консалтинг",
      "Оптимізація витрат на ШІ",
      "Впровадження ШІ",
      "Надійність ШІ-систем",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "ШІ-послуги",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Оптимізація витрат на ШІ",
            description:
              "Знижуємо витрати на ШІ на 80–99%, замінюючи переоцінені частини стека на дешевші аналоги тієї ж якості.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Надійність ШІ-систем",
            description:
              "Робимо ШІ надійним у складних багатокрокових production-задачах через мультиагентну архітектуру та шари верифікації.",
          },
        },
      ],
    },
  },
  en: {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://rtp-agency.com/#service",
    name: "RTP Agency — AI consulting & cost optimization",
    url: "https://rtp-agency.com",
    description:
      "AI consulting focused on AI cost optimization and reliable deployment for companies using AI at scale.",
    image: "https://rtp-agency.com/en/opengraph-image",
    priceRange: "$$",
    areaServed: "Worldwide",
    sameAs: ["https://github.com/rtp-agency"],
    knowsAbout: [
      "AI consulting",
      "AI cost optimization",
      "reducing AI costs",
      "AI deployment",
      "multi-agent AI systems",
      "LLM orchestration",
      "production AI reliability",
    ],
    serviceType: [
      "AI consulting",
      "AI cost optimization",
      "AI deployment",
      "AI system reliability",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "AI services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AI cost optimization",
            description:
              "We cut AI costs by 80–99% by replacing overpriced parts of the stack with cheaper, same-quality alternatives.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AI system reliability",
            description:
              "We make AI reliable in complex multi-step production tasks through multi-agent architecture and verification layers.",
          },
        },
      ],
    },
  },
};
