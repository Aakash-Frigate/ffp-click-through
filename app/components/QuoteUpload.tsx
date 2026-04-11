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
      className={`group relative flex flex-col items-center justify-center p-8 md:p-12 rounded-[2rem] border-2 border-dashed transition-all duration-700 cursor-pointer
        ${
          isDragActive
            ? "border-blue-500 bg-blue-50/50 scale-[1.01]"
            : "bg-white/40 backdrop-blur-xl border-blue-200 hover:bg-white hover:shadow-[0_40px_80px_rgba(59,130,246,0.1)]"
        } ${isUploading ? "opacity-60 cursor-not-allowed pointer-events-none" : ""}`}
    >
      <input {...getInputProps()} />

      <div className={`mb-6 p-5 rounded-2xl transition-all duration-700 ${isDragActive ? "bg-blue-600 text-white shadow-xl shadow-blue-600/30" : "bg-white text-blue-600 shadow-sm shadow-blue-100 group-hover:bg-blue-50"}`}>
        {isUploading ? (
          <ArrowPathIcon className="w-8 h-8 animate-spin" />
        ) : type === "prototype" ? (
          <DocumentArrowUpIcon className="w-8 h-8" />
        ) : (
          <CloudArrowUpIcon className="w-8 h-8" />
        )}
      </div>

      <Typography
        variant="h4"
        color="black"
        className="text-lg font-bold mb-2 tracking-tight group-hover:text-blue-600 transition-colors"
      >
        {type === "prototype"
          ? "Upload Prototype Design"
          : "Upload Production Batch"}
      </Typography>
      <Typography className="text-gray-500 text-xs font-normal max-w-[280px] text-center">
        Drop your STEP, STP, or STL files here to receive an instant engineering
        review and quote.
      </Typography>
    </div>
  );
};

export function QuoteUpload() {
  const [activeTab, setActiveTab] = useState("prototype");

  return (
    <div className="w-full max-w-4xl mx-auto">
      <Tabs value={activeTab} onChange={(val: any) => setActiveTab(val)}>
        <div className="flex justify-center mb-8">
          <TabsHeader
            className="bg-white/60 backdrop-blur-md p-1 rounded-full border border-blue-50 min-w-[280px] md:min-w-[320px] shadow-sm"
            indicatorProps={{
              className:
                "bg-white shadow-[0_8px_30px_rgba(59,130,246,0.12)] rounded-full border border-blue-50",
            }}
          >
            <Tab
              value="prototype"
              className={`py-2.5 transition-all duration-500 font-bold tracking-tight text-xs md:text-sm
                ${activeTab === "prototype" ? "text-blue-600" : "text-gray-400 hover:text-gray-600"}
              `}
            >
              PROTOTYPE
            </Tab>
            <Tab
              value="production"
              className={`py-2.5 transition-all duration-500 font-bold tracking-tight text-xs md:text-sm
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
            <DropZone type="prototype" />
          </TabPanel>
          <TabPanel value="production">
            <DropZone type="production" />
          </TabPanel>
        </TabsBody>
      </Tabs>
    </div>
  );
}
