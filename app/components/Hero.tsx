"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Typography } from "@/app/components/ui/custom-components";
import { CheckCircleIcon, ShieldCheckIcon } from "@heroicons/react/24/solid";

import { QuoteUpload } from "./QuoteUpload";

const bgImages = [
  "https://frigate.ai/wp-content/uploads/2024/07/Robotics-IMG-2.png",
  "https://frigate.ai/wp-content/uploads/2024/07/Consumer-Products-IMG-3.png",
  "https://frigate.ai/wp-content/uploads/2024/05/Aerospace-IMG-5.png",
];

export function Hero() {
  const [emblaRef] = useEmblaCarousel({ loop: true, duration: 60 }, [
    Autoplay({
      delay: 5000,
      stopOnInteraction: false,
      stopOnMouseEnter: false,
    }),
  ]);

  return (
    <section className="relative w-full bg-white px-6 overflow-hidden min-h-[90vh] flex flex-col justify-center border-b border-slate-100">
      {/* Carousel Background Image (Full Width) - Bleeds to edges */}
      <div
        className="absolute inset-0 pointer-events-none overflow-hidden"
        ref={emblaRef}
      >
        <div className="flex h-full w-full">
          {bgImages.map((src, index) => (
            <div key={src} className="relative flex-[0_0_100%] min-w-0 h-full">
              <Image
                src={src}
                alt={`Background ${index + 1}`}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </div>
          ))}
        </div>
        {/* Liquid glass effect overlays */}
        <div className="absolute inset-0 bg-white/10 backdrop-blur-[1px] z-10" />
        <div className="absolute inset-0 bg-linear-to-r from-white/90 via-white/50 to-transparent z-10" />
      </div>

      {/* Abstract Engineering-inspired Background */}
      <div className="absolute top-0 inset-x-0 h-[600px] bg-linear-to-b from-blue-50/40 to-transparent pointer-events-none" />
      <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-blue-100/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Subtle Geometric Accent */}
      <div className="absolute top-1/4 left-10 w-64 h-64 border border-blue-100/30 rounded-full -rotate-12 pointer-events-none hidden lg:block" />
      <div className="absolute top-1/3 left-24 w-48 h-48 border border-blue-50/20 rounded-full rotate-45 pointer-events-none hidden lg:block" />

      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        {/* Left Column: Content */}
        <div className="relative z-20 text-left lg:col-span-7 flex flex-col items-start w-full py-12 lg:py-20 lg:pr-8">
          <Typography
            variant="h1"
            color="black"
            className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight mb-8 leading-[1.05]"
          >
            <span className="bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Your China+1
            </span>
            <br />
            Manufacturing Partner
          </Typography>

          <Typography
            variant="lead"
            className="text-slate-600 font-medium max-w-2xl mb-12 text-lg md:text-xl leading-relaxed"
          >
            Access India&apos;s most advanced{" "}
            <span className="text-slate-900 font-bold border-b-2 border-blue-100 underline-offset-4">
              AI-powered manufacturing network
            </span>{" "}
            for high-precision custom parts and rapid-scale production.
          </Typography>

          {/* Integrated Trust Signals - Left Aligned */}
          <div className="flex flex-wrap items-center justify-start gap-x-10 gap-y-6 mb-12 w-full">
            {[
              { label: "ISO 9001", active: true },
              { label: "AS9100D", active: true },
              { label: "NDA Protected", active: true },
              { label: "Secure IP", active: true },
            ].map((cert, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-50 border border-slate-100 shadow-xs">
                  <CheckCircleIcon className="w-4 h-4 text-green-600" />
                </div>
                <span className="text-sm font-bold text-slate-700 tracking-tight">
                  {cert.label}
                </span>
              </div>
            ))}
          </div>

          {/* Security Text - Left Aligned */}
          <div className="text-xs text-gray-500 font-light flex flex-col items-start gap-3 w-full">
            <p className="max-w-2xl leading-relaxed text-left text-gray-500">
              Frigate Fast Parts Instant Quoting Engine® is the fastest way to
              procure custom CNC & Sheet Metal components. Start instantly by
              dropping your 3D models.
            </p>
            <div className="flex items-center gap-1.5 text-gray-600 font-medium bg-slate-50/50 px-3 py-1.5 rounded-full border border-slate-100">
              <ShieldCheckIcon className="w-4 h-4 text-blue-400 opacity-80" />
              Frigate Fast Parts values your privacy and security.{" "}
              <a
                href="#"
                className="underline underline-offset-2 hover:text-blue-600 transition-colors ml-1"
              >
                Learn more.
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Upload */}
        <div className="relative lg:col-span-5 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-xl">
            <div className="absolute -inset-10 bg-linear-to-r from-blue-500/5 to-indigo-500/5 rounded-full blur-[80px] -z-10" />
            <QuoteUpload />
          </div>
        </div>
      </div>
    </section>
  );
}
