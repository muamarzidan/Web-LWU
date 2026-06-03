"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";

const missions = [
  {
    number: "01",
    text: "Memberikan pendidikan bahasa Inggris berkualitas tinggi yang accessible untuk semua kalangan, dari anak-anak usia 7 tahun hingga profesional usia 62 tahun.",
  },
  {
    number: "02",
    text: "Membantu setiap siswa mencapai tujuan spesifik mereka — lulus IELTS, mendapat beasiswa, naik jabatan, atau sekadar berbicara dengan lebih percaya diri.",
  },
  {
    number: "03",
    text: "Terus berinovasi dalam metode pengajaran dan materi pembelajaran untuk memberikan hasil terbaik dalam waktu sesingkat mungkin.",
  },
];

export default function MissionSection() {
  return (
    <>
        <div>
          <SectionHeading
            eyebrow="MISI"
            title="Apa Yang Kami Lakukan Setiap Hari"
            align="left"
            className="mb-14"
          />
          <div className="flex flex-col gap-6">
            {missions.map((mission, i) => (
              <motion.div
                key={mission.number}
                className="relative border-l-4 border-[#2563EB] pl-8 py-2"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
              >
                {/* Big number overlay */}
                <span
                  className="absolute -left-2 top-0 text-7xl md:text-8xl font-extrabold select-none leading-none"
                  style={{
                    color: "#2563EB",
                    opacity: 0.12,
                    fontFamily: "var(--font-playfair, Georgia, serif)",
                    lineHeight: 1,
                  }}
                  aria-hidden="true"
                >
                  {mission.number}
                </span>
                <div className="relative">
                  <p className="text-[#374151] text-base md:text-lg leading-relaxed max-w-3xl">
                    {mission.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
    </>
  );
}
