import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { CompanyType } from "@/lib/types";

const TYPE_CLASS: Record<CompanyType, string> = {
  Client:
    "border-zinc-200 bg-zinc-50 text-zinc-700 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300",
  Affiliate:
    "border-sky-200 bg-sky-50 text-sky-800 dark:border-sky-800 dark:bg-sky-950/60 dark:text-sky-300",
  Parent:
    "border-indigo-200 bg-indigo-50 text-indigo-800 dark:border-indigo-800 dark:bg-indigo-950/60 dark:text-indigo-300",
  Vendor:
    "border-orange-200 bg-orange-50 text-orange-900 dark:border-orange-800 dark:bg-orange-950/50 dark:text-orange-300",
};

export function CompanyTypeBadge({ type }: { type: CompanyType }) {
  return (
    <Badge variant="outline" className={cn("font-medium tracking-tight", TYPE_CLASS[type])}>
      {type}
    </Badge>
  );
}
