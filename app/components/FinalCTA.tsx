"use client";

import React from "react";
import { Button, Typography } from "@material-tailwind/react";
import { ArrowUpTrayIcon, ChatBubbleBottomCenterTextIcon } from "@heroicons/react/24/outline";

export function FinalCTA() {
  return (
    <section className="py-24 bg-white relative overflow-hidden flex flex-col items-center shrink-0">
      {/* Liquid Glass Background Effect */}
      <div className="max-w-7xl mx-auto px-6 relative w-full">
        <div className="relative p-12 md:p-24 rounded-3xl bg-blue-600/10 border border-blue-100 overflow-hidden text-center group transition-all duration-700 hover:bg-blue-600/15">
          {/* Animated Background Blobs */}
          <div className="absolute top-[-20%] left-[-10%] w-[400px] h-[400px] bg-blue-200/40 rounded-full blur-[100px] pointer-events-none group-hover:scale-110 transition-transform duration-700" />
          <div className="absolute bottom-[-20%] right-[-10%] w-[350px] h-[350px] bg-indigo-200/40 rounded-full blur-[100px] pointer-events-none group-hover:scale-110 transition-transform duration-700" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-10">
            <div className="space-y-4">
              <Typography
                variant="small"
                placeholder=""
                className="font-bold uppercase tracking-widest text-[#3b82f6] shadow-sm bg-white/50 w-fit mx-auto px-4 py-1.5 rounded-full"
              >
                Ready to Get Started?
              </Typography>
              <Typography
                placeholder=""
                variant="h2"
                color="black"
                className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight"
              >
                <span className="text-[#3b82f6]">Accelerate Your</span>{" "}
                <span>Product Lifecycle</span>
              </Typography>
              <Typography placeholder="" className="text-gray-600 text-lg md:text-xl font-light leading-relaxed">
                Join 500+ innovators who trust Frigate for precision manufacturing 
                delivered globally. From prototype to production, we scale with you.
              </Typography>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
              {/* @ts-expect-error Material Tailwind React 19 typings issue */}
              <Button
                size="lg"
                color="blue"
                className="w-full sm:w-auto flex items-center justify-center gap-3 rounded-full bg-blue-600 hover:bg-blue-700 shadow-xl shadow-blue-500/20 hover:scale-105 transition-all text-sm px-10 py-5"
              >
                <ArrowUpTrayIcon className="w-5 h-5 text-white" strokeWidth={2.5} />
                Upload CAD for Instant Quote
              </Button>
              {/* @ts-expect-error Material Tailwind React 19 typings issue */}
              <Button
                variant="text"
                color="blue"
                className="w-full sm:w-auto flex items-center justify-center gap-3 rounded-full hover:bg-white text-blue-700 border border-blue-100 hover:border-blue-200 shadow-none px-10 py-5 text-sm transition-all"
              >
                <ChatBubbleBottomCenterTextIcon className="w-5 h-5" strokeWidth={2.5} />
                Talk to an Expert
              </Button>
            </div>

            <div className="text-[11px] text-gray-500 font-medium tracking-wide uppercase pt-10 flex items-center justify-center gap-8 border-t border-blue-200/30">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full" /> 
                ISO 9001:2015 Certified
              </span>
              <span className="hidden sm:inline-block w-px h-4 bg-blue-200" />
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full" /> 
                100% NDA Protected
              </span>
              <span className="hidden sm:inline-block w-px h-4 bg-blue-200" />
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-indigo-500 rounded-full" /> 
                Global Shipping
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
