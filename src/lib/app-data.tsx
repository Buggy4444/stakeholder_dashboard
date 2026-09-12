"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { CLIENTS } from "@/lib/clients";
import { COMPANIES } from "@/lib/companies";
import { PROJECTS } from "@/lib/projects";
import { STAKEHOLDERS_BY_PROJECT } from "@/lib/project-stakeholders";
import type { Client, Company, Project, Stakeholder } from "@/lib/types";

const STORAGE_KEY = "stakeholder-360-db-v1";

type StakeholdersByProject = Record<string, Stakeholder[]>;

interface AppDataState {
  clients: Client[];
  projects: Project[];
  companies: Company[];
  stakeholdersByProject: StakeholdersByProject;
}

interface AppDataContextValue extends AppDataState {
  hydrated: boolean;
  addClient: (client: Client) => void;
  addProject: (project: Project) => void;
  addCompany: (company: Company) => void;
  addStakeholder: (projectId: string, stakeholder: Stakeholder) => void;
  updateStakeholders: (
    projectId: string,
    updater: (current: Stakeholder[]) => Stakeholder[]
  ) => void;
  getClient: (id: string) => Client | undefined;
  getProject: (id: string) => Project | undefined;
  getCompany: (id: string) => Company | undefined;
  getProjectsForClient: (clientId: string) => Project[];
  getStakeholders: (projectId: string) => Stakeholder[];
  portfolioStats: {
    clients: number;
    activeClients: number;
    projects: number;
    activeProjects: number;
    companies: number;
  };
}

const AppDataContext = createContext<AppDataContextValue | null>(null);

function seedState(): AppDataState {
  return {
    clients: CLIENTS,
    projects: PROJECTS,
    companies: COMPANIES,
    stakeholdersByProject: { ...STAKEHOLDERS_BY_PROJECT },
  };
}

function loadState(): AppDataState {
  const seed = seedState();
  if (typeof window === "undefined") return seed;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return seed;
    const parsed = JSON.parse(raw) as Partial<AppDataState>;
    return {
      clients: parsed.clients?.length ? parsed.clients : seed.clients,
      projects: parsed.projects?.length ? parsed.projects : seed.projects,
      companies: parsed.companies?.length ? parsed.companies : seed.companies,
      stakeholdersByProject: parsed.stakeholdersByProject
        ? { ...seed.stakeholdersByProject, ...parsed.stakeholdersByProject }
        : seed.stakeholdersByProject,
    };
  } catch {
    return seed;
  }
}

function slugify(value: string): string {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 48);
}

export function createId(prefix: string, name: string): string {
  return `${prefix}-${slugify(name) || "item"}-${Date.now().toString(36)}`;
}

export function AppDataProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<AppDataState>(seedState);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setState(loadState());
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [state, hydrated]);

  const addClient = useCallback((client: Client) => {
    setState((current) => {
      const companies = current.companies.some((c) => c.name === client.name)
        ? current.companies.map((c) =>
            c.name === client.name
              ? {
                  ...c,
                  type: "Client" as const,
                  clientId: client.id,
                  industry: client.industry || c.industry,
                  hq: client.hq || c.hq,
                  website: client.website || c.website,
                  notes: client.description || c.notes,
                }
              : c
          )
        : [
            {
              id: `co-${client.id}`,
              name: client.name,
              type: "Client" as const,
              industry: client.industry,
              hq: client.hq,
              website: client.website,
              notes: client.description,
              clientId: client.id,
            } satisfies Company,
            ...current.companies,
          ];
      return {
        ...current,
        clients: [client, ...current.clients],
        companies,
      };
    });
  }, []);

  const addProject = useCallback((project: Project) => {
    setState((current) => ({
      ...current,
      projects: [project, ...current.projects],
      stakeholdersByProject: {
        ...current.stakeholdersByProject,
        [project.id]: current.stakeholdersByProject[project.id] ?? [],
      },
    }));
  }, []);

  const addCompany = useCallback((company: Company) => {
    setState((current) => ({
      ...current,
      companies: [company, ...current.companies],
    }));
  }, []);

  const addStakeholder = useCallback(
    (projectId: string, stakeholder: Stakeholder) => {
      setState((current) => ({
        ...current,
        stakeholdersByProject: {
          ...current.stakeholdersByProject,
          [projectId]: [
            stakeholder,
            ...(current.stakeholdersByProject[projectId] ?? []),
          ],
        },
      }));
    },
    []
  );

  const updateStakeholders = useCallback(
    (projectId: string, updater: (current: Stakeholder[]) => Stakeholder[]) => {
      setState((current) => ({
        ...current,
        stakeholdersByProject: {
          ...current.stakeholdersByProject,
          [projectId]: updater(current.stakeholdersByProject[projectId] ?? []),
        },
      }));
    },
    []
  );

  const value = useMemo<AppDataContextValue>(() => {
    const getClient = (id: string) =>
      state.clients.find((client) => client.id === id);
    const getProject = (id: string) =>
      state.projects.find((project) => project.id === id);
    const getCompany = (id: string) =>
      state.companies.find((company) => company.id === id);
    const getProjectsForClient = (clientId: string) =>
      state.projects.filter((project) => project.clientId === clientId);
    const getStakeholders = (projectId: string) =>
      state.stakeholdersByProject[projectId] ?? [];

    return {
      ...state,
      hydrated,
      addClient,
      addProject,
      addCompany,
      addStakeholder,
      updateStakeholders,
      getClient,
      getProject,
      getCompany,
      getProjectsForClient,
      getStakeholders,
      portfolioStats: {
        clients: state.clients.length,
        activeClients: state.clients.filter((c) => c.status === "Active").length,
        projects: state.projects.length,
        activeProjects: state.projects.filter((p) => p.status !== "Closed")
          .length,
        companies: state.companies.length,
      },
    };
  }, [
    state,
    hydrated,
    addClient,
    addProject,
    addCompany,
    addStakeholder,
    updateStakeholders,
  ]);

  return (
    <AppDataContext.Provider value={value}>{children}</AppDataContext.Provider>
  );
}

export function useAppData(): AppDataContextValue {
  const ctx = useContext(AppDataContext);
  if (!ctx) {
    throw new Error("useAppData must be used within AppDataProvider");
  }
  return ctx;
}
