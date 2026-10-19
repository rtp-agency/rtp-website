import type {
  Home,
  Stat,
  Offer,
  WorkItem,
  Additional,
  Testimonial,
  Service,
  ProcessStep,
} from "../site";

export type {
  Home,
  Stat,
  Offer,
  WorkItem,
  Additional,
  Testimonial,
  Service,
  ProcessStep,
  CycleStep,
} from "../site";

// Scrolling credibility strip — technical names, language-neutral.
export { marqueeTech } from "../site";

export const home: Home = {
  heroTitle: {
    pre: "We automate ",
    em: "the routine of your business",
    post: " with AI.",
  },
  heroLead:
    "We take the process that eats the most time and set it up so AI does it. Reliable and low-cost.",
  heroCtaPrimary: "Free teardown: what to automate first",
  heroCtaSecondary: "See examples",
  offersEyebrow: "What we do",
  offersHeading: "What we automate.",
  offersLead:
    "We take one specific process and make it run on its own. Cheap, reliable, and where it suits you.",
  offerDoesLabel: "What it does",
  offerAudienceLabel: "Who it's for",
  offerResultLabel: "Result",
  processEyebrow: "How we work",
  processHeading: "Teardown, solution, support.",
  whyEyebrow: "Why us",
  whyHeading: "Why it works.",
  whyText:
    "AI doesn't make things up here: we add checks, so you can trust the output. The solution is cheap to run and lives where it suits you, often right in Telegram. Anything complex is always handed to a person.",
  workEyebrow: "Case studies",
  workHeading: "What we've already automated.",
  additionalEyebrow: "Also built",
  additionalHeading: "Other projects.",
  testimonialsEyebrow: "Clients",
  testimonialsHeading: "What clients say.",
  ctaEyebrow: "Free, no obligation",
  ctaHeading: "A free 30-minute teardown.",
  ctaLead:
    "We'll show which process is most worth handing to AI, and how much time and money it will save. No pressure, just an honest diagnosis.",
  auditList: [
    "We find the process with the most automation potential",
    "We estimate the time and money saved, in numbers",
    "We give you a plan: where to start",
  ],
  ctaButton: "Book a teardown",
  ctaContactPrefix: "or write to us:",
  priceNote:
    "The cost depends on the process; we'll work it out at the free teardown.",
  cycle: [
    { n: "01", label: "Teardown", desc: "We find the process and calculate the savings" },
    { n: "02", label: "Solution", desc: "We set it up for your process" },
    { n: "03", label: "Launch", desc: "We launch it and keep supporting it" },
  ],
};

export const stats: Stat[] = [
  {
    value: 99,
    prefix: "",
    suffix: "%+",
    label: "Lower process cost vs. manual work / off-the-shelf services",
  },
  { value: 30, prefix: "$", suffix: "K+", label: "Saved for clients in a year" },
  { value: 10, prefix: "", suffix: "+", label: "Systems in production at clients" },
];

export const offers: Offer[] = [
  {
    num: "01",
    name: "Client communication and lead handling",
    promise: "No lead gets lost, replies come in seconds.",
    does: [
      "An AI assistant answers clients in Telegram, on your site or in Instagram, 24/7",
      "Takes in and qualifies leads, passing to a manager only what needs a human",
      "Keeps the conversation history in your CRM",
    ],
    audience: "agencies, clinics, online stores, service businesses",
    result:
      "faster replies, less load on the team, more leads taken through to a sale",
    visual: "replies",
  },
  {
    num: "02",
    name: "Content and routine at scale",
    promise: "More content and less manual work, with the same team.",
    does: [
      "We generate posts, product descriptions and newsletters in your style",
      "We prepare standard documents and reports automatically",
      "We add quality checks so the output stays consistent",
    ],
    audience: "stores, agencies, online schools",
    result: "many times more content and routine closed without new hires",
    visual: "content",
  },
  {
    num: "03",
    name: "An AI assistant connected to your systems",
    promise: "A digital employee that handles the routine itself.",
    does: [
      "We connect the assistant to your CRM, spreadsheets, drive and Telegram",
      "It pulls the data, prepares replies and documents, and carries out actions on its own",
      "Works reliably (with checks) and is cheap to run",
    ],
    audience: "any business with heavy manual operations",
    result: "routine handled without extra hiring",
    visual: "assistant",
  },
];

export const process: ProcessStep[] = [
  {
    num: "01",
    title: "Teardown",
    icon: "scan",
    body: "We find the process with the biggest payoff and calculate how much it will save. Free.",
  },
  {
    num: "02",
    title: "Built turnkey",
    icon: "graph",
    body: "We set up the solution for your process and your tools.",
  },
  {
    num: "03",
    title: "Launch and support",
    icon: "check",
    body: "We launch it, train your team and keep supporting it.",
  },
];

