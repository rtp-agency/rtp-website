import type { Lang } from "./i18n";

// Scrolling credibility strip under the hero — technical names, language-neutral.
export const marqueeTech = [
  "Multi-agent LLM",
  "FastAPI",
  "React",
  "ComfyUI",
  "Whisper",
  "Gemini",
  "Vertex AI",
  "Qdrant",
  "Wan 2.2",
  "FFmpeg",
  "Docker",
  "PostgreSQL",
  "Celery",
  "Redis",
];

export type Offer = {
  num: string;
  name: string;
  promise: string;
  problem: string;
  does: string[];
  metric: string;
  metricLabel: string;
  visual: "cost" | "reliability";
};

export type Stat = {
  value: number;
  prefix: string;
  suffix: string;
  label: string;
};

export type ProcessStep = {
  num: string;
  title: string;
  icon: "scan" | "graph" | "check";
  body: string;
};

export type WorkItem = {
  slug: string;
  number: string;
  title: string;
  meta: string[];
  summary: string;
  highlights: { number: string; label: string }[];
  tech: string;
  costBar?: { reduction: string; afterPct: number };
};

export type Additional = { title: string; body: string };

export type Testimonial = {
  avatar: string;
  name: string;
  title: string;
  quote: string;
  large?: boolean;
  list?: string[];
  quote2?: string;
  link?: string;
};

export type CycleStep = { n: string; label: string; desc: string };

export type Home = {
  heroTitle: { pre: string; em: string; post: string };
  heroLead: string;
  heroCtaPrimary: string;
  heroCtaSecondary: string;
  offersEyebrow: string;
  offersHeading: string;
  offersLead: string;
  offerDoesLabel: string;
  processEyebrow: string;
  processHeading: string;
  workEyebrow: string;
  workHeading: string;
  additionalEyebrow: string;
  additionalHeading: string;
  testimonialsEyebrow: string;
  testimonialsHeading: string;
  ctaEyebrow: string;
  ctaHeading: string;
  ctaLead: string;
  auditList: string[];
  ctaButton: string;
  ctaOr: string;
  cycle: CycleStep[];
};

export type SiteContent = {
  home: Home;
  stats: Stat[];
  offers: Offer[];
  process: ProcessStep[];
  work: WorkItem[];
  additional: Additional[];
  testimonials: Testimonial[];
};

