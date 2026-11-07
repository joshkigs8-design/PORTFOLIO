"use client";

import React, { useState } from "react";
import {
  ArrowUpRight,
  Copy,
  Check,
  MessageCircle,
} from "lucide-react";
import { XTwitterIcon, GithubIcon, LinkedinIcon, InstagramIcon } from "@/components/ui/Icons";
import { siteConfig } from "@/data/siteConfig";

export function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(siteConfig.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(siteConfig.phoneRaw);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`;
    window.location.href = `mailto:${siteConfig.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact" className="py-24 sm:py-36 bg-[#F6F1E8] border-t border-[#171717]/8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 space-y-16">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[#12372A] uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#12372A]" />
            <span>HAVE SOMETHING IN MIND?</span>
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl font-serif font-bold text-[#171717] tracking-tight uppercase leading-[1.05]">
            LET&apos;S MAKE <br />
            <span className="text-[#12372A]">SOMETHING GREAT.</span>
          </h2>

          <p className="text-lg sm:text-xl text-[#171717]/75 font-sans leading-relaxed">
            Have a project, idea or opportunity you&apos;d like to discuss? I&apos;d love to hear about it.
          </p>
        </div>

        {/* Form and Contact Information Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: Clean Message Box */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#171717]/10 shadow-sm">
              <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="contact-name" className="text-xs font-mono font-bold uppercase tracking-wider text-[#171717]/70">
                        Your Name
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        placeholder="Alex Morgan"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border border-[#171717]/10 text-[#171717] placeholder-[#171717]/30 text-sm focus:outline-none focus:border-[#12372A] transition-colors"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="contact-email" className="text-xs font-mono font-bold uppercase tracking-wider text-[#171717]/70">
                        Email Address
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        placeholder="alex@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border border-[#171717]/10 text-[#171717] placeholder-[#171717]/30 text-sm focus:outline-none focus:border-[#12372A] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="contact-subject" className="text-xs font-mono font-bold uppercase tracking-wider text-[#171717]/70">
                      Subject
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      required
                      placeholder="A product, idea or collaboration"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border border-[#171717]/10 text-[#171717] placeholder-[#171717]/30 text-sm focus:outline-none focus:border-[#12372A] transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="contact-message" className="text-xs font-mono font-bold uppercase tracking-wider text-[#171717]/70">
                      Your Idea / Project Goals
                    </label>
                    <textarea
                      id="contact-message"
                      required
                      rows={4}
                      placeholder="Tell me what you're looking to create, timeline, or what you'd like to collaborate on..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border border-[#171717]/10 text-[#171717] placeholder-[#171717]/30 text-sm focus:outline-none focus:border-[#12372A] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-[#12372A] hover:bg-[#0D261D] text-[#F6F1E8] font-mono font-bold text-sm tracking-wider flex items-center justify-center gap-2 shadow-sm transition-all duration-200"
                  >
                    <span>START A CONVERSATION</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </form>
            </div>
          </div>

          {/* Right: Direct Contacts & Socials */}
          <div className="lg:col-span-5 space-y-6">
            {/* Direct Email Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#171717]/10 space-y-3 shadow-xs">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#C5A46D]">
                Direct Electronic Mail
              </span>

              <div>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-xl sm:text-2xl font-serif font-bold text-[#171717] hover:text-[#12372A] transition-colors break-all"
                >
                  {siteConfig.email}
                </a>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <button
                  onClick={handleCopyEmail}
                  className="px-4 py-2 rounded-full bg-[#FAF7F2] border border-[#171717]/10 hover:border-[#12372A] text-xs font-mono text-[#171717] flex items-center gap-2 transition-colors"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-700" />
                      <span className="text-emerald-700 font-bold">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>

                <a
                  href={`mailto:${siteConfig.email}`}
                  className="px-4 py-2 rounded-full bg-[#12372A] text-[#F6F1E8] text-xs font-mono font-bold flex items-center gap-1.5 shadow-xs"
                >
                  <span>Compose</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Direct Phone & WhatsApp */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#171717]/10 space-y-3 shadow-xs">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#C5A46D]">
                Direct Line &amp; WhatsApp
              </span>

              <div>
                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="text-xl sm:text-2xl font-serif font-bold text-[#171717] hover:text-[#12372A] transition-colors"
                >
                  {siteConfig.phone}
                </a>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href={siteConfig.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full bg-[#12372A] text-[#F6F1E8] text-xs font-mono font-bold flex items-center gap-1.5 shadow-xs"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp Chat</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>

                <button
                  onClick={handleCopyPhone}
                  className="px-4 py-2 rounded-full bg-[#FAF7F2] border border-[#171717]/10 hover:border-[#12372A] text-xs font-mono text-[#171717] flex items-center gap-2 transition-colors"
                >
                  {copiedPhone ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-700" />
                      <span className="text-emerald-700 font-bold">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Number</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Social Grid */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#171717]/10 space-y-4 shadow-xs">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#C5A46D]">
                Social Channels
              </span>

              <div className="grid grid-cols-2 gap-3">
                <a
                  href={siteConfig.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-2xl bg-[#FAF7F2] hover:bg-white border border-[#171717]/8 flex items-center justify-between group transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <GithubIcon className="w-4 h-4 text-[#171717]" />
                    <span className="text-xs font-mono text-[#171717] group-hover:text-[#12372A] font-medium">
                      GitHub
                    </span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#171717]/40 group-hover:text-[#12372A]" />
                </a>

                <a
                  href={siteConfig.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-2xl bg-[#FAF7F2] hover:bg-white border border-[#171717]/8 flex items-center justify-between group transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <LinkedinIcon className="w-4 h-4 text-blue-700" />
                    <span className="text-xs font-mono text-[#171717] group-hover:text-[#12372A] font-medium">
                      LinkedIn
                    </span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#171717]/40 group-hover:text-[#12372A]" />
                </a>

                <a
                  href={siteConfig.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-2xl bg-[#FAF7F2] hover:bg-white border border-[#171717]/8 flex items-center justify-between group transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <InstagramIcon className="w-4 h-4 text-rose-700" />
                    <span className="text-xs font-mono text-[#171717] group-hover:text-[#12372A] font-medium">
                      Instagram
                    </span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#171717]/40 group-hover:text-[#12372A]" />
                </a>

                <a
                  href={siteConfig.socials.x}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-2xl bg-[#FAF7F2] hover:bg-white border border-[#171717]/8 flex items-center justify-between group transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <XTwitterIcon className="w-4 h-4 text-[#171717]" />
                    <span className="text-xs font-mono text-[#171717] group-hover:text-[#12372A] font-medium">
                      X / Twitter
                    </span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#171717]/40 group-hover:text-[#12372A]" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
