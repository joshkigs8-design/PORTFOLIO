import { MetadataRoute } from "next";
import { projectsData } from "@/data/projectsData";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.joshkigen.me";

  const projectRoutes = projectsData.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1.0,
    },
    ...projectRoutes,
  ];
}
