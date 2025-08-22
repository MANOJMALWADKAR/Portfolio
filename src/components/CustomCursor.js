"use client";
import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [hoveringLink, setHoveringLink] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 500 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const move = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [mouseX, mouseY]);

  useEffect(() => {
    const handleHover = (e) => {
      const isHovering =
        e.target.closest("button")?.classList.contains("cursor-hover"); 
        e.target.closest("a")?.classList.contains("cursor-hover"); 
      setHoveringLink(isHovering);
    };

    window.addEventListener("mouseover", handleHover);
    return () => window.removeEventListener("mouseover", handleHover);
  }, []);

  return (
    <>
      {/* Outer circle */}
      <motion.div
        className={`pointer-events-none fixed z-[9999] transition-opacity duration-200 border border-white rounded-full -translate-x-1/2 -translate-y-1/2 ${
          hoveringLink ? "opacity-0" : "opacity-100"
        }`}
        style={{
          top: cursorY,
          left: cursorX,
          height: 28,
          width: 28,
        }}
      />

      {/* Inner dot */}
      <motion.div
        className="pointer-events-none fixed z-[9999] bg-white rounded-full -translate-x-1/2 -translate-y-1/2"
        style={{
          top: cursorY,
          left: cursorX,
          height: hoveringLink ? 14 : 6,
          width: hoveringLink ? 14 : 6,
        }}
      />
    </>
  );
}
