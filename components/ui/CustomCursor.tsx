"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [cursorText, setCursorText] = useState<string>("");
  const [cursorVariant, setCursorVariant] = useState<"default" | "hover" | "project" | "text">("default");
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isTouchDevice, setIsTouchDevice] = useState<boolean>(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 400, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Disable on touch devices
    if (window.matchMedia("(pointer: coarse)").matches || "ontouchstart" in window) {
      window.setTimeout(() => setIsTouchDevice(true), 0);
      return;
    }

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleElementHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const projectEl = target.closest("[data-cursor='project']");
      const linkEl = target.closest("a, button, [data-cursor='pointer']");
      const textEl = target.closest("[data-cursor='text']");

      if (projectEl) {
        setCursorVariant("project");
        setCursorText((projectEl.getAttribute("data-cursor-text") as string) || "VIEW");
      } else if (linkEl) {
        setCursorVariant("hover");
        setCursorText("");
      } else if (textEl) {
        setCursorVariant("text");
        setCursorText("");
      } else {
        setCursorVariant("default");
        setCursorText("");
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleElementHover);
    document.body.addEventListener("mouseleave", handleMouseLeave);
    document.body.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleElementHover);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
      document.body.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [cursorX, cursorY, isVisible]);

  if (isTouchDevice || !isVisible) return null;

  const variants = {
    default: {
      width: 12,
      height: 12,
      backgroundColor: "#ffffff",
      opacity: 0.7,
      x: "-50%",
      y: "-50%",
    },
    hover: {
      width: 42,
      height: 42,
      backgroundColor: "rgba(255, 255, 255, 0.12)",
      borderColor: "rgba(255, 255, 255, 0.4)",
      borderWidth: 1,
      opacity: 1,
      x: "-50%",
      y: "-50%",
    },
    project: {
      width: 80,
      height: 80,
      backgroundColor: "#6366f1",
      borderColor: "#818cf8",
      borderWidth: 1.5,
      opacity: 0.95,
      x: "-50%",
      y: "-50%",
      boxShadow: "0 0 30px rgba(99, 102, 241, 0.5)",
    },
    text: {
      width: 4,
      height: 28,
      backgroundColor: "#6366f1",
      borderRadius: 2,
      opacity: 0.8,
      x: "-50%",
      y: "-50%",
    },
  };

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-50 rounded-full flex items-center justify-center font-mono text-[10px] font-bold tracking-widest text-white backdrop-blur-[2px] transition-colors duration-200 select-none"
      style={{
        translateX: cursorXSpring,
        translateY: cursorYSpring,
      }}
      variants={variants}
      animate={cursorVariant}
      transition={{ type: "spring", stiffness: 450, damping: 28 }}
    >
      {cursorVariant === "project" && (
        <motion.span
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.6 }}
          className="uppercase tracking-widest"
        >
          {cursorText}
        </motion.span>
      )}
    </motion.div>
  );
}
