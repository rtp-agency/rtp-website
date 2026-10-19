// English blog content. Slugs, dates and related links match the Russian source.

import { type Post, type PostBlock } from "../posts";

export type { PostBlock };

const DATE = "2026-10-19";

export const posts: Post[] = [
  {
    slug: "chto-mozhno-avtomatizirovat-s-pomoshchyu-ii",
    title: "What Can Small Businesses Automate With AI: 7 Processes",
    description:
      "Which routine processes AI can take over in a small business: customer replies, leads, content, documents. What fits, what doesn't, and where to start.",
    excerpt:
      "Seven processes where AI already saves your team hours today, and three that are too early to automate.",
    tag: "Basics",
    published: DATE,
    updated: DATE,
    keywords: [
      "business process automation",
      "AI for small business",
      "what to automate with AI",
      "automate repetitive tasks",
    ],
    body: [
      {
        t: "p",
        html: `"Adopting AI" sounds like a big undertaking, but in practice it is almost always one specific process: someone on the team spends hours every day on repetitive work. Below are the seven processes we automate most often, and an honest list of where AI is better not left on its own.`,
      },
      { t: "h2", text: "When a process is a good fit for AI" },
      {
        t: "p",
        html: `There is a simple filter of three questions. If the answer to all three is "yes", automation will most likely pay off.`,
      },
      {
        t: "ol",
        items: [
          "The process repeats every day or week in a similar form.",
          "The input is text, voice, an image or a spreadsheet, in other words something AI can read.",
          "A mistake can be caught and fixed before it gets expensive: there is a check, or a person who clicks \"approve\".",
        ],
      },
      { t: "h2", text: "7 processes most teams start with" },
      { t: "h3", text: "1. Answering routine customer questions" },
      {
        t: "p",
        html: `"How much is delivery", "do you have size M", "how do I book". An AI assistant answers in a messenger or on your website within seconds, drawing on your knowledge base, and brings in a person when the question goes beyond it. For more on how this works, see <a href="/en/blog/ii-assistent-dlya-zayavok-telegram">our separate article</a>.`,
      },
      { t: "h3", text: "2. Lead intake and qualification" },
      {
        t: "p",
        html: `Leads arrive from forms, Instagram, Telegram and phone calls. AI collects the missing details (what the customer needs, when, what budget), fills in the CRM card and passes to a manager only the people who are ready to talk.`,
      },
      { t: "h3", text: "3. Content for social media and newsletters" },
      {
        t: "p",
        html: `Ideas, drafts, visuals, scheduled publishing. The key phrase is "in your voice": a good system learns from the author's real texts and checks every draft against their style. That is how the <a href="/en/work/threads-content-system">Threads content system, where one post reached 770,000 views</a>, works.`,
      },
      { t: "h3", text: "4. Product descriptions and catalog cards" },
      {
        t: "p",
        html: `When a catalog has hundreds of items, manual descriptions and translations become the bottleneck. AI writes a description from the specs and photos, and the rules (length, tone, banned words) are set once.`,
      },
      { t: "h3", text: "5. Documents and reports" },
      {
        t: "p",
        html: `Standard contracts, invoices, weekly client reports. Data is pulled from the CRM or a spreadsheet, the text is assembled from a template, and a person reviews the result.`,
      },
      { t: "h3", text: "6. Processing incoming items: receipts, invoices, emails" },
      {
        t: "p",
        html: `A photo of a receipt becomes a ledger entry, an email request becomes a task, an invoice becomes a record for the accountant. We built a <a href="/en/work/telegram-receipts">receipt tracking platform in Telegram</a> this way: a bot takes the receipt, a person confirms it, and the system consolidates expenses by currency.`,
      },
      { t: "h3", text: "7. Video and graphics at scale" },
      {
        t: "p",
        html: `Editing training videos, localization, creative variations. This is where AI gives the most noticeable time savings: in one of our projects, <a href="/en/work/black-camel">an hour of manual editing turned into a few minutes</a>.`,
      },
      { t: "h2", text: "Where AI is better not left on its own" },
      {
        t: "ul",
        items: [
          "<strong>Payments and refunds.</strong> A person should confirm any decision about money. AI can prepare it, but not press the button.",
          "<strong>Legal and medical conclusions.</strong> A draft is fine; the final answer is not.",
          "<strong>Rare, one-off cases.</strong> If the process is different every time, there is nothing to automate.",
        ],
      },
      { t: "h2", text: "How to choose your first process" },
      {
        t: "p",
        html: `Write down what your team spends the most time on in a week, then pick the task that passes the three questions above and causes the most visible pain. It is better to make your first project a small one, so the result shows up in weeks, not quarters. A step-by-step walkthrough is in our article on <a href="/en/blog/s-chego-nachat-avtomatizatsiyu-biznesa">where to start with automation</a>.`,
      },
      {
        t: "note",
        html: `Not sure which process to pick? In a <a href="/en#contact">free 30-minute teardown</a> we will go through your tasks together and name the one that makes the most sense to hand to AI first.`,
      },
    ],
    faq: [
      {
        q: "Do I need my own IT team to adopt AI?",
        a: "No. The solution is built around your process and connects to the tools you already use: Telegram, your CRM, spreadsheets. Support stays with the contractor.",
      },
      {
        q: "Can AI make mistakes?",
        a: "Yes. That is why reliable systems include checks, limits on what AI can do on its own, and a person who confirms important actions.",
      },
      {
        q: "Where is the best place to start?",
        a: "With one repetitive process where your team loses the most time and where the result is easy to check: customer replies, lead handling or content.",
      },
    ],
    related: [
      "s-chego-nachat-avtomatizatsiyu-biznesa",
      "ii-assistent-dlya-zayavok-telegram",
    ],
  },

  {
    slug: "ii-assistent-dlya-zayavok-telegram",
    title: "AI Assistant for Telegram Leads: How It Works and Where It Stops",
    description:
      "How an AI assistant answers customers and takes leads in Telegram and other messengers: how it works, what to prepare, common mistakes and metrics.",
    excerpt:
      "How the assistant works from the first message to the CRM, what to prepare in advance, and how to tell it is working.",
    tag: "Customers and leads",
    published: DATE,
    updated: DATE,
    keywords: [
      "AI assistant for business",
      "lead handling automation",
      "Telegram bot for business",
      "customer support chatbot",
    ],
    body: [
      {
        t: "p",
        html: `A customer writes in Telegram at ten in the evening and wants to know the price and the timeline. If the reply comes in the morning, some of those people will have already bought from someone else. An AI assistant closes that gap: it replies right away, collects the details and hands the manager a prepared lead.`,
      },
      { t: "h2", text: "How it works, step by step" },
      {
        t: "ol",
        items: [
          "<strong>Incoming message.</strong> The customer writes in Telegram, on your website or in another channel.",
          "<strong>Understanding the request.</strong> The assistant works out what the person wants: a price, placing an order, making a complaint.",
          "<strong>Answering from the knowledge base.</strong> The reply is built from your materials: price list, delivery terms, frequent questions. Not from the model's imagination.",
          "<strong>Collecting details.</strong> The assistant asks for whatever is missing: name, contact, task, timeline.",
          "<strong>Handing off to a person.</strong> If the question is complex or the customer asks for a manager, the conversation moves to a person together with its history.",
          "<strong>Writing to the CRM.</strong> A lead is created with tags and a status, so nothing gets lost.",
        ],
      },
      { t: "h2", text: "What to prepare in advance" },
      {
        t: "ul",
        items: [
          "<strong>A knowledge base.</strong> Current prices, terms, and answers to the 20-30 most frequent questions. The quality of the assistant depends almost entirely on the quality of these materials.",
          "<strong>Handoff rules.</strong> Which topics the assistant stays away from: discounts, complaints, non-standard orders.",
          "<strong>Tone of voice.</strong> How you talk to customers: formal or casual, short or detailed.",
          "<strong>Where leads go.</strong> A CRM, a spreadsheet or a managers' chat.",
        ],
      },
      { t: "h2", text: "Common mistakes" },
      {
        t: "ul",
        items: [
          "<strong>The assistant confidently makes things up.</strong> The fix is a restriction: answer only from the knowledge base, and when there is no answer, say so and bring in a person.",
          "<strong>No way out to a person.</strong> The customer gets stuck in the conversation. There must always be a clear handoff.",
          "<strong>No conversation memory.</strong> The assistant asks again for things the customer has already said.",
          "<strong>Launching without tests.</strong> Before launch, run 50-100 real questions from your past conversations through it.",
        ],
      },
      { t: "h2", text: "How to tell it is working" },
      {
        t: "table",
        head: ["Metric", "What it shows"],
        rows: [
          ["First response time", "How much faster customers get a reaction"],
          ["Share of conversations handled without a person", "How much routine has actually been taken off the team"],
          ["Share of leads reaching a manager with complete data", "Quality of collection and qualification"],
          ["Lead-to-sale conversion", "Whether things got worse after launch"],
        ],
      },
      { t: "h2", text: "Where Telegram fits in" },
      {
        t: "p",
        html: `For many businesses, Telegram is already a working channel: customers and the team are there every day. That makes it convenient to build the assistant right into it, with no new apps. We have built both client and internal solutions on it, for example a <a href="/en/work/telegram-receipts">platform of 142 bots</a>, where each team works in its own isolated bot and the platform has held about 99.98% uptime over 90 days. And in <a href="/en/work/metra-ai">Metra AI</a>, the assistant handles leads in a business's direct messages and decides on its own when to bring in a person.`,
      },
      {
        t: "note",
        html: `Want to know how many leads and hours you could take off your team? Tell us about your process in a <a href="/en#contact">free teardown</a>, and we will put numbers on it.`,
      },
    ],
    faq: [
      {
        q: "How is an assistant different from a regular chatbot?",
        a: "A regular bot works with buttons and pre-written branches. An assistant understands free text and answers from your knowledge base. There is a detailed comparison in the article \"Chatbot or AI assistant\".",
      },
      {
        q: "What if a customer asks something that is not in the knowledge base?",
        a: "A well-configured assistant does not invent an answer. It says it will check, and passes the conversation to a manager together with the context.",
      },
      {
        q: "Can the assistant be connected to a CRM?",
        a: "Yes. Leads and conversation history are written to your CRM or spreadsheet, so your team keeps working in the tools it knows.",
      },
    ],
    related: [
      "chat-bot-ili-ii-assistent",
      "integratsii-ii-s-crm-sheets-telegram",
    ],
  },

  {
    slug: "chat-bot-ili-ii-assistent",
    title: "Chatbot vs AI Assistant: What's the Difference and Which to Choose",
    description:
      "A scripted chatbot and an AI assistant solve different problems. We compare pros and cons, the hybrid option and how to choose for your business.",
    excerpt:
      "Buttons and branches or free text: when a simple bot is enough, when you need an assistant, and why a combination works best.",
    tag: "Choosing a solution",
    published: DATE,
    updated: DATE,
    keywords: [
      "chatbot vs AI assistant",
      "customer support chatbot",
      "AI assistant for business",
      "scripted chatbot",
    ],
    body: [
      {
        t: "p",
        html: `Both are called a "bot", but they work differently, and choosing wrong gets expensive: either customers get annoyed by rigid buttons, or you pay for intelligence where a simple form would have done.`,
      },
      { t: "h2", text: "The scripted bot" },
      {
        t: "p",
        html: `This is a pre-drawn tree: buttons, branches, ready-made answers. The bot does not "understand"; it walks the person along a route.`,
      },
      {
        t: "ul",
        items: [
          "<strong>Pros:</strong> predictable, cheap to maintain, and it cannot say anything it shouldn't.",
          "<strong>Cons:</strong> any question outside the tree stumps it, and the tree keeps growing and is hard to change.",
        ],
      },
      { t: "h2", text: "The AI assistant" },
      {
        t: "p",
        html: `It understands free text, answers from your materials, and can ask clarifying questions and carry a conversation. You do not need to draw every branch.`,
      },
      {
        t: "ul",
        items: [
          "<strong>Pros:</strong> handles non-standard phrasing, updates quickly along with the knowledge base, and takes more routine off your team.",
          "<strong>Cons:</strong> it needs limits and checks, otherwise confident inaccuracies are possible, and quality depends on the materials.",
        ],
      },
      { t: "h2", text: "Comparison" },
      {
        t: "table",
        head: ["", "Scripted bot", "AI assistant"],
        rows: [
          ["How it communicates", "Buttons and fixed branches", "Free text"],
          ["What it does with an unexpected question", "Gets lost", "Answers from the knowledge base or brings in a person"],
          ["How to update it", "Redraw the tree", "Update the knowledge base"],
          ["Risk of a wrong answer", "Almost zero", "Present, reduced by limits"],
          ["Best for", "Simple choices: booking, order status", "Consultations, leads, complex questions"],
        ],
      },
      { t: "h2", text: "A combination works best" },
      {
        t: "p",
        html: `In practice we most often build a hybrid. Where precision matters (order status, booking a time slot, payment), a clear script runs. Where the customer phrases things their own way (consultation, product selection, clarification), AI steps in. And critical decisions are always confirmed by a person.`,
      },
      { t: "h2", text: "How to choose" },
      {
        t: "ul",
        items: [
          "Customer questions are repetitive and there aren't many: a scripted bot is enough.",
          "Phrasing varies and the catalog or terms are large: you need an AI assistant.",
          "The cost of a mistake is high: a hybrid with human confirmation.",
        ],
      },
      {
        t: "note",
        html: `Not sure which option suits you? We will <a href="/en#contact">go through your process for free</a> and propose a solution built for it, not for a buzzword.`,
      },
    ],
    faq: [
      {
        q: "Which costs more to maintain: a bot or an assistant?",
        a: "A scripted bot is simpler, but the tree has to be redone with every change. An assistant is updated through the knowledge base, but needs quality checks. The total cost depends on the task and is calculated in the teardown.",
      },
      {
        q: "Can an AI assistant make a mistake?",
        a: "Yes, just like a person. The risk is reduced by restricting answers to the knowledge base, by checks, and by passing complex cases to a manager.",
      },
    ],
    related: [
      "ii-assistent-dlya-zayavok-telegram",
      "chto-mozhno-avtomatizirovat-s-pomoshchyu-ii",
    ],
  },

  {
    slug: "kak-avtomatizirovat-kontent-i-sohranit-golos",
    title: "How to Automate Content Without Losing Your Brand Voice",
    description:
      "How to run social media with AI without sounding like a robot: format ranking, a voice profile, style checks and one-tap approval. Based on a real case.",
    excerpt:
      "Why AI texts all sound the same and how to fix it: a breakdown of a real system where one post reached 770,000 views.",
    tag: "Content",
    published: DATE,
    updated: DATE,
    keywords: [
      "content automation",
      "AI for social media",
      "AI post generator",
      "AI content plan",
    ],
    body: [
      {
        t: "p",
        html: `Anyone who has asked a model to "write a post" knows the result: smooth, correct and completely faceless. The problem is not AI, but that it was given neither the author's voice nor an understanding of which formats work for your audience. Below is what you need to add to change that.`,
      },
      { t: "h2", text: "Step 1. Find out which formats work" },
      {
        t: "p",
        html: `Before generating anything, export all the account's posts and sort them by reach. That shows which formats your audience actually responds to. Most systems skip this step and write blind, yet landing in a format that works on the platform is half of the result.`,
      },
      { t: "h2", text: "Step 2. Build a voice profile" },
      {
        t: "p",
        html: `General instructions like "write boldly and with humor" do almost nothing. What works is taking the author's real posts, picking the few most similar successful examples for each new generation and showing them to the model. That way it picks up not a "tone" but a specific, living style.`,
      },
      { t: "h2", text: "Step 3. Check every draft" },
      {
        t: "p",
        html: `A second pass: another model scores the draft against the author's voice and sends it back for revision until it clears a threshold. This filters out faceless text before a person ever sees it.`,
      },
      { t: "h2", text: "Step 4. One-tap approval" },
      {
        t: "p",
        html: `Finished cards arrive in the author's Telegram: approve, edit, reject, regenerate. Approved posts publish themselves on a schedule. The person stays the editor but spends minutes, not hours.`,
      },
      { t: "h2", text: "Step 5. Train the system on results" },
      {
        t: "p",
        html: `If the author marks posts ("my voice / not my voice") and the system sees which posts led to inquiries, then every week it gets more accurate in both style and the formats that convert.`,
      },
      { t: "h2", text: "What this produced in practice" },
      {
        t: "p",
        html: `This is how the system for a private tutor's Threads account is built: one post reached 770,000 views and 35,000 likes, became the account's top post, and a major telecom brand showed up in the comments. Most importantly, after that, such results stopped depending on the author's mood and free time: content goes out every day. The full breakdown is in the <a href="/en/work/threads-content-system">case study</a>.`,
      },
      {
        t: "note",
        html: `Want the same for your own account or channel? <a href="/en#contact">Let's discuss it in a free teardown</a>, including which format to start with.`,
      },
    ],
    faq: [
      {
        q: "Won't the texts all end up the same and sound like AI?",
        a: "They will if you write without a voice profile and checks. A voice profile built from real posts and a second-pass style check are exactly what remove that problem.",
      },
      {
        q: "Does the author need to review every post?",
        a: "We recommend it, with one tap in Telegram. It keeps control in your hands and protects against weak texts.",
      },
    ],
    related: [
      "chto-mozhno-avtomatizirovat-s-pomoshchyu-ii",
      "avtomatizatsiya-videomontazha",
    ],
  },

  {
    slug: "avtomatizatsiya-videomontazha",
    title: "Video Editing Automation: How an Hour of Work Becomes Minutes",
    description:
      "Which stages of editing training and content videos can be automated: audio cleanup, retakes, cutting, overlays. How it works and where a person is needed.",
    excerpt:
      "A breakdown of a pipeline where an hour of manual editing per video drops to about three minutes and a person only approves the result.",
    tag: "Video",
    published: DATE,
    updated: DATE,
    keywords: [
      "video editing automation",
      "AI video editing",
      "batch video processing",
      "video localization",
    ],
    body: [
      {
        t: "p",
        html: `If you shoot lessons, webinars or similar videos, editing quickly becomes the bottleneck: one video, one editor, an hour of work. When there are hundreds of videos, that runs into limits on people and deadlines. But a good part of editing repeats from video to video, which means it can be automated.`,
      },
      { t: "h2", text: "What repeats in editing" },
      {
        t: "ol",
        items: [
          "<strong>Audio cleanup.</strong> Noise reduction and leveling the voice.",
          "<strong>Finding repeated takes.</strong> The speaker repeated a phrase; the system finds the repeats and suggests keeping the best one.",
          "<strong>Cutting.</strong> Removing pauses, slips and unneeded fragments.",
          "<strong>Overlays and styling.</strong> Titles, lower thirds and a logo from a single template.",
          "<strong>Rendering.</strong> Assembly and export in the required format.",
        ],
      },
      { t: "h2", text: "Where the person stays" },
      {
        t: "p",
        html: `A good system does not cut blindly. The editor opens the video in a browser, sees the repeats it found with the option to listen to each, confirms or cancels the cuts, and only then sends it to the final render. Automation provides the speed; the decision stays with the person.`,
      },
      { t: "h2", text: "What this means in numbers" },
      {
        t: "p",
        html: `In a project for a London video agency, <a href="/en/work/black-camel">manual editing of about an hour per video turned into processing in roughly three minutes</a>. The pipeline is built for hundreds of videos in a stream, not a one-off job.`,
      },
      { t: "h2", text: "Another source of savings: the models" },
      {
        t: "p",
        html: `Lip-sync video (matching lip movement to speech) and motion transfer on premium services are billed per minute of video. At volume, that is serious money. We have replaced such APIs with our own workflows on open models: in <a href="/en/work/open-source-lipsync">lip-sync</a> the cost dropped by more than 99% at comparable quality, and in <a href="/en/work/motion-control">motion control</a> by 84%. This works when volume is high and the task repeats.`,
      },
      { t: "h2", text: "Where to start" },
      {
        t: "ul",
        items: [
          "Count how many hours a month go into repetitive editing.",
          "List the steps that repeat in every video.",
          "Automate the most time-consuming step first, not everything at once.",
        ],
      },
      {
        t: "note",
        html: `Have a stream of videos and a bottleneck in editing or generation? <a href="/en#contact">Show us in a free teardown</a>, and we will see what can realistically be automated and how much it would save.`,
      },
    ],
    faq: [
      {
        q: "Is automated editing lower quality than manual editing?",
        a: "On repetitive operations there is almost no difference, and the editor confirms the cutting decisions. Creative work stays with people.",
      },
      {
        q: "Does it make sense for a small number of videos?",
        a: "The benefit grows with volume. For a handful of videos it is usually easier to edit by hand, while for a stream it brings noticeable savings.",
      },
    ],
    related: [
      "kak-avtomatizirovat-kontent-i-sohranit-golos",
      "s-chego-nachat-avtomatizatsiyu-biznesa",
    ],
  },

  {
    slug: "s-chego-nachat-avtomatizatsiyu-biznesa",
    title: "Where to Start Automating Your Business: How to Pick the First Process",
    description:
      "A step-by-step way to choose your first process to automate with AI, estimate the payoff in hours and money, and avoid spending effort on what won't pay back.",
    excerpt:
      "A simple selection matrix, a payback formula and a pilot project that delivers results in weeks.",
    tag: "Basics",
    published: DATE,
    updated: DATE,
    keywords: [
      "where to start with automation",
      "business process automation",
      "automation ROI",
      "automation pilot project",
    ],
    body: [
      {
        t: "p",
        html: `The most common mistake is starting with the most ambitious thing. "Let's automate everything" ends in a long project with no visible result. It is better to pick one process and finish it, then choose the next one based on the results.`,
      },
      { t: "h2", text: "Step 1. List your routine tasks" },
      {
        t: "p",
        html: `Ask your team to write down for a week where their time goes: answering repetitive questions, moving data, preparing reports, publishing, handling leads. That gives you a list of candidates.`,
      },
      { t: "h2", text: "Step 2. Score each candidate" },
      {
        t: "table",
        head: ["Criterion", "Question"],
        rows: [
          ["Frequency", "How often does the process repeat?"],
          ["Pain", "How many hours a week does it eat up, and how annoying is it?"],
          ["Simplicity", "Is it clear what a correct result looks like?"],
          ["Risk", "What does a mistake cost, and can it be caught before it has consequences?"],
        ],
      },
      {
        t: "p",
        html: `The best first candidate is frequent, painful, has a clear result and carries low risk. That is the kind that gives a fast, visible return.`,
      },
      { t: "h2", text: "Step 3. Calculate the payoff" },
      {
        t: "p",
        html: `The formula is simple: <strong>hours per month × the employee's hourly cost = the cost of the process</strong>. Compare it with what you are willing to invest, and count not only money but also speed: replying to a customer in seconds instead of hours is value too. We work out the specific number for your process in a <a href="/en#contact">free teardown</a>.`,
      },
      { t: "h2", text: "Step 4. Run a pilot" },
      {
        t: "ul",
        items: [
          "Take a small piece of the process, not all of it.",
          "Keep a person who confirms important actions.",
          "Decide in advance which metrics will tell you it works: time, volume handled, errors.",
        ],
      },
      { t: "h2", text: "Step 5. Expand based on results" },
      {
        t: "p",
        html: `Once the pilot has shown numbers, add the next steps and processes. That way the solution grows alongside your understanding instead of running ahead of it.`,
      },
      { t: "h2", text: "What not to do" },
      {
        t: "ul",
        items: [
          "Automate a process nobody has described: first order, then AI.",
          "Remove the human from critical decisions in the first phase.",
          "Replace all your tools at once: it is better to connect to the ones you already have.",
        ],
      },
      {
        t: "note",
        html: `Want help choosing the first process? In a <a href="/en#contact">30-minute teardown</a> we will find the one that gives the most and show you a launch plan.`,
      },
    ],
    faq: [
      {
        q: "How long does the first project take?",
        a: "It depends on the process: a simple workflow can be built in a matter of days, while complex systems take weeks. We give exact timelines after the teardown.",
      },
      {
        q: "Do I need to prepare data in advance?",
        a: "The better the process is described and the cleaner the materials (price list, knowledge base, templates), the faster and more accurate the result. We help with this preparation.",
      },
    ],
    related: [
      "chto-mozhno-avtomatizirovat-s-pomoshchyu-ii",
      "integratsii-ii-s-crm-sheets-telegram",
    ],
  },

  {
    slug: "integratsii-ii-s-crm-sheets-telegram",
    title: "How to Connect AI to Your CRM, Google Sheets and Telegram Without Switching Tools",
    description:
      "How to build AI into the tools you already use: CRM, spreadsheets, Telegram, Slack. Safe access principles, APIs and webhooks, action logs and human approval.",
    excerpt:
      "You don't have to replace the systems you know: how AI connects to them, how to limit its permissions and what to log.",
    tag: "Integrations",
    published: DATE,
    updated: DATE,
    keywords: [
      "AI CRM integration",
      "AI Google Sheets automation",
      "Telegram bot for business",
      "API automation",
    ],
    body: [
      {
        t: "p",
        html: `A common worry: "to adopt AI, we'll have to change our CRM and rebuild everything." In practice it is the opposite: a good AI process connects to what your team uses today and does not require switching.`,
      },
      { t: "h2", text: "How AI connects to your systems" },
      {
        t: "ul",
        items: [
          "<strong>APIs and webhooks.</strong> Most modern services (HubSpot, Slack, Xero, Notion, Stripe and others) provide data and accept commands through an API. Webhooks tell the system about events: a new lead, a payment, a status change.",
          "<strong>Google Sheets.</strong> A spreadsheet often becomes a lightweight CRM or log: AI reads and appends rows, and your team sees everything the way it is used to.",
          "<strong>Telegram as an interface.</strong> Approvals, notifications and reports are convenient to receive where your team already talks.",
          "<strong>Email and documents.</strong> Incoming emails, invoices and files are parsed and sorted into your systems.",
        ],
      },
      {
        t: "p",
        html: `The full list of services we work with is <a href="/en#stack">on the home page</a>.`,
      },
      { t: "h2", text: "How to do it safely" },
      {
        t: "ol",
        items: [
          "<strong>Minimum permissions.</strong> We start with read-only access and expand it only when the task truly requires it.",
          "<strong>Human confirmation.</strong> Actions involving money, publications and outgoing emails wait for approval.",
          "<strong>An action log.</strong> Every AI action is recorded and can be reviewed and replayed.",
          "<strong>Data limits.</strong> AI sees only what the task needs, not the whole database.",
        ],
      },
      { t: "h2", text: "What we do in practice" },
      {
        t: "p",
        html: `In one project we connected HubSpot, Monday, Slack and Xero through REST and webhooks, while a receipt tracking bot wrote data to Google Sheets and sent daily reports. A similar principle underlies the <a href="/en/work/telegram-receipts">receipt tracking platform</a>: the system only handles tracking and reconciliation and never moves money itself, and every message and edit is stored and can be replayed.`,
      },
      { t: "h2", text: "Checklist before integrating" },
      {
        t: "ul",
        items: [
          "Which systems are involved and which of them have an API.",
          "Who owns the data and who approves access.",
          "Which actions AI can take on its own and which it can only suggest.",
          "Where the log is kept and who reviews it.",
        ],
      },
      {
        t: "note",
        html: `Tell us which systems your team uses, and in a <a href="/en#contact">free teardown</a> we will show how to connect AI to them without switching.`,
      },
    ],
    faq: [
      {
        q: "Will I have to change my CRM?",
        a: "No. AI connects to your current system through its API, and you keep working in the interface you know.",
      },
      {
        q: "Is it safe to give AI access to my data?",
        a: "Yes, if access is limited: read-only at first, minimum permissions, human confirmation for important actions and a log of all operations.",
      },
    ],
    related: [
      "ii-assistent-dlya-zayavok-telegram",
      "s-chego-nachat-avtomatizatsiyu-biznesa",
    ],
  },
];

export const postSlugs = posts.map((p) => p.slug);

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
