import type { Client, Project, ProjectStatus } from "@/lib/types";
import { getClientById } from "@/lib/clients";
import { getProjectById, getProjectsByClient } from "@/lib/projects";
import { getStakeholdersForProject } from "@/lib/project-stakeholders";

export function projectStakeholderCount(projectId: string): number {
  return getStakeholdersForProject(projectId).length;
}

export function clientProjectCount(clientId: string): number {
  return getProjectsByClient(clientId).length;
}

export function clientStakeholderCount(clientId: string): number {
  return getProjectsByClient(clientId).reduce(
    (sum, project) => sum + projectStakeholderCount(project.id),
    0
  );
}

export function resolveProjectContext(projectId: string): {
  project: Project;
  client: Client;
} | null {
  const project = getProjectById(projectId);
  if (!project) return null;
  const client = getClientById(project.clientId);
  if (!client) return null;
  return { project, client };
}

export const STATUS_STYLES: Record<ProjectStatus, string> = {
  Active: "border-emerald-200 bg-emerald-50 text-emerald-800",
  Mobilizing: "border-sky-200 bg-sky-50 text-sky-800",
  Steering: "border-violet-200 bg-violet-50 text-violet-800",
  Closed: "border-zinc-200 bg-zinc-50 text-zinc-600",
};
