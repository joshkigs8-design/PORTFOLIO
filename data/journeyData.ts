export interface JourneyStage {
  stepNumber: string;
  stage: "Learning" | "Experimenting" | "Building" | "Launching" | "Scaling";
  title: string;
  timeline: string;
  description: string;
  highlights: string[];
  mindsetQuote: string;
}

export const journeyData: JourneyStage[] = [
  {
    stepNumber: "01",
    stage: "Learning",
    title: "Foundations in Tech & Business (BBIT)",
    timeline: "Foundation",
    description:
      "Bridging deep computer science principles with business information technology. Mastering systems analysis, algorithms, relational databases, and enterprise economics.",
    highlights: [
      "BBIT Academic curriculum with focus on financial systems and software architecture",
      "Mastery of core JavaScript, TypeScript, data structures, and database normalization",
      "Deconstructing real-world business bottlenecks across the East African market",
    ],
    mindsetQuote: "Deep fundamentals turn engineering into an unfair advantage.",
  },
  {
    stepNumber: "02",
    stage: "Experimenting",
    title: "Rapid Prototyping & Hackathons",
    timeline: "Exploration",
    description:
      "Testing wild hypotheses, hacking together MVPs in weekend sprints, and exploring emerging developer tools, Next.js Server Components, and AI APIs.",
    highlights: [
      "Built dozens of micro-prototypes across mobility, finance, and productivity",
      "Explored prompt-chaining and LLM function calling for structured data tasks",
      "Refined an obsession with typography, micro-interactions, and 60fps UI",
    ],
    mindsetQuote: "The best way to understand technology is to push it past its intended limits.",
  },
  {
    stepNumber: "03",
    stage: "Building",
    title: "Engineering Serious Products",
    timeline: "Execution",
    description:
      "Transitioning from toy scripts to production-grade architectures. Designing multi-tenant databases, robust M-Pesa Daraja payment webhooks, and secure authentication.",
    highlights: [
      "Engineered RentReceipt Pro from scratch to tackle landlord-tenant reconciliation",
      "Built EduPath AI to algorithmically solve university course selection confusion",
      "Designed high-fashion headless brand experience for O&N FITS",
    ],
    mindsetQuote: "Code is simply the medium; the product is the experience.",
  },
  {
    stepNumber: "04",
    stage: "Launching",
    title: "Shipping to Real Users",
    timeline: "Deployment",
    description:
      "Putting software into the hands of actual people. Listening to raw user feedback, observing edge cases, fixing friction points, and deploying continuous updates.",
    highlights: [
      "Live deployment of RentReceipt Pro across Kenyan property managers",
      "Launched FareFinder to simplify regional transit comparisons",
      "Independent product deployments shaped by direct user feedback",
    ],
    mindsetQuote: "A product only becomes real when somebody uses it in the wild.",
  },
  {
    stepNumber: "05",
    stage: "Scaling",
    title: "Refining, Monetizing & Expanding",
    timeline: "Present & Future",
    description:
      "Iterating on core metrics, optimizing cloud infrastructure, expanding commercial pipelines, and turning single products into resilient digital ventures.",
    highlights: [
      "Refining product telemetry and conversion analytics across active ventures",
      "Building from Kenya with an uncompromising global benchmark for quality",
      "Partnering with ambitious founders and businesses to ship next-gen solutions",
    ],
    mindsetQuote: "Build products that endure. Never stop iterating.",
  },
];
