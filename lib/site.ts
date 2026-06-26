import type { Lang } from "./i18n";

// Scrolling credibility strip — technical names, language-neutral. Shown low on
// the page as proof for technical readers, not in the hero.
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
  does: string[];
  audience: string;
  result: string;
  visual: "replies" | "content" | "assistant";
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
  offerAudienceLabel: string;
  offerResultLabel: string;
  processEyebrow: string;
  processHeading: string;
  whyEyebrow: string;
  whyHeading: string;
  whyText: string;
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
  ctaContactPrefix: string;
  priceNote: string;
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
    heroTitle: {
      pre: "Автоматизуємо ",
      em: "рутину вашого бізнесу",
      post: " за допомогою ШІ.",
    },
    heroLead:
      "Беремо процес, який з'їдає найбільше часу, і налаштовуємо так, щоб його робив ШІ. Надійно й недорого.",
    heroCtaPrimary: "Безкоштовний розбір: що автоматизувати першим",
    heroCtaSecondary: "Подивитись приклади",
    offersEyebrow: "Що ми робимо",
    offersHeading: "Що ми автоматизуємо.",
    offersLead:
      "Беремо один конкретний процес — і робимо так, щоб він працював сам. Дешево, надійно і там, де вам зручно.",
    offerDoesLabel: "Що це дає",
    offerAudienceLabel: "Кому",
    offerResultLabel: "Результат",
    processEyebrow: "Як ми працюємо",
    processHeading: "Розбір, рішення, підтримка.",
    whyEyebrow: "Чому ми",
    whyHeading: "Чому це працює.",
    whyText:
      "ШІ не вигадує — ми додаємо перевірки, тож результату можна довіряти. Рішення дешеве в експлуатації і живе там, де вам зручно — часто прямо у Telegram. Складне завжди передається людині.",
    workEyebrow: "Кейси",
    workHeading: "Що ми вже автоматизували.",
    additionalEyebrow: "Також зробили",
    additionalHeading: "Інші проєкти.",
    testimonialsEyebrow: "Клієнти",
    testimonialsHeading: "Що кажуть клієнти.",
    ctaEyebrow: "Безкоштовно, без зобов'язань",
    ctaHeading: "Безкоштовний 30-хвилинний розбір.",
    ctaLead:
      "Покажемо, який процес вам найвигідніше віддати ШІ — і скільки це заощадить часу та грошей. Без втюхування, просто чесна діагностика.",
    auditList: [
      "Знайдемо процес із найбільшим потенціалом автоматизації",
      "Оцінимо економію часу та грошей у цифрах",
      "Дамо план: з чого почати",
    ],
    ctaButton: "Записатися на розбір",
    ctaContactPrefix: "або напишіть:",
    priceNote:
      "Вартість залежить від процесу — порахуємо на безкоштовному розборі.",
    cycle: [
      { n: "01", label: "Розбір", desc: "Знаходимо процес, рахуємо економію" },
      { n: "02", label: "Рішення", desc: "Налаштовуємо під ваш процес" },
      { n: "03", label: "Запуск", desc: "Запускаємо й супроводжуємо" },
    ],
  },
  stats: [
    {
      value: 99,
      prefix: "",
      suffix: "%+",
      label: "Зниження вартості процесу проти ручної роботи / готових сервісів",
    },
    { value: 30, prefix: "$", suffix: "K+", label: "Заощаджено клієнтам за рік" },
    { value: 10, prefix: "", suffix: "+", label: "Систем у продакшені в клієнтів" },
  ],
  offers: [
    {
      num: "01",
      name: "Спілкування з клієнтами та обробка заявок",
      promise: "Жодна заявка не загубиться, відповідь — за секунди.",
      does: [
        "ШІ-помічник відповідає клієнтам у Telegram, на сайті чи в Instagram — 24/7",
        "Приймає й кваліфікує заявки, передає менеджеру тільки те, що потребує людини",
        "Веде історію спілкування у вашій CRM",
      ],
      audience: "агентства, клініки, інтернет-магазини, сфера послуг",
      result:
        "швидші відповіді, менше навантаження на команду, більше доведених до продажу заявок",
      visual: "replies",
    },
    {
      num: "02",
      name: "Контент і рутина на потоці",
      promise: "Більше контенту і менше ручної роботи — тим самим складом.",
      does: [
        "Генеруємо пости, описи товарів, розсилки під ваш стиль",
        "Готуємо типові документи та звіти автоматично",
        "Додаємо перевірку якості, щоб результат був стабільним",
      ],
      audience: "магазини, агентства, онлайн-школи",
      result: "у рази більше контенту і закритої рутини без нового найму",
      visual: "content",
    },
    {
      num: "03",
      name: "ШІ-помічник, підключений до ваших систем",
      promise: "Цифровий співробітник, який сам робить рутину.",
      does: [
        "Підключаємо помічника до вашої CRM, таблиць, диска й Telegram",
        "Він сам дістає дані, готує відповіді й документи, виконує дії",
        "Працює надійно (з перевіркою) і дешево в експлуатації",
      ],
      audience: "будь-який бізнес із великою ручною операційкою",
      result: "рутину закрито без додаткового найму",
      visual: "assistant",
    },
  ],
  process: [
    {
      num: "01",
      title: "Розбір",
      icon: "scan",
      body: "Знаходимо процес із найбільшою віддачею і рахуємо, скільки він заощадить. Безкоштовно.",
    },
    {
      num: "02",
      title: "Збираємо під ключ",
      icon: "graph",
      body: "Налаштовуємо рішення під ваш процес і ваші інструменти.",
    },
    {
      num: "03",
      title: "Запуск і підтримка",
      icon: "check",
      body: "Запускаємо, навчаємо команду і далі супроводжуємо.",
    },
  ],
  work: [
    {
      slug: "metra-ai",
      number: "01 — Metra AI",
      title: "Production-SaaS для автоматизації контенту в Telegram",
      meta: ["RTP Agency", "Працює в продакшені", "metra-ai.org"],
      summary:
        "Автоматизували створення і публікацію контенту в Telegram-каналах. Команда випускає в рази більше постів тим самим складом.",
      highlights: [
        { number: "3 міс", label: "Від старту розробки до запуску" },
        { number: "16", label: "Docker-контейнерів у продакшені" },
      ],
      tech: "FastAPI · React · PostgreSQL · Multi-agent LLM",
    },
    {
      slug: "open-source-lipsync",
      number: "02 — Ліпсинк-система",
      title: "Зниження витрат на 99%+ проти преміум відео-ШІ",
      meta: ["RTP Agency", "6+ місяців у продакшені", "3+ комерційних впроваджень"],
      summary:
        "Замінили дорогий відео-сервіс на власне рішення — вартість відео впала з доларів до центів, без втрати якості.",
      highlights: [
        { number: "99%+", label: "Зниження витрат проти пропрієтарного API" },
        { number: "6+ міс", label: "Безперервно працює в продакшені" },
      ],
      tech: "ComfyUI · Infinity Talk · Wan 2.1 · Docker",
      costBar: { reduction: "99%+", afterPct: 2 },
    },
    {
      slug: "motion-control",
      number: "03 — Motion Control",
      title: "Зниження витрат на 84% — і можливості, яких немає у преміум-сервісів",
      meta: ["RTP Agency", "4–5 місяців у продакшені", "2 комерційні клієнти"],
      summary:
        "Власне рішення для відео замість преміум-сервісу: −84% до вартості й ~$12 000 економії на рік, плюс можливості, яких немає у готових сервісів.",
      highlights: [
        { number: "84%", label: "Зниження витрат на обсязі клієнта" },
        { number: "~$12K", label: "Річна економія на клієнта" },
      ],
      tech: "ComfyUI · Wan 2.2 · RunningHub · FFmpeg",
      costBar: { reduction: "84%", afterPct: 16 },
    },
    {
      slug: "video-localization",
      number: "04 — Локалізація відео",
      title: "Мультимодельний ШІ-пайплайн для локалізації відео на потоці",
      meta: ["RTP Agency", "3 місяці у продакшені"],
      summary:
        "Конвеєр, що сам перетворює одне відео на десятки локалізованих версій — менше $1 за 20-хвилинне відео замість годин ручної роботи.",
      highlights: [
        { number: "< $1", label: "За 20-хвилинне відео" },
        { number: "4+", label: "ШІ-сервісів у одній зв'язці" },
      ],
      tech: "Vertex AI · Whisper · Gemini · Qdrant",
    },
  ],
  additional: [
    {
      title: "Пайплайн AI Reels і бот генерації контенту",
      body: "Контент на потоці (100+ відео/год): motion-control воркфлоу та автоматичні варіації зображень.",
    },
    {
      title: "Інфраструктура Telegram-CRM (YappiGram)",
      body: "Мультиакаунтна CRM на Telethon/MTProto з рольовим доступом і шифрованим зберіганням.",
    },
    {
      title: "B2B-пайплайн аутрічу на ШІ",
      body: "Агрегатор лідів з LLM-оцінкою релевантності та персоналізованою генерацією повідомлень.",
    },
    {
      title: "Мультитенантна бот-платформа для фінтеху",
      body: "Інфраструктура Telegram-ботів зі строгою ізоляцією клієнтів, суб-ботами та мультивалютним обліком.",
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
    heroTitle: {
      pre: "We automate your ",
      em: "routine work",
      post: " with AI.",
    },
    heroLead:
      "We take the process that eats the most time and set it up so AI does it. Reliable and affordable.",
    heroCtaPrimary: "Free teardown: what to automate first",
    heroCtaSecondary: "See examples",
    offersEyebrow: "What we do",
    offersHeading: "What we automate.",
    offersLead:
      "We take one concrete process — and make it run by itself. Cheap, reliable, and right where it's convenient for you.",
    offerDoesLabel: "What you get",
    offerAudienceLabel: "For",
    offerResultLabel: "Result",
    processEyebrow: "How we work",
    processHeading: "Teardown, solution, support.",
    whyEyebrow: "Why us",
    whyHeading: "Why it works.",
    whyText:
      "AI doesn't make things up — we add checks, so you can trust the output. It's cheap to run and lives where you already work, often right in Telegram. Anything complex is handed to a human.",
    workEyebrow: "Case studies",
    workHeading: "What we've already automated.",
    additionalEyebrow: "Also built",
    additionalHeading: "Other projects.",
    testimonialsEyebrow: "Clients",
    testimonialsHeading: "What clients say.",
    ctaEyebrow: "Free, no strings attached",
    ctaHeading: "A free 30-minute teardown.",
    ctaLead:
      "We'll show which process is most worth handing to AI — and how much time and money it saves. No hard sell, just an honest diagnosis.",
    auditList: [
      "We'll find the process with the most automation potential",
      "We'll estimate the time and money saved, in numbers",
      "We'll give you a plan: where to start",
    ],
    ctaButton: "Book a teardown",
    ctaContactPrefix: "or write to us:",
    priceNote:
      "Pricing depends on the process — we'll work it out on the free teardown.",
    cycle: [
      { n: "01", label: "Teardown", desc: "Find the process, estimate savings" },
      { n: "02", label: "Solution", desc: "Set it up for your process" },
      { n: "03", label: "Launch", desc: "Ship it and support it" },
    ],
  },
  stats: [
    {
      value: 99,
      prefix: "",
      suffix: "%+",
      label: "Cut in process cost vs manual work / off-the-shelf tools",
    },
    { value: 30, prefix: "$", suffix: "K+", label: "Saved for clients in a year" },
    { value: 10, prefix: "", suffix: "+", label: "Systems in production for clients" },
  ],
  offers: [
    {
      num: "01",
      name: "Customer replies & inquiry handling",
      promise: "No lead gets lost, answers in seconds.",
      does: [
        "An AI assistant answers customers in Telegram, on your site or Instagram — 24/7",
        "Captures and qualifies inquiries, hands the manager only what needs a human",
        "Keeps the conversation history in your CRM",
      ],
      audience: "agencies, clinics, online stores, services",
      result:
        "faster replies, less load on the team, more inquiries closed to a sale",
      visual: "replies",
    },
    {
      num: "02",
      name: "Content & routine on autopilot",
      promise: "More output, less manual work — same headcount.",
      does: [
        "We generate posts, product descriptions and newsletters in your style",
        "We prepare routine documents and reports automatically",
        "We add quality checks so the output stays consistent",
      ],
      audience: "stores, agencies, online schools",
      result: "far more content and routine handled with no new hires",
      visual: "content",
    },
    {
      num: "03",
      name: "An AI assistant connected to your systems",
      promise: "A digital employee that does the routine itself.",
      does: [
        "We connect the assistant to your CRM, spreadsheets, drive and Telegram",
        "It pulls data, prepares replies and documents, and takes actions on its own",
        "Runs reliably (with checks) and is cheap to operate",
      ],
      audience: "any business with heavy manual operations",
      result: "the routine is handled with no extra hires",
      visual: "assistant",
    },
  ],
  process: [
    {
      num: "01",
      title: "Teardown",
      icon: "scan",
      body: "We find the highest-impact process and calculate how much it'll save. Free.",
    },
    {
      num: "02",
      title: "We build it turnkey",
      icon: "graph",
      body: "We set up the solution for your process and your tools.",
    },
    {
      num: "03",
      title: "Launch & support",
      icon: "check",
      body: "We launch it, train your team and keep supporting it.",
    },
  ],
  work: [
    {
      slug: "metra-ai",
      number: "01 — Metra AI",
      title: "Production SaaS for content automation in Telegram",
      meta: ["RTP Agency", "Live in production", "metra-ai.org"],
      summary:
        "Automated content creation and publishing for Telegram channels. The team ships far more posts with the same headcount.",
      highlights: [
        { number: "3 mo", label: "From dev start to launch" },
        { number: "16", label: "Docker containers in production" },
      ],
      tech: "FastAPI · React · PostgreSQL · Multi-agent LLM",
    },
    {
      slug: "open-source-lipsync",
      number: "02 — Lipsync system",
      title: "99%+ cost reduction vs premium video AI",
      meta: ["RTP Agency", "6+ months in production", "3+ commercial deployments"],
      summary:
        "Replaced an expensive video service with our own setup — video cost dropped from dollars to cents, with no loss in quality.",
      highlights: [
        { number: "99%+", label: "Cost reduction vs proprietary API" },
        { number: "6+ mo", label: "Running continuously in production" },
      ],
      tech: "ComfyUI · Infinity Talk · Wan 2.1 · Docker",
      costBar: { reduction: "99%+", afterPct: 2 },
    },
    {
      slug: "motion-control",
      number: "03 — Motion Control",
      title: "84% cost reduction — plus capabilities premium services don't offer",
      meta: ["RTP Agency", "4–5 months in production", "2 commercial clients"],
      summary:
        "An in-house video solution instead of a premium service: −84% cost and ~$12,000 saved per year, plus capabilities off-the-shelf services don't offer.",
      highlights: [
        { number: "84%", label: "Cost reduction at the client's volume" },
        { number: "~$12K", label: "Annual savings per client" },
      ],
      tech: "ComfyUI · Wan 2.2 · RunningHub · FFmpeg",
      costBar: { reduction: "84%", afterPct: 16 },
    },
    {
      slug: "video-localization",
      number: "04 — Video localization",
      title: "Multi-model AI pipeline for video localization at scale",
      meta: ["RTP Agency", "3 months in production"],
      summary:
        "A pipeline that turns one video into dozens of localized versions on its own — under $1 per 20-minute video instead of hours of manual work.",
      highlights: [
        { number: "< $1", label: "Per 20-minute video" },
        { number: "4+", label: "AI services in one pipeline" },
      ],
      tech: "Vertex AI · Whisper · Gemini · Qdrant",
    },
  ],
  additional: [
    {
      title: "AI Reels pipeline and content-generation bot",
      body: "Content at scale (100+ videos/hour): motion-control workflows and automatic image variations.",
    },
    {
      title: "Telegram CRM infrastructure (YappiGram)",
      body: "A multi-account CRM on Telethon/MTProto with role-based access and encrypted storage.",
    },
    {
      title: "AI-driven B2B outreach pipeline",
      body: "A lead aggregator with LLM relevance scoring and personalized message generation.",
    },
    {
      title: "Multi-tenant bot platform for fintech",
      body: "Telegram bot infrastructure with strict client isolation, sub-bots and multi-currency accounting.",
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
