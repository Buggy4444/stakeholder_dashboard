"use client";

import type { Ref } from "react";
import { LayoutGrid, Search, Table2, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import type {
  Department,
  InfluenceLevel,
  Stance,
  StakeholderFilters,
  ViewMode,
} from "@/lib/types";

const STANCES: Array<Stance | "All"> = [
  "All",
  "Economic Buyer",
  "Champion",
  "Gatekeeper",
  "Neutral",
  "Skeptic",
];

const INFLUENCES: Array<InfluenceLevel | "All"> = ["All", "High", "Medium", "Low"];

const DEPARTMENTS: Array<Department | "All"> = [
  "All",
  "Finance",
  "Supply Chain",
  "Technology",
  "Commercial",
];

function ChipGroup<T extends string>({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: T[];
  value: T;
  onChange: (next: T) => void;
}) {
  return (
    <div className="flex min-w-0 flex-wrap items-center gap-1.5">
      <span className="mr-1 text-[10px] font-medium tracking-wider text-zinc-400 uppercase">
        {label}
      </span>
      {options.map((option) => {
        const active = value === option;
        return (
          <button
            key={option}
            type="button"
            onClick={() => onChange(option)}
            className={cn(
              "h-6 rounded-md border px-2 text-[11px] font-medium transition-colors",
              active
                ? "border-zinc-900 bg-zinc-900 text-white"
                : "border-zinc-200 bg-white text-zinc-600 hover:border-zinc-300 hover:bg-zinc-50"
            )}
          >
            {option === "Skeptic" ? "Skeptic" : option}
          </button>
        );
      })}
    </div>
  );
}

export function FilterBar({
  filters,
  onChange,
  view,
  onViewChange,
  resultCount,
  totalCount,
  searchRef,
  companies,
}: {
  filters: StakeholderFilters;
  onChange: (next: StakeholderFilters) => void;
  view: ViewMode;
  onViewChange: (view: ViewMode) => void;
  resultCount: number;
  totalCount: number;
  searchRef?: Ref<HTMLInputElement>;
  companies: string[];
}) {
  const hasActive =
    filters.query.trim() !== "" ||
    filters.stance !== "All" ||
    filters.influence !== "All" ||
    filters.department !== "All" ||
    filters.company !== "All";

  return (
    <div className="space-y-3 border-b border-zinc-200 bg-zinc-50/80 px-5 py-3">
      <div className="flex flex-col gap-2 lg:flex-row lg:items-center lg:justify-between">
        <div className="relative max-w-md flex-1">
          <Search className="pointer-events-none absolute top-1/2 left-2.5 size-3.5 -translate-y-1/2 text-zinc-400" />
          <Input
            ref={searchRef}
            value={filters.query}
            onChange={(event) =>
              onChange({ ...filters, query: event.target.value })
            }
            placeholder="Search name, company, role, or department…"
            className="bg-white pl-8"
          />
          <kbd className="pointer-events-none absolute top-1/2 right-2 hidden -translate-y-1/2 rounded border border-zinc-200 bg-zinc-50 px-1.5 py-0.5 font-mono text-[10px] text-zinc-400 sm:inline">
            /
          </kbd>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs text-zinc-500">
            {resultCount} of {totalCount}
          </span>
          {hasActive && (
            <Button
              variant="ghost"
              size="xs"
              onClick={() =>
                onChange({
                  query: "",
                  stance: "All",
                  influence: "All",
                  department: "All",
                  company: "All",
                })
              }
            >
              <X data-icon="inline-start" />
              Clear
            </Button>
          )}
          <div className="inline-flex rounded-lg border border-zinc-200 bg-white p-0.5">
            <Button
              variant={view === "grid" ? "secondary" : "ghost"}
              size="icon-xs"
              aria-label="Grid view"
              aria-pressed={view === "grid"}
              onClick={() => onViewChange("grid")}
            >
              <LayoutGrid />
            </Button>
            <Button
              variant={view === "table" ? "secondary" : "ghost"}
              size="icon-xs"
              aria-label="Table view"
              aria-pressed={view === "table"}
              onClick={() => onViewChange("table")}
            >
              <Table2 />
            </Button>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2 xl:flex-row xl:flex-wrap xl:items-center xl:gap-x-5 xl:gap-y-2">
        <ChipGroup
          label="Stance"
          options={STANCES}
          value={filters.stance}
          onChange={(stance) => onChange({ ...filters, stance })}
        />
        <ChipGroup
          label="Influence"
          options={INFLUENCES}
          value={filters.influence}
          onChange={(influence) => onChange({ ...filters, influence })}
        />
        <ChipGroup
          label="Department"
          options={DEPARTMENTS}
          value={filters.department}
          onChange={(department) => onChange({ ...filters, department })}
        />
        <ChipGroup
          label="Company"
          options={["All", ...companies]}
          value={filters.company}
          onChange={(company) => onChange({ ...filters, company })}
        />
      </div>
    </div>
  );
}
