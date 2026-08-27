"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projectsData } from "@/data/projectsData";
import { EditorialMockup } from "@/components/projects/EditorialMockups";

export function ProjectsShowcase() {
  const rentreceipt = projectsData.find((p) => p.id === "rentreceipt-pro")!;
  const farefinder = projectsData.find((p) => p.id === "farefinder")!;
  const edupath = projectsData.find((p) => p.id === "edupath-ai")!;
  const onfits = projectsData.find((p) => p.id === "on-fits")!;

  return (
    <section id="work" className="py-24 sm:py-36 bg-[#F6F1E8] border-t border-[#171717]/8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 space-y-20 sm:space-y-28">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[#12372A] uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#12372A]" />
            <span>01 // SELECTED WORK</span>
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl font-serif font-bold text-[#171717] tracking-tight uppercase leading-[1.05]">
            SELECTED WORK.
          </h2>

          <p className="text-lg sm:text-xl text-[#171717]/70 font-sans font-normal">
            A few things I&apos;ve built, explored and brought to life.
          </p>
        </div>

        {/* Editorial Project 01: RentReceipt Pro (Full-Width Feature) */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="p-6 sm:p-10 lg:p-12 rounded-3xl bg-white border border-[#171717]/10 shadow-sm space-y-8"
        >
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-[#171717]/8">
            <div className="space-y-2">
              <div className="flex items-center gap-3 text-xs font-mono">
                <span className="font-bold text-[#12372A]">{rentreceipt.number} / {rentreceipt.total}</span>
                <span className="text-[#171717]/30">·</span>
                <span className="text-[#12372A] bg-[#12372A]/5 px-2.5 py-0.5 rounded-full font-semibold">
                  {rentreceipt.categoryTag}
                </span>
              </div>
              <h3 className="text-3xl sm:text-5xl font-serif font-bold text-[#171717] tracking-tight uppercase">
                {rentreceipt.name}
              </h3>
            </div>

            <a
              href={rentreceipt.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#12372A] hover:bg-[#0D261D] text-[#F6F1E8] text-xs font-mono font-bold tracking-wider transition-all self-start lg:self-auto shadow-sm hover:shadow"
            >
              <span>VIEW PROJECT</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          <p className="text-base sm:text-lg text-[#171717]/80 font-sans max-w-3xl leading-relaxed">
            {rentreceipt.description}
          </p>

          <div className="pt-2">
            <EditorialMockup type="rentreceipt" />
          </div>
        </motion.div>

        {/* Editorial Row 02 & 03: FareFinder & EduPath AI (2-Column Split) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
          {/* Project 02: FareFinder */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="p-6 sm:p-8 rounded-3xl bg-white border border-[#171717]/10 shadow-sm flex flex-col justify-between space-y-6"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="font-bold text-[#1E3A58]">{farefinder.number} / {farefinder.total}</span>
                <span className="text-[#1E3A58] bg-[#1E3A58]/8 px-2.5 py-0.5 rounded-full font-semibold">
                  {farefinder.categoryTag}
                </span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-serif font-bold text-[#171717] tracking-tight uppercase">
                {farefinder.name}
              </h3>

              <p className="text-sm sm:text-base text-[#171717]/80 font-sans leading-relaxed">
                {farefinder.description}
              </p>
            </div>

            <EditorialMockup type="farefinder" />

            <div className="pt-2">
              <a
                href={farefinder.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-wider text-[#1E3A58] hover:underline"
              >
                <span>EXPLORE PROJECT</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>

          {/* Project 03: EduPath AI */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="p-6 sm:p-8 rounded-3xl bg-white border border-[#171717]/10 shadow-sm flex flex-col justify-between space-y-6"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="font-bold text-[#582098]">{edupath.number} / {edupath.total}</span>
                <span className="text-[#582098] bg-purple-100 px-2.5 py-0.5 rounded-full font-semibold">
                  {edupath.categoryTag}
                </span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-serif font-bold text-[#171717] tracking-tight uppercase">
                {edupath.name}
              </h3>

              <p className="text-sm sm:text-base text-[#171717]/80 font-sans leading-relaxed">
                {edupath.description}
              </p>
            </div>

            <EditorialMockup type="edupath" />

            <div className="pt-2">
              <a
                href={edupath.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-wider text-[#582098] hover:underline"
              >
                <span>EXPLORE PROJECT</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Editorial Project 04: O&N FITS (Fashion Magazine Editorial Full-Width) */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="p-6 sm:p-10 lg:p-12 rounded-3xl bg-[#1C1417] text-[#F6F1E8] border border-[#C5A46D]/30 shadow-xl space-y-8"
        >
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-white/15">
            <div className="space-y-2">
              <div className="flex items-center gap-3 text-xs font-mono">
                <span className="font-bold text-[#C5A46D]">{onfits.number} / {onfits.total}</span>
                <span className="text-white/40">·</span>
                <span className="text-[#C5A46D] bg-white/10 px-2.5 py-0.5 rounded-full font-semibold uppercase">
                  {onfits.categoryTag}
                </span>
              </div>
              <h3 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight uppercase">
                {onfits.name}
              </h3>
            </div>

            <a
              href={onfits.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#C5A46D] hover:bg-[#B39058] text-[#171717] text-xs font-mono font-bold tracking-wider transition-all self-start lg:self-auto shadow-sm hover:shadow"
            >
              <span>VIEW LOOKBOOK &amp; STORE</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          <p className="text-base sm:text-lg text-zinc-300 font-sans max-w-3xl leading-relaxed">
            {onfits.description}
          </p>

          <div className="pt-2">
            <EditorialMockup type="onfits" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
