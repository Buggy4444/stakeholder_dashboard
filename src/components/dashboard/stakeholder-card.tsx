"use client";

import { CalendarClock, Clock3, PanelRightOpen } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { InfluenceMeter } from "@/components/dashboard/influence-meter";
import { StanceBadge } from "@/components/dashboard/stance-badge";
import { StatusDot } from "@/components/dashboard/status-dot";
import { formatDate, formatRelativeDay } from "@/lib/format";
import { cn } from "@/lib/utils";
import type { Stakeholder } from "@/lib/types";

const AVATAR_TONES = [
  "bg-zinc-800 text-zinc-50",
  "bg-slate-700 text-white",
  "bg-stone-700 text-stone-50",
  "bg-neutral-800 text-neutral-50",
  "bg-zinc-700 text-zinc-50",
  "bg-slate-800 text-slate-50",
];

function avatarTone(name: string): string {
  const sum = [...name].reduce((acc, char) => acc + char.charCodeAt(0), 0);
  return AVATAR_TONES[sum % AVATAR_TONES.length];
}

export function StakeholderCard({
  stakeholder,
  onOpen,
}: {
  stakeholder: Stakeholder;
  onOpen: (id: string) => void;
}) {
  return (
    <Card
      size="sm"
      className="group cursor-pointer bg-white ring-zinc-200/80 transition-all hover:-translate-y-0.5 hover:ring-zinc-300"
      onClick={() => onOpen(stakeholder.id)}
    >
      <CardHeader className="gap-3">
        <div className="flex items-start justify-between gap-3">
          <div className="flex min-w-0 items-start gap-3">
            <div className="relative">
              <Avatar size="lg">
                <AvatarFallback
                  className={cn(
                    "text-xs font-semibold tracking-wide",
                    avatarTone(stakeholder.name)
                  )}
                >
                  {stakeholder.initials}
                </AvatarFallback>
              </Avatar>
              <StatusDot availability={stakeholder.availability} />
            </div>
            <div className="min-w-0">
              <h3 className="truncate font-heading text-sm font-semibold tracking-tight text-zinc-950">
                {stakeholder.name}
              </h3>
              <p className="truncate text-xs text-zinc-500">{stakeholder.title}</p>
              <p className="truncate text-[11px] text-zinc-500">
                {stakeholder.company}
              </p>
              <p className="mt-0.5 text-[11px] font-medium tracking-wide text-zinc-400 uppercase">
                {stakeholder.department}
              </p>
            </div>
          </div>
          <InfluenceMeter level={stakeholder.influence} compact />
        </div>
        <div className="flex flex-wrap items-center gap-1.5">
          <StanceBadge stance={stakeholder.stance} />
          <span className="text-[11px] font-medium text-zinc-400">
            {stakeholder.companyType} · {stakeholder.influence} influence
          </span>
        </div>
      </CardHeader>

      <CardContent className="space-y-3">
        <p className="line-clamp-2 text-xs leading-relaxed text-zinc-600">
          {stakeholder.supportStyle}
        </p>
        <div className="grid grid-cols-2 gap-2">
          <div className="rounded-md border border-zinc-100 bg-zinc-50/80 px-2 py-1.5">
            <p className="flex items-center gap-1 text-[10px] font-medium tracking-wide text-zinc-400 uppercase">
              <Clock3 className="size-3" />
              Last touch
            </p>
            <p className="mt-0.5 text-xs font-medium text-zinc-800">
              {formatDate(stakeholder.lastTouchpointDate)}
              <span className="ml-1 font-normal text-zinc-400">
                · {formatRelativeDay(stakeholder.lastTouchpointDate)}
              </span>
            </p>
          </div>
          <div className="rounded-md border border-zinc-100 bg-zinc-50/80 px-2 py-1.5">
            <p className="flex items-center gap-1 text-[10px] font-medium tracking-wide text-zinc-400 uppercase">
              <CalendarClock className="size-3" />
              Next meeting
            </p>
            {stakeholder.nextMeetingDate ? (
              <p className="mt-0.5 truncate text-xs font-medium text-zinc-800">
                {formatDate(stakeholder.nextMeetingDate)}
              </p>
            ) : (
              <p className="mt-0.5 text-xs text-zinc-400">None scheduled</p>
            )}
          </div>
        </div>
        {stakeholder.nextMeetingLabel && (
          <div className="inline-flex max-w-full items-center rounded-md border border-blue-200 bg-blue-50 px-2 py-0.5 text-[11px] font-medium text-blue-800">
            <span className="truncate">{stakeholder.nextMeetingLabel}</span>
          </div>
        )}
      </CardContent>

      <CardFooter className="justify-between bg-zinc-50/70 py-2.5">
        <span className="truncate text-[11px] text-zinc-400">
          {stakeholder.location}
        </span>
        <Button
          variant="outline"
          size="xs"
          onClick={(event) => {
            event.stopPropagation();
            onOpen(stakeholder.id);
          }}
        >
          Open Dossier
          <PanelRightOpen data-icon="inline-end" />
        </Button>
      </CardFooter>
    </Card>
  );
}

export { avatarTone };
