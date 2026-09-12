import type { Stakeholder } from "@/lib/types";
import { HORIZON_STAKEHOLDERS } from "@/lib/data";

export const POLARIS_STAKEHOLDERS: Stakeholder[] = [
  {
    id: "polaris-sarah-jenkins",
    name: "Sarah Jenkins",
    initials: "SJ",
    title: "Chief Financial Officer",
    company: "Northstar Retail Group",
    companyType: "Client",
    reportsTo: "CEO and the Board",
    tenure: "CFO since 2022",
    department: "Finance",
    stance: "Economic Buyer",
    influence: "High",
    availability: "available",
    location: "Chicago HQ",
    email: "s.jenkins@northstar.com",
    supportStyle:
      "Same buyer as Horizon. For Polaris she wants category-level cost-to-serve, not another omnichannel story.",
    lastTouchpointDate: "2026-09-09",
    nextMeetingDate: "2026-09-29",
    nextMeetingLabel: "Polaris kickoff SteerCo",
    communication: {
      dos: [
        "Separate Polaris scope from Horizon so she does not see double-billing.",
        "Lead with gross-to-net and contribution margin by channel.",
      ],
      donts: [
        "Do not reopen the Horizon automation debate in Polaris kickoff.",
        "Do not staff the same SMEs for both projects without a hours plan.",
      ],
    },
    talkingPointExamples: [
      "Example: 'Polaris answers which categories lose money on last-mile. Horizon answers which network bets we fund.'",
      "Do not say: 'This is Phase 2 of Horizon.' She priced them as separate SoWs.",
    ],
    personalKpis: [
      "Category contribution margin visibility by Q4",
      "SG&A ratio flat through both engagements",
    ],
    sensitivities: [
      "Board asked why two consulting teams are on Northstar at once.",
    ],
    relationshipHistory: [
      {
        date: "2026-09-09",
        context: "Polaris scope call",
        quote:
          "I will fund Polaris if it does not cannibalize Horizon SteerCo bandwidth.",
      },
    ],
    touchpoints: [
      {
        id: "pol-sj-1",
        date: "2026-09-09",
        type: "1:1",
        attendees: ["Sarah Jenkins", "Engagement partner"],
        sentiment: "Neutral",
        takeaways:
          "Approved soft kickoff. Hard gate: no overlapping SME asks the week of SteerCo 3.",
      },
    ],
    actionItems: [
      {
        id: "pol-sj-a1",
        title: "Publish SME hours firewall",
        detail: "Horizon vs Polaris calendar for Finance and Supply Chain SMEs.",
        dueDate: "2026-09-20",
        owner: "PMO",
        completed: false,
        priority: "Critical",
      },
    ],
  },
  {
    id: "polaris-anita-gore",
    name: "Anita Gore",
    initials: "AG",
    title: "VP of Pricing & Revenue Management",
    company: "Northstar Retail Group",
    companyType: "Client",
    reportsTo: "Priya Natarajan, CCO",
    tenure: "VP since 2024 · joined from Best Buy",
    department: "Commercial",
    stance: "Champion",
    influence: "High",
    availability: "available",
    location: "Chicago HQ",
    email: "a.gore@northstar.com",
    supportStyle:
      "Wants list-to-pocket leakage exposed. Will open her price-waterfall models if we do not weaponize them in SteerCo.",
    lastTouchpointDate: "2026-09-10",
    nextMeetingDate: "2026-09-24",
    nextMeetingLabel: "Price waterfall walkthrough",
    communication: {
      dos: [
        "Speak waterfall: list, invoice, pocket, contribution.",
        "Credit her team for the existing model before you critique it.",
      ],
      donts: [
        "Do not present competitor price indexes without her mark-up.",
        "Never imply Commercial is over-discounting without SKU proof.",
      ],
    },
    talkingPointExamples: [
      "Example: 'Anita — we will show pocket margin by channel using your waterfall, not a consulting rebuild.'",
    ],
    personalKpis: [
      "Gross-to-net leakage −80 bps by FY27",
      "Promo ROI transparency for top 200 styles",
    ],
    sensitivities: [
      "Her predecessor left after a pricing 'gotcha' deck. She is allergic to ambush.",
    ],
    relationshipHistory: [
      {
        date: "2026-09-10",
        context: "Intro",
        quote:
          "You can have the model. You cannot have a SteerCo surprise built on it.",
      },
    ],
    touchpoints: [
      {
        id: "pol-ag-1",
        date: "2026-09-10",
        type: "Interview",
        attendees: ["Anita Gore", "Polaris EM"],
        sentiment: "Positive",
        takeaways: "Opened price-waterfall access pending NDA addendum.",
      },
    ],
    actionItems: [
      {
        id: "pol-ag-a1",
        title: "NDA addendum for pricing cube",
        detail: "Legal to clear before extract lands in the workroom.",
        dueDate: "2026-09-18",
        owner: "Legal",
        completed: false,
        priority: "High",
      },
    ],
  },
  {
    id: "polaris-ben-ortiz",
    name: "Ben Ortiz",
    initials: "BO",
    title: "Director of FP&A",
    company: "Northstar Retail Group",
    companyType: "Client",
    reportsTo: "Sarah Jenkins, CFO",
    tenure: "Director since 2021",
    department: "Finance",
    stance: "Gatekeeper",
    influence: "Medium",
    availability: "in-meeting",
    location: "Chicago HQ",
    email: "b.ortiz@northstar.com",
    supportStyle:
      "Owns the planning calendar. Will gate data extracts if Polaris threatens close or Horizon SteerCo prep.",
    lastTouchpointDate: "2026-09-08",
    nextMeetingDate: "2026-09-23",
    nextMeetingLabel: "Data request triage",
    communication: {
      dos: [
        "Batch data asks. One ticket, ranked.",
        "Respect close week — no new extracts Sep 25–30.",
      ],
      donts: [
        "Do not ping analysts directly on Slack.",
        "Avoid last-minute SteerCo number changes without his stamp.",
      ],
    },
    talkingPointExamples: [
      "Example: 'Ben — three extracts only: contribution by channel, freight, and returns. Ranked, with owners.'",
    ],
    personalKpis: [
      "Board pack accuracy",
      "Close cycle held at 6 days",
    ],
    sensitivities: [
      "Burned by Horizon data thrash in August.",
    ],
    relationshipHistory: [
      {
        date: "2026-09-08",
        context: "Kickoff",
        quote: "One ranked list. If it grows, I kill the extract.",
      },
    ],
    touchpoints: [
      {
        id: "pol-bo-1",
        date: "2026-09-08",
        type: "Workshop",
        attendees: ["Ben Ortiz", "Polaris team"],
        sentiment: "Challenging",
        takeaways: "Set a hard cap of three Wave-1 extracts.",
      },
    ],
    actionItems: [
      {
        id: "pol-bo-a1",
        title: "Submit ranked extract list",
        detail: "Max three items for Wave 1.",
        dueDate: "2026-09-16",
        owner: "Polaris EM",
        completed: false,
        priority: "Critical",
      },
    ],
  },
];

