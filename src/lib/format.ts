const DATE_FMT = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
});

const DATE_FMT_YEAR = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
});

const ENGAGEMENT_TZ = "America/Chicago";

export function calendarToday(timeZone = ENGAGEMENT_TZ, now = new Date()): Date {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(now);
  const year = Number(parts.find((part) => part.type === "year")?.value);
  const month = Number(parts.find((part) => part.type === "month")?.value);
  const day = Number(parts.find((part) => part.type === "day")?.value);
  return new Date(year, month - 1, day);
}

function startOfDay(date: Date): Date {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

export function parseISODate(iso: string): Date {
  const [year, month, day] = iso.split("-").map(Number);
  return new Date(year, month - 1, day);
}

export function formatDate(iso: string, withYear = false): string {
  const date = parseISODate(iso);
  return (withYear ? DATE_FMT_YEAR : DATE_FMT).format(date);
}

export function daysFromToday(iso: string, today = calendarToday()): number {
  const a = startOfDay(parseISODate(iso)).getTime();
  const b = startOfDay(today).getTime();
  return Math.round((a - b) / 86_400_000);
}

export function formatRelativeDay(iso: string, today = calendarToday()): string {
  const delta = daysFromToday(iso, today);
  if (delta === 0) return "Today";
  if (delta === 1) return "Tomorrow";
  if (delta === -1) return "Yesterday";
  if (delta > 1) return `in ${delta} days`;
  return `${Math.abs(delta)}d ago`;
}

export function getInitials(name: string): string {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}
