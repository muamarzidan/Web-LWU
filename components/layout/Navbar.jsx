"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/vision-mission", label: "Visi & Misi" },
  { href: "/products", label: "Program & Layanan" },
];

const WHATSAPP_LINK = "https://wa.me/6281234567890";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isMenuOpen]);

  return (
    <>
      <header
        role="banner"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        }`}
      >
        <nav
          role="navigation"
          aria-label="Main navigation"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2 rounded-lg"
              aria-label="Learning With Us - Halaman Utama"
            >
              <div>
                <span className="block text-xl font-extrabold text-[#1B2D5E] leading-none tracking-tight">
                  LWU
                </span>
                <span className="block text-xs font-medium text-[#6B7280] leading-none">
                  Learning With Us
                </span>
              </div>
            </Link>

            {/* Desktop Nav Links */}
            <ul className="hidden md:flex items-center gap-8" role="list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`nav-link-animated text-sm font-semibold transition-colors duration-200 pb-1 ${
                      pathname === link.href
                        ? "text-[#2563EB]"
                        : "text-[#374151] hover:text-[#2563EB]"
                    }`}
                    aria-current={pathname === link.href ? "page" : undefined}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-4">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#F59E0B] text-white rounded-full px-6 py-2.5 text-sm font-semibold hover:bg-amber-500 active:scale-95 transition-all duration-200 shadow-sm"
              >
                Daftar Sekarang
              </a>
            </div>

            {/* Mobile Hamburger */}
            <button
              className="cursor-pointer md:hidden flex items-center justify-center w-10 h-10 rounded-lg text-[#1B2D5E] hover:bg-[#F3F4F6] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMenuOpen ? "Tutup menu" : "Buka menu"}
            >
              {isMenuOpen ? (
                <X className="w-5 h-5" aria-hidden="true" />
              ) : (
                <Menu className="w-5 h-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Menu Drawer */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-label="Menu navigasi"
        aria-modal="true"
        className={`fixed top-0 right-0 bottom-0 z-50 w-72 bg-white shadow-2xl transform transition-transform duration-300 md:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-6 border-b border-[#F3F4F6]">
          <span className="text-lg font-bold text-[#1B2D5E]">Menu</span>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="cursor-pointer flex items-center justify-center w-8 h-8 rounded-lg text-[#374151] hover:bg-[#F3F4F6] transition-colors"
            aria-label="Tutup menu"
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>
        <nav aria-label="Mobile navigation" className="p-6">
          <ul className="flex flex-col gap-2" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`flex items-center px-4 py-3 rounded-xl text-sm font-semibold transition-colors duration-200 ${
                    pathname === link.href
                      ? "bg-[#2563EB]/10 text-[#2563EB]"
                      : "text-[#374151] hover:bg-[#F3F4F6] hover:text-[#1B2D5E]"
                  }`}
                  aria-current={pathname === link.href ? "page" : undefined}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-6 pt-6 border-t border-[#F3F4F6]">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-full bg-[#F59E0B] text-white rounded-full px-6 py-3 text-sm font-semibold hover:bg-amber-500 transition-colors duration-200"
            >
              Daftar Sekarang
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}
