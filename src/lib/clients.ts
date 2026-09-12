import type { Client } from "@/lib/types";

export const CLIENTS: Client[] = [
  {
    id: "northstar",
    name: "Northstar Retail Group",
    shortName: "Northstar",
    industry: "Specialty Retail",
    hq: "Chicago, IL",
    region: "North America · EU affiliate",
    ownership: "Apex Capital Partners (take-private 2023)",
    website: "northstar.com",
    relationshipLead: "Elena Park · Managing Partner",
    status: "Active",
    since: "2023",
    description:
      "National specialty retailer with 1,140 doors, a growing digital channel, and a PE hold-period focus on inventory truth and DC productivity.",
    annualRevenue: "$4.8B",
    employees: "28,000",
    tags: ["Retail", "Omnichannel", "PE-backed"],
  },
  {
    id: "helix",
    name: "Helix Health Systems",
    shortName: "Helix",
    industry: "Integrated Delivery Network",
    hq: "Boston, MA",
    region: "Northeast US",
    ownership: "Not-for-profit health system",
    website: "helixhealth.org",
    relationshipLead: "Marcus Cole · Senior Partner",
    status: "Active",
    since: "2024",
    description:
      "Eight-hospital IDN under margin pressure, modernizing care pathways and ambulatory capacity while protecting clinical quality and CMS metrics.",
    annualRevenue: "$6.1B",
    employees: "41,000",
    tags: ["Healthcare", "Operations", "Care pathways"],
  },
  {
    id: "meridian",
    name: "Meridian National Bank",
    shortName: "Meridian",
    industry: "Regional Banking",
    hq: "Charlotte, NC",
    region: "Southeast · Mid-Atlantic",
    ownership: "Public · NYSE: MRDN",
    website: "meridianbank.com",
    relationshipLead: "Sofia Alvarez · Partner",
    status: "Active",
    since: "2025",
    description:
      "Top-25 regional bank accelerating digital onboarding and KYC throughput after a stalled in-house rebuild and rising competitor NPS.",
    annualRevenue: "$2.4B NII",
    employees: "12,500",
    tags: ["Financial services", "Digital", "KYC"],
  },
  {
    id: "cascade",
    name: "Cascade Industrials",
    shortName: "Cascade",
    industry: "Industrial Distribution",
    hq: "Minneapolis, MN",
    region: "US · Canada",
    ownership: "Family-controlled · Berkshire minority",
    website: "cascadeindustrials.com",
    relationshipLead: "James Okada · Partner",
    status: "Prospect",
    since: "2026",
    description:
      "Multi-branch industrial distributor evaluating a pricing and working-capital diagnostic after two years of share loss to national chains.",
    annualRevenue: "$1.9B",
    employees: "6,200",
    tags: ["Distribution", "Pricing", "Prospect"],
  },
];

export function getClientById(id: string): Client | undefined {
  return CLIENTS.find((client) => client.id === id);
}
