import { cn } from "@/lib/utils";
import type { Availability } from "@/lib/types";

const STATUS: Record<
  Availability,
  { label: string; className: string }
> = {
  available: { label: "Available", className: "bg-emerald-500" },
  "in-meeting": { label: "In a meeting", className: "bg-amber-400" },
  traveling: { label: "Traveling", className: "bg-blue-500" },
  ooo: { label: "Out of office", className: "bg-zinc-400" },
};

export function StatusDot({
  availability,
  className,
}: {
  availability: Availability;
  className?: string;
}) {
  const status = STATUS[availability];
  return (
    <span
      title={status.label}
      className={cn(
        "absolute right-0 bottom-0 z-10 size-2.5 rounded-full ring-2 ring-white",
        status.className,
        className
      )}
    />
  );
}

export { STATUS as AVAILABILITY_STATUS };
