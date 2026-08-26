"use client";

import React from "react";
import { ArrowUp, ArrowUpRight } from "lucide-react";
import { XTwitterIcon, GithubIcon, LinkedinIcon, InstagramIcon } from "@/components/ui/Icons";
import { siteConfig } from "@/data/siteConfig";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#171717] text-[#F6F1E8] pt-20 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 space-y-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Brand & Manifesto */}
          <div className="md:col-span-6 space-y-4">
            <div className="text-xs font-mono font-bold text-[#C5A46D] uppercase tracking-widest">
              JOSH KIGEN
            </div>

            <h3 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#F6F1E8] tracking-tight uppercase leading-[1.1]">
              BUILDING IDEAS <br />
              INTO REALITY.
            </h3>

            <p className="text-sm text-zinc-400 max-w-md font-sans leading-relaxed pt-2">
              Founder of Codevanta Ventures. Developing digital products, brands and technology solutions rooted in Kenya for the world.
            </p>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-mono font-bold tracking-widest text-[#C5A46D] uppercase">
              Navigation
            </div>
            <ul className="space-y-2.5 text-xs font-mono">
              {siteConfig.navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-zinc-300 hover:text-white transition-colors uppercase tracking-wider"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials & Direct Connect */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-mono font-bold tracking-widest text-[#C5A46D] uppercase">
              Connect
            </div>
            <ul className="space-y-2 text-xs font-mono">
              <li>
                <a
                  href={siteConfig.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-300 hover:text-white transition-colors flex items-center justify-between group"
                >
                  <span className="flex items-center gap-2">
                    <GithubIcon className="w-3.5 h-3.5 text-zinc-400 group-hover:text-white" />
                    <span>GitHub</span>
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-600 group-hover:text-white" />
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-300 hover:text-white transition-colors flex items-center justify-between group"
                >
                  <span className="flex items-center gap-2">
                    <LinkedinIcon className="w-3.5 h-3.5 text-blue-400" />
                    <span>LinkedIn</span>
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-600 group-hover:text-white" />
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-300 hover:text-white transition-colors flex items-center justify-between group"
                >
                  <span className="flex items-center gap-2">
                    <InstagramIcon className="w-3.5 h-3.5 text-rose-400" />
                    <span>Instagram</span>
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-600 group-hover:text-white" />
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.socials.x}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-300 hover:text-white transition-colors flex items-center justify-between group"
                >
                  <span className="flex items-center gap-2">
                    <XTwitterIcon className="w-3.5 h-3.5 text-sky-400" />
                    <span>X / Twitter</span>
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-600 group-hover:text-white" />
                </a>
              </li>
              <li className="pt-2 border-t border-white/10">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-[#C5A46D] hover:underline"
                >
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} Josh Kigen.</span>
            <span>/</span>
            <span>Codevanta Ventures.</span>
            <span>/</span>
            <span className="text-zinc-400 italic">Made with curiosity.</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-zinc-400 hover:text-white transition-colors group"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
