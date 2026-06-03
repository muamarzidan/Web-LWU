import Link from "next/link";
import { MessageCircle, ExternalLink, MapPin } from "lucide-react";


const WHATSAPP_LINK = "https://wa.me/6281234567890";

const footerLinks = {
  quickLinks: [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/vision-mission", label: "Visi & Misi" },
    { href: "/products", label: "Program & Layanan" },
  ],
  programs: [
    { href: "/products", label: "General English" },
    { href: "/products", label: "IELTS Preparation" },
    { href: "/products", label: "TOEFL Preparation" },
    { href: "/products", label: "Business English" },
    { href: "/products", label: "Self-Development" },
  ],
};

function InstagramIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function LinkedinIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function YoutubeIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

const socialLinks = [
  { href: "https://www.instagram.com/lwu_id", label: "Instagram @lwu_id", Icon: InstagramIcon },
  { href: WHATSAPP_LINK, label: "WhatsApp", Icon: ({ className }) => <MessageCircle className={className} /> },
  { href: "https://www.linkedin.com/company/learning-with-us", label: "LinkedIn", Icon: LinkedinIcon },
  { href: "https://www.youtube.com/@lwuid", label: "YouTube", Icon: YoutubeIcon },
];

export default function Footer() {
  return (
    <footer className="bg-[#1B2D5E] text-white">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1: Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center mb-4 group" aria-label="Learning With Us">
              <div>
                <span className="block text-xl font-extrabold text-white leading-none">LWU</span>
                <span className="block text-xs font-medium text-blue-200 leading-none">Learning With Us</span>
              </div>
            </Link>
            <p className="text-blue-100 text-sm leading-relaxed mb-6">
              Helping 1,000+ students achieved their goals. Kursus bahasa Inggris terpercaya di Jakarta sejak 2013.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.Icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex items-center justify-center w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200"
                  >
                    <Icon className="w-4 h-4 text-white" />
                  </a>
                );
              })}
            </div>
          </div>
          {/* Col 2: Quick Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-blue-200 mb-4">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2.5" role="list">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className="text-blue-100 text-sm hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Col 3: Programs */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-blue-200 mb-4">
              Program Kami
            </h3>
            <ul className="flex flex-col gap-2.5" role="list">
              {footerLinks.programs.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="text-blue-100 text-sm hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Col 4: Contact */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-blue-200 mb-4">
              Lokasi
            </h3>
            <ul className="flex flex-col gap-3 text-sm text-blue-100 mb-5" role="list">
              <li>
                <div className="mt-2 overflow-hidden shadow-xl sm:pt-0 rounded-lg">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31730.315126533802!2d106.83016435564559!3d-6.225522600794595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f38fc90a7101%3A0xd575e31c807295f9!2sKec.%20Tebet%2C%20Kota%20Jakarta%20Selatan%2C%20Daerah%20Khusus%20Ibukota%20Jakarta!5e0!3m2!1sid!2sid!4v1780426535723!5m2!1sid!2sid" 
                    width="100%"
                    height="100"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-[200px] md:h-[180px]"
                    data-aos="fade-up"
                    data-delay="1000"
                  />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Content */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-blue-200 text-sm">
            © 2024 Learning With Us. All rights reserved.
          </p>
          <p className="text-blue-300 text-xs">
            Kursus Bahasa Inggris Terpercaya di Jakarta
          </p>
        </div>
      </div>
    </footer>
  );
}
