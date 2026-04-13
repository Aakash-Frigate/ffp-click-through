"use client";

import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import {
  Typography,
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@/app/components/ui/custom-components";
import {
  CloudArrowUpIcon,
  DocumentArrowUpIcon,
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
      className={`group relative flex flex-col items-center justify-center p-8 md:p-10 rounded-4xl border transition-all duration-700 cursor-pointer overflow-hidden min-h-[280px]
        ${
          isDragActive
            ? "border-blue-400 bg-blue-50/80 scale-[1.02] shadow-[0_0_40px_rgba(59,130,246,0.15)]"
            : "border-white/50 bg-white/40 shadow-[inset_0_2px_20px_rgba(255,255,255,1)] hover:bg-white/60 hover:shadow-[0_20px_40px_-20px_rgba(59,130,246,0.15)] hover:border-blue-100"
        } ${isUploading ? "opacity-60 cursor-not-allowed pointer-events-none" : ""}`}
    >
      <input {...getInputProps()} />

      {/* Dashed Border Overlay */}
      <div
        className={`absolute inset-2 rounded-3xl border-2 border-dashed pointer-events-none transition-colors duration-500
        ${isDragActive ? "border-blue-400/50" : "border-blue-200/40 group-hover:border-blue-300/60"}
      `}
      />

      <div
        className={`relative mb-6 p-5 rounded-2xl transition-all duration-700 z-10 ${isDragActive ? "bg-blue-600 text-white shadow-xl shadow-blue-600/30 -translate-y-1" : "bg-linear-to-b from-white to-blue-50/50 text-blue-600 shadow-lg shadow-blue-900/5 group-hover:bg-blue-50/80 group-hover:-translate-y-1"}`}
      >
        {isUploading ? (
          <ArrowPathIcon className="w-8 h-8 animate-spin" />
        ) : type === "prototype" ? (
          <DocumentArrowUpIcon className="w-9 h-9" />
        ) : (
          <CloudArrowUpIcon className="w-9 h-9" />
        )}
      </div>

      <Typography
        variant="h4"
        color="black"
        className="relative z-10 text-xl font-bold mb-3 tracking-tight group-hover:text-blue-700 transition-colors"
      >
        {type === "prototype"
          ? "Upload Prototype Design"
          : "Upload Production Batch"}
      </Typography>
      <Typography className="relative z-10 text-slate-500 text-sm font-medium leading-relaxed max-w-[260px] text-center">
        Drop your STEP, STP, or STL files here to receive an instant engineering
        review & quote.
      </Typography>
    </div>
  );
};

export function QuoteUpload() {
  const [activeTab, setActiveTab] = useState("prototype");

  return (
    <div className="w-full max-w-md mx-auto relative group">
      {/* Premium Outer Card effect */}
      <div className="absolute inset-0 bg-white/40 backdrop-blur-3xl rounded-[2.5rem] shadow-[0_8px_32px_rgba(0,0,0,0.03)] border border-white/80 pointer-events-none" />
      <div className="absolute -inset-px bg-linear-to-b from-blue-100/50 to-transparent rounded-[2.5rem] -z-10 blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

      <div className="relative p-3 md:p-4 rounded-[2.5rem]">
        <Tabs value={activeTab} onChange={(val: any) => setActiveTab(val)}>
          <div className="flex justify-center mb-6 pt-2">
            <TabsHeader
              className="bg-slate-100/60 backdrop-blur-md p-1 rounded-full border border-white max-w-[280px] md:max-w-[320px] shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)]"
              indicatorProps={{
                className:
                  "bg-white shadow-[0_4px_12px_rgba(59,130,246,0.15)] rounded-full border border-blue-50/50",
              }}
            >
              <Tab
                value="prototype"
                className={`py-2.5 transition-all duration-500 font-bold tracking-tight text-xs md:text-sm z-10
                  ${activeTab === "prototype" ? "text-blue-700" : "text-slate-500 hover:text-slate-700"}
                `}
              >
                PROTOTYPE
              </Tab>
              <Tab
                value="production"
                className={`py-2.5 transition-all duration-500 font-bold tracking-tight text-xs md:text-sm z-10
                  ${activeTab === "production" ? "text-blue-700" : "text-slate-500 hover:text-slate-700"}
                `}
              >
                PRODUCTION
              </Tab>
            </TabsHeader>
          </div>

          <TabsBody
            animate={{
              initial: { y: 15, opacity: 0 },
              mount: { y: 0, opacity: 1 },
              unmount: { y: 15, opacity: 0 },
            }}
          >
            <TabPanel value="prototype" className="px-1 pb-1">
              <DropZone type="prototype" />
            </TabPanel>
            <TabPanel value="production" className="px-1 pb-1">
              <DropZone type="production" />
            </TabPanel>
          </TabsBody>
        </Tabs>
      </div>
    </div>
  );
}
