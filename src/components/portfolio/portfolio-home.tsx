"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Building2,
  FolderKanban,
  Users,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  AddEntityDialog,
  AddEntityMenu,
} from "@/components/portfolio/add-entity-dialog";
import { AppShell } from "@/components/portfolio/app-shell";
import { useAppData } from "@/lib/app-data";
import { STATUS_STYLES } from "@/lib/catalog";
import { formatDate } from "@/lib/format";
import { cn } from "@/lib/utils";

function Stat({
  label,
  value,
  icon,
}: {
  label: string;
  value: number;
  icon: ReactNode;
}) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-zinc-200 bg-white px-4 py-3">
      <span className="text-zinc-400">{icon}</span>
      <div>
        <p className="text-[10px] font-medium tracking-wider text-zinc-400 uppercase">
          {label}
        </p>
        <p className="text-xl font-semibold tracking-tight text-zinc-950">{value}</p>
      </div>
    </div>
  );
}

export function PortfolioHome() {
  const {
    clients,
    projects,
    companies,
    getProjectsForClient,
    getStakeholders,
    portfolioStats,
  } = useAppData();

  const activeProjects = projects.filter((p) => p.status !== "Closed");
  const activeClients = clients.filter((c) => c.status === "Active");

  function clientProjectCount(clientId: string) {
    return getProjectsForClient(clientId).length;
  }

  function clientStakeholderCount(clientId: string) {
    return getProjectsForClient(clientId).reduce(
      (sum, project) => sum + getStakeholders(project.id).length,
      0
    );
  }

  return (
    <AppShell>
      <header className="border-b border-zinc-200 bg-white px-5 py-6">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="text-[11px] font-medium tracking-[0.14em] text-zinc-400 uppercase">
              Firm portfolio
            </p>
            <h1 className="mt-1 text-2xl font-semibold tracking-tight text-zinc-950">
              Clients & engagements
            </h1>
            <p className="mt-1 max-w-2xl text-sm text-zinc-500">
              Client database and live project map. Add accounts, engagements, or
              ecosystem companies, then open any project to work its stakeholder
              360.
            </p>
          </div>
          <AddEntityMenu />
        </div>
        <div className="mt-5 grid grid-cols-2 gap-3 lg:grid-cols-5">
          <Stat
            label="Clients"
            value={portfolioStats.clients}
            icon={<Building2 className="size-4" />}
          />
          <Stat
            label="Active clients"
            value={portfolioStats.activeClients}
            icon={<Building2 className="size-4" />}
          />
          <Stat
            label="Projects"
            value={portfolioStats.projects}
            icon={<FolderKanban className="size-4" />}
          />
          <Stat
            label="Active projects"
            value={portfolioStats.activeProjects}
            icon={<BriefcaseBusiness className="size-4" />}
          />
          <Stat
            label="Companies"
            value={portfolioStats.companies}
            icon={<Users className="size-4" />}
          />
        </div>
      </header>

      <main className="grid flex-1 gap-6 px-5 py-6 xl:grid-cols-[1.1fr_1fr]">
        <section className="space-y-3">
          <div className="flex items-end justify-between gap-3">
            <div>
              <h2 className="text-sm font-semibold text-zinc-950">Client database</h2>
              <p className="text-xs text-zinc-500">
                Relationship context across the book of business
              </p>
            </div>
            <Button asChild variant="outline" size="sm">
              <Link href="/clients">
                View all
                <ArrowUpRight data-icon="inline-end" />
              </Link>
            </Button>
          </div>
          <div className="overflow-hidden rounded-xl border border-zinc-200 bg-white">
            <ul className="divide-y divide-zinc-100">
              {activeClients.map((client) => (
                <li key={client.id}>
                  <Link
                    href={`/clients/${client.id}`}
                    className="flex items-start justify-between gap-4 px-4 py-3.5 transition-colors hover:bg-zinc-50"
                  >
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <p className="font-medium text-zinc-950">{client.name}</p>
                        <Badge variant="outline" className="text-[10px]">
                          {client.status}
                        </Badge>
                      </div>
                      <p className="mt-0.5 text-xs text-zinc-500">
                        {client.industry} · {client.hq}
                      </p>
                      <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-zinc-600">
                        {client.description}
                      </p>
                      <div className="mt-2 flex flex-wrap gap-1.5">
                        {client.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-md border border-zinc-200 bg-zinc-50 px-1.5 py-0.5 text-[10px] font-medium text-zinc-600"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="shrink-0 text-right text-[11px] text-zinc-500">
                      <p>
                        <span className="font-semibold text-zinc-800">
                          {clientProjectCount(client.id)}
                        </span>{" "}
                        projects
                      </p>
                      <p className="mt-0.5">
                        <span className="font-semibold text-zinc-800">
                          {clientStakeholderCount(client.id)}
                        </span>{" "}
                        stakeholders
                      </p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <p className="text-[11px] text-zinc-400">
            {companies.length} companies in the ecosystem directory ·{" "}
            <Link href="/companies" className="underline hover:text-zinc-700">
              browse
            </Link>
          </p>
        </section>

        <section className="space-y-3">
          <div className="flex items-end justify-between gap-3">
            <div>
              <h2 className="text-sm font-semibold text-zinc-950">Active projects</h2>
              <p className="text-xs text-zinc-500">
                Open a project to enter its stakeholder map
              </p>
            </div>
            <AddEntityDialog
              kind="project"
              triggerVariant="outline"
              triggerSize="sm"
            />
          </div>
          <div className="space-y-2.5">
            {activeProjects.map((project) => {
              const client = clients.find((c) => c.id === project.clientId);
              const count = getStakeholders(project.id).length;
              return (
                <Link
                  key={project.id}
                  href={`/projects/${project.id}`}
                  className="block rounded-xl border border-zinc-200 bg-white p-4 transition-all hover:-translate-y-0.5 hover:border-zinc-300"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <p className="text-[10px] font-semibold tracking-wider text-zinc-400 uppercase">
                          {project.code}
                        </p>
                        <Badge
                          variant="outline"
                          className={cn("text-[10px]", STATUS_STYLES[project.status])}
                        >
                          {project.status}
                        </Badge>
                      </div>
                      <h3 className="mt-1 font-semibold tracking-tight text-zinc-950">
                        {project.title}
                        <span className="mx-1.5 font-normal text-zinc-300">|</span>
                        <span className="font-medium text-zinc-600">
                          {project.subtitle}
                        </span>
                      </h3>
                      <p className="mt-0.5 text-xs text-zinc-500">
                        {client?.name} · {project.wave} · {project.office}
                      </p>
                    </div>
                    <div className="flex shrink-0 items-center gap-1 text-xs text-zinc-500">
                      <Users className="size-3.5" />
                      {count}
                    </div>
                  </div>
                  <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-zinc-600">
                    {project.summary}
                  </p>
                  <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] text-zinc-400">
                    <span>Partner {project.engagementPartner}</span>
                    <span>·</span>
                    <span>EM {project.engagementManager}</span>
                    {project.steerCoDate ? (
                      <>
                        <span>·</span>
                        <span>
                          Next SteerCo {formatDate(project.steerCoDate)}
                        </span>
                      </>
                    ) : null}
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      </main>
    </AppShell>
  );
}
