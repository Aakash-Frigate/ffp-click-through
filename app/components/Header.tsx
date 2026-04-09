/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  Collapse,
  List,
  Button,
} from "@/app/components/ui/custom-components";
import {
  Navbar,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import CapabilitiesMenu from "./menu/capabilited-menu";
import IndustriesMenu from "./menu/industries-menu";
import ResourcesMenu from "./menu/resource-menu";
import AboutMenu from "./menu/about-menu";

function NavList() {
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1 gap-2">
      <CapabilitiesMenu />
      <IndustriesMenu />
      <ResourcesMenu />
      <AboutMenu />
    </List>
  );
}

export function Header() {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
      <Navbar
        placeholder=""
        className="mx-auto max-w-screen-xl px-6 py-4 border-none shadow-none bg-transparent"
      >
        <div className="flex items-center justify-between">
          <a href="#" className="mr-4 cursor-pointer py-1.5">
            <Image
              src="https://frigate.ai/wp-content/uploads/2025/03/FastParts-logo-1024x351.png"
              alt="FastParts Logo"
              width={160}
              height={55}
              className="h-8 w-auto object-contain"
              priority
            />
          </a>
          <div className="hidden lg:block">
            <NavList />
          </div>
          <div className="hidden gap-4 lg:flex items-center">
            <Button
              placeholder=""
              variant="text"
              size="sm"
              color="blue-gray"
              className="rounded-full font-bold text-gray-600 hover:bg-gray-50 transition-all px-6 py-2.5 text-xs tracking-wide"
            >
              Become a Supplier
            </Button>
            <Button
              placeholder=""
              variant="gradient"
              size="sm"
              color="blue"
              className="rounded-full bg-blue-600 font-bold shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30 transition-all px-8 py-2.5 text-xs tracking-wide uppercase"
            >
              Instant Quote
            </Button>
          </div>
          <IconButton
            variant="text"
            className="lg:hidden"
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <XMarkIcon
                className="h-6 w-6 text-blue-gray-900"
                strokeWidth={2}
              />
            ) : (
              <Bars3Icon
                className="h-6 w-6 text-blue-gray-900"
                strokeWidth={2}
              />
            )}
          </IconButton>
        </div>
        <Collapse open={openNav}>
          <NavList />
          <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden pt-2">
            <Button
              variant="outlined"
              size="sm"
              color="blue"
              fullWidth
              className="rounded-full border-blue-200 bg-blue-50/50 text-blue-700"
            >
              Become a Supplier
            </Button>
            <Button
              variant="filled"
              size="sm"
              color="blue"
              fullWidth
              className="rounded-full"
            >
              Instant Quote
            </Button>
          </div>
        </Collapse>
      </Navbar>
    </header>
  );
}
