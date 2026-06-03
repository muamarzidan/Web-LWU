"use client";

import { motion } from "framer-motion";
import { BookOpen, Award, Briefcase, ArrowRight } from "lucide-react";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";

const programs = [
  {
    icon: BookOpen,
    iconBg: "bg-[#2563EB]/10",
    iconColor: "text-[#2563EB]",
    title: "General English",
    description:
      "Bangun pondasi bahasa Inggris yang kuat untuk komunikasi sehari-hari, akademik, dan profesional. Cocok untuk usia 7 tahun ke atas.",
    tags: ["Semua Level", "Usia 7+", "Online & Offline"],
    isPopular: false,
    borderColor: "border-neutral-100",
  },
  {
    icon: Award,
    iconBg: "bg-[#F59E0B]/10",
    iconColor: "text-[#F59E0B]",
    title: "IELTS Preparation",
    description:
      "Persiapkan dirimu untuk ujian IELTS dengan metode terbukti. Ribuan siswa telah mencapai target band score mereka bersama LWU.",
    tags: ["Band 6–9", "Garansi Progress", "Tutor Berpengalaman"],
    isPopular: true,
    borderColor: "border-[#2563EB]",
  },
  {
    icon: Briefcase,
    iconBg: "bg-[#F59E0B]",
    iconColor: "text-[#1B2D5E]",
    title: "Business English",
    description:
      "Tingkatkan kemampuan bahasa Inggris profesionalmu untuk rapat, presentasi, negosiasi, dan email bisnis.",
    tags: ["Profesional", "Korporat", "Sertifikat"],
    isPopular: false,
    borderColor: "border-neutral-100",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: 0, ease: "easeOut" },
  }),
};

export default function ProgramsPreview() {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Program Kami"
          title="Program Unggulan Kami"
          subtitle="Dirancang untuk semua usia dan level, dari anak-anak hingga profesional"
          className="mb-14"
        />

        <div className="grid md:grid-cols-3 gap-6">
          {programs.map((program, i) => {
            const Icon = program.icon;
            return (
              <motion.div
                key={program.title}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ y: -10, scale: 1 }}
                className={`relative bg-white rounded-2xl p-8 border-2 ${program.borderColor}`}
              >
                {/* Popular Badge */}
                {program.isPopular && (
                  <div className="absolute top-4 right-4 bg-[#F59E0B] text-white text-xs font-bold rounded-full px-3 py-1">
                    Paling Populer
                  </div>
                )}
                {/* Title */}
                <h3 className="text-xl font-bold text-[#1B2D5E] mb-3">
                  {program.title}
                </h3>
                {/* Description */}
                <p className="text-[#6B7280] text-sm leading-relaxed mb-5">
                  {program.description}
                </p>
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {program.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-[#F3F4F6] text-[#374151] text-xs font-semibold rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <Link
                  href="/products"
                  className="inline-flex items-center gap-1.5 text-[#2563EB] text-sm font-semibold hover:gap-2.5 transition-all duration-200 group"
                >
                  Pelajari Selengkapnya
                  <ArrowRight
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
                    aria-hidden="true"
                  />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
