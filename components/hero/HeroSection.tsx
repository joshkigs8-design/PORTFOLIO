"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export function HeroSection() {
  const handleScrollTo = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-32 overflow-hidden bg-[#F6F1E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Headline & Bio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-8"
          >
            {/* Minimal Eyebrow Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#12372A]/5 border border-[#12372A]/15 text-xs font-mono text-[#12372A] uppercase tracking-widest font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#12372A]" />
              <span>DEVELOPER · ENTREPRENEUR · BUILDER</span>
            </div>

            {/* Editorial Headline: Sans + Serif Pairing */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-sans font-black text-[#171717] tracking-tight uppercase leading-[1.05]">
              I BUILD TECHNOLOGY <br />
              <span className="font-serif italic font-normal text-[#171717] lowercase">that moves ideas </span>
              <span className="text-[#12372A] underline decoration-[#C5A46D] decoration-4 underline-offset-8">
                forward.
              </span>
            </h1>

            {/* Editorial Bio */}
            <p className="text-lg sm:text-xl text-[#171717]/80 font-sans font-normal leading-relaxed max-w-xl text-balance">
              {siteConfig.heroBio}
            </p>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#work"
                onClick={(e) => handleScrollTo(e, "#work")}
                className="px-7 py-4 rounded-full bg-[#12372A] hover:bg-[#0D261D] text-[#F6F1E8] font-mono font-bold text-xs sm:text-sm tracking-wider flex items-center gap-2 shadow-lg shadow-[#12372A]/15 hover:shadow-xl hover:shadow-[#12372A]/25 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>EXPLORE MY WORK</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                onClick={(e) => handleScrollTo(e, "#contact")}
                className="px-7 py-4 rounded-full border border-[#171717]/30 hover:border-[#12372A] hover:bg-[#12372A]/5 text-[#171717] font-mono font-semibold text-xs sm:text-sm tracking-wider transition-all duration-200"
              >
                <span>LET&apos;S TALK</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Magazine-Style Editorial Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 25 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            {/* Offset Frame / Layered Magazine Shadow */}
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Background Accent Frame */}
              <div className="absolute inset-0 translate-x-3 translate-y-3 sm:translate-x-4 sm:translate-y-4 rounded-2xl border-2 border-[#12372A]/20 bg-[#12372A]/5 -z-10" />

              {/* Main Portrait Card */}
              <div className="relative rounded-2xl overflow-hidden border border-[#171717]/10 bg-white p-2.5 shadow-2xl shadow-[#171717]/10">
                <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden bg-[#E2D3B8]/30">
                  <Image
                    src="/josh-kigen.jpg"
                    alt="Josh Kigen — Creative Builder and Entrepreneur"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                    className="object-cover object-center grayscale-[15%] hover:grayscale-0 hover:scale-102 transition-all duration-700 ease-out"
                    priority
                  />
                  {/* Subtle warm photo gradient filter */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#12372A]/30 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Editorial Caption Bar */}
                <div className="pt-3 pb-1 px-2 flex items-center justify-between text-xs font-mono text-[#171717]">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#12372A]" />
                    <span className="font-bold tracking-widest text-[#12372A] uppercase text-[11px]">
                      {siteConfig.heroCaption1}
                    </span>
                  </div>
                  <span className="text-[#C5A46D] font-bold tracking-widest uppercase text-[11px]">
                    {siteConfig.heroCaption2}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
