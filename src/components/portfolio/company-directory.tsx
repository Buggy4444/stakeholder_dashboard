"use client";

import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { AddEntityDialog } from "@/components/portfolio/add-entity-dialog";
import { AppShell } from "@/components/portfolio/app-shell";
import { useAppData } from "@/lib/app-data";

export function CompanyDirectory() {
  const { companies, getClient } = useAppData();

  return (
    <AppShell
      crumb={<span className="font-medium text-zinc-700">Companies</span>}
    >
      <header className="border-b border-zinc-200 bg-white px-5 py-6">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-zinc-950">
              Company directory
            </h1>
            <p className="mt-1 text-sm text-zinc-500">
              {companies.length} organizations · clients, parents, affiliates, and
              vendors mapped across engagements
            </p>
          </div>
          <AddEntityDialog kind="company" />
        </div>
      </header>

      <main className="px-5 py-6">
        {companies.length === 0 ? (
          <div className="rounded-xl border border-dashed border-zinc-300 bg-white px-4 py-10 text-center text-sm text-zinc-500">
            No companies yet. Use Add Company to seed the directory.
          </div>
        ) : (
          <div className="overflow-hidden rounded-xl border border-zinc-200 bg-white">
            <table className="w-full min-w-[720px] text-left text-sm">
              <thead className="border-b border-zinc-200 bg-zinc-50 text-[11px] font-medium tracking-wider text-zinc-500 uppercase">
                <tr>
                  <th className="px-4 py-2.5 font-medium">Company</th>
                  <th className="px-4 py-2.5 font-medium">Type</th>
                  <th className="px-4 py-2.5 font-medium">Industry</th>
                  <th className="px-4 py-2.5 font-medium">HQ</th>
                  <th className="px-4 py-2.5 font-medium">Linked client</th>
                  <th className="px-4 py-2.5 font-medium">Website</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100">
                {companies.map((company) => {
                  const linked = company.clientId
                    ? getClient(company.clientId)
                    : undefined;
                  return (
                    <tr key={company.id} className="hover:bg-zinc-50/80">
                      <td className="px-4 py-3">
                        <p className="font-medium text-zinc-950">{company.name}</p>
                        <p className="line-clamp-2 text-xs text-zinc-500">
                          {company.notes}
                        </p>
                      </td>
                      <td className="px-4 py-3">
                        <Badge variant="outline" className="text-[10px]">
                          {company.type}
                        </Badge>
                      </td>
                      <td className="px-4 py-3 text-xs text-zinc-600">
                        {company.industry || "—"}
                      </td>
                      <td className="px-4 py-3 text-xs text-zinc-600">
                        {company.hq || "—"}
                      </td>
                      <td className="px-4 py-3 text-xs text-zinc-600">
                        {linked ? (
                          <Link
                            href={`/clients/${linked.id}`}
                            className="font-medium text-zinc-900 hover:underline"
                          >
                            {linked.shortName}
                          </Link>
                        ) : (
                          "—"
                        )}
                      </td>
                      <td className="px-4 py-3 text-xs text-zinc-600">
                        {company.website || "—"}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </main>
    </AppShell>
  );
}
