"use client";

import React from "react";
import { motion } from "framer-motion";
import { siteConfig } from "@/data/siteConfig";

export function QuoteBanner() {
  return (
    <section className="py-24 sm:py-36 bg-[#12372A] text-[#F6F1E8] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 text-center relative z-10 space-y-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-6 max-w-4xl mx-auto"
        >
          <div className="text-xs font-mono font-bold tracking-widest text-[#C5A46D] uppercase">
            FOUNDER PHILOSOPHY
          </div>

          <blockquote className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-[#F6F1E8] tracking-tight leading-[1.15] text-balance">
            &ldquo;DON&apos;T JUST HAVE AN IDEA. <br className="hidden sm:inline" />
            BUILD SOMETHING WITH IT.&rdquo;
          </blockquote>

          <div className="pt-4 flex items-center justify-center gap-3 text-xs font-mono tracking-widest text-[#C5A46D] uppercase font-bold">
            <span>—</span>
            <span>{siteConfig.quoteAuthor}</span>
            <span>—</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
