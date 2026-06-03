import Image from "next/image";
import { ShoppingBag } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/6281234567890";

const ebooks = [
  {
    id: "british-american",
    title: "British vs American English",
    subtitle: "Ebook",
    description:
      "Pahami perbedaan British dan American English secara komprehensif. Cocok untuk pelajar Indonesia yang ingin mahir keduanya.",
    tags: ["International", "Indonesian Buyers"],
    color: "#2563EB",
    image: "/banner-gambar-1.jpg"
  },
  {
    id: "comic",
    title: "Comic Belajar Bahasa Inggris",
    subtitle: "3 Varian",
    description:
      "Belajar bahasa Inggris dengan cara yang menyenangkan melalui komik. Tersedia dalam versi International, Indonesian, dan English Only.",
    tags: ["International", "Indonesian", "English Only"],
    color: "#2563EB",
    image: "/banner-gambar-2.png"
  },
  {
    id: "scholarship",
    title: "Ebook Database Beasiswa",
    subtitle: "Panduan Lengkap",
    description:
      "Temukan informasi beasiswa ke luar negeri dari berbagai negara dan institusi. Panduan lengkap untuk pelajar Indonesia.",
    tags: ["Indonesian Buyers", "Beasiswa"],
    color: "#2563EB",
    image: "/banner-gambar-3.jpg"
  },
];

export default function EbookSection() {
  return (
    <section className="py-20 md:py-28 bg-[#F8F6F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block px-3 py-1 bg-[#2563EB]/10 text-[#2563EB] text-xs font-bold uppercase tracking-widest rounded-full mb-4">
            Produk Digital
          </span>
          <h2
            className="text-3xl md:text-4xl font-bold text-[#1B2D5E] mb-4"
            style={{ fontFamily: "var(--font-plus-jakarta, system-ui)" }}
          >
            Produk Digital Kami
          </h2>
          <p className="text-[#6B7280] text-lg max-w-2xl mx-auto">
            Belajar di mana saja, kapan saja, dengan ebook dan materi digital eksklusif LWU
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {ebooks.map((ebook) => (
            <div
              key={ebook.id}
              className="bg-white rounded-2xl p-3 shadow-sm hover:shadow-lg border border-[#F3F4F6] text-center flex flex-col transition-all duration-300 hover:-translate-y-1"
            >
              {/* Cover mockup */}
              <Image
                src={ebook.image}
                alt={ebook.title}
                width={200}
                height={200}
                className="w-full h-50 sm:h-60 rounded-xl mb-4 object-cover"
              />
              <div className="flex-1 flex flex-col text-start">
                <div className="text-xs font-semibold text-[#6B7280] uppercase tracking-wider mb-1">
                  {ebook.subtitle}
                </div>
                <h3 className="text-base font-bold text-[#1B2D5E] mb-3">
                  {ebook.title}
                </h3>
                <p className="text-sm text-[#6B7280] leading-relaxed mb-4 flex-1">
                  {ebook.description}
                </p>
                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 justify-start mb-5">
                  {ebook.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 text-xs font-semibold rounded-full bg-[#F3F4F6] text-[#374151]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={`${WHATSAPP_LINK}?text=${encodeURIComponent(`Halo LWU! Saya tertarik dengan ${ebook.title}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-full text-sm font-semibold text-white transition-all duration-200 active:scale-95"
                  style={{ backgroundColor: ebook.color }}
                >
                  <ShoppingBag className="w-4 h-4" aria-hidden="true" />
                  Beli Sekarang
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
