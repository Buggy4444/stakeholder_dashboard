"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import {
  CalendarClock,
  Plus,
  ShieldAlert,
  Users,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { daysFromToday, formatDate } from "@/lib/format";
import type { Client, Project, Stakeholder } from "@/lib/types";

function KpiChip({
  icon,
  label,
  value,
  hint,
  tone = "default",
}: {
  icon: ReactNode;
  label: string;
  value: string | number;
  hint?: string;
  tone?: "default" | "positive" | "risk" | "calendar";
}) {
  const toneClass = {
    default: "text-zinc-900",
    positive: "text-emerald-700",
    risk: "text-rose-700",
    calendar: "text-blue-700",
  }[tone];

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <div className="flex cursor-default items-center gap-2 rounded-lg border border-zinc-200 bg-white px-2.5 py-1.5 shadow-xs">
          <span className="text-zinc-400">{icon}</span>
          <span className="flex flex-col leading-none">
            <span className="text-[10px] font-medium tracking-wider text-zinc-500 uppercase">
              {label}
            </span>
            <span className={`mt-0.5 text-sm font-semibold ${toneClass}`}>
              {value}
            </span>
          </span>
        </div>
      </TooltipTrigger>
      {hint ? <TooltipContent>{hint}</TooltipContent> : null}
    </Tooltip>
  );
}

export function EngagementHeader({
  project,
  client,
  stakeholders,
  onAdd,
}: {
  project: Project;
  client: Client;
  stakeholders: Stakeholder[];
  onAdd: () => void;
}) {
  const champions = stakeholders.filter((s) => s.stance === "Champion").length;
  const risks = stakeholders.filter((s) => s.stance === "Skeptic").length;
  const steerCoIn = project.steerCoDate
    ? daysFromToday(project.steerCoDate)
    : null;

  return (
    <header className="border-b border-zinc-200 bg-white">
      <div className="flex items-center justify-between gap-3 border-b border-zinc-100 px-5 py-1.5 text-[11px] text-zinc-500">
        <div className="flex min-w-0 items-center gap-2">
          <Link href="/" className="font-medium text-zinc-700 hover:underline">
            Portfolio
          </Link>
          <span className="text-zinc-300">/</span>
          <Link
            href={`/clients/${client.id}`}
            className="truncate font-medium tracking-wide text-zinc-700 uppercase hover:underline"
          >
            {client.name}
          </Link>
          <span className="text-zinc-300">/</span>
          <span className="truncate">{project.wave}</span>
          <span className="text-zinc-300">/</span>
          <span className="truncate">{project.office}</span>
        </div>
        <span className="shrink-0 rounded-md border border-zinc-200 bg-zinc-50 px-1.5 py-0.5 font-medium tracking-wide text-zinc-600 uppercase">
          {project.confidentiality}
        </span>
      </div>

      <div className="flex flex-col gap-4 px-5 py-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="min-w-0">
          <p className="text-[11px] font-medium tracking-[0.14em] text-zinc-400 uppercase">
            Stakeholder 360 · {project.code}
          </p>
          <h1 className="mt-0.5 truncate text-xl font-semibold tracking-tight text-zinc-950">
            {project.title}
            <span className="mx-2 font-normal text-zinc-300">|</span>
            <span className="font-medium text-zinc-600">{project.subtitle}</span>
          </h1>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <KpiChip
            icon={<Users className="size-3.5" />}
            label="Total stakeholders"
            value={stakeholders.length}
            hint="Mapped executives on this engagement"
          />
          <KpiChip
            icon={<Sparkles className="size-3.5" />}
            label="Champions"
            value={champions}
            tone="positive"
            hint="Active sponsors who will carry the case in the room"
          />
          <KpiChip
            icon={<ShieldAlert className="size-3.5" />}
            label="Skeptics / risks"
            value={risks}
            tone="risk"
            hint="Executives who can slow or block the next wave"
          />
          {steerCoIn !== null && project.steerCoDate ? (
            <KpiChip
              icon={<CalendarClock className="size-3.5" />}
              label="Next key SteerCo"
              value={steerCoIn <= 0 ? "Today" : `in ${steerCoIn} days`}
              tone="calendar"
              hint={`${project.steerCoLabel ?? "SteerCo"} · ${formatDate(project.steerCoDate, true)}`}
            />
          ) : null}
          <Button size="sm" className="ml-1" onClick={onAdd}>
            <Plus data-icon="inline-start" />
            Add Stakeholder
          </Button>
        </div>
      </div>
    </header>
  );
}
