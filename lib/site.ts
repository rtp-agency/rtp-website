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

export const home: Home = {
  heroTitle: {
    pre: "Автоматизируем ",
    em: "рутину вашего бизнеса",
    post: " с помощью ИИ.",
  },
  heroLead:
    "Берём процесс, который съедает больше всего времени, и настраиваем так, чтобы его делал ИИ. Надёжно и недорого.",
  heroCtaPrimary: "Бесплатный разбор: что автоматизировать первым",
  heroCtaSecondary: "Посмотреть примеры",
  offersEyebrow: "Что мы делаем",
  offersHeading: "Что мы автоматизируем.",
  offersLead:
    "Берём один конкретный процесс — и делаем так, чтобы он работал сам. Дёшево, надёжно и там, где вам удобно.",
  offerDoesLabel: "Что это даёт",
  offerAudienceLabel: "Кому",
  offerResultLabel: "Результат",
  processEyebrow: "Как мы работаем",
  processHeading: "Разбор, решение, поддержка.",
  whyEyebrow: "Почему мы",
  whyHeading: "Почему это работает.",
  whyText:
    "ИИ не выдумывает — мы добавляем проверки, поэтому результату можно доверять. Решение дёшево в эксплуатации и живёт там, где вам удобно — часто прямо в Telegram. Сложное всегда передаётся человеку.",
  workEyebrow: "Кейсы",
  workHeading: "Что мы уже автоматизировали.",
  additionalEyebrow: "Также сделали",
  additionalHeading: "Другие проекты.",
  testimonialsEyebrow: "Клиенты",
  testimonialsHeading: "Что говорят клиенты.",
  ctaEyebrow: "Бесплатно, без обязательств",
  ctaHeading: "Бесплатный 30-минутный разбор.",
  ctaLead:
    "Покажем, какой процесс вам выгоднее всего отдать ИИ — и сколько это сэкономит времени и денег. Без навязывания, просто честная диагностика.",
  auditList: [
    "Найдём процесс с наибольшим потенциалом автоматизации",
    "Оценим экономию времени и денег в цифрах",
    "Дадим план: с чего начать",
  ],
  ctaButton: "Записаться на разбор",
  ctaContactPrefix: "или напишите:",
  priceNote:
    "Стоимость зависит от процесса — посчитаем на бесплатном разборе.",
  cycle: [
    { n: "01", label: "Разбор", desc: "Находим процесс, считаем экономию" },
    { n: "02", label: "Решение", desc: "Настраиваем под ваш процесс" },
    { n: "03", label: "Запуск", desc: "Запускаем и сопровождаем" },
  ],
};

export const stats: Stat[] = [
  {
    value: 99,
    prefix: "",
    suffix: "%+",
    label: "Снижение стоимости процесса против ручной работы / готовых сервисов",
  },
  { value: 30, prefix: "$", suffix: "K+", label: "Сэкономлено клиентам за год" },
  { value: 10, prefix: "", suffix: "+", label: "Систем в продакшене у клиентов" },
];

export const offers: Offer[] = [
  {
    num: "01",
    name: "Общение с клиентами и обработка заявок",
    promise: "Ни одна заявка не потеряется, ответ — за секунды.",
    does: [
      "ИИ-помощник отвечает клиентам в Telegram, на сайте или в Instagram — 24/7",
      "Принимает и квалифицирует заявки, передаёт менеджеру только то, что требует человека",
      "Ведёт историю общения в вашей CRM",
    ],
    audience: "агентства, клиники, интернет-магазины, сфера услуг",
    result:
      "более быстрые ответы, меньше нагрузки на команду, больше доведённых до продажи заявок",
    visual: "replies",
  },
  {
    num: "02",
    name: "Контент и рутина на потоке",
    promise: "Больше контента и меньше ручной работы — тем же составом.",
    does: [
      "Генерируем посты, описания товаров, рассылки под ваш стиль",
      "Готовим типовые документы и отчёты автоматически",
      "Добавляем проверку качества, чтобы результат был стабильным",
    ],
    audience: "магазины, агентства, онлайн-школы",
    result: "в разы больше контента и закрытой рутины без новых наймов",
    visual: "content",
  },
  {
    num: "03",
    name: "ИИ-помощник, подключённый к вашим системам",
    promise: "Цифровой сотрудник, который сам делает рутину.",
    does: [
      "Подключаем помощника к вашей CRM, таблицам, диску и Telegram",
      "Он сам достаёт данные, готовит ответы и документы, выполняет действия",
      "Работает надёжно (с проверкой) и дёшево в эксплуатации",
    ],
    audience: "любой бизнес с большой ручной операционкой",
    result: "рутина закрыта без дополнительного найма",
    visual: "assistant",
  },
];

