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
    stickyCta: "Написати нам",
    form: {
      name: "Ваше ім'я",
      business: "Бізнес / ніша",
      message: "Який процес хочете автоматизувати?",
      contact: "Контакт: Telegram / email / телефон",
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
    stickyCta: "Get in touch",
    form: {
      name: "Your name",
      business: "Business / niche",
      message: "Which process do you want to automate?",
      contact: "Contact: Telegram / email / phone",
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
    title: "RTP Agency — автоматизація бізнес-процесів за допомогою ШІ",
    description:
      "Автоматизуємо рутину вашого бізнесу: заявки, відповіді клієнтам, контент, документи, звіти. Надійно, недорого і у звичних вам інструментах. Безкоштовний розбір.",
    keywords: [
      "автоматизація бізнес-процесів",
      "ШІ для бізнесу",
      "автоматизація заявок",
      "чат-бот підтримки",
      "автоматизація контенту",
      "ШІ-помічник",
      "автоматизація для малого бізнесу",
      "Telegram-бот для бізнесу",
      "RTP Agency",
    ],
    ogTitle: "RTP Agency — автоматизація бізнес-процесів за допомогою ШІ",
    ogDescription:
      "Автоматизуємо рутину вашого бізнесу: заявки, відповіді клієнтам, контент, документи, звіти. Надійно, недорого і у звичних вам інструментах.",
    twitterDescription:
      "Автоматизуємо рутину вашого бізнесу за допомогою ШІ. Безкоштовний розбір.",
    ogAlt: "RTP Agency — автоматизація бізнес-процесів за допомогою ШІ",
    ogHeroLine1: "Автоматизуємо рутину",
    ogHeroLine2: "бізнесу за допомогою ШІ.",
    ogTagline: "Автоматизація бізнес-процесів за допомогою ШІ",
    ogCta: "Безкоштовний розбір →",
    caseOgTagline: "Автоматизація бізнес-процесів",
    caseFallback: "Кейс",
  },
  en: {
    title: "RTP Agency — AI business-process automation",
    description:
      "We automate your business's routine work: inquiries, customer replies, content, documents, reports. Reliable, affordable, right inside the tools you already use. Free teardown.",
    keywords: [
      "business process automation",
      "AI for business",
      "inquiry automation",
      "support chatbot",
      "content automation",
      "AI assistant",
      "automation for small business",
      "Telegram bot for business",
      "RTP Agency",
    ],
    ogTitle: "RTP Agency — AI business-process automation",
    ogDescription:
      "We automate your business's routine work: inquiries, customer replies, content, documents, reports. Reliable, affordable, inside the tools you already use.",
    twitterDescription:
      "We automate your business's routine work with AI. Free teardown.",
    ogAlt: "RTP Agency — AI business-process automation",
    ogHeroLine1: "We automate your",
    ogHeroLine2: "business's routine with AI.",
    ogTagline: "AI business-process automation",
    ogCta: "Free teardown →",
    caseOgTagline: "Business-process automation",
    caseFallback: "Case study",
  },
} as const;

// JSON-LD structured data, localized.
export const jsonLdByLang: Record<Lang, Record<string, unknown>> = {
  uk: {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://rtp-agency.com/#service",
    name: "RTP Agency — автоматизація бізнес-процесів за допомогою ШІ",
    url: "https://rtp-agency.com",
    description:
      "Автоматизуємо рутинні бізнес-процеси за допомогою ШІ: обробка заявок, відповіді клієнтам, контент, документи та звіти. Надійно, недорого і у звичних інструментах.",
    image: "https://rtp-agency.com/uk/opengraph-image",
    priceRange: "$$",
    areaServed: "Ukraine",
    sameAs: ["https://github.com/rtp-agency"],
    knowsAbout: [
      "автоматизація бізнес-процесів",
      "ШІ для бізнесу",
      "автоматизація заявок",
      "чат-бот підтримки",
      "автоматизація контенту",
      "ШІ-помічник",
      "Telegram-бот для бізнесу",
    ],
    serviceType: [
      "Автоматизація бізнес-процесів",
      "Чат-бот підтримки клієнтів",
      "Автоматизація контенту",
      "ШІ-помічник для бізнесу",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Послуги автоматизації",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Спілкування з клієнтами та обробка заявок",
            description:
              "ШІ-помічник відповідає клієнтам 24/7, приймає й кваліфікує заявки та передає менеджеру лише те, що потребує людини.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Контент і рутина на потоці",
            description:
              "Генеруємо пости, описи товарів і розсилки під ваш стиль, готуємо типові документи та звіти автоматично — з перевіркою якості.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "ШІ-помічник, підключений до ваших систем",
            description:
              "Цифровий співробітник, підключений до вашої CRM, таблиць і Telegram, який сам готує відповіді та документи й виконує дії.",
          },
        },
      ],
    },
  },
  en: {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://rtp-agency.com/#service",
    name: "RTP Agency — AI business-process automation",
    url: "https://rtp-agency.com",
    description:
      "We automate routine business processes with AI: inquiry handling, customer replies, content, documents and reports. Reliable, affordable and inside the tools you already use.",
    image: "https://rtp-agency.com/en/opengraph-image",
    priceRange: "$$",
    areaServed: "Ukraine",
    sameAs: ["https://github.com/rtp-agency"],
    knowsAbout: [
      "business process automation",
      "AI for business",
      "inquiry automation",
      "support chatbot",
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
            name: "Customer replies & inquiry handling",
            description:
              "An AI assistant answers customers 24/7, captures and qualifies inquiries, and hands the manager only what needs a human.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Content & routine on autopilot",
            description:
              "We generate posts, product descriptions and newsletters in your style and prepare routine documents and reports automatically — with quality checks.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "An AI assistant connected to your systems",
            description:
              "A digital employee connected to your CRM, spreadsheets and Telegram that prepares replies and documents and takes actions on its own.",
          },
        },
      ],
    },
  },
};
