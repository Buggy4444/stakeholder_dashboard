import type { Company, CompanyType } from "@/lib/types";
import { CLIENTS } from "@/lib/clients";
import { STAKEHOLDERS_BY_PROJECT } from "@/lib/project-stakeholders";

function slugify(value: string): string {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function inferCompanyType(
  name: string,
  type: CompanyType | undefined
): CompanyType {
  if (type) return type;
  if (CLIENTS.some((client) => client.name === name)) return "Client";
  return "Vendor";
}

/** Seed orgs from clients + every unique stakeholder employer. */
export function buildSeedCompanies(): Company[] {
  const byName = new Map<string, Company>();

  for (const client of CLIENTS) {
    byName.set(client.name, {
      id: `co-${client.id}`,
      name: client.name,
      type: "Client",
      industry: client.industry,
      hq: client.hq,
      website: client.website,
      notes: client.description,
      clientId: client.id,
    });
  }

  for (const stakeholders of Object.values(STAKEHOLDERS_BY_PROJECT)) {
    for (const stakeholder of stakeholders) {
      if (byName.has(stakeholder.company)) {
        const existing = byName.get(stakeholder.company)!;
        if (existing.type === "Client" && stakeholder.companyType !== "Client") {
          // Keep richer non-client typing when stakeholder map is more specific
          // only if not linked as primary client account name collision — skip.
        }
        continue;
      }
      byName.set(stakeholder.company, {
        id: `co-${slugify(stakeholder.company)}`,
        name: stakeholder.company,
        type: inferCompanyType(stakeholder.company, stakeholder.companyType),
        industry: "",
        hq: stakeholder.location.split("·")[0]?.trim() || "",
        website: "",
        notes: `${stakeholder.companyType} organization mapped from stakeholder dossiers.`,
        clientId: null,
      });
    }
  }

  // Known ecosystem orgs with better metadata
  const enrich: Array<Partial<Company> & { name: string }> = [
    {
      name: "Apex Capital Partners",
      type: "Parent",
      industry: "Private Equity",
      hq: "New York, NY",
      website: "apexcapital.com",
      notes: "PE sponsor of Northstar Retail Group (2023 take-private).",
    },
    {
      name: "Northstar Europe Ltd",
      type: "Affiliate",
      industry: "Specialty Retail · Europe",
      hq: "London, UK",
      website: "northstar-europe.com",
      notes: "EU operating company matrixed to Northstar Commercial.",
    },
    {
      name: "SAP America",
      type: "Vendor",
      industry: "Enterprise Software",
      hq: "Newtown Square, PA",
      website: "sap.com",
      notes: "S/4 / ATP vendor on Project Horizon.",
    },
    {
      name: "Manhattan Associates",
      type: "Vendor",
      industry: "Supply Chain Software",
      hq: "Atlanta, GA",
      website: "manh.com",
      notes: "WMS vendor for Northstar DC network.",
    },
  ];

  for (const item of enrich) {
    const current = byName.get(item.name);
    if (current) {
      byName.set(item.name, {
        ...current,
        type: item.type ?? current.type,
        industry: item.industry || current.industry,
        hq: item.hq || current.hq,
        website: item.website || current.website,
        notes: item.notes || current.notes,
      });
    } else {
      byName.set(item.name, {
        id: `co-${slugify(item.name)}`,
        name: item.name,
        type: item.type ?? "Vendor",
        industry: item.industry ?? "",
        hq: item.hq ?? "",
        website: item.website ?? "",
        notes: item.notes ?? "",
        clientId: null,
      });
    }
  }

  return Array.from(byName.values()).sort((a, b) =>
    a.name.localeCompare(b.name)
  );
}

export const COMPANIES: Company[] = buildSeedCompanies();

export function getCompanyById(id: string): Company | undefined {
  return COMPANIES.find((company) => company.id === id);
}
