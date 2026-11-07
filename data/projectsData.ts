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
  liveUrl?: string;
  displayUrl?: string;
  visualTheme: {
    badgeBg: string;
    badgeText: string;
    accentColor: string;
    cardBg: string;
  };
  mockupType: "rentreceipt" | "farefinder" | "edupath" | "onfits";
}

export const projectsData: ProjectItem[] = [
  {
    id: "rentreceipt-pro",
    slug: "rentreceipt-pro",
    number: "01",
    total: "04",
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
    total: "04",
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
    total: "04",
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
    liveUrl: "https://edupathai.site",
    displayUrl: "edupathai.site",
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
    total: "04",
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
    id: "codevanta-hub",
    slug: "codevanta-hub",
    number: "05",
    total: "05",
    name: "Codevanta Hub",
    categoryTag: "DEVELOPER ECOSYSTEM",
    industry: "Technology & Developer Resources",
    tagline: "A digital ecosystem for developer resources, tools and useful opportunities.",
    headline: "A growing home for practical resources and opportunities for developers.",
    description:
      "A digital ecosystem focused on developer resources, technology tools and useful opportunities for developers.",
    extendedDescription:
      "Codevanta Hub brings useful developer-focused material into one accessible digital space. It is presented here as an evolving platform rather than a finished claim about scale or impact.",
    role: "Builder",
    technologies: ["Web Platform", "TypeScript", "Next.js"],
    liveUrl: "https://codevanta.online/",
    displayUrl: "codevanta.online",
    visualTheme: {
      badgeBg: "rgba(18, 55, 42, 0.08)",
      badgeText: "#12372A",
      accentColor: "#12372A",
      cardBg: "#FFFFFF",
    },
    mockupType: "farefinder",
  },
];
