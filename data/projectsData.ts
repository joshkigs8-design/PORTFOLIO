export interface ProjectItem {
  id: string;
  slug: string;
  number: string;
  total: string;
  name: string;
  categoryTag: string;
  industry: string;
  tagline: string;
  headline: string;
  description: string;
  extendedDescription: string;
  role: string;
  technologies: string[];
  metrics: { label: string; value: string }[];
  liveUrl?: string;
  displayUrl?: string;
  visualTheme: {
    badgeBg: string;
    badgeText: string;
    accentColor: string;
    cardBg: string;
  };
  mockupType: "rentreceipt" | "farefinder" | "edupath" | "onfits" | "pesatrend" | "joshdata";
}

export const projectsData: ProjectItem[] = [
  {
    id: "rentreceipt-pro",
    slug: "rentreceipt-pro",
    number: "01",
    total: "06",
    name: "RentReceipt Pro",
    categoryTag: "PROPTECH / SAAS",
    industry: "Property Tech & Finance",
    tagline: "Automated rental management and instant digital receipts for modern landlords.",
    headline: "Automating property finances and digital tenant ledgers across Kenya.",
    description:
      "A rental management platform designed to help landlords and property managers manage tenants, payments and receipts with less hassle.",
    extendedDescription:
      "Engineered to replace chaotic spreadsheets and manual paper receipts with automated M-Pesa payment tracking, cryptographic digital PDF receipts, instant SMS alerts, and clear cashflow forecasting.",
    role: "Sole Creator & Lead Architect",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL", "M-Pesa Daraja API"],
    metrics: [
      { label: "Verification", value: "Instant" },
      { label: "PDF Generation", value: "< 1.2s" },
      { label: "Ledger Accuracy", value: "99.9%" },
    ],
    liveUrl: "https://rentreceipt.co.ke",
    displayUrl: "rentreceipt.co.ke",
    visualTheme: {
      badgeBg: "rgba(18, 55, 42, 0.08)",
      badgeText: "#12372A",
      accentColor: "#12372A",
      cardBg: "#FFFFFF",
    },
    mockupType: "rentreceipt",
  },
  {
    id: "farefinder",
    slug: "farefinder",
    number: "02",
    total: "06",
    name: "FareFinder",
    categoryTag: "TRAVEL / DIGITAL PRODUCT",
    industry: "Mobility & Transit Intelligence",
    tagline: "Discover and compare regional transit options through a modern search experience.",
    headline: "Making travel discovery simpler, smarter and more accessible across regions.",
    description:
      "A travel discovery experience designed to make finding and comparing travel options simpler.",
    extendedDescription:
      "FareFinder aggregates inter-county transit operators, bus schedules, and fare matrixes across 50+ regional hubs into a clean, intuitive map-inspired interface with real-time price comparison.",
    role: "Lead Product Designer & Developer",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "GeoJSON"],
    metrics: [
      { label: "Search Latency", value: "< 250ms" },
      { label: "Transit Hubs", value: "50+ Routes" },
      { label: "Fare Transparency", value: "100%" },
    ],
    liveUrl: "https://farefinder.vercel.app",
    displayUrl: "farefinder.app",
    visualTheme: {
      badgeBg: "rgba(30, 58, 88, 0.08)",
      badgeText: "#1E3A58",
      accentColor: "#1E3A58",
      cardBg: "#FFFFFF",
    },
    mockupType: "farefinder",
  },
  {
    id: "edupath-ai",
    slug: "edupath-ai",
    number: "03",
    total: "06",
    name: "EduPath AI",
    categoryTag: "EDUCATION / AI",
    industry: "Education Technology & Career Advisory",
    tagline: "Navigating university admissions, KCSE clusters and career paths with intelligent algorithms.",
    headline: "Democratizing academic guidance and course qualification for Kenyan students.",
    description:
      "A platform helping students navigate courses, careers and education opportunities.",
    extendedDescription:
      "Calculates precise KUCCPS weighted cluster points from KCSE subject grades and provides algorithmic course recommendations with realistic admission probabilities across Kenyan public and private universities.",
    role: "Product Architect & AI Engineer",
    technologies: ["Next.js", "TypeScript", "AI Models", "Tailwind CSS", "PostgreSQL"],
    metrics: [
      { label: "Cluster Calculator", value: "KUCCPS Exact" },
      { label: "Guidance Time", value: "< 2 mins" },
      { label: "Career Fields", value: "30+ Clusters" },
    ],
    liveUrl: "https://edupath-ai.vercel.app",
    displayUrl: "edupath-ai.ke",
    visualTheme: {
      badgeBg: "rgba(109, 40, 217, 0.08)",
      badgeText: "#6D28D9",
      accentColor: "#6D28D9",
      cardBg: "#FFFFFF",
    },
    mockupType: "edupath",
  },
  {
    id: "on-fits",
    slug: "on-fits",
    number: "04",
    total: "06",
    name: "O&N FITS",
    categoryTag: "FASHION / BRAND",
    industry: "Fashion, Apparel & Digital Brand",
    tagline: "A modern digital fashion brand and curated contemporary streetwear experience.",
    headline: "High-editorial digital commerce built around African contemporary style and curated drops.",
    description:
      "A modern fashion brand exploring style, identity and digital commerce.",
    extendedDescription:
      "An editorial digital flagship store merging high-fashion lookbook storytelling, bespoke typography, and friction-free shopping with responsive garment sizing conversion and instant checkout.",
    role: "Brand Co-Creator & Web Director",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Headless Commerce", "Framer Motion"],
    metrics: [
      { label: "Editorial Speed", value: "0.8s" },
      { label: "Mobile Conversion", value: "+40%" },
      { label: "Brand Aesthetic", value: "Luxury High-End" },
    ],
    liveUrl: "https://oandnfits.co.ke",
    displayUrl: "oandnfits.co.ke",
    visualTheme: {
      badgeBg: "rgba(128, 28, 48, 0.08)",
      badgeText: "#801C30",
      accentColor: "#801C30",
      cardBg: "#FFFFFF",
    },
    mockupType: "onfits",
  },
  {
    id: "pesatrend",
    slug: "pesatrend",
    number: "05",
    total: "06",
    name: "PesaTrend",
    categoryTag: "BUSINESS / POS",
    industry: "Retail Intelligence & Financial POS",
    tagline: "Point-of-sale and daily cashflow intelligence designed for small enterprise owners.",
    headline: "Empowering everyday merchants with real-time sales auditing and till reconciliation.",
    description:
      "A business management concept designed to help small businesses track sales, payments and performance.",
    extendedDescription:
      "An offline-first POS progressive web application that synchronizes physical cash registers and M-Pesa Buy Goods tills, tracking fast-moving inventory items and generating daily profit margins automatically.",
    role: "Product Architect & Full-Stack Developer",
    technologies: ["React", "TypeScript", "PostgreSQL", "Tailwind CSS", "PWA Offline"],
    metrics: [
      { label: "Offline First", value: "100% PWA" },
      { label: "Reconciliation", value: "Real-Time" },
      { label: "Inventory Sync", value: "< 500ms" },
    ],
    liveUrl: "https://pesatrend.vercel.app",
    displayUrl: "pesatrend.io",
    visualTheme: {
      badgeBg: "rgba(18, 55, 42, 0.08)",
      badgeText: "#12372A",
      accentColor: "#12372A",
      cardBg: "#FFFFFF",
    },
    mockupType: "pesatrend",
  },
  {
    id: "josh-data-solution",
    slug: "josh-data-solution",
    number: "06",
    total: "06",
    name: "Josh Data Solution",
    categoryTag: "DIGITAL SERVICES",
    industry: "Technology & Digital Solutions",
    tagline: "Custom digital tools, data pipelines and software engineering for businesses.",
    headline: "Bespoke digital architecture and technology solutions built for scaling operations.",
    description:
      "Technology and digital solutions built for everyday businesses and individuals.",
    extendedDescription:
      "Providing customized web engineering, database architecture, payment gateway integrations, and digital transformation consulting for regional businesses looking to modernize their workflow.",
    role: "Founder & Principal Engineer",
    technologies: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Cloud Architecture"],
    metrics: [
      { label: "Uptime SLA", value: "99.9%" },
      { label: "Architecture", value: "Bespoke" },
      { label: "Support", value: "Dedicated" },
    ],
    liveUrl: "https://joshdatasolution.com",
    displayUrl: "joshdatasolution.com",
    visualTheme: {
      badgeBg: "rgba(197, 164, 109, 0.15)",
      badgeText: "#8B6B38",
      accentColor: "#C5A46D",
      cardBg: "#FFFFFF",
    },
    mockupType: "joshdata",
  },
];
