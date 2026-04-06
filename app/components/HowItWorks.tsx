"use client";

import React from "react";
import { Typography } from "@material-tailwind/react";
import {
  CloudArrowUpIcon,
  CalculatorIcon,
  CheckBadgeIcon,
  CpuChipIcon,
  BeakerIcon,
  TruckIcon,
} from "@heroicons/react/24/outline";

const steps = [
  {
    title: "Upload CAD",
    description: "Upload models for instant analysis.",
    icon: CloudArrowUpIcon,
  },
  {
    title: "Instant Quote",
    description: "Pricing and DfM in seconds.",
    icon: CalculatorIcon,
  },
  {
    title: "Approve & Order",
    description: "Confirm specs with one click.",
    icon: CheckBadgeIcon,
  },
  {
    title: "Smart Sourcing",
    description: "Routed to the best partner.",
    icon: CpuChipIcon,
  },
  {
    title: "Quality Control",
    description: "Rigorous part inspection.",
    icon: BeakerIcon,
  },
  {
    title: "Global Delivery",
    description: "Doorstep delivery worldwide.",
    icon: TruckIcon,
  },
];

export function HowItWorks() {
  return (
    <section className="py-24 bg-white overflow-hidden border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 text-center mb-24">
        <Typography
          variant="small"
          className="font-bold uppercase tracking-widest mb-3 text-blue-600"
        >
          Our Process
        </Typography>
        <Typography
          variant="h2"
          color="black"
          className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4"
        >
          <span className="text-[#3b82f6]">How Frigate Fast Parts</span>{" "}
          <span>Works</span>
        </Typography>
        <Typography className="text-gray-500 text-lg max-w-2xl mx-auto font-light">
          A streamlined, six-step manufacturing workflow designed for maximum
          speed and precision.
        </Typography>
      </div>

      {/* Desktop View (Single Horizontal Row) */}
      <div className="hidden lg:block relative w-full h-[350px]">
        {/* SVG Straight Flow Animation - Centered exactly in the middle */}
        <div className="absolute inset-0 flex items-center transform translate-y-[-40px]">
          <svg
            className="w-full pointer-events-none overflow-visible px-[10%]"
            height="4"
            viewBox="0 0 1000 4"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#2563eb" />
              </linearGradient>
            </defs>
            
            {/* Background Path */}
            <line 
              x1="0" y1="2" x2="1000" y2="2"
              stroke="#e5e7eb" 
              strokeWidth="4" 
              strokeLinecap="round"
            />
            
            {/* Animated Path Overlay */}
            <line 
              x1="0" y1="2" x2="1000" y2="2"
              className="animate-flow"
              stroke="url(#lineGradient)" 
              strokeWidth="4" 
              strokeDasharray="20 15" 
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* Steps Wrapper */}
        <div className="relative h-full px-[10%] grid grid-cols-6 gap-4">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="relative flex flex-col items-center group pt-[135px]"
              >
                {/* 
                  The center of the row is 175px (h-350 / 2).
                  The icons are 80px tall.
                  To center the icon on the line (which is also at ~middle):
                */}
                
                {/* Circle - Positioned exactly centered on the line */}
                <div className="absolute top-[135px] -translate-y-1/2 flex items-center justify-center">
                   <div className="w-20 h-20 bg-white rounded-full border-4 border-white shadow-[0_10px_35px_-10px_rgba(59,130,246,0.3)] flex items-center justify-center z-20 group-hover:scale-115 group-hover:rotate-3 transition-all duration-500 relative">
                     <div className="absolute inset-0 rounded-full ring-2 ring-blue-100 group-hover:ring-blue-400 group-hover:ring-4 transition-all duration-500" />
                     <Icon className="w-10 h-10 text-[#2563eb] group-hover:scale-110 transition-transform" />
                     
                     {/* Step Number Badge */}
                     <div className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-7 h-7 bg-blue-600 text-white rounded-full text-[11px] font-bold z-30 shadow-lg border-2 border-white">
                       {index + 1}
                     </div>
                   </div>
                </div>

                {/* Text Content - Always below the line/icons */}
                <div className="mt-8 text-center flex flex-col items-center">
                  <Typography color="black" className="font-extrabold text-[15px] mb-1.5 transition-colors group-hover:text-blue-600">
                    {step.title}
                  </Typography>
                  <Typography className="text-gray-500 text-[12px] font-light leading-relaxed max-w-[150px]">
                    {step.description}
                  </Typography>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Mobile/Tablet View (Vertical List) */}
      <div className="lg:hidden max-w-xl mx-auto flex flex-col gap-12 relative px-6">
        <div className="absolute left-[59px] top-4 bottom-4 w-[2px] bg-blue-100 dashed-border" />
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <div key={index} className="flex gap-8 items-start relative z-10 group">
              <div className="w-16 h-16 shrink-0 bg-white rounded-full border-2 border-blue-500 shadow-lg flex items-center justify-center transition-transform group-hover:scale-110">
                <Icon className="w-8 h-8 text-blue-600" />
              </div>
              <div className="pt-2">
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-[10px] font-bold bg-blue-600 text-white w-5 h-5 rounded-full flex items-center justify-center">
                    {index + 1}
                  </span>
                  <Typography variant="h5" color="black" className="font-bold">
                    {step.title}
                  </Typography>
                </div>
                <Typography className="text-gray-500 text-sm font-light max-w-sm">
                  {step.description}
                </Typography>
              </div>
            </div>
          );
        })}
      </div>
      
      <style>{`
        @keyframes flow {
          from { stroke-dashoffset: 70; }
          to { stroke-dashoffset: 0; }
        }
        .animate-flow {
          animation: flow 4s linear infinite;
        }
        .dashed-border {
          background-image: linear-gradient(to bottom, #3b82f6 50%, rgba(255,255,255,0) 0%);
          background-position: left;
          background-size: 2px 20px;
          background-repeat: repeat-y;
        }
      `}</style>
    </section>
  );
}
