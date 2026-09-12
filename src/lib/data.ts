import type { Stakeholder } from "@/lib/types";

export const HORIZON_STAKEHOLDERS: Stakeholder[] = [
  {
    id: "sarah-jenkins",
    name: "Sarah Jenkins",
    initials: "SJ",
    title: "Chief Financial Officer",
    company: "Northstar Retail Group",
    companyType: "Client",
    reportsTo: "CEO and the Board",
    tenure: "CFO since 2022 · 11 years at Northstar",
    department: "Finance",
    stance: "Economic Buyer",
    influence: "High",
    availability: "available",
    location: "Chicago HQ",
    email: "s.jenkins@northstar.com",
    supportStyle:
      "Prefers data-first one-pagers. Hates slide narrative. Lead with NPV, payback, and what she can cut.",
    lastTouchpointDate: "2026-09-08",
    nextMeetingDate: "2026-09-15",
    nextMeetingLabel: "SteerCo 3 pre-read",
    communication: {
      dos: [
        "Open with the decision, then the three numbers that justify it (EBITDA bps, 18-month payback, cash impact).",
        "Bring a one-page memo plus a backup appendix. She will skip the appendix unless challenged.",
        "Quantify optionality: what we stop, pause, or stage if the value case slips.",
        "Flag risks in dollars and timing, not in RAG colors.",
      ],
      donts: [
        "Do not walk a 40-page storyboard. She will interrupt by slide 4.",
        "Never use 'digital transformation' without a cash-flow bridge.",
        "Avoid benchmarking against Amazon or 'best-in-class retailers' she considers non-comparable.",
        "Do not socialize a number with her LT before she has seen it.",
      ],
    },
    talkingPointExamples: [
      "Example open: 'Sarah — recommendation is $18M now, $41M gated on Q1 Joliet unit-cost. If we miss by 4%, we kill pack automation and keep the control tower.'",
      "Example kill-list: 'We would stop the content-studio build, the second OMS overlay, and the store-app rewrite. That funds the inventory-truth path.'",
      "Example payback: 'Simple payback is 16 months on the DC cluster, 22 months if we include store ship-from-store. We are only asking you to fund the 16-month slice.'",
      "Do not say: 'This is table-stakes digital transformation.' She will hear unfunded opex.",
    ],
    personalKpis: [
      "FY27 EBITDA margin +80 to +120 bps vs. FY26",
      "Any material tech/opex spend must show ≤18-month simple payback",
      "Net working capital days: inventory −3 days by Q2 FY27",
      "SG&A ratio held flat despite omnichannel build-out",
      "Board-level credibility on capital allocation after last year's missed holiday guide",
    ],
    sensitivities: [
      "Still accountable for the FY25 holiday miss; any demand-uplift claim will be stress-tested.",
      "Deeply skeptical of 'platform' spend that cannot be turned off in 90 days.",
      "Do not imply Finance is the bottleneck. Frame IT sequencing and operating-model change as the constraint.",
      "Headcount requests from Supply Chain will be dead on arrival unless productivity per FTE is shown first.",
    ],
    relationshipHistory: [
      {
        date: "2026-06-12",
        context: "Kickoff SteerCo",
        quote:
          "I did not hire you to tell me omnichannel is important. I hired you to tell me which two bets we can actually fund.",
      },
      {
        date: "2026-08-04",
        context: "Value-case working session",
        quote:
          "If I cannot see the cash in 18 months, it is a science project. Science projects do not survive my budget.",
      },
      {
        date: "2026-09-08",
        context: "1:1 with engagement manager",
        quote:
          "Give me a kill-list. I will champion the rest in SteerCo if you are honest about what dies.",
      },
    ],
    touchpoints: [
      {
        id: "sj-1",
        date: "2026-06-12",
        type: "SteerCo",
        attendees: ["Sarah Jenkins", "Priya Natarajan", "Engagement partner"],
        sentiment: "Neutral",
        takeaways:
          "Set a hard gate: no initiative proceeds to Wave 3 without a signed NPV and an 18-month payback view. Asked the team to stop using 'enabler' language.",
        quote: "Enablers are costs until they produce a line on my P&L.",
      },
      {
        id: "sj-2",
        date: "2026-08-04",
        type: "Workshop",
        attendees: ["Sarah Jenkins", "James Whitfield", "Case team"],
        sentiment: "Challenging",
        takeaways:
          "Rejected v1 value case. Warehouse automation savings were double-counted against labor the DC has not yet released. Asked for a bottoms-up FTE model by site.",
      },
      {
        id: "sj-3",
        date: "2026-09-08",
        type: "1:1",
        attendees: ["Sarah Jenkins", "Engagement manager"],
        sentiment: "Positive",
        takeaways:
          "Warm to a staged capital plan: $18M Wave 3, $41M contingent on Q1 DC productivity. Will sponsor if we bring a kill-list of lower-ROI digital merchandising work.",
        quote: "Give me a kill-list. I will champion the rest in SteerCo if you are honest about what dies.",
      },
    ],
    actionItems: [
      {
        id: "sj-a1",
        title: "Pre-align SteerCo 3 NPV pack",
        detail:
          "Send the 4-page value case 48 hours before SteerCo. Include kill-list and staged capital path.",
        dueDate: "2026-09-13",
        owner: "Engagement manager",
        completed: false,
        priority: "Critical",
      },
      {
        id: "sj-a2",
        title: "Confirm FY27 opex envelope",
        detail:
          "Need verbal confirmation that $6.4M incremental opex is inside the board-approved digital envelope.",
        dueDate: "2026-09-15",
        owner: "Sarah Jenkins",
        completed: false,
        priority: "High",
      },
      {
        id: "sj-a3",
        title: "Working-capital bridge sign-off",
        detail:
          "Inventory-days model from Network Planning must be initialed before it appears in the board appendix.",
        dueDate: "2026-09-18",
        owner: "James Whitfield",
        completed: false,
        priority: "Normal",
      },
    ],
  },
  {
    id: "marcus-vance",
    name: "Marcus Vance",
    initials: "MV",
    title: "VP of Supply Chain Operations",
    company: "Northstar Retail Group",
    companyType: "Client",
    reportsTo: "COO",
    tenure: "VP since 2021 · previously Joliet DC GM",
    department: "Supply Chain",
    stance: "Champion",
    influence: "High",
    availability: "in-meeting",
    location: "Chicago HQ · DCs weekly",
    email: "m.vance@northstar.com",
    supportStyle:
      "Wants the team to validate warehouse automation and his FY27 headcount case. Walk the floor with him before you model it.",
    lastTouchpointDate: "2026-09-09",
    nextMeetingDate: "2026-09-14",
    nextMeetingLabel: "Joliet DC site walk",
    communication: {
      dos: [
        "Lead with operational reality: units per labor hour, overtime, trailer dwell, and split-ship rate.",
        "Credit his team in the room. He will go to war for you if he does not feel used as a data source.",
        "Bring a point of view on automation vs. labor — he already has one and wants it pressure-tested, not replaced.",
        "Visit Joliet or Reno before SteerCo. He discounts any recommendation that has not seen a pick module.",
      ],
      donts: [
        "Do not treat store ops as the customer of the DC. He will shut down.",
        "Never present a headcount reduction without a 12-month attrition and overtime path.",
        "Avoid 'lean' jargon from prior manufacturing work. This network is retail peak, not a plant.",
        "Do not copy Priya on labor models until Marcus has marked them up.",
      ],
    },
    talkingPointExamples: [
      "Example floor line: 'Marcus, we walked Joliet at 4 a.m. Congestion is pack-station starvation, not WMS. The 42 roles are a control-tower investment against overtime, not a headcount grab.'",
      "Example SteerCo cover: 'If the 42 FTEs sit in the appendix, he will not carry automation in the room. Put them in the main pack as productivity.'",
      "Example union language: 'Say assisted pick in mixed rooms. Do not say automation if Joliet hourly leads are present.'",
      "Do not say: 'Stores are the customer of the DC.' He will end the meeting.",
    ],
    personalKpis: [
      "Cost per unit shipped: −7% vs. FY26 by Q4",
      "Peak overtime hours <12% of DC labor (was 19% last holiday)",
      "Split-ship rate on omnichannel orders <8%",
      "Fill rate to stores 97.5% during peak week",
      "Board narrative: 'we can actually fulfill the demand Commercial sells'",
    ],
    sensitivities: [
      "FY26 peak was a public miss — out-of-stocks were blamed on his network, not on buy-in accuracy.",
      "Union conversations at Joliet are live. Any 'automation' slide can leak; use 'assisted pick' language in mixed rooms.",
      "He wants 42 additional FTEs in network planning and control-tower roles. Needs our diagnostic to justify, not bury, that ask.",
      "Distrusts Digital Merchandising promises on conversion that ignore fulfillment constraint.",
    ],
    relationshipHistory: [
      {
        date: "2026-07-01",
        context: "Joliet DC interview",
        quote:
          "Last year's consultants never left the 12th floor. If you want my people, earn them on the floor at 4 a.m.",
      },
      {
        date: "2026-09-09",
        context: "Labor-model review",
        quote:
          "Validate the 42 roles. I will carry the automation case in SteerCo. Do not make me look like I am empire-building.",
      },
    ],
    touchpoints: [
      {
        id: "mv-1",
        date: "2026-07-01",
        type: "Interview",
        attendees: ["Marcus Vance", "Joliet GM", "Workstream lead"],
        sentiment: "Challenging",
        takeaways:
          "Initial skepticism of another diagnostic. Opened up after a 90-minute floor walk. Identified pick-module congestion and pack-station starvation as the true constraint, not 'systems.'",
        quote:
          "Last year's consultants never left the 12th floor. If you want my people, earn them on the floor at 4 a.m.",
      },
      {
        id: "mv-2",
        date: "2026-08-19",
        type: "Workshop",
        attendees: ["Marcus Vance", "Nadia El-Sayed", "Case team"],
        sentiment: "Positive",
        takeaways:
          "Aligned on a three-node automation thesis: Joliet AMR, Reno pack automation, and a shared control tower. Asked us to keep store-fulfillment in a later wave.",
      },
      {
        id: "mv-3",
        date: "2026-09-09",
        type: "1:1",
        attendees: ["Marcus Vance", "Engagement partner"],
        sentiment: "Positive",
        takeaways:
          "Will verbally support the value case in SteerCo 3 if the FTE expansion is in the main pack, not the appendix. Offered Joliet for a partner site visit on Sep 14.",
        quote:
          "Validate the 42 roles. I will carry the automation case in SteerCo. Do not make me look like I am empire-building.",
      },
    ],
    actionItems: [
      {
        id: "mv-a1",
        title: "Include control-tower FTE case in SteerCo pack",
        detail:
          "42 roles must appear as a productivity investment, not a cost. Tie each cluster to a unit-cost lever.",
        dueDate: "2026-09-13",
        owner: "Workstream lead",
        completed: false,
        priority: "Critical",
      },
      {
        id: "mv-a2",
        title: "Joliet partner walk — Sep 14",
        detail:
          "Confirm PPE, union protocol, and no photography in the pick module. Brief partner on peak-week story.",
        dueDate: "2026-09-14",
        owner: "Marcus Vance",
        completed: false,
        priority: "High",
      },
      {
        id: "mv-a3",
        title: "Release DC labor extract",
        detail:
          "Need 18 months of overtime, agency, and units-per-hour by building. Data owner is Nadia; Marcus must greenlight.",
        dueDate: "2026-09-12",
        owner: "Nadia El-Sayed",
        completed: true,
        priority: "High",
      },
    ],
  },
  {
    id: "elena-rostova",
    name: "Elena Rostova",
    initials: "ER",
    title: "VP of Enterprise Architecture",
    company: "Northstar Retail Group",
    companyType: "Client",
    reportsTo: "CIO",
    tenure: "VP since 2020 · joined from Target technology",
    department: "Technology",
    stance: "Gatekeeper",
    influence: "High",
    availability: "available",
    location: "New York · remote Thu–Fri",
    email: "e.rostova@northstar.com",
    supportStyle:
      "Integration-first. Will not bless a roadmap until SAP, identity, and PCI blast radius are written down.",
    lastTouchpointDate: "2026-09-05",
    nextMeetingDate: "2026-09-16",
    nextMeetingLabel: "Architecture review",
    communication: {
      dos: [
        "Lead with system-of-record, data lineage, and who owns the interface after we leave.",
        "Send architecture diagrams 24 hours ahead. She annotates in silence and then decides.",
        "Separate 'tactical glue' from 'target state.' She will accept a 18-month transition if it is explicit.",
        "Bring InfoSec (Robert) only after she has seen the first cut — joint ambush backfires.",
      ],
      donts: [
        "Do not propose a new commerce platform in the first 20 minutes.",
        "Never say 'we will put a layer on SAP.' She has been burned by three layers already.",
        "Avoid vendor names as strategy. MACH, composable, and 'headless' are trigger words in her LT.",
        "Do not promise dates that require a SAP freeze she has not granted.",
      ],
    },
    talkingPointExamples: [
      "Example architecture open: 'Elena — SAP remains system of record for inventory, order, and finance. The event bus is a transition pattern with a 24-month deprecation of the 2024 OMS overlay, not a fourth overlay.'",
      "Example pre-read: 'Sending the data-flow, identity model, and blast radius 24 hours before ARB. We will not ask you to bless dates that need a freeze you have not granted.'",
      "Example vendor discipline: 'We are not proposing MACH or a new commerce platform. The decision is interface ownership after we leave.'",
      "Do not say: 'We will put a thin layer on SAP.' That is how the last overlay was sold.",
    ],
    personalKpis: [
      "Zero Sev-1 integrations during holiday freeze (Nov 10 – Jan 8)",
      "SAP S/4 core remains system of record for inventory, order, and finance",
      "Reduce point-to-point interfaces by 30% over 24 months",
      "Security exceptions closed within 45 days — currently off-track",
      "Architecture Review Board cycle time <10 business days",
    ],
    sensitivities: [
      "The 2024 OMS overlay still has no clean owner and failed a SOX control in Q1. She will block anything that looks like a fourth overlay.",
      "Robert Hale and Elena are aligned on paper, tense in practice — he wants threat models, she wants fewer systems.",
      "Legacy SAP ECC customizations in ATP are poorly documented. She knows it; do not expose her in SteerCo.",
      "Consultants previously sold a '12-week integration.' It took 11 months. She will ask for the integration workback in the room.",
    ],
    relationshipHistory: [
      {
        date: "2026-07-22",
        context: "ARB intake",
        quote:
          "You can have speed or you can have a landscape I can operate. You cannot have a third overlay and my signature.",
      },
      {
        date: "2026-09-05",
        context: "Security documentation request",
        quote:
          "Send the data-flow, the identity model, and the blast radius. Then we can talk about 'quick wins.'",
      },
    ],
    touchpoints: [
      {
        id: "er-1",
        date: "2026-07-22",
        type: "Interview",
        attendees: ["Elena Rostova", "Tech workstream"],
        sentiment: "Challenging",
        takeaways:
          "Laid down a hard rule: no new system of record. Any omnichannel design must sit on SAP inventory truth or she will escalate to the CIO.",
        quote:
          "You can have speed or you can have a landscape I can operate. You cannot have a third overlay and my signature.",
      },
      {
        id: "er-2",
        date: "2026-08-27",
        type: "Workshop",
        attendees: ["Elena Rostova", "Robert Hale", "Case team"],
        sentiment: "Neutral",
        takeaways:
          "Agreed a transition pattern: event bus for store-availability, SAP as SoR, 24-month deprecation of the 2024 OMS overlay. Security pack still outstanding.",
      },
      {
        id: "er-3",
        date: "2026-09-05",
        type: "1:1",
        attendees: ["Elena Rostova", "Tech workstream lead"],
        sentiment: "Neutral",
        takeaways:
          "Will not pre-align SteerCo 3 until she has a threat model and an interface catalogue. Softened when we offered to staff an integration workback she owns.",
        quote:
          "Send the data-flow, the identity model, and the blast radius. Then we can talk about 'quick wins.'",
      },
    ],
    actionItems: [
      {
        id: "er-a1",
        title: "Deliver security & data-flow pack",
        detail:
          "Identity model, PCI/PII classification, and blast radius for store-availability events. Required before ARB.",
        dueDate: "2026-09-15",
        owner: "Tech workstream",
        completed: false,
        priority: "Critical",
      },
      {
        id: "er-a2",
        title: "SAP ATP documentation access",
        detail:
          "Need read access to the custom ATP user-exits. Elena must ticket Basis; she is waiting on our SoW addendum.",
        dueDate: "2026-09-17",
        owner: "Elena Rostova",
        completed: false,
        priority: "High",
      },
      {
        id: "er-a3",
        title: "ARB slot for week of Sep 21",
        detail:
          "Reserve 90 minutes. She will not accept a 30-minute SteerCo sidebar as a substitute.",
        dueDate: "2026-09-16",
        owner: "PMO",
        completed: false,
        priority: "Normal",
      },
    ],
  },
  {
    id: "david-chen",
    name: "David Chen",
    initials: "DC",
    title: "Director of Digital Merchandising",
    company: "Northstar Retail Group",
    companyType: "Client",
    reportsTo: "Priya Natarajan, CCO",
    tenure: "Director since 2023 · 6 years in digital merch",
    department: "Commercial",
    stance: "Skeptic",
    influence: "Medium",
    availability: "available",
    location: "New York",
    email: "d.chen@northstar.com",
    supportStyle:
      "Burned by the last consulting project. Needs a two-week win on his team's time before he will staff interviews.",
    lastTouchpointDate: "2026-09-03",
    nextMeetingDate: "2026-09-17",
    nextMeetingLabel: "Assortment quick-win readout",
    communication: {
      dos: [
        "Acknowledge the 2025 'digital growth' project by name. He will test whether you did the homework.",
        "Ask for two hours of his team's time, not two weeks. Return a visible artifact immediately.",
        "Speak merchandising: attach rate, search-to-PDP, size/color availability, not 'experience.'",
        "Give him a draft he can mark up. He hates being interviewed cold.",
      ],
      donts: [
        "Do not schedule a 12-person workshop on his calendar. He will decline and CC Priya.",
        "Never imply his conversion miss is a fulfillment problem in the first meeting — even if it is.",
        "Avoid 'change management' language. His team hears 'more process.'",
        "Do not surprise him in SteerCo. He still feels ambushed by last year's deck.",
      ],
    },
    talkingPointExamples: [
      "Example repair: 'David — we used 90 minutes of analyst time last month and we are returning a size-availability prototype on the top 20 search terms. Here is the hours log. If it holds on Sep 17, we will ask for two more hours, not a workshop.'",
      "Example merch language: 'Search-to-PDP on navy chino 32x30 is losing guests because ATP shows in-stock while the PDP is missing the size. That is a two-week fix, not a journey map.'",
      "Example with Priya: 'Pre-brief her that David is still a skeptic. Do not let SteerCo be the first time she hears it.'",
      "Do not say: 'Fulfillment is why conversion missed.' Even if true, it is the second meeting, not the first.",
    ],
    personalKpis: [
      "Digital conversion +40 bps vs. FY26 H1",
      "Search-to-PDP click-through +8%",
      "Size/color in-stock on top 200 styles >92%",
      "Content velocity: 48-hour PDP turnaround on key items",
      "Protect a 14-person merchandising ops team from 'transformation' tax",
    ],
    sensitivities: [
      "The 2025 consulting team used his analysts for six weeks and produced a deck his SVP already knew. He lost a headcount in the next budget.",
      "Feels Commercial is blamed for conversion while Supply Chain under-ships key sizes.",
      "Priya is his skip-level champion; he will escalate through her if we overreach.",
      "Publicly supportive of omnichannel, privately convinced store-first inventory will starve digital.",
    ],
    relationshipHistory: [
      {
        date: "2026-06-24",
        context: "Intro call",
        quote:
          "The last firm billed me for interviews and gave me a journey map. My team does not have another quarter to donate.",
      },
      {
        date: "2026-09-03",
        context: "Working 1:1",
        quote:
          "Show me one search-and-availability fix in two weeks. Then I will open the calendar.",
      },
    ],
    touchpoints: [
      {
        id: "dc-1",
        date: "2026-06-24",
        type: "Interview",
        attendees: ["David Chen", "Commercial workstream"],
        sentiment: "Challenging",
        takeaways:
          "Declined a full interview slate. Agreed to a 30-minute intro only. Stated he will not staff SMEs until he sees a returned artifact.",
        quote:
          "The last firm billed me for interviews and gave me a journey map. My team does not have another quarter to donate.",
      },
      {
        id: "dc-2",
        date: "2026-08-11",
        type: "Email",
        attendees: ["David Chen"],
        sentiment: "Neutral",
        takeaways:
          "Responded late to the data request. Provided search query logs for top 50 terms but withheld merchandiser notes. Tone was curt, not hostile.",
      },
      {
        id: "dc-3",
        date: "2026-09-03",
        type: "1:1",
        attendees: ["David Chen", "Commercial workstream lead"],
        sentiment: "Positive",
        takeaways:
          "Softened after we showed a prototype of size-availability badges on the top 20 search terms. Agreed to a Sep 17 readout and two analyst hours if the prototype holds.",
        quote:
          "Show me one search-and-availability fix in two weeks. Then I will open the calendar.",
      },
    ],
    actionItems: [
      {
        id: "dc-a1",
        title: "Ship size-availability prototype",
        detail:
          "Top 20 search terms, live ATP from SAP, badge on PDP. Must be demo-able on Sep 17 without production deploy.",
        dueDate: "2026-09-17",
        owner: "Commercial workstream",
        completed: false,
        priority: "Critical",
      },
      {
        id: "dc-a2",
        title: "Return merchandiser time accounting",
        detail:
          "One-page log of hours used vs. promised. David asked for this explicitly after 2025.",
        dueDate: "2026-09-12",
        owner: "PMO",
        completed: false,
        priority: "High",
      },
      {
        id: "dc-a3",
        title: "Pre-brief Priya on David's asks",
        detail:
          "Do not let SteerCo become the first time she hears he is still a skeptic.",
        dueDate: "2026-09-14",
        owner: "Engagement manager",
        completed: false,
        priority: "High",
      },
    ],
  },
  {
    id: "priya-natarajan",
    name: "Priya Natarajan",
    initials: "PN",
    title: "Chief Commercial Officer",
    company: "Northstar Retail Group",
    companyType: "Client",
    reportsTo: "CEO",
    tenure: "CCO since 2024 · previously President, Northstar Stores",
    department: "Commercial",
    stance: "Champion",
    influence: "High",
    availability: "traveling",
    location: "In market · West Coast stores",
    email: "p.natarajan@northstar.com",
    supportStyle:
      "Revenue-first storyteller. Give her a customer anecdote, then the number. She will sell SteerCo if the story is sharp.",
    lastTouchpointDate: "2026-09-07",
    nextMeetingDate: "2026-09-15",
    nextMeetingLabel: "SteerCo 3",
    communication: {
      dos: [
        "Open with a customer moment from a real store or session replay, then land the commercial implication.",
        "Frame omnichannel as share of wallet, not as a logistics program.",
        "Give her a 90-second SteerCo script. She will not read the appendix on the plane.",
        "Bring David along as a success, not a problem. She is protective of her directors in public.",
      ],
      donts: [
        "Do not make this a supply-chain meeting when she is in the room.",
        "Never surprise her with a kill-list that hits digital merchandising without a private pre-read.",
        "Avoid finance jargon in her 1:1s — she will send you to Sarah.",
        "Do not schedule over store walks. Thursday field days are sacred.",
      ],
    },
    talkingPointExamples: [
      "Example 90-second script: 'A guest in Walnut Creek wants a size we already own in Reno. Today she leaves. Holiday, that is lost share of wallet, not a logistics footnote.'",
      "Example trade: 'We will take Sarah's kill-list if one client-facing availability win stays on David's roadmap before freeze.'",
      "Example with David: 'Bring him as the owner of the size-badge prototype, not as a risk slide.'",
      "Do not say: 'This is really a supply-chain program.' She will check out.",
    ],
    personalKpis: [
      "Comp sales +2.4% with omnichannel contributing ≥40% of the lift",
      "BOPIS and ship-from-store attachment without margin dilution >150 bps",
      "Category mix: active and home to 28% of digital GMV",
      "NPS in omnichannel journeys ≥ store NPS",
      "Board perception: Commercial has a growth thesis, not just a promotion calendar",
    ],
    sensitivities: [
      "Competing with the CFO for narrative control of SteerCo. Align privately; do not force a debate in the room.",
      "Store GMs still report a 'two-company' problem. She will not endorse a design that makes stores the exception channel.",
      "David Chen is her development project. Public criticism of him is public criticism of her.",
      "Sensitive to being boxed as 'the brand person' by Operations.",
    ],
    relationshipHistory: [
      {
        date: "2026-06-12",
        context: "Kickoff SteerCo",
        quote:
          "If the diagnostic cannot tell me how a guest in Walnut Creek gets the size we already own in Reno, it is not a diagnostic.",
      },
      {
        date: "2026-09-07",
        context: "Airport 1:1",
        quote:
          "I will take Sarah's kill-list if you protect one visible client-facing win before holiday freeze.",
      },
    ],
    touchpoints: [
      {
        id: "pn-1",
        date: "2026-06-12",
        type: "SteerCo",
        attendees: ["Priya Natarajan", "Sarah Jenkins", "CEO"],
        sentiment: "Positive",
        takeaways:
          "Co-sponsored the diagnostic with Sarah. Defined success as 'one inventory truth the guest can feel.' Asked for store GM voice in Wave 2.",
        quote:
          "If the diagnostic cannot tell me how a guest in Walnut Creek gets the size we already own in Reno, it is not a diagnostic.",
      },
      {
        id: "pn-2",
        date: "2026-08-20",
        type: "Interview",
        attendees: ["Priya Natarajan", "Engagement partner"],
        sentiment: "Positive",
        takeaways:
          "Shared three store anecdotes from Orange County. Endorsed ship-from-store as a commercial play, not a cost play. Warned that David is 'one more extraction away from checking out.'",
      },
      {
        id: "pn-3",
        date: "2026-09-07",
        type: "1:1",
        attendees: ["Priya Natarajan", "Engagement manager"],
        sentiment: "Positive",
        takeaways:
          "Willing to trade some digital merchandising scope for a holiday-visible availability win. Will back Marcus in SteerCo if stores are not treated as overflow.",
        quote:
          "I will take Sarah's kill-list if you protect one visible client-facing win before holiday freeze.",
      },
    ],
    actionItems: [
      {
        id: "pn-a1",
        title: "SteerCo 3 commercial script",
        detail:
          "90-second narrative: Walnut Creek guest, Reno inventory, holiday implication. Send to Priya by Sep 13 EOD.",
        dueDate: "2026-09-13",
        owner: "Engagement manager",
        completed: false,
        priority: "Critical",
      },
      {
        id: "pn-a2",
        title: "Protect one client-facing quick win",
        detail:
          "Agree which digital merchandising item stays on the holiday roadmap so David's team has a win to own.",
        dueDate: "2026-09-14",
        owner: "Priya Natarajan",
        completed: false,
        priority: "High",
      },
    ],
  },
  {
    id: "james-whitfield",
    name: "James Whitfield",
    initials: "JW",
    title: "Corporate Controller",
    company: "Northstar Retail Group",
    companyType: "Client",
    reportsTo: "Sarah Jenkins, CFO",
    tenure: "Controller since 2019 · Big Four partner track before Northstar",
    department: "Finance",
    stance: "Neutral",
    influence: "Medium",
    availability: "available",
    location: "Chicago HQ",
    email: "j.whitfield@northstar.com",
    supportStyle:
      "Control-environment first. He will not block value, but he will block anything that weakens the audit trail.",
    lastTouchpointDate: "2026-09-04",
    nextMeetingDate: "2026-09-18",
    nextMeetingLabel: "Control design review",
    communication: {
      dos: [
        "Bring process maps with control points, owners, and systems — not just the savings case.",
        "Use his language: IPE, key reports, SOX in-scope, management review.",
        "Give him time. He reads. A Thursday send for a Monday meeting is the minimum.",
        "Separate accounting policy questions from operating-model questions.",
      ],
      donts: [
        "Do not ask him to 'just be flexible for Wave 3.' He reports to Sarah on controls, not on strategy.",
        "Never imply inventory truth can live outside SAP without a reconciliation control.",
        "Avoid surprising Internal Audit. He will find out.",
        "Do not skip him and go to Sarah on a control topic. She will send you back.",
      ],
    },
    talkingPointExamples: [
      "Example control open: 'James — availability can be a service. Financial inventory stays in SAP. Nightly ATP-to-SAP bridge, exception threshold, named owner after hypercare.'",
      "Example IPE: 'Any number that might become a board KPI needs source-system documentation now, not in Wave 3. We will send the list Thursday for Monday.'",
      "Example SOX: 'This is designed so we do not add a second set of books for e-comm inventory. That is the Q1 finding we will not repeat.'",
      "Do not say: 'Be flexible for Wave 3.' He does not own strategy; he owns the opinion.",
    ],
    personalKpis: [
      "Clean FY26 10-K / SOX opinion — no new material weaknesses",
      "Inventory roll-forward unexplained variance <20 bps of COGS",
      "Close cycle: 6-day close held through the omnichannel changes",
      "All new key reports have IPE documentation before go-live",
      "Internal Audit findings closed on original due date",
    ],
    sensitivities: [
      "Q1 SOX miss on the OMS overlay is still an open action with the Audit Committee.",
      "Does not want to be the 'no' in SteerCo; prefers to raise issues in pre-reads.",
      "Understaffed close team. Any new reconciliation lands on four people.",
      "Wary of 'real-time inventory' claims that break the financial inventory ledger.",
    ],
    relationshipHistory: [
      {
        date: "2026-08-04",
        context: "Value-case working session",
        quote:
          "I can live with a staged investment. I cannot live with a second set of books for e-comm inventory.",
      },
      {
        date: "2026-09-04",
        context: "Controls 1:1",
        quote:
          "If the availability service cannot reconcile to SAP nightly, it does not exist as far as I am concerned.",
      },
    ],
    touchpoints: [
      {
        id: "jw-1",
        date: "2026-08-04",
        type: "Workshop",
        attendees: ["James Whitfield", "Sarah Jenkins", "Case team"],
        sentiment: "Neutral",
        takeaways:
          "Did not challenge the commercial thesis. Drew a hard line on inventory subledgers and IPE for any new availability report used by management.",
        quote:
          "I can live with a staged investment. I cannot live with a second set of books for e-comm inventory.",
      },
      {
        id: "jw-2",
        date: "2026-09-04",
        type: "1:1",
        attendees: ["James Whitfield", "Finance workstream"],
        sentiment: "Neutral",
        takeaways:
          "Walked through a nightly reconciliation pattern he would accept. Asked for a RACI on who signs the key report after we leave. Not a champion, not a blocker — yet.",
        quote:
          "If the availability service cannot reconcile to SAP nightly, it does not exist as far as I am concerned.",
      },
    ],
    actionItems: [
      {
        id: "jw-a1",
        title: "Draft inventory reconciliation control",
        detail:
          "Nightly ATP-to-SAP bridge, exception thresholds, and owner after hypercare. Needed for Sep 18 review.",
        dueDate: "2026-09-18",
        owner: "Finance workstream",
        completed: false,
        priority: "High",
      },
      {
        id: "jw-a2",
        title: "IPE list for SteerCo metrics",
        detail:
          "Any number that might become a board KPI needs source-system documentation now, not in Wave 3.",
        dueDate: "2026-09-16",
        owner: "James Whitfield",
        completed: false,
        priority: "Normal",
      },
    ],
  },
  {
    id: "nadia-el-sayed",
    name: "Nadia El-Sayed",
    initials: "NE",
    title: "Director of Network Planning",
    company: "Northstar Retail Group",
    companyType: "Client",
    reportsTo: "Marcus Vance, VP Supply Chain Ops",
    tenure: "Director since 2022 · 8 years in network planning",
    department: "Supply Chain",
    stance: "Champion",
    influence: "Medium",
    availability: "available",
    location: "Chicago HQ",
    email: "n.elsayed@northstar.com",
    supportStyle:
      "Model-driven operator. She will give you the data if you respect her numbers and do not 'simplify' them for SteerCo.",
    lastTouchpointDate: "2026-09-10",
    nextMeetingDate: "2026-09-14",
    nextMeetingLabel: "Labor model lock",
    communication: {
      dos: [
        "Show your work. She wants the workbook, not the chart.",
        "Separate structural labor from peak flex. She has been burned by blended averages.",
        "Copy her on any number that originated in her team — before it goes to Marcus or Sarah.",
        "Ask her what she would cut. She has a view and rarely gets asked.",
      ],
      donts: [
        "Do not round her model to make a cleaner SteerCo slide.",
        "Never present network scenarios she has not run. She will correct you in the room.",
        "Avoid treating her as Marcus's analyst. She owns the plan, he owns the buildings.",
        "Do not dump a data request on Friday before a Monday SteerCo.",
      ],
    },
    talkingPointExamples: [
      "Example model lock: 'Nadia — SteerCo will see 11% unit-cost down. 7% is structural, 4% is peak-flex. If we round it to a clean 10, she will not sit behind the slide.'",
      "Example respect: 'She owns the plan; Marcus owns the buildings. Copy her on any number that originated in her cube before it goes upstairs.'",
      "Example ask: 'What would you cut?' She has a view and rarely gets asked.",
      "Do not say: 'We simplified your model for the room.' That is how she becomes a skeptic.",
    ],
    personalKpis: [
      "Network cost-to-serve model used in monthly S&OP by September",
      "Saturday overtime in the four large DCs −25% vs. last peak",
      "Safety stock policy reset on top 500 SKUs without raising stockouts",
      "Publish a weekly capacity view Commercial actually uses",
      "Build a control-tower team that is not just a war-room in November",
    ],
    sensitivities: [
      "Her FY26 safety-stock reset was rolled back after a Commercial escalation. She is cautious about going first again.",
      "Protective of a thin planning bench — two senior planners are flight risks.",
      "Will champion automation only if planning roles are funded; otherwise it looks like a DC-only win.",
      "Dislikes being the unnamed 'data source' in partner-level conversations.",
    ],
    relationshipHistory: [
      {
        date: "2026-08-19",
        context: "Automation workshop",
        quote:
          "I will give you the labor truth. Do not sand it down so the slide looks like a 20% save.",
      },
      {
        date: "2026-09-10",
        context: "Model lock 1:1",
        quote:
          "If SteerCo sees 11% unit-cost down, I need the 4% that is peak-flex called out or I will not sit behind it.",
      },
    ],
    touchpoints: [
      {
        id: "ne-1",
        date: "2026-08-19",
        type: "Workshop",
        attendees: ["Nadia El-Sayed", "Marcus Vance", "Case team"],
        sentiment: "Positive",
        takeaways:
          "Opened the full labor cube. Walked three scenarios. Became a champion once we agreed structural vs. peak-flex would stay visible.",
        quote:
          "I will give you the labor truth. Do not sand it down so the slide looks like a 20% save.",
      },
      {
        id: "ne-2",
        date: "2026-09-10",
        type: "1:1",
        attendees: ["Nadia El-Sayed", "Ops workstream"],
        sentiment: "Positive",
        takeaways:
          "Locked v3 of the unit-cost model. Asked to join the Sep 14 Joliet walk so the partner hears the planning constraint, not only the floor constraint.",
        quote:
          "If SteerCo sees 11% unit-cost down, I need the 4% that is peak-flex called out or I will not sit behind it.",
      },
    ],
    actionItems: [
      {
        id: "ne-a1",
        title: "Lock labor model v3 for SteerCo",
        detail:
          "Structural vs. peak-flex split must remain in the main pack. Nadia to initial the workbook.",
        dueDate: "2026-09-14",
        owner: "Nadia El-Sayed",
        completed: false,
        priority: "Critical",
      },
      {
        id: "ne-a2",
        title: "Safety-stock policy one-pager",
        detail:
          "Top 500 SKU policy for the appendix. Flag the FY26 rollback so Sarah is not surprised.",
        dueDate: "2026-09-16",
        owner: "Ops workstream",
        completed: false,
        priority: "Normal",
      },
    ],
  },
  {
    id: "robert-hale",
    name: "Robert Hale",
    initials: "RH",
    title: "Chief Information Security Officer",
    company: "Northstar Retail Group",
    companyType: "Client",
    reportsTo: "CIO (dotted line to Audit Committee)",
    tenure: "CISO since 2023 · hired after the OMS identity finding",
    department: "Technology",
    stance: "Skeptic",
    influence: "High",
    availability: "ooo",
    location: "New York · returns Sep 15",
    email: "r.hale@northstar.com",
    supportStyle:
      "Threat-model or it does not ship. Last consulting integration left an unpatched identity path. He will block on principle.",
    lastTouchpointDate: "2026-08-27",
    nextMeetingDate: "2026-09-19",
    nextMeetingLabel: "Threat-model review",
    communication: {
      dos: [
        "Lead with attack surface, data classification, and who is on call when it breaks.",
        "Use a threat model (even a draft STRIDE) — he treats slideware as contempt.",
        "Escalate early. A Friday surprise before SteerCo guarantees a no.",
        "Acknowledge the 2024 OMS identity finding unprompted. It builds more trust than a pitch.",
      ],
      donts: [
        "Do not say 'we'll handle security in implementation.' That is how the last firm lost him.",
        "Never ask him to waive PCI scoping to hit a holiday date.",
        "Avoid meeting without Elena if the topic is architecture. They dislike being played off each other.",
        "Do not CC the CIO to pressure him. He will harden.",
      ],
    },
    talkingPointExamples: [
      "Example return-from-PTO: 'Robert — draft STRIDE is in your inbox for Sep 15, not the morning of the 19th review. Contractor access is PAM-only. We named a Northstar hypercare owner, not the SI.'",
      "Example honesty: 'Last year's thin layer became a standing inventory-read account in a shared mailbox. We are not asking you to waive PCI to hit freeze.'",
      "Example with Elena: 'Architecture and threat model in the same pre-read. We will not play you off each other.'",
      "Do not say: 'We will handle security in implementation.' That is how the last firm lost him.",
    ],
    personalKpis: [
      "Close the 2024 OMS identity finding before holiday freeze",
      "No net-new critical vulnerabilities on customer-data paths",
      "Vendor access via PAM only — zero standing contractor accounts",
      "Tabletop: omnichannel incident response by October",
      "Board cyber update: demonstrate control, not just tooling spend",
    ],
    sensitivities: [
      "The prior consulting team left a service account with inventory-read in a shared mailbox. Internal Audit named it in Q1.",
      "On PTO through Sep 14 — any 'alignment' claimed in his absence will be reversed.",
      "Does not trust time-boxed diagnostics to do security well; expects us to staff it or drop the interface.",
      "Publicly calm, privately furious that Commercial treats security as a gate rather than a design input.",
    ],
    relationshipHistory: [
      {
        date: "2026-08-27",
        context: "Joint architecture / security workshop",
        quote:
          "I am not here to be the villain in your SteerCo. I am here because the last 'thin layer' became a standing vulnerability.",
      },
    ],
    touchpoints: [
      {
        id: "rh-1",
        date: "2026-08-27",
        type: "Workshop",
        attendees: ["Robert Hale", "Elena Rostova", "Case team"],
        sentiment: "Challenging",
        takeaways:
          "Rejected the initial 'event bus as thin layer' framing. Required a threat model, PAM for any consultant access, and a named hypercare security owner. Agreed to a Sep 19 review after PTO.",
        quote:
          "I am not here to be the villain in your SteerCo. I am here because the last 'thin layer' became a standing vulnerability.",
      },
    ],
    actionItems: [
      {
        id: "rh-a1",
        title: "Draft STRIDE threat model",
        detail:
          "Store-availability events, identity, and contractor access. Must be in his inbox when he returns Sep 15 — not the day of the review.",
        dueDate: "2026-09-15",
        owner: "Tech workstream",
        completed: false,
        priority: "Critical",
      },
      {
        id: "rh-a2",
        title: "PAM for case-team SAP access",
        detail:
          "Standing passwords are a non-starter. Open a Cyber ticket before requesting Basis access via Elena.",
        dueDate: "2026-09-16",
        owner: "PMO",
        completed: false,
        priority: "High",
      },
      {
        id: "rh-a3",
        title: "Name hypercare security owner",
        detail:
          "Robert will not accept 'the SI partner' as owner. Need a Northstar named individual.",
        dueDate: "2026-09-19",
        owner: "Elena Rostova",
        completed: false,
        priority: "High",
      },
    ],
  },
  {
    id: "catherine-shaw",
    name: "Catherine Shaw",
    initials: "CS",
    title: "Operating Partner, Retail",
    company: "Apex Capital Partners",
    companyType: "Parent",
    reportsTo: "Apex Investment Committee",
    tenure: "Operating Partner since 2021 · Northstar deal lead since the 2023 take-private",
    department: "Finance",
    stance: "Economic Buyer",
    influence: "High",
    availability: "traveling",
    location: "New York · on-site Chicago for SteerCo",
    email: "c.shaw@apexcapital.com",
    supportStyle:
      "PE operating cadence. Wants a 3-year value-creation link, not a consulting workplan. Will override SteerCo if the hold-period math is soft.",
    lastTouchpointDate: "2026-09-06",
    nextMeetingDate: "2026-09-15",
    nextMeetingLabel: "SteerCo 3 (observer)",
    communication: {
      dos: [
        "Lead with hold-period cash: year-1 EBITDA, year-2 run-rate, exit multiple sensitivity.",
        "Show what management is choosing not to do. She funds focus, not activity.",
        "Give her a private 20-minute pre-SteerCo. She will not debate Apex's view in front of the Northstar LT.",
        "Name the operating partner she can call on the DC thesis — she does not want a rotating cast.",
      ],
      donts: [
        "Do not present a 40-initiative roadmap. Apex underwrote five bets.",
        "Never imply the take-private thesis has changed. She will hear 'the deal is off track.'",
        "Avoid consulting-firm branding in her pack. This is Northstar's diagnostic, not a credentials meeting.",
        "Do not CC Sarah on Apex-only notes. Catherine will share what she wants shared.",
      ],
    },
    talkingPointExamples: [
      "Example Apex open: 'Catherine — the diagnostic supports two of the five underwritten bets: inventory truth and DC productivity. It does not support a commerce replatform in this hold period.'",
      "Example override: 'If SteerCo tries to keep the OMS overlay, we need you to kill it. Management will not do it unprompted.'",
      "Example cash: 'Year-1 EBITDA +$24M at the DC cluster, year-2 +$41M run-rate. Exit case assumes no multiple expansion, only the earnings.'",
      "Do not say: 'This is a transformation journey.' Apex bought a retailer, not a program.",
    ],
    personalKpis: [
      "Northstar hold-period EBITDA vs. 2023 CIM: on track for 2028 exit window",
      "Net working capital release ≥$90M by FY27",
      "No unfunded 'enabler' spend above the board digital envelope",
      "Management team stability through holiday 2026",
      "Apex IC update: two funded bets, three parked, zero surprises",
    ],
    sensitivities: [
      "She led the 2023 take-private. Any 'the strategy has evolved' language sounds like a CIM miss.",
      "Tense with Priya on store labor; Apex model assumed store hours could flex. Priya has pushed back in IC.",
      "Does not want the consulting team in Apex IC unless she invites them.",
      "Will fly in for SteerCo 3. Treat her as an economic buyer alongside Sarah, not as an observer.",
    ],
    relationshipHistory: [
      {
        date: "2026-07-09",
        context: "Apex operating review",
        quote:
          "I did not underwrite a twelfth system. I underwrote cash from a network that can see its own inventory.",
      },
      {
        date: "2026-09-06",
        context: "Private pre-SteerCo",
        quote:
          "If the pack cannot tell me which two bets we are actually making, I will make them in the room.",
      },
    ],
    touchpoints: [
      {
        id: "cs-1",
        date: "2026-07-09",
        type: "Interview",
        attendees: ["Catherine Shaw", "Engagement partner"],
        sentiment: "Neutral",
        takeaways:
          "Set Apex's frame: five underwritten bets, two that this diagnostic can validate. Asked for a kill-list before SteerCo 3.",
        quote:
          "I did not underwrite a twelfth system. I underwrote cash from a network that can see its own inventory.",
      },
      {
        id: "cs-2",
        date: "2026-09-06",
        type: "1:1",
        attendees: ["Catherine Shaw", "Engagement partner"],
        sentiment: "Positive",
        takeaways:
          "Will attend SteerCo 3. Aligned to staged capital if Sarah's 18-month payback holds. Warned that store-hour flexibility is still an Apex/Priya open item — do not pretend it is closed.",
        quote:
          "If the pack cannot tell me which two bets we are actually making, I will make them in the room.",
      },
    ],
    actionItems: [
      {
        id: "cs-a1",
        title: "Private Apex pre-read",
        detail:
          "3-page hold-period view: two bets, three parked, cash bridge. Not the SteerCo storyboard.",
        dueDate: "2026-09-14",
        owner: "Engagement partner",
        completed: false,
        priority: "Critical",
      },
      {
        id: "cs-a2",
        title: "Confirm Catherine's SteerCo seat",
        detail:
          "She is not on the Northstar calendar as a voting member. PMO to add her as observer with speaking rights.",
        dueDate: "2026-09-12",
        owner: "PMO",
        completed: false,
        priority: "High",
      },
    ],
  },
  {
    id: "lauren-brooks",
    name: "Lauren Brooks",
    initials: "LB",
    title: "SVP of Store Operations",
    company: "Northstar Retail Group",
    companyType: "Client",
    reportsTo: "Priya Natarajan, CCO",
    tenure: "SVP since 2022 · 16 years store-side at Northstar and Gap",
    department: "Commercial",
    stance: "Champion",
    influence: "High",
    availability: "in-meeting",
    location: "Chicago HQ · 1,140 stores",
    email: "l.brooks@northstar.com",
    supportStyle:
      "Store-first operator. Will champion ship-from-store if it does not turn GMs into unpaid DC labor. Bring a labor minute, not a concept.",
    lastTouchpointDate: "2026-09-08",
    nextMeetingDate: "2026-09-16",
    nextMeetingLabel: "GM advisory huddle",
    communication: {
      dos: [
        "Translate every design into minutes per associate and what the GM is measured on.",
        "Use store names. 'Walnut Creek' lands; 'the fleet' does not.",
        "Show how BOPIS and ship-from-store are scheduled, not just enabled.",
        "Credit GMs in SteerCo. She will go first if her people are named as partners.",
      ],
      donts: [
        "Do not treat stores as overflow for DC misses. That is the last war.",
        "Never propose a new handheld without a 15-minute task time.",
        "Avoid 'experience' language. She runs labor and conversion at the door.",
        "Do not surprise district managers with a pilot they did not staff.",
      ],
    },
    talkingPointExamples: [
      "Example GM line: 'Lauren — Walnut Creek can pick a BOPIS in 8 minutes if we stop making them search the backroom for sizes the system says are there. That is a system truth problem, not a hustle problem.'",
      "Example labor: 'Ship-from-store is +4 minutes per order if we stage from reserve. It is +11 if they pick from the floor during peak. We are only recommending reserve-first stores.'",
      "Example credit: 'Name three GMs who already run a clean omnichannel hour. Do not make this sound like a downtown idea.'",
      "Do not say: 'Stores will flex.' Apex already tried that sentence on her.",
    ],
    personalKpis: [
      "Store conversion +30 bps vs. FY26",
      "BOPIS promise time <2 hours in top 200 doors",
      "Store labor hours per transaction held flat despite omnichannel tasks",
      "GM NPS on 'home office systems' (currently underwater)",
      "Shrink not worsened by ship-from-store",
    ],
    sensitivities: [
      "FY25 holiday: stores were blamed for DC misses. She has the texts.",
      "Apex still wants store-hour flexibility in the model. She will not sign it.",
      "Protective of a thin GM bench in the West. Do not pilot only in A doors.",
      "Wants David Chen's digital team to stop launching badges stores cannot honor.",
    ],
    relationshipHistory: [
      {
        date: "2026-07-15",
        context: "Store GM panel",
        quote:
          "You can have my stores as a channel. You cannot have them as a relief valve for Joliet.",
      },
      {
        date: "2026-09-08",
        context: "Labor-minute working session",
        quote:
          "Show me the minutes. If it is four, I will sell it. If it is eleven, I will kill it in SteerCo.",
      },
    ],
    touchpoints: [
      {
        id: "lb-1",
        date: "2026-07-15",
        type: "Workshop",
        attendees: ["Lauren Brooks", "8 GMs", "Commercial workstream"],
        sentiment: "Challenging",
        takeaways:
          "GMs described backroom hunts caused by false ATP. Lauren made ship-from-store conditional on reserve-location truth.",
        quote:
          "You can have my stores as a channel. You cannot have them as a relief valve for Joliet.",
      },
      {
        id: "lb-2",
        date: "2026-09-08",
        type: "1:1",
        attendees: ["Lauren Brooks", "Engagement manager"],
        sentiment: "Positive",
        takeaways:
          "Will champion a reserve-first ship-from-store design in SteerCo if the labor-minute model is in the pack. Offered Walnut Creek, Naperville, and Buckhead as named proof points.",
        quote:
          "Show me the minutes. If it is four, I will sell it. If it is eleven, I will kill it in SteerCo.",
      },
    ],
    actionItems: [
      {
        id: "lb-a1",
        title: "Store labor-minute model in SteerCo pack",
        detail:
          "BOPIS and ship-from-store, reserve-first vs. floor-pick. Lauren will not speak without it.",
        dueDate: "2026-09-13",
        owner: "Commercial workstream",
        completed: false,
        priority: "Critical",
      },
      {
        id: "lb-a2",
        title: "GM advisory huddle — Sep 16",
        detail:
          "Walnut Creek, Naperville, Buckhead GMs. No downtown observers. 45 minutes.",
        dueDate: "2026-09-16",
        owner: "Lauren Brooks",
        completed: false,
        priority: "High",
      },
    ],
  },
  {
    id: "mei-lin",
    name: "Mei Lin",
    initials: "ML",
    title: "Managing Director, UK & EU",
    company: "Northstar Europe Ltd",
    companyType: "Affiliate",
    reportsTo: "Northstar CEO (matrix to CCO on brand)",
    tenure: "MD since 2023 · built the EU digital channel from 14% to 31% of region GMV",
    department: "Commercial",
    stance: "Neutral",
    influence: "High",
    availability: "available",
    location: "London · remote to Chicago SteerCo",
    email: "m.lin@northstar-europe.com",
    supportStyle:
      "Region-first. Will not import a US design that breaks GDPR, VAT, or EU store-fulfillment law. Wants a 'US vs EU what is actually shared' page.",
    lastTouchpointDate: "2026-09-02",
    nextMeetingDate: "2026-09-18",
    nextMeetingLabel: "EU implication readout",
    communication: {
      dos: [
        "Separate US core from EU localizations in every architecture and ops slide.",
        "Flag GDPR, PCI, and cross-border inventory as first-class, not an appendix.",
        "Use UK/EU numbers. She discounts Northstar US comps.",
        "Give her a decision: what EU will reuse in Wave 3 vs. what stays US-only.",
      ],
      donts: [
        "Do not present a 'global template' that is clearly Chicago-designed.",
        "Never assume EU DCs can copy Joliet labor math. Works councils are live in France.",
        "Avoid 'later localization.' Later means never in her experience.",
        "Do not skip her and brief Priya as if EU is a channel of the US.",
      ],
    },
    talkingPointExamples: [
      "Example split: 'Mei — Wave 3 funds US inventory truth. EU reuses the event pattern, not the labor model, not the store-hour assumption, and not the US identity stack.'",
      "Example GDPR: 'Customer-availability events that include identity do not leave the US without a DPIA. We are not asking EU to be the second market for a first-market design.'",
      "Example respect: 'You are not a localization. You are a second operating company with a different constraint set.'",
      "Do not say: 'We will localize after the US go-live.' She has heard that on three programs.",
    ],
    personalKpis: [
      "EU digital GMV 34% of region by FY27",
      "UK store NPS held through any shared-platform change",
      "No GDPR findings on customer-data paths",
      "France works-council consultation completed before any DC process change",
      "EU opex not used to subsidize US platform build",
    ],
    sensitivities: [
      "2024 'global OMS' attempt billed EU for US customizations. She still has the invoice.",
      "Matrix reporting to Priya is politically live — brand yes, operations no.",
      "Will not allow US ATP logic that ignores EU warehouse cut-offs.",
      "Time zone: a 7 a.m. Chicago SteerCo is 1 p.m. London. Do not make her the last agenda item.",
    ],
    relationshipHistory: [
      {
        date: "2026-08-06",
        context: "EU interview",
        quote:
          "If this diagnostic is a US program with an EU appendix, do not put my logo on the cover.",
      },
      {
        date: "2026-09-02",
        context: "Working session",
        quote:
          "Tell me what is shared and what is not. I can live with US-first. I cannot live with US-only dressed as global.",
      },
    ],
    touchpoints: [
      {
        id: "ml-1",
        date: "2026-08-06",
        type: "Interview",
        attendees: ["Mei Lin", "Engagement manager"],
        sentiment: "Challenging",
        takeaways:
          "Rejected a global-template framing. Asked for a one-page US/EU split before she would staff SMEs.",
        quote:
          "If this diagnostic is a US program with an EU appendix, do not put my logo on the cover.",
      },
      {
        id: "ml-2",
        date: "2026-09-02",
        type: "Workshop",
        attendees: ["Mei Lin", "Elena Rostova", "EU architect"],
        sentiment: "Neutral",
        takeaways:
          "Agreed EU can reuse the event pattern if identity and GDPR stay local. Labor and store-hour assumptions stay US-only. Softened when we offered a Sep 18 readout on her clock.",
        quote:
          "Tell me what is shared and what is not. I can live with US-first. I cannot live with US-only dressed as global.",
      },
    ],
    actionItems: [
      {
        id: "ml-a1",
        title: "US vs EU split page",
        detail:
          "What Wave 3 reuses, what stays US-only, GDPR/identity, labor, cut-offs. Due before Sep 18.",
        dueDate: "2026-09-17",
        owner: "Tech workstream",
        completed: false,
        priority: "High",
      },
      {
        id: "ml-a2",
        title: "EU SteerCo timing",
        detail:
          "Do not park Mei as AOB. Put the EU implication in the first 40 minutes or give her a separate readout.",
        dueDate: "2026-09-15",
        owner: "PMO",
        completed: false,
        priority: "Normal",
      },
    ],
  },
  {
    id: "hiroshi-tanaka",
    name: "Hiroshi Tanaka",
    initials: "HT",
    title: "VP, Customer Success — Retail",
    company: "SAP America",
    companyType: "Vendor",
    reportsTo: "SAP Global Customer Success, Retail",
    tenure: "Northstar named account lead since ECC · 9 years on this account",
    department: "Technology",
    stance: "Gatekeeper",
    influence: "Medium",
    availability: "available",
    location: "Newtown Square · on-site for ARB",
    email: "h.tanaka@sap.com",
    supportStyle:
      "Protects the SAP core and the account. Will enable ATP and eventing if we do not position a commerce replatform as the strategy. Bring Elena; do not go around her.",
    lastTouchpointDate: "2026-09-04",
    nextMeetingDate: "2026-09-16",
    nextMeetingLabel: "SAP ATP working session",
    communication: {
      dos: [
        "Treat him as a technical partner, not a salesperson in the room.",
        "Ask for named Basis and ATP resources with dates, not 'SAP will support.'",
        "Be explicit about what stays in S/4 vs. what is a side-by-side service.",
        "Copy Elena on every ask. He will not move without her ticket.",
      ],
      donts: [
        "Do not invite competing platform vendors to a joint session with him.",
        "Never use 'rip and replace' even as a straw man.",
        "Avoid promising his leadership a case study. Northstar has not approved it.",
        "Do not let him become the unofficial architect. Elena owns that.",
      ],
    },
    talkingPointExamples: [
      "Example scope: 'Hiroshi — we need documented ATP user-exits and a named Basis window. We are not evaluating a commerce replatform. S/4 stays system of record.'",
      "Example resource: 'Please name the ATP specialist for the week of Sep 21. A generic CS queue will slip the ARB.'",
      "Example political: 'Elena tickets Basis. We will not ask you to work around her.'",
      "Do not say: 'We might put a headless layer in front.' He will escalate inside SAP and freeze the room.",
    ],
    personalKpis: [
      "Northstar remains a referenceable S/4 retail account",
      "No Sev-1 on ATP or inventory interfaces through holiday freeze",
      "Side-by-side services do not become a shadow ERP",
      "Professional-services attach on the integration workback",
      "Account health: green into FY27 renewal",
    ],
    sensitivities: [
      "Rumors of a MACH evaluation in 2025 still sit in his CRM notes. He will test whether this diagnostic is that evaluation in disguise.",
      "His bonus is tied to Northstar not churning core. Be careful in mixed vendor rooms.",
      "Lost face when the 2024 OMS overlay went live without SAP in the design authority.",
      "Will help if he is in the architecture, not after the fact.",
    ],
    relationshipHistory: [
      {
        date: "2026-08-13",
        context: "Vendor interview",
        quote:
          "If this is a shopping exercise, tell me now. If this is ATP and events on S/4, I will staff it.",
      },
      {
        date: "2026-09-04",
        context: "Working session with Elena",
        quote:
          "Give me a ticket and a named window. I will not ghost-write an architecture Elena does not own.",
      },
    ],
    touchpoints: [
      {
        id: "ht-1",
        date: "2026-08-13",
        type: "Interview",
        attendees: ["Hiroshi Tanaka", "Tech workstream"],
        sentiment: "Challenging",
        takeaways:
          "Tested whether Horizon is a replatform. Softened when we stated S/4 remains SoR. Asked to be in ARB, not a side briefing.",
        quote:
          "If this is a shopping exercise, tell me now. If this is ATP and events on S/4, I will staff it.",
      },
      {
        id: "ht-2",
        date: "2026-09-04",
        type: "Workshop",
        attendees: ["Hiroshi Tanaka", "Elena Rostova", "Case team"],
        sentiment: "Positive",
        takeaways:
          "Agreed to staff an ATP specialist if Elena tickets Basis. Walked three user-exits that are undocumented. Warned that freeze starts Nov 10 — no dual-maintain after that.",
        quote:
          "Give me a ticket and a named window. I will not ghost-write an architecture Elena does not own.",
      },
    ],
    actionItems: [
      {
        id: "ht-a1",
        title: "Named SAP ATP specialist",
        detail:
          "Week of Sep 21. Not a shared CS queue. Hiroshi to confirm the name by Sep 16.",
        dueDate: "2026-09-16",
        owner: "Hiroshi Tanaka",
        completed: false,
        priority: "High",
      },
      {
        id: "ht-a2",
        title: "Document ATP user-exits",
        detail:
          "Three custom exits walked on Sep 4 still have no spec. Needed before ARB.",
        dueDate: "2026-09-18",
        owner: "Tech workstream",
        completed: false,
        priority: "High",
      },
    ],
  },
  {
    id: "victor-okonkwo",
    name: "Victor Okonkwo",
    initials: "VO",
    title: "Principal Solution Architect",
    company: "Manhattan Associates",
    companyType: "Vendor",
    reportsTo: "Manhattan Customer Engagement, North America",
    tenure: "Northstar WMS architect since the Joliet rollout · 7 years on the account",
    department: "Supply Chain",
    stance: "Gatekeeper",
    influence: "Medium",
    availability: "available",
    location: "Atlanta · Joliet as needed",
    email: "v.okonkwo@manh.com",
    supportStyle:
      "WMS realist. Will validate AMR and pack automation against Manhattan version and slotting truth. Hates 'the WMS cannot' from people who have not opened a config.",
    lastTouchpointDate: "2026-09-09",
    nextMeetingDate: "2026-09-14",
    nextMeetingLabel: "Joliet WMS / AMR fit",
    communication: {
      dos: [
        "Bring version, slotting, and wave-planning constraints to the first meeting.",
        "Ask what Manhattan will not support before you draw the AMR. He will tell you.",
        "Pair him with Nadia on labor and Marcus on the floor. He will not do politics.",
        "Use his language: waves, allocation, pack-and-hold, not 'the warehouse system.'",
      ],
      donts: [
        "Do not let a robotics OEM pitch in his session without a Manhattan fit-gap.",
        "Never blame WMS for a slotting or labor problem you have not traced.",
        "Avoid promising a WMS upgrade as a Horizon deliverable. That is a separate capital case.",
        "Do not quote his Slack messages in SteerCo.",
      ],
    },
    talkingPointExamples: [
      "Example fit-gap: 'Victor — Joliet AMR is a goods-to-person overlay on current Manhattan. We are not pitching a WMS replacement. Here is the wave-planning constraint we think is real.'",
      "Example honesty: 'If pack-station starvation is slotting, say slotting. Do not let SteerCo hear 'WMS cannot.'",
      "Example site: 'Walk Joliet with him on Sep 14 so the partner hears config truth, not OEM slides.'",
      "Do not say: 'We will just put AMRs in front of Manhattan.' He will list the 11 reasons that fails at peak.",
    ],
    personalKpis: [
      "Northstar Joliet and Reno stay on supported Manhattan versions through peak",
      "No unapproved robotics overlay that breaks wave planning",
      "Professional-services days sold against a real fit-gap, not a fishing trip",
      "Account referenceability for retail peak",
      "Zero Sev-1 WMS incidents attributed to Horizon recommendations this freeze",
    ],
    sensitivities: [
      "A 2025 robotics OEM demo at Joliet ignored wave planning. Marcus still teases him about it. He does not.",
      "Protective of a small Northstar support squad. Do not flood them with 'just a config' tickets in September.",
      "Will not attend SteerCo. He will give Marcus a paragraph and that is the support.",
      "Atlanta-based; overnight to Joliet needs 10 days' notice. Sep 14 is already booked.",
    ],
    relationshipHistory: [
      {
        date: "2026-08-21",
        context: "WMS interview",
        quote:
          "I can tell you what Manhattan will do at peak. I will not sit through another AMR video that skips wave planning.",
      },
      {
        date: "2026-09-09",
        context: "Fit-gap with Nadia",
        quote:
          "Pack starvation is slotting and labor, not a missing robot. Put that in the pack or I will tell Marcus myself.",
      },
    ],
    touchpoints: [
      {
        id: "vo-1",
        date: "2026-08-21",
        type: "Interview",
        attendees: ["Victor Okonkwo", "Ops workstream"],
        sentiment: "Challenging",
        takeaways:
          "Shut down an OEM-led framing. Agreed to a fit-gap if robotics is treated as an overlay with a Manhattan constraint list.",
        quote:
          "I can tell you what Manhattan will do at peak. I will not sit through another AMR video that skips wave planning.",
      },
      {
        id: "vo-2",
        date: "2026-09-09",
        type: "Workshop",
        attendees: ["Victor Okonkwo", "Nadia El-Sayed", "Marcus Vance"],
        sentiment: "Positive",
        takeaways:
          "Aligned that Joliet's constraint is pack-station starvation from slotting, not WMS capability. Will join the Sep 14 walk. Gave a written constraint list for the SteerCo appendix.",
        quote:
          "Pack starvation is slotting and labor, not a missing robot. Put that in the pack or I will tell Marcus myself.",
      },
    ],
    actionItems: [
      {
        id: "vo-a1",
        title: "Manhattan constraint list in appendix",
        detail:
          "Wave planning, pack-and-hold, AMR overlay limits. Victor's words, not OEM words.",
        dueDate: "2026-09-13",
        owner: "Ops workstream",
        completed: false,
        priority: "High",
      },
      {
        id: "vo-a2",
        title: "Joliet walk — WMS station",
        detail:
          "15 minutes at pack, not a full OEM tour. Already on Victor's calendar for Sep 14.",
        dueDate: "2026-09-14",
        owner: "Victor Okonkwo",
        completed: false,
        priority: "Normal",
      },
    ],
  },
];

