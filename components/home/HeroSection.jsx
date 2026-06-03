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
    <div className="relative flex items-center justify-center">
      {/* Main card */}
      <motion.div
        className="relative w-72 h-80 md:w-80 md:h-96 lg:w-96 lg:h-[420px] rounded-3xl overflow-hidden shadow-2xl"
        style={{
          background: "linear-gradient(135deg, #2563EB 0%, #1B2D5E 100%)",
        }}
        animate={shouldAnimate ? { y: [0, -8, 0] } : {}}
        transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
      >
        {/* SVG Illustration */}
        <svg
          viewBox="0 0 300 350"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 w-full h-full opacity-90"
          aria-hidden="true"
        >
          {/* Background shapes */}
          <circle cx="150" cy="175" r="120" fill="white" fillOpacity="0.05" />
          <circle cx="150" cy="175" r="80" fill="white" fillOpacity="0.05" />
          {/* Book */}
          <rect x="80" y="130" width="140" height="110" rx="8" fill="white" fillOpacity="0.15" />
          <rect x="90" y="140" width="60" height="90" rx="4" fill="#F59E0B" fillOpacity="0.8" />
          <rect x="155" y="140" width="60" height="90" rx="4" fill="white" fillOpacity="0.3" />
          {/* Lines on pages */}
          <rect x="98" y="155" width="44" height="3" rx="1.5" fill="white" fillOpacity="0.6" />
          <rect x="98" y="163" width="38" height="3" rx="1.5" fill="white" fillOpacity="0.6" />
          <rect x="98" y="171" width="44" height="3" rx="1.5" fill="white" fillOpacity="0.6" />
          <rect x="163" y="155" width="40" height="3" rx="1.5" fill="white" fillOpacity="0.4" />
          <rect x="163" y="163" width="34" height="3" rx="1.5" fill="white" fillOpacity="0.4" />
          <rect x="163" y="171" width="40" height="3" rx="1.5" fill="white" fillOpacity="0.4" />
          {/* Graduation cap */}
          <ellipse cx="150" cy="95" rx="45" ry="12" fill="white" fillOpacity="0.25" />
          <rect x="115" y="83" width="70" height="12" rx="2" fill="white" fillOpacity="0.3" />
          <rect x="140" y="71" width="20" height="28" rx="2" fill="white" fillOpacity="0.2" />
          <circle cx="183" cy="107" r="4" fill="#F59E0B" />
          <path d="M183 107 L183 125" stroke="#F59E0B" strokeWidth="2" />
          <circle cx="183" cy="128" r="5" fill="#F59E0B" />
          {/* Stars */}
          <text x="105" y="75" fontSize="18" fill="#F59E0B" opacity="0.8">⭐</text>
          <text x="195" y="200" fontSize="14" fill="white" opacity="0.5">✦</text>
          <text x="75" y="230" fontSize="12" fill="white" opacity="0.4">✦</text>
          {/* LWU text */}
          <text x="150" y="275" fontSize="28" fontWeight="800" fill="white" fillOpacity="0.15" textAnchor="middle" fontFamily="serif">LWU</text>
        </svg>
        {/* Gradient overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#1B2D5E]/60 to-transparent" />
      </motion.div>
      {/* Floating badge: IELTS Score */}
      <motion.div
        className="absolute -bottom-4 -left-6 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3"
        animate={shouldAnimate ? { y: [0, -6, 0] } : {}}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut", delay: 0.5 }}
      >
        <div className="text-2xl">🏆</div>
        <div>
          <div className="text-xs font-bold text-[#1B2D5E] leading-none">IELTS Score</div>
          <div className="text-lg font-extrabold text-[#F59E0B] leading-none">8.0</div>
        </div>
      </motion.div>
      {/* Floating badge: Online & Offline */}
      <motion.div
        className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-2"
        animate={shouldAnimate ? { y: [0, -6, 0] } : {}}
        transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 1 }}
      >
        <span className="text-lg">✅</span>
        <div>
          <div className="text-xs font-bold text-[#1B2D5E] leading-tight">Online &</div>
          <div className="text-xs font-bold text-[#1B2D5E] leading-tight">Offline</div>
        </div>
      </motion.div>
      {/* Floating badge: Students */}
      <motion.div
        className="absolute top-1/2 -left-10 bg-[#1B2D5E] rounded-2xl shadow-xl px-3 py-2 flex items-center gap-2"
        animate={shouldAnimate ? { y: [0, -5, 0] } : {}}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1.5 }}
      >
        <span className="text-sm">🎓</span>
        <div className="text-xs font-bold text-white leading-tight">1000+<br/>Siswa</div>
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
