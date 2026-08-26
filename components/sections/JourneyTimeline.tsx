"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export function JourneyTimeline() {
  return (
    <section className="py-24 sm:py-32 bg-[#FAF7F2] border-t border-[#171717]/8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 space-y-16">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[#12372A] uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#12372A]" />
            <span>05 // TRAJECTORY</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif font-bold text-[#171717] tracking-tight uppercase leading-[1.08]">
            THE JOURNEY SO FAR.
          </h2>

          <p className="text-base sm:text-lg text-[#171717]/70 font-sans">
            A continuous progression of learning, building, shipping, and aiming higher.
          </p>
        </div>

        {/* Minimal Editorial Vertical Progression */}
        <div className="max-w-3xl mx-auto space-y-6">
          {siteConfig.journey.map((item, idx) => {
            const isLast = idx === siteConfig.journey.length - 1;

            return (
              <div key={item.stage} className="relative">
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className={`p-6 sm:p-8 rounded-2xl bg-white border ${
                    isLast ? "border-[#12372A] shadow-md bg-gradient-to-r from-white to-[#12372A]/5" : "border-[#171717]/8"
                  } flex flex-col sm:flex-row sm:items-baseline justify-between gap-4`}
                >
                  <div className="flex items-baseline gap-4">
                    <span className="text-xs font-mono font-bold text-[#C5A46D]">
                      0{idx + 1}
                    </span>
                    <div>
                      <span className="text-xl sm:text-2xl font-serif font-bold text-[#171717] uppercase tracking-tight">
                        {item.stage}
                      </span>
                      <span className="text-sm font-sans text-[#12372A] font-medium ml-2">
                        — {item.title}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-[#171717]/70 font-sans max-w-sm sm:text-right leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>

                {!isLast && (
                  <div className="flex justify-center py-2 text-[#12372A]/40">
                    <ArrowDown className="w-4 h-4" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
