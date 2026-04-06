// @ts-nocheck
/* eslint-disable */
"use client";

import React from "react";
import dynamic from "next/dynamic";
import { Typography } from "@material-tailwind/react";
import { GlobeAltIcon } from "@heroicons/react/24/outline";

// Import the Globe dynamically to prevent SSR hydration errors with Three.js
const World = dynamic(() => import("./globe").then((mod) => mod.World), {
  ssr: false,
});

export function WorldWide() {
  const globeConfig = {
    pointSize: 9,
    globeColor: "#ffffff",
    showAtmosphere: true,
    atmosphereColor: "#3b82f6",
    atmosphereAltitude: 0.15,
    emissive: "#ffffff",
    emissiveIntensity: 0.2,
    shininess: 1,
    polygonColor: "rgba(30, 58, 138, 0.9)",
    ambientLight: "#ffffff",
    directionalLeftLight: "#ffffff",
    directionalTopLight: "#ffffff",
    pointLight: "#ffffff",
    arcTime: 1000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    initialPosition: { lat: 20, lng: 80 },
    autoRotate: true,
    autoRotateSpeed: 0.5,
  };

  const colors = ["#00f2ff", "#3b82f6", "#a855f7"];
  const arcs = [
    // Trichy (India) to various global points
    {
      order: 1,
      startLat: 10.7905,
      startLng: 78.7047,
      endLat: 39.8283,
      endLng: -98.5795,
      arcAlt: 0.5,
      color: colors[0],
    }, // USA
    {
      order: 2,
      startLat: 10.7905,
      startLng: 78.7047,
      endLat: 51.1657,
      endLng: 10.4515,
      arcAlt: 0.3,
      color: colors[1],
    }, // Germany
    {
      order: 3,
      startLat: 10.7905,
      startLng: 78.7047,
      endLat: 35.6762,
      endLng: 139.6503,
      arcAlt: 0.4,
      color: colors[2],
    }, // Japan
    {
      order: 4,
      startLat: 10.7905,
      startLng: 78.7047,
      endLat: -25.2744,
      endLng: 133.7751,
      arcAlt: 0.4,
      color: colors[0],
    }, // Australia
    {
      order: 5,
      startLat: 10.7905,
      startLng: 78.7047,
      endLat: 25.2048,
      endLng: 55.2708,
      arcAlt: 0.2,
      color: colors[1],
    }, // Dubai
    {
      order: 6,
      startLat: 10.7905,
      startLng: 78.7047,
      endLat: -14.235,
      endLng: -51.9253,
      arcAlt: 0.6,
      color: colors[2],
    }, // Brazil
    // Additional networking nodes
    {
      order: 7,
      startLat: 39.8283,
      startLng: -98.5795,
      endLat: 51.5074,
      endLng: -0.1278,
      arcAlt: 0.4,
      color: colors[0],
    }, // USA to London
    {
      order: 8,
      startLat: 51.1657,
      startLng: 10.4515,
      endLat: 22.3193,
      endLng: 114.1694,
      arcAlt: 0.4,
      color: colors[1],
    }, // Germany to HK
  ];

  return (
    <section className="relative py-24 bg-white overflow-hidden flex flex-col items-center border-t border-gray-100">
      {/* Background gradients */}
      <div className="absolute top-0 right-[-20%] w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-indigo-50/50 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 text-center mb-0 md:mb-10 lg:mb-0">
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

      <div className="relative w-full max-w-4xl h-[400px] md:h-[600px] mx-auto z-20 flex items-center justify-center -mt-8 md:-mt-16">
        <World globeConfig={globeConfig} data={arcs} />
        {/* Fading overlay at bottom to gently blend the globe into the section */}
        <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />
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
