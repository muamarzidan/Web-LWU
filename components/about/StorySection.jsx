"use client";

import { motion } from "framer-motion";
import { HeartHandshake } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const facts = [
  { label: "Tahun Berdiri", value: "2013" },
  { label: "Rentang Usia Siswa", value: "7–62 Tahun" },
  { label: "Lokasi", value: "Tebet, Jakarta, Indonesia" },
  { label: "Tim Profesional", value: "11–50 Orang" },
];

export default function StorySection() {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Left: Text */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="flex flex-col gap-5"
          >
            <motion.div variants={fadeUp}>
              <span className="inline-block px-3 py-1 bg-[#2563EB]/10 text-[#2563EB] text-xs font-bold uppercase tracking-widest rounded-full">
                Est. 2013
              </span>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="text-3xl md:text-4xl font-bold text-[#1B2D5E] leading-tight"
              style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
            >
              Dimulai dari Sebuah Mimpi
            </motion.h2>
            <motion.div variants={fadeUp} className="flex flex-col gap-4 text-[#374151] leading-relaxed">
              <p>
                Learning With Us (LWU) pertama kali berdiri pada tahun 2013 dengan satu
                tujuan sederhana, yaitu membantu masyarakat Indonesia meraih potensi penuh mereka
                melalui kemampuan berbahasa Inggris.
              </p>
              <p>
                Kami percaya bahwa kemampuan berbahasa Inggris bukan hanya tentang
                ujian, ini adalah kunci membuka pintu kesempatan: beasiswa ke luar negeri,
                karier yang lebih baik, atau sekadar berkomunikasi dengan percaya diri.
              </p>
              <p>
                Dengan tim pengajar berpengalaman dan metode pembelajaran yang terbukti,
                kami telah membantu lebih dari 1.000 siswa dari rentang usia 7 hingga 62 tahun
                mencapai target mereka.
              </p>
            </motion.div>
          </motion.div>
          {/* Right: Key Facts Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div
              className="rounded-3xl p-8 text-white"
              style={{
                background: "linear-gradient(135deg, #1B2D5E 0%, #2563EB 100%)",
              }}
            >
              <div className="grid grid-cols-2 gap-5">
                {facts.map((fact) => (
                  <div
                    key={fact.label}
                    className="bg-white/10 rounded-2xl p-5 flex flex-col gap-1"
                  >
                    <span className="text-xs text-blue-200 font-medium">
                      {fact.label}
                    </span>
                    <span className="text-lg sm:text-2xl font-extrabold text-white leading-none" style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}>
                      {fact.value}
                    </span>
                  </div>
                ))}
              </div>
              <div className="flex gap-2 justify-center items-center mt-6 pt-3 border-t border-white/20 text-sm text-blue-100">
                <HeartHandshake className="sm:size-5 size-18" color="white" />
                Membantu 1,000+ siswa meraih impian mereka sejak 2013
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
