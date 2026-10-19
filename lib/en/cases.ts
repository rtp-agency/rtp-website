import type { CaseStudy } from "../cases";

export const cases: CaseStudy[] = [
  {
    slug: "threads-content-system",
    eyebrow: "Case 01",
    title: "Autonomous content system for Threads",
    lead: "One post: 770,000 views, 35,000 likes, the top post on the whole account, with Kyivstar showing up in the comments. Running the blog became a pipeline: generate, approve with one tap, publish automatically, all in the author's own voice.",
    meta: {
      role: "RTP Agency",
      timeline: "Running in production",
      status: "Threads",
    },
    visual: {
      kind: "pipeline",
      stages: [
        { label: "Format ranking", sub: "export posts, sort by reach" },
        { label: "Voice profile", sub: "few-shot from the author's real posts" },
        { label: "Generation", sub: "text + POV visual for the format" },
        { label: "LLM-as-judge", sub: "revises to match the voice until it passes" },
        { label: "One-tap approval", sub: "cards in a Telegram bot" },
        { label: "Auto-publishing", sub: "Threads Graph API on schedule" },
      ],
    },
    sections: [
      {
        heading: "The problem",
        blocks: [
          { t: "p", html: `A private German tutor ran Threads entirely by hand: coming up with posts, building screenshot mockups, publishing, and tracking by eye what worked. It ate his time, and content came out irregularly, so the account was essentially stuck.` },
          { t: "p", html: `The content had to hit a very specific personal voice: sharp, ironic, with dark humor. That's how Threads gives reach and how posts gently lead the audience to lessons. Doing it consistently every day is a full job on top of the main one. So it didn't get done.` },
          { t: "p", html: `The goal: turn blog management into a pipeline of generate, approve with one tap, publish automatically, while keeping the author's voice and growing reach and leads.` },
        ],
      },
      {
        heading: "The solution",
        blocks: [
          { t: "p", html: `We built an autonomous content system that runs the whole cycle on its own.` },
          { t: "h3", text: "Format ranking before generation" },
          { t: "p", html: `In practice this turned out to matter more than the text itself. Before generating anything, the system exports all of the account's posts and ranks them by reach to find which formats actually work for this audience. The pipeline then leans on the winning format, with enough variety mixed in so it doesn't get stale. Most automation tools skip this step and generate blind, but hitting a format the platform already rewards is half the result.` },
          { t: "h3", text: "A voice that doesn't sound like AI" },
          { t: "p", html: `Plain model output always reads like a robot. The system builds a "voice profile" from the author's real posts and picks similar successful examples for each generation (few-shot on vector search). Every draft then goes through an LLM-as-judge: a model scores the text against the author's voice and revises it until it passes. No generic descriptions of tone, just convergence on one specific living style.` },
          { t: "h3", text: "Realistic visuals" },
          { t: "p", html: `The winning format is the POV screenshot: a short caption with a cursor over a notification mockup (a message from a "student", a payment notice). The system generates these so they're visually indistinguishable from real ones, using the author's real posts as reference. Text and details in the image are edited straight from the bot with a free-form description, and a series mode lets you write "part 2" of a viral story with the same character and tone.` },
          { t: "h3", text: "One-tap approval, auto-publishing" },
          { t: "p", html: `The author reviews ready cards in Telegram (approve, edit, reject, regenerate), and approved posts publish themselves to Threads on schedule through the Threads Graph API.` },
          { t: "h3", text: "The system learns" },
          { t: "p", html: `The author rates posts ("his voice / not his"), and posts that led to a lesson booking are flagged. This keeps improving the system's aim, both on voice and on the formats that actually convert.` },
        ],
      },
      {
        heading: "Technology",
        blocks: [
          { t: "p", html: `Python, FastAPI, Celery for background tasks and the scheduler. PostgreSQL with pgvector for style search, Redis. A provider-agnostic LLM layer (OpenAI / xAI Grok / Anthropic) that picks the least "censored" model for a sharp voice, with structured JSON output by schema. An image model with the author's real samples as references and a programmatic render template as a fallback. Threads Graph API (OAuth, two-step publishing, insights) and a Telegram bot (aiogram) for approval. Docker Compose, deployment on a dedicated server, automatic migrations.` },
        ],
      },
      {
        heading: "Result",
        blocks: [
          { t: "p", html: `The tutor got a content desk in his pocket: the system proposes ready posts in his voice with realistic visuals, and publishing takes one approval tap. Manual work shrank to approving.` },
          { t: "stats", items: [
            { number: "770,000", label: "Views on a single post" },
            { number: "35,000", label: "Likes" },
            { number: "Top-1", label: "Post on the whole account" },
          ] },
          { t: "p", html: `The numbers speak for themselves. One post got <strong>770,000 views and 35,000 likes</strong>, became the <strong>top post on the whole account</strong>, and <strong>Kyivstar</strong>, one of the country's biggest telecom brands, showed up in the comments. The account could never have reached that by hand.` },
          { t: "p", html: `And importantly, this isn't a one-off viral post. It now happens every day, whether the client has time or not. Consistency is a question of system, not willpower.` },
        ],
      },
    ],
    prev: { href: "/en#work", label: "← All cases" },
    next: { href: "/en/work/black-camel", label: "Next: Black Camel Productions →" },
  },
  {
    slug: "black-camel",
    eyebrow: "Case 02",
    title:
      "Automating manual video editing for training content at scale",
    lead: "A slow \"one video, one editor\" process in Premiere Pro became an automatic pipeline that cleans, reframes, and edits recorded video lessons in minutes, built to handle hundreds of videos.",
    meta: {
      role: "Managed service",
      timeline: "Ongoing production",
      status: "25+ videos processed",
      link: { href: "https://blackcamel.productions", text: "blackcamel.productions →" },
    },
    visual: {
      kind: "pipeline",
      stages: [
        { label: "Intake", sub: "raw lesson recordings in batches" },
        { label: "Visual cleanup", sub: "toolbars, masks, reframing" },
        { label: "Adaptive framing", sub: "content-aware, no overlaps" },
        { label: "AI content cleanup", sub: "silence / filler words / repeats" },
        { label: "Render and delivery", sub: "finished video in brand style" },
      ],
    },
    sections: [
      {
        heading: "The problem",
        blocks: [
          { t: "p", html: `Black Camel Productions produces a large volume of recorded video lessons for an education-content client. These are screen and webcam recordings where the instructor talks through slides. Every video went through the same repetitive manual edit in Premiere Pro:` },
          { t: "ul", items: [
            `Cropping out recording toolbars and extra interface elements`,
            `Scaling and reframing the screen content`,
            `Enlarging and repositioning the presenter's webcam bubble`,
            `Masking gray page breaks and margins`,
            `Exporting to a fixed broadcast spec`,
          ] },
          { t: "p", html: `On top of that, the editor had to listen to every video to remove pauses, filler words, coughs, and repeated or botched phrases, the longest part of the job.` },
          { t: "p", html: `The problem wasn't quality, it was throughput. Each video took the editor about <strong>an hour of manual work</strong>, the process didn't scale, and quality varied between editors. At volume, manual content cleanup was the bottleneck.` },
        ],
      },
      {
        heading: "The solution",
        blocks: [
          { t: "p", html: `We built an automated video production pipeline that reproduces the manual editing standard in code, plus an AI content-cleanup layer that the manual process couldn't do efficiently.` },
          { t: "p", html: `It runs as a managed service: Black Camel sends raw recordings, the pipeline processes them, and a finished video in brand style comes back, ready for their team's final assembly.` },
          { t: "h3", text: "1. Pixel-accurate brand reproduction" },
          { t: "p", html: `We reconstructed the client's exact editing standard from their original Premiere presets and reference videos, so the output matches the spec to the pixel. Webcam framing, margins, and scale are measured and locked in (for example, the 42px webcam margin was checked against the reference video, not eyeballed).` },
          { t: "h3", text: "2. Automatic visual cleanup" },
          { t: "p", html: `Removing toolbars and interface, masking page breaks, reframing the screen, and enlarging the presenter bubble all happen automatically, with no manual masking or keyframes.` },
          { t: "h3", text: "3. Content-aware adaptive framing" },
          { t: "p", html: `The system analyzes each slide and adjusts automatically so images and tables on screen are never cropped or covered by the presenter overlay. This resolves real client complaints without hand-fixing every video.` },
          { t: "h3", text: "4. AI content cleanup" },
          { t: "ul", items: [
            `Removing silence and dead air through voice activity detection`,
            `Removing filler words, coughs, and breaths with speech AI, with safeguards that protect real speech from being cut`,
            `Detecting repeated phrases and flubs through AI transcription plus a text-analysis layer. It finds where the presenter repeated themselves and proposes an exact word-level cut, leaving the final decision to a human`,
          ] },
        ],
      },
      {
        heading: "Technical details",
        blocks: [
          { t: "h3", text: "Reference-based accuracy" },
          { t: "p", html: `The brand geometry was decoded from the client's own design assets and checked against the reference video rather than estimated, so the output matches the spec every time and differences between editors disappear.` },
          { t: "h3", text: "Deterministic repeat detection" },
          { t: "p", html: `To find repeated phrases, the pipeline combines Whisper transcription (with word-level timestamps) and a purpose-tuned text-matching layer. It pinpoints duplicated speech and proposes a clean cut, and a human approves the final result.` },
          { t: "h3", text: "Optimized rendering" },
          { t: "p", html: `We tuned the render engine for Apple Silicon with smart frame reuse, roughly halving render time: from ~6 minutes to ~3 minutes for a typical 15-minute lesson.` },
          { t: "h3", text: "Resilience at volume" },
          { t: "p", html: `Batch processing with automatic retries on network failures, saved results, and visible warnings, so nothing fails silently on a large batch.` },
        ],
      },
      {
        heading: "Results and impact",
        blocks: [
          { t: "stats", items: [
            { number: "~3 min", label: "Automatic processing per video (was ~1 h by hand)" },
            { number: "25+", label: "Videos processed in batches" },
            { number: "~2×", label: "Faster rendering after Apple Silicon optimization" },
            { number: "Hundreds", label: "Built to run at volume" },
          ] },
          { t: "ul", items: [
            `From ~1 hour of manual editing per video to ~3 minutes of automatic processing, freeing editors from routine work`,
            `Consistent brand-style output: webcam, layout, and framing match the client's reference standard, with no differences between editors`,
            `The heaviest manual task, listening for silence, filler words, and repeats, is now an automatic first pass with human approval, not work from scratch`,
          ] },
        ],
      },
      {
        heading: "Outcome",
        blocks: [
          { t: "p", html: `Black Camel moved from a labor-intensive "one editor, one video" process to a scalable production line: send recordings in batches, the pipeline does the heavy repetitive work, and human judgment is applied only where it adds value.` },
          { t: "p", html: `The result is <strong>lower cost per video, faster turnaround, and consistent brand quality at volume</strong>, which turns video production from a bottleneck into a throughput advantage.` },
          { t: "p", html: `Built for <a href="https://blackcamel.productions">Black Camel Productions</a>; the end education client remains anonymous by agreement.` },
        ],
      },
      {
        heading: "Tech stack",
        blocks: [
          { t: "table", rows: [
            ["Language", "Python"],
            ["Video processing", "FFmpeg · OpenCV"],
            ["API / Orchestration", "FastAPI"],
            ["Transcription", "Whisper (word-level timestamps)"],
            ["Speech cleanup", "Cleanvoice"],
            ["LLM / Text analysis", "Gemini"],
            ["Optimization", "Apple Silicon rendering"],
          ] },
        ],
      },
    ],
    prev: { href: "/en/work/threads-content-system", label: "← Back: Autonomous content system" },
    next: { href: "/en/work/metra-ai", label: "Next: Metra AI →" },
  },

  {
    slug: "metra-ai",
    eyebrow: "Case 03",
    title: "Metra AI: a production SaaS for automating Telegram content",
    lead: "We built a SaaS platform end to end, with multi-agent LLM orchestration. From architecture to launch in 3 months.",
    meta: {
      role: "RTP Agency",
      timeline: "3 months",
      status: "Live, with paying users",
      link: { href: "https://metra-ai.org", text: "metra-ai.org →" },
    },
    visual: {
      kind: "pipeline",
      stages: [
        { label: "Structure parser", sub: "breaks down anatomy, keeps links" },
        { label: "Content rewriter", sub: "paragraph by paragraph, isolated calls" },
        { label: "Styling", sub: "channel emoji and formatting" },
        { label: "Rule validator", sub: "rules for the specific channel" },
      ],
    },
    sections: [
      {
        heading: "The business problem",
        blocks: [
          { t: "p", html: `Telegram channel owners and content teams spend huge amounts of time creating posts by hand. Standard tools either don't fit Telegram's specifics (Buffer and Hootsuite are built for Instagram/Twitter) or rely on raw ChatGPT output, which produces generic, low-quality content that needs long manual editing.` },
          { t: "p", html: `The main pain: content teams spend 60–80% of their time on production instead of strategy, and quality suffers because AI-generated content usually lacks brand voice, channel context, and real-time relevance.` },
        ],
      },
      {
        heading: "What we built",
        blocks: [
          { t: "p", html: `A full SaaS platform that automates the whole content workflow in Telegram:` },
          { t: "ul", items: [
            `AI post generation that keeps the brand voice and channel lore`,
            `A scheduling system with reusable weekly presets`,
            `Real-time data integration for news content`,
            `A built-in Telegram CRM for working with leads without exposing the owner's account data`,
            `Multi-account infrastructure with several operators, for agencies running many channels`,
          ] },
        ],
      },
      {
        heading: "Architecture: why multi-agent instead of a single LLM call",
        blocks: [
          { t: "p", html: `The key technical innovation is a multi-step LLM orchestration pipeline instead of single API calls. It's a deliberate architectural choice based on an important insight:` },
          { t: "quote", text: `LLMs perform poorly when given too many simultaneous constraints. A single 3,000-token prompt asking to "rewrite the post in voice X, with lore Y, in format Z, following rules A/B/C" gives unstable results, because attention gets spread across the requirements.` },
          { t: "p", html: `The solution: break post generation into specialized stages, each with one clear area of responsibility.` },
          { t: "h3", text: "Standard posting pipeline" },
          { t: "ul", items: [
            `Structure parser: extracts the post's anatomy and keeps links (which premium LLMs strip out by default)`,
            `Content rewriter: processes each paragraph in isolated calls, preserving structural integrity`,
            `Styling: adds emoji and formatting to match the channel persona`,
            `Rule validator: applies the specific channel's rules (for example, strip punctuation, cap length)`,
          ] },
          { t: "h3", text: "Extended pipeline (generation from scratch)" },
          { t: "ul", items: [
            `Archetype selector: picks the post structure by content type and length parameters`,
            `Block-by-block generator: writes each section with focused context`,
            `Style and formatting applied`,
            `Validation against auto-rules`,
          ] },
          { t: "p", html: `This architecture removes the typical AI failures that single LLM calls produce: mid-text hallucinations, structure drift, overuse of lore, and broken formatting.` },
        ],
      },
      {
        heading: "Key technical findings",
        blocks: [
          { t: "h3", text: "1. Prompt normalization layer" },
          { t: "p", html: `The image model rejected legitimate prompts too often, with false positives on ordinary requests like generating people. Instead of switching to a pricier model, we built a prompt normalization layer that rephrases harmless user input so it isn't blocked by mistake, while keeping the original meaning. This kept quality high without hosting more expensive alternatives.` },
          { t: "h3", text: "2. Lore compression and translation" },
          { t: "p", html: `The user's channel lore (often 3,000+ tokens of unstructured text) is compressed and translated into the channel's posting language at upload time. The AI gets structured text in exactly the right language instead of raw lore, which sharply improves content relevance and cuts token costs.` },
          { t: "h3", text: "3. Lore as context, not a constraint" },
          { t: "p", html: `Through iteration we found that the AI overuses lore when it's given as a direct instruction. We designed lore as soft context that influences generation without dominating it, so content comes out more natural.` },
          { t: "h3", text: "4. Premium LLM selection strategy" },
          { t: "p", html: `We chose specific LLMs for specific tasks:` },
          { t: "ul", items: [
            `Fewer false refusals on legitimate edge cases`,
            `Better real-time news integration through a Perplexity-style API`,
            `Cost optimization at scale`,
          ] },
        ],
      },
      {
        heading: "Infrastructure",
        blocks: [
          { t: "ul", items: [
            `Several Ubuntu servers in production (main service, CRM, staging)`,
            `16 Docker containers with a clean separation of concerns`,
            `The backend as the single source of truth: all client requests go through the backend, never directly to AI providers or the database`,
            `Monitoring stack: Prometheus, Grafana, Sentry for errors, Uptime Kuma for service health`,
            `Encryption: all sensitive data (phone numbers, messages, passwords) is encrypted with proper salt+pepper and GPU-resistant hashing. Decryption keys are stored off the server.`,
            `Security: 2FA, JWT rotation, session fingerprinting, domain proxying`,
          ] },
        ],
      },
      {
        heading: "Result",
        blocks: [
          { t: "stats", items: [
            { number: "3 mo", label: "From development to launch" },
            { number: "16", label: "Docker containers in production" },
            { number: "Week 1", label: "First paying users" },
            { number: "25/day", label: "Auto-posts per channel on the paid plan" },
          ] },
          { t: "p", html: `Launched to production within the 3-month development window. The multi-account CRM lets agencies manage operators without exposing the channel owner's data. Strong early traction with a growing user base.` },
        ],
      },
      {
        heading: "Tech stack",
        blocks: [
          { t: "table", rows: [
            ["Backend", "FastAPI · Python · Celery"],
            ["Frontend", "React · TypeScript · Next.js"],
            ["Database", "PostgreSQL · Redis"],
            ["Infrastructure", "Docker · Nginx · Multiple Ubuntu servers"],
            ["Monitoring", "Prometheus · Grafana · Sentry · Uptime Kuma"],
            ["AI / LLM", "Multi-provider stack (proprietary + open source)"],
          ] },
        ],
      },
      {
        heading: "What this demonstrates",
        blocks: [
          { t: "ul", items: [
            `The ability to design and build a production SaaS end to end`,
            `Deep understanding of LLM limits and how to work around them with architecture`,
            `Production-grade security and infrastructure`,
            `Pragmatic cost optimization at the architecture level`,
            `End-to-end product thinking: business problem → technical solution → deployment → operations`,
          ] },
        ],
      },
    ],
    prev: { href: "/en/work/black-camel", label: "← Back: Black Camel Productions" },
    next: { href: "/en/work/open-source-lipsync", label: "Next: Lip-sync system →" },
  },

  {
    slug: "open-source-lipsync",
    eyebrow: "Case 04",
    title: "Lip-sync system: 99%+ lower cost than premium video AI",
    lead: "We replaced premium video AI ($3–5/min) with an open-source ComfyUI workflow. Same quality, costs in cents.",
    meta: {
      role: "RTP Agency",
      timeline: "6+ months in production",
      status: "3+ commercial deployments",
    },
    visual: {
      kind: "cost",
      beforeLabel: "Premium video AI API",
      beforeValue: "$3–5 / min",
      afterLabel: "Custom ComfyUI workflow",
      afterValue: "cents / min",
      afterPct: 2,
      reduction: "99%+",
    },
    sections: [
      {
        heading: "The business problem",
        blocks: [
          { t: "p", html: `A motion design agency that makes ad creatives needed lip-sync video generation at scale. They were paying a premium for a leading proprietary API, roughly $0.05–0.08 per second of video, which came to:` },
          { t: "ul", items: [
            `$3–5 per minute of generated video`,
            `Tens of dollars per finished creative`,
            `Unworkable economics at their order volume`,
          ] },
          { t: "p", html: `Beyond cost, they ran into API limits, a quality ceiling, and no customization, which constrained their creative work. They needed a noticeably cheaper solution, with no dependence on external APIs and room to adapt it to their tasks.` },
        ],
      },
      {
        heading: "Our approach",
        blocks: [
          { t: "p", html: `Most teams would either accept premium prices or try to build their own model. We took a third path: we built production infrastructure around the best open-source AI models, with cost-optimized GPU orchestration.` },
          { t: "p", html: `After evaluating the options, we chose <strong>Infinity Talk (built on Wan 2.1)</strong> as the lip-sync foundation. Key reasons:` },
          { t: "ul", items: [
            `There was no comparable open-source alternative at the time`,
            `The ComfyUI-based architecture allowed deep customization through workflow modifications`,
            `Quality matched the premium API on the agency's tasks, and in some scenarios exceeded it`,
            `It can be self-hosted, removing API dependence entirely`,
          ] },
        ],
      },
      {
        heading: "Production architecture",
        blocks: [
          { t: "p", html: `The hard part wasn't running the model, it was getting it to production level.` },
          { t: "p", html: `We built containerized deployment infrastructure that provides:` },
          { t: "ul", items: [
            `A Telegram bot interface (through a local Bot API server for large media files beyond Telegram's standard limits)`,
            `Workflow orchestration for ComfyUI pipelines`,
            `Handling of heavy files (large video input and output)`,
            `Polling and webhook integration with GPU providers`,
            `A Docker template we reuse on similar projects: drop in a config, deploy, done in minutes`,
          ] },
          { t: "p", html: `The infrastructure design is modular and repeatable. Since then we've used the same Docker template base to deploy similar AI pipelines for other clients with minimal changes.` },
        ],
      },
      {
        heading: "Cost engineering",
        blocks: [
          { t: "p", html: `This is where the economics get interesting.` },
          { t: "h3", text: "Starting premium API costs (their previous solution)" },
          { t: "ul", items: [
            `$3–5 per minute of video`,
            `Tens of dollars per finished creative`,
            `API rate limits`,
          ] },
          { t: "h3", text: "Our first implementation (self-hosted GPU on VAST AI)" },
          { t: "ul", items: [
            `$2/hour to rent an H200 GPU`,
            `Batch processing: dozens of videos per hour on a single GPU instance`,
            `Cost per video: pennies instead of dollars`,
          ] },
          { t: "h3", text: "Current optimized version (RunningHub)" },
          { t: "ul", items: [
            `$15/month flat subscription for the client (50K tokens + access to premium GPUs)`,
            `Effectively unlimited generation in practice`,
            `Cost per video in tokens: ~200 tokens (negligible at this volume)`,
          ] },
          { t: "quote", text: `Net cost reduction: 99%+ compared to premium API prices at their volume.` },
          { t: "p", html: `The optimization path itself shows a key consulting principle: <strong>continuous iteration on infrastructure choices</strong>. At first VAST AI was the right answer, but when their prices changed and better alternatives appeared, moving to RunningHub gave another jump in the economics.` },
        ],
      },
      {
        heading: "Photo-to-video vs video-to-video",
        blocks: [
          { t: "p", html: `We implemented both modes, with a deliberate split by use case:` },
          { t: "ul", items: [
            `<strong>Photo-to-video</strong>: faster generation, fewer hallucinations, often higher quality. The default for most tasks.`,
            `<strong>Video-to-video</strong>: needed by specific clients with long formats (5–10 minute workflows). At first this mode was broken in the available implementations; we debugged it and got it working, which became a key differentiator.`,
          ] },
          { t: "p", html: `Nobody in the open-source community had a working V2V at the time, and our next client found us directly through a technical article we published about our Infinity Talk implementation.` },
        ],
      },
      {
        heading: "Recognition and knowledge sharing",
        blocks: [
          { t: "p", html: `We published a detailed technical teardown of our Infinity Talk implementation, which earned editorial recognition and a strong community response. It became the main reference for people getting into the topic and led directly to new clients.` },
        ],
      },
      {
        heading: "Result",
        blocks: [
          { t: "stats", items: [
            { number: "99%+", label: "Cost reduction vs the proprietary API" },
            { number: "6+ mo", label: "Continuous production operation" },
            { number: "3", label: "Paid commercial deployments" },
            { number: "$15/mo", label: "Current infrastructure cost" },
          ] },
          { t: "p", html: `For the original client: the same volume of lip-sync video at a fraction of the previous cost. No API limits. A workflow tuned to their specific creative tasks. 6+ months of continuous production operation.` },
          { t: "p", html: `The wider commercial impact: 3 paid deployments for different clients with different needs. Each is customized through workflow modifications (V2V for some, I2V for others). The infrastructure base has been reused across several AI projects.` },
        ],
      },
      {
        heading: "Tech stack",
        blocks: [
          { t: "table", rows: [
            ["AI models", "Infinity Talk (built on Wan 2.1)"],
            ["Workflow engine", "ComfyUI"],
            ["GPU compute", "VAST AI · RunningHub"],
            ["Interface", "Telegram Bot API (local server)"],
            ["Infrastructure", "Docker · Python orchestration"],
          ] },
        ],
      },
      {
        heading: "What this demonstrates",
        blocks: [
          { t: "ul", items: [
            `Production-level open-source AI expertise: not experiments, but commercial deployments`,
            `Cost-optimization thinking: knowing when API services make sense and when self-hosted or alternative providers save a huge amount`,
            `Production infrastructure thinking: reusable Docker templates, proper file handling, messenger integration`,
            `Continuous improvement: willingness to change infrastructure providers when economics or capabilities change`,
            `Expert content: sharing knowledge brings in inbound leads`,
          ] },
        ],
      },
    ],
    prev: { href: "/en/work/metra-ai", label: "← Back: Metra AI" },
    next: { href: "/en/work/motion-control", label: "Next: Motion Control →" },
  },

  {
    slug: "video-localization",
    eyebrow: "Case 06",
    title: "Multi-model AI pipeline for video localization",
    lead: "Four AI services in one coherent pipeline. A source video goes in, a localized derivative video comes out, for under $1.",
    meta: {
      role: "RTP Agency",
      timeline: "3 months in production",
      status: "Actively deployed",
    },
    visual: {
      kind: "pipeline",
      stages: [
        { label: "Transcription", sub: "Whisper Large (self-hosted)" },
        { label: "Rewrite", sub: "Gemini, meaning preserved" },
        { label: "Voiceover", sub: "multilingual TTS" },
        { label: "Footage matching", sub: "Vertex AI + Qdrant" },
        { label: "Assembly", sub: "FFmpeg (GPU-accelerated)" },
      ],
    },
    sections: [
      {
        heading: "The business problem",
        blocks: [
          { t: "p", html: `A media localization agency wanted to adapt source videos into new variations for specific markets: different languages, audiences, and niches. The requirement was to create truly derivative videos (newly assembled footage, rewritten scripts, new voiceover) rather than 1:1 translations, so that each result is a separate asset for its market.` },
          { t: "p", html: `This was a custom commercial request, not an off-the-shelf product, and nothing like it existed on the market. The client wanted to test a content-scaling hypothesis: can AI adapt source material into new variations with enough quality and volume to make the operation economically viable?` },
        ],
      },
      {
        heading: "What made it hard",
        blocks: [
          { t: "p", html: `The naive approach of translating, re-voicing, and republishing the same footage doesn't work, for two reasons:` },
          { t: "ul", items: [
            `<strong>Originality</strong>: reusing the source footage and structure gives a near-duplicate; the result has to be a genuinely new asset`,
            `<strong>Distinctness at scale</strong>: every result has to differ visually and structurally, not copy the original`,
          ] },
          { t: "p", html: `The system had to produce videos with:` },
          { t: "ul", items: [
            `New footage (assembled from a library, not from the original)`,
            `Rewritten scripts (meaning kept, wording changed)`,
            `A new voiceover in the target language`,
            `And still be semantically coherent: the new footage has to actually match what the new audio says`,
          ] },
        ],
      },
      {
        heading: "Architecture: a two-stage pipeline",
        blocks: [
          { t: "h3", text: "Stage 1: building the library" },
          { t: "p", html: `First the system builds a searchable visual library:` },
          { t: "ul", items: [
            `The user sends video URLs in bulk through a Telegram bot (processed through a queue)`,
            `Videos are downloaded on the server, then segmented by scene detection (detecting cuts, not fixed intervals)`,
            `Each segment gets a semantic embedding through Vertex AI`,
            `Embeddings and segments are stored locally in the Qdrant vector database`,
            `Each segment also gets a JSON description of its content (which later improves matching accuracy)`,
          ] },
          { t: "quote", text: `An architectural decision worth noting: the previous implementation stored embeddings in Firebase, which was expensive and excessive. We moved everything to a local Qdrant instance, removing recurring database costs entirely. Now only creating embeddings costs money; storage and retrieval are free.` },
          { t: "h3", text: "Stage 2: generating the new video" },
          { t: "p", html: `When the client wants to make a new video:` },
          { t: "ul", items: [
            `They send a link to the original plus a configuration (language, voice, music, emoji, subtitles, all chosen through the bot)`,
            `FFmpeg extracts the audio from the source video`,
            `The audio is transcribed with self-hosted Whisper Large (locally, to avoid API costs at scale)`,
            `The transcript is rewritten by Gemini, keeping the meaning while changing the wording`,
            `The rewritten script is translated into the target language`,
            `Multilingual TTS generates the voiceover in the chosen voice and language`,
            `Vertex AI matches library footage to the new audio segments by embedding similarity`,
            `FFmpeg assembles the final video: matched footage + new audio + chosen enhancements (background music, sounds, memes, subtitles)`,
            `The finished video is sent to the client in Telegram`,
          ] },
        ],
      },
      {
        heading: "Key technical decisions",
        blocks: [
          { t: "h3", text: "Why Vertex AI for embeddings" },
          { t: "p", html: `At the time, OpenAI didn't offer API access to the video embedding model we needed. Local alternatives were expensive to run. Vertex AI gave the best price/quality balance for production.` },
          { t: "h3", text: "Why self-hosted Whisper" },
          { t: "p", html: `At scale, transcription API costs become significant. Self-hosting on a local GPU removed recurring transcription costs entirely.` },
          { t: "h3", text: "Why multilingual TTS through a reseller" },
          { t: "p", html: `Instead of a direct subscription with hard plan limits, we used a pay-as-you-go reseller. Same quality, no subscription lock-in, and costs are easier to scale.` },
          { t: "h3", text: "Why Qdrant locally" },
          { t: "p", html: `A vector database on a local server removed recurring cloud database costs. The whole library lived on a single home server (10th-gen i5 + GTX 1070).` },
        ],
      },
      {
        heading: "Cost engineering",
        blocks: [
          { t: "p", html: `Cost breakdown for one video, for a 20-minute result:` },
          { t: "ul", items: [
            `Creating embeddings (once per source video): negligible`,
            `Whisper transcription: free (self-hosted)`,
            `Gemini rewrite + translation: ~cents`,
            `Multilingual voiceover (through the reseller): the main cost item`,
            `Storage: free (local)`,
            `Processing: electricity only`,
          ] },
          { t: "quote", text: `Total per video: under $1, even for long 20-minute content.` },
          { t: "p", html: `This cost structure is what makes localization at scale economically viable. Manually localizing a 20-minute video would take a designer or editor 8–15 hours of work.` },
        ],
      },
      {
        heading: "Production environment",
        blocks: [
          { t: "ul", items: [
            `Deployed on a home server (i5-10K + GTX 1070, 16 GB RAM)`,
            `A single Telegram bot interface: the client sends a URL and gets finished videos`,
            `FFmpeg with GPU acceleration for video assembly`,
            `Throughput: ~2 videos per hour for 20-minute clips (the bottleneck is assembly)`,
            `Scalable design: the architecture supports parallel deployment across several GPU nodes (top-end cards aren't needed, a 2060/3060 is enough for this load)`,
            `Embedding namespaces by category (for example, separate libraries for cooking and gaming content), which keeps semantic matching relevant within each domain`,
          ] },
        ],
      },
      {
        heading: "Problems we solved",
        blocks: [
          { t: "h3", text: "1. Embedding quality for visual matching" },
          { t: "p", html: `The first implementation gave poor semantic matches: audio about topic X got paired with footage that had no visual connection. The fix: we supplemented each segment's embedding with a JSON description of its content, which sharply improved match relevance.` },
          { t: "h3", text: "2. Pacing and rhythm in assembled videos" },
          { t: "p", html: `Auto-assembled videos first looked unnatural: segments too short (under 1.5s) or too long (over 15s), cuts at awkward moments. We built constraints into the assembly logic: minimum and maximum segment length, avoiding repeated segments close together, and audio level normalization.` },
          { t: "h3", text: "3. Migrating from Firebase to local Qdrant" },
          { t: "p", html: `The inherited architecture stored embeddings in Firebase with recurring costs. We moved the whole pipeline to local Qdrant, removing ongoing database costs entirely.` },
          { t: "h3", text: "4. Whisper translation quality" },
          { t: "p", html: `Standard Whisper translations sometimes came out clumsy. We added Gemini as a rewrite layer, which improved both meaning preservation and how natural the language sounds in the target language.` },
        ],
      },
      {
        heading: "Result",
        blocks: [
          { t: "stats", items: [
            { number: "< $1", label: "Per 20-minute video" },
            { number: "4+", label: "AI services orchestrated" },
            { number: "~2/h", label: "Throughput for 20-minute clips" },
            { number: "3 mo", label: "Active production operation" },
          ] },
          { t: "p", html: `End-to-end automation: the client sends a URL in Telegram and gets a publish-ready video with no manual steps in between. Under $1 per 20-minute clip. The scalable architecture is built to expand across several GPU instances and category libraries.` },
        ],
      },
      {
        heading: "Tech stack",
        blocks: [
          { t: "table", rows: [
            ["Language", "Python"],
            ["Video processing", "FFmpeg (GPU-accelerated)"],
            ["Embeddings", "Vertex AI"],
            ["Transcription", "Whisper Large (self-hosted)"],
            ["LLM rewriting", "Gemini"],
            ["Speech synthesis", "Multilingual TTS"],
            ["Vector DB", "Qdrant (self-hosted)"],
            ["Interface", "Telegram Bot"],
          ] },
        ],
      },
      {
        heading: "What this demonstrates",
        blocks: [
          { t: "ul", items: [
            `Multi-model AI orchestration: 4+ AI services combined into one coherent pipeline`,
            `Semantic understanding of video content: embedding-based matching keeps video and audio coherent`,
            `End-to-end product engineering: from a raw URL to a finished result, all automated`,
            `Cost optimization through architecture: strategic decisions on what to self-host and what to run on APIs, keeping cost per video under $1 even on a premium AI stack`,
            `Custom solution development: we built something that didn't exist as a product, for a specific commercial task`,
          ] },
        ],
      },
    ],
    prev: { href: "/en/work/motion-control", label: "← Back: Motion Control" },
    next: { href: "/en/work/telegram-receipts", label: "Next: Telegram receipts platform →" },
  },

  {
    slug: "motion-control",
    eyebrow: "Case 05",
    title: "Motion control workflow: 84% lower cost than premium video AI",
    lead: "We replaced premium motion control services with an open-source ComfyUI workflow. About $12,000 in annual savings per client at production scale, plus capabilities premium services don't have.",
    meta: {
      role: "RTP Agency",
      timeline: "4–5 months in production",
      status: "Running with 2 commercial clients",
    },
    visual: {
      kind: "cost",
      beforeLabel: "Kling 2.6 (premium)",
      beforeValue: "$1.20 / video",
      afterLabel: "Custom Wan 2.2 workflow",
      afterValue: "$0.19 / video",
      afterPct: 16,
      reduction: "84%",
    },
    sections: [
      {
        heading: "The business problem",
        blocks: [
          { t: "p", html: `A digital content agency needed to produce video at industrial scale: hundreds and thousands of clips a month. They were looking at premium video AI services (Kling 2.6 and similar) for motion control video generation, where the movements of a source video are transferred onto a target character.` },
          { t: "p", html: `The economics were harsh:` },
          { t: "ul", items: [
            `Premium services charge $0.21–$1.20 per generation for motion control (3.5–20 credits at ~$0.06–0.08 per credit)`,
            `At their volume (1000+ videos a month, with a target of 100 videos an hour during production sprints) this came to thousands of dollars a month for AI generation alone`,
            `Credit limits kept them from scaling to real output needs`,
            `Premium services' content policies restricted what could be generated at all`,
          ] },
          { t: "p", html: `They needed industrial-scale video generation that was <strong>radically cheaper</strong> and <strong>operationally flexible</strong>.` },
        ],
      },
      {
        heading: "What made it hard",
        blocks: [
          { t: "p", html: `Motion control is not trivial to reproduce. The technology requires:` },
          { t: "ul", items: [
            `Skeleton and pose detection from the source video`,
            `Character segmentation that works precisely with complex movement`,
            `Motion transfer that preserves both the action and visual coherence`,
            `Background and context handling so the result looks natural`,
          ] },
          { t: "p", html: `Most premium services (Kling, Hailuo, RunwayML) made motion control a proprietary feature and charge accordingly. Open-source analogs existed, but they were either broken, hard to find, or required deep ComfyUI expertise to bring to production.` },
        ],
      },
      {
        heading: "Our approach",
        blocks: [
          { t: "p", html: `After broad research and testing, we determined that <strong>Wan 2.2</strong>, an older but underrated open-source model, can match premium motion control quality with the right ComfyUI workflow architecture.` },
          { t: "p", html: `The difficulty: the available workflows were either broken or required manual segmentation (marking by hand where the character is in every frame, completely impractical at scale).` },
          { t: "h3", text: "Iteration 1" },
          { t: "p", html: `We got a broken workflow stuffed with unclear models and unused LoRAs. We cut it down to the working components, but segmentation still needed manual frame-by-frame marking. At production scale, not workable.` },
          { t: "h3", text: "Iteration 2" },
          { t: "p", html: `After more research we found a better workflow with automatic segmentation models. We customized it and stabilized it for production. This became the production version.` },
          { t: "h3", text: "Ongoing improvements" },
          { t: "ul", items: [
            `Built in a video upscaling sub-workflow to raise quality`,
            `Added frame interpolation (smooth output, 30fps → 60fps)`,
            `Built around the RunningHub API with parallel processing across several keys`,
            `Handled edge cases (mismatches with objects between the source motion and the target character)`,
          ] },
        ],
      },
      {
        heading: "Production architecture",
        blocks: [
          { t: "ul", items: [
            `ComfyUI workflow on RunningHub GPU compute`,
            `An RTX 5080-class GPU is enough for the load (premium hardware isn't needed)`,
            `5 parallel jobs per API key, with a multi-key scheme to scale past a single account's limits`,
            `Generation time: ~20 minutes of compute per video on the standard plan`,
            `Built into a broader content pipeline (as a module inside a large automated content production system)`,
            `Available through several interfaces: Telegram bots, a web interface, or ComfyUI directly for advanced users`,
          ] },
        ],
      },
      {
        heading: "Capability comparison: not just cheaper, different capabilities",
        blocks: [
          { t: "p", html: `Beyond cost, premium services have <strong>hard technical limits</strong> that restrict commercial use:` },
          { t: "h3", text: "Premium service limits (Kling 2.6 Motion Control)" },
          { t: "ul", items: [
            `A maximum of 30 seconds per continuous generation`,
            `Credit consumption grows with duration (longer = exponentially more expensive)`,
            `Content policy restrictions on a range of commercial scenarios`,
          ] },
          { t: "h3", text: "Our implementation" },
          { t: "ul", items: [
            `No hard duration limit: video length is bounded only by available GPU time`,
            `You can generate videos of 1, 2, 10+ minutes in a single continuous generation`,
            `The same cost-per-second economics, scaling linearly with duration`,
            `No content policy friction for legitimate commercial work`,
          ] },
          { t: "quote", text: `For long-form content this isn't an optimization. It's a capability gap that premium services simply don't close.` },
        ],
      },
      {
        heading: "Cost engineering: the math",
        blocks: [
          { t: "h3", text: "RunningHub pricing structure" },
          { t: "ul", items: [
            `$0.0004 per coin`,
            `24 coins per minute of GPU time`,
            `~$0.01 per minute of compute`,
          ] },
          { t: "h3", text: "Cost per video for a typical 30-second clip" },
          { t: "p", html: `20 minutes of GPU time per video → 480 coins → <strong>~$0.19 per video</strong>` },
          { t: "h3", text: "Comparison with Kling 2.6 motion control (the same 30-second video)" },
          { t: "p", html: `15–20 credits per generation × $0.06–0.08 per credit → <strong>~$0.90–$1.60 per video</strong> (midpoint ~$1.20)` },
          { t: "h3", text: "At the client's real production volume" },
          { t: "p", html: `The lower cost per video is the headline, but the total value comes from three factors that reinforce each other: <strong>84% lower cost</strong>, <strong>no duration limits, which opens content formats competitors can't make</strong>, and <strong>operational flexibility from parallel processing across several keys</strong>.` },
        ],
      },
      {
        heading: "Quality comparison",
        blocks: [
          { t: "p", html: `The honest answer: <strong>quality is on par with Kling for the production scenario, and in places better</strong>.` },
          { t: "p", html: `Where premium services win slightly: edge cases with unusual objects (for example, the person in the source video holds a box and the target character doesn't have one; both systems can produce artifacts here, solved by editing the source image beforehand).` },
          { t: "p", html: `Where our implementation matches or beats them: standard motion transfer scenarios, which are 95%+ of production volume.` },
          { t: "p", html: `<em>Both sometimes hallucinate.</em> This is expected for the current generation of video AI; neither premium nor open source is free of hallucinations.` },
        ],
      },
      {
        heading: "Expertise gained",
        blocks: [
          { t: "p", html: `On this project we built deep expertise in:` },
          { t: "ul", items: [
            `ComfyUI workflow architecture, including debugging, library management, and the ComfyUI Manager ecosystem`,
            `Open-source video model capabilities, in particular the strengths and weaknesses of Wan 2.2 (excellent for motion transfer, weaker for generation from scratch)`,
            `GPU resource optimization: getting production quality on consumer GPUs instead of enterprise hardware`,
            `Video post-processing integration: upscaling and frame interpolation built into the main generation workflow`,
            `Production stabilization: dealing with the inevitable breakages when custom node maintainers change repositories, model versions go stale, and so on`,
          ] },
        ],
      },
      {
        heading: "Result",
        blocks: [
          { t: "stats", items: [
            { number: "84%", label: "Cost reduction at production scale" },
            { number: "~$12K", label: "Annual savings per client" },
            { number: "~$0.19", label: "Cost per video for a 30-second clip" },
            { number: "100+/h", label: "Target industrial throughput" },
          ] },
          { t: "ul", items: [
            `4–5 months of continuous production use at 2 commercial clients in active content production`,
            `Industrial output: supports a target throughput of 100+ videos an hour`,
            `Capabilities beyond premium services: no 30-second cap on video length`,
            `An integrated foundation for a broader automated content production pipeline`,
            `Operational flexibility: no content policy restrictions and no credit limits beyond infrastructure capacity`,
          ] },
        ],
      },
      {
        heading: "Tech stack",
        blocks: [
          { t: "table", rows: [
            ["AI model", "Wan 2.2 (open source)"],
            ["Workflow engine", "ComfyUI"],
            ["Segmentation", "Automatic segmentation models"],
            ["GPU compute", "RunningHub (RTX 5080 class)"],
            ["Video processing", "FFmpeg"],
            ["Post-processing", "Upscaling · Frame interpolation"],
          ] },
        ],
      },
      {
        heading: "What this demonstrates",
        blocks: [
          { t: "ul", items: [
            `Deep open-source AI expertise: finding, debugging, and bringing to production workflows that are undocumented and little known`,
            `Cost arbitrage thinking: seeing when premium services charge dollars for capabilities that open source delivers for cents`,
            `Finding capability gaps: finding business value in what premium services don't offer at all (long-form motion control)`,
            `Production engineering: turning broken or impractical workflows into industrial-grade reliable ones`,
            `Workflow architecture: linking several processing stages (motion control + segmentation + upscaling + interpolation) into coherent production pipelines`,
            `GPU compute optimization: production results on consumer-tier hardware`,
          ] },
        ],
      },
    ],
    prev: { href: "/en/work/open-source-lipsync", label: "← Back: Lip-sync system" },
    next: { href: "/en/work/video-localization", label: "Next: Video localization →" },
  },
  {
    slug: "telegram-receipts",
    eyebrow: "Case 07",
    title: "Receipt and expense tracking platform in Telegram for teams across 12 regions",
    lead: "142 bots in production, 2.41M messages and 51,200 receipts in 30 days at 99.98% uptime. Each team works in its own bot, a person checks every receipt, and daily reconciliations build themselves.",
    meta: {
      role: "Development and operations",
      timeline: "Running in production",
      status: "142 bots",
    },
    sections: [
      {
        heading: "The problem",
        blocks: [
          { t: "p", html: `Teams at a financial service in 12 regions tracked receipts and expenses by hand: photos in shared chats, amounts in spreadsheets, reconciliations in the evening. Data got lost, currencies got mixed up, and participants' identities overlapped in shared chats.` },
          { t: "p", html: `They needed a system where each team lives in its own isolated space, a receipt is logged in seconds, a person confirms each one, and the reconciliation report arrives on its own.` },
        ],
      },
      {
        heading: "The solution",
        blocks: [
          { t: "p", html: `We built a multi-tenant platform on Telegram: each team has its own bot, so participants' identities never overlap.` },
          { t: "ul", items: [
            `<strong>Receipt intake.</strong> The photo and amount are logged in the team's bot, then the receipt goes to a person for review.`,
            `<strong>Human review.</strong> Approve, reject, or send back for rework. The decision always stays with a person.`,
            `<strong>Multi-currency accounting.</strong> Reconciliations across 12 regional currencies, with rates updated and sent to linked chats.`,
            `<strong>Daily reconciliations.</strong> Reports build themselves on each chat's working hours.`,
            `<strong>Audit log.</strong> Every message and edit is saved and can be replayed.`,
          ] },
          { t: "p", html: `The system only does accounting and reconciliation: it never moves money.` },
        ],
      },
      {
        heading: "Technology",
        blocks: [
          { t: "p", html: `Python, python-telegram-bot and aiogram, SQLite, systemd, DigitalOcean (Linux). Built and maintained by a single engineer.` },
        ],
      },
      {
        heading: "Result",
        blocks: [
          { t: "stats", items: [
            { number: "142", label: "Active bots" },
            { number: "2.41M", label: "Messages in 30 days" },
            { number: "91.4%", label: "Receipts approved (51.2K in 30 days)" },
            { number: "99.98%", label: "Uptime over 90 days, no customer-facing incidents" },
          ] },
          { t: "p", html: `The platform runs unattended: queues, monitoring, and restarts don't lose state, and the audit log lets you reconstruct any chain of events.` },
        ],
      },
    ],
    prev: { href: "/en/work/video-localization", label: "← Back: Video localization" },
    next: { href: "/en/work/sinner-threads", label: "Next: Clothing online store →" },
  },
  {
    slug: "sinner-threads",
    eyebrow: "Case 08",
    title: "A branded clothing store that pulls its catalog from the supplier on its own",
    lead: "A storefront for Ukrainian clothing and accessories resale: products, photos, sizes, and stock come from the supplier's catalog, and the site shows only what's in stock. Cart, checkout, and two language versions built in one day.",
    meta: {
      role: "Turnkey development",
      timeline: "1 day for the first version",
      status: "Storefront on Vercel",
      link: { href: "https://sinner-threads-aer6.vercel.app/en", text: "Open the store →" },
    },
    sections: [
      {
        heading: "The problem",
        blocks: [
          { t: "p", html: `A resale store for branded clothing and accessories in Ukraine runs on dropshipping: the goods sit with the supplier, and the seller only displays them and takes orders. Keeping such a catalog by hand means rewriting photos, sizes, prices, and stock every day.` },
          { t: "p", html: `The buyer is mostly on a phone and wants to see three things right away: what exactly is for sale, whether their size is available, and how it gets to them (delivery by Nova Poshta). The store had to answer this on the first screen and not need manual upkeep.` },
        ],
      },
      {
        heading: "The solution",
        blocks: [
          { t: "p", html: `We built a store where the catalog lives in the supplier's system and the site only displays it, cleanly and honestly.` },
          { t: "h3", text: "A catalog with no manual work" },
          { t: "p", html: `The whole storefront comes from a single request to the supplier's API: categories, photos, sizes, stock, and prices. Data is cached for 15 minutes, the same as in the supplier's own system. Items without photos, bundles, and packaging are filtered out, so the storefront always looks tidy.` },
          { t: "h3", text: "Price and availability under control" },
          { t: "p", html: `The buyer sees the supplier's recommended price, or, if there isn't one, the purchase price plus a markup. The cart is stored on the server: prices and stock are re-checked on every change and again at checkout, so a price can't be tampered with in the browser.` },
          { t: "h3", text: "Checkout" },
          { t: "p", html: `Cash on delivery works right away, and card payment is connected through LiqPay or WayForPay. The order is created in the supplier's CRM and goes on to them for packing and shipping.` },
          { t: "h3", text: "A storefront that sells with the product" },
          { t: "p", html: `The first screen shows what's for sale straight away: a large headline and real products in stock, with no abstract imagery. Size and availability are visible everywhere a product appears, and out-of-stock items are shown greyed out rather than with a badge on the photo. The design is black and white, with dashed "seams" instead of cards and shadows, an animated thread in the background, and a category carousel.` },
          { t: "h3", text: "Two language versions" },
          { t: "p", html: `Ukrainian by default and a full English version at <strong>/en</strong>, with a language switcher and separate metadata for search engines.` },
        ],
      },
      {
        heading: "Technology",
        blocks: [
          { t: "p", html: `Next.js, React, and Tailwind CSS. The catalog and orders go through the supplier's API (MyDrop), while carts and orders are stored in Supabase (Postgres) with server-only access. Payments through LiqPay and WayForPay, deployed on Vercel. Animations with Motion, Phosphor icons, sitemap and robots for search.` },
        ],
      },
      {
        heading: "Result",
        blocks: [
          { t: "stats", items: [
            { number: "1 day", label: "From idea to a working storefront" },
            { number: "15 min", label: "Catalog freshness with no manual work" },
            { number: "2", label: "Language versions, UA and EN" },
          ] },
          { t: "p", html: `The store runs on Vercel, the catalog updates itself, and the owner doesn't have to maintain product cards or stock. To accept real orders, the seller's details and a payment provider still need to be connected.` },
        ],
      },
    ],
    prev: { href: "/en/work/telegram-receipts", label: "← Back: Telegram receipts platform" },
    next: { href: "/en#work", label: "All cases →" },
  },
];

export const caseSlugs = cases.map((c) => c.slug);

export function getCase(slug: string): CaseStudy | undefined {
  return cases.find((c) => c.slug === slug);
}
