export const services = [
  {
    slug: "web-development",
    icon: "code",
    nav: "Web Development",
    title: "Website & Web App Development",
    tagline: "Fast, modern websites and web apps that turn visitors into enquiries.",
    summary:
      "Business websites, landing pages and full web apps in Next.js and the MERN stack — quick to load, easy to find on Google and built to last.",
    intro:
      "From a five-page business website to a full SaaS dashboard, I build in Next.js, React and Node.js. Every page is responsive, SEO-ready and tested before it reaches your customers.",
    deliverables: [
      "Business & marketing websites",
      "Custom web apps and SaaS dashboards",
      "REST APIs, JWT authentication and databases",
      "Pixel-accurate Figma-to-code builds",
      "Technical SEO, schema markup and Core Web Vitals",
      "Playwright tests before every release",
    ],
    stack: ["Next.js", "React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Vercel"],
    metaTitle: "Freelance Next.js & MERN Developer for Websites and Web Apps",
    metaDescription:
      "Hire a freelance Next.js and MERN stack developer for fast, SEO-ready business websites, landing pages and custom web apps. Fixed quotes, tested releases, worldwide clients.",
    keywords: ["freelance Next.js developer", "MERN stack developer", "hire React developer", "web app development", "business website developer"],
    faqs: [
      {
        q: "Can you work from my Figma or Adobe XD designs?",
        a: "Yes. I turn designs into responsive, pixel-accurate pages and wire them to real APIs. If you don't have a design yet, I can plan the layout with you first.",
      },
      {
        q: "Will my website be easy to update?",
        a: "Yes. Content can be edited through a headless CMS or simple data files, depending on your budget, and I show you how before handover.",
      },
      {
        q: "Do you handle hosting and deployment?",
        a: "I deploy to Vercel or your own server, connect your domain and set up SSL, analytics and basic monitoring.",
      },
    ],
  },
  {
    slug: "shopify-development",
    icon: "bag",
    nav: "Shopify Development",
    title: "Custom Shopify Development",
    tagline: "Shopify stores built with hand-coded Liquid, not a theme with your logo swapped in.",
    summary:
      "New stores, custom Liquid sections and theme redesigns on Online Store 2.0 — fast product pages, smooth carts and a checkout that's ready to take orders.",
    intro:
      "I build and customise Shopify stores with hand-written Liquid, HTML, CSS and JavaScript. You get a store that looks like your brand, loads fast on mobile and is simple to manage yourself.",
    deliverables: [
      "New store setup and launch",
      "Custom Liquid sections and templates (OS 2.0)",
      "Theme customisation and redesign",
      "Product pages, collections and cart drawer UX",
      "Payment, shipping and app setup",
      "Speed optimisation and on-page SEO",
    ],
    stack: ["Shopify", "Liquid", "JavaScript", "Tailwind CSS", "Shopify CLI"],
    metaTitle: "Freelance Shopify Developer — Custom Liquid Themes & Stores",
    metaDescription:
      "Freelance Shopify developer for custom Liquid sections, theme customisation and new store builds. Fast, mobile-first stores for brands in the UK, US, Australia and worldwide.",
    keywords: ["freelance Shopify developer", "Shopify Liquid developer", "custom Shopify theme", "Shopify store setup", "Shopify expert"],
    faqs: [
      {
        q: "Can you customise my existing theme instead of starting over?",
        a: "Yes. I can add custom sections, fix layout issues and speed up your current theme without rebuilding the whole store.",
      },
      {
        q: "Will I be able to edit the sections myself?",
        a: "Yes. Sections are built with Shopify's theme settings, so you can change text, images and colours from the theme editor.",
      },
      {
        q: "Do you set up payments and shipping?",
        a: "Yes. I configure payment gateways, shipping zones, taxes and the apps you need, then test the full checkout before launch.",
      },
    ],
  },
  {
    slug: "automation",
    icon: "flow",
    nav: "Automation",
    title: "Business Automation & AI Agents",
    tagline: "Stop doing the same task fifty times a week. Let it run on its own.",
    summary:
      "Lead capture, follow-ups, order alerts and AI assistants that connect your tools and take repetitive work off your plate.",
    intro:
      "I connect the tools you already use (forms, CRM, Shopify, WhatsApp, email, Google Sheets) so information moves on its own. Fewer copy-pastes, faster replies to leads and fewer things slipping through.",
    deliverables: [
      "Lead capture to CRM to follow-up flows",
      "WhatsApp and email notifications",
      "Shopify order and inventory alerts",
      "AI chat assistants and agents",
      "Google Sheets, CRM and API integrations",
      "Automated QA test suites for your web app",
    ],
    stack: ["n8n", "Make", "WhatsApp Cloud API", "OpenAI / Claude APIs", "Node.js", "Playwright"],
    metaTitle: "Business Automation Developer — n8n, WhatsApp & AI Agents",
    metaDescription:
      "Automate lead follow-ups, order alerts, CRM updates and customer replies with n8n, WhatsApp and AI agents. Freelance automation developer for small businesses worldwide.",
    keywords: ["business automation developer", "n8n expert", "WhatsApp automation", "AI agent developer", "workflow automation freelancer"],
    faqs: [
      {
        q: "What kind of tasks can be automated?",
        a: "Anything repetitive and rule-based: sending leads to a CRM, replying on WhatsApp, updating sheets, order notifications, reports and reminders.",
      },
      {
        q: "Do I need to pay for expensive tools?",
        a: "Usually not. n8n can be self-hosted at low cost, and I pick the cheapest setup that does the job reliably.",
      },
      {
        q: "Can you automate testing for my website?",
        a: "Yes. I write Playwright and Selenium test suites for logins, forms and checkout flows so you catch bugs before your customers do.",
      },
    ],
  },
];