export const CAREPATH_STAKEHOLDERS: Stakeholder[] = [
  {
    id: "helix-dr-amara-cole",
    name: "Dr. Amara Cole",
    initials: "AC",
    title: "Chief Medical Officer",
    company: "Helix Health Systems",
    companyType: "Client",
    reportsTo: "CEO / Board Quality Committee",
    tenure: "CMO since 2020 · orthopedic surgeon by training",
    department: "Commercial",
    stance: "Economic Buyer",
    influence: "High",
    availability: "available",
    location: "Boston · Mass General West",
    email: "a.cole@helixhealth.org",
    supportStyle:
      "Clinical outcomes first. Will fund pathway redesign only if quality metrics and physician time are protected on paper.",
    lastTouchpointDate: "2026-09-05",
    nextMeetingDate: "2026-09-18",
    nextMeetingLabel: "Clinical SteerCo",
    communication: {
      dos: [
        "Lead with wait-time and OR utilization, then margin.",
        "Name the physicians who designed the pathway — not just the consultants.",
      ],
      donts: [
        "Do not use retail or airline analogies in clinical SteerCo.",
        "Never imply surgeons are the bottleneck without case-level data.",
      ],
    },
    talkingPointExamples: [
      "Example: 'Amara — ortho wait times drop 18 days if we move ASC-eligible spines out of the main OR block. CMS complication rates hold in the model.'",
      "Do not say: 'This is lean manufacturing for the OR.'",
    ],
    personalKpis: [
      "Ortho/spine wait time <28 days",
      "CMS complication rates at or below peer",
      "Physician engagement score ≥ FY25",
    ],
    sensitivities: [
      "Unionized nursing is watching any 'throughput' language.",
      "A 2024 throughput pilot was blamed for a near-miss — still raw.",
    ],
    relationshipHistory: [
      {
        date: "2026-08-12",
        context: "Clinical design review",
        quote:
          "If quality moves a basis point the wrong way, I will kill the pathway in the room.",
      },
    ],
    touchpoints: [
      {
        id: "hx-ac-1",
        date: "2026-08-12",
        type: "SteerCo",
        attendees: ["Dr. Amara Cole", "Service-line chairs"],
        sentiment: "Challenging",
        takeaways: "Set a hard quality floor before any capacity claim is presented.",
      },
      {
        id: "hx-ac-2",
        date: "2026-09-05",
        type: "1:1",
        attendees: ["Dr. Amara Cole", "Engagement partner"],
        sentiment: "Positive",
        takeaways: "Will champion ASC shift if named surgeons co-author the protocol.",
      },
    ],
    actionItems: [
      {
        id: "hx-ac-a1",
        title: "Co-author ortho ASC protocol",
        detail: "Two named surgeons on the cover before SteerCo.",
        dueDate: "2026-09-17",
        owner: "Clinical workstream",
        completed: false,
        priority: "Critical",
      },
    ],
  },
  {
    id: "helix-jordan-lee",
    name: "Jordan Lee",
    initials: "JL",
    title: "SVP, Ambulatory Operations",
    company: "Helix Health Systems",
    companyType: "Client",
    reportsTo: "COO",
    tenure: "SVP since 2022",
    department: "Supply Chain",
    stance: "Champion",
    influence: "High",
    availability: "traveling",
    location: "Boston · ambulatory network",
    email: "j.lee@helixhealth.org",
    supportStyle:
      "Operator who wants template clinics, not custom every site. Bring staffing ratios and room turns.",
    lastTouchpointDate: "2026-09-08",
    nextMeetingDate: "2026-09-16",
    nextMeetingLabel: "ASC staffing model",
    communication: {
      dos: [
        "Show minutes per visit and rooms turned per day.",
        "Visit two ASCs before you recommend a template.",
      ],
      donts: [
        "Do not design from the academic medical center only.",
        "Avoid 'standard work' language with physicians present.",
      ],
    },
    talkingPointExamples: [
      "Example: 'Jordan — West Roxbury ASC can take 6 additional spines/week at current RN ratios if pre-op clears by 6:30 a.m.'",
    ],
    personalKpis: [
      "Ambulatory contribution margin +5%",
      "Same-day cancel rate <6%",
    ],
    sensitivities: [
      "Community ASCs feel second-class to the flagship hospital.",
    ],
    relationshipHistory: [
      {
        date: "2026-09-08",
        context: "Site walk",
        quote: "Template the community sites first. The flagship will follow if it works.",
      },
    ],
    touchpoints: [
      {
        id: "hx-jl-1",
        date: "2026-09-08",
        type: "Interview",
        attendees: ["Jordan Lee", "Ops workstream"],
        sentiment: "Positive",
        takeaways: "Endorsed community-ASC-first sequencing.",
      },
    ],
    actionItems: [
      {
        id: "hx-jl-a1",
        title: "Staffing ratio pack for SteerCo",
        detail: "RN / scrub / anesthesia by case type.",
        dueDate: "2026-09-16",
        owner: "Ops workstream",
        completed: false,
        priority: "High",
      },
    ],
  },
  {
    id: "helix-priya-shah",
    name: "Priya Shah",
    initials: "PS",
    title: "VP, Revenue Cycle",
    company: "Helix Health Systems",
    companyType: "Client",
    reportsTo: "CFO",
    tenure: "VP since 2023",
    department: "Finance",
    stance: "Skeptic",
    influence: "Medium",
    availability: "available",
    location: "Boston HQ",
    email: "p.shah@helixhealth.org",
    supportStyle:
      "Worried pathway changes break authorization and coding. Needs a denial-risk view before she supports go-live.",
    lastTouchpointDate: "2026-09-03",
    nextMeetingDate: "2026-09-19",
    nextMeetingLabel: "Auth & coding risk review",
    communication: {
      dos: [
        "Bring CPT / auth implications for ASC shift.",
        "Quantify denial risk in dollars, not RAG.",
      ],
      donts: [
        "Do not tell her clinical will 'figure coding later.'",
        "Avoid promising clean claims without a pilot.",
      ],
    },
    talkingPointExamples: [
      "Example: 'Priya — ASC spines need prior-auth playbook v2 before first case. Here is the denial exposure if we skip it.'",
    ],
    personalKpis: [
      "Denial rate <4% on ortho",
      "Days in A/R held through redesign",
    ],
    sensitivities: [
      "Last OR redesign spiked denials for 11 weeks.",
    ],
    relationshipHistory: [
      {
        date: "2026-09-03",
        context: "1:1",
        quote: "No playbook, no support. I will not clean up another clinical surprise.",
      },
    ],
    touchpoints: [
      {
        id: "hx-ps-1",
        date: "2026-09-03",
        type: "1:1",
        attendees: ["Priya Shah", "Finance workstream"],
        sentiment: "Challenging",
        takeaways: "Hard requirement: auth playbook before SteerCo endorsement.",
      },
    ],
    actionItems: [
      {
        id: "hx-ps-a1",
        title: "Draft ASC auth playbook",
        detail: "Ortho/spine codes, payor matrix, owner after go-live.",
        dueDate: "2026-09-18",
        owner: "Revenue cycle workstream",
        completed: false,
        priority: "Critical",
      },
    ],
  },
  {
    id: "helix-noah-kim",
    name: "Noah Kim",
    initials: "NK",
    title: "CIO",
    company: "Helix Health Systems",
    companyType: "Client",
    reportsTo: "CEO",
    tenure: "CIO since 2021 · Epic program lead",
    department: "Technology",
    stance: "Gatekeeper",
    influence: "High",
    availability: "ooo",
    location: "Boston · returns Sep 15",
    email: "n.kim@helixhealth.org",
    supportStyle:
      "Epic is sacred. Pathway tools must sit inside Epic workflows or he will block.",
    lastTouchpointDate: "2026-08-28",
    nextMeetingDate: "2026-09-20",
    nextMeetingLabel: "Epic workflow review",
    communication: {
      dos: [
        "Show Epic build vs. side system explicitly.",
        "Bring Clinical Informatics, not just Ops.",
      ],
      donts: [
        "Do not propose a shadow scheduling tool.",
        "Avoid vendor demos without his architect present.",
      ],
    },
    talkingPointExamples: [
      "Example: 'Noah — CarePath uses Epic Cadence and ASAP only. No side scheduler. Build estimate is 14 weeks with your team named.'",
    ],
    personalKpis: [
      "Zero Sev-1 during pathway go-lives",
      "Epic upgrade calendar protected",
    ],
    sensitivities: [
      "A prior consulting team sold a bolt-on that never integrated.",
    ],
    relationshipHistory: [
      {
        date: "2026-08-28",
        context: "Architecture",
        quote: "If it is not in Epic, it is not happening.",
      },
    ],
    touchpoints: [
      {
        id: "hx-nk-1",
        date: "2026-08-28",
        type: "Workshop",
        attendees: ["Noah Kim", "Clinical informatics"],
        sentiment: "Neutral",
        takeaways: "Epic-only constraint locked.",
      },
    ],
    actionItems: [
      {
        id: "hx-nk-a1",
        title: "Epic build estimate",
        detail: "Cadence / ASAP / SmartText for ASC pathway.",
        dueDate: "2026-09-19",
        owner: "Tech workstream",
        completed: false,
        priority: "High",
      },
    ],
  },
];

