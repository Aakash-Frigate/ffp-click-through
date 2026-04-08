"use client";

import Link from "next/link";
import {
  ShieldCheckIcon as Shield,
  ChevronRightIcon as ChevronRight,
  EnvelopeIcon as Mail,
  PhoneIcon as Phone,
} from "@heroicons/react/24/outline";
import { services, SocialLinks } from "@/lib/constants";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const contactInfo = {
    email: "manufacture@frigate.ai",
    phone: "+91 96778 64606",
    show_inhouse_footer: true,
  };

  const quickLinks = [
    { label: "About Us", href: "https://frigate.ai/about-frigate/" },
    { label: "Support", href: "/support" },
    { label: "Locations", href: "https://frigate.ai/locations/" },
    { label: "Instant Quote", href: "/instant-quote" },
  ];

  return (
    <footer className="relative bg-white border-t border-slate-100 overflow-hidden font-sans mt-24">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-50/50 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-50/30 rounded-full blur-3xl translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-12">
          {/* Brand Column - Span 4 */}
          <div className="lg:col-span-4 space-y-8">
            <Link
              href="/"
              className="inline-block transition-all duration-300 hover:scale-105"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://frigate.ai/wp-content/uploads/2025/03/FastParts-logo-1024x351.png"
                alt="FastParts"
                className="h-10 w-auto object-contain"
              />
            </Link>
            <p className="max-w-sm text-slate-500 font-light leading-relaxed text-[14px]">
              Frigate Fast Parts is an instant quote platform for CNC Machining
              and Sheet Metal Fabrication that delivers transparent pricing and
              fast turnaround, simplifying the manufacturing procurement
              process.
            </p>

            {/* Social Links */}
            <div className="space-y-4">
              <h5 className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">
                Connect with us
              </h5>
              <div className="flex items-center gap-4">
                <a
                  href={SocialLinks.LinkedinFFP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300 group shadow-sm bg-blue-50 text-blue-700 hover:bg-blue-600 hover:text-white"
                >
                  <svg
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-5 h-5"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href={SocialLinks.YoutubeFFP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300 group shadow-sm bg-red-50 text-red-600 hover:bg-red-600 hover:text-white"
                >
                  <svg
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-5 h-5"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93-.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href={SocialLinks.XFFP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300 group shadow-sm bg-slate-100 text-slate-800 hover:bg-slate-900 hover:text-white"
                >
                  <svg
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-4 h-4"
                    aria-hidden="true"
                  >
                    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Services Section - Span 4 (split in two columns) */}
          <div className="lg:col-span-4 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-5">
              <h4 className="text-slate-900 font-bold text-xs tracking-[0.2em] uppercase">
                Services
              </h4>
              <ul className="grid grid-cols-1 gap-y-3">
                {services.slice(0, 4).map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      target="_blank"
                      className="text-slate-500 hover:text-blue-600 transition-all duration-300 flex items-center group text-[13px] font-light"
                    >
                      <span className="relative overflow-hidden inline-flex items-center">
                        <ChevronRight className="w-3 h-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 mr-1 text-blue-600" />
                        {link.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-5 lg:pt-8">
              <ul className="grid grid-cols-1 gap-y-3">
                {services.slice(4).map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      target="_blank"
                      className="text-slate-500 hover:text-blue-600 transition-all duration-300 flex items-center group text-[13px] font-light"
                    >
                      <span className="relative overflow-hidden inline-flex items-center">
                        <ChevronRight className="w-3 h-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 mr-1 text-blue-600" />
                        {link.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Resources Column - Span 2 */}
          <div className="lg:col-span-2 space-y-5">
            <h4 className="text-slate-900 font-bold text-xs tracking-[0.2em] uppercase">
              Resources
            </h4>
            <ul className="grid grid-cols-1 gap-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : "_self"}
                    className="text-slate-500 hover:text-blue-600 transition-all duration-300 flex items-center group text-[13px] font-light"
                  >
                    <span className="relative overflow-hidden inline-flex items-center">
                      <ChevronRight className="w-3 h-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 mr-1 text-blue-600" />
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column - Span 2 */}
          <div className="lg:col-span-2 space-y-5">
            <h4 className="text-slate-900 font-bold text-xs tracking-[0.2em] uppercase">
              Support
            </h4>
            <ul className="space-y-4">
              <li className="group cursor-pointer">
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-start gap-3"
                >
                  <div className="w-7 h-7 rounded-lg bg-blue-50/50 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 text-blue-600 shadow-sm border border-blue-100/30">
                    <Mail className="w-3 h-3" />
                  </div>
                  <div className="space-y-0">
                    <p className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">
                      Email
                    </p>
                    <p className="text-[12px] text-slate-600 font-normal truncate max-w-[150px]">
                      {contactInfo.email}
                    </p>
                  </div>
                </a>
              </li>
              <li className="group cursor-pointer">
                <a
                  href={`tel:${contactInfo.phone.replace(/\s+/g, "")}`}
                  className="flex items-start gap-3"
                >
                  <div className="w-7 h-7 rounded-lg bg-emerald-50/50 flex items-center justify-center shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 text-emerald-600 shadow-sm border border-emerald-100/30">
                    <Phone className="w-3 h-3" />
                  </div>
                  <div className="space-y-0">
                    <p className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">
                      Sales
                    </p>
                    <p className="text-[12px] text-slate-600 font-normal">
                      {contactInfo.phone}
                    </p>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Simplified Dark Bottom Bar */}
      {/* Premium Dark Bottom Bar with Glow Blobs */}
      <div className="bg-[#0B0F1A] text-white py-6 relative z-10 border-t border-slate-900/50 overflow-hidden">
        {/* Decorative Glow Blobs */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-[80px] -mr-32 -mt-32 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-500/3 rounded-full blur-[60px] -ml-24 -mb-24 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
              <p className="text-[11px] text-slate-500 font-medium tracking-wide">
                © {currentYear} Frigate Engineering Services Pvt Ltd.
              </p>
              <div className="flex items-center gap-6">
                <Link
                  href="#"
                  className="text-[11px] text-slate-400 hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="#"
                  className="text-[11px] text-slate-400 hover:text-white transition-colors"
                >
                  Terms of Use
                </Link>
              </div>
            </div>

            {/* Compact Branding Badge */}
            {contactInfo.show_inhouse_footer && (
              <div className="flex flex-col items-center lg:items-end gap-1.5 px-8 md:px-12 py-2 border-x border-slate-800/30 md:border-y-0 relative group">
                <span className="text-[9px] text-slate-600 font-extrabold uppercase tracking-[0.4em] mb-1 group-hover:text-blue-500 transition-colors duration-500">
                  Developed by
                </span>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://frigate.ai/wp-content/uploads/2024/03/frigate_whitelogo.svg"
                  alt="Frigate Engineering Services"
                  className="h-6 w-auto mx-auto opacity-80 brightness-110 transition-all group-hover:opacity-100 group-hover:scale-105"
                />
              </div>
            )}

            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 group cursor-default">
                <Shield className="w-3.5 h-3.5 text-slate-600 group-hover:text-blue-500 transition-colors" />
                <span className="text-[10px] text-slate-500 group-hover:text-slate-300 transition-colors tracking-widest uppercase">
                  Secure Data
                </span>
              </div>
              <div className="text-[10px] text-slate-600 font-bold tracking-widest uppercase border border-slate-800/80 hover:border-blue-500/50 px-3 py-1.5 rounded-[10px] transition-colors">
                NDA PROTECTED
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Bottom Accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-blue-200/40 to-transparent" />
    </footer>
  );
};

export default Footer;
