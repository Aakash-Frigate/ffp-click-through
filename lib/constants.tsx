import {
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

export const resourcesData = [
  {
    name: "FAQs",
    desc: "Answers to common questions.",
    icon: QuestionMarkCircleIcon,
  },
  {
    name: "Blogs",
    desc: "Latest industry insights and news.",
    icon: DocumentTextIcon,
  },
  {
    name: "Case Study",
    desc: "Real-world manufacturing successes.",
    icon: ChartBarSquareIcon,
  },
  {
    name: "Webinars",
    desc: "Live and recorded expert sessions.",
    icon: VideoCameraIcon,
  },
  {
    name: "Events",
    desc: "Upcoming trade shows and gatherings.",
    icon: CalendarDaysIcon,
  },
];

export const industriesData = [
  {
    name: "Automotive",
    desc: "Engine mounts, chassis parts, and machined components for assembly lines.",
    icon: TruckIcon,
  },
  {
    name: "Aerospace",
    desc: "High-strength fasteners, landing gear parts, and structural assemblies.",
    icon: RocketLaunchIcon,
  },
  {
    name: "Defense",
    desc: "Forged housings, armor brackets, and mission-critical structural parts.",
    icon: ShieldCheckIcon,
  },
  {
    name: "Robotics",
    desc: "Precision housings, actuator frames, and armature linkages for automation systems.",
    icon: CpuChipIcon,
  },
  {
    name: "Consumer Goods",
    desc: "Metal frames, brackets, and assemblies for appliances and home equipment.",
    icon: ShoppingBagIcon,
  },
  {
    name: "Electric Vehicles",
    desc: "Busbar holders, battery pack parts, and lightweight structural enclosures.",
    icon: BoltIcon,
  },
  {
    name: "New Energy",
    desc: "Solar mounting parts, wind turbine brackets, and battery enclosures.",
    icon: SunIcon,
  },
  {
    name: "Oil & Gas",
    desc: "Valve bodies, flange blocks, and downhole drilling components.",
    icon: FireIcon,
  },
  {
    name: "Heavy Fabrication",
    desc: "Large welded frames, PEB structures, and assemblies for industrial equipment.",
    icon: BuildingLibraryIcon,
  },
];

export const capabilitiesData = {
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

export const SocialLinks = {
  YoutubeFFP:
    "https://www.youtube.com/@frigatemanufacturing?utm_source=ffp&utm_medium=ffp&utm_campaign=ffp",
  LinkedinFFP:
    "https://www.linkedin.com/company/frigates/posts/?utm_source=ffp&utm_medium=ffp&utm_campaign=ffp",
  XFFP: "https://x.com/Frigateindia/?utm_source=ffp&utm_medium=ffp&utm_campaign=ffp",
  FrigateOfficialSiteFFP:
    "https://frigate.ai/?utm_source=ffp&utm_medium=ffp&utm_campaign=ffp",
};

export const services = [
  { label: "Heavy Engineering", href: "https://frigate.co.in/" },
  {
    label: "Casting",
    href: "https://frigate.ai/capabilities/casting-services/",
  },
  {
    label: "CNC Machining",
    href: "https://frigate.ai/capabilities/cnc-machining-services/",
  },
  {
    label: "Sheet Metal Fabrication",
    href: "https://frigate.ai/capabilities/sheet-metal-fabrication-services/",
  },
  {
    label: "Forging",
    href: "https://frigate.ai/capabilities/forging-services/",
  },
  {
    label: "Injection Molding",
    href: "https://frigate.ai/capabilities/injection-molding-services/",
  },
  {
    label: "Stamping",
    href: "https://frigate.ai/capabilities/stamping-services/",
  },
];
