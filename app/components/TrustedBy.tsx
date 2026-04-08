"use client";

import { Button, Typography } from "@/app/components/ui/custom-components";

const allLogos = [
  "https://frigate.ai/wp-content/uploads/2025/12/Sun-Stream-global-technologies.png",
  "https://frigate.ai/wp-content/uploads/2025/10/2.png",
  "https://frigate.ai/wp-content/uploads/2025/12/Schuco.png",
  "https://frigate.ai/wp-content/uploads/2025/12/Reakube.png",
  "https://frigate.ai/wp-content/uploads/2024/03/client-logoAsset-3.png",
  "https://frigate.ai/wp-content/uploads/2024/07/MRG-logo-img-150x150.png",
  "https://frigate.ai/wp-content/uploads/2024/07/Indian-oil-logo-150x150.png",
  "https://frigate.ai/wp-content/uploads/2024/04/Reliance-1-150x90.png",
  "https://frigate.ai/wp-content/uploads/2024/04/TATA-1-1-150x90.png",
  "https://frigate.ai/wp-content/uploads/2025/10/1.png",
  "https://logo.clearbit.com/sony.com",
  "https://logo.clearbit.com/mercedes-benz.com",
  "https://logo.clearbit.com/ford.com",
  "https://logo.clearbit.com/nike.com",
  "https://logo.clearbit.com/adidas.com",
  "https://logo.clearbit.com/netflix.com",
  "https://logo.clearbit.com/spotify.com",
  "https://logo.clearbit.com/slack.com",
];

const columns = [
  [...allLogos.slice(0, 6), ...allLogos.slice(0, 6)],
  [...allLogos.slice(6, 12), ...allLogos.slice(6, 12)],
  [...allLogos.slice(12, 18), ...allLogos.slice(12, 18)],
  [...allLogos.slice(0, 6), ...allLogos.slice(0, 6)],
];

export function TrustedBy() {
  return (
    <section className="py-24 bg-white overflow-hidden border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Section: Moving Logos (Infinite Scroll) */}
        <div className="relative h-[550px] flex gap-6 overflow-hidden order-2 lg:order-1 select-none">
          {columns.map((column, colIdx) => (
            <div
              key={colIdx}
              className={`flex-1 flex flex-col gap-6 scroll-${
                colIdx % 2 === 0 ? "up" : "down"
              }`}
              style={{
                animationDuration: `${30 + colIdx * 5}s`,
              }}
            >
              {column.map((logo, logoIdx) => (
                <div
                  key={logoIdx}
                  className="w-full aspect-square bg-white rounded-3xl shadow-sm border border-gray-100 flex items-center justify-center p-6 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-500 group"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={logo}
                    alt="Partner"
                    className="w-full h-full object-contain grayscale opacity-75 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          ))}
          {/* Vertical fading masks to blend logos into the section */}
          <div className="absolute top-0 inset-x-0 h-32 bg-linear-to-b from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute bottom-0 inset-x-0 h-32 bg-linear-to-t from-white to-transparent z-10 pointer-events-none" />
        </div>

        {/* Right Section: Fixed Info */}
        <div className="space-y-8 order-1 lg:order-2">
          <div className="space-y-4">
            <Typography
              variant="small"
              color="blue"
              className="font-bold uppercase tracking-widest flex items-center gap-2"
            >
              <span className="w-8 h-px bg-blue-600" />
              Trusted Partnerships
            </Typography>
            <Typography
              variant="h2"
              color="black"
              className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight"
            >
              <span className="text-[#3b82f6]">
                Building strong partnerships
              </span>{" "}
              <span>with the world&apos;s most influential companies.</span>
            </Typography>
            <Typography className="text-gray-700 text-lg font-normal leading-relaxed max-w-xl">
              Collaborating with enterprises and startups alike to push
              boundaries, disrupt markets, and achieve groundbreaking results.
              We scale with your ambition.
            </Typography>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button
              size="lg"
              className="rounded-full bg-blue-600 hover:bg-blue-700 shadow-xl shadow-blue-500/20 px-10 py-4 text-sm capitalize transition-all hover:-translate-y-1 active:scale-95"
            >
              Explore Partnerships
            </Button>
            <Button
              variant="text"
              color="blue"
              className="rounded-full px-8 py-4 text-sm capitalize hover:bg-blue-50/50"
            >
              View Case Studies
            </Button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll-up {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        @keyframes scroll-down {
          0% { transform: translateY(-50%); }
          100% { transform: translateY(0); }
        }
        .scroll-up {
          animation: scroll-up linear infinite;
        }
        .scroll-down {
          animation: scroll-down linear infinite;
        }
        .scroll-up:hover, .scroll-down:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
