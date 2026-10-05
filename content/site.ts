export const metrics = [
  { value: "99.8%", label: "uptime on a university ERP" },
  { value: "<200ms", label: "p95 API response time" },
  { value: "80%", label: "less manual admin work" },
  { value: "100+", label: "production APIs shipped" },
];

export const services = [
  { icon: "window", title: "MVPs for startups", body: "Production-ready first versions with real backends and cloud deployment." },
  { icon: "workflow", title: "Internal tools and ERPs", body: "Dashboards, admin panels and workflow systems that replace spreadsheets." },
  { icon: "spark", title: "AI features", body: "Computer vision, LLM workflows and search, with human review built in." },
  { icon: "cloud", title: "Backend and cloud", body: "APIs, integrations, CI/CD and infrastructure that scale." },
] as const;

export const caseStudies = [
  {
    name: "RishiVerse", industry: "Education · ERP",
    problem: "A university of 5,000+ students ran 25+ departments on paper.",
    build: "A production ERP with 100+ REST APIs, Aadhaar KYC and face-recognition campus security.",
    tags: ["Node.js", "PostgreSQL", "AWS", "REST"], result: "99.8% uptime · 80% less manual admin work",
    screen: "University ERP · operations dashboard",
  },
  {
    name: "Zuvees", industry: "Quick commerce · Dubai",
    problem: "60-minute gift delivery needed inventory synced across hubs and marketplaces.",
    build: "A custom order management system integrated with Shopify, a WMS, Talabat and Instashop, plus an AI gift advisor.",
    tags: ["Shopify", "Node.js", "AI", "Integrations"], result: "Unified inventory and order operations",
    screen: "Order management · fulfilment view",
  },
  {
    name: "Maverick / FieldVue", industry: "AI · Field services",
    problem: "Painting contractors measured surfaces by hand, making quotes slow and inconsistent.",
    build: "An AI estimation platform using computer vision, with contractor overrides and replayable, auditable quotes.",
    tags: ["Vertex AI", "EventBridge", "Microservices", "Mobile"], result: "Repeatable estimates with human review",
    screen: "AI estimator · audit trail",
  },
  {
    name: "IITR collaboration", industry: "Public sector",
    problem: "Welfare scheme information was scattered across sources and hard to access.",
    build: "A central searchable portal with automated data collection for underserved communities.",
    tags: ["Django", "Puppeteer", "AWS", "Docker"], result: "One searchable source for scheme information",
    screen: "Welfare portal · search results",
  },
];

export const process = [
  { title: "Discovery", body: "Goals, constraints and success criteria agreed." },
  { title: "Architecture", body: "Mentor sign-off before development starts." },
  { title: "Build", body: "Iterative sprints with daily mentor oversight." },
  { title: "Quality", body: "Code review, testing and documentation." },
  { title: "Handover", body: "Deployment and knowledge transfer so your team owns the code." },
];

export const mentors = [
  { name: "Mentor name", role: "Principal engineer · Placeholder", experience: "Previous company or relevant experience", years: "12+ years · Placeholder" },
  { name: "Mentor name", role: "Software architect · Placeholder", experience: "Previous company or relevant experience", years: "10+ years · Placeholder" },
  { name: "Mentor name", role: "AI engineering lead · Placeholder", experience: "Previous company or relevant experience", years: "9+ years · Placeholder" },
];

export const packages = [
  { featured: true, title: "Discovery and Architecture Sprint", time: "2 to 3 weeks", body: "Scope lock, technical architecture, backlog, delivery plan and estimate.", price: "From INR 1.2L" },
  { title: "MVP Launch Sprint", time: "4 to 8 weeks", body: "Core workflows, auth, admin, API layer, QA baseline and cloud deployment.", price: "From INR 4L" },
  { title: "Product Acceleration Sprint", time: "8 to 12 weeks", body: "Performance, integrations, analytics, CI/CD hardening and test coverage.", price: "From INR 9L" },
  { title: "Managed Product Pod", time: "Ongoing · monthly", body: "Continuous feature delivery, defect SLAs and release management.", price: "From INR 5L per month" },
];

export const stack = {
  Frontend: ["TypeScript", "React", "Next.js", "Tailwind"],
  Backend: ["Node.js", "NestJS", "Python", "FastAPI", "Django"],
  Data: ["PostgreSQL", "MongoDB", "Redis"],
  "Cloud and DevOps": ["AWS", "GCP", "Docker", "Terraform", "GitHub Actions"],
  AI: ["Vertex AI"],
};

export const faqs = [
  { q: "Who writes the code?", a: "Student engineers, under senior mentors who own the architecture and review every change." },
  { q: "How is quality guaranteed?", a: "Mentor architecture sign-off before build, code review on every PR, automated tests and documented handover." },
  { q: "Do you bill hourly?", a: "No. We work on fixed scope so cost and timeline are predictable." },
  { q: "Can you reduce the price?", a: "We reduce scope or phase delivery. The price is tied to the outcome." },
  { q: "Who owns the code and IP?", a: "Policy pending confirmation. We will publish the confirmed ownership terms here." },
  { q: "What happens after handover?", a: "Support and warranty terms are pending confirmation. The Managed Product Pod is available for ongoing work." },
  { q: "Can you work with our existing stack?", a: "Yes, if it meets reliability and supportability standards." },
];
