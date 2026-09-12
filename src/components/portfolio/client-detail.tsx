"use client";

import Link from "next/link";
import { ArrowUpRight, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AddEntityDialog } from "@/components/portfolio/add-entity-dialog";
import { AppShell } from "@/components/portfolio/app-shell";
import { useAppData } from "@/lib/app-data";
import { STATUS_STYLES } from "@/lib/catalog";
import { formatDate } from "@/lib/format";
import { cn } from "@/lib/utils";

export function ClientDetail({ clientId }: { clientId: string }) {
  const { getClient, getProjectsForClient, getStakeholders, hydrated } =
    useAppData();
  const client = getClient(clientId);
  const projects = getProjectsForClient(clientId);

  if (!hydrated) {
    return (
      <AppShell crumb={<span className="text-zinc-400">Loading…</span>}>
        <div className="px-5 py-16 text-center text-sm text-zinc-500">
          Loading client…
        </div>
      </AppShell>
    );
  }

  if (!client) {
    return (
      <AppShell
        crumb={
          <span className="flex items-center gap-2">
            <Link href="/clients" className="hover:text-zinc-800">
              Clients
            </Link>
            <span className="text-zinc-300">/</span>
            <span className="font-medium text-zinc-700">Not found</span>
          </span>
        }
      >
        <div className="px-5 py-16 text-center">
          <p className="text-sm font-medium text-zinc-900">Client not found</p>
          <p className="mt-1 text-sm text-zinc-500">
            This account is not in the local database.
          </p>
          <Button asChild className="mt-4" size="sm">
            <Link href="/clients">Back to clients</Link>
          </Button>
        </div>
      </AppShell>
    );
  }

  const stakeholderCount = projects.reduce(
    (sum, project) => sum + getStakeholders(project.id).length,
    0
  );

  return (
    <AppShell
      crumb={
        <span className="flex items-center gap-2">
          <Link href="/clients" className="hover:text-zinc-800">
            Clients
          </Link>
          <span className="text-zinc-300">/</span>
          <span className="font-medium text-zinc-700">{client.shortName}</span>
        </span>
      }
    >
      <header className="border-b border-zinc-200 bg-white px-5 py-6">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="outline">{client.status}</Badge>
              <span className="text-xs text-zinc-400">
                Client since {client.since}
              </span>
            </div>
            <h1 className="mt-2 text-2xl font-semibold tracking-tight text-zinc-950">
              {client.name}
            </h1>
            <p className="mt-1 max-w-3xl text-sm leading-relaxed text-zinc-600">
              {client.description}
            </p>
          </div>
          <AddEntityDialog kind="project" defaultClientId={client.id} />
        </div>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <Meta label="Industry" value={client.industry} />
          <Meta label="HQ" value={client.hq} />
          <Meta label="Ownership" value={client.ownership} />
          <Meta label="Relationship lead" value={client.relationshipLead} />
          <Meta label="Revenue" value={client.annualRevenue} />
          <Meta label="Employees" value={client.employees} />
          <Meta label="Region" value={client.region} />
          <Meta label="Mapped stakeholders" value={String(stakeholderCount)} />
        </div>
      </header>

      <main className="px-5 py-6">
        <div className="mb-3 flex items-end justify-between">
          <div>
            <h2 className="text-sm font-semibold text-zinc-950">Projects</h2>
            <p className="text-xs text-zinc-500">
              {projects.length} engagement{projects.length === 1 ? "" : "s"} on
              this account
            </p>
          </div>
        </div>
        {projects.length === 0 ? (
          <div className="rounded-xl border border-dashed border-zinc-300 bg-white px-4 py-10 text-center text-sm text-zinc-500">
            No projects mapped yet. Add a project to open a Stakeholder 360.
          </div>
        ) : (
          <div className="grid gap-3 lg:grid-cols-2">
            {projects.map((project) => (
              <div
                key={project.id}
                className="rounded-xl border border-zinc-200 bg-white p-4"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-[10px] font-semibold tracking-wider text-zinc-400 uppercase">
                        {project.code}
                      </span>
                      <Badge
                        variant="outline"
                        className={cn(
                          "text-[10px]",
                          STATUS_STYLES[project.status]
                        )}
                      >
                        {project.status}
                      </Badge>
                      <Badge variant="outline" className="text-[10px]">
                        {project.phase}
                      </Badge>
                    </div>
                    <h3 className="mt-1 font-semibold text-zinc-950">
                      {project.title}
                    </h3>
                    <p className="text-xs text-zinc-500">{project.subtitle}</p>
                  </div>
                  <span className="inline-flex items-center gap-1 text-xs text-zinc-500">
                    <Users className="size-3.5" />
                    {getStakeholders(project.id).length}
                  </span>
                </div>
                <p className="mt-2 text-xs leading-relaxed text-zinc-600">
                  {project.summary}
                </p>
                <div className="mt-3 flex flex-wrap items-center justify-between gap-2">
                  <p className="text-[11px] text-zinc-400">
                    {project.wave}
                    {project.steerCoDate
                      ? ` · SteerCo ${formatDate(project.steerCoDate)}`
                      : ""}
                  </p>
                  <Button asChild size="sm">
                    <Link href={`/projects/${project.id}`}>
                      Open Stakeholder 360
                      <ArrowUpRight data-icon="inline-end" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </AppShell>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-zinc-200 bg-zinc-50/80 px-3 py-2">
      <p className="text-[10px] font-medium tracking-wider text-zinc-400 uppercase">
        {label}
      </p>
      <p className="mt-0.5 text-sm font-medium text-zinc-900">{value}</p>
    </div>
  );
}
