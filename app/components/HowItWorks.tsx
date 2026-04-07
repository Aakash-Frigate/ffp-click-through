"use client";

import Image from "next/image";
import { Typography, Button } from "@material-tailwind/react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

const steps = [
  {
    title: "Upload CAD",
    description:
      "Upload your 3D models and start configuring. We support over 35 file formats including STL, OBJ, STEP, and ZIP.",
    image: "/icons/upload-quote.webp",
  },
  {
    title: "Start Production",
    description:
      "Choose your material, finish and color. Our network of certified manufacturers begins production immediately.",
    image: "/icons/production.webp",
  },
  {
    title: "Track Your Order",
    description:
      "Monitor your parts through every stage of production with real-time updates and quality inspections.",
    image: "/icons/tracking.webp",
  },
  {
    title: "Deliver the Parts",
    description:
      "Receive your precision-engineered parts at your doorstep with our fast and reliable global shipping.",
    image: "/icons/shipping.webp",
  },
];

export function HowItWorks() {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_bottom,rgba(59,130,246,0.01)_0%,transparent_100%)]" />
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-50/20 rounded-full blur-[120px] animate-pulse" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <Typography
            variant="small"
            className="font-bold uppercase tracking-widest mb-3 text-blue-600"
          >
            How it works
          </Typography>
          <Typography
            variant="h2"
            color="black"
            className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4"
          >
            <span className="text-[#3b82f6]">From Digital</span>{" "}
            <span>to Physical</span>
          </Typography>
          <Typography className="text-gray-500 text-lg max-w-2xl mx-auto font-light leading-relaxed">
            A high-precision workflow engineered for the modern manufacturer.
            From initial CAD upload to final global distribution.
          </Typography>
        </div>

        {/* Technical Timeline Layout */}
        <div className="relative">
          {/* Vertical Core Line */}
          <div className="absolute left-[30px] lg:left-1/2 top-0 bottom-0 w-px bg-linear-to-b from-blue-600 via-blue-100 to-transparent lg:-translate-x-1/2 hidden md:block" />

          <div className="space-y-24">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={index}
                  className={`flex flex-col md:flex-row items-center gap-12 lg:gap-24 relative ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Step Connector Node */}
                  <div className="absolute left-[30px] lg:left-1/2 w-4 h-4 rounded-full border-4 border-white bg-blue-600 shadow-[0_0_15px_rgba(37,99,235,0.4)] z-20 lg:-translate-x-1/2 hidden md:block" />

                  {/* Content Module */}
                  <div
                    className={`w-full md:w-1/2 ${isEven ? "md:text-right" : "md:text-left"}`}
                  >
                    <div
                      className={`inline-flex flex-col ${isEven ? "md:items-end" : "md:items-start"}`}
                    >
                      <div className="flex items-center gap-4 mb-4">
                        {!isEven && (
                          <div className="w-8 h-8 rounded-lg bg-blue-600/10 flex items-center justify-center text-blue-600 font-bold text-sm">
                            {index + 1}
                          </div>
                        )}

                        {isEven && (
                          <div className="w-8 h-8 rounded-lg bg-blue-600/10 flex items-center justify-center text-blue-600 font-bold text-sm">
                            {index + 1}
                          </div>
                        )}
                      </div>
                      <Typography
                        variant="h3"
                        color="black"
                        className="text-3xl font-extrabold mb-6 tracking-tight"
                      >
                        {step.title}
                      </Typography>
                      <Typography className="text-gray-500 text-lg font-light leading-relaxed max-w-md">
                        {step.description}
                      </Typography>

                      {index === 1 && (
                        <Button
                          variant="text"
                          className="mt-6 flex items-center gap-2 text-blue-600 hover:bg-blue-50/50 p-2 -ml-2 group lowercase tracking-tighter"
                        >
                          Explore materials{" "}
                          <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      )}
                    </div>
                  </div>

                  {/* Visual Module (Glass Orb) */}
                  <div className="w-full md:w-1/2 flex justify-center">
                    <div className="relative group">
                      {/* Technical Ornament */}
                      <div className="absolute -inset-8 border border-gray-100 rounded-full opacity-50 group-hover:scale-110 group-hover:opacity-100 transition-all duration-700 pointer-events-none" />
                      <div className="absolute -inset-4 border border-blue-50 rounded-full opacity-50 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700 pointer-events-none" />

                      {/* Glass Orb */}
                      <div className="w-64 h-64 lg:w-80 lg:h-80 bg-white/40 backdrop-blur-3xl border border-white/80 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.03)] flex items-center justify-center relative overflow-hidden group-hover:shadow-[0_40px_80px_rgba(59,130,246,0.1)] transition-all duration-700">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(59,130,246,0.08),transparent_70%)]" />
                        <Image
                          src={step.image}
                          alt={step.title}
                          width={440}
                          height={400}
                          style={{ width: "auto", height: "auto" }}
                          className="object-contain relative z-10 transform group-hover:scale-110 transition-transform duration-700"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Global CTA */}
        {/* <div className="mt-40 text-center">
          <Button
            size="lg"
            className="rounded-full bg-black hover:bg-blue-600 text-white px-12 py-6 flex items-center gap-4 mx-auto shadow-2xl transition-all duration-500 hover:-translate-y-2"
          >
            <SparklesIcon className="w-6 h-6 text-blue-400" />
            <span className="text-lg font-bold tracking-tight">
              Configure Your Part Now
            </span>
            <ArrowRightIcon className="w-5 h-5" />
          </Button>
          <Typography className="mt-8 text-gray-400 text-sm font-mono tracking-widest uppercase">
            Global Network Ready // Active Connection
          </Typography>
        </div> */}
      </div>
    </section>
  );
}
