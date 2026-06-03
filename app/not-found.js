import Link from "next/link";

export const metadata = {
  title: "Halaman Tidak Ditemukan",
  description: "Halaman yang kamu cari tidak ditemukan.",
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-white">
      <div
        className="text-[120px] font-extrabold leading-none mb-4 select-none"
        style={{ color: "#2563EB", opacity: 0.12, fontFamily: "Georgia, serif" }}
        aria-hidden="true"
      >
        404
      </div>
      <div className="-mt-8">
        <span className="inline-block px-3 py-1 bg-[#2563EB]/10 text-[#2563EB] text-xs font-bold uppercase tracking-widest rounded-full mb-5">
          Halaman Tidak Ditemukan
        </span>
        <h1
          className="text-3xl md:text-4xl font-extrabold text-[#1B2D5E] mb-4"
          style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
        >
          Ups! Halaman Tidak Ada
        </h1>
        <p className="text-[#6B7280] text-lg mb-8 max-w-md mx-auto">
          Halaman yang kamu cari tidak ditemukan. Mungkin kamu salah ketik URL atau halaman sudah dipindahkan.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 bg-[#2563EB] text-white rounded-full px-8 py-3.5 text-base font-semibold hover:bg-blue-700 active:scale-95 transition-all duration-200"
        >
          ← Kembali ke Beranda
        </Link>
      </div>
    </div>
  );
}
