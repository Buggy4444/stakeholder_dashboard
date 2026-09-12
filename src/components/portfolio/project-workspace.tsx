"use client";

import Link from "next/link";
import { Stakeholder360 } from "@/components/dashboard/stakeholder-360";
import { Button } from "@/components/ui/button";
import { AppShell } from "@/components/portfolio/app-shell";
import { useAppData } from "@/lib/app-data";

export function ProjectWorkspace({ projectId }: { projectId: string }) {
  const { getProject, getClient, hydrated } = useAppData();
  const project = getProject(projectId);
  const client = project ? getClient(project.clientId) : undefined;

  if (!hydrated) {
    return (
      <AppShell crumb={<span className="text-zinc-400">Loading…</span>}>
        <div className="px-5 py-16 text-center text-sm text-zinc-500">
          Loading project…
        </div>
      </AppShell>
    );
  }

  if (!project || !client) {
    return (
      <AppShell
        crumb={
          <span className="flex items-center gap-2">
            <Link href="/" className="hover:text-zinc-800">
              Portfolio
            </Link>
            <span className="text-zinc-300">/</span>
            <span className="font-medium text-zinc-700">Not found</span>
          </span>
        }
      >
        <div className="px-5 py-16 text-center">
          <p className="text-sm font-medium text-zinc-900">Project not found</p>
          <p className="mt-1 text-sm text-zinc-500">
            This engagement is not in the local database.
          </p>
          <Button asChild className="mt-4" size="sm">
            <Link href="/">Back to portfolio</Link>
          </Button>
        </div>
      </AppShell>
    );
  }

  return (
    <Stakeholder360 project={project} client={client} />
  );
}