const uk: SiteContent = {
  home: {
    heroTitle: { pre: "Платіть за ШІ ", em: "у рази менше", post: "." },
    heroLead:
      "Скорочуємо витрати компаній на ШІ — і робимо його надійним там, де він зазвичай дає збої.",
    heroCtaPrimary: "Безкоштовний аудит витрат на ШІ",
    heroCtaSecondary: "Дивитися кейси",
    offersEyebrow: "Чим допомагаємо",
    offersHeading: "Дві послуги — обидві робимо на максимум.",
    offersLead:
      "Без абстрактного «ШІ-консалтингу». Два напрями зі зрозумілим результатом: рахунок менший — і ШІ, якому можна довіряти.",
    offerDoesLabel: "Що робимо",
    processEyebrow: "Як ми працюємо",
    processHeading: "Аудит, архітектура, результат.",
    workEyebrow: "Обрані кейси",
    workHeading: "ШІ-системи в продакшені.",
    additionalEyebrow: "Також зробили",
    additionalHeading: "Інші інженерні проєкти.",
    testimonialsEyebrow: "Клієнти",
    testimonialsHeading: "Що кажуть клієнти.",
    ctaEyebrow: "Безкоштовно, без зобов'язань",
    ctaHeading: "Безкоштовний 30-хвилинний аудит витрат на ШІ.",
    ctaLead:
      "Покажемо, скільки реально можна заощадити на ШІ і як зробити його надійнішим. Без втюхування — просто чесна діагностика.",
    auditList: [
      "Розбір вашого поточного ШІ-стека і куди йдуть гроші",
      "Конкретні місця, де ви переплачуєте",
      "1–3 конкретні, дешевші альтернативи під вашу задачу",
      "Оцінка потенційної річної економії",
    ],
    ctaButton: "Записатися на безкоштовний аудит",
    ctaOr: "або напишіть нам",
    cycle: [
      { n: "01", label: "Аудит", desc: "Аналізуємо стек, знаходимо втрати" },
      {
        n: "02",
        label: "Архітектура",
        desc: "Проєктуємо дешеву надійну систему",
      },
      { n: "03", label: "Запуск", desc: "Викочуємо в продакшен, доводимо" },
    ],
  },
  stats: [
    { value: 99, prefix: "", suffix: "%+", label: "Максимальне зниження витрат на ШІ" },
    { value: 30, prefix: "$", suffix: "K+", label: "Заощадили клієнтам на ШІ-інфраструктурі за рік" },
    { value: 10, prefix: "", suffix: "+", label: "Різних систем у продакшені в клієнтів" },
  ],
  offers: [
    {
      num: "01",
      name: "Оптимізація витрат на ШІ",
      promise: "Різко скорочуємо витрати на ШІ — без втрати якості.",
      problem:
        "Більшість команд переплачують за ШІ в рази й навіть не вимірюють, де саме.",
      does: [
        "Знаходимо, де у стеку витікають гроші",
        "Замінюємо дорогі компоненти на дешеві аналоги",
        "Показуємо економію в цифрах",
      ],
      metric: "80–99%",
      metricLabel: "економія на ШІ",
      visual: "cost",
    },
    {
      num: "02",
      name: "Надійність ШІ-систем",
      promise: "Змушуємо ШІ працювати стабільно там, де він зазвичай ламається.",
      problem:
        "У демо все гарно, а на обсязі — галюцинації та нестабільність.",
      does: [
        "Знаходимо, де ШІ дає збої",
        "Розбиваємо складні задачі на чіткі кроки",
        "Додаємо перевірки та обмежувачі",
      ],
      metric: "−90%",
      metricLabel: "менше помилок",
      visual: "reliability",
    },
  ],
  process: [
    {
      num: "01",
      title: "Аудит",
      icon: "scan",
      body: "Показуємо в цифрах, куди йдуть гроші на ШІ і де моделі дають збої — ще до того, як платити за рішення.",
    },
    {
      num: "02",
      title: "Архітектура",
      icon: "graph",
      body: "Проєктуємо найдешевший стек, що тримає вашу планку якості, і надійну оркестрацію моделей.",
    },
    {
      num: "03",
      title: "Запуск і результат",
      icon: "check",
      body: "Збираємо під ключ, запускаємо в продакшен і показуємо результат «до/після» — за ціною та надійністю.",
    },
  ],
  work: [
    {
      slug: "open-source-lipsync",
      number: "01 — Ліпсинк-система",
      title: "Зниження витрат на 99%+ проти преміум відео-ШІ",
      meta: ["RTP Agency", "6+ місяців у продакшені", "3+ комерційних впроваджень"],
      summary:
        "Замінили преміум відео-ШІ ($3–5/хв) на кастомний ComfyUI-воркфлоу (Infinity Talk + Wan 2.1). Вартість відео впала з доларів до центів.",
      highlights: [
        { number: "99%+", label: "Зниження витрат проти пропрієтарного API" },
        { number: "6+ міс", label: "Безперервно працює в продакшені" },
      ],
      tech: "ComfyUI · Infinity Talk · Wan 2.1 · Docker",
      costBar: { reduction: "99%+", afterPct: 2 },
    },
    {
      slug: "motion-control",
      number: "02 — Motion Control",
      title: "Зниження витрат на 84% — і можливості, яких немає у преміум-сервісів",
      meta: ["RTP Agency", "4–5 місяців у продакшені", "2 комерційні клієнти"],
      summary:
        "Замінили преміум motion-control на кастомний ComfyUI-воркфлоу на Wan 2.2. ~$12 000 економії на рік на обсягах клієнта.",
      highlights: [
        { number: "84%", label: "Зниження витрат на обсязі клієнта" },
        { number: "~$12K", label: "Річна економія на клієнта" },
      ],
      tech: "ComfyUI · Wan 2.2 · RunningHub · FFmpeg",
      costBar: { reduction: "84%", afterPct: 16 },
    },
    {
      slug: "video-localization",
      number: "03 — Локалізація відео",
      title: "Мультимодельний ШІ-пайплайн для локалізації відео на потоці",
      meta: ["RTP Agency", "3 місяці у продакшені"],
      summary:
        "Мультимодельний пайплайн: семантичні ембединги, транскрибація мовлення на власному хостингу, переписування сценарію на LLM і багатомовний синтез голосу.",
      highlights: [
        { number: "< $1", label: "За 20-хвилинне відео" },
        { number: "4+", label: "ШІ-сервісів у одній зв'язці" },
      ],
      tech: "Vertex AI · Whisper · Gemini · Qdrant",
    },
    {
      slug: "metra-ai",
      number: "04 — Metra AI",
      title: "Production-SaaS для автоматизації контенту в Telegram",
      meta: ["RTP Agency", "Працює в продакшені", "metra-ai.org"],
      summary:
        "SaaS під ключ для автоматизації контенту в Telegram-каналах. Мультиагентна LLM-оркестрація з перехресною перевіркою, що відсікає типові збої ШІ.",
      highlights: [
        { number: "3 міс", label: "Від старту розробки до запуску" },
        { number: "16", label: "Docker-контейнерів у продакшені" },
      ],
      tech: "FastAPI · React · PostgreSQL · Multi-agent LLM",
    },
  ],
  additional: [
    {
      title: "Пайплайн AI Reels і бот генерації контенту",
      body: "Контент на потоці (100+ відео/год): motion-control воркфлоу та автоматичні варіації зображень.",
    },
    {
      title: "Мультитенантна бот-платформа для фінтеху",
      body: "Інфраструктура Telegram-ботів зі строгою ізоляцією клієнтів, суб-ботами та мультивалютним обліком.",
    },
    {
      title: "B2B-пайплайн аутрічу на ШІ",
      body: "Агрегатор лідів з LLM-оцінкою релевантності та персоналізованою генерацією повідомлень.",
    },
    {
      title: "Інфраструктура Telegram-CRM (YappiGram)",
      body: "Мультиакаунтна CRM на Telethon/MTProto з рольовим доступом і шифрованим зберіганням.",
    },
    {
      title: "Інструмент обробки відеоконтенту",
      body: "Медіа-пайплайн на FFmpeg з 60+ режимами трансформації для масової варіації відео.",
    },
    {
      title: "Інтеграція прийому платежів",
      body: "Прийом платежів через Stripe, PayPal і CryptoCloud з автогенерацією чеків.",
    },
  ],
  testimonials: [
    {
      avatar: "D",
      name: "Daniel",
      title: "Власник, агентство цифрового медіа",
      large: true,
      quote:
        "RTP Agency незамінні, коли треба зібрати складні ШІ-воркфлоу для зображень і відео. Завжди на зв'язку і вирішують задачі швидко.",
    },
    {
      avatar: "M",
      name: "Mark",
      title: "Власник, агентство з виробництва контенту",
      quote:
        "Будь-яке питання щодо ШІ чи інженерії — вирішено. Стабільно знаходять дешевші варіанти під наші задачі. Рекомендую.",
    },
    {
      avatar: "A",
      name: "A.",
      title: "Засновник, медіа-агентство",
      quote:
        "Довго шукав таке ШІ-рішення — і тут з'явилися ви. Сильна команда з чітким баченням, завжди на зв'язку і тримають слово. З вами легко працювати.",
    },
    {
      avatar: "Y",
      name: "Yappi Agency",
      title: "Креативне дизайн-агентство",
      link: "https://yappi-agency.com",
      quote:
        "RTP допомогли з купою задач з автоматизації. Беруть ініціативу, чесно оцінюють роботу і виправляють проблеми навіть після здачі — без доплат. Реально вирішують задачу, а не просто виставляють рахунок.",
    },
  ],
};

