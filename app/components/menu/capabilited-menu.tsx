"use client";

import React, { useState } from "react";
import {
  Collapse,
  Typography,
  List,
  ListItem,
  Menu,
  MenuList,
  MenuItem,
} from "@/app/components/ui/custom-components";
import { MenuHandler } from "@material-tailwind/react";
import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { capabilitiesData } from "@/lib/constants";

export default function CapabilitiesMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [activeTab, setActiveTab] = useState<keyof typeof capabilitiesData>("cncMachining");

  const renderItems = (
    <div className="flex w-full max-w-5xl rounded-xl p-2 outline-none">
      {/* Sidebar for tabs */}
      <div className="w-64 border-r border-blue-50/50 pr-2">
        <Typography
          variant="small"
          color="blue-gray"
          className="font-bold px-4 pt-2 pb-1 text-xs"
        >
          CAPABILITIES
        </Typography>
        <List className="p-0 min-w-[200px]">
          <ListItem
            selected={activeTab === "cncMachining"}
            onClick={() => setActiveTab("cncMachining")}
            className={`flex items-center justify-between text-sm py-3 px-4 ${
              activeTab === "cncMachining"
                ? "bg-blue-50 text-blue-700"
                : "text-blue-gray-700 hover:bg-gray-50"
            }`}
          >
            <span className="font-semibold">CNC Machining</span>
            <ChevronRightIcon
              className={`h-4 w-4 ${activeTab === "cncMachining" ? "text-blue-500" : "text-gray-400"}`}
            />
          </ListItem>
          <ListItem
            selected={activeTab === "sheetMetal"}
            onClick={() => setActiveTab("sheetMetal")}
            className={`flex items-center justify-between text-sm py-3 px-4 ${
              activeTab === "sheetMetal"
                ? "bg-blue-50 text-blue-700"
                : "text-blue-gray-700 hover:bg-gray-50"
            }`}
          >
            <span className="font-semibold">Sheet Metal</span>
            <ChevronRightIcon
              className={`h-4 w-4 ${activeTab === "sheetMetal" ? "text-blue-500" : "text-gray-400"}`}
            />
          </ListItem>
        </List>
      </div>

      {/* Content for active tab */}
      <div className="flex-1 pl-6 py-2">
        <div className="grid grid-cols-2 gap-x-2 gap-y-2">
          {capabilitiesData[activeTab].items.map((item, index) => (
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
                  className: "h-6 w-6 text-blue-gray-900",
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
                isMenuOpen ? "text-[#3b82f6] bg-blue-50/30" : "text-slate-800"
              }`}
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              Capabilities
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