export const process: ProcessStep[] = [
  {
    num: "01",
    title: "Разбор",
    icon: "scan",
    body: "Находим процесс с наибольшей отдачей и считаем, сколько он сэкономит. Бесплатно.",
  },
  {
    num: "02",
    title: "Собираем под ключ",
    icon: "graph",
    body: "Настраиваем решение под ваш процесс и ваши инструменты.",
  },
  {
    num: "03",
    title: "Запуск и поддержка",
    icon: "check",
    body: "Запускаем, обучаем команду и дальше сопровождаем.",
  },
];

export const work: WorkItem[] = [
  {
    slug: "threads-content-system",
    number: "01 — Автономная контент-система",
    title: "Один пост — 770 000 просмотров, топ-1 на всём аккаунте",
    meta: ["RTP Agency", "Работает в продакшене", "Threads"],
    summary:
      "Автономная контент-система для Threads: сама ранжирует форматы по охвату, пишет в голосе автора, генерит реалистичные POV-визуалы и публикует по одному тапу одобрения. Ведение блога стало конвейером.",
    highlights: [
      { number: "770K", label: "Просмотров у одного поста · 35K лайков" },
      { number: "Топ-1", label: "Пост на аккаунте — в комментах Киевстар" },
    ],
    tech: "Python · FastAPI · Celery · pgvector · LLM · Threads API",
  },
  {
    slug: "black-camel",
    number: "02 — Black Camel Productions",
    title: "~1 час ручного монтажа на видео → ~3 минуты автоматически",
    meta: ["Управляемая услуга", "Лондонское видеоагентство", "25+ обработанных видео"],
    summary:
      "Управляемый конвейер для лондонского видеоагентства: на входе — сырые записи уроков, на выходе — готовые видео в стиле бренда. ИИ-чистка, пиксельно точное перекадрирование, утверждение вырезов человеком.",
    highlights: [
      { number: "~3 мин", label: "Автоматическая обработка (было ~1 ч вручную)" },
      { number: "25+", label: "Видео обработано, рассчитано на сотни" },
    ],
    tech: "Python · FFmpeg · OpenCV · Whisper · Gemini",
  },
  {
    slug: "metra-ai",
    number: "03 — Metra AI",
    title: "Production-SaaS для автоматизации контента в Telegram",
    meta: ["RTP Agency", "Работает в продакшене", "metra-ai.org"],
    summary:
      "Автоматизировали создание и публикацию контента в Telegram-каналах. Команда выпускает в разы больше постов тем же составом.",
    highlights: [
      { number: "3 мес", label: "От старта разработки до запуска" },
      { number: "16", label: "Docker-контейнеров в продакшене" },
    ],
    tech: "FastAPI · React · PostgreSQL · Multi-agent LLM",
  },
  {
    slug: "open-source-lipsync",
    number: "04 — Липсинк-система",
    title: "Снижение затрат на 99%+ против премиум видео-ИИ",
    meta: ["RTP Agency", "6+ месяцев в продакшене", "3+ коммерческих внедрений"],
    summary:
      "Заменили дорогой видео-сервис на собственное решение — стоимость видео упала с долларов до центов, без потери качества.",
    highlights: [
      { number: "99%+", label: "Снижение затрат против проприетарного API" },
      { number: "6+ мес", label: "Непрерывно работает в продакшене" },
    ],
    tech: "ComfyUI · Infinity Talk · Wan 2.1 · Docker",
    costBar: { reduction: "99%+", afterPct: 2 },
  },
  {
    slug: "motion-control",
    number: "05 — Motion Control",
    title: "Снижение затрат на 84% — и возможности, которых нет у премиум-сервисов",
    meta: ["RTP Agency", "4–5 месяцев в продакшене", "2 коммерческих клиента"],
    summary:
      "Собственное решение для видео вместо премиум-сервиса: −84% к стоимости и ~$12 000 экономии в год, плюс возможности, которых нет у готовых сервисов.",
    highlights: [
      { number: "84%", label: "Снижение затрат на объёме клиента" },
      { number: "~$12K", label: "Годовая экономия на клиента" },
    ],
    tech: "ComfyUI · Wan 2.2 · RunningHub · FFmpeg",
    costBar: { reduction: "84%", afterPct: 16 },
  },
  {
    slug: "video-localization",
    number: "06 — Локализация видео",
    title: "Мультимодельный ИИ-пайплайн для локализации видео на потоке",
    meta: ["RTP Agency", "3 месяца в продакшене"],
    summary:
      "Конвейер, который сам превращает одно видео в десятки локализованных версий — меньше $1 за 20-минутное видео вместо часов ручной работы.",
    highlights: [
      { number: "< $1", label: "За 20-минутное видео" },
      { number: "4+", label: "ИИ-сервисов в одной связке" },
    ],
    tech: "Vertex AI · Whisper · Gemini · Qdrant",
  },
];

