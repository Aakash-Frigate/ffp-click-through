"use client";

import { Typography } from "@/app/components/ui/custom-components";
import Image from "next/image";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

import { motion } from "motion/react";

const materialData = [
  {
    name: "Aluminum Alloys",
    frigateRange: [25, 45],
    othersRange: [40, 70],
    status: "CNC Machining",
  },
  {
    name: "Stainless Steels",
    frigateRange: [35, 60],
    othersRange: [55, 90],
    status: "Precision CNC",
  },
  {
    name: "Engineering Plastics",
    frigateRange: [15, 30],
    othersRange: [25, 45],
    status: "3D Printing & Injection",
  },
  {
    name: "Industrial Polymers",
    frigateRange: [20, 40],
    othersRange: [35, 65],
    status: "MJF & SLS",
  },
  {
    name: "High-Performance Materials",
    frigateRange: [120, 200],
    othersRange: [180, 300],
    status: "Aerospace & Medical",
  },
];

export function MaterialComparison() {
  const calculateAdvantage = (frigate: number[], others: number[]) => {
    const frigateAvg = (frigate[0] + frigate[1]) / 2;
    const othersAvg = (others[0] + others[1]) / 2;
    const saving = ((othersAvg - frigateAvg) / othersAvg) * 100;
    return `-${Math.round(saving)}%`;
  };

  const formatPrice = (range: number[]) => `$${range[0]} - $${range[1]}`;

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Soft Background Accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50/20 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <Typography
            variant="small"
            className="font-bold uppercase tracking-[0.3em] mb-4 text-blue-600"
          >
            Pricing Intelligence
          </Typography>
          <Typography
            variant="h2"
            color="black"
            className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6"
          >
            <span className="text-[#3b82f6]">Competitive Pricing</span>{" "}
            <span>at Scale</span>
          </Typography>
          <Typography className="text-gray-600 text-lg max-w-2xl mx-auto font-normal leading-relaxed">
            Harness the power of our AI-driven global sourcing network. Compare Frigate&apos;s transparent pricing against traditional manufacturing vendors for common materials.
          </Typography>
        </div>

        {/* Compact Comparison Table */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="rounded-2xl bg-slate-50/40 backdrop-blur-xl border border-blue-100/30 overflow-hidden max-w-5xl mx-auto shadow-sm"
        >
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-blue-100/20 bg-blue-50/10">
                  <th className="px-6 py-4">
                    <Typography className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Material</Typography>
                  </th>
                  <th className="px-6 py-4">
                    <Image
                      src="https://frigate.ai/wp-content/uploads/2025/03/FastParts-logo-1024x351.png"
                      alt="Frigate Pricing"
                      width={100}
                      height={35}
                      className="h-5 w-auto object-contain"
                    />
                  </th>
                  <th className="px-6 py-4">
                    <Typography className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Market Avg</Typography>
                  </th>
                  <th className="px-6 py-4 text-right">
                    <Typography className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Advantage</Typography>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-blue-50/20">
                {materialData.map((item, index) => (
                  <tr 
                    key={index}
                    className="group hover:bg-white/60 transition-colors duration-300"
                  >
                    <td className="px-6 py-4">
                      <div className="flex flex-col">
                        <Typography className="text-base font-bold text-gray-900 leading-tight">{item.name}</Typography>
                        <Typography className="text-[10px] text-gray-400 font-medium uppercase tracking-tight">{item.status}</Typography>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <Typography className="text-xl font-black text-blue-600 tracking-tight">
                        {formatPrice(item.frigateRange)}
                      </Typography>
                    </td>
                    <td className="px-6 py-4">
                      <Typography className="text-sm font-medium text-gray-300 line-through">
                        {formatPrice(item.othersRange)}
                      </Typography>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="inline-flex items-center gap-1.5 group-hover:text-blue-600 transition-colors">
                        <Typography className="text-base font-bold text-emerald-500 group-hover:text-blue-600">
                          {calculateAdvantage(item.frigateRange, item.othersRange)}
                        </Typography>
                        <ArrowUpRightIcon className="w-3.5 h-3.5 text-emerald-500 group-hover:rotate-45 transition-transform" />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {/* Subtle Compact Footer */}
          <div className="px-6 py-6 bg-blue-50/10 border-t border-blue-100/20 flex flex-col sm:flex-row items-center justify-between gap-4">
            <Typography className="text-[10px] text-gray-400 max-w-sm italic">
              * Based on prototyping volumes. Large production quotes are weighted lower based on volume.
            </Typography>
            <button className="px-6 py-2 rounded-full bg-blue-600 hover:bg-blue-700 text-[10px] font-bold uppercase tracking-widest text-white transition-all shadow-md shadow-blue-500/10 active:scale-95">
              Get Quote
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
