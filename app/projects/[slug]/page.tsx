import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  Lightbulb,
  Cpu,
  Layers,
  Sparkles,
} from "lucide-react";
import { projectsData } from "@/data/projectsData";
import { EditorialMockup } from "@/components/projects/EditorialMockups";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projectsData.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.name} — Josh Kigen`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#F6F1E8] text-[#171717] pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Back Link */}
        <Link
          href="/#work"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#171717]/10 text-xs font-mono text-[#171717] hover:border-[#12372A] transition-colors shadow-xs"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to All Selected Work</span>
        </Link>

        {/* Hero Header */}
        <div className="space-y-4">
          <div className="flex items-center gap-3 text-xs font-mono">
            <span className="font-bold text-[#12372A]">
              {project.number} / {project.total}
            </span>
            <span className="text-[#171717]/30">·</span>
            <span className="text-[#12372A] bg-[#12372A]/5 px-2.5 py-0.5 rounded-full font-semibold">
              {project.categoryTag}
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-serif font-bold uppercase tracking-tight text-[#171717]">
            {project.name}
          </h1>

          <p className="text-xl sm:text-2xl text-[#171717]/80 font-sans leading-relaxed">
            {project.headline}
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <span className="text-xs font-mono px-3.5 py-1.5 rounded-full bg-white border border-[#171717]/10 text-[#171717]/80">
              Role: {project.role}
            </span>
            <span className="text-xs font-mono px-3.5 py-1.5 rounded-full bg-white border border-[#171717]/10 text-[#171717]/80">
              Industry: {project.industry}
            </span>
          </div>
        </div>

        {/* Mockup Visual */}
        <div className="rounded-3xl overflow-hidden shadow-sm bg-white p-2 border border-[#171717]/10">
          <EditorialMockup type={project.mockupType} />
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-6 sm:p-8 rounded-3xl bg-white border border-[#171717]/10">
          {project.metrics.map((m) => (
            <div key={m.label} className="space-y-1">
              <div className="text-[11px] font-mono text-[#171717]/60 uppercase">{m.label}</div>
              <div className="text-xl sm:text-2xl font-serif font-bold text-[#12372A]">{m.value}</div>
            </div>
          ))}
        </div>

        {/* Narrative & Description */}
        <div className="space-y-6 p-8 rounded-3xl bg-white border border-[#171717]/10">
          <div className="text-xs font-mono font-bold tracking-widest text-[#12372A] uppercase">
            OVERVIEW &amp; ARCHITECTURE
          </div>
          <p className="text-base sm:text-lg text-[#171717]/80 leading-relaxed font-sans">
            {project.extendedDescription}
          </p>

          <div className="pt-4 border-t border-[#171717]/8">
            <div className="text-xs font-mono font-bold text-[#171717]/60 uppercase mb-3">
              Technologies
            </div>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-lg bg-[#FAF7F2] border border-[#171717]/8 text-xs font-mono text-[#171717]"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link
            href="/#work"
            className="px-6 py-3 rounded-full bg-white border border-[#171717]/10 hover:border-[#12372A] text-xs font-mono text-[#171717]"
          >
            ← Back to All Projects
          </Link>

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-full bg-[#12372A] hover:bg-[#0D261D] text-[#F6F1E8] font-mono font-bold text-xs sm:text-sm flex items-center gap-2 shadow-sm transition-all"
            >
              <span>VISIT LIVE PLATFORM</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </main>
  );
}
