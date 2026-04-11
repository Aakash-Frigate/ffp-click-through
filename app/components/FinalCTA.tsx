"use client";

import {
  Typography,
  Button,
} from "@/app/components/ui/custom-components";
import {
  ChatBubbleBottomCenterTextIcon,
  ArrowLongRightIcon,
} from "@heroicons/react/24/outline";

export function FinalCTA() {
  return (
    <section className="py-32 bg-white relative overflow-hidden flex flex-col items-center shrink-0">
      {/* Dynamic Background Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10 w-full">
        <div className="relative p-16 md:p-24 rounded-[3rem] bg-white/60 border border-blue-100 backdrop-blur-md shadow-[0_20px_50px_rgba(59,130,246,0.05)] text-center">
          <Typography
            variant="small"
            className="font-bold uppercase tracking-[0.2em] mb-8 text-blue-600 bg-blue-50 w-fit mx-auto px-6 py-2 rounded-full"
          >
            Get Started
          </Typography>
          <Typography
            variant="h2"
            color="black"
            className="text-4xl md:text-6xl font-extrabold tracking-tight mb-8 leading-tight"
          >
            Experience the Future of <span className="text-blue-600">Manufacturing</span>
          </Typography>
          <Typography className="text-gray-600 text-lg md:text-xl font-normal leading-relaxed mb-12 max-w-3xl mx-auto">
            Scale your production with India&apos;s most advanced cloud manufacturing platform.
            Our engineers are ready to help you optimize your parts from prototype to production.
          </Typography>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              color="blue"
              className="rounded-full px-10 py-4 flex items-center justify-center gap-3 bg-blue-600 shadow-lg shadow-blue-500/20"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              Upload CAD Now
              <ArrowLongRightIcon className="w-5 h-5" strokeWidth={2.5} />
            </Button>
            <Button
              size="lg"
              variant="outlined"
              color="blue"
              className="rounded-full px-10 py-4 flex items-center justify-center gap-3 border-blue-200"
            >
              <ChatBubbleBottomCenterTextIcon className="w-5 h-5" strokeWidth={2} />
              Talk to an Expert
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