export const projects = [
  {
    title: "Recruitment Platform",
    url: "https://www.pridehire.com/",
    client: "PrideHire",
    type: "Web App",
    summary:
      "Candidate and employer modules, job posting, search and applications, with role-based access and a Playwright regression suite.",
    stack: ["Next.js", "Node.js", "MongoDB", "Playwright"],
    cover: { bg: "#1D2B24", fg: "#E8F2EC", accent: "#7FD3A2", mark: "Hire." },
  },
  {
    title: "Modora Élan",
    url: "https://modoraelan.myshopify.com/",
    client: "Modest-fashion brand",
    type: "E-commerce",
    summary:
      "Premium abaya store with custom-size orders, cart, Razorpay checkout, inventory tracking and an admin dashboard.",
    stack: ["Next.js", "Express", "MongoDB", "Razorpay"],
    cover: { bg: "#2A2320", fg: "#F3EBE1", accent: "#C8A27A", mark: "Modora Élan", italic: true },
  },
  {
    title: "Caravela Beach Resort",
    client: "Goa, India",
    type: "Website",
    summary: "Luxury hospitality homepage redesign — pitched, approved and delivered.",
    stack: ["Next.js", "GSAP", "Tailwind"],
    cover: { bg: "#E9DFCB", fg: "#FBF7EF", accent: "#2F6B78", mark: "Caravela", italic: true, scene: "sea" },
  },
  {
    title: "Honey Bagh",
    url: "https://p1yfqt-f0.myshopify.com/",
    client: "D2C honey brand",
    type: "Shopify",
    summary: "Honey-focused store with custom Liquid sections, cart drawer and Razorpay checkout.",
    stack: ["Shopify", "Liquid", "JavaScript"],
    cover: { bg: "#F2B32A", fg: "#151412", accent: "#151412", mark: "Honey Bagh", scene: "comb" },
  },
  {
    title: "Heatlands Construction",
    url: "https://heatlands.vercel.app/",
    client: "London, UK",
    type: "Website",
    summary: "Six-page website for a UK builder: services, process, projects and enquiries.",
    stack: ["Next.js", "Framer Motion"],
    cover: { bg: "#1F1E1B", fg: "#F2EFE8", accent: "#C9A46A", mark: "HEATLANDS", scene: "towers" },
  },
  {
    title: "Adynext",
    url: "https://www.adynext.com/",
    client: "Digital agency",
    type: "Website",
    summary: "Animated agency website with smooth scrolling, scroll reveals, a testimonials slider and a working contact form.",
    stack: ["Next.js", "Framer Motion", "GSAP", "Tailwind"],
    cover: { bg: "#0F0F14", fg: "#F4F4F8", accent: "#7B5CFF", mark: "adynext" },
  },
  {
    title: "The IT Guys",
    url: "https://www.theitguys.xyz/",
    client: "IT services company",
    type: "Website",
    summary: "Company website with services, client testimonials and a blog, built as a fast single-page React app.",
    stack: ["React", "Vite", "React Router", "Tailwind"],
    cover: { bg: "#0B1220", fg: "#E6EEFF", accent: "#38BDF8", mark: "IT Guys", mono: true },
  },
  {
    title: "Enterprise Web App",
    client: "Startek India",
    type: "Web App",
    summary: "Built from Figma to production: responsive screens, REST APIs, JWT auth and automated tests.",
    stack: ["React", "Node.js", "Selenium", "Postman"],
    cover: { bg: "#16202E", fg: "#E7EEF8", accent: "#7AA2FF", mark: "</> app", mono: true },
  },
  {
    title: "Tartib",
    client: "My own SaaS",
    type: "SaaS",
    summary: "Life-management app with habits, routines, a promise tracker and an AI coach.",
    stack: ["Next.js", "MongoDB", "PWA"],
    cover: { bg: "#E8E6F5", fg: "#24215C", accent: "#5B57A6", mark: "Tartib", italic: true, scene: "bars" },
  },
];

