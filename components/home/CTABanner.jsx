"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  MessageCircle,
  ArrowRight,
  BookOpen,
  GraduationCap,
  NotebookPen,
  Languages,
  PencilLine,
} from "lucide-react";


const WHATSAPP_LINK = "https://wa.me/6281234567890";

export default function CTABanner() {
  const [floatingIcons, setFloatingIcons] = useState([]);
  const [isMobile, setIsMobile] = useState(false);
  const iconComponents = [
    BookOpen,
    GraduationCap,
    NotebookPen,
    Languages,
    PencilLine,
  ];

  useEffect(() => {
    const generated = Array.from({ length: 12 }, (_, i) => {
      const Icon = iconComponents[i % iconComponents.length];

      const isLeftSide = i < 5;

      let left;

      if (isLeftSide) {
        const leftZones = [4, 12, 20];

        left =
          leftZones[
            Math.floor(Math.random() * leftZones.length)
          ] +
          Math.random() * 8;
      } else {
        const rightZones = [78, 84, 90];

        left =
          rightZones[
            Math.floor(Math.random() * rightZones.length)
          ] +
          Math.random() * 8;
      }

      const size = isMobile
        ? 24 + Math.random() * 35
        : 40 + Math.random() * 80;

      return {
        id: i,
        Icon,
        left,
        size,
        duration: 12 + Math.random() * 12,
        delay: -Math.random() * 20,
        blur: Math.random() * 1.5,
        opacity: 0.06 + Math.random() * 0.08,
        rotation: Math.random() * 360,
      };
    });

    setFloatingIcons(generated);
  }, [isMobile]);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };

    checkMobile();

    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
}, []);

  return (
    <section
      className="cta-section"
      style={{
        background:
          "linear-gradient(135deg, #1B2D5E 0%, #2563EB 100%)",
      }}
    >
      {/* Floating Icons */}
      <div className="floating-icons">
        {floatingIcons.map((item) => {
          const Icon = item.Icon;
          return (
            <Icon
              key={item.id}
              className="floating-icon"
              style={{
                left: `${item.left}%`,
                width: `${item.size}px`,
                height: `${item.size}px`,
                opacity: item.opacity,
                filter: `blur(${item.blur}px)`,
                animationDuration: `${item.duration}s`,
                animationDelay: `${item.delay}s`,
                "--rotation": `${item.rotation}deg`,
              }}
            />
          );
        })}
      </div>
      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight"
            style={{ fontFamily: "var(--font-libre, serif)" }}
          >
            Siap Memulai Perjalanan Bahasa Inggrismu?
          </h2>

          <p className="text-blue-100 text-base sm:text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            Hubungi kami sekarang dan dapatkan konsultasi{" "}
            <span className="font-bold text-[#F59E0B]">
              GRATIS
            </span>
            . Bergabunglah dengan 1,000+ siswa yang telah berhasil.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 bg-green-500 hover:bg-green-600 text-white rounded-full px-7 py-3 text-base font-semibold active:scale-95 transition-all duration-200 shadow-lg"
            >
              <MessageCircle
                className="w-5 h-5 fill-white"
                aria-hidden="true"
              />
              Chat WhatsApp
            </a>

            <Link
              href="/products"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white hover:text-[#1B2D5E] rounded-full px-7 py-2.5 sm:py-3 text-base font-semibold active:scale-95 transition-all duration-200"
            >
              Lihat Semua Program
              <ArrowRight
                className="w-4 h-4"
                aria-hidden="true"
              />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}