import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { Stance } from "@/lib/types";

const STANCE_CLASS: Record<Stance, string> = {
  Champion:
    "border-emerald-200 bg-emerald-50 text-emerald-800 dark:border-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300",
  "Economic Buyer":
    "border-blue-200 bg-blue-50 text-blue-800 dark:border-blue-800 dark:bg-blue-950/60 dark:text-blue-300",
  Gatekeeper:
    "border-violet-200 bg-violet-50 text-violet-800 dark:border-violet-800 dark:bg-violet-950/60 dark:text-violet-300",
  Neutral:
    "border-zinc-200 bg-zinc-50 text-zinc-700 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300",
  Skeptic:
    "border-rose-200 bg-amber-50 text-rose-800 dark:border-rose-900 dark:bg-amber-950/50 dark:text-amber-300",
};

const STANCE_DOT: Record<Stance, string> = {
  Champion: "bg-emerald-500",
  "Economic Buyer": "bg-blue-500",
  Gatekeeper: "bg-violet-500",
  Neutral: "bg-zinc-400",
  Skeptic: "bg-rose-500",
};

export function StanceBadge({
  stance,
  className,
}: {
  stance: Stance;
  className?: string;
}) {
  return (
    <Badge
      variant="outline"
      className={cn("gap-1.5 font-medium tracking-tight", STANCE_CLASS[stance], className)}
    >
      <span className={cn("size-1.5 rounded-full", STANCE_DOT[stance])} />
      {stance === "Skeptic" ? "Skeptic / Blocker" : stance}
    </Badge>
  );
}
