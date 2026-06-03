import Link from "next/link";
import { ChevronRight } from "lucide-react";
import VisionSection from "@/components/vision-mission/VisionSection";
import MissionSection from "@/components/vision-mission/MissionSection";
import CTABannerVisiMisi from "@/components/vision-mission/CTABanner-visimisi";

export const metadata = {
  title: "Visi & Misi",
  description:
    "Pelajari visi, misi, dan nilai-nilai Learning With Us. Kami berkomitmen menjadi platform edukasi Bahasa Inggris terpercaya di Indonesia.",
};

export default function VisionMissionPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="pt-28 pb-10 md:pt-36 md:pb-14 bg-white relative overflow-hidden bg-[url(/bg-visimisi.png)] bg-cover sm:bg-center object-top-left">
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent z-0" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-[#6B7280] mb-6">
            <Link href="/" className="hover:text-[#2563EB] transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" aria-hidden="true" />
            <span className="text-[#1B2D5E] font-semibold" aria-current="page">Visi &amp; Misi</span>
          </nav>

          <div className="">
            <span className="inline-block px-3 py-1 bg-[#F59E0B]/10 text-[#F59E0B] text-xs font-bold uppercase tracking-widest rounded-full mb-5">
              Tentang LWU
            </span>
            <h1
              className="text-4xl md:text-5xl font-extrabold text-[#1B2D5E] mb-5 leading-tight"
              style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
            >
              Visi & Misi{" "}
              <span className="text-[#2563EB]">Learning With Us</span>
            </h1>
            <p className="text-lg text-[#374151] leading-relaxed">
              Setiap langkah yang kami ambil didasari oleh visi yang jelas
              dan misi yang kuat — untuk memberdayakan Indonesia melalui
              kemampuan berbahasa Inggris.
            </p>
          </div>
        </div>
      </section>
      {/* Vision & Mission Section */}
      <section className="py-20 md:py-32 bg-[#F8F6F0]">
        <div className="grid grid-cols-1 lg:grid-cols-2 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 gap-4">
          <VisionSection />
          <MissionSection />
        </div>
      </section>
      {/* CTA Banner */}
      <CTABannerVisiMisi />
    </>
  );
}
