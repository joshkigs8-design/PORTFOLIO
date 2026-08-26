"use client";

import React from "react";
import { motion } from "framer-motion";
import { siteConfig } from "@/data/siteConfig";

export function MyWorld() {
  return (
    <section className="py-24 sm:py-32 bg-[#F6F1E8] border-t border-[#171717]/8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 space-y-16">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[#12372A] uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#12372A]" />
            <span>04 // DOMAINS &amp; DISCIPLINES</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif font-bold text-[#171717] tracking-tight uppercase leading-[1.08]">
            MY WORLD.
          </h2>

          <p className="text-base sm:text-lg text-[#171717]/70 font-sans">
            The intersections, industries and creative domains where I spend my time.
          </p>
        </div>

        {/* Editorial Horizontal / Asymmetric Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
          {siteConfig.myWorld.map((item, idx) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="p-6 sm:p-8 rounded-2xl bg-white border border-[#171717]/8 hover:border-[#12372A]/30 hover:bg-[#FAF7F2] transition-all duration-300 space-y-2 group shadow-xs"
            >
              <div className="text-[10px] font-mono text-[#C5A46D] font-bold">
                0{idx + 1}
              </div>
              <div className="text-lg sm:text-xl font-serif font-bold text-[#171717] group-hover:text-[#12372A] transition-colors uppercase tracking-tight">
                {item.label}
              </div>
              <div className="text-xs font-sans text-[#171717]/60 leading-relaxed pt-1">
                {item.desc}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