const en: SiteContent = {
  home: {
    heroTitle: { pre: "Pay ", em: "far less", post: " for AI." },
    heroLead:
      "We cut companies' AI costs — and make it reliable where it usually fails.",
    heroCtaPrimary: "Free AI cost audit",
    heroCtaSecondary: "View case studies",
    offersEyebrow: "How we help",
    offersHeading: "Two services — both done right.",
    offersLead:
      'No vague "AI consulting." Two focused services with clear outcomes: a smaller bill — and AI you can trust.',
    offerDoesLabel: "What we do",
    processEyebrow: "How we work",
    processHeading: "Audit, architecture, results.",
    workEyebrow: "Selected case studies",
    workHeading: "AI systems in production.",
    additionalEyebrow: "Also built",
    additionalHeading: "Other engineering projects.",
    testimonialsEyebrow: "Clients",
    testimonialsHeading: "What clients say.",
    ctaEyebrow: "Free, no strings attached",
    ctaHeading: "A free 30-minute AI cost audit.",
    ctaLead:
      "We'll show how much you can realistically save on AI and how to make it more reliable. No hard sell — just an honest diagnosis.",
    auditList: [
      "A breakdown of your current AI stack and where the money goes",
      "The specific places where you overpay",
      "1–3 specific, cheaper alternatives for your case",
      "An estimate of your potential annual savings",
    ],
    ctaButton: "Book a free audit",
    ctaOr: "or write to us",
    cycle: [
      { n: "01", label: "Audit", desc: "Analyze the stack, find the leaks" },
      {
        n: "02",
        label: "Architecture",
        desc: "Design a cheap, reliable system",
      },
      { n: "03", label: "Launch", desc: "Ship to production, prove it" },
    ],
  },
  stats: [
    { value: 99, prefix: "", suffix: "%+", label: "Maximum AI cost reduction" },
    { value: 30, prefix: "$", suffix: "K+", label: "Saved on clients' AI infrastructure in a year" },
    { value: 10, prefix: "", suffix: "+", label: "Different systems running in production" },
  ],
  offers: [
    {
      num: "01",
      name: "AI cost optimization",
      promise: "We slash AI costs — without losing quality.",
      problem:
        "Most teams overpay for AI many times over and don't even measure where.",
      does: [
        "Find where money leaks in the stack",
        "Swap expensive components for cheaper equivalents",
        "Show the savings in numbers",
      ],
      metric: "80–99%",
      metricLabel: "saved on AI",
      visual: "cost",
    },
    {
      num: "02",
      name: "AI system reliability",
      promise: "We make AI run stably where it usually breaks.",
      problem:
        "Demos look great; at volume it's hallucinations and instability.",
      does: [
        "Find where AI fails",
        "Break complex tasks into clear steps",
        "Add checks and guardrails",
      ],
      metric: "−90%",
      metricLabel: "fewer errors",
      visual: "reliability",
    },
  ],
  process: [
    {
      num: "01",
      title: "Audit",
      icon: "scan",
      body: "We show in numbers where AI money goes and where models fail — before you pay for a solution.",
    },
    {
      num: "02",
      title: "Architecture",
      icon: "graph",
      body: "We design the cheapest stack that holds your quality bar, plus reliable model orchestration.",
    },
    {
      num: "03",
      title: "Launch & results",
      icon: "check",
      body: "We build turnkey, ship to production and show before/after results — on cost and reliability.",
    },
  ],
  work: [
    {
      slug: "open-source-lipsync",
      number: "01 — Lipsync system",
      title: "99%+ cost reduction vs premium video AI",
      meta: ["RTP Agency", "6+ months in production", "3+ commercial deployments"],
      summary:
        "Replaced premium video AI ($3–5/min) with a custom ComfyUI workflow (Infinity Talk + Wan 2.1). Video cost dropped from dollars to cents.",
      highlights: [
        { number: "99%+", label: "Cost reduction vs proprietary API" },
        { number: "6+ mo", label: "Running continuously in production" },
      ],
      tech: "ComfyUI · Infinity Talk · Wan 2.1 · Docker",
      costBar: { reduction: "99%+", afterPct: 2 },
    },
    {
      slug: "motion-control",
      number: "02 — Motion Control",
      title: "84% cost reduction — plus capabilities premium services don't offer",
      meta: ["RTP Agency", "4–5 months in production", "2 commercial clients"],
      summary:
        "Replaced premium motion control with a custom ComfyUI workflow on Wan 2.2. ~$12,000 saved per year at the client's volume.",
      highlights: [
        { number: "84%", label: "Cost reduction at the client's volume" },
        { number: "~$12K", label: "Annual savings per client" },
      ],
      tech: "ComfyUI · Wan 2.2 · RunningHub · FFmpeg",
      costBar: { reduction: "84%", afterPct: 16 },
    },
    {
      slug: "video-localization",
      number: "03 — Video localization",
      title: "Multi-model AI pipeline for video localization at scale",
      meta: ["RTP Agency", "3 months in production"],
      summary:
        "A multi-model pipeline: semantic embeddings, self-hosted speech transcription, LLM script rewriting and multilingual voice synthesis.",
      highlights: [
        { number: "< $1", label: "Per 20-minute video" },
        { number: "4+", label: "AI services in one pipeline" },
      ],
      tech: "Vertex AI · Whisper · Gemini · Qdrant",
    },
    {
      slug: "metra-ai",
      number: "04 — Metra AI",
      title: "Production SaaS for content automation in Telegram",
      meta: ["RTP Agency", "Live in production", "metra-ai.org"],
      summary:
        "A turnkey SaaS for content automation in Telegram channels. Multi-agent LLM orchestration with cross-checking that cuts out typical AI failures.",
      highlights: [
        { number: "3 mo", label: "From dev start to launch" },
        { number: "16", label: "Docker containers in production" },
      ],
      tech: "FastAPI · React · PostgreSQL · Multi-agent LLM",
    },
  ],
  additional: [
    {
      title: "AI Reels pipeline and content-generation bot",
      body: "Content at scale (100+ videos/hour): motion-control workflows and automatic image variations.",
    },
    {
      title: "Multi-tenant bot platform for fintech",
      body: "Telegram bot infrastructure with strict client isolation, sub-bots and multi-currency accounting.",
    },
    {
      title: "AI-driven B2B outreach pipeline",
      body: "A lead aggregator with LLM relevance scoring and personalized message generation.",
    },
    {
      title: "Telegram CRM infrastructure (YappiGram)",
      body: "A multi-account CRM on Telethon/MTProto with role-based access and encrypted storage.",
    },
    {
      title: "Video-content processing tool",
      body: "An FFmpeg media pipeline with 60+ transformation modes for mass video variation.",
    },
    {
      title: "Payment-acceptance integration",
      body: "Payment acceptance via Stripe, PayPal and CryptoCloud with automatic receipts.",
    },
  ],
  testimonials: [
    {
      avatar: "D",
      name: "Daniel",
      title: "Owner, digital media agency",
      large: true,
      quote:
        "RTP Agency are indispensable when you need to build complex AI workflows for images and video. Always reachable and they solve things fast.",
    },
    {
      avatar: "M",
      name: "Mark",
      title: "Owner, content production agency",
      quote:
        "Any AI or engineering question — solved. They consistently find cheaper options for our needs. Recommended.",
    },
    {
      avatar: "A",
      name: "A.",
      title: "Founder, media agency",
      quote:
        "I'd been looking for an AI solution like this for a long time — then you showed up. A strong team with a clear vision, always reachable and true to their word. Easy to work with.",
    },
    {
      avatar: "Y",
      name: "Yappi Agency",
      title: "Creative design agency",
      link: "https://yappi-agency.com",
      quote:
        "RTP helped with a ton of automation tasks. They take initiative, price work honestly and fix issues even after delivery — at no extra charge. They actually solve the problem instead of just billing you.",
    },
  ],
};

export const siteByLang: Record<Lang, SiteContent> = { uk, en };

export function getSite(lang: Lang): SiteContent {
  return siteByLang[lang];
}
