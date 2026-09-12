import { cn } from "@/lib/utils";
import type { InfluenceLevel } from "@/lib/types";

const LEVEL_TO_BARS: Record<InfluenceLevel, number> = {
  Low: 1,
  Medium: 2,
  High: 3,
};

export function InfluenceMeter({
  level,
  compact = false,
}: {
  level: InfluenceLevel;
  compact?: boolean;
}) {
  const filled = LEVEL_TO_BARS[level];

  return (
    <div
      className={cn("flex items-center gap-1.5", compact && "gap-1")}
      title={`${level} influence`}
    >
      <div className="flex items-end gap-0.5" aria-hidden>
        {[1, 2, 3].map((bar) => (
          <span
            key={bar}
            className={cn(
              "w-1 rounded-[1px]",
              bar === 1 && "h-2",
              bar === 2 && "h-2.5",
              bar === 3 && "h-3.5",
              bar <= filled ? "bg-zinc-800" : "bg-zinc-200"
            )}
          />
        ))}
      </div>
      {!compact && (
        <span className="text-[11px] font-medium tracking-wide text-zinc-500 uppercase">
          {level}
        </span>
      )}
    </div>
  );
}
