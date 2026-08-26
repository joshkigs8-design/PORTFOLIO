"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "py-3 bg-[#F6F1E8]/90 backdrop-blur-md border-b border-[#171717]/8 shadow-sm"
            : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex items-center justify-between">
            {/* Left: Brand / Name */}
            <a
              href="#"
              onClick={(e) => handleNavClick(e, "#")}
              className="flex items-center gap-3 group"
            >
              <div className="w-8 h-8 rounded-full overflow-hidden border border-[#12372A]/20 bg-[#12372A]/5 relative">
                <Image
                  src="/avatar.jpg"
                  alt="Josh Kigen"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform"
                  sizes="32px"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-sans font-extrabold text-sm sm:text-base tracking-tight text-[#171717] group-hover:text-[#12372A] transition-colors">
                  JOSH KIGEN
                </span>
                <span className="text-[10px] font-mono text-[#12372A] tracking-wider uppercase font-semibold">
                  BUILDER &amp; FOUNDER
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-8">
              {siteConfig.navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-xs font-mono font-medium text-[#171717]/80 hover:text-[#12372A] transition-colors tracking-widest uppercase relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#12372A] hover:after:w-full after:transition-all"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Right CTA Button */}
            <div className="hidden md:flex items-center gap-4">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className="px-5 py-2 rounded-full border border-[#12372A] text-[#12372A] hover:bg-[#12372A] hover:text-[#F6F1E8] text-xs font-mono font-bold tracking-wider transition-all duration-200 flex items-center gap-1.5 shadow-sm hover:shadow"
              >
                <span>LET&apos;S TALK</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Mobile Hamburger Trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
              className="md:hidden p-2 rounded-lg text-[#171717] hover:bg-[#171717]/5 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-0 top-[70px] z-40 bg-[#F6F1E8] p-6 flex flex-col justify-between md:hidden border-t border-[#171717]/10"
          >
            <nav className="space-y-6 pt-4">
              {siteConfig.navLinks.map((link, idx) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="block text-2xl font-serif font-bold text-[#171717] hover:text-[#12372A] transition-colors py-2 border-b border-[#171717]/5"
                >
                  <span className="text-xs font-mono text-[#C5A46D] mr-3">0{idx + 1}</span>
                  {link.label}
                </a>
              ))}
              <div className="pt-4">
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, "#contact")}
                  className="w-full py-3.5 rounded-xl bg-[#12372A] text-[#F6F1E8] text-sm font-mono font-bold flex items-center justify-center gap-2 shadow-sm"
                >
                  <span>LET&apos;S TALK</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </nav>

            <div className="pt-6 border-t border-[#171717]/10 text-xs font-mono text-[#171717]/70 space-y-1">
              <div>Josh Kigen · Nairobi, Kenya</div>
              <div className="text-[#12372A] font-semibold">{siteConfig.email}</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