export const work: WorkItem[] = [
  {
    slug: "threads-content-system",
    number: "01 — Autonomous content system",
    title: "One post: 770,000 views, the top post on the whole account",
    meta: ["RTP Agency", "Running in production", "Threads"],
    summary:
      "An autonomous content system for Threads: it ranks formats by reach on its own, writes in the author's voice, generates realistic POV visuals and publishes with one approval tap. Running a blog became a conveyor.",
    highlights: [
      { number: "770K", label: "Views on a single post · 35K likes" },
      { number: "Top-1", label: "Post on the account, in the comments of Kyivstar" },
    ],
    tech: "Python · FastAPI · Celery · pgvector · LLM · Threads API",
  },
  {
    slug: "black-camel",
    number: "02 — Black Camel Productions",
    title: "~1 hour of manual editing per video → ~3 minutes, automatically",
    meta: ["Managed service", "London video agency", "25+ videos processed"],
    summary:
      "A managed pipeline for a London video agency: raw lesson recordings go in, finished brand-style videos come out. AI cleanup, pixel-accurate reframing, and human approval of the cuts.",
    highlights: [
      { number: "~3 min", label: "Automatic processing (was ~1 h by hand)" },
      { number: "25+", label: "Videos processed, built for hundreds" },
    ],
    tech: "Python · FFmpeg · OpenCV · Whisper · Gemini",
  },
  {
    slug: "metra-ai",
    number: "03 — Metra AI",
    title: "A production SaaS for automating content in Telegram",
    meta: ["RTP Agency", "Running in production", "metra-ai.org"],
    summary:
      "We automated creating and publishing content in Telegram channels. The team puts out many times more posts with the same headcount.",
    highlights: [
      { number: "3 mo", label: "From development start to launch" },
      { number: "16", label: "Docker containers in production" },
    ],
    tech: "FastAPI · React · PostgreSQL · Multi-agent LLM",
  },
  {
    slug: "open-source-lipsync",
    number: "04 — Lipsync system",
    title: "99%+ lower costs vs. premium video AI",
    meta: ["RTP Agency", "6+ months in production", "3+ commercial deployments"],
    summary:
      "We replaced an expensive video service with our own solution: the cost per video dropped from dollars to cents, with no loss in quality.",
    highlights: [
      { number: "99%+", label: "Lower costs vs. a proprietary API" },
      { number: "6+ mo", label: "Running continuously in production" },
    ],
    tech: "ComfyUI · Infinity Talk · Wan 2.1 · Docker",
    costBar: { reduction: "99%+", afterPct: 2 },
  },
  {
    slug: "motion-control",
    number: "05 — Motion Control",
    title: "84% lower costs, plus capabilities premium services don't have",
    meta: ["RTP Agency", "4–5 months in production", "2 commercial clients"],
    summary:
      "Our own video solution instead of a premium service: −84% on cost and ~$12,000 saved per year, plus capabilities that off-the-shelf services lack.",
    highlights: [
      { number: "84%", label: "Lower costs at the client's volume" },
      { number: "~$12K", label: "Annual savings per client" },
    ],
    tech: "ComfyUI · Wan 2.2 · RunningHub · FFmpeg",
    costBar: { reduction: "84%", afterPct: 16 },
  },
  {
    slug: "video-localization",
    number: "06 — Video localization",
    title: "A multi-model AI pipeline for localizing video at scale",
    meta: ["RTP Agency", "3 months in production"],
    summary:
      "A pipeline that turns one video into dozens of localized versions on its own: under $1 per 20-minute video instead of hours of manual work.",
    highlights: [
      { number: "< $1", label: "Per 20-minute video" },
      { number: "4+", label: "AI services in one chain" },
    ],
    tech: "Vertex AI · Whisper · Gemini · Qdrant",
  },
  {
    slug: "telegram-receipts",
    number: "07 — Receipts and expenses in Telegram",
    title: "142 bots and 2.4M messages a month at 99.98% uptime",
    meta: ["Development and operations", "12 regions", "Running in production"],
    summary:
      "A receipt and expense tracking platform for teams in 12 regions: each team has its own bot, a person checks every receipt, and daily reconciliations are generated automatically.",
    highlights: [
      { number: "142", label: "Bots in production · 51K receipts a month" },
      { number: "99.98%", label: "Uptime over 90 days" },
    ],
    tech: "Python · aiogram · SQLite · systemd",
  },
  {
    slug: "sinner-threads",
    number: "08 — Clothing online store",
    title: "A store that pulls the catalog, sizes and stock from the supplier by itself",
    meta: ["Turnkey development", "Ukraine", "UA / EN"],
    summary:
      "An online store for branded clothing and accessories: products, photos, sizes and stock are pulled from the supplier's catalog, and the storefront shows only what's in stock. Cart, checkout and two language versions.",
    highlights: [
      { number: "1 day", label: "From idea to a working storefront" },
      { number: "15 min", label: "Supplier catalog refresh interval" },
    ],
    tech: "Next.js · Tailwind · Supabase · MyDrop API",
  },
];

