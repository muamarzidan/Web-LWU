"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ChevronDown, GraduationCap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const WHATSAPP_LINK = "https://wa.me/6281234567890";

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const imageSocialProof = [
  {
    id: 1,
    publicAsset: "/pp-1-LWU.png",
  },
  {
    id: 2,
    publicAsset: "/pp-2-LWU.png",
  },
  {
    id: 3,
    publicAsset: "/pp-3-LWU.png",
  },
  {
    id: 4,
    publicAsset: "/pp-4-LWU.png",
  },
  {
    id: 5,
    publicAsset: "/pp-2-LWU.png",
  },
  {
    id: 6,
    publicAsset: "/pp-1-LWU.png",
  },
]

function HeroIllustration({ shouldAnimate }) {
  return (
    <div className="relative flex items-center justify-center w-full h-full">
      {/* Background Circle */}
      <motion.div
        className="relative flex items-center justify-center"
        animate={shouldAnimate ? { y: [0, -8, 0] } : {}}
        transition={{
          repeat: Infinity,
          duration: 4,
          ease: "easeInOut",
        }}
      >
        {/* Outer Circle */}
        <div className="absolute w-[500px] h-[500px] rounded-full bg-[#FDE68A]/25" />
        {/* Middle Circle */}
        <div className="absolute w-[400px] h-[400px] rounded-full bg-[#FBBF24]/20" />
        {/* Main Circle */}
        <div className="absolute w-[320px] h-[320px] rounded-full bg-[#FBBF24]" />
        {/* Student Image */}
        <Image
          src="/hero-1.png"
          alt="Learning With Us Student"
          width={420}
          height={500}
          priority
          className="relative z-10 object-contain"
        />
      </motion.div>
      {/* Rating Badge */}
      <motion.div
        className="absolute top-12 left-0 bg-white rounded-2xl shadow-xl px-5 py-4 z-20"
        animate={shouldAnimate ? { y: [0, -5, 0] } : {}}
        transition={{
          repeat: Infinity,
          duration: 3,
          delay: 0.5,
        }}
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center">
            ⭐
          </div>

          <div>
            <div className="font-bold text-[#1B2D5E]">
              98.9%
            </div>

            <div className="text-xs text-gray-500">
              Student Satisfaction
            </div>
          </div>
        </div>
      </motion.div>

      {/* IELTS Badge */}
      <motion.div
        className="absolute bottom-8 right-0 bg-white rounded-2xl shadow-xl px-4 py-3 z-20"
        animate={shouldAnimate ? { y: [0, -6, 0] } : {}}
        transition={{
          repeat: Infinity,
          duration: 3.5,
          delay: 1,
        }}
      >
        <div className="text-lg font-bold text-[#2563EB]">
          IELTS 8.0+
        </div>

        <div className="text-xs text-gray-500">
          Top Achievers
        </div>
      </motion.div>

      {/* Student Count */}
      <motion.div
        className="absolute bottom-24 -left-4 bg-[#1B2D5E] text-white rounded-2xl shadow-xl px-4 py-3 z-20"
        animate={shouldAnimate ? { y: [0, -5, 0] } : {}}
        transition={{
          repeat: Infinity,
          duration: 4,
          delay: 1.5,
        }}
      >
        <div className="font-bold text-lg">
          1.000+
        </div>

        <div className="text-xs">
          Active Students
        </div>
      </motion.div>
    </div>
  );
}

export default function HeroSection() {
  const shouldAnimate = !useReducedMotion();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 70% 40%, rgba(37,99,235,0.08) 0%, transparent 60%), radial-gradient(ellipse at 20% 80%, rgba(245,158,11,0.06) 0%, transparent 50%), #FFFFFF",
        }}
        aria-hidden="true"
      />
      {/* Background Decorative dots */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle, #1B2D5E 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
        aria-hidden="true"
      />
      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-14 lg:gap-20">
          {/* Text Content */}
          <motion.div
            className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left"
            variants={stagger}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={fadeUp} className="mb-6">
              <span className="text-xs sm:text-sm inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2563EB]/10 text-[#2563EB] text-sm font-bold">
                <GraduationCap className="w-4 h-4" />
                Trusted by 1,000+ Students
              </span>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1B2D5E] leading-tight mb-6"
              style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
            >
              Raih Tujuanmu{" "}
              <span className="relative">
                <span className="relative z-10">Bersama</span>
                <span
                  className="absolute bottom-1 left-0 right-0 h-3 bg-[#F59E0B]/30 -z-0 rounded"
                  aria-hidden="true"
                />
              </span>{" "}
              <span className="text-[#2563EB]">Learning With Us</span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-base sm:text-lg text-[#374151] max-w-xl leading-relaxed mb-8"
            >
              Kursus Bahasa Inggris terbaik untuk General English, IELTS, TOEFL,
              dan Business English. Lebih dari 1.000 siswa telah berhasil mencapai
              tujuan mereka dalam beberapa bulan.
            </motion.p>
            {/* CTA Buttons */}
            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row gap-4 mb-8 w-full sm:w-auto"
            >
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 text-sm sm:text-base inline-flex items-center justify-center gap-2 bg-[#2563EB] text-white rounded-full sm:px-7 sm:py-3 text-lg font-semibold hover:bg-blue-700 active:scale-95 transition-all duration-200 shadow-lg shadow-blue-500/25"
              >
                Mulai Belajar Sekarang
                <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </a>
              <Link
                href="/products"
                className="px-5 py-2 text-sm sm:text-base inline-flex items-center justify-center gap-2 border-2 border-[#1B2D5E] text-[#1B2D5E] rounded-full sm:px-7 sm:py-3 text-lg font-semibold hover:bg-[#1B2D5E] hover:text-white active:scale-95 transition-all duration-200"
              >
                Lihat Program
              </Link>
            </motion.div>
            {/* Social proof */}
            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4"
            >
              <div className="flex -space-x-3">
                {
                  imageSocialProof.map((image) => (
                    <Image
                      key={image.id}
                      className="w-10 h-10 object-cover rounded-full border-2 border-blue-800 flex items-center justify-center text-white text-xs font-bold"
                      src={image.publicAsset}
                      alt={"pp-LWU"}
                      width={80}
                      height={80}
                      aria-hidden="true"

                    />
                  ))
                }
              </div>
              <div className="text-sm">
                <span className="font-bold text-[#1B2D5E]">1.000+ siswa</span>{" "}
                <span className="text-[#6B7280]">bergabung dan berhasil</span>
              </div>
            </motion.div>
          </motion.div>
          {/* Hero Visual */}
          <motion.div
            className="hidden lg:block flex-1 flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          >
            <HeroIllustration shouldAnimate={shouldAnimate} />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[#6B7280]"
        animate={shouldAnimate ? { y: [0, 6, 0] } : {}}
        transition={{ repeat: Infinity, duration: 1.5 }}
        aria-hidden="true"
      >
        <span className="text-xs font-medium">Scroll</span>
        <ChevronDown className="w-4 h-4" />
      </motion.div>
    </section>
  );
}
