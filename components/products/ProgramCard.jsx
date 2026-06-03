import { CheckCircle, MapPin, Clock, Users } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/6281234567890";

export default function ProgramCard({
  title,
  subtitle,
  level,
  ageRange,
  format,
  duration,
  features = [],
  isPopular = false,
  color = "blue",
  whatsappMessage,
}) {
  const colorMap = {
    blue: {
      banner: "bg-[#2563EB]",
      badge: "bg-[#F59E0B]",
      icon: "text-[#2563EB]",
      tag: "bg-[#2563EB]/10 text-[#2563EB]",
    },
    gold: {
      banner: "bg-[#F59E0B]",
      badge: "bg-[#2563EB]",
      icon: "text-[#F59E0B]",
      tag: "bg-[#F59E0B]/10 text-[#F59E0B]",
    },
    navy: {
      banner: "bg-[#1B2D5E]",
      badge: "bg-[#F59E0B]",
      icon: "text-[#1B2D5E]",
      tag: "bg-[#1B2D5E]/10 text-[#1B2D5E]",
    },
  };
  const c = colorMap[color] || colorMap.blue;
  const waLink = whatsappMessage
    ? `${WHATSAPP_LINK}?text=${encodeURIComponent(whatsappMessage)}`
    : WHATSAPP_LINK;

  return (
    <div className="relative bg-white rounded-2xl overflow-hidden shadow-sm border border-[#F3F4F6] hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col">
      {/* Top colored banner */}
      <div className={`h-1.5 ${isPopular ? "bg-[#F59E0B]" : c.banner}`} aria-hidden="true" />

      {/* Popular badge */}
      {isPopular && (
        <div className="absolute top-4 right-4 bg-[#F59E0B] text-white text-xs font-bold rounded-full px-3 py-1">
          PALING POPULER
        </div>
      )}

      <div className="p-8 flex flex-col flex-1">
        {/* Header */}
        <div className="mb-5">
          <h3 className="text-xl font-bold text-[#1B2D5E] mb-1">{title}</h3>
          <p className="text-sm text-[#6B7280]">{subtitle}</p>
        </div>

        {/* Meta info */}
        <div className="flex flex-wrap gap-3 mb-6">
          {level && (
            <span className="flex items-center gap-1 text-xs font-semibold text-[#374151] bg-[#F3F4F6] px-3 py-1.5 rounded-full">
              <Users className="w-3 h-3" aria-hidden="true" />
              {level}
            </span>
          )}
          {ageRange && (
            <span className="flex items-center gap-1 text-xs font-semibold text-[#374151] bg-[#F3F4F6] px-3 py-1.5 rounded-full">
              <Clock className="w-3 h-3" aria-hidden="true" />
              Usia {ageRange}
            </span>
          )}
          {format && (
            <span className="flex items-center gap-1 text-xs font-semibold text-[#374151] bg-[#F3F4F6] px-3 py-1.5 rounded-full">
              <MapPin className="w-3 h-3" aria-hidden="true" />
              {format}
            </span>
          )}
        </div>

        {/* Features */}
        <ul className="flex flex-col gap-2.5 mb-7 flex-1" role="list">
          {features.map((f) => (
            <li key={f} className="flex items-start gap-2.5 text-sm text-[#374151]">
              <CheckCircle
                className={`w-4 h-4 flex-shrink-0 mt-0.5 ${c.icon}`}
                aria-hidden="true"
              />
              {f}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center justify-center w-full py-3.5 rounded-full text-sm font-bold text-white transition-all duration-200 active:scale-95 ${
            isPopular
              ? "bg-[#F59E0B] hover:bg-amber-500 shadow-md shadow-amber-200"
              : "bg-[#2563EB] hover:bg-blue-700 shadow-md shadow-blue-100"
          }`}
        >
          Daftar Program Ini
        </a>
      </div>
    </div>
  );
}