export const experience = [
  {
    role: "Full Stack Developer & QA Automation Engineer",
    company: "Startek India",
    period: "Apr 2025 – Present",
    place: "Noida",
    points: [
      "Built the company web app from scratch, from Figma designs to responsive screens connected to REST APIs.",
      "Added API endpoints, fixed backend bugs and set up JWT authentication.",
      "Wrote Playwright and Selenium scripts for the most-run test cases; API checks in Postman before every release.",
    ],
  },
  {
    role: "Software Engineer",
    company: "PrideHire",
    period: "Sep 2023 – Mar 2025",
    place: "Remote",
    points: [
      "Built Candidate and Employer modules: profiles, dashboards, job posting, search and applications.",
      "Handled authentication, role-based access and form validation for different user types.",
      "Automated login, signup and application flows with Playwright and Selenium, plus regression testing.",
    ],
  },
  {
    role: "Full Stack Development Intern",
    company: "Coding Blocks",
    period: "Oct 2022 – Mar 2023",
    place: "",
    points: ["Built three MERN projects from scratch to deployment, with REST APIs and React front ends."],
  },
];

export const reasons = [
  {
    title: "Developer and tester in one",
    body: "I've spent years doing both development and QA automation. Your site is tested with Playwright before launch, so it doesn't break on day one.",
  },
  {
    title: "Built for speed and Google",
    body: "Clean code, optimised images, schema markup and Core Web Vitals in mind from the start, not bolted on later.",
  },
  {
    title: "Fixed quote, no surprises",
    body: "You get scope, timeline and price in writing before any work starts. No hourly meter running in the background.",
  },
  {
    title: "Easy to work with across time zones",
    body: "A preview link every week, quick replies on WhatsApp or email, and calls that overlap with UK, Europe, US, Australia and Gulf hours.",
  },
];

export const steps = [
  { title: "Free intro call", body: "We talk about your goals, your customers and what isn't working today." },
  { title: "Fixed quote", body: "Clear scope, timeline and price in writing — no hidden extras." },
  { title: "Build with weekly previews", body: "You see live progress every week and give feedback as we go." },
  { title: "Test, launch & support", body: "Everything is tested, launched and handed over, and I stay around after go-live." },
];

export const faqs = [
  {
    q: "Do you work with clients outside India?",
    a: "Yes, most of my freelance work is for international clients. I work with businesses in the UK, Europe, the US, Australia, New Zealand and the Gulf, and plan calls around your time zone.",
  },
  {
    q: "How much does a project cost?",
    a: "It depends on scope. After a short free call I send a fixed quote in writing, so you know the full price before anything starts.",
  },
  {
    q: "How long does a project take?",
    a: "You get a written timeline with your quote. Smaller websites are quick; stores and web apps take longer depending on features.",
  },
  {
    q: "Do you test the website before launch?",
    a: "Always. With a QA automation background, I test forms, checkout and key flows on desktop and mobile, often with automated Playwright tests.",
  },
  {
    q: "What do you need from me to start?",
    a: "Your goals, logo and any content or photos you have. If copy is missing, I'll help you shape it.",
  },
  {
    q: "Do you offer support after launch?",
    a: "Yes. I fix any launch issues and can stay on for updates, new features and ongoing maintenance.",
  },
];
