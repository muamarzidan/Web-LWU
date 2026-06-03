"use client";

import { motion } from "framer-motion";
import { Users, CheckCircle, Monitor, Heart } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const features = [
  {
    icon: Users,
    title: "Pengajar Berpengalaman",
    description:
      "Tim tutor kami adalah profesional bersertifikat dengan pengalaman mengajar bertahun-tahun dan rekam jejak siswa yang berhasil.",
    bg: "bg-[#2563EB]/10",
    color: "text-[#2563EB]",
  },
  {
    icon: CheckCircle,
    title: "Metode Terbukti",
    description:
      "Kurikulum kami dirancang berdasarkan metode pembelajaran yang sudah terbukti efektif membantu ribuan siswa mencapai target.",
    bg: "bg-green-50",
    color: "text-green-600",
  },
  {
    icon: Monitor,
    title: "Fleksibel (Online & Offline)",
    description:
      "Belajar sesuai kenyamananmu. Kami menyediakan kelas online yang interaktif maupun pertemuan tatap muka.",
    bg: "bg-[#F59E0B]/10",
    color: "text-[#F59E0B]",
  },
  {
    icon: Heart,
    title: "Semua Usia (7–62 tahun)",
    description:
      "Program kami dirancang untuk berbagai kelompok usia, mulai dari anak-anak yang sedang membangun fondasi bahasa Inggris, remaja yang mempersiapkan masa depan akademik, hingga profesional dewasa yang ingin meningkatkan kemampuan komunikasi untuk kebutuhan karier dan bisnis.",
    bg: "bg-pink-50",
    color: "text-pink-600",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" },
  }),
};

function FeatureCard({ feature, className = "" }) {
  const Icon = feature.icon;

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
      className={`
        relative
        overflow-hidden
        bg-white
        rounded-3xl
        p-6
        border border-[#F3F4F6]
        transition-all
        duration-300
        flex
        flex-col
        justify-between
        h-full
        ${className}
      `}
    >
      {/* Decorative Icon */}
      <Icon
        className={`
          absolute
          -right-4
          -bottom-4
          w-28
          h-28
          ${feature.color}
          opacity-[0.08]
          -rotate-12
          pointer-events-none
        `}
      />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-bold text-[#1B2D5E] mb-3">
            {feature.title}
          </h3>

          <p className="text-sm text-[#6B7280] leading-relaxed">
            {feature.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function FounderSection() {
  return (
    <section className="py-20 md:py-32 bg-[#F8F6F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Keunggulan Kami"
          title="Mengapa LWU?"
          subtitle="Kami bukan sekadar kursus biasa. Ini yang membuat LWU berbeda"
          className="mb-14"
        />
        <div className="grid gap-4 md:grid-cols-[2fr_1fr]">
          <div className="flex flex-col gap-4">
            <FeatureCard
              feature={features[0]}
              className="md:h-[150px]"
            />
            <div className="grid gap-4 md:grid-cols-2">
              <FeatureCard
                feature={features[2]}
                className="md:h-[160px]"
              />
              <FeatureCard
                feature={features[1]}
                className="md:h-[160px]"
              />
            </div>
          </div>

          <FeatureCard
            feature={features[3]}
            className="md:h-[326px]"
          />
        </div>
      </div>
    </section>
  );
}
