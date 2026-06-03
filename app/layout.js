import { Plus_Jakarta_Sans, Libre_Baskerville } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  variable: "--font-libre",
  display: "swap",
  weight: ["400", "700"],
});

export const metadata = {
  title: {
    template: "%s | Learning With Us",
    default: "Learning With Us — Kursus Bahasa Inggris Terbaik di Jakarta",
  },
  description:
    "LWU adalah kursus bahasa Inggris terpercaya di Jakarta. Program General English, IELTS, TOEFL, dan Business English untuk usia 7–62 tahun. Lebih dari 1.000 siswa telah berhasil mencapai target mereka.",
  keywords: [
    "kursus bahasa inggris",
    "IELTS Jakarta",
    "TOEFL Jakarta",
    "learning with us",
    "LWU",
    "belajar bahasa inggris online",
  ],
  openGraph: {
    title: "Learning With Us — Kursus Bahasa Inggris Terbaik",
    description:
      "1,000+ siswa berhasil. General English, IELTS, TOEFL, Business English.",
    url: "https://learningwithus-lwu.com",
    siteName: "Learning With Us",
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
  <html lang="id" className={`${plusJakartaSans.variable} ${libreBaskerville.variable}`}>
      <body className="font-sans antialiased">
        <a href="#main-content" className="skip-link">
          Lewati ke konten utama
        </a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
