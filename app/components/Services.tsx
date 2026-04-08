// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
/* eslint-disable */
"use client";

import React, { useState } from "react";
import { CheckIcon, ArrowLongRightIcon } from "@heroicons/react/24/outline";
import { Button, Typography } from "@material-tailwind/react";

const services = [
  {
    id: "cnc",
    name: "CNC Machining",
    title: "CNC Machining",
    description:
      "Get highly precise, custom machined parts with our state-of-the-art CNC mills and lathes. We offer rapid prototyping and low-to-mid volume production with unmatched speed and accuracy.",
    bullets: [
      "Tolerances down to ±0.005mm for complex geometries",
      "Wide range of metals and industrial-grade plastics",
      "Fast turnaround times starting from 3 days",
    ],
    image:
      "https://frigate.ai/wp-content/uploads/2024/04/CNC-Machining-Image.png",
  },
  {
    id: "sheet-metal",
    name: "Sheet Metal",
    title: "Sheet Metal Fabrication",
    description:
      "Fast, cost-effective sheet metal fabrication services from rapid prototyping to high-volume production. We offer laser cutting, bending, and a variety of finishes.",
    bullets: [
      "Precision laser cutting and CNC bending",
      "Wide selection of materials including steel, aluminum, and copper",
      "Finishing options like powder coating and anodizing",
    ],
    image:
      "https://frigate.ai/wp-content/uploads/2024/04/Sheet-Metal-Fabrication-Services-Frigate-1024x576.png",
  },
  {
    id: "injection-molding",
    name: "Injection Molding",
    title: "Injection Molding",
    description:
      "Get affordable, high-quality molded parts and bridge tooling within days. With our free moldability consultation, the design and molding process is rapidly accelerated to save you time and money.",
    bullets: [
      "Low-volume molding up to 100,000+ parts with volume pricing available—no MOQ required",
      "100+ plastic, elastomeric, and silicone rubber materials",
      "Automated CMM for fast, in-house quality documentation",
    ],
    image:
      "https://frigate.ai/wp-content/uploads/2024/05/IMG-20240430-WA0037-1024x1024.jpg",
  },
  {
    id: "extrusion",
    name: "Extrusion",
    title: "Extrusion",
    description:
      "Custom aluminum and plastic extrusion services for profiles of any complexity. We deliver high-quality, continuous shapes with tight tolerances for various applications.",
    bullets: [
      "Custom tooling created to your exact specifications",
      "Multiple alloys and plastic materials available",
      "Secondary operations like cutting, drilling, and finishing",
    ],
    image: "https://frigate.ai/wp-content/uploads/2024/04/extrusion.webp",
  },
  {
    id: "casting",
    name: "Casting",
    title: "Casting",
    description:
      "High-quality casting services including die casting, investment casting, and sand casting. Perfect for complex shapes and large parts in a variety of metals.",
    bullets: [
      "Excellent surface finish and dimensional accuracy",
      "Ideal for complex internal cavities and thin walls",
      "Cost-effective for medium to high volume runs",
    ],
    image:
      "https://frigate.ai/wp-content/uploads/2024/11/Conventional-Molding-Casting-Services-IMG-2.png",
  },
  {
    id: "stamping",
    name: "Stamping",
    title: "Stamping",
    description:
      "Precision metal stamping for high-volume production. We provide progressive die stamping, deep drawing, and fine blanking for consistent, tight-tolerance parts.",
    bullets: [
      "High-speed production for maximum cost efficiency",
      "Capabilities for complex forming and deep drawing",
      "Integrated quality control for consistent part dimensions",
    ],
    image: "https://frigate.ai/wp-content/uploads/2024/04/stamping.webp",
  },
];

export function ManufacturingServices() {
  const [activeTab, setActiveTab] = useState(services[0].id);

  const activeService = services.find((s) => s.id === activeTab) || services[0];

  return (
    <section className="py-24 bg-gray-50/50 relative border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Typography
            variant="small"
            color="blue"
            className="font-bold uppercase tracking-widest mb-2"
          >
            Capabilities
          </Typography>
          <Typography
            variant="h2"
            color="black"
            className="text-3xl md:text-5xl font-extrabold tracking-tight"
          >
            <span className="text-[#3b82f6]">Our Manufacturing</span>{" "}
            <span>Services</span>
          </Typography>
          <Typography className="text-gray-600 text-base md:text-lg mt-4 max-w-2xl mx-auto font-normal">
            Comprehensive production technologies designed to move your ideas
            from rapid prototyping straight into full-scale global
            manufacturing.
          </Typography>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center bg-white p-1.5 rounded-full mb-16 gap-1 max-w-fit mx-auto border border-gray-200 shadow-sm">
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => setActiveTab(service.id)}
              className={`px-6 py-2.5 text-sm font-semibold transition-all relative rounded-full outline-none block ${
                activeTab === service.id
                  ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                  : "text-gray-600 hover:text-blue-gray-900 hover:bg-gray-100"
              }`}
            >
              {service.name}
            </button>
          ))}
        </div>

        {/* Content */}
        <div
          key={activeTab}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-[350px] opacity-0 fill-mode-forwards"
          style={{ animation: "fadeIn 0.6s ease-out forwards" }}
        >
          {/* Left: Text & Button */}
          <div className="lg:col-span-4 space-y-6">
            <Typography
              variant="h3"
              color="blue-gray"
              className="text-2xl font-bold"
            >
              {activeService.title}
            </Typography>
            <Typography className="text-gray-700 leading-relaxed font-normal text-[15px]">
              {activeService.description}
            </Typography>
            {/* @ts-expect-error Material Tailwind React 19 typings issue */}
            <Button
              variant="text"
              color="blue"
              className="mt-4 flex items-center gap-3 bg-blue-50/50 hover:bg-blue-50 text-blue-700 px-8 py-3.5 rounded-full shadow-none group"
            >
              Explore Capabilities{" "}
              <ArrowLongRightIcon
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                strokeWidth={2}
              />
            </Button>
          </div>

          {/* Middle: Bullets */}
          <div className="lg:col-span-4 space-y-4 bg-white p-6 md:p-8 rounded-3xl border border-gray-100 shadow-md shadow-blue-gray-900/5">
            {activeService.bullets.map((bullet, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <div className="mt-0.5 shrink-0">
                  <CheckIcon
                    className="w-5 h-5 text-blue-500"
                    strokeWidth={2.5}
                  />
                </div>
                <Typography className="text-gray-700 font-medium text-[14px] leading-relaxed">
                  {bullet}
                </Typography>
              </div>
            ))}
          </div>

          {/* Right: Image */}
          {/* Right: Full-Size Image Container */}
          <div className="lg:col-span-4 relative group">
            <div className="absolute inset-x-0 -inset-y-4 bg-blue-100/40 blur-[80px] rounded-full scale-90 group-hover:scale-100 transition-transform duration-700 pointer-events-none" />
            <div className="relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden bg-white shadow-2xl shadow-blue-900/10 border border-blue-50 transition-all duration-700 hover:shadow-blue-500/10">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={activeService.image}
                alt={activeService.title}
                className="w-full h-full object-cover filter group-hover:scale-110 group-hover:brightness-105 transition-all duration-700"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    "https://placehold.co/800x600/f8faff/94a3b8?text=" +
                    encodeURIComponent(activeService.name);
                }}
              />
              {/* Overlay Gradient for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
