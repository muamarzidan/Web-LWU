"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, animate } from "framer-motion";

function AnimatedNumber({ value, duration = 1.5 }) {
  const motionValue = useMotionValue(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const displayRef = useRef(null);

  useEffect(() => {
    if (isInView) {
      const numericValue = parseInt(value.replace(/[^0-9]/g, ""), 10);
      const controls = animate(motionValue, numericValue, {
        duration,
        ease: "easeOut",
        onUpdate: (v) => {
          if (displayRef.current) {
            const formatted = Math.round(v).toLocaleString("id-ID");
            const suffix = value.replace(/[0-9,\.]/g, "");
            displayRef.current.textContent = formatted + suffix;
          }
        },
      });
      return () => controls.stop();
    }
  }, [isInView, value, duration, motionValue]);

  return (
    <span ref={ref}>
      <span ref={displayRef}>0</span>
    </span>
  );
}

export default function StatCard({ number, label, prefix = "", suffix = "", animate = true }) {
  return (
    <motion.div
      className="flex flex-col items-center gap-2 text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div
        className="text-4xl md:text-5xl font-bold text-white leading-none"
        style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
      >
        {prefix}
        {animate ? (
          <AnimatedNumber value={number} />
        ) : (
          <span>{number}</span>
        )}
        {suffix}
      </div>
      <div className="text-sm md:text-base font-medium text-blue-200 uppercase tracking-wide">
        {label}
      </div>
    </motion.div>
  );
}
