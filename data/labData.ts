export interface LabItem {
  id: string;
  category: string;
  title: string;
  status: "Active R&D" | "Prototyping" | "Architecture Phase" | "Validation";
  description: string;
  stackTags: string[];
  experimentNumber: string;
  focusArea: string;
}

export const labData: LabItem[] = [
  {
    id: "ai-agents",
    category: "AI-POWERED PRODUCTS",
    title: "Autonomous Decision & Advisory Agents",
    status: "Active R&D",
    description:
      "Investigating multi-agent task execution architectures for specialized business workflows, automated data reconciliations, and context-aware student advisory engines.",
    stackTags: ["LLM Agents", "Function Calling", "Vector DBs", "Streaming RPC"],
    experimentNumber: "EXP-01",
    focusArea: "Contextual AI & Domain Reasoning",
  },
  {
    id: "saas-infrastructure",
    category: "SAAS & MULTI-TENANCY",
    title: "Zero-Overhead Micro-SaaS Engine",
    status: "Prototyping",
    description:
      "Constructing a high-velocity boilerplate for multi-tenant African SaaS products, integrating localized payment rails (Daraja/M-Pesa, Flutterwave) and automated billing lifecycles.",
    stackTags: ["Next.js 15", "Supabase RLS", "Stripe + M-Pesa", "Edge Middleware"],
    experimentNumber: "EXP-02",
    focusArea: "Scalable Multi-Tenant Platforms",
  },
  {
    id: "fintech-micro",
    category: "FINTECH & COMMERCE",
    title: "Instant Cashflow Auditing Protocols",
    status: "Active R&D",
    description:
      "Developing cryptographic receipt validation and automated reconciliation protocols between localized mobile money statements and merchant inventory records.",
    stackTags: ["Financial Ledgers", "Tamper-Proof Signatures", "Webhooks", "PostgreSQL"],
    experimentNumber: "EXP-03",
    focusArea: "Frictionless SME Financial Systems",
  },
  {
    id: "edtech-pathway",
    category: "EDTECH INNOVATION",
    title: "Dynamic Academic Cutoff Prediction",
    status: "Validation",
    description:
      "Benchmarking historical Kenyan university cutoff trends to generate probabilistic admission scores and personalized TVET/university alternative pathways.",
    stackTags: ["Statistical Modeling", "KNQA Standards", "Interactive Visualizers"],
    experimentNumber: "EXP-04",
    focusArea: "Higher Education Democratization",
  },
  {
    id: "proptech-telemetry",
    category: "PROPTECH & REAL ESTATE",
    title: "Automated Utility Metering & Bill Splitting",
    status: "Architecture Phase",
    description:
      "Designing sub-metering IoT telemetry data ingestion for residential apartment blocks to automate water, power, and garbage billing within RentReceipt Pro.",
    stackTags: ["IoT Telemetry", "MQTT / WebSockets", "Time-Series Data"],
    experimentNumber: "EXP-05",
    focusArea: "Residential Property Automation",
  },
  {
    id: "business-automation",
    category: "BUSINESS AUTOMATION & MOBILE",
    title: "Offline-First Mobile ERP for Retail",
    status: "Prototyping",
    description:
      "Refining low-latency local-first data sync engines (CRDTs) to ensure uninterrupted POS operation even across erratic network conditions in East Africa.",
    stackTags: ["Local-First", "CRDTs", "Android", "PWA"],
    experimentNumber: "EXP-06",
    focusArea: "Resilient Offline Architectures",
  },
];
