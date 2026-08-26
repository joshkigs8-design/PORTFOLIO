"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, GraduationCap, Building2, Heart } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export function AboutMeSplit() {
  return (
    <section className="py-24 sm:py-32 bg-[#F6F1E8] border-t border-[#171717]/8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Large Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Background Accent Frame */}
              <div className="absolute inset-0 translate-x-3 translate-y-3 sm:translate-x-4 sm:translate-y-4 rounded-3xl border-2 border-[#12372A]/15 bg-[#12372A]/5 -z-10" />

              <div className="relative rounded-3xl overflow-hidden bg-white p-2.5 border border-[#171717]/10 shadow-xl">
                <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-[#E2D3B8]/20">
                  <Image
                    src="/josh-kigen.jpg"
                    alt="Josh Kigen — Creative Builder"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                    className="object-cover object-center grayscale-[10%] hover:grayscale-0 transition-all duration-700"
                  />
                </div>

                <div className="pt-3 pb-1 px-3 flex items-center justify-between text-xs font-mono text-[#171717]/70">
                  <span>Josh Kigen (Josh Kigs)</span>
                  <span className="text-[#12372A] font-bold">Nairobi, Kenya</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Narrative & Who Is Josh */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[#12372A] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#12372A]" />
              <span>THE PERSON BEHIND THE WORK</span>
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif font-bold text-[#171717] tracking-tight uppercase leading-[1.1]">
              WHO IS JOSH?
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-[#171717]/80 font-sans leading-relaxed">
              <p>
                Josh is a young builder and creative entrepreneur from Kenya who gets energized by turning raw ideas into tangible, useful digital products that solve real problems.
              </p>

              <p>
                Currently pursuing a Bachelor of Business Information Technology (BBIT) at JKUAT, he naturally bridges the gap between commercial strategy and engineering execution. He cares as much about why a product exists and how people interact with it as he does about the code that powers it.
              </p>

              <p>
                Outside of building startups and digital ventures under Codevanta Ventures, you&apos;ll find him exploring contemporary fashion, dissecting business models, testing new technologies, and learning from people around him.
              </p>
            </div>

            {/* Quick Human Fact Pills */}
            <div className="pt-4 flex flex-wrap items-center gap-3 text-xs font-mono text-[#171717]/80">
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-white border border-[#171717]/10 shadow-xs">
                <MapPin className="w-3.5 h-3.5 text-[#12372A]" />
                <span>Nairobi, Kenya</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-white border border-[#171717]/10 shadow-xs">
                <GraduationCap className="w-3.5 h-3.5 text-[#12372A]" />
                <span>BBIT Student (JKUAT)</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-white border border-[#171717]/10 shadow-xs">
                <Building2 className="w-3.5 h-3.5 text-[#12372A]" />
                <span>Founder @ Codevanta Ventures</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
