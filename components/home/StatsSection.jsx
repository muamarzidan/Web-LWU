"use client";

import StatCard from "@/components/ui/StatCard";

const stats = [
  { number: "1000", suffix: "+", label: "Siswa Berhasil" },
  { number: "2013", suffix: "", label: "Tahun Berdiri", animate: false },
  { number: "7–62", suffix: "", label: "Rentang Usia Siswa", animate: false },
  { number: "3", suffix: "", label: "Program Unggulan" },
];

export default function StatsSection() {
  return (
    <section className="bg-[#1B2D5E] py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, i) => (
            <StatCard
              key={i}
              number={stat.number}
              suffix={stat.suffix}
              label={stat.label}
              animate={stat.animate !== false}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
