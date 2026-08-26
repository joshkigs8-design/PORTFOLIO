export interface TechCategory {
  name: string;
  description: string;
  items: TechItem[];
}

export interface TechItem {
  name: string;
  category: "Frontend" | "Backend & Data" | "Cloud & Tooling" | "Mobile & AI";
  roleDescription: string;
  experienceLevel: "Core Daily" | "Advanced" | "Production Tested";
  iconKey: string;
  tags: string[];
}

export const techStackData: TechItem[] = [
  {
    name: "JavaScript",
    category: "Frontend",
    roleDescription: "Modern ESNext, asynchronous architectures, DOM manipulation and event-driven patterns.",
    experienceLevel: "Core Daily",
    iconKey: "javascript",
    tags: ["ES6+", "Async/Await", "V8 Engine"],
  },
  {
    name: "TypeScript",
    category: "Frontend",
    roleDescription: "Strict type safety, generic utility types, scalable enterprise frontend and backend contracts.",
    experienceLevel: "Core Daily",
    iconKey: "typescript",
    tags: ["Strict Types", "Interfaces", "Generics"],
  },
  {
    name: "React",
    category: "Frontend",
    roleDescription: "Component design systems, custom hooks, state machines, performance profiling, and concurrent UI.",
    experienceLevel: "Core Daily",
    iconKey: "react",
    tags: ["Hooks", "Context", "Virtual DOM"],
  },
  {
    name: "Next.js",
    category: "Frontend",
    roleDescription: "App Router, Server Components, SSR/SSG/ISR, streaming UI, API routes, and edge runtime.",
    experienceLevel: "Core Daily",
    iconKey: "nextjs",
    tags: ["App Router", "RSC", "Server Actions"],
  },
  {
    name: "Tailwind CSS",
    category: "Frontend",
    roleDescription: "Utility-first design systems, responsive layouts, bespoke dark palettes, CSS grid and fluid typography.",
    experienceLevel: "Core Daily",
    iconKey: "tailwind",
    tags: ["Design Systems", "v4 Engine", "Micro-Interactions"],
  },
  {
    name: "Node.js",
    category: "Backend & Data",
    roleDescription: "High-throughput RESTful services, event loops, serverless backends, and webhook processors.",
    experienceLevel: "Core Daily",
    iconKey: "nodejs",
    tags: ["Event Loop", "Express", "Microservices"],
  },
  {
    name: "Supabase",
    category: "Backend & Data",
    roleDescription: "PostgreSQL BaaS, Row-Level Security policies, Realtime subscriptions, Auth & Storage buckets.",
    experienceLevel: "Core Daily",
    iconKey: "supabase",
    tags: ["RLS", "Realtime", "Auth Engine"],
  },
  {
    name: "PostgreSQL",
    category: "Backend & Data",
    roleDescription: "Relational database modeling, complex joins, indexing strategies, transactions, and JSONB schemas.",
    experienceLevel: "Advanced",
    iconKey: "postgresql",
    tags: ["ACID", "Query Optimization", "Indexing"],
  },
  {
    name: "Git",
    category: "Cloud & Tooling",
    roleDescription: "Atomic version control, branching strategies, rebasing, bisecting, and clean commit history.",
    experienceLevel: "Core Daily",
    iconKey: "git",
    tags: ["Branching", "Rebase", "Merge Strategies"],
  },
  {
    name: "GitHub",
    category: "Cloud & Tooling",
    roleDescription: "CI/CD automated pipelines with GitHub Actions, issue triage, project boards, and release tagging.",
    experienceLevel: "Core Daily",
    iconKey: "github",
    tags: ["Actions", "CI/CD", "Code Review"],
  },
  {
    name: "Vercel",
    category: "Cloud & Tooling",
    roleDescription: "Edge network deployments, analytics telemetry, environment management, and preview branch workflows.",
    experienceLevel: "Core Daily",
    iconKey: "vercel",
    tags: ["Edge CDN", "Serverless", "Monitoring"],
  },
  {
    name: "Android Studio",
    category: "Mobile & AI",
    roleDescription: "Native Android development, Gradle configuration, device emulator testing, and APK distribution.",
    experienceLevel: "Production Tested",
    iconKey: "android",
    tags: ["Mobile UX", "Gradle", "APKs"],
  },
  {
    name: "AI APIs",
    category: "Mobile & AI",
    roleDescription: "Prompt engineering, function calling, LLM reasoning pipelines, embeddings, OpenAI & Claude integration.",
    experienceLevel: "Advanced",
    iconKey: "ai",
    tags: ["Prompt Chaining", "Function Calling", "Embeddings"],
  },
];
