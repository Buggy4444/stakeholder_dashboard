/** @deprecated Prefer `@/lib/projects` + `@/lib/clients`. Kept for quick Horizon lookups. */
import { getProjectById, getClientForProject } from "@/lib/projects";

const horizon = getProjectById("horizon")!;
const client = getClientForProject("horizon")!;

export const ENGAGEMENT = {
  code: horizon.code,
  title: horizon.title,
  subtitle: horizon.subtitle,
  client: client.name,
  parent: "Apex Capital Partners",
  confidentiality: horizon.confidentiality,
  wave: horizon.wave,
  steerCoDate: horizon.steerCoDate!,
  steerCoLabel: horizon.steerCoLabel!,
  office: horizon.office,
} as const;
