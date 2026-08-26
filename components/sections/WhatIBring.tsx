"use client";

import React from "react";
import { motion } from "framer-motion";
import { siteConfig } from "@/data/siteConfig";

export function WhatIBring() {
  return (
    <section id="experience" className="py-24 sm:py-32 bg-[#FAF7F2] border-t border-[#171717]/8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 space-y-16">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[#12372A] uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#12372A]" />
            <span>03 // CORE CAPABILITIES</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif font-bold text-[#171717] tracking-tight uppercase leading-[1.08]">
            WHAT I BRING TO THE TABLE.
          </h2>

          <p className="text-base sm:text-lg text-[#171717]/70 font-sans">
            A balanced synthesis of technical rigor, design taste, and commercial intuition.
          </p>
        </div>

        {/* 4 Large Editorial Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {siteConfig.pillars.map((pillar, idx) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 sm:p-10 rounded-3xl bg-white border border-[#171717]/8 shadow-sm flex flex-col justify-between min-h-[280px] hover:border-[#12372A]/30 transition-all duration-300 group"
            >
              <div className="space-y-6">
                <span className="text-xs font-mono font-bold text-[#C5A46D]">
                  {pillar.number}
                </span>

                <h3 className="text-3xl sm:text-4xl font-serif font-bold text-[#171717] group-hover:text-[#12372A] transition-colors uppercase tracking-tight">
                  {pillar.title}
                </h3>
              </div>

              <p className="text-sm sm:text-base text-[#171717]/75 font-sans leading-relaxed pt-6 border-t border-[#171717]/5">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
