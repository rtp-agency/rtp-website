// English version of the partners data. Slugs, URLs, logos, promo codes and
// numbers match the Russian source; only human-readable strings are translated.

import type { Partner } from "../partners";

export const partners: Partner[] = [
  {
    slug: "proxies-sx",
    name: "Proxies.sx",
    logoWhite: "/partners/proxies-sx/logo-white.png",
    logoBlack: "/partners/proxies-sx/logo-black.png",
    website: "https://proxies.sx/",
    websiteLabel: "proxies.sx",
    ctaUrl: "https://client.proxies.sx/login",
    managerUrl: "https://t.me/rtp_agency",
    category: [
      "Mobile proxies",
      "Residential proxies",
      "AI infrastructure",
      "Reseller platform",
    ],
    tagline: "The cleanest mobile and residential IPs on the internet.",
    intro:
      "Real 4G/5G mobile and residential proxies for automation, account management and data collection at any scale. A proprietary modem pool plus a partner device network, fresh IPs every day, and you pay only for the traffic you use.",
    promo: { code: "WELCOME15", text: "15% off your first order" },
    stats: [
      { number: "150+", label: "companies worldwide trust it" },
      { number: "92%", label: "success rate where everyone else gets blocked" },
      { number: "100+", label: "countries covered" },
      { number: "500+", label: "physical 4G/5G modems" },
      { number: "95%", label: "network uptime" },
      { number: "from $2.40", label: "per GB at volume" },
    ],
    about: [
      "Proxies.sx provides real 4G/5G carrier IPs on infrastructure it owns. Unlike most of the market, there is no resold third-party traffic: the entire network belongs to the Proxies.sx team, and new IPs are added to it every day.",
      "Two proprietary sources make this possible. The first is a premium pool of 500+ physical 4G/5G modems with real carrier SIM cards, built for stable sessions and serious commercial work. The second is a partner device network in 100+ countries that covers both mobile and standard residential connections (home and office internet), not just SIM traffic. It is what makes large-scale data collection, rare geos and broad country coverage possible.",
      "Spin up dedicated ports through the dashboard or API, set up rotation however you need, and use sticky sessions and automatic routing for the task at hand. Everything runs over HTTP, SOCKS5 and a full REST API, and it is built with AI agents in mind: an MCP server lets Claude, Cursor and Cline manage the whole setup in plain conversation, and the x402 protocol lets agents pay per request in USDC (Base or Solana) with no sign-up and no API keys, settling in about 2 seconds.",
    ],
    whyChoose: [
      "Trusted by 150+ companies worldwide, with a 92% success rate on platforms that block everyone else",
      "Real 4G/5G carrier IPs, not a datacenter posing as mobile",
      "95% network uptime and instant activation right after payment",
      "Every endpoint is yours alone, so nobody else uses the same IP at the same time",
      "Owned infrastructure top to bottom, with nothing resold",
      "Two complementary pools give you both stability and reach",
      "Residential coverage with real ISP connections, not just mobile/SIM",
      "Fresh IPs every day, so blocks are rare",
      "High IP trust score, with noticeably fewer CAPTCHAs",
      "Flexible rotation and stable sticky sessions",
      "100+ countries to choose from",
      "Pay only for the traffic you use, with no slots, subscription fees or contracts",
      "Cards, USDT and 50+ cryptocurrencies via CoinGate",
      "x402 micropayments and MCP for AI agents (Claude, Cursor, Cline)",
      "Live support 24/7",
    ],
    useCases: [
      {
        case: "Web scraping and data collection",
        cap: "Fewer blocks and CAPTCHAs thanks to real mobile/residential IPs",
      },
      {
        case: "Account management and verification",
        cap: "Stable sessions, high trust score, one real device per IP",
      },
      {
        case: "Ad verification and brand protection",
        cap: "See ads the way real users do, by carrier and geo",
      },
      {
        case: "E-commerce and price monitoring",
        cap: "Competitor prices, stock and inventory without blocks",
      },
      {
        case: "Social media management",
        cap: "Run multiple accounts safely, each on its own dedicated IP",
      },
      {
        case: "SEO and SERP monitoring",
        cap: "Rankings and SERPs from 100+ countries on clean IPs",
      },
      {
        case: "Automation and AI systems",
        cap: "REST API, MCP integration and x402 micropayments for autonomous agents",
      },
      {
        case: "Reseller and partnership",
        cap: "Your own branded proxy business via API, webhooks and SDK",
      },
    ],
    infra: [
      {
        pool: "Premium modem pool",
        includes: "500+ proprietary 4G/5G modems with real carrier SIMs",
        usedFor: "Important accounts, stable sessions, commercial tasks",
      },
      {
        pool: "Mobile + residential device network",
        includes:
          "A proprietary partner network of mobile and residential connections, including regular user internet",
        usedFor: "Large-scale scraping, rare geos, broad country coverage",
      },
    ],
    aiAgents: [
      {
        title: "x402 protocol",
        body: "An agent pays per request in USDC (Base or Solana): no sign-up, no API keys, settlement in ~2 seconds, minimum purchase from $0.375.",
      },
      {
        title: "MCP server",
        body: "55 tools that let Claude, Cursor and Cline manage proxy infrastructure in plain conversation, with no code.",
      },
      {
        title: "Peer Network",
        body: "Run a proxy agent on a phone, VPS or home internet and earn USDC for every GB of traffic, with payouts to a Solana wallet from $5.",
      },
    ],
    pricing: [
      "Base price $4/GB, down to $2.40/GB at volume, with discounts applied automatically",
      "Endpoints are free and unlimited",
      "Plans: Starter (25 GB), Growth (50 GB, most popular), Scale (100 GB) or any volume",
      "Shared and Private 4G/5G proxies plus a flexible limits system",
      "Low minimum payment to get started",
      "No contracts: cancel any time, and traffic never expires",
    ],
    tiers: [
      { tier: "Starter", gb: "0+ GB", conns: "5" },
      { tier: "Bronze", gb: "25+ GB", conns: "10" },
      { tier: "Silver", gb: "50+ GB", conns: "20" },
      { tier: "Gold", gb: "100+ GB", conns: "35" },
      { tier: "Platinum", gb: "250+ GB", conns: "50" },
      { tier: "Enterprise", gb: "500+ GB", conns: "80" },
    ],
    payments: [
      { method: "Bank cards", detail: "Visa, Mastercard, American Express" },
      { method: "CoinGate", detail: "BTC, ETH, USDT and 50+ cryptocurrencies" },
      { method: "USDT/TRON", detail: "Direct crypto transfers" },
      { method: "x402", detail: "Micropayments for AI agents (USDC on Base/Solana)" },
    ],
    security: [
      "HTTPS/SSL encryption of all traffic",
      "Secure authentication and API key management",
      "Dedicated infrastructure, not a shared rented server",
      "24/7 security monitoring with DDoS protection",
      "Redundancy and failover, so a single point of failure doesn't take everything down",
    ],
    faq: [
      {
        q: "Are these real mobile IPs?",
        a: "Yes. They are genuine 4G/5G carrier IPs, not a datacenter posing as mobile. The network is built on a pool of 500+ physical modems with SIM cards plus a partner device network, so the IPs look more natural to platforms and carry a higher level of trust.",
      },
      {
        q: "How does pricing work?",
        a: "One simple model: you pay per GB of real 4G/5G traffic, from $4/GB down to $2.40/GB at volume. Endpoints, unlimited rotation and 24/7 support are free, and traffic never expires.",
      },
      {
        q: "Does traffic expire?",
        a: "Never. Buy once and use it whenever you like; your GB balance carries over indefinitely.",
      },
      {
        q: "How many countries are available?",
        a: "100+. The premium pool covers 30+ popular geos, including the US, UK, Germany, France, Poland, Spain, Italy, the Netherlands, Japan and Singapore. The partner network adds rare regions in Latin America, Africa and Asia. New IPs and countries appear almost every day.",
      },
      {
        q: "Is it suitable for resellers?",
        a: "Yes. Proxies.sx can power a proxy service under your own brand: API, webhook integrations, SDK and ready-made infrastructure for partners and resellers.",
      },
    ],
    steps: [
      "Create an account at client.proxies.sx",
      "Top up your balance by card or crypto",
      "Buy traffic (GB), and free parallel connections open automatically",
      "Create your first port",
      "Configure your app with the proxy credentials",
      "Start using mobile proxies",
    ],
  },
];

export const partnerSlugs = partners.map((p) => p.slug);

export function getPartner(slug: string): Partner | undefined {
  return partners.find((p) => p.slug === slug);
}
