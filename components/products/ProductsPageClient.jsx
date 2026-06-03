"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Presentation, MailPlus, Handshake, UserRoundKey } from "lucide-react";
import ProgramCard from "@/components/products/ProgramCard";
import EbookSection from "@/components/products/EbookSection";

const WHATSAPP_LINK = "https://wa.me/6281234567890";

const filterTabs = ["Semua", "Kursus", "Ebook", "Self-Development"];

const mainPrograms = [
  {
    id: "general-english",
    category: "Kursus",
    title: "General English",
    subtitle: "Fondasi Bahasa Inggris untuk Semua Kebutuhan",
    level: "Beginner → Advanced",
    ageRange: "7 – 62 tahun",
    format: "Online & Offline",
    features: [
      "Grammatik & Vocabulary",
      "Speaking & Listening",
      "Reading & Writing",
      "Sertifikat Kelulusan",
      "Kelas Kecil (maks 10 siswa)",
      "Bahan Ajar Eksklusif",
    ],
    isPopular: false,
    color: "blue",
    whatsappMessage: "Halo LWU! Saya tertarik dengan program General English.",
  },
  {
    id: "ielts",
    category: "Kursus",
    title: "IELTS Preparation",
    subtitle: "Raih Target Band Score Kamu",
    level: "Intermediate → Advanced (Band 5.5 → 9.0)",
    ageRange: "15 – 62 tahun",
    format: "Online & Offline",
    features: [
      "4 Skills: Listening, Reading, Writing, Speaking",
      "Mock Test Rutin",
      "Feedback Personal dari Tutor",
      "Strategi Ujian Terbukti",
      "Garansi Progress",
      "Materi Up-to-Date",
    ],
    isPopular: true,
    color: "gold",
    whatsappMessage: "Halo LWU! Saya tertarik dengan program IELTS Preparation.",
  },
  {
    id: "toefl",
    category: "Kursus",
    title: "TOEFL Preparation",
    subtitle: "Siap Hadapi TOEFL iBT & ITP",
    level: "Intermediate → Advanced",
    ageRange: "15 – 62 tahun",
    format: "Online & Offline",
    features: [
      "TOEFL iBT & ITP",
      "Reading, Listening, Writing",
      "Practice Tests",
      "Strategi Time Management",
      "Sertifikat Persiapan",
    ],
    isPopular: false,
    color: "blue",
    whatsappMessage: "Halo LWU! Saya tertarik dengan program TOEFL Preparation.",
  },
];


function InstagramSvg() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  );
}

function TikTokSvg() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.79 1.52V6.77a4.85 4.85 0 01-1.02-.08z"/>
    </svg>
  );
}

function YoutubeSvg() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  );
}

function LinkedinSvg() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}

const socialChannels = [
  {
    platform: "Instagram",
    handle: "@lwu_id",
    SvgIcon: InstagramSvg,
    href: "https://www.instagram.com/lwu_id",
    color: "#E1306C",
    bg: "#E1306C15",
    cta: "Follow",
  },
  {
    platform: "TikTok",
    handle: "@lwu_id",
    SvgIcon: TikTokSvg,
    href: "https://www.tiktok.com/@lwu_id",
    color: "#010101",
    bg: "#01010115",
    cta: "Follow",
  },
  {
    platform: "YouTube",
    handle: "Learning With Us",
    SvgIcon: YoutubeSvg,
    href: "https://www.youtube.com/@lwuid",
    color: "#FF0000",
    bg: "#FF000015",
    cta: "Subscribe",
  },
  {
    platform: "WhatsApp",
    handle: "Chat & Daftar",
    SvgIcon: () => <MessageCircle className="w-5 h-5" />,
    href: WHATSAPP_LINK,
    color: "#25D366",
    bg: "#25D36615",
    cta: "Chat",
  },
  {
    platform: "LinkedIn",
    handle: "Learning With Us",
    SvgIcon: LinkedinSvg,
    href: "https://www.linkedin.com/company/learning-with-us",
    color: "#0077B5",
    bg: "#0077B515",
    cta: "Connect",
  },
];

