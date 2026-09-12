"use client";

import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { AddEntityDialog } from "@/components/portfolio/add-entity-dialog";
import { AppShell } from "@/components/portfolio/app-shell";
import { useAppData } from "@/lib/app-data";

export function ClientDirectory() {
  const { clients, getProjectsForClient, getStakeholders } = useAppData();

  return (
    <AppShell
      crumb={<span className="font-medium text-zinc-700">Clients</span>}
    >
      <header className="border-b border-zinc-200 bg-white px-5 py-6">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-zinc-950">
              Client database
            </h1>
            <p className="mt-1 text-sm text-zinc-500">
              {clients.length} accounts · relationship leads, industries, and live
              project counts
            </p>
          </div>
          <AddEntityDialog kind="client" />
        </div>
      </header>

      <main className="px-5 py-6">
        <div className="overflow-hidden rounded-xl border border-zinc-200 bg-white">
          <table className="w-full min-w-[720px] text-left text-sm">
            <thead className="border-b border-zinc-200 bg-zinc-50 text-[11px] font-medium tracking-wider text-zinc-500 uppercase">
              <tr>
                <th className="px-4 py-2.5 font-medium">Client</th>
                <th className="px-4 py-2.5 font-medium">Industry</th>
                <th className="px-4 py-2.5 font-medium">HQ</th>
                <th className="px-4 py-2.5 font-medium">Status</th>
                <th className="px-4 py-2.5 font-medium">Projects</th>
                <th className="px-4 py-2.5 font-medium">Stakeholders</th>
                <th className="px-4 py-2.5 font-medium">Lead</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100">
              {clients.map((client) => {
                const projectCount = getProjectsForClient(client.id).length;
                const stakeholderCount = getProjectsForClient(client.id).reduce(
                  (sum, project) => sum + getStakeholders(project.id).length,
                  0
                );
                return (
                  <tr key={client.id} className="hover:bg-zinc-50/80">
                    <td className="px-4 py-3">
                      <Link
                        href={`/clients/${client.id}`}
                        className="font-medium text-zinc-950 hover:underline"
                      >
                        {client.name}
                      </Link>
                      <p className="text-xs text-zinc-500">{client.ownership}</p>
                    </td>
                    <td className="px-4 py-3 text-xs text-zinc-600">
                      {client.industry}
                    </td>
                    <td className="px-4 py-3 text-xs text-zinc-600">{client.hq}</td>
                    <td className="px-4 py-3">
                      <Badge variant="outline" className="text-[10px]">
                        {client.status}
                      </Badge>
                    </td>
                    <td className="px-4 py-3 text-xs font-medium text-zinc-800">
                      {projectCount}
                    </td>
                    <td className="px-4 py-3 text-xs font-medium text-zinc-800">
                      {stakeholderCount}
                    </td>
                    <td className="px-4 py-3 text-xs text-zinc-600">
                      {client.relationshipLead}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </main>
    </AppShell>
  );
}
