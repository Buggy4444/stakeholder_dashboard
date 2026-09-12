import type { Project } from "@/lib/types";
import { CLIENTS, getClientById } from "@/lib/clients";

export const PROJECTS: Project[] = [
  {
    id: "horizon",
    clientId: "northstar",
    code: "HORIZON",
    title: "Project Horizon",
    subtitle: "Global Omnichannel Diagnostic",
    status: "Steering",
    phase: "Diagnostic",
    wave: "Wave 2 · Diagnostic",
    office: "Chicago HQ",
    startDate: "2026-06-02",
    endDate: null,
    steerCoDate: "2026-09-15",
    steerCoLabel: "SteerCo 3 · Value case & sequencing",
    confidentiality: "Client Confidential",
    engagementPartner: "Elena Park",
    engagementManager: "Tom Irvine",
    teamSize: 11,
    summary:
      "Map inventory truth, DC productivity, and commercial quick wins ahead of holiday freeze. Apex is observing SteerCo 3.",
  },
  {
    id: "northstar-cost",
    clientId: "northstar",
    code: "POLARIS",
    title: "Project Polaris",
    subtitle: "Cost-to-Serve Reset",
    status: "Mobilizing",
    phase: "Diagnostic",
    wave: "Wave 1 · Mobilization",
    office: "Chicago HQ",
    startDate: "2026-09-08",
    endDate: null,
    steerCoDate: "2026-09-29",
    steerCoLabel: "Kickoff SteerCo · Scope lock",
    confidentiality: "Client Confidential",
    engagementPartner: "Elena Park",
    engagementManager: "Priya Desai",
    teamSize: 6,
    summary:
      "Bottoms-up cost-to-serve by channel and category. Intended as a follow-on to Horizon value sequencing.",
  },
  {
    id: "helix-care",
    clientId: "helix",
    code: "CAREPATH",
    title: "Project CarePath",
    subtitle: "Ambulatory Care Pathway Redesign",
    status: "Active",
    phase: "Design",
    wave: "Wave 3 · Design",
    office: "Boston · Mass General West campus",
    startDate: "2026-03-10",
    endDate: null,
    steerCoDate: "2026-09-18",
    steerCoLabel: "Clinical SteerCo · Ortho / Spine pathway",
    confidentiality: "PHI Restricted · Client Confidential",
    engagementPartner: "Marcus Cole",
    engagementManager: "Aisha Rahman",
    teamSize: 9,
    summary:
      "Redesign orthopedic and spine ambulatory pathways to free OR capacity and cut wait times without eroding CMS quality scores.",
  },
  {
    id: "meridian-onboard",
    clientId: "meridian",
    code: "GATEWAY",
    title: "Project Gateway",
    subtitle: "Digital Onboarding Acceleration",
    status: "Active",
    phase: "Diagnostic",
    wave: "Wave 2 · Diagnostic",
    office: "Charlotte HQ",
    startDate: "2026-07-14",
    endDate: null,
    steerCoDate: "2026-09-22",
    steerCoLabel: "SteerCo 2 · Funnel & KYC capacity",
    confidentiality: "Client Confidential · SOC2",
    engagementPartner: "Sofia Alvarez",
    engagementManager: "Daniel Cho",
    teamSize: 8,
    summary:
      "Diagnose digital account-opening drop-off and KYC bottleneck; sequence build vs. vendor options for a Q1 board case.",
  },
  {
    id: "cascade-pricing",
    clientId: "cascade",
    code: "LEDGER",
    title: "Project Ledger",
    subtitle: "Pricing & Working-Capital Diagnostic",
    status: "Mobilizing",
    phase: "Diagnostic",
    wave: "Proposal · Soft kickoff",
    office: "Minneapolis",
    startDate: "2026-09-22",
    endDate: null,
    steerCoDate: "2026-10-06",
    steerCoLabel: "Proposal SteerCo",
    confidentiality: "Prospect Confidential",
    engagementPartner: "James Okada",
    engagementManager: "TBD",
    teamSize: 4,
    summary:
      "Prospect diagnostic on list-price leakage and inventory turns. Stakeholder map is light until SoW is signed.",
  },
];

export function getProjectById(id: string): Project | undefined {
  return PROJECTS.find((project) => project.id === id);
}

export function getProjectsByClient(clientId: string): Project[] {
  return PROJECTS.filter((project) => project.clientId === clientId);
}

export function getClientForProject(projectId: string) {
  const project = getProjectById(projectId);
  if (!project) return undefined;
  return getClientById(project.clientId);
}

export function getActiveClients() {
  return CLIENTS.filter((client) => client.status !== "Alumni");
}

export function getPortfolioStats() {
  const activeProjects = PROJECTS.filter((p) => p.status !== "Closed");
  return {
    clients: CLIENTS.length,
    activeClients: CLIENTS.filter((c) => c.status === "Active").length,
    projects: PROJECTS.length,
    activeProjects: activeProjects.length,
  };
}
