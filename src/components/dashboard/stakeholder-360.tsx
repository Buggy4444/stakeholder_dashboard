"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { Users } from "lucide-react";
import { AddStakeholderDialog } from "@/components/dashboard/add-stakeholder-dialog";
import { EngagementHeader } from "@/components/dashboard/engagement-header";
import { FilterBar } from "@/components/dashboard/filter-bar";
import { StakeholderCard } from "@/components/dashboard/stakeholder-card";
import { StakeholderDossier } from "@/components/dashboard/stakeholder-dossier";
import { StakeholderTable } from "@/components/dashboard/stakeholder-table";
import { AppShell } from "@/components/portfolio/app-shell";
import { useAppData } from "@/lib/app-data";
import type {
  Client,
  Project,
  Stakeholder,
  StakeholderFilters,
  ViewMode,
} from "@/lib/types";

const EMPTY_FILTERS: StakeholderFilters = {
  query: "",
  stance: "All",
  influence: "All",
  department: "All",
  company: "All",
};

function matchesFilters(stakeholder: Stakeholder, filters: StakeholderFilters) {
  const haystack = [
    stakeholder.name,
    stakeholder.title,
    stakeholder.company,
    stakeholder.companyType,
    stakeholder.department,
    stakeholder.email,
    stakeholder.stance,
    stakeholder.reportsTo,
  ]
    .join(" ")
    .toLowerCase();

  const query = filters.query.trim().toLowerCase();
  if (query && !haystack.includes(query)) return false;
  if (filters.stance !== "All" && stakeholder.stance !== filters.stance) {
    return false;
  }
  if (filters.influence !== "All" && stakeholder.influence !== filters.influence) {
    return false;
  }
  if (
    filters.department !== "All" &&
    stakeholder.department !== filters.department
  ) {
    return false;
  }
  if (filters.company !== "All" && stakeholder.company !== filters.company) {
    return false;
  }
  return true;
}

export function Stakeholder360({
  project,
  client,
}: {
  project: Project;
  client: Client;
}) {
  const { updateStakeholders, getStakeholders } = useAppData();
  const stakeholders = getStakeholders(project.id);
  const [filters, setFilters] = useState<StakeholderFilters>(EMPTY_FILTERS);
  const [view, setView] = useState<ViewMode>("grid");
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [addOpen, setAddOpen] = useState(false);
  const searchRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setFilters(EMPTY_FILTERS);
    setSelectedId(null);
    setView("grid");
  }, [project.id]);

  const companies = useMemo(() => {
    return Array.from(
      new Set(stakeholders.map((stakeholder) => stakeholder.company))
    ).sort();
  }, [stakeholders]);

  const visible = useMemo(
    () => stakeholders.filter((stakeholder) => matchesFilters(stakeholder, filters)),
    [stakeholders, filters]
  );

  const selected = stakeholders.find((item) => item.id === selectedId) ?? null;

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key !== "/" || event.metaKey || event.ctrlKey || event.altKey) {
        return;
      }
      const target = event.target as HTMLElement | null;
      if (target && ["INPUT", "TEXTAREA", "SELECT"].includes(target.tagName)) {
        return;
      }
      event.preventDefault();
      searchRef.current?.focus();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  function toggleAction(stakeholderId: string, actionId: string) {
    updateStakeholders(project.id, (current) =>
      current.map((stakeholder) =>
        stakeholder.id === stakeholderId
          ? {
              ...stakeholder,
              actionItems: stakeholder.actionItems.map((item) =>
                item.id === actionId
                  ? { ...item, completed: !item.completed }
                  : item
              ),
            }
          : stakeholder
      )
    );
  }

  return (
    <AppShell
      crumb={
        <span className="flex min-w-0 items-center gap-2">
          <Link href={`/clients/${client.id}`} className="hover:text-zinc-800">
            {client.shortName}
          </Link>
          <span className="text-zinc-300">/</span>
          <span className="truncate font-medium text-zinc-700">
            {project.code}
          </span>
        </span>
      }
    >
      <EngagementHeader
        project={project}
        client={client}
        stakeholders={stakeholders}
        onAdd={() => setAddOpen(true)}
      />
      <FilterBar
        filters={filters}
        onChange={setFilters}
        view={view}
        onViewChange={setView}
        resultCount={visible.length}
        totalCount={stakeholders.length}
        searchRef={searchRef}
        companies={companies}
      />

      <main className="flex-1 px-5 py-5">
        {visible.length === 0 ? (
          <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-zinc-300 bg-white py-16 text-center">
            <Users className="mb-3 size-8 text-zinc-300" />
            <p className="text-sm font-medium text-zinc-800">
              No stakeholders match these filters
            </p>
            <p className="mt-1 max-w-sm text-xs text-zinc-500">
              Try a different name, company, stance, or department. Clear filters
              to return to the full engagement map.
            </p>
          </div>
        ) : view === "grid" ? (
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
            {visible.map((stakeholder) => (
              <StakeholderCard
                key={stakeholder.id}
                stakeholder={stakeholder}
                onOpen={setSelectedId}
              />
            ))}
          </div>
        ) : (
          <StakeholderTable stakeholders={visible} onOpen={setSelectedId} />
        )}
      </main>

      <StakeholderDossier
        stakeholder={selected}
        open={selectedId !== null}
        onOpenChange={(open) => {
          if (!open) setSelectedId(null);
        }}
        onToggleAction={toggleAction}
      />

      <AddStakeholderDialog
        open={addOpen}
        onOpenChange={setAddOpen}
        defaultCompany={client.name}
        onAdd={(stakeholder) =>
          updateStakeholders(project.id, (current) => [
            stakeholder,
            ...current,
          ])
        }
      />
    </AppShell>
  );
}