export const GATEWAY_STAKEHOLDERS: Stakeholder[] = [
  {
    id: "meridian-lena-park",
    name: "Lena Park",
    initials: "LP",
    title: "Chief Digital Officer",
    company: "Meridian National Bank",
    companyType: "Client",
    reportsTo: "CEO",
    tenure: "CDO since 2024 · ex-Capital One",
    department: "Technology",
    stance: "Economic Buyer",
    influence: "High",
    availability: "available",
    location: "Charlotte HQ",
    email: "l.park@meridianbank.com",
    supportStyle:
      "Product-minded buyer. Wants funnel math and a build-vs-buy decision by SteerCo 2 — not another discovery tour.",
    lastTouchpointDate: "2026-09-07",
    nextMeetingDate: "2026-09-22",
    nextMeetingLabel: "SteerCo 2",
    communication: {
      dos: [
        "Open with completion rate, time-to-fund, and KYC queue age.",
        "Bring a clear vendor shortlist with kill criteria.",
      ],
      donts: [
        "Do not re-litigate the failed 2025 in-house rebuild without new facts.",
        "Avoid 'journey' decks without conversion numbers.",
      ],
    },
    talkingPointExamples: [
      "Example: 'Lena — desktop completion is 41%, mobile 22%. KYC manual review is the cliff at step 4. Buy for KYC orchestration; build for Meridian UX shell.'",
    ],
    personalKpis: [
      "Digital account open completion +15 pts",
      "Time-to-fund <10 minutes median",
    ],
    sensitivities: [
      "Board still asks about the 2025 write-off.",
    ],
    relationshipHistory: [
      {
        date: "2026-09-07",
        context: "Working session",
        quote: "Give me a decision, not another map of the funnel I already know.",
      },
    ],
    touchpoints: [
      {
        id: "md-lp-1",
        date: "2026-09-07",
        type: "Workshop",
        attendees: ["Lena Park", "Product leads"],
        sentiment: "Neutral",
        takeaways: "Demanded build-vs-buy recommendation by Sep 22.",
      },
    ],
    actionItems: [
      {
        id: "md-lp-a1",
        title: "Build-vs-buy recommendation",
        detail: "KYC orchestration vendors scored; UX shell stays in-house.",
        dueDate: "2026-09-20",
        owner: "Engagement manager",
        completed: false,
        priority: "Critical",
      },
    ],
  },
  {
    id: "meridian-chris-nguyen",
    name: "Chris Nguyen",
    initials: "CN",
    title: "Head of Consumer Deposits",
    company: "Meridian National Bank",
    companyType: "Client",
    reportsTo: "President, Consumer Banking",
    tenure: "Head of Deposits since 2022",
    department: "Commercial",
    stance: "Champion",
    influence: "High",
    availability: "in-meeting",
    location: "Charlotte HQ",
    email: "c.nguyen@meridianbank.com",
    supportStyle:
      "P&L owner. Will champion investment if new-to-bank checking growth is the headline metric.",
    lastTouchpointDate: "2026-09-06",
    nextMeetingDate: "2026-09-21",
    nextMeetingLabel: "Funnel value case",
    communication: {
      dos: [
        "Tie every fix to funded accounts and deposit balance.",
        "Segment new-to-bank vs. existing customers.",
      ],
      donts: [
        "Do not optimize for apps downloaded.",
        "Avoid credit-product cross-sell in the first SteerCo.",
      ],
    },
    talkingPointExamples: [
      "Example: 'Chris — closing the mobile KYC cliff is worth ~18k funded checking accounts / quarter at current media spend.'",
    ],
    personalKpis: [
      "New-to-bank checking +12% YoY",
      "Digital mix of opens ≥55%",
    ],
    sensitivities: [
      "Branch lobby still believes digital steals their incentive pool.",
    ],
    relationshipHistory: [
      {
        date: "2026-09-06",
        context: "1:1",
        quote: "Funded accounts. Not vanity conversion.",
      },
    ],
    touchpoints: [
      {
        id: "md-cn-1",
        date: "2026-09-06",
        type: "1:1",
        attendees: ["Chris Nguyen", "Commercial workstream"],
        sentiment: "Positive",
        takeaways: "Will sponsor SteerCo if value case is deposit-led.",
      },
    ],
    actionItems: [
      {
        id: "md-cn-a1",
        title: "Deposit value bridge",
        detail: "Funded accounts × balance × margin for SteerCo 2.",
        dueDate: "2026-09-19",
        owner: "Commercial workstream",
        completed: false,
        priority: "High",
      },
    ],
  },
  {
    id: "meridian-ravi-mehta",
    name: "Ravi Mehta",
    initials: "RM",
    title: "Chief Risk Officer",
    company: "Meridian National Bank",
    companyType: "Client",
    reportsTo: "CEO / Board Risk Committee",
    tenure: "CRO since 2019",
    department: "Finance",
    stance: "Gatekeeper",
    influence: "High",
    availability: "available",
    location: "Charlotte HQ",
    email: "r.mehta@meridianbank.com",
    supportStyle:
      "BSA/AML and model risk are non-negotiable. Speed is fine after control design is written.",
    lastTouchpointDate: "2026-09-04",
    nextMeetingDate: "2026-09-23",
    nextMeetingLabel: "KYC control design",
    communication: {
      dos: [
        "Bring control narratives and model inventory.",
        "Separate customer experience from BSA obligations.",
      ],
      donts: [
        "Do not propose auto-approve thresholds without Risk sign-off.",
        "Avoid 'fintech speed' as a justification.",
      ],
    },
    talkingPointExamples: [
      "Example: 'Ravi — vendor orchestration sits behind existing CIP/CDD rules. No threshold changes in Wave 1.'",
    ],
    personalKpis: [
      "No MRAs on digital onboarding",
      "SAR quality held through volume increase",
    ],
    sensitivities: [
      "OCC exam in Q4 — anything new gets heightened scrutiny.",
    ],
    relationshipHistory: [
      {
        date: "2026-09-04",
        context: "Risk review",
        quote: "You can accelerate the queue. You cannot thin the control.",
      },
    ],
    touchpoints: [
      {
        id: "md-rm-1",
        date: "2026-09-04",
        type: "Interview",
        attendees: ["Ravi Mehta", "Risk workstream"],
        sentiment: "Neutral",
        takeaways: "Wave 1 = orchestration only; no policy changes.",
      },
    ],
    actionItems: [
      {
        id: "md-rm-a1",
        title: "Control narrative for SteerCo",
        detail: "CIP/CDD unchanged; orchestration in scope only.",
        dueDate: "2026-09-21",
        owner: "Risk workstream",
        completed: false,
        priority: "Critical",
      },
    ],
  },
  {
    id: "meridian-sofia-ramos",
    name: "Sofia Ramos",
    initials: "SR",
    title: "VP, KYC Operations",
    company: "Meridian National Bank",
    companyType: "Client",
    reportsTo: "Ravi Mehta, CRO",
    tenure: "VP since 2021 · built the KYC ops center",
    department: "Supply Chain",
    stance: "Champion",
    influence: "Medium",
    availability: "available",
    location: "Charlotte · KYC ops floor",
    email: "s.ramos@meridianbank.com",
    supportStyle:
      "Floor leader. Will give you queue truth if you respect analyst capacity and do not promise AI magic.",
    lastTouchpointDate: "2026-09-09",
    nextMeetingDate: "2026-09-17",
    nextMeetingLabel: "Queue observation",
    communication: {
      dos: [
        "Sit on the floor for a shift before modeling.",
        "Separate STP-eligible from true manual.",
      ],
      donts: [
        "Do not call analysts 'the bottleneck' in their presence.",
        "Avoid headcount cuts in the first recommendation.",
      ],
    },
    talkingPointExamples: [
      "Example: 'Sofia — 38% of the queue is document re-requests. Fixing capture quality beats adding analysts.'",
    ],
    personalKpis: [
      "Median KYC cycle time <4 hours",
      "Analyst utilization 75–85%",
    ],
    sensitivities: [
      "Attrition spiked after the 2025 rebuild overtime surge.",
    ],
    relationshipHistory: [
      {
        date: "2026-09-09",
        context: "Floor walk",
        quote: "Watch a re-request before you buy another tool.",
      },
    ],
    touchpoints: [
      {
        id: "md-sr-1",
        date: "2026-09-09",
        type: "Interview",
        attendees: ["Sofia Ramos", "Ops workstream"],
        sentiment: "Positive",
        takeaways: "Opened queue analytics; offered Sep 17 observation.",
      },
    ],
    actionItems: [
      {
        id: "md-sr-a1",
        title: "Document re-request root cause",
        detail: "Top 5 capture failures with volume.",
        dueDate: "2026-09-17",
        owner: "Ops workstream",
        completed: false,
        priority: "High",
      },
    ],
  },
];

