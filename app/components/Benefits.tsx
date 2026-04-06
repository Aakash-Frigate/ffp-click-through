"use client";

import React from "react";
import { Typography } from "@material-tailwind/react";
import {
  CurrencyDollarIcon,
  ClockIcon,
  ShieldCheckIcon,
  GlobeAsiaAustraliaIcon,
  SparklesIcon,
  ChartBarIcon,
} from "@heroicons/react/24/outline";

const benefits = [
  {
    title: "Cost Efficiency",
    description: "Lower your production costs by up to 30% with our optimized global sourcing network.",
    icon: CurrencyDollarIcon,
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    title: "Rapid Turnaround",
    description: "Parts delivered in as little as 3 days. We match your project with the fastest available capacity.",
    icon: ClockIcon,
    color: "bg-blue-50 text-blue-600",
  },
  {
    title: "Guaranteed Quality",
    description: "Rigorous quality control and ISO-certified manufacturing partners ensure every part meets specs.",
    icon: ShieldCheckIcon,
    color: "bg-indigo-50 text-indigo-600",
  },
  {
    title: "Global Scalability",
    description: "Seamlessly transition from low-volume prototyping to mass production across 2,000+ partners.",
    icon: GlobeAsiaAustraliaIcon,
    color: "bg-purple-50 text-purple-600",
  },
  {
    title: "Smart Engineering",
    description: "AI-driven DfM feedback helps you optimize designs for manufacturability and cost early on.",
    icon: SparklesIcon,
    color: "bg-amber-50 text-amber-600",
  },
  {
    title: "Supply Chain Resilience",
    description: "Mitigate risks with our China+1 strategy, leveraging India's growing manufacturing ecosystem.",
    icon: ChartBarIcon,
    color: "bg-cyan-50 text-cyan-600",
  },
];

export function Benefits() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-50/50 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-indigo-50/30 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <Typography
            variant="small"
            className="font-bold uppercase tracking-widest mb-3 text-blue-600"
          >
            Why Choose Us
          </Typography>
          <Typography
            variant="h2"
            color="black"
            className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4"
          >
            <span className="text-[#3b82f6]">The Advantage of</span>{" "}
            <span>Cloud Manufacturing</span>
          </Typography>
          <Typography className="text-gray-500 text-lg max-w-2xl mx-auto font-light leading-relaxed">
            We combine high-end technology with a massive supplier network to 
            deliver a manufacturing experience that is faster, cheaper, and more reliable.
          </Typography>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="group p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-blue-500/5 hover:border-blue-100 transition-all duration-500"
              >
                <div className={`w-14 h-14 rounded-2xl ${benefit.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                  <Icon className="w-8 h-8" />
                </div>
                <Typography variant="h5" color="black" className="font-bold mb-3 group-hover:text-blue-600 transition-colors">
                  {benefit.title}
                </Typography>
                <Typography className="text-gray-500 text-sm font-light leading-relaxed">
                  {benefit.description}
                </Typography>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
