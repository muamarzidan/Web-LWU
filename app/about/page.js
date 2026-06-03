import Link from "next/link";
import { ChevronRight } from "lucide-react";
import StorySection from "@/components/about/StorySection";
import FounderSection from "@/components/about/FounderSection";

export const metadata = {
  title: "Tentang Kami",
  description:
    "Pelajari kisah Learning With Us — kursus Bahasa Inggris terpercaya di Jakarta sejak 2013. Lebih dari 1.000 siswa telah berhasil bersama kami.",
};

export default function AboutPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-20 bg-[#F8F6F0] relative overflow-hidden">
        {/* Decorative wave SVG */}
        <div className="absolute bottom-0 left-0 right-0" aria-hidden="true">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 40 Q360 80 720 40 Q1080 0 1440 40 L1440 80 L0 80 Z" fill="white" />
          </svg>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-[#6B7280] mb-6">
            <Link href="/" className="hover:text-[#2563EB] transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" aria-hidden="true" />
            <span className="text-[#1B2D5E] font-semibold" aria-current="page">About</span>
          </nav>
          <div className="max-w-2xl">
            <h1
              className="text-4xl md:text-5xl font-extrabold text-[#1B2D5E] mb-5 leading-tight"
              style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
            >
              Tentang Learning With Us
            </h1>
            <p className="text-lg text-[#374151] leading-relaxed">
              Lebih dari sekedar kursus, kami adalah partner perjalananmu menuju
              kesuksesan berbahasa Inggris.
            </p>
          </div>
        </div>
      </section>
      {/* Story Section */}
      <StorySection />
      {/* Why LWU / Features */}
      <FounderSection />
    </>
  );
}
