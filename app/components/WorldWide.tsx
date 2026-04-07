"use client";

import { WorldMap } from "./ui/world-map";
import { Typography } from "@material-tailwind/react";
import { GlobeAltIcon } from "@heroicons/react/24/outline";

export function WorldWide() {
  const dots = [
    // Trichy (India) to various global points
    {
      start: { lat: 10.7905, lng: 78.7047, label: "India" },
      end: { lat: 39.8283, lng: -98.5795, label: "USA" },
    },
    {
      start: { lat: 10.7905, lng: 78.7047, label: "India" },
      end: { lat: 51.1657, lng: 10.4515, label: "Germany" },
    },
    {
      start: { lat: 10.7905, lng: 78.7047, label: "India" },
      end: { lat: 35.6762, lng: 139.6503, label: "Japan" },
    },
    {
      start: { lat: 10.7905, lng: 78.7047, label: "India" },
      end: { lat: -25.2744, lng: 133.7751, label: "Australia" },
    },
    {
      start: { lat: 10.7905, lng: 78.7047, label: "India" },
      end: { lat: 25.2048, lng: 55.2708, label: "UAE (Dubai)" },
    },
    {
      start: { lat: 10.7905, lng: 78.7047, label: "India" },
      end: { lat: -14.235, lng: -51.9253, label: "Brazil" },
    },
    // Additional networking nodes
    {
      start: { lat: 39.8283, lng: -98.5795, label: "USA" },
      end: { lat: 51.5074, lng: -0.1278, label: "UK (London)" },
    },
    {
      start: { lat: 51.1657, lng: 10.4515, label: "Germany" },
      end: { lat: 22.3193, lng: 114.1694, label: "Hong Kong" },
    },
  ];

  return (
    <section className="relative py-24 bg-white overflow-hidden flex flex-col items-center border-t border-gray-100">
      {/* Background gradients */}
      <div className="absolute top-0 right-[-20%] w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-indigo-50/50 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 text-center mb-10 md:mb-16">
        <Typography
          variant="small"
          color="blue"
          className="font-bold uppercase tracking-widest mb-3 flex items-center justify-center gap-2"
        >
          <GlobeAltIcon className="w-5 h-5" /> Global Reach
        </Typography>
        <Typography
          variant="h2"
          color="black"
          className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4"
        >
          <span className="text-[#3b82f6]">Trusted by Innovators</span>{" "}
          <span>Worldwide</span>
        </Typography>
        <Typography className="text-gray-600 text-lg max-w-2xl mx-auto font-light leading-relaxed">
          Headquartered in India with operations expanding globally. We
          seamlessly deliver high-precision manufacturing hardware to partners
          across North America, Europe, Asia, and beyond.
        </Typography>
      </div>

      <div className="relative w-full max-w-5xl mx-auto z-20 px-6">
        <WorldMap dots={dots} lineColor="#3b82f6" />
        {/* Fading overlay at bottom for a smoother blend */}
        <div className="absolute bottom-0 inset-x-0 h-20 pointer-events-none" />
      </div>

      {/* Statistics Block */}
      <div className="relative z-20 flex flex-wrap justify-center gap-10 mt-0 text-gray-600 font-medium">
        <div className="flex flex-col items-center">
          <span className="text-3xl font-bold text-black mb-1 tracking-tight">
            USA & UAE
          </span>
          <span className="text-sm font-light text-gray-500">Global Hubs</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-3xl font-bold text-black mb-1 tracking-tight">
            2,000+
          </span>
          <span className="text-sm font-light text-gray-500">
            Manufacturing Partners
          </span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-3xl font-bold text-black mb-1 tracking-tight">
            500k+
          </span>
          <span className="text-sm font-light text-gray-500">
            Parts Delivered
          </span>
        </div>
      </div>
    </section>
  );
}
