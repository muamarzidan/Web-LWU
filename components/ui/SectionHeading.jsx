"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  light = false,
  className = "",
}) {
  const alignClass = {
    center: "text-center items-center",
    left: "text-left items-start",
    right: "text-right items-end",
  };

  return (
    <motion.div
      className={`flex flex-col gap-3 ${alignClass[align] || alignClass.center} ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
    >
      {eyebrow && (
        <motion.span
          variants={fadeUp}
          className={`inline-block text-xs font-bold uppercase tracking-widest ${
            light ? "text-blue-200" : "text-[#2563EB]"
          }`}
        >
          {eyebrow}
        </motion.span>
      )}
      <motion.h2
        variants={fadeUp}
        className={`text-3xl md:text-4xl font-bold leading-tight ${
          light ? "text-white" : "text-[#1B2D5E]"
        }`}
        style={{ fontFamily: "var(--font-plus-jakarta, system-ui)" }}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          variants={fadeUp}
          className={`text-base md:text-lg max-w-2xl leading-relaxed ${
            light ? "text-blue-100" : "text-[#6B7280]"
          }`}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}
