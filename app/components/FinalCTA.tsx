"use client";

import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import {
  Typography,
  Button,
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@/app/components/ui/custom-components";
import {
  CloudArrowUpIcon,
  DocumentArrowUpIcon,
  ChatBubbleBottomCenterTextIcon,
  ArrowPathIcon,
} from "@heroicons/react/24/outline";
import axios from "axios";
import { CAD_MIME_MAP } from "@/lib/constants";
import { toast } from "react-hot-toast";

const DropZone = ({ type }: { type: string }) => {
  const [isUploading, setIsUploading] = useState(false);
  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    if (acceptedFiles.length === 0) return;

    setIsUploading(true);
    const toastId = toast.loading(
      "Preparing your files for engineering review...",
    );

    try {
      const formData = new FormData();
      acceptedFiles.forEach((file) => {
        formData.append("files", file);
      });

      const url = process.env.NEXT_PUBLIC_FFP_BACKEND_URL!;
      const frontUrl = process.env.NEXT_PUBLIC_FFP_URL!;
      const response = await axios.post(`${url}/files/bulk`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.data?.uploadId) {
        toast.success("Ready! Redirecting to your instant quote...", {
          id: toastId,
        });
        window.open(
          `${frontUrl}/instant-quote?uploadId=${response.data.uploadId}`,
          "_blank",
        );
      } else {
        toast.error("Something went wrong. Please try again.", { id: toastId });
      }
    } catch (error) {
      console.error("Widget upload error: ", error);
      toast.error("Upload failed. Please check your connection.", {
        id: toastId,
      });
    } finally {
      setIsUploading(false);
    }
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: CAD_MIME_MAP,
    disabled: isUploading,
  });

  return (
    <div
      {...getRootProps()}
      className={`group relative flex flex-col items-center justify-center p-12 rounded-4xl border-2 border-dashed transition-all duration-700 cursor-pointer
        ${
          isDragActive
            ? "border-blue-500 bg-blue-50/50 scale-[1.01]"
            : "bg-white/40 backdrop-blur-xl border-blue-200 hover:bg-white hover:shadow-[0_40px_80px_rgba(59,130,246,0.1)]"
        } ${isUploading ? "opacity-60 cursor-not-allowed pointer-events-none" : ""}`}
    >
      <input {...getInputProps()} />

      <div className="absolute top-8 right-8 flex items-center gap-2 opacity-50">
        <div className="w-1 h-1 rounded-full bg-blue-600/20 group-hover:bg-blue-600 transition-colors" />
        <div className="h-px w-12 bg-linear-to-r from-blue-100/50 to-transparent" />
      </div>

      <div
        className={`mb-6 p-6 rounded-3xl transition-all duration-700 ${isDragActive ? "bg-blue-600 text-white shadow-xl shadow-blue-600/30" : "bg-white text-blue-600 shadow-sm shadow-blue-100 group-hover:bg-blue-50"}`}
      >
        {isUploading ? (
          <ArrowPathIcon className="w-10 h-10 animate-spin" />
        ) : type === "prototype" ? (
          <DocumentArrowUpIcon className="w-10 h-10" />
        ) : (
          <CloudArrowUpIcon className="w-10 h-10" />
        )}
      </div>

      <Typography
        variant="h4"
        color="black"
        className="text-xl font-bold mb-2 tracking-tight group-hover:text-blue-600 transition-colors"
      >
        {type === "prototype"
          ? "Upload Prototype Design"
          : "Upload Production Batch"}
      </Typography>
      <Typography className="text-gray-600 text-sm font-normal max-w-sm text-center">
        Drop your STEP, STP, or STL files here to receive an instant engineering
        review and quote.
      </Typography>
    </div>
  );
};