export const additional: Additional[] = [
  {
    title: "AI Reels pipeline and content generation bot",
    body: "Content at scale (100+ videos/hour): motion-control workflows and automatic image variations.",
  },
  {
    title: "Telegram CRM infrastructure (YappiGram)",
    body: "A multi-account CRM on Telethon/MTProto with role-based access and encrypted storage.",
  },
  {
    title: "AI-powered B2B outreach pipeline",
    body: "A lead aggregator with LLM relevance scoring and personalized message generation.",
  },
  {
    title: "Multi-tenant bot platform for fintech",
    body: "Telegram bot infrastructure with strict client isolation, sub-bots and multi-currency accounting.",
  },
  {
    title: "Video content processing tool",
    body: "An FFmpeg media pipeline with 60+ transformation modes for bulk video variation.",
  },
  {
    title: "Payment acceptance integration",
    body: "Payments through Stripe, PayPal and CryptoCloud with automatic receipt generation.",
  },
];

export const testimonials: Testimonial[] = [
  {
    avatar: "D",
    name: "Daniel",
    title: "Owner, digital media agency",
    large: true,
    quote:
      "RTP Agency are indispensable when you need to build complex AI workflows for images and video. Always reachable, and they solve problems fast.",
  },
  {
    avatar: "M",
    name: "Mark",
    title: "Owner, content production agency",
    quote:
      "Any question on AI or engineering, solved. They consistently find cheaper options for our tasks. Recommended.",
  },
  {
    avatar: "A",
    name: "A.",
    title: "Founder, media agency",
    quote:
      "I'd been looking for an AI solution like this for a long time, and then you showed up. A strong team with a clear vision, always reachable, and they keep their word. Easy to work with.",
  },
  {
    avatar: "Y",
    name: "Yappi Agency",
    title: "Creative design agency",
    link: "https://yappi-agency.com",
    quote:
      "RTP helped with a ton of automation tasks. They take initiative, assess the work honestly and fix problems even after delivery, at no extra charge. They actually solve the task rather than just sending an invoice.",
  },
];

export const services: Service[] = [
  {
    icon: "video",
    title: "Video and creatives at scale",
    items: [
      "Video uniquification (68+ methods via FFmpeg) against anti-fraud detection",
      "AI lipsync for creatives, a replacement for expensive services, up to 99% cheaper",
      "Motion control and video animation, up to 84% cheaper than Kling",
      "Bulk generation of creative variations for split tests",
    ],
  },
  {
    icon: "telegram",
    title: "Telegram automation",
    items: [
      "Bots for sales funnels and lead nurturing",
      "Auto-posting and scheduled content pipelines with AI-generated text and media",
      "A CRM inside Telegram: lead tracking, statuses, team notifications",
      "Integrating bots with payment providers, trackers and webhooks",
    ],
  },
  {
    icon: "crm",
    title: "CRM and integrations",
    items: [
      "Custom CRMs built for a specific process, not boxed solutions",
      "CRM ↔ Telegram ↔ ad accounts ↔ trackers integration",
      "Team sync: leads, tasks and reporting in one place",
      "Dashboards and alerts: Prometheus/Grafana-class monitoring for business metrics",
    ],
  },
  {
    icon: "sites",
    title: "Websites and landing pages",
    items: [
      "Landing pages and pre-landers with tracking integration (Keitaro and similar)",
      "SPA/SSR sites built for SEO, if you need organic traffic and not only paid",
      "Multi-region storefronts (Shopify multi-region experience)",
    ],
  },
  {
    icon: "infra",
    title: "Infrastructure and scaling",
    items: [
      "Multi-server Docker infrastructure (production: 16 containers, 3 servers)",
      "CI/CD, monitoring, automatic scaling under load",
      "Replacing expensive proprietary AI services with open-source, saving 84–99%",
    ],
  },
  {
    icon: "custom",
    title: "Custom automation",
    items: [
      "Multi-agent AI systems for non-standard tasks",
      "Data scraping and aggregation, automated reporting",
      "Any \"code + AI\" pipeline for your team's specific process",
    ],
  },
];
