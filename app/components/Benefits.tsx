"use client";

import Image from "next/image";
import { Typography } from "@/app/components/ui/custom-components";

const benefits = [
  {
    title: "Cost Efficiency",
    description:
      "Lower your total cost of ownership by up to 30% through our AI-driven global sourcing network and intelligent competitive bidding.",
    image: "/benefits/cost-efficient.webp",
    tag: "ECONOMY",
  },
  {
    title: "One Quote, Multi-Process",
    description:
      "Configure multiple manufacturing processes from CNC to Injection Molding within a single, unified quote. No more vendor fragmentation.",
    image: "/benefits/cnc-sheet.webp",
    tag: "LOGIC",
  },
  {
    title: "Tax & Shipping Included",
    description:
      "Experience full pricing transparency. We handle all global duties, taxes, and door-to-door logistics within your initial quote.",
    image: "/benefits/taxes.webp",
    tag: "LOGISTICS",
  },
  {
    title: "Personalized Support",
    description:
      "Our expert engineers provide dedicated technical reviews and Design-for-Manufacturability feedback for every project.",
    image: "/benefits/expert.webp",
    tag: "ENGINEERING",
  },
  {
    title: "Simplified, Reliable, Fast",
    description:
      "A streamlined end-to-end manufacturing experience. We guarantee quality and delivery speed through our certified partner network.",
    image: "/benefits/fss.webp",
    tag: "CORE",
  },
];

export function Benefits() {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Dynamic Background Accents */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-50/40 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-indigo-50/30 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <Typography
            variant="small"
            className="font-bold uppercase tracking-[0.3em] mb-4 text-blue-600"
          >
            The Frigate Advantage
          </Typography>
          <Typography
            variant="h2"
            color="black"
            className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6"
          >
            <span className="text-[#3b82f6]">Cloud Manufacturing</span>{" "}
            <span>at Scale</span>
          </Typography>
          <Typography className="text-gray-600 text-lg max-w-2xl mx-auto font-normal leading-relaxed">
            We combine high-end technology with a massive global supplier
            network to deliver a manufacturing experience that is faster,
            cost-effective, and fully transparent.
          </Typography>
        </div>

        <div className="flex flex-col gap-24 md:gap-32">
          {benefits.map((benefit, index) => {
            const isEven = index % 2 === 0;
            const number = (index + 1).toString().padStart(2, "0");

            return (
              <div
                key={index}
                className={`flex flex-col ${
                  isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                } items-center gap-12 lg:gap-16 w-full group relative`}
              >
                {/* Image Section */}
                <div className="w-full lg:w-1/2 relative min-h-[300px] lg:min-h-[400px] rounded-4xl overflow-hidden shadow-xl border border-slate-100 bg-slate-50">
                  <Image
                    src={benefit.image}
                    alt={benefit.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105 opacity-95 group-hover:opacity-100"
                  />
                  {/* Inner ring for polish */}
                  <div className="absolute inset-0 ring-1 ring-inset ring-slate-900/5 rounded-4xl pointer-events-none" />
                </div>

                {/* Content Section */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center text-left">
                  <div className="flex items-center gap-4 mb-5">
                    <span className="text-4xl font-extrabold text-slate-200 select-none tracking-tighter">
                      {number}
                    </span>
                    <div className="px-3 py-1.5 rounded-full bg-blue-50/80 border border-blue-100/50 text-[10px] font-black text-blue-600 uppercase tracking-widest leading-none backdrop-blur-sm">
                      {benefit.tag}
                    </div>
                  </div>

                  <Typography
                    variant="h3"
                    color="black"
                    className="text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight mb-5"
                  >
                    {benefit.title}
                  </Typography>

                  <Typography className="text-slate-600 text-lg font-normal leading-relaxed max-w-lg">
                    {benefit.description}
                  </Typography>

                  {/* Subtle Geometric Accent */}
                  <div className="mt-8 flex items-center gap-2 opacity-70 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    <div className="h-px w-16 bg-linear-to-r from-blue-500 to-transparent" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
