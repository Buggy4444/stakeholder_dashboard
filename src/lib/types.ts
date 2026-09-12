export type Stance =
  | "Economic Buyer"
  | "Champion"
  | "Gatekeeper"
  | "Neutral"
  | "Skeptic";

export type InfluenceLevel = "High" | "Medium" | "Low";

export type Department = "Finance" | "Supply Chain" | "Technology" | "Commercial";

export type CompanyType = "Client" | "Affiliate" | "Parent" | "Vendor";

export type ProjectStatus =
  | "Active"
  | "Mobilizing"
  | "Steering"
  | "Closed";

export type ProjectPhase =
  | "Diagnostic"
  | "Design"
  | "Implementation"
  | "Value Capture";

export type ClientStatus = "Active" | "Prospect" | "Alumni";

export interface Client {
  id: string;
  name: string;
  shortName: string;
  industry: string;
  hq: string;
  region: string;
  ownership: string;
  website: string;
  relationshipLead: string;
  status: ClientStatus;
  since: string;
  description: string;
  annualRevenue: string;
  employees: string;
  tags: string[];
}

export interface Project {
  id: string;
  clientId: string;
  code: string;
  title: string;
  subtitle: string;
  status: ProjectStatus;
  phase: ProjectPhase;
  wave: string;
  office: string;
  startDate: string;
  endDate: string | null;
  steerCoDate: string | null;
  steerCoLabel: string | null;
  confidentiality: string;
  engagementPartner: string;
  engagementManager: string;
  teamSize: number;
  summary: string;
}

/** Organization that can appear on stakeholder dossiers (client, parent, affiliate, vendor). */
export interface Company {
  id: string;
  name: string;
  type: CompanyType;
  industry: string;
  hq: string;
  website: string;
  notes: string;
  /** When set, this org is also a firm client account. */
  clientId: string | null;
}

export type Availability = "available" | "in-meeting" | "traveling" | "ooo";

export type Sentiment = "Positive" | "Neutral" | "Challenging";

export type ActionPriority = "Critical" | "High" | "Normal";

export interface CommunicationGuide {
  dos: string[];
  donts: string[];
}

export interface Touchpoint {
  id: string;
  date: string;
  type: "1:1" | "Interview" | "SteerCo" | "Workshop" | "Email";
  attendees: string[];
  sentiment: Sentiment;
  takeaways: string;
  quote?: string;
}

export interface ActionItem {
  id: string;
  title: string;
  detail: string;
  dueDate: string;
  owner: string;
  completed: boolean;
  priority: ActionPriority;
}

export interface RelationshipNote {
  date: string;
  context: string;
  quote: string;
}

export interface Stakeholder {
  id: string;
  name: string;
  initials: string;
  title: string;
  company: string;
  companyType: CompanyType;
  reportsTo: string;
  tenure: string;
  department: Department;
  stance: Stance;
  influence: InfluenceLevel;
  availability: Availability;
  location: string;
  email: string;
  supportStyle: string;
  lastTouchpointDate: string;
  nextMeetingDate: string | null;
  nextMeetingLabel: string | null;
  communication: CommunicationGuide;
  talkingPointExamples: string[];
  personalKpis: string[];
  sensitivities: string[];
  relationshipHistory: RelationshipNote[];
  touchpoints: Touchpoint[];
  actionItems: ActionItem[];
}

export type ViewMode = "grid" | "table";

export interface StakeholderFilters {
  query: string;
  stance: Stance | "All";
  influence: InfluenceLevel | "All";
  department: Department | "All";
  company: string;
}