export function FinalCTA() {
  const [activeTab, setActiveTab] = useState("prototype");

  return (
    <section className="py-32 bg-white relative overflow-hidden flex flex-col items-center shrink-0">
      {/* Dynamic Background Effects */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-blue-50/40 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-indigo-50/30 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="relative p-12 md:p-20 rounded-[3rem] bg-blue-50/60 border border-blue-200/50 backdrop-blur-md shadow-[0_10px_60px_rgba(0,0,0,0.04)] overflow-hidden">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <Typography
              variant="small"
              className="font-bold uppercase tracking-[0.3em] mb-4 text-blue-600 bg-white/50 w-fit mx-auto px-4 py-1.5 rounded-full"
            >
              Ready to Accelerate?
            </Typography>
            <Typography
              variant="h2"
              color="black"
              className="text-4xl md:text-6xl font-extrabold tracking-tight mb-8 leading-tight"
            >
              Start Your <span className="text-blue-600">Product Journey</span>
            </Typography>
            <Typography className="text-gray-700 text-lg md:text-xl font-normal leading-relaxed max-w-2xl mx-auto">
              Upload your CAD files today and experience manufacturing that is
              faster, smarter, and fully transparent. From prototype to
              production.
            </Typography>
          </div>

          <div className="max-w-4xl mx-auto">
            <Tabs value={activeTab} onChange={(val: any) => setActiveTab(val)}>
              <div className="flex justify-center mb-8">
                <TabsHeader
                  className="bg-white/60 backdrop-blur-md p-1.5 rounded-full border border-blue-50 min-w-[320px] shadow-sm"
                  indicatorProps={{
                    className:
                      "bg-white shadow-[0_8px_30px_rgba(59,130,246,0.12)] rounded-full border border-blue-50",
                  }}
                >
                  <Tab
                    value="prototype"
                    className={`py-3 transition-all duration-500 font-bold tracking-tight text-sm
                      ${activeTab === "prototype" ? "text-blue-600" : "text-gray-400 hover:text-gray-600"}
                    `}
                  >
                    PROTOTYPE
                  </Tab>
                  <Tab
                    value="production"
                    className={`py-3 transition-all duration-500 font-bold tracking-tight text-sm
                      ${activeTab === "production" ? "text-blue-600" : "text-gray-400 hover:text-gray-600"}
                    `}
                  >
                    PRODUCTION
                  </Tab>
                </TabsHeader>
              </div>

              <TabsBody
                animate={{
                  initial: { y: 20, opacity: 0 },
                  mount: { y: 0, opacity: 1 },
                  unmount: { y: 20, opacity: 0 },
                }}
              >
                <TabPanel value="prototype">
                  <div className="grid md:grid-cols-12 gap-10 items-center">
                    <div className="md:col-span-4 text-left">
                      <div className="px-3 py-1 w-fit rounded-full bg-blue-50 border border-blue-100 text-[9px] font-black text-blue-600 uppercase tracking-widest mb-6">
                        TIER 1 • 1 - 500 PCS
                      </div>
                      <Typography
                        variant="h4"
                        color="black"
                        className="text-2xl font-bold mb-4 tracking-tight"
                      >
                        Rapid Testing
                      </Typography>
                      <Typography className="text-gray-700 text-[15px] font-normal leading-relaxed mb-8">
                        Get your functional parts in record time. Perfect for
                        R&D cycles and engineering validation.
                      </Typography>
                      <Button
                        variant="text"
                        color="blue"
                        className="flex items-center gap-2 p-0 normal-case font-bold hover:bg-transparent text-blue-600 hover:text-blue-700"
                      >
                        <ChatBubbleBottomCenterTextIcon className="w-5 h-5" />
                        Talk to an Expert
                      </Button>
                    </div>
                    <div className="md:col-span-8">
                      <DropZone type="prototype" />
                    </div>
                  </div>
                </TabPanel>
                <TabPanel value="production">
                  <div className="grid md:grid-cols-12 gap-10 items-center">
                    <div className="md:col-span-4 text-left">
                      <div className="px-3 py-1 w-fit rounded-full bg-blue-50 border border-blue-100 text-[9px] font-black text-blue-600 uppercase tracking-widest mb-6">
                        TIER 2 • 500+ PCS
                      </div>
                      <Typography
                        variant="h4"
                        color="black"
                        className="text-2xl font-bold mb-4 tracking-tight"
                      >
                        Mass Production
                      </Typography>
                      <Typography className="text-gray-700 text-[15px] font-normal leading-relaxed mb-8">
                        Scale your manufacturing with global-ready quality
                        control and optimized unit pricing.
                      </Typography>
                      <Button
                        variant="text"
                        color="blue"
                        className="flex items-center gap-2 p-0 normal-case font-bold hover:bg-transparent text-blue-600 hover:text-blue-700"
                      >
                        <ChatBubbleBottomCenterTextIcon className="w-5 h-5" />
                        Talk to an Expert
                      </Button>
                    </div>
                    <div className="md:col-span-8">
                      <DropZone type="production" />
                    </div>
                  </div>
                </TabPanel>
              </TabsBody>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
}
