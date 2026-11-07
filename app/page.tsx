"use client";

import React from "react";
import { Navbar } from "@/components/navigation/Navbar";
import { HeroSection } from "@/components/hero/HeroSection";
import { IntroStatement } from "@/components/sections/IntroStatement";
import { ProjectsShowcase } from "@/components/sections/ProjectsShowcase";
import { AboutMeSplit } from "@/components/sections/AboutMeSplit";
import { WhatIBring } from "@/components/sections/WhatIBring";
import { MyWorld } from "@/components/sections/MyWorld";
import { JourneyTimeline } from "@/components/sections/JourneyTimeline";
import { QuoteBanner } from "@/components/sections/QuoteBanner";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/navigation/Footer";

export default function HomePage() {
  return (
    <div id="home" className="relative min-h-screen bg-[#F6F1E8] text-[#171717] selection:bg-[#12372A] selection:text-[#F6F1E8]">
      {/* Navigation */}
      <Navbar />

      {/* Editorial Luxury Flow */}
      <main className="relative z-10">
        {/* 1. Hero Section */}
        <HeroSection />

        {/* 2. Intro Statement & Personal Stats */}
        <IntroStatement />

        {/* 3. Selected Work (01-06 Bespoke Editorial Projects) */}
        <ProjectsShowcase />

        {/* 4. About Me Split Screen (Who Is Josh? + Portrait) */}
        <AboutMeSplit />

        {/* 5. What I Bring (Build, Design, Think, Grow) */}
        <WhatIBring />

        {/* 6. My World (Domains & Disciplines) */}
        <MyWorld />

        {/* 7. The Journey So Far (Trajectory) */}
        <JourneyTimeline />

        {/* 8. Personal Quote Banner (Full-Width Forest Green #12372A) */}
        <QuoteBanner />

        {/* 9. Clean Contact Section (Have something in mind?) */}
        <ContactSection />
      </main>

      {/* 10. Charcoal Editorial Footer */}
      <Footer />
    </div>
  );
}
