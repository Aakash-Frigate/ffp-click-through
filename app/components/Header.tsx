/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
"use client";
import React, { useState } from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
  ChevronRightIcon,
  Square3Stack3DIcon,
  Cog6ToothIcon,
  WrenchIcon,
  BoltIcon,
  SparklesIcon,
  ArrowsPointingInIcon,
  CubeIcon,
  ViewfinderCircleIcon,
  LinkIcon,
  AdjustmentsHorizontalIcon,
  BeakerIcon,
  ArrowPathIcon,
  ArrowDownCircleIcon,
  CpuChipIcon,
  PlusCircleIcon,
  DocumentCheckIcon,
  MapIcon,
  TruckIcon,
  RocketLaunchIcon,
  ShieldCheckIcon,
  ShoppingBagIcon,
  SunIcon,
  FireIcon,
  BuildingLibraryIcon,
  GlobeAltIcon,
  DocumentTextIcon,
  QuestionMarkCircleIcon,
  ChartBarSquareIcon,
  VideoCameraIcon,
  CalendarDaysIcon,
} from "@heroicons/react/24/outline";

const resourcesData = [
  { name: "FAQs", desc: "Answers to common questions.", icon: QuestionMarkCircleIcon },
  { name: "Blogs", desc: "Latest industry insights and news.", icon: DocumentTextIcon },
  { name: "Case Study", desc: "Real-world manufacturing successes.", icon: ChartBarSquareIcon },
  { name: "Webinars", desc: "Live and recorded expert sessions.", icon: VideoCameraIcon },
  { name: "Events", desc: "Upcoming trade shows and gatherings.", icon: CalendarDaysIcon },
];

const industriesData = [
  { name: "Automotive", desc: "Engine mounts, chassis parts, and machined components for assembly lines.", icon: TruckIcon },
  { name: "Aerospace", desc: "High-strength fasteners, landing gear parts, and structural assemblies.", icon: RocketLaunchIcon },
  { name: "Defense", desc: "Forged housings, armor brackets, and mission-critical structural parts.", icon: ShieldCheckIcon },
  { name: "Robotics", desc: "Precision housings, actuator frames, and armature linkages for automation systems.", icon: CpuChipIcon },
  { name: "Consumer Goods", desc: "Metal frames, brackets, and assemblies for appliances and home equipment.", icon: ShoppingBagIcon },
  { name: "Electric Vehicles", desc: "Busbar holders, battery pack parts, and lightweight structural enclosures.", icon: BoltIcon },
  { name: "New Energy", desc: "Solar mounting parts, wind turbine brackets, and battery enclosures.", icon: SunIcon },
  { name: "Oil & Gas", desc: "Valve bodies, flange blocks, and downhole drilling components.", icon: FireIcon },
  { name: "Heavy Fabrication", desc: "Large welded frames, PEB structures, and assemblies for industrial equipment.", icon: BuildingLibraryIcon },
];

const capabilitiesData = {
  cncMachining: {
    title: "CNC Machining",
    items: [
      {
        name: "CNC Milling",
        desc: "Precision milling for complex shapes.",
        icon: Cog6ToothIcon,
      },
      {
        name: "CNC Turning",
        desc: "Rotational machining for cylindrical parts.",
        icon: ArrowPathIcon,
      },
      {
        name: "CNC Drilling",
        desc: "Accurate hole creation for varied materials.",
        icon: ArrowDownCircleIcon,
      },
      {
        name: "Advanced Machining",
        desc: "High-end multi-process machining.",
        icon: CpuChipIcon,
      },
      {
        name: "Wire EDM",
        desc: "Electrical discharge cutting for hard metals.",
        icon: BoltIcon,
      },
      {
        name: "CNC Grinding",
        desc: "Surface finish improvement and fine tolerances.",
        icon: Square3Stack3DIcon,
      },
      {
        name: "CNC Routing",
        desc: "High-speed routing operations.",
        icon: MapIcon,
      },
      {
        name: "Multi-Axis Machining",
        desc: "Complex 5-axis and above operations.",
        icon: CubeIcon,
      },
      {
        name: "Swiss Machining",
        desc: "Ultra-precise small part production.",
        icon: DocumentCheckIcon,
      },
      {
        name: "And More",
        desc: "Other specialized capabilities.",
        icon: PlusCircleIcon,
      },
    ],
  },
  sheetMetal: {
    title: "Sheet Metal Fabrication",
    items: [
      {
        name: "Laser Cutting",
        desc: "High precision cutting for flat materials.",
        icon: ViewfinderCircleIcon,
      },
      {
        name: "Plasma Cutting",
        desc: "Efficient cutting for thick metal plates.",
        icon: AdjustmentsHorizontalIcon,
      },
      {
        name: "Welding",
        desc: "Joining metals with high structural integrity.",
        icon: LinkIcon,
      },
      {
        name: "Sheet Cutting",
        desc: "Standard abrasive and shear cutting.",
        icon: ArrowsPointingInIcon,
      },
      {
        name: "Pneumatic Forming",
        desc: "Air-powered machinery for shape forming.",
        icon: WrenchIcon,
      },
      {
        name: "Sheet Bending",
        desc: "Angle manipulation and complex bending.",
        icon: Square3Stack3DIcon,
      },
      {
        name: "Water Jet Cutting",
        desc: "Cold cutting for sensitive materials.",
        icon: BeakerIcon,
      },
      {
        name: "Finishing",
        desc: "Removing sharp edges and polishing.",
        icon: SparklesIcon,
      },
    ],
  },
};

function CapabilitiesMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [activeTab, setActiveTab] = useState("cncMachining");

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
                  color="gray"
                  className="text-xs font-normal text-blue-gray-500"
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
                isMenuOpen ? "text-[#3b82f6] bg-blue-50/30" : "text-gray-700"
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

function IndustriesMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

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
              color="gray"
              className="text-xs font-normal text-blue-gray-500"
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
                isMenuOpen ? "text-[#3b82f6] bg-blue-50/30" : "text-gray-700"
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

function ResourcesMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const renderItems = (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-2 gap-y-2 p-2 outline-none">
      {resourcesData.map((item, index) => (
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
              color="gray"
              className="text-xs font-normal text-blue-gray-500"
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
                isMenuOpen ? "text-[#3b82f6] bg-blue-50/30" : "text-gray-700"
              }`}
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              Resources
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

function AboutMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const renderItems = (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-4 outline-none">
      {/* Column 1 - Offices */}
      <div className="space-y-4">
        <div>
          <Typography variant="small" color="blue-gray" className="font-bold border-b border-gray-200 pb-2 mb-3 text-xs uppercase">
            Our Offices
          </Typography>
          <div className="mb-4">
            <Typography variant="small" color="blue-gray" className="font-semibold text-sm">
              Registered Office
            </Typography>
            <Typography variant="small" color="gray" className="text-sm leading-relaxed mt-1">
              10-A, First Floor, V.V Complex, Prakash Nagar, 
              Thiruverumbur, Trichy-620013, Tamil Nadu, India.
            </Typography>
          </div>
          <div>
            <Typography variant="small" color="blue-gray" className="font-semibold text-sm">
              Operations Office
            </Typography>
            <Typography variant="small" color="gray" className="text-sm leading-relaxed mt-1">
              9/1, Poonthottam Nagar, Ramanandha Nagar, 
              Saravanampatti, Coimbatore-641035, Tamil Nadu, India.
            </Typography>
          </div>
        </div>
      </div>

      {/* Column 2 - Quick Links */}
      <div className="space-y-4">
         <div>
          <Typography variant="small" color="blue-gray" className="font-bold border-b border-gray-200 pb-2 mb-3 text-xs uppercase">
            Company
          </Typography>
          <ul className="text-sm text-gray-500 space-y-3 flex flex-col">
            <a href="https://frigate.ai/about-frigate/" target="_blank" rel="noreferrer" className="hover:text-blue-500 transition-colors">About Frigate</a>
            <a href="#" className="hover:text-blue-500 transition-colors">Contact Us</a>
            <a href="#" className="hover:text-blue-500 transition-colors">Investor Success</a>
            <a href="#" className="hover:text-blue-500 transition-colors">Locations</a>
            <a href="#" className="hover:text-blue-500 transition-colors">Careers</a>
          </ul>
        </div>
      </div>

      {/* Column 3 - Connect With Us */}
      <div className="space-y-4">
         <div>
          <Typography variant="small" color="blue-gray" className="font-bold border-b border-gray-200 pb-2 mb-3 text-xs uppercase">
            Connect With Us
          </Typography>
          <ul className="text-sm text-gray-500 space-y-3 flex flex-col">
            <a href="https://frigate.ai/?utm_source=ffp&utm_medium=ffp&utm_campaign=ffp" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-blue-500 transition-colors">
              <GlobeAltIcon className="w-5 h-5 text-gray-400" />
              <span>Official Site</span>
            </a>
            <a href="https://www.linkedin.com/company/frigates/posts/?utm_source=ffp&utm_medium=ffp&utm_campaign=ffp" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-blue-500 transition-colors">
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4 text-gray-400" aria-hidden="true">
                <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
              </svg>
              <span>LinkedIn</span>
            </a>
            <a href="https://x.com/Frigateindia/?utm_source=ffp&utm_medium=ffp&utm_campaign=ffp" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-blue-500 transition-colors">
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4 text-gray-400" aria-hidden="true">
                <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
              </svg>
              <span>X (Twitter)</span>
            </a>
            <a href="https://www.youtube.com/@frigatemanufacturing?utm_source=ffp&utm_medium=ffp&utm_campaign=ffp" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-blue-500 transition-colors">
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4 text-gray-400" aria-hidden="true">
                <path fillRule="evenodd" d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93-.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" clipRule="evenodd" />
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
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
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
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="https://frigate.ai/wp-content/uploads/2025/03/FastParts-logo-1024x351.png" 
              alt="FastParts Logo" 
              className="h-8 w-auto object-contain"
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
