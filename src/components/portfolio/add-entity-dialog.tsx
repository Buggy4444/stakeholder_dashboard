"use client";

import { useMemo, useState, type FormEvent, type ReactNode } from "react";
import { Building2, FolderKanban, Plus, Users } from "lucide-react";
import { toast } from "sonner";
import { createId, useAppData } from "@/lib/app-data";
import type {
  Client,
  ClientStatus,
  Company,
  CompanyType,
  Project,
  ProjectPhase,
  ProjectStatus,
} from "@/lib/types";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

type EntityKind = "client" | "project" | "company";

const CLIENT_STATUSES: ClientStatus[] = ["Active", "Prospect", "Alumni"];
const PROJECT_STATUSES: ProjectStatus[] = [
  "Active",
  "Mobilizing",
  "Steering",
  "Closed",
];
const PROJECT_PHASES: ProjectPhase[] = [
  "Diagnostic",
  "Design",
  "Implementation",
  "Value Capture",
];
const COMPANY_TYPES: CompanyType[] = [
  "Client",
  "Affiliate",
  "Parent",
  "Vendor",
];

const fieldClass =
  "h-8 w-full rounded-lg border border-input bg-transparent px-2.5 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50";

const areaClass =
  "min-h-[72px] w-full rounded-lg border border-input bg-transparent px-2.5 py-2 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50";

interface AddEntityDialogProps {
  kind: EntityKind;
  defaultClientId?: string;
  triggerLabel?: string;
  triggerVariant?: "default" | "outline" | "secondary" | "ghost";
  triggerSize?: "default" | "sm" | "lg" | "icon";
  className?: string;
}

