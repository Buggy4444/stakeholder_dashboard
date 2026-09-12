"use client";

import type { ReactNode } from "react";
import { ThemeProvider } from "next-themes";
import { AppDataProvider } from "@/lib/app-data";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/sonner";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
      <AppDataProvider>
        <TooltipProvider delayDuration={200}>
          {children}
          <Toaster position="bottom-right" richColors closeButton />
        </TooltipProvider>
      </AppDataProvider>
    </ThemeProvider>
  );
}
