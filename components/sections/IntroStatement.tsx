"use client";

import React from "react";
import { motion } from "framer-motion";
import { siteConfig } from "@/data/siteConfig";

export function IntroStatement() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-[#F6F1E8] border-t border-[#171717]/8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="max-w-4xl space-y-8">
          {/* Small Label */}
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[#12372A] uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C5A46D]" />
            <span>{siteConfig.eyebrow}</span>
          </div>

          {/* Large Statement Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-3xl sm:text-5xl md:text-6xl font-serif font-normal text-[#171717] tracking-tight leading-[1.15] text-balance"
          >
            I&apos;M INTERESTED IN{" "}
            <span className="text-[#12372A] font-bold">PEOPLE</span>,{" "}
            <span className="text-[#12372A] font-bold">IDEAS</span>,{" "}
            <span className="text-[#12372A] font-bold">TECHNOLOGY</span> <br className="hidden sm:inline" />
            AND WHAT HAPPENS WHEN THE THREE COME TOGETHER.
          </motion.h2>

          {/* Personal Narrative Body */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-base sm:text-lg md:text-xl text-[#171717]/80 font-sans leading-relaxed max-w-3xl"
          >
            {siteConfig.introBody}
          </motion.p>
        </div>

        {/* Personal Statistics Strip */}
        <div className="mt-16 sm:mt-24 pt-12 border-t border-[#171717]/10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
            {siteConfig.stats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="space-y-1.5"
              >
                <div className="text-4xl sm:text-6xl font-serif font-black text-[#12372A]">
                  {stat.number}
                </div>
                <div className="text-sm font-sans font-bold text-[#171717] tracking-tight uppercase">
                  {stat.label}
                </div>
                <div className="text-xs font-mono text-[#171717]/60 leading-relaxed">
                  {stat.subtext}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