export function AddEntityDialog({
  kind,
  defaultClientId,
  triggerLabel,
  triggerVariant = "default",
  triggerSize = "sm",
  className,
}: AddEntityDialogProps) {
  const { clients, addClient, addProject, addCompany } = useAppData();
  const [open, setOpen] = useState(false);

  const meta = useMemo(() => {
    if (kind === "client") {
      return {
        title: "Add client",
        description: "Create a new account in the client database.",
        icon: Users,
        label: triggerLabel ?? "Add Client",
      };
    }
    if (kind === "project") {
      return {
        title: "Add project",
        description: "Create a new engagement under an existing client.",
        icon: FolderKanban,
        label: triggerLabel ?? "Add Project",
      };
    }
    return {
      title: "Add company",
      description: "Register a parent, affiliate, vendor, or client company.",
      icon: Building2,
      label: triggerLabel ?? "Add Company",
    };
  }, [kind, triggerLabel]);

  const Icon = meta.icon;

  const [clientForm, setClientForm] = useState({
    name: "",
    shortName: "",
    industry: "",
    hq: "",
    region: "",
    ownership: "",
    website: "",
    relationshipLead: "",
    status: "Active" as ClientStatus,
    since: new Date().getFullYear().toString(),
    description: "",
    annualRevenue: "",
    employees: "",
    tags: "",
  });

  const [projectForm, setProjectForm] = useState({
    title: "",
    subtitle: "",
    code: "",
    clientId: defaultClientId ?? "",
    status: "Mobilizing" as ProjectStatus,
    phase: "Diagnostic" as ProjectPhase,
    wave: "",
    office: "",
    startDate: new Date().toISOString().slice(0, 10),
    endDate: "",
    engagementPartner: "",
    engagementManager: "",
    teamSize: "6",
    summary: "",
  });

  const [companyForm, setCompanyForm] = useState({
    name: "",
    type: "Vendor" as CompanyType,
    industry: "",
    hq: "",
    website: "",
    notes: "",
    clientId: "",
  });

  function resetForms() {
    setClientForm({
      name: "",
      shortName: "",
      industry: "",
      hq: "",
      region: "",
      ownership: "",
      website: "",
      relationshipLead: "",
      status: "Active",
      since: new Date().getFullYear().toString(),
      description: "",
      annualRevenue: "",
      employees: "",
      tags: "",
    });
    setProjectForm({
      title: "",
      subtitle: "",
      code: "",
      clientId: defaultClientId ?? "",
      status: "Mobilizing",
      phase: "Diagnostic",
      wave: "",
      office: "",
      startDate: new Date().toISOString().slice(0, 10),
      endDate: "",
      engagementPartner: "",
      engagementManager: "",
      teamSize: "6",
      summary: "",
    });
    setCompanyForm({
      name: "",
      type: "Vendor",
      industry: "",
      hq: "",
      website: "",
      notes: "",
      clientId: "",
    });
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    if (kind === "client") {
      if (!clientForm.name.trim() || !clientForm.relationshipLead.trim()) {
        toast.error("Client name and relationship lead are required.");
        return;
      }
      const name = clientForm.name.trim();
      const client: Client = {
        id: createId("client", name),
        name,
        shortName:
          clientForm.shortName.trim() || name.split(/\s+/)[0] || "Client",
        industry: clientForm.industry.trim() || "Other",
        hq: clientForm.hq.trim() || "TBD",
        region: clientForm.region.trim() || "Unassigned",
        ownership: clientForm.ownership.trim() || "Private",
        website: clientForm.website.trim() || "example.com",
        relationshipLead: clientForm.relationshipLead.trim(),
        status: clientForm.status,
        since: clientForm.since.trim() || new Date().getFullYear().toString(),
        description:
          clientForm.description.trim() || `${name} account record.`,
        annualRevenue: clientForm.annualRevenue.trim() || "—",
        employees: clientForm.employees.trim() || "—",
        tags: clientForm.tags
          .split(",")
          .map((tag) => tag.trim())
          .filter(Boolean),
      };
      addClient(client);
      toast.success(`${client.name} added to the client database.`);
    }

    if (kind === "project") {
      if (
        !projectForm.title.trim() ||
        !projectForm.clientId ||
        !projectForm.engagementPartner.trim() ||
        !projectForm.engagementManager.trim()
      ) {
        toast.error(
          "Title, client, engagement partner, and EM are required."
        );
        return;
      }
      const title = projectForm.title.trim();
      const code =
        projectForm.code.trim().toUpperCase() ||
        title.replace(/^project\s+/i, "").slice(0, 8).toUpperCase() ||
        "NEW";
      const project: Project = {
        id: createId("project", title),
        clientId: projectForm.clientId,
        code,
        title,
        subtitle: projectForm.subtitle.trim() || "New engagement",
        status: projectForm.status,
        phase: projectForm.phase,
        wave:
          projectForm.wave.trim() ||
          `Wave 1 · ${projectForm.phase}`,
        office: projectForm.office.trim() || "TBD",
        startDate: projectForm.startDate,
        endDate: projectForm.endDate || null,
        steerCoDate: null,
        steerCoLabel: null,
        confidentiality: "Client Confidential",
        engagementPartner: projectForm.engagementPartner.trim(),
        engagementManager: projectForm.engagementManager.trim(),
        teamSize: Math.max(1, Number(projectForm.teamSize) || 1),
        summary:
          projectForm.summary.trim() ||
          `${title} engagement workspace.`,
      };
      addProject(project);
      toast.success(`${project.title} created under the selected client.`);
    }

    if (kind === "company") {
      if (!companyForm.name.trim()) {
        toast.error("Company name is required.");
        return;
      }
      const name = companyForm.name.trim();
      const company: Company = {
        id: createId("co", name),
        name,
        type: companyForm.type,
        industry: companyForm.industry.trim() || "Other",
        hq: companyForm.hq.trim() || "TBD",
        website: companyForm.website.trim() || "example.com",
        notes:
          companyForm.notes.trim() ||
          `${companyForm.type} organization added to the directory.`,
        clientId: companyForm.clientId || null,
      };
      addCompany(company);
      toast.success(`${company.name} added to the company directory.`);
    }

    resetForms();
    setOpen(false);
  }

  return (
    <Dialog
      open={open}
      onOpenChange={(next) => {
        setOpen(next);
        if (!next) resetForms();
      }}
    >
      <DialogTrigger asChild>
        <Button
          variant={triggerVariant}
          size={triggerSize}
          className={className}
        >
          <Plus className="size-3.5" />
          {meta.label}
        </Button>
      </DialogTrigger>
      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Icon className="size-4 text-muted-foreground" />
            {meta.title}
          </DialogTitle>
          <DialogDescription>{meta.description}</DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-3">
          {kind === "client" ? (
            <div className="grid gap-3 sm:grid-cols-2">
              <Field label="Legal / brand name *" className="sm:col-span-2">
                <Input
                  value={clientForm.name}
                  onChange={(e) =>
                    setClientForm((f) => ({ ...f, name: e.target.value }))
                  }
                  placeholder="e.g. Northstar Retail Group"
                  required
                />
              </Field>
              <Field label="Short name">
                <Input
                  value={clientForm.shortName}
                  onChange={(e) =>
                    setClientForm((f) => ({ ...f, shortName: e.target.value }))
                  }
                  placeholder="Northstar"
                />
              </Field>
              <Field label="Status">
                <select
                  className={fieldClass}
                  value={clientForm.status}
                  onChange={(e) =>
                    setClientForm((f) => ({
                      ...f,
                      status: e.target.value as ClientStatus,
                    }))
                  }
                >
                  {CLIENT_STATUSES.map((status) => (
                    <option key={status} value={status}>
                      {status}
                    </option>
                  ))}
                </select>
              </Field>
              <Field label="Industry">
                <Input
                  value={clientForm.industry}
                  onChange={(e) =>
                    setClientForm((f) => ({ ...f, industry: e.target.value }))
                  }
                  placeholder="Specialty Retail"
                />
              </Field>
              <Field label="HQ">
                <Input
                  value={clientForm.hq}
                  onChange={(e) =>
                    setClientForm((f) => ({ ...f, hq: e.target.value }))
                  }
                  placeholder="Chicago, IL"
                />
              </Field>
              <Field label="Region">
                <Input
                  value={clientForm.region}
                  onChange={(e) =>
                    setClientForm((f) => ({ ...f, region: e.target.value }))
                  }
                  placeholder="North America"
                />
              </Field>
              <Field label="Ownership">
                <Input
                  value={clientForm.ownership}
                  onChange={(e) =>
                    setClientForm((f) => ({ ...f, ownership: e.target.value }))
                  }
                  placeholder="PE-backed / Public"
                />
              </Field>
              <Field label="Relationship lead *" className="sm:col-span-2">
                <Input
                  value={clientForm.relationshipLead}
                  onChange={(e) =>
                    setClientForm((f) => ({
                      ...f,
                      relationshipLead: e.target.value,
                    }))
                  }
                  placeholder="Elena Park · Managing Partner"
                  required
                />
              </Field>
              <Field label="Website">
                <Input
                  value={clientForm.website}
                  onChange={(e) =>
                    setClientForm((f) => ({ ...f, website: e.target.value }))
                  }
                  placeholder="northstar.com"
                />
              </Field>
              <Field label="Client since">
                <Input
                  value={clientForm.since}
                  onChange={(e) =>
                    setClientForm((f) => ({ ...f, since: e.target.value }))
                  }
                  placeholder="2026"
                />
              </Field>
              <Field label="Revenue">
                <Input
                  value={clientForm.annualRevenue}
                  onChange={(e) =>
                    setClientForm((f) => ({
                      ...f,
                      annualRevenue: e.target.value,
                    }))
                  }
                  placeholder="$1.2B"
                />
              </Field>
              <Field label="Employees">
                <Input
                  value={clientForm.employees}
                  onChange={(e) =>
                    setClientForm((f) => ({ ...f, employees: e.target.value }))
                  }
                  placeholder="8,000"
                />
              </Field>
              <Field label="Tags (comma-separated)" className="sm:col-span-2">
                <Input
                  value={clientForm.tags}
                  onChange={(e) =>
                    setClientForm((f) => ({ ...f, tags: e.target.value }))
                  }
                  placeholder="Retail, Omnichannel"
                />
              </Field>
              <Field label="Description" className="sm:col-span-2">
                <textarea
                  className={areaClass}
                  value={clientForm.description}
                  onChange={(e) =>
                    setClientForm((f) => ({
                      ...f,
                      description: e.target.value,
                    }))
                  }
                  placeholder="Account context and relationship notes"
                />
              </Field>
            </div>
          ) : null}

          {kind === "project" ? (
            <div className="grid gap-3 sm:grid-cols-2">
              <Field label="Project title *" className="sm:col-span-2">
                <Input
                  value={projectForm.title}
                  onChange={(e) =>
                    setProjectForm((f) => ({ ...f, title: e.target.value }))
                  }
                  placeholder="e.g. Project Horizon"
                  required
                />
              </Field>
              <Field label="Subtitle" className="sm:col-span-2">
                <Input
                  value={projectForm.subtitle}
                  onChange={(e) =>
                    setProjectForm((f) => ({ ...f, subtitle: e.target.value }))
                  }
                  placeholder="Global Omnichannel Diagnostic"
                />
              </Field>
              <Field label="Client *" className="sm:col-span-2">
                <select
                  className={fieldClass}
                  value={projectForm.clientId}
                  onChange={(e) =>
                    setProjectForm((f) => ({ ...f, clientId: e.target.value }))
                  }
                  required
                >
                  <option value="">Select client</option>
                  {clients.map((client) => (
                    <option key={client.id} value={client.id}>
                      {client.name}
                    </option>
                  ))}
                </select>
              </Field>
              <Field label="Code">
                <Input
                  value={projectForm.code}
                  onChange={(e) =>
                    setProjectForm((f) => ({ ...f, code: e.target.value }))
                  }
                  placeholder="HORIZON"
                />
              </Field>
              <Field label="Status">
                <select
                  className={fieldClass}
                  value={projectForm.status}
                  onChange={(e) =>
                    setProjectForm((f) => ({
                      ...f,
                      status: e.target.value as ProjectStatus,
                    }))
                  }
                >
                  {PROJECT_STATUSES.map((status) => (
                    <option key={status} value={status}>
                      {status}
                    </option>
                  ))}
                </select>
              </Field>
              <Field label="Phase">
                <select
                  className={fieldClass}
                  value={projectForm.phase}
                  onChange={(e) =>
                    setProjectForm((f) => ({
                      ...f,
                      phase: e.target.value as ProjectPhase,
                    }))
                  }
                >
                  {PROJECT_PHASES.map((phase) => (
                    <option key={phase} value={phase}>
                      {phase}
                    </option>
                  ))}
                </select>
              </Field>
              <Field label="Wave">
                <Input
                  value={projectForm.wave}
                  onChange={(e) =>
                    setProjectForm((f) => ({ ...f, wave: e.target.value }))
                  }
                  placeholder="Wave 1 · Mobilization"
                />
              </Field>
              <Field label="Office">
                <Input
                  value={projectForm.office}
                  onChange={(e) =>
                    setProjectForm((f) => ({ ...f, office: e.target.value }))
                  }
                  placeholder="Chicago HQ"
                />
              </Field>
              <Field label="Engagement partner *">
                <Input
                  value={projectForm.engagementPartner}
                  onChange={(e) =>
                    setProjectForm((f) => ({
                      ...f,
                      engagementPartner: e.target.value,
                    }))
                  }
                  placeholder="Elena Park"
                  required
                />
              </Field>
              <Field label="Engagement manager *">
                <Input
                  value={projectForm.engagementManager}
                  onChange={(e) =>
                    setProjectForm((f) => ({
                      ...f,
                      engagementManager: e.target.value,
                    }))
                  }
                  placeholder="Tom Irvine"
                  required
                />
              </Field>
              <Field label="Start date">
                <Input
                  type="date"
                  value={projectForm.startDate}
                  onChange={(e) =>
                    setProjectForm((f) => ({
                      ...f,
                      startDate: e.target.value,
                    }))
                  }
                />
              </Field>
              <Field label="Team size">
                <Input
                  type="number"
                  min={1}
                  value={projectForm.teamSize}
                  onChange={(e) =>
                    setProjectForm((f) => ({ ...f, teamSize: e.target.value }))
                  }
                />
              </Field>
              <Field label="Summary" className="sm:col-span-2">
                <textarea
                  className={areaClass}
                  value={projectForm.summary}
                  onChange={(e) =>
                    setProjectForm((f) => ({ ...f, summary: e.target.value }))
                  }
                  placeholder="Engagement scope and objectives"
                />
              </Field>
            </div>
          ) : null}

          {kind === "company" ? (
            <div className="grid gap-3 sm:grid-cols-2">
              <Field label="Company name *" className="sm:col-span-2">
                <Input
                  value={companyForm.name}
                  onChange={(e) =>
                    setCompanyForm((f) => ({ ...f, name: e.target.value }))
                  }
                  placeholder="e.g. Apex Capital Partners"
                  required
                />
              </Field>
              <Field label="Type">
                <select
                  className={fieldClass}
                  value={companyForm.type}
                  onChange={(e) =>
                    setCompanyForm((f) => ({
                      ...f,
                      type: e.target.value as CompanyType,
                    }))
                  }
                >
                  {COMPANY_TYPES.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </Field>
              <Field label="Linked client">
                <select
                  className={fieldClass}
                  value={companyForm.clientId}
                  onChange={(e) =>
                    setCompanyForm((f) => ({
                      ...f,
                      clientId: e.target.value,
                    }))
                  }
                >
                  <option value="">None</option>
                  {clients.map((client) => (
                    <option key={client.id} value={client.id}>
                      {client.shortName}
                    </option>
                  ))}
                </select>
              </Field>
              <Field label="Industry">
                <Input
                  value={companyForm.industry}
                  onChange={(e) =>
                    setCompanyForm((f) => ({ ...f, industry: e.target.value }))
                  }
                  placeholder="Private Equity"
                />
              </Field>
              <Field label="HQ">
                <Input
                  value={companyForm.hq}
                  onChange={(e) =>
                    setCompanyForm((f) => ({ ...f, hq: e.target.value }))
                  }
                  placeholder="New York, NY"
                />
              </Field>
              <Field label="Website" className="sm:col-span-2">
                <Input
                  value={companyForm.website}
                  onChange={(e) =>
                    setCompanyForm((f) => ({ ...f, website: e.target.value }))
                  }
                  placeholder="company.com"
                />
              </Field>
              <Field label="Notes" className="sm:col-span-2">
                <textarea
                  className={areaClass}
                  value={companyForm.notes}
                  onChange={(e) =>
                    setCompanyForm((f) => ({ ...f, notes: e.target.value }))
                  }
                  placeholder="Relationship or vendor context"
                />
              </Field>
            </div>
          ) : null}

          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={() => setOpen(false)}
            >
              Cancel
            </Button>
            <Button type="submit">Save to database</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

function Field({
  label,
  children,
  className,
}: {
  label: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <label className={`grid gap-1 text-xs font-medium text-zinc-700 ${className ?? ""}`}>
      {label}
      {children}
    </label>
  );
}

export function AddEntityMenu() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <AddEntityDialog kind="client" triggerVariant="outline" />
      <AddEntityDialog kind="project" />
      <AddEntityDialog kind="company" triggerVariant="secondary" />
    </div>
  );
}
