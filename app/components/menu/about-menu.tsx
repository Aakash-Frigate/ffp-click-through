"use client";

import React, { useState } from "react";
import {
  Typography,
  ListItem,
  Menu,
  Collapse,
  MenuList,
} from "@/app/components/ui/custom-components";
import { MenuHandler } from "@material-tailwind/react";
import { ChevronDownIcon, GlobeAltIcon } from "@heroicons/react/24/outline";

export default function AboutMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const renderItems = (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-4 outline-none">
      {/* Column 1 - Offices */}
      <div className="space-y-4">
        <div>
          <Typography
            variant="small"
            color="blue-gray"
            className="font-bold border-b border-gray-200 pb-2 mb-3 text-xs uppercase"
          >
            Our Offices
          </Typography>
          <div className="mb-4">
            <Typography
              variant="small"
              color="blue-gray"
              className="font-semibold text-sm"
            >
              Registered Office
            </Typography>
            <Typography
              variant="small"
              color="gray"
              className="text-sm leading-relaxed mt-1 text-slate-600"
            >
              10-A, First Floor, V.V Complex, Prakash Nagar, Thiruverumbur,
              Trichy-620013, Tamil Nadu, India.
            </Typography>
          </div>
          <div>
            <Typography
              variant="small"
              color="blue-gray"
              className="font-semibold text-sm"
            >
              Operations Office
            </Typography>
            <Typography
              variant="small"
              color="gray"
              className="text-sm leading-relaxed mt-1 text-slate-600"
            >
              9/1, Poonthottam Nagar, Ramanandha Nagar, Saravanampatti,
              Coimbatore-641035, Tamil Nadu, India.
            </Typography>
          </div>
        </div>
      </div>

      {/* Column 2 - Quick Links */}
      <div className="space-y-4">
        <div>
          <Typography
            variant="small"
            color="blue-gray"
            className="font-bold border-b border-gray-200 pb-2 mb-3 text-xs uppercase"
          >
            Company
          </Typography>
          <ul className="text-sm text-slate-600 space-y-3 flex flex-col">
            <a
              href="https://frigate.ai/about-frigate/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-600 transition-colors"
            >
              About Frigate
            </a>
            <a href="#" className="hover:text-blue-600 transition-colors">
              Contact Us
            </a>
            <a href="#" className="hover:text-blue-600 transition-colors">
              Investor Success
            </a>
            <a href="#" className="hover:text-blue-600 transition-colors">
              Locations
            </a>
            <a href="#" className="hover:text-blue-600 transition-colors">
              Careers
            </a>
          </ul>
        </div>
      </div>

      {/* Column 3 - Connect With Us */}
      <div className="space-y-4">
        <div>
          <Typography
            variant="small"
            color="blue-gray"
            className="font-bold border-b border-gray-200 pb-2 mb-3 text-xs uppercase"
          >
            Connect With Us
          </Typography>
          <ul className="text-sm text-gray-500 space-y-3 flex flex-col">
            <a
              href="https://frigate.ai/?utm_source=ffp&utm_medium=ffp&utm_campaign=ffp"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 hover:text-blue-500 transition-colors"
            >
              <GlobeAltIcon className="w-5 h-5 text-gray-400" />
              <span>Official Site</span>
            </a>
            <a
              href="https://www.linkedin.com/company/frigates/posts/?utm_source=ffp&utm_medium=ffp&utm_campaign=ffp"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 hover:text-blue-500 transition-colors"
            >
              <svg
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-4 h-4 text-gray-400"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                  clipRule="evenodd"
                />
              </svg>
              <span>LinkedIn</span>
            </a>
            <a
              href="https://x.com/Frigateindia/?utm_source=ffp&utm_medium=ffp&utm_campaign=ffp"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 hover:text-blue-500 transition-colors"
            >
              <svg
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-4 h-4 text-gray-400"
                aria-hidden="true"
              >
                <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
              </svg>
              <span>X (Twitter)</span>
            </a>
            <a
              href="https://www.youtube.com/@frigatemanufacturing?utm_source=ffp&utm_medium=ffp&utm_campaign=ffp"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 hover:text-blue-500 transition-colors"
            >
              <svg
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-4 h-4 text-gray-400"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93-.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
                  clipRule="evenodd"
                />
              </svg>
              <span>YouTube</span>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );

  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 16 }}
        placement="bottom"
        allowHover={true}
        dismiss={{ itemPress: false }}
      >
        <MenuHandler>
          <Typography as="div" variant="small" className="font-medium">
            <ListItem
              placeholder=""
              className={`flex items-center gap-2 py-2.5 px-5 font-bold hover:bg-blue-50/50 focus:bg-blue-50/50 rounded-full transition-all text-xs tracking-wide ${
                isMenuOpen ? "text-[#3b82f6] bg-blue-50/30" : "text-gray-700"
              }`}
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              About Us
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>

        <MenuList className="hidden max-w-screen-xl w-[900px] rounded-xl lg:block border border-gray-200 bg-white shadow-xl shadow-blue-gray-900/5 p-2">
          {renderItems}
        </MenuList>
      </Menu>

      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </React.Fragment>
  );
}
