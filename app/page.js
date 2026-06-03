import HeroSection from "@/components/home/HeroSection";
import StatsSection from "@/components/home/StatsSection";
import ProgramsPreview from "@/components/home/ProgramsPreview";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CTABanner from "@/components/home/CTABanner";

export const metadata = {
  title: "Learning With Us — Kursus Bahasa Inggris Terbaik di Jakarta",
  description:
    "Kursus Bahasa Inggris terpercaya di Jakarta. General English, IELTS, TOEFL, dan Business English untuk usia 7–62 tahun. 1,000+ siswa berhasil.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <ProgramsPreview />
      <TestimonialsSection />
      <CTABanner />
    </>
  );
}
