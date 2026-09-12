"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function AppShell({
  children,
  crumb,
}: {
  children: ReactNode;
  crumb?: ReactNode;
}) {
  return (
    <div className="flex min-h-full flex-col bg-zinc-50">
      <div className="border-b border-zinc-200 bg-white">
        <div className="flex items-center justify-between gap-3 px-5 py-2.5">
          <div className="flex min-w-0 items-center gap-3">
            <Link
              href="/"
              className="shrink-0 text-sm font-semibold tracking-tight text-zinc-950 hover:text-zinc-700"
            >
              Stakeholder 360
            </Link>
            {crumb ? (
              <>
                <span className="text-zinc-300">/</span>
                <div className="min-w-0 truncate text-sm text-zinc-500">{crumb}</div>
              </>
            ) : null}
          </div>
          <nav className="flex items-center gap-1 text-xs font-medium">
            <Link
              href="/"
              className={cn(
                "rounded-md px-2.5 py-1.5 text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-950"
              )}
            >
              Portfolio
            </Link>
            <Link
              href="/clients"
              className="rounded-md px-2.5 py-1.5 text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-950"
            >
              Clients
            </Link>
            <Link
              href="/companies"
              className="rounded-md px-2.5 py-1.5 text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-950"
            >
              Companies
            </Link>
          </nav>
        </div>
      </div>
      {children}
    </div>
  );
}
