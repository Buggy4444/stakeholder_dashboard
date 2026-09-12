"use client";

import { useEffect, useState, type FormEvent } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { getInitials, calendarToday } from "@/lib/format";
import type {
  CompanyType,
  Department,
  InfluenceLevel,
  Stakeholder,
  Stance,
} from "@/lib/types";

const DEPARTMENTS: Department[] = [
  "Finance",
  "Supply Chain",
  "Technology",
  "Commercial",
];
const STANCES: Stance[] = [
  "Economic Buyer",
  "Champion",
  "Gatekeeper",
  "Neutral",
  "Skeptic",
];
const INFLUENCES: InfluenceLevel[] = ["High", "Medium", "Low"];
const COMPANY_TYPES: CompanyType[] = ["Client", "Affiliate", "Parent", "Vendor"];

const fieldClass =
  "h-8 w-full rounded-lg border border-input bg-transparent px-2.5 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50";

export function AddStakeholderDialog({
  open,
  onOpenChange,
  onAdd,
  defaultCompany,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onAdd: (stakeholder: Stakeholder) => void;
  defaultCompany: string;
}) {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState<string>(defaultCompany);
  const [companyType, setCompanyType] = useState<CompanyType>("Client");
  const [department, setDepartment] = useState<Department>("Finance");
  const [stance, setStance] = useState<Stance>("Neutral");
  const [influence, setInfluence] = useState<InfluenceLevel>("Medium");
  const [supportStyle, setSupportStyle] = useState("");

  useEffect(() => {
    if (open) setCompany(defaultCompany);
  }, [open, defaultCompany]);

  function reset() {
    setName("");
    setTitle("");
    setCompany(defaultCompany);
    setCompanyType("Client");
    setDepartment("Finance");
    setStance("Neutral");
    setInfluence("Medium");
    setSupportStyle("");
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    event.stopPropagation();
    const trimmed = name.trim();
    if (!trimmed || !title.trim()) {
      toast.error("Name and title are required.");
      return;
    }

    const id = `${trimmed.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-${Date.now()}`;
    const todayDate = calendarToday();
    const today = `${todayDate.getFullYear()}-${String(todayDate.getMonth() + 1).padStart(2, "0")}-${String(todayDate.getDate()).padStart(2, "0")}`;
    const lower = defaultCompany.toLowerCase();
    const domain = lower.includes("helix")
      ? "helixhealth.org"
      : lower.includes("meridian")
        ? "meridianbank.com"
        : lower.includes("cascade")
          ? "cascadeindustrials.com"
          : "northstar.com";

    onAdd({
      id,
      name: trimmed,
      initials: getInitials(trimmed),
      title: title.trim(),
      company: company.trim() || defaultCompany,
      companyType,
      reportsTo: "To be confirmed",
      tenure: "Newly mapped",
      department,
      stance,
      influence,
      availability: "available",
      location: "Unassigned",
      email: `${trimmed.split(" ")[0]?.toLowerCase() ?? "exec"}@${domain}`,
      supportStyle:
        supportStyle.trim() ||
        "No support notes yet. Capture preferences after the first 1:1.",
      lastTouchpointDate: today,
      nextMeetingDate: null,
      nextMeetingLabel: null,
      communication: {
        dos: ["Schedule an intro 1:1 and confirm decision rights."],
        donts: [
          "Do not brief SteerCo on their views until they have been interviewed.",
        ],
      },
      talkingPointExamples: [
        "Capture two example lines that land — and one that fails — after the first 1:1.",
      ],
      personalKpis: ["To be confirmed in first interview."],
      sensitivities: [
        "Unknown — treat as untested until the first working session.",
      ],
      relationshipHistory: [],
      touchpoints: [],
      actionItems: [
        {
          id: `${id}-intro`,
          title: "Schedule intro 1:1",
          detail:
            "Confirm political role, KPIs, and how they want to be engaged.",
          dueDate: today,
          owner: "Engagement manager",
          completed: false,
          priority: "High",
        },
      ],
    });

    toast.success(`${trimmed} added to the engagement map.`);
    onOpenChange(false);
  }

  return (
    <Dialog
      open={open}
      onOpenChange={(next) => {
        if (!next) reset();
        onOpenChange(next);
      }}
    >
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Add stakeholder</DialogTitle>
          <DialogDescription>
            Map a new executive onto this engagement. You can enrich the dossier
            after the first 1:1.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="grid gap-3">
          <label className="grid gap-1 text-xs font-medium text-zinc-700">
            Full name
            <Input
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Alex Rivera"
              autoFocus
            />
          </label>
          <label className="grid gap-1 text-xs font-medium text-zinc-700">
            Official title
            <Input
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              placeholder="SVP, Store Operations"
            />
          </label>
          <div className="grid grid-cols-2 gap-3">
            <label className="grid gap-1 text-xs font-medium text-zinc-700">
              Company
              <Input
                value={company}
                onChange={(event) => setCompany(event.target.value)}
                placeholder={defaultCompany}
              />
            </label>
            <label className="grid gap-1 text-xs font-medium text-zinc-700">
              Company type
              <select
                className={fieldClass}
                value={companyType}
                onChange={(event) =>
                  setCompanyType(event.target.value as CompanyType)
                }
              >
                {COMPANY_TYPES.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <label className="grid gap-1 text-xs font-medium text-zinc-700">
              Department
              <select
                className={fieldClass}
                value={department}
                onChange={(event) =>
                  setDepartment(event.target.value as Department)
                }
              >
                {DEPARTMENTS.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </label>
            <label className="grid gap-1 text-xs font-medium text-zinc-700">
              Influence
              <select
                className={fieldClass}
                value={influence}
                onChange={(event) =>
                  setInfluence(event.target.value as InfluenceLevel)
                }
              >
                {INFLUENCES.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <label className="grid gap-1 text-xs font-medium text-zinc-700">
            Stance / political role
            <select
              className={fieldClass}
              value={stance}
              onChange={(event) => setStance(event.target.value as Stance)}
            >
              {STANCES.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </label>
          <label className="grid gap-1 text-xs font-medium text-zinc-700">
            Support style
            <Input
              value={supportStyle}
              onChange={(event) => setSupportStyle(event.target.value)}
              placeholder="Prefers short memos, hates workshops…"
            />
          </label>
          <DialogFooter className="-mx-4 -mb-4 mt-1">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>
            <Button type="submit">Add to map</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
