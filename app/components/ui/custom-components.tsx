import {
  Typography as MTTypography,
  Button as MTButton,
  Tabs as MTTabs,
  TabsHeader as MTTabsHeader,
  TabsBody as MTTabsBody,
  Tab as MTTab,
  TabPanel as MTTabPanel,
  List as MTList,
  ListItem as MTListItem,
  Menu as MTMenu,
  MenuList as MTMenuList,
  MenuItem as MTMenuItem,
  Collapse as MTCollapse,
} from "@material-tailwind/react";

export const Typography = ({ children, ...props }: any) => (
  <MTTypography
    {...props}
    placeholder=""
    onPointerEnterCapture={() => {}}
    onPointerLeaveCapture={() => {}}
    onResize={() => {}}
    onResizeCapture={() => {}}
  >
    {children}
  </MTTypography>
);

export const Button = ({ children, ...props }: any) => (
  <MTButton
    {...props}
    placeholder=""
    onPointerEnterCapture={() => {}}
    onPointerLeaveCapture={() => {}}
    onResize={() => {}}
    onResizeCapture={() => {}}
  >
    {children}
  </MTButton>
);

export const Tabs = ({ children, ...props }: any) => (
  <MTTabs
    {...props}
    onPointerEnterCapture={() => {}}
    onPointerLeaveCapture={() => {}}
  >
    {children}
  </MTTabs>
);

export const TabsHeader = ({ children, ...props }: any) => (
  <MTTabsHeader
    {...props}
    placeholder=""
    onPointerEnterCapture={() => {}}
    onPointerLeaveCapture={() => {}}
  >
    {children}
  </MTTabsHeader>
);

export const Tab = ({ children, ...props }: any) => (
  <MTTab
    {...props}
    placeholder=""
    onPointerEnterCapture={() => {}}
    onPointerLeaveCapture={() => {}}
  >
    {children}
  </MTTab>
);

export const TabsBody = ({ children, ...props }: any) => (
  <MTTabsBody
    {...props}
    placeholder=""
    onPointerEnterCapture={() => {}}
    onPointerLeaveCapture={() => {}}
  >
    {children}
  </MTTabsBody>
);

export const TabPanel = ({ children, ...props }: any) => (
  <MTTabPanel {...props} className="p-0 mt-8">
    {children}
  </MTTabPanel>
);

export const List = ({ children, ...props }: any) => (
  <MTList
    {...props}
    placeholder=""
    onPointerEnterCapture={() => {}}
    onPointerLeaveCapture={() => {}}
    onResize={() => {}}
    onResizeCapture={() => {}}
  >
    {children}
  </MTList>
);

export const ListItem = ({ children, ...props }: any) => (
  <MTListItem
    {...props}
    placeholder=""
    onPointerEnterCapture={() => {}}
    onPointerLeaveCapture={() => {}}
    onResize={() => {}}
    onResizeCapture={() => {}}
  >
    {children}
  </MTListItem>
);

export const Menu = ({ children, ...props }: any) => (
  <MTMenu
    {...props}
    placeholder=""
  >
    {children}
  </MTMenu>
);

export const MenuList = ({ children, ...props }: any) => (
  <MTMenuList
    {...props}
    placeholder=""
    onPointerEnterCapture={() => {}}
    onPointerLeaveCapture={() => {}}
    onResize={() => {}}
    onResizeCapture={() => {}}
  >
    {children}
  </MTMenuList>
);

export const MenuItem = ({ children, ...props }: any) => (
  <MTMenuItem
    {...props}
    placeholder=""
    onPointerEnterCapture={() => {}}
    onPointerLeaveCapture={() => {}}
    onResize={() => {}}
    onResizeCapture={() => {}}
  >
    {children}
  </MTMenuItem>
);

export const Collapse = ({ children, ...props }: any) => (
  <MTCollapse
    {...props}
  >
    {children}
  </MTCollapse>
);
