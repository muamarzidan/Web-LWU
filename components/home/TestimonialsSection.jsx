"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const testimonials = [
  {
    quote:
      "Berkat LWU, saya berhasil meraih IELTS 7.5 dalam 3 bulan! Tutor-nya sangat sabar dan metodenya benar-benar efektif.",
    name: "Aditya Pratama",
    achievement: "IELTS Band 7.5 · Kuliah di Australia",
    image: "/pp-1-LWU.png",
  },
  {
    quote:
      "Saya bergabung di usia 45 tahun dan awalnya ragu apakah bisa. Kini saya bisa presentasi dalam bahasa Inggris di kantor.",
    name: "Siti Rahayu",
    achievement: "Business English · Senior Manager",
    image: "/pp-2-LWU.png",
  },
  {
    quote:
      "Program TOEFL LWU sangat terstruktur. Dalam 2 bulan score saya naik dari 450 ke 580.",
    name: "Rizky Firmansyah",
    achievement: "TOEFL 580 · Beasiswa LPDP",
    image: "/pp-3-LWU.png",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.12, ease: "easeOut" },
  }),
};

export default function TestimonialsSection() {
  return (
    <section className="py-20 md:py-32 bg-[#F8F6F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Testimoni"
          title="Kata Mereka Yang Telah Berhasil"
          subtitle="1,000+ siswa telah meraih tujuan mereka"
          className="mb-14"
        />

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((item, i) => (
            <motion.div
              key={item.name}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="bg-white rounded-2xl p-8 shadow-sm flex flex-col"
            >
              {/* Quote Icon */}
              <Quote className="w-4 h-4 sm:w-6 sm:h-6 transform -scale-x-100 mb-2 select-none" style={{ color: "#2563EB", opacity: 0.45, fontFamily: "Georgia, serif" }} aria-hidden="true" />
              {/* Testimonial text */}
              <p className="text-[#374151] text-sm leading-relaxed flex-1 mb-2 italic">
                {item.quote}
              </p>
              {/* Quote Icon */}
              <div className="w-full flex justify-end">
                <Quote className="w-4 h-4 sm:w-6 sm:h-6 mb-4 select-none" style={{ color: "#2563EB", opacity: 0.45, fontFamily: "Georgia, serif" }} aria-hidden="true" />
              </div>
              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-[#F3F4F6]">
                <Image 
                  src={item.image}
                  width={500}
                  height={500}
                  alt={item.name}
                  className="rounded-full object-cover w-12 h-12" 
                />
                <div>
                  <div className="text-sm font-bold text-[#1B2D5E]">{item.name}</div>
                  <div className="text-xs text-[#6B7280]">{item.achievement}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
