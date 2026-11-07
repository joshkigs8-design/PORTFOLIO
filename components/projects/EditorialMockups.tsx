"use client";

import React from "react";

interface EditorialMockupProps {
  type: "rentreceipt" | "farefinder" | "edupath" | "onfits";
}

export function EditorialMockup({ type }: EditorialMockupProps) {
  if (type === "rentreceipt") {
    return (
      <div className="w-full bg-[#FAF7F2] rounded-xl border border-[#171717]/10 p-4 sm:p-7 shadow-sm text-[#171717] font-sans">
        {/* Mockup Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#171717]/10">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-[#12372A] text-[#F6F1E8] flex items-center justify-center font-bold text-xs">
              RP
            </div>
            <div>
              <div className="font-bold text-xs sm:text-sm text-[#12372A]">RentReceipt Pro</div>
              <div className="text-[10px] font-mono text-[#171717]/60">Estate Collection Ledger</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
            <span className="text-[11px] font-mono text-[#12372A] font-semibold bg-[#12372A]/5 px-2.5 py-1 rounded-full border border-[#12372A]/10">
              Live M-Pesa Hook
            </span>
          </div>
        </div>

        {/* Ledger Summary Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 my-4">
          <div className="p-3 bg-white rounded-lg border border-[#171717]/8 space-y-1">
            <div className="text-[10px] font-mono text-[#171717]/60 uppercase">Collected (Feb)</div>
            <div className="text-base sm:text-lg font-bold font-serif text-[#12372A]">Ksh 485,000</div>
            <div className="text-[10px] text-emerald-700 font-mono font-medium">94% Occupancy</div>
          </div>
          <div className="p-3 bg-white rounded-lg border border-[#171717]/8 space-y-1">
            <div className="text-[10px] font-mono text-[#171717]/60 uppercase">Pending Arrears</div>
            <div className="text-base sm:text-lg font-bold font-serif text-amber-800">Ksh 32,000</div>
            <div className="text-[10px] text-amber-700 font-mono font-medium">2 Units Reminded</div>
          </div>
          <div className="hidden sm:block p-3 bg-white rounded-lg border border-[#171717]/8 space-y-1">
            <div className="text-[10px] font-mono text-[#171717]/60 uppercase">Digital Receipts</div>
            <div className="text-base sm:text-lg font-bold font-serif text-[#171717]">100% Issued</div>
            <div className="text-[10px] text-[#12372A] font-mono font-medium">SMS + WhatsApp PDF</div>
          </div>
        </div>

        {/* Live Transaction Ledger Row */}
        <div className="p-3.5 bg-white rounded-lg border border-[#171717]/8 space-y-2">
          <div className="flex items-center justify-between text-xs font-mono pb-2 border-b border-[#171717]/5">
            <span className="font-semibold text-[#171717]">Latest Auto-Reconciliation</span>
            <span className="text-[11px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
              Verified &amp; Signed
            </span>
          </div>
          <div className="flex items-center justify-between text-xs font-sans">
            <div>
              <div className="font-bold text-[#171717]">Apt B4 — Grace Mwangi</div>
              <div className="text-[11px] font-mono text-[#171717]/60">M-Pesa Code: QKB892XLP · Feb Rent</div>
            </div>
            <div className="text-right">
              <div className="font-bold font-mono text-[#12372A]">+Ksh 35,000</div>
              <div className="text-[10px] font-mono text-[#171717]/50">Today 10:42 AM</div>
            </div>
          </div>
        </div>

        <div className="pt-3 mt-3 border-t border-[#171717]/8 flex items-center justify-between text-[11px] font-mono text-[#171717]/60">
          <span>rentreceipt.co.ke</span>
          <span className="text-[#12372A] font-semibold">Production SaaS System</span>
        </div>
      </div>
    );
  }

  if (type === "farefinder") {
    return (
      <div className="w-full bg-[#F4F7F9] rounded-xl border border-[#1E3A58]/15 p-4 sm:p-7 shadow-sm text-[#171717] font-sans">
        {/* Mockup Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#1E3A58]/10">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-[#1E3A58] text-white flex items-center justify-center font-bold text-xs">
              FF
            </div>
            <div>
              <div className="font-bold text-xs sm:text-sm text-[#1E3A58]">FareFinder Search</div>
              <div className="text-[10px] font-mono text-[#171717]/60">Regional Transit Matrix</div>
            </div>
          </div>
          <span className="text-[11px] font-mono text-[#1E3A58] bg-[#1E3A58]/8 px-2.5 py-1 rounded-full border border-[#1E3A58]/15">
            50+ Hubs Indexed
          </span>
        </div>

        {/* Route Search Mockup */}
        <div className="p-3.5 bg-white rounded-lg border border-[#1E3A58]/10 my-4 space-y-3">
          <div className="flex items-center justify-between text-xs font-mono">
            <span className="font-bold text-[#1E3A58]">Nairobi (NBO) → Mombasa (MBA)</span>
            <span className="text-zinc-500">Departing Today</span>
          </div>

          <div className="space-y-2">
            <div className="p-2.5 bg-[#F4F7F9] rounded border border-[#1E3A58]/10 flex items-center justify-between text-xs">
              <div>
                <div className="font-bold text-[#171717]">Tahmeed Coach · VIP 2x1 Luxury</div>
                <div className="text-[10px] font-mono text-zinc-500">Dep: 08:30 AM · WiFi, AC, Power</div>
              </div>
              <div className="text-right font-mono">
                <span className="font-bold text-[#1E3A58] text-sm">Ksh 1,800</span>
                <div className="text-[10px] text-emerald-700">Best Value</div>
              </div>
            </div>

            <div className="p-2.5 bg-white rounded border border-[#171717]/8 flex items-center justify-between text-xs">
              <div>
                <div className="font-bold text-[#171717]">Mash East Africa · Executive</div>
                <div className="text-[10px] font-mono text-zinc-500">Dep: 09:00 AM · Fast Highway</div>
              </div>
              <div className="text-right font-mono">
                <span className="font-bold text-[#171717] text-sm">Ksh 2,000</span>
                <div className="text-[10px] text-zinc-500">Available</div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-2 border-t border-[#1E3A58]/10 flex items-center justify-between text-[11px] font-mono text-[#1E3A58]">
          <span>farefinder.app</span>
          <span>Instant Transit Comparison →</span>
        </div>
      </div>
    );
  }

  if (type === "edupath") {
    return (
      <div className="w-full bg-[#FAF7FD] rounded-xl border border-purple-900/10 p-4 sm:p-7 shadow-sm text-[#171717] font-sans">
        {/* Mockup Header */}
        <div className="flex items-center justify-between pb-4 border-b border-purple-900/10">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-[#582098] text-white flex items-center justify-center font-bold text-xs">
              AI
            </div>
            <div>
              <div className="font-bold text-xs sm:text-sm text-[#582098]">EduPath AI</div>
              <div className="text-[10px] font-mono text-[#171717]/60">KUCCPS Cluster Advisory</div>
            </div>
          </div>
          <span className="text-[11px] font-mono text-[#582098] bg-purple-100 px-2.5 py-1 rounded-full border border-purple-200">
            KCSE Matching Engine
          </span>
        </div>

        {/* Calculated Cluster Card */}
        <div className="p-3.5 bg-white rounded-lg border border-purple-900/10 my-4 space-y-2.5">
          <div className="flex justify-between items-center text-xs">
            <span className="font-bold text-[#171717]">B.Sc. Software Engineering</span>
            <span className="font-mono text-[#582098] font-bold">41.85 / 43.00 Cutoff</span>
          </div>
          <div className="w-full h-2.5 bg-purple-100 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-purple-600 to-indigo-500 rounded-full w-[94%]" />
          </div>
          <div className="flex justify-between text-[11px] font-mono text-zinc-600">
            <span>Acceptance Probability: <strong className="text-emerald-700">94% High</strong></span>
            <span>UoN / JKUAT</span>
          </div>
        </div>

        {/* Advisory Insight */}
        <div className="p-3 bg-purple-50/60 rounded-lg border border-purple-100 text-xs space-y-1">
          <div className="text-[10px] font-mono font-bold text-[#582098] uppercase">
            Personalized Guidance
          </div>
          <p className="text-zinc-700 text-[11px] leading-relaxed">
            &ldquo;Strong performance in Math (A-) and Physics (B+) positions you ideally for Computing and Business Information Technology.&rdquo;
          </p>
        </div>

        <div className="pt-3 mt-3 border-t border-purple-900/10 flex items-center justify-between text-[11px] font-mono text-[#582098]">
          <span>edupathai.site</span>
          <span>Democratizing Academic Placement</span>
        </div>
      </div>
    );
  }

  // O&N FITS (type === "onfits")
  return (
    <div className="w-full bg-[#181114] rounded-xl border border-[#C5A46D]/25 p-4 sm:p-7 shadow-md text-[#F6F1E8] font-sans">
      {/* High-Fashion Editorial Header */}
      <div className="flex items-baseline justify-between pb-4 border-b border-white/10">
        <div className="flex items-baseline gap-3">
          <span className="font-serif tracking-widest text-xl font-bold text-white">
            O&amp;N FITS
          </span>
          <span className="text-[10px] font-mono tracking-widest text-[#C5A46D] uppercase">
            &#47;&#47; STUDIO LOOKBOOK SS26
          </span>
        </div>
        <span className="text-[10px] font-mono text-white/80 bg-white/10 px-2.5 py-1 rounded border border-white/10">
          CURATED APPAREL
        </span>
      </div>

      {/* Fashion Garment Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 my-4">
        <div className="p-3 rounded-lg bg-black/40 border border-white/10 space-y-1.5">
          <div className="text-[10px] font-mono text-[#C5A46D] uppercase">DROP 04</div>
          <div className="font-bold text-white text-xs sm:text-sm">Oversized Trench</div>
          <div className="text-[10px] font-mono text-zinc-400">Heavyweight Twill</div>
          <div className="text-xs font-mono text-white font-bold pt-1">Ksh 8,500</div>
        </div>

        <div className="p-3 rounded-lg bg-black/40 border border-white/10 space-y-1.5">
          <div className="text-[10px] font-mono text-[#C5A46D] uppercase">LIMITED</div>
          <div className="font-bold text-white text-xs sm:text-sm">Cargo Trouser</div>
          <div className="text-[10px] font-mono text-zinc-400">Obsidian Carbon</div>
          <div className="text-xs font-mono text-white font-bold pt-1">Ksh 5,200</div>
        </div>

        <div className="hidden sm:block p-3 rounded-lg bg-black/40 border border-white/10 space-y-1.5">
          <div className="text-[10px] font-mono text-[#C5A46D] uppercase">ARCHIVE</div>
          <div className="font-bold text-white text-xs sm:text-sm">French Terry Hoodie</div>
          <div className="text-[10px] font-mono text-zinc-400">500 GSM Boxy</div>
          <div className="text-xs font-mono text-white font-bold pt-1">Ksh 6,000</div>
        </div>
      </div>

      <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-zinc-400">
        <span>oandnfits.co.ke</span>
        <span className="text-[#C5A46D] font-bold">EXPLORE LOOKBOOK ↗</span>
      </div>
    </div>
  );
}
