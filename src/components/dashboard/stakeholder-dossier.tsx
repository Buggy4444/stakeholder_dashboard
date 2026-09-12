"use client";

import type { ReactNode } from "react";
import {
  AlertTriangle,
  Building2,
  CalendarClock,
  CheckCircle2,
  Mail,
  MapPin,
  MessageSquareQuote,
  Quote,
  Target,
  UserRound,
} from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { avatarTone } from "@/components/dashboard/stakeholder-card";
import { InfluenceMeter } from "@/components/dashboard/influence-meter";
import { StanceBadge } from "@/components/dashboard/stance-badge";
import { CompanyTypeBadge } from "@/components/dashboard/company-type-badge";
import { AVAILABILITY_STATUS, StatusDot } from "@/components/dashboard/status-dot";
import { formatDate, formatRelativeDay } from "@/lib/format";
import { cn } from "@/lib/utils";
import type { ActionItem, Sentiment, Stakeholder, Touchpoint } from "@/lib/types";

const SENTIMENT_CLASS: Record<Sentiment, string> = {
  Positive:
    "border-emerald-200 bg-emerald-50 text-emerald-800",
  Neutral: "border-zinc-200 bg-zinc-50 text-zinc-700",
  Challenging: "border-amber-200 bg-amber-50 text-amber-900",
};

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <h3 className="text-[11px] font-semibold tracking-[0.14em] text-zinc-400 uppercase">
      {children}
    </h3>
  );
}

