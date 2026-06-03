"use client";

import { useState } from "react";
import { MessageCircle, X } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/6281234567890";

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      {/* Tooltip */}
      {showTooltip && (
        <div className="bg-white text-[#111827] text-sm font-semibold px-4 py-2 rounded-xl shadow-lg border border-[#F3F4F6] animate-fade-up whitespace-nowrap">
          Chat dengan kami! 👋
        </div>
      )}

      {/* Button with pulse ring */}
      <div className="relative">
        <span
          className="absolute inset-0 rounded-full bg-green-400 opacity-50 animate-[pulse-ring_2s_ease-out_infinite]"
          aria-hidden="true"
        />
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contact us on WhatsApp"
          className="relative flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full shadow-xl transition-all duration-200 hover:scale-110 active:scale-95"
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
        >
          <MessageCircle className="w-7 h-7 text-white fill-white" aria-hidden="true" />
        </a>
      </div>
    </div>
  );
}
