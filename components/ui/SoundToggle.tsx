"use client";

import React, { useEffect, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { sound } from "@/lib/sound";

export function SoundToggle() {
  const [isMuted, setIsMuted] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setIsMuted(sound.getMuted());
  }, []);

  if (!mounted) return null;

  const handleToggle = () => {
    const newMuted = sound.toggleMute();
    setIsMuted(newMuted);
  };

  return (
    <button
      onClick={handleToggle}
      aria-label={isMuted ? "Unmute UI sound effects" : "Mute UI sound effects"}
      title={isMuted ? "Audio: Off (Click to enable subtle haptics)" : "Audio: On"}
      className="relative p-2 rounded-full glass-pill hover:border-white/30 text-zinc-400 hover:text-white transition-all flex items-center gap-1.5 text-xs font-mono"
    >
      {isMuted ? (
        <VolumeX className="w-3.5 h-3.5" />
      ) : (
        <Volume2 className="w-3.5 h-3.5 text-indigo-400 animate-pulse" />
      )}
      <span className="hidden sm:inline text-[11px] text-zinc-400">
        {isMuted ? "SFX: OFF" : "SFX: ON"}
      </span>
    </button>
  );
}