function ProfileTab({ stakeholder }: { stakeholder: Stakeholder }) {
  return (
    <div className="space-y-6 pb-6">
      <section className="grid gap-3 sm:grid-cols-2">
        <div className="rounded-lg border border-zinc-200 bg-zinc-50/80 px-3 py-2.5">
          <SectionLabel>Company</SectionLabel>
          <p className="mt-1.5 text-sm font-medium text-zinc-900">
            {stakeholder.company}
          </p>
          <p className="mt-0.5 text-xs text-zinc-500">{stakeholder.tenure}</p>
        </div>
        <div className="rounded-lg border border-zinc-200 bg-zinc-50/80 px-3 py-2.5">
          <SectionLabel>Reports to</SectionLabel>
          <p className="mt-1.5 text-sm font-medium text-zinc-900">
            {stakeholder.reportsTo}
          </p>
          <p className="mt-0.5 text-xs text-zinc-500">
            {stakeholder.companyType} stakeholder
          </p>
        </div>
      </section>

      <section className="space-y-2">
        <SectionLabel>How to support</SectionLabel>
        <p className="rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-2.5 text-sm leading-relaxed text-zinc-700">
          {stakeholder.supportStyle}
        </p>
      </section>

      <section className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <SectionLabel>Do</SectionLabel>
          <ul className="space-y-2">
            {stakeholder.communication.dos.map((item) => (
              <li
                key={item}
                className="flex gap-2 text-sm leading-snug text-zinc-700"
              >
                <CheckCircle2 className="mt-0.5 size-3.5 shrink-0 text-emerald-600" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-2">
          <SectionLabel>Don&apos;t</SectionLabel>
          <ul className="space-y-2">
            {stakeholder.communication.donts.map((item) => (
              <li
                key={item}
                className="flex gap-2 text-sm leading-snug text-zinc-700"
              >
                <AlertTriangle className="mt-0.5 size-3.5 shrink-0 text-amber-600" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="space-y-2">
        <SectionLabel>Example talking points</SectionLabel>
        <p className="text-xs text-zinc-500">
          Concrete lines that have worked — and the phrases that fail — with this
          executive.
        </p>
        <ul className="space-y-1.5">
          {stakeholder.talkingPointExamples.map((item) => (
            <li
              key={item}
              className="flex gap-2 rounded-md border border-zinc-200 bg-white px-3 py-2 text-sm leading-snug text-zinc-800"
            >
              <MessageSquareQuote className="mt-0.5 size-3.5 shrink-0 text-zinc-400" />
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-2">
        <SectionLabel>Core personal KPIs</SectionLabel>
        <p className="text-xs text-zinc-500">
          What this person is held accountable to.
        </p>
        <ul className="space-y-1.5">
          {stakeholder.personalKpis.map((kpi) => (
            <li
              key={kpi}
              className="flex gap-2 rounded-md border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-800"
            >
              <Target className="mt-0.5 size-3.5 shrink-0 text-zinc-400" />
              {kpi}
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-2">
        <SectionLabel>Known sensitivities / landmines</SectionLabel>
        <ul className="space-y-1.5">
          {stakeholder.sensitivities.map((item) => (
            <li
              key={item}
              className="rounded-md border border-rose-200 bg-rose-50/70 px-3 py-2 text-sm leading-snug text-rose-950"
            >
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-3">
        <SectionLabel>Relationship history</SectionLabel>
        <div className="space-y-3">
          {stakeholder.relationshipHistory.map((note) => (
            <figure
              key={`${note.date}-${note.context}`}
              className="rounded-lg border border-zinc-200 bg-white p-3"
            >
              <div className="mb-1.5 flex items-center justify-between gap-2 text-[11px] text-zinc-500">
                <span className="font-medium text-zinc-700">{note.context}</span>
                <span>
                  {formatDate(note.date)} · {formatRelativeDay(note.date)}
                </span>
              </div>
              <blockquote className="flex gap-2 text-sm leading-relaxed text-zinc-800">
                <Quote className="mt-0.5 size-3.5 shrink-0 text-zinc-300" />
                <span className="italic">&ldquo;{note.quote}&rdquo;</span>
              </blockquote>
            </figure>
          ))}
        </div>
      </section>
    </div>
  );
}

function TouchpointItem({ touchpoint }: { touchpoint: Touchpoint }) {
  return (
    <li className="relative pl-6">
      <span className="absolute top-1.5 left-0 size-2.5 rounded-full border-2 border-white bg-zinc-400 ring-1 ring-zinc-200" />
      <div className="rounded-lg border border-zinc-200 bg-white p-3">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-semibold text-zinc-900">
            {formatDate(touchpoint.date, true)}
          </span>
          <Badge variant="outline" className="h-5 text-[10px]">
            {touchpoint.type}
          </Badge>
          <Badge
            variant="outline"
            className={cn("h-5 text-[10px]", SENTIMENT_CLASS[touchpoint.sentiment])}
          >
            {touchpoint.sentiment}
          </Badge>
          <span className="ml-auto text-[11px] text-zinc-400">
            {formatRelativeDay(touchpoint.date)}
          </span>
        </div>
        <p className="mt-1 text-[11px] text-zinc-500">
          {touchpoint.attendees.join(" · ")}
        </p>
        <p className="mt-2 text-sm leading-relaxed text-zinc-700">
          {touchpoint.takeaways}
        </p>
        {touchpoint.quote && (
          <p className="mt-2 border-l-2 border-zinc-200 pl-2 text-sm text-zinc-600 italic">
            &ldquo;{touchpoint.quote}&rdquo;
          </p>
        )}
      </div>
    </li>
  );
}

function TouchpointsTab({ stakeholder }: { stakeholder: Stakeholder }) {
  const ordered = [...stakeholder.touchpoints].sort((a, b) =>
    b.date.localeCompare(a.date)
  );

  return (
    <div className="space-y-4 pb-6">
      <p className="text-xs text-zinc-500">
        Chronological record of 1:1s, interviews, and SteerCo moments with this
        executive.
      </p>
      {ordered.length === 0 ? (
        <p className="text-sm text-zinc-500">No touchpoints logged yet.</p>
      ) : (
        <ol className="relative space-y-3 before:absolute before:top-2 before:bottom-2 before:left-[4px] before:w-px before:bg-zinc-200">
          {ordered.map((touchpoint) => (
            <TouchpointItem key={touchpoint.id} touchpoint={touchpoint} />
          ))}
        </ol>
      )}
    </div>
  );
}

function priorityClass(priority: ActionItem["priority"]): string {
  if (priority === "Critical") return "text-rose-700 bg-rose-50 border-rose-200";
  if (priority === "High") return "text-amber-800 bg-amber-50 border-amber-200";
  return "text-zinc-600 bg-zinc-50 border-zinc-200";
}

function ActionsTab({
  stakeholder,
  onToggle,
}: {
  stakeholder: Stakeholder;
  onToggle: (actionId: string) => void;
}) {
  const total = stakeholder.actionItems.length;
  const done = stakeholder.actionItems.filter((item) => item.completed).length;
  const percent = total === 0 ? 0 : Math.round((done / total) * 100);

  return (
    <div className="space-y-4 pb-6">
      <div>
        <div className="mb-1.5 flex items-center justify-between text-xs text-zinc-500">
          <span>
            {done} of {total} closed
          </span>
          <span className="font-medium text-zinc-700">{percent}%</span>
        </div>
        <Progress value={percent} className="h-1.5" />
      </div>
      <ul className="space-y-2">
        {stakeholder.actionItems.map((item) => (
          <li
            key={item.id}
            className={cn(
              "flex gap-3 rounded-lg border border-zinc-200 bg-white p-3",
              item.completed && "opacity-60"
            )}
          >
            <Checkbox
              checked={item.completed}
              onCheckedChange={() => onToggle(item.id)}
              className="mt-0.5"
              aria-label={item.title}
            />
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <p
                  className={cn(
                    "text-sm font-medium text-zinc-900",
                    item.completed && "line-through"
                  )}
                >
                  {item.title}
                </p>
                <Badge
                  variant="outline"
                  className={cn("h-5 text-[10px]", priorityClass(item.priority))}
                >
                  {item.priority}
                </Badge>
              </div>
              <p className="mt-1 text-xs leading-relaxed text-zinc-600">
                {item.detail}
              </p>
              <p className="mt-1.5 text-[11px] text-zinc-400">
                Due {formatDate(item.dueDate)} · Owner {item.owner}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function StakeholderDossier({
  stakeholder,
  open,
  onOpenChange,
  onToggleAction,
}: {
  stakeholder: Stakeholder | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onToggleAction: (stakeholderId: string, actionId: string) => void;
}) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent
        side="right"
        className="w-full gap-0 p-0 data-[side=right]:sm:max-w-2xl"
      >
        {stakeholder ? (
          <>
            <SheetHeader className="border-b border-zinc-200 p-5">
              <div className="flex items-start gap-3 pr-8">
                <div className="relative">
                  <Avatar size="lg">
                    <AvatarFallback
                      className={cn(
                        "text-xs font-semibold",
                        avatarTone(stakeholder.name)
                      )}
                    >
                      {stakeholder.initials}
                    </AvatarFallback>
                  </Avatar>
                  <StatusDot availability={stakeholder.availability} />
                </div>
                <div className="min-w-0 flex-1">
                  <SheetTitle className="text-lg font-semibold tracking-tight">
                    {stakeholder.name}
                  </SheetTitle>
                  <SheetDescription className="text-sm text-zinc-500">
                    {stakeholder.title}
                  </SheetDescription>
                  <p className="mt-1 flex items-center gap-1.5 text-sm text-zinc-700">
                    <Building2 className="size-3.5 text-zinc-400" />
                    <span className="font-medium">{stakeholder.company}</span>
                    <span className="text-zinc-300">·</span>
                    <span>{stakeholder.department}</span>
                  </p>
                  <div className="mt-2 flex flex-wrap items-center gap-2">
                    <StanceBadge stance={stakeholder.stance} />
                    <CompanyTypeBadge type={stakeholder.companyType} />
                    <InfluenceMeter level={stakeholder.influence} />
                    <span className="text-[11px] text-zinc-400">
                      {AVAILABILITY_STATUS[stakeholder.availability].label}
                    </span>
                  </div>
                  <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-[11px] text-zinc-500">
                    <span className="inline-flex items-center gap-1">
                      <UserRound className="size-3" />
                      {stakeholder.reportsTo}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Mail className="size-3" />
                      {stakeholder.email}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="size-3" />
                      {stakeholder.location}
                    </span>
                    {stakeholder.nextMeetingDate && (
                      <span className="inline-flex items-center gap-1 text-blue-700">
                        <CalendarClock className="size-3" />
                        {stakeholder.nextMeetingLabel} ·{" "}
                        {formatDate(stakeholder.nextMeetingDate)}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </SheetHeader>

            <Tabs
              key={stakeholder.id}
              defaultValue="profile"
              className="min-h-0 flex-1 gap-0 overflow-hidden"
            >
              <div className="border-b border-zinc-200 px-5">
                <TabsList variant="line" className="w-full justify-start">
                  <TabsTrigger value="profile">
                    Profile &amp; how to support
                  </TabsTrigger>
                  <TabsTrigger value="touchpoints">Touchpoints</TabsTrigger>
                  <TabsTrigger value="actions">Deliverables</TabsTrigger>
                </TabsList>
              </div>
              <ScrollArea className="h-[calc(100vh-220px)]">
                <TabsContent value="profile" className="px-5 pt-4">
                  <ProfileTab stakeholder={stakeholder} />
                </TabsContent>
                <TabsContent value="touchpoints" className="px-5 pt-4">
                  <TouchpointsTab stakeholder={stakeholder} />
                </TabsContent>
                <TabsContent value="actions" className="px-5 pt-4">
                  <ActionsTab
                    stakeholder={stakeholder}
                    onToggle={(actionId) =>
                      onToggleAction(stakeholder.id, actionId)
                    }
                  />
                </TabsContent>
              </ScrollArea>
            </Tabs>
          </>
        ) : null}
      </SheetContent>
    </Sheet>
  );
}
