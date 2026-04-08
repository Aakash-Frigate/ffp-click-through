"use client";

import { Button, Typography } from "@/app/components/ui/custom-components";
import { ArrowUpTrayIcon } from "@heroicons/react/24/outline";
import { CheckCircleIcon, ShieldCheckIcon } from "@heroicons/react/24/solid";

export function Hero() {
  return (
    <section className="relative w-full bg-white pt-32 pb-24 px-6 overflow-hidden min-h-[80vh] flex flex-col justify-center border-b border-gray-100">
      {/* Abstract Background Enhancements */}
      <div className="absolute top-0 inset-x-0 h-[500px] bg-linear-to-b from-blue-50/30 to-transparent pointer-events-none" />
      <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-blue-50/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-indigo-50/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center">
        {/* Main Headline */}
        <Typography
          variant="h1"
          color="black"
          className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-8 leading-tight"
        >
          <span className="text-[#3b82f6]">Your China+1 Manufacturing</span>{" "}
          <span>Partner in India</span>
        </Typography>

        {/* Subtitle */}
        <Typography
          variant="lead"
          className="text-gray-700 font-normal max-w-3xl mx-auto mb-10 text-lg md:text-xl"
        >
          The{" "}
          <span className="font-semibold text-blue-gray-900">
            AI-powered Cloud Manufacturing platform
          </span>{" "}
          for startups to global enterprises. Access our{" "}
          <span className="font-semibold text-blue-gray-900">
            Manufacturing as a Service
          </span>{" "}
          network for rapid turnaround on high-quality custom parts.
        </Typography>

        {/* CTA Button */}
        <Button
          size="lg"
          color="blue"
          className="flex items-center gap-3 rounded-full bg-blue-600 hover:bg-blue-700 shadow-xl shadow-blue-500/20 hover:shadow-blue-500/40 transition-all text-sm px-10 py-4 mb-14"
        >
          <ArrowUpTrayIcon className="w-5 h-5 text-white" strokeWidth={2} />
          Upload CAD for Instant Quote
        </Button>

        {/* Certifications Row */}
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 mb-12">
          {["ISO 9001", "AS9100D", "NDA Protected", "Secure Platform"].map(
            (cert, i) => (
              <div
                key={i}
                className="flex items-center gap-2 text-sm md:text-base font-semibold text-blue-gray-800"
              >
                <CheckCircleIcon className="w-6 h-6 text-green-500" />
                {cert}
              </div>
            ),
          )}
        </div>

        {/* Legal / Security Text */}
        <div className="text-xs text-gray-500 font-light flex flex-col items-center gap-3">
          <p className="max-w-2xl leading-relaxed text-gray-500">
            Frigate Fast Parts Instant Quoting Engine® is the fastest way to
            procure custom CNC & Sheet Metal components. Start instantly by
            dropping your 3D models.
          </p>
          <div className="flex items-center gap-1.5 text-gray-600 font-medium">
            <ShieldCheckIcon className="w-4 h-4 text-gray-400" />
            Frigate Fast Parts values your privacy and security.{" "}
            <a
              href="#"
              className="underline hover:text-blue-600 transition-colors ml-1"
            >
              Learn more.
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