export const LEDGER_STAKEHOLDERS: Stakeholder[] = [
  {
    id: "cascade-henry-vogel",
    name: "Henry Vogel",
    initials: "HV",
    title: "CEO",
    company: "Cascade Industrials",
    companyType: "Client",
    reportsTo: "Family board",
    tenure: "CEO since 2016 · third-generation",
    department: "Commercial",
    stance: "Economic Buyer",
    influence: "High",
    availability: "traveling",
    location: "Minneapolis · branch tour weeks",
    email: "h.vogel@cascadeindustrials.com",
    supportStyle:
      "Owner-operator. Wants a plain-English case on price leakage and inventory cash — no PE jargon.",
    lastTouchpointDate: "2026-09-02",
    nextMeetingDate: "2026-10-06",
    nextMeetingLabel: "Proposal SteerCo",
    communication: {
      dos: [
        "Use branch examples he knows by name.",
        "Show cash released, not just margin bps.",
      ],
      donts: [
        "Do not talk like a PE operating partner.",
        "Avoid recommending headcount cuts in proposal phase.",
      ],
    },
    talkingPointExamples: [
      "Example: 'Henry — Duluth and Green Bay are giving away 120 bps on negotiated accounts that never hit the price desk.'",
    ],
    personalKpis: [
      "Family dividend covered",
      "Share loss vs. national chains slowed",
    ],
    sensitivities: [
      "Sensitive about 'professionalizing' language — reads as insult.",
    ],
    relationshipHistory: [
      {
        date: "2026-09-02",
        context: "Proposal meeting",
        quote: "Tell me where the cash is. Skip the transformation speech.",
      },
    ],
    touchpoints: [
      {
        id: "cas-hv-1",
        date: "2026-09-02",
        type: "Interview",
        attendees: ["Henry Vogel", "Engagement partner"],
        sentiment: "Neutral",
        takeaways: "Open to diagnostic if scope stays pricing + inventory.",
      },
    ],
    actionItems: [
      {
        id: "cas-hv-a1",
        title: "Proposal one-pager",
        detail: "Cash themes only; no org redesign.",
        dueDate: "2026-09-25",
        owner: "Engagement partner",
        completed: false,
        priority: "High",
      },
    ],
  },
  {
    id: "cascade-diana-frost",
    name: "Diana Frost",
    initials: "DF",
    title: "CFO",
    company: "Cascade Industrials",
    companyType: "Client",
    reportsTo: "Henry Vogel, CEO",
    tenure: "CFO since 2018 · first non-family C-suite",
    department: "Finance",
    stance: "Champion",
    influence: "High",
    availability: "available",
    location: "Minneapolis HQ",
    email: "d.frost@cascadeindustrials.com",
    supportStyle:
      "Internal champion for an outside view. Needs cover with the family board on fees and scope.",
    lastTouchpointDate: "2026-09-05",
    nextMeetingDate: "2026-09-28",
    nextMeetingLabel: "Fee & scope alignment",
    communication: {
      dos: [
        "Give her a board-ready fee justification.",
        "Keep scope tight so she can defend it.",
      ],
      donts: [
        "Do not expand into org design in the proposal.",
        "Avoid surprising Henry in a group setting.",
      ],
    },
    talkingPointExamples: [
      "Example: 'Diana — six-week diagnostic, pricing + turns only, fixed fee. You keep the option on implementation.'",
    ],
    personalKpis: [
      "Working capital days −5",
      "Gross margin +40 bps",
    ],
    sensitivities: [
      "Family still debates whether outside help is needed.",
    ],
    relationshipHistory: [
      {
        date: "2026-09-05",
        context: "1:1",
        quote: "Help me sell a tight scope. If it balloons, I lose the room.",
      },
    ],
    touchpoints: [
      {
        id: "cas-df-1",
        date: "2026-09-05",
        type: "1:1",
        attendees: ["Diana Frost", "Partner"],
        sentiment: "Positive",
        takeaways: "Will sponsor if proposal stays narrow.",
      },
    ],
    actionItems: [
      {
        id: "cas-df-a1",
        title: "Board fee memo",
        detail: "One page for family board packet.",
        dueDate: "2026-09-24",
        owner: "Partner",
        completed: false,
        priority: "Critical",
      },
    ],
  },
];

export const STAKEHOLDERS_BY_PROJECT: Record<string, Stakeholder[]> = {
  horizon: HORIZON_STAKEHOLDERS,
  "northstar-cost": POLARIS_STAKEHOLDERS,
  "helix-care": CAREPATH_STAKEHOLDERS,
  "meridian-onboard": GATEWAY_STAKEHOLDERS,
  "cascade-pricing": LEDGER_STAKEHOLDERS,
};

export function getStakeholdersForProject(projectId: string): Stakeholder[] {
  return STAKEHOLDERS_BY_PROJECT[projectId] ?? [];
}

/** @deprecated Use getStakeholdersForProject('horizon') */
export const STAKEHOLDERS = HORIZON_STAKEHOLDERS;
