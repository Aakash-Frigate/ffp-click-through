"use client";

import { ThemeProvider } from "@material-tailwind/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider attribute="class" defaultTheme="light">
      <ThemeProvider>{children}</ThemeProvider>
    </NextThemesProvider>
  );
}
