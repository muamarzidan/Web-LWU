"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function VisionSection() {
  return (
      <div>
        <motion.div
          className="flex flex-col gap-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.span
            variants={fadeUp}
            className="inline-block px-3 py-1 bg-[#F59E0B]/10 text-[#F59E0B] text-xs font-bold uppercase tracking-widest rounded-full w-fit"
          >
            VISI
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-4xl font-bold text-[#1B2D5E] leading-tight"
            style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
          >
            Menjadi Platform Edukasi Bahasa Inggris Terpercaya di Indonesia
          </motion.h2>
          <motion.p variants={fadeUp} className="text-[#374151] text-lg leading-relaxed">
            Kami memimpikan Indonesia di mana setiap orang yang terlepas dari usia dan
            latar belakang, memiliki kemampuan berbahasa Inggris yang kuat untuk membuka
            kesempatan yang lebih luas dalam kehidupan akademik, profesional, dan pribadi mereka.
          </motion.p>
        </motion.div>
      </div>
  );
}