export default function ProductsPageClient() {
  const [activeFilter, setActiveFilter] = useState("Semua");

  const showKursus = activeFilter === "Semua" || activeFilter === "Kursus";
  const showEbook = activeFilter === "Semua" || activeFilter === "Ebook";
  const showSelfDev = activeFilter === "Semua" || activeFilter === "Self-Development";

  return (
    <>
      {/* Page Hero with Filter */}
      <section className="pt-28 pb-0 md:pt-36 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="inline-block px-3 py-1 bg-[#2563EB]/10 text-[#2563EB] text-xs font-bold uppercase tracking-widest rounded-full mb-5">
              Program & Layanan
            </span>
            <h1
              className="text-4xl md:text-5xl font-extrabold text-[#1B2D5E] leading-tight"
              style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
            >
              Program & Layanan Kami
            </h1>
            <p className="text-lg text-[#374151]">
              Temukan program yang tepat untuk tujuanmu
            </p>
          </div>
          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pb-8" role="tablist">
            {filterTabs.map((tab) => (
              <button
                key={tab}
                role="tab"
                aria-selected={activeFilter === tab}
                onClick={() => setActiveFilter(tab)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                  activeFilter === tab
                    ? "bg-[#2563EB] text-white shadow-md"
                    : "cursor-pointer bg-[#F3F4F6] text-[#374151] hover:bg-[#E5E7EB]"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </section>
      {/* Main Programs */}
      {showKursus && (
        <section className="py-16 md:py-20 bg-[#F8F6F0]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1B2D5E]">
                Program Kursus Bahasa Inggris
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {mainPrograms.map((program, i) => (
                <motion.div
                  key={program.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  <ProgramCard {...program} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
      {/* Business English — Full Width Card */}
      {showKursus && (
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-3xl border border-gray-300 overflow-hidden">
              {/* <div className="h-1.5 bg-[#1B2D5E]" aria-hidden="true" /> */}
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Left: Program details */}
                <div className="p-8 lg:p-10 border-b lg:border-b-0 lg:border-r border-[#F3F4F6]">
                  <h2 className="text-2xl font-bold text-[#1B2D5E] mb-2">
                    Business English
                  </h2>
                  <p className="text-sm text-[#6B7280] mb-6">
                    Tingkatkan Kemampuan Bahasa Inggris Profesionalmu
                  </p>
                  <div className="flex flex-wrap gap-3 mb-6 text-xs font-semibold text-[#374151]">
                    <span className="bg-[#F3F4F6] px-3 py-1.5 rounded-full">Profesional</span>
                    <span className="bg-[#F3F4F6] px-3 py-1.5 rounded-full">Online & Offline</span>
                    <span className="bg-[#F3F4F6] px-3 py-1.5 rounded-full">Usia 18–62 tahun</span>
                  </div>
                  <ul className="flex flex-col gap-2.5 mb-8">
                    {[
                      "Presentasi dalam bahasa Inggris",
                      "Email & Korespondensi Bisnis",
                      "Negosiasi dengan klien internasional",
                      "Meeting & Conference Skills",
                      "Sertifikat Korporat",
                    ].map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-[#374151]">
                        <span className="text-[#1B2D5E] mt-0.5 flex-shrink-0">✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={`${WHATSAPP_LINK}?text=${encodeURIComponent("Halo LWU! Saya tertarik dengan program Business English.")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-8 py-3.5 bg-[#2563EB] hover:bg-[#1f52c2] text-white rounded-full text-sm font-semibold active:scale-95 transition-all duration-200"
                  >
                    Daftar Program Ini
                  </a>
                </div>
                {/* Right: Use cases */}
                <div className="p-8 lg:p-10 bg-[#F8F6F0]">
                  <div className="text-sm font-bold text-[#6B7280] uppercase tracking-wider mb-6">
                    Cocok untuk kamu yang...
                  </div>
                  <div className="flex flex-col gap-4">
                    {[
                      {
                        icon: Presentation,
                        text: "Sering presentasi dalam bahasa Inggris",
                      },
                      {
                        icon: MailPlus,
                        text: "Mengirim email bisnis ke klien internasional",
                      },
                      {
                        icon: Handshake,
                        text: "Perlu negosiasi dengan mitra asing",
                      },
                      {
                        icon: UserRoundKey,
                        text: "Ingin naik jabatan di perusahaan multinasional",
                      },
                    ].map((item) => {
                      const Icon = item.icon;

                      return (
                        <div
                          key={item.text}
                          className="relative overflow-hidden p-4 bg-white rounded-xl shadow-sm"
                        >
                          {/* Decorative icon */}
                          <Icon
                            className="
                              absolute
                              -right-1
                              -bottom-2
                              w-15
                              h-15
                              text-[#2563EB]
                              opacity-10
                              -rotate-25
                            "
                          />

                          <span className="relative z-10 text-sm text-[#374151] font-medium">
                            {item.text}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      {/* Self-Development */}
      {showSelfDev && (
        <section className="py-12 md:py-16 bg-[#F8F6F0]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1B2D5E]">
                Self-Development Courses
              </h2>
              <p className="text-[#6B7280] mt-2">
                Tingkatkan dirimu dengan kursus pengembangan diri berbahasa Inggris
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  id: "self-dev",
                  title: "Self-Development Course",
                  description:
                    "Kembangkan potensi diri dan pola pikir positif dalam bahasa Inggris. Program komprehensif untuk pertumbuhan personal dan profesional.",
                  tags: ["Personal Growth", "Semua Usia"],
                  color: "#7c3aed2c",
                  message: "Halo LWU! Saya tertarik dengan Self-Development Course.",
                },
                {
                  id: "biz-comm",
                  title: "Business Communication",
                  description:
                    "Kuasai komunikasi profesional dalam bahasa Inggris — dari public speaking hingga interpersonal skills yang dibutuhkan di dunia kerja modern.",
                  tags: ["Profesional", "Korporat"],
                  color: "#0891B2",
                  message: "Halo LWU! Saya tertarik dengan Business Communication Course.",
                },
              ].map((course) => (
                <div
                  key={course.id}
                  className="bg-white rounded-2xl p-7 shadow-sm border border-[#F3F4F6] transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-start gap-5">
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-[#1B2D5E] mb-2">{course.title}</h3>
                      <p className="text-sm text-[#6B7280] leading-relaxed mb-4">{course.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {course.tags.map((tag) => (
                          <span key={tag} className="px-2.5 py-1 text-xs font-semibold bg-[#F3F4F6] text-[#374151] rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <a
                        href={`${WHATSAPP_LINK}?text=${encodeURIComponent(course.message)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex text-[#2563EB] items-center gap-1.5 text-sm font-semibold transition-colors duration-200"
                      >
                        Pelajari Selengkapnya →
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Digital Products */}
      {showEbook && <EbookSection />}

      {/* Social Media Channels */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1B2D5E]">
              Temukan Kami Di
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {socialChannels.map((ch) => {
              const SvgIcon = ch.SvgIcon;
              return (
                <a
                  key={ch.platform}
                  href={ch.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 px-6 py-4 bg-white border border-[#F3F4F6] rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 min-w-[180px]"
                  aria-label={`${ch.platform} — ${ch.handle}`}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: ch.bg, color: ch.color }}
                    aria-hidden="true"
                  >
                    <SvgIcon />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-[#1B2D5E]">{ch.platform}</div>
                    <div className="text-xs text-[#6B7280]">{ch.handle}</div>
                  </div>
                  <span
                    className="ml-auto text-xs font-bold px-3 py-1 rounded-full text-white"
                    style={{ backgroundColor: ch.color }}
                    aria-hidden="true"
                  >
                    {ch.cta}
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
