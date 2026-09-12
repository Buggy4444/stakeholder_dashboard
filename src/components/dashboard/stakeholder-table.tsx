"use client";

import { PanelRightOpen } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { avatarTone } from "@/components/dashboard/stakeholder-card";
import { InfluenceMeter } from "@/components/dashboard/influence-meter";
import { StanceBadge } from "@/components/dashboard/stance-badge";
import { StatusDot } from "@/components/dashboard/status-dot";
import { formatDate, formatRelativeDay } from "@/lib/format";
import { cn } from "@/lib/utils";
import type { Stakeholder } from "@/lib/types";

export function StakeholderTable({
  stakeholders,
  onOpen,
}: {
  stakeholders: Stakeholder[];
  onOpen: (id: string) => void;
}) {
  return (
    <div className="overflow-hidden rounded-xl border border-zinc-200 bg-white">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[980px] text-left text-sm">
          <thead className="border-b border-zinc-200 bg-zinc-50 text-[11px] font-medium tracking-wider text-zinc-500 uppercase">
            <tr>
              <th className="px-4 py-2.5 font-medium">Stakeholder</th>
              <th className="px-4 py-2.5 font-medium">Company</th>
              <th className="px-4 py-2.5 font-medium">Department</th>
              <th className="px-4 py-2.5 font-medium">Stance</th>
              <th className="px-4 py-2.5 font-medium">Influence</th>
              <th className="px-4 py-2.5 font-medium">Last touch</th>
              <th className="px-4 py-2.5 font-medium">Next meeting</th>
              <th className="px-4 py-2.5 font-medium">
                <span className="sr-only">Open</span>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-100">
            {stakeholders.map((stakeholder) => (
              <tr
                key={stakeholder.id}
                className="cursor-pointer transition-colors hover:bg-zinc-50/80"
                onClick={() => onOpen(stakeholder.id)}
              >
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2.5">
                    <div className="relative">
                      <Avatar size="sm">
                        <AvatarFallback
                          className={cn(
                            "text-[10px] font-semibold",
                            avatarTone(stakeholder.name)
                          )}
                        >
                          {stakeholder.initials}
                        </AvatarFallback>
                      </Avatar>
                      <StatusDot
                        availability={stakeholder.availability}
                        className="size-2 ring-white"
                      />
                    </div>
                    <div className="min-w-0">
                      <p className="truncate font-medium text-zinc-950">
                        {stakeholder.name}
                      </p>
                      <p className="truncate text-xs text-zinc-500">
                        {stakeholder.title}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3">
                  <p className="text-xs font-medium text-zinc-800">
                    {stakeholder.company}
                  </p>
                  <p className="text-[11px] text-zinc-400">
                    {stakeholder.companyType}
                  </p>
                </td>
                <td className="px-4 py-3 text-xs text-zinc-600">
                  {stakeholder.department}
                </td>
                <td className="px-4 py-3">
                  <StanceBadge stance={stakeholder.stance} />
                </td>
                <td className="px-4 py-3">
                  <InfluenceMeter level={stakeholder.influence} />
                </td>
                <td className="px-4 py-3 text-xs text-zinc-600">
                  {formatDate(stakeholder.lastTouchpointDate)}
                  <span className="ml-1 text-zinc-400">
                    {formatRelativeDay(stakeholder.lastTouchpointDate)}
                  </span>
                </td>
                <td className="px-4 py-3">
                  {stakeholder.nextMeetingDate ? (
                    <div>
                      <p className="text-xs font-medium text-zinc-800">
                        {formatDate(stakeholder.nextMeetingDate)}
                      </p>
                      {stakeholder.nextMeetingLabel && (
                        <p className="max-w-[160px] truncate text-[11px] text-zinc-400">
                          {stakeholder.nextMeetingLabel}
                        </p>
                      )}
                    </div>
                  ) : (
                    <span className="text-xs text-zinc-400">—</span>
                  )}
                </td>
                <td className="px-4 py-3 text-right">
                  <Button
                    variant="outline"
                    size="xs"
                    onClick={(event) => {
                      event.stopPropagation();
                      onOpen(stakeholder.id);
                    }}
                  >
                    Open
                    <PanelRightOpen data-icon="inline-end" />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
