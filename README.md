# Stakeholder 360

Multi-project engagement dashboard for a management consulting firm: a **client database**, live **project portfolio**, and per-engagement **Stakeholder 360** maps.

## Stack

Next.js (App Router), TypeScript, Tailwind CSS, shadcn/ui (Radix), Lucide.

## Run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Navigation

| Route | What you get |
| --- | --- |
| `/` | Firm portfolio — clients + active projects |
| `/clients` | Full client database |
| `/clients/[clientId]` | Client profile and that account’s projects |
| `/projects/[projectId]` | Stakeholder 360 for one engagement |

## Seeded book of business

**Clients:** Northstar Retail Group, Helix Health Systems, Meridian National Bank, Cascade Industrials (prospect).

**Projects:** Horizon, Polaris, CarePath, Gateway, Ledger — each with its own stakeholder map.
