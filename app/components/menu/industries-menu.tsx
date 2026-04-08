"use client";

import React, { useState } from "react";
import {
  Collapse,
  Typography,
  ListItem,
  Menu,
  MenuList,
  MenuItem,
} from "@/app/components/ui/custom-components";
import { MenuHandler } from "@material-tailwind/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { industriesData } from "@/lib/constants";

export default function IndustriesMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const renderItems = (
    <div className="grid grid-cols-3 gap-x-2 gap-y-2 p-2 outline-none">
      {industriesData.map((item, index) => (
        <MenuItem
          key={index}
          onClick={() => {
            setIsMenuOpen(false);
            setIsMobileMenuOpen(false);
          }}
          className="flex items-center gap-4 rounded-xl py-3 px-4 hover:bg-gray-50 focus:bg-gray-50 transition-colors"
        >
          <div className="flex items-center justify-center rounded-lg bg-gray-100/80 p-3">
            {React.createElement(item.icon, {
              strokeWidth: 2,
              className: "h-6 w-6 text-slate-900",
            })}
          </div>
          <div>
            <Typography
              variant="h6"
              color="blue-gray"
              className="text-sm font-bold mb-0.5"
            >
              {item.name}
            </Typography>
            <Typography
              variant="small"
              className="text-xs font-normal text-slate-600"
            >
              {item.desc}
            </Typography>
          </div>
        </MenuItem>
      ))}
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
                isMenuOpen ? "text-[#3b82f6] bg-blue-50/30" : "text-slate-700"
              }`}
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              Industries
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