export const additional: Additional[] = [
  {
    title: "Пайплайн AI Reels и бот генерации контента",
    body: "Контент на потоке (100+ видео/час): motion-control воркфлоу и автоматические вариации изображений.",
  },
  {
    title: "Инфраструктура Telegram-CRM (YappiGram)",
    body: "Мультиаккаунтная CRM на Telethon/MTProto с ролевым доступом и шифрованным хранением.",
  },
  {
    title: "B2B-пайплайн аутрича на ИИ",
    body: "Агрегатор лидов с LLM-оценкой релевантности и персонализированной генерацией сообщений.",
  },
  {
    title: "Мультитенантная бот-платформа для финтеха",
    body: "Инфраструктура Telegram-ботов со строгой изоляцией клиентов, суб-ботами и мультивалютным учётом.",
  },
  {
    title: "Инструмент обработки видеоконтента",
    body: "Медиа-пайплайн на FFmpeg с 60+ режимами трансформации для массовой вариации видео.",
  },
  {
    title: "Интеграция приёма платежей",
    body: "Приём платежей через Stripe, PayPal и CryptoCloud с автогенерацией чеков.",
  },
];

export const testimonials: Testimonial[] = [
  {
    avatar: "D",
    name: "Daniel",
    title: "Владелец, агентство цифрового медиа",
    large: true,
    quote:
      "RTP Agency незаменимы, когда нужно собрать сложные ИИ-воркфлоу для изображений и видео. Всегда на связи и решают задачи быстро.",
  },
  {
    avatar: "M",
    name: "Mark",
    title: "Владелец, агентство по производству контента",
    quote:
      "Любой вопрос по ИИ или инженерии — решён. Стабильно находят более дешёвые варианты под наши задачи. Рекомендую.",
  },
  {
    avatar: "A",
    name: "A.",
    title: "Основатель, медиа-агентство",
    quote:
      "Долго искал такое ИИ-решение — и тут появились вы. Сильная команда с чётким видением, всегда на связи и держат слово. С вами легко работать.",
  },
  {
    avatar: "Y",
    name: "Yappi Agency",
    title: "Креативное дизайн-агентство",
    link: "https://yappi-agency.com",
    quote:
      "RTP помогли с кучей задач по автоматизации. Берут инициативу, честно оценивают работу и исправляют проблемы даже после сдачи — без доплат. Реально решают задачу, а не просто выставляют счёт.",
  },
];

export type Service = {
  icon: "video" | "telegram" | "crm" | "sites" | "infra" | "custom";
  title: string;
  items: string[];
};

export const services: Service[] = [
  {
    icon: "video",
    title: "Видео и креативы на масштабе",
    items: [
      "Уникализация видео (68+ методов через FFmpeg) — под антифрод-детект",
      "AI-липсинк для креативов — замена дорогих сервисов, до 99% дешевле",
      "Motion control и анимация роликов — до 84% дешевле Kling",
      "Массовая генерация вариаций креативов под сплит-тесты",
    ],
  },
  {
    icon: "telegram",
    title: "Telegram-автоматизация",
    items: [
      "Боты для воронок продаж и прогрева лидов",
      "Автопостинг и контент-конвейеры по расписанию с AI-генерацией текста и медиа",
      "CRM внутри Telegram — учёт лидов, статусы, уведомления команде",
      "Интеграция ботов с платёжками, трекерами, вебхуками",
    ],
  },
  {
    icon: "crm",
    title: "CRM и интеграции",
    items: [
      "Кастомные CRM под конкретный процесс, а не коробочные решения",
      "Интеграция CRM ↔ Telegram ↔ рекламные кабинеты ↔ трекеры",
      "Синхронизация команды: лиды, задачи, отчётность в одном месте",
      "Дашборды и алерты — мониторинг класса Prometheus/Grafana под бизнес-метрики",
    ],
  },
  {
    icon: "sites",
    title: "Сайты и лендинги",
    items: [
      "Лендинги и прелендинги с интеграцией трекинга (Keitaro и т.п.)",
      "SPA/SSR-сайты под SEO — если нужна органика, а не только платный трафик",
      "Мультирегиональные витрины (опыт с Shopify multi-region)",
    ],
  },
  {
    icon: "infra",
    title: "Инфраструктура и масштабирование",
    items: [
      "Docker-инфраструктура под несколько серверов (продакшн: 16 контейнеров, 3 сервера)",
      "CI/CD, мониторинг, автоматический скейлинг под нагрузку",
      "Замена дорогих проприетарных AI-сервисов на open-source — экономия 84–99%",
    ],
  },
  {
    icon: "custom",
    title: "Кастомная автоматизация",
    items: [
      "Мульти-агентные AI-системы под нетиповые задачи",
      "Парсинг и агрегация данных, автоотчётность",
      "Любые пайплайны «код + AI» под конкретный процесс команды",
    ],
  },
];
