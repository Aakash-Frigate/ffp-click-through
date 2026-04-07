"use client";

import { Typography } from "@material-tailwind/react";
import {
  CurrencyDollarIcon,
  ClockIcon,
  ShieldCheckIcon,
  GlobeAsiaAustraliaIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";

const benefits = [
  {
    title: "Cost Efficiency",
    description:
      "Lower your total cost of ownership by up to 30% through our AI-driven global sourcing network and intelligent competitive bidding.",
    icon: CurrencyDollarIcon,
    id: "REF_01",
    tag: "ECONOMY",
  },
  {
    title: "One Quote, Multi-Process",
    description:
      "Configure multiple manufacturing processes from CNC to Injection Molding within a single, unified quote. No more vendor fragmentation.",
    icon: SparklesIcon,
    id: "REF_02",
    tag: "LOGIC",
  },
  {
    title: "Tax & Shipping Included",
    description:
      "Experience full pricing transparency. We handle all global duties, taxes, and door-to-door logistics within your initial quote.",
    icon: GlobeAsiaAustraliaIcon,
    id: "REF_03",
    tag: "LOGISTICS",
  },
  {
    title: "Personalized Support",
    description:
      "Our expert engineers provide dedicated technical reviews and Design-for-Manufacturability feedback for every project.",
    icon: ShieldCheckIcon,
    id: "REF_04",
    tag: "ENGINEERING",
  },
  {
    title: "Simplified, Reliable, Fast",
    description:
      "A streamlined end-to-end manufacturing experience. We guarantee quality and delivery speed through our certified partner network.",
    icon: ClockIcon,
    id: "REF_05",
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
          <Typography className="text-gray-500 text-lg max-w-2xl mx-auto font-light leading-relaxed">
            We combine high-end technology with a massive global supplier
            network to deliver a manufacturing experience that is faster,
            cost-effective, and fully transparent.
          </Typography>
        </div>

        <div className="flex flex-wrap justify-center gap-10">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="group relative p-8 rounded-[2.5rem] bg-slate-50/40 backdrop-blur-xl border border-blue-50/50 hover:bg-white hover:border-blue-200 shadow-[0_8px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_40px_80px_rgba(59,130,246,0.1)] transition-all duration-700 flex flex-col w-full md:w-[calc(50%-20px)] lg:w-[calc(33.333%-27px)] min-h-[260px]"
              >
                {/* Refined Side-by-Side Header */}
                <div className="flex items-center gap-6 mb-2">
                  <div className="w-16 h-16 rounded-2xl bg-white border border-blue-100 flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform duration-500 flex-shrink-0">
                    <Icon className="w-8 h-8 text-blue-600" strokeWidth={1.5} />
                  </div>

                  <div className="flex flex-col gap-2">
                    <Typography
                      variant="h4"
                      color="black"
                      className="text-xl font-bold tracking-tight leading-tight group-hover:text-blue-600 transition-colors"
                    >
                      {benefit.title}
                    </Typography>
                    <div className="px-3 py-1 w-fit rounded-full bg-blue-50 border border-blue-100 text-[9px] font-black text-blue-600 uppercase tracking-widest leading-none group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all duration-500">
                      {benefit.tag}
                    </div>
                  </div>
                </div>

                <div className="flex-1">
                  <Typography className="text-gray-500 text-[15px] font-normal leading-relaxed opacity-90">
                    {benefit.description}
                  </Typography>
                </div>

                {/* Subtle Geometric Accent */}
                <div className="mt-2 flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-blue-600/20 group-hover:bg-blue-600 transition-colors" />
                  <div className="h-[1px] w-12 bg-gradient-to-r from-blue-100/50 to-transparent" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
