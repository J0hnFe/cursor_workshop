/**
 * Single source of truth for portfolio copy and links.
 * // UPDATE YOUR INFO HERE — change URLs, project details, and bios as your career evolves.
 */

// UPDATE YOUR INFO HERE — primary GitHub destination (profile or repo index).
export const githubProfileUrl = "https://github.com/J0hnFe" as const;

export const contactEmail = "joohnfelipe74@gmail.com" as const;

export const site = {
  brandName: "JohnFe",
  brandDescriptor: "Portfolio",
  metadata: {
    title: "John Felipe | Developer Portfolio",
    description:
      "Developer in Quito building interfaces and systems hiring teams can evaluate quickly—clear UX, dependable delivery, human communication.",
  },
} as const;

export const nav = {
  displayName: "John Felipe",
  links: [
    { label: "About", href: "#about" },
    { label: "Work", href: "#work" },
    { label: "Approach", href: "#approach" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ],
  ctaLabel: "View my work",
  ctaHref: githubProfileUrl,
} as const;

export const hero = {
  /** Editorial hero image — swap URL in one place. // UPDATE YOUR INFO HERE */
  image: {
    src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2000&q=80",
    alt: "Team collaborating over a laptop in a bright studio—represents shipping work with real partners.",
  },
  eyebrow: "Developer · Quito, Ecuador",
  titleLead: "Software that ",
  titleGradient: "respects hiring managers’ time",
  titleTrail: "—and still feels excellent to use.",
  subheadline:
    "You get someone who writes for clarity, instruments for failure cases, and communicates progress without nudging. Less theatre, more receipts.",
  primaryCta: {
    label: "View my work",
    href: githubProfileUrl,
  },
  secondaryCta: {
    label: "Email me",
    href: `mailto:${contactEmail}`,
  },
} as const;

export const socialProof = {
  title: "What teams buy when they bring me in",
  quote:
    "John asks the uncomfortable scheduling questions early, documents decisions before they evaporate, and ships increments we can demo to leadership without apology.",
  attribution: "Placeholder hiring partner",
  role: "Engineering Manager",
  company: "Series B workflow SaaS · remote-friendly", // realistic placeholder
  stats: [
    { value: "< 48h", label: "typical first response on inbound" },
    { value: "4", label: "reference builds profiled below" },
    { value: "100%", label: "work samples link to inspectable code" },
  ],
} as const;

export const about = {
  id: "about",
  title: "How I work",
  lead: "I sit in the space between ticket-driven output and product judgment.",
  paragraphs: [
    "Computer Science student and builder in Quito. I like teams that prize evidence over ego: traces when something breaks, screenshots when something ships, and a shared doc when scope shifts.",
    "For recruiters, that means your downstream hiring managers see artifacts—PRs, README depth, measurably responsive UI—not buzzwords. If you need someone who can own a slice of roadmap without constant babysitting, that’s the muscle I train.",
  ],
} as const;

export const portfolioSection = {
  id: "work",
  title: "Selected builds",
  subtitle:
    "Each row opens on GitHub today; swap links in this file when repos go public.",
  viewLabel: "Open repository",
  items: [
    {
      title: "Urban traffic simulation",
      description:
        "Scenario tooling for a congested corridor—stakeholders see cause and effect, not a black box.",
      stack: "Simulation · GAML",
      href: githubProfileUrl,
    },
    {
      title: "Metrics pipeline starter",
      description:
        "Ingest → sane defaults → alert thresholds teams can tune without redeploying everything.",
      stack: "Node · Observability",
      href: githubProfileUrl,
    },
    {
      title: "Landing system kit",
      description:
        "Composable sections with performance budgets baked in—so marketing experiments don’t tank Core Web Vitals.",
      stack: "Next.js · Tailwind",
      href: githubProfileUrl,
    },
    {
      title: "DX automation pack",
      description:
        "Repeatable dev environments so new contributors push something meaningful on day two, not week twenty.",
      stack: "Tooling · DX",
      href: githubProfileUrl,
    },
  ],
} as const;

/** Icon names from `lucide-react` — mapped in `services-section.tsx`. */
export const servicesSection = {
  id: "approach",
  title: "Where I plug in",
  subtitle:
    "Not a menu of buzzwords—three outcomes I’ve repeatedly owned alongside product and design.",
  items: [
    {
      icon: "LayoutTemplate",
      title: "Interfaces with opinion",
      description:
        "Layouts that scale to real copy, states that acknowledge latency, and components that don’t fight your design system.",
    },
    {
      icon: "ServerCog",
      title: "Services you can operate",
      description:
        "Readable logs, actionable errors, and boundaries that make incidents shorter instead of theatrical.",
    },
    {
      icon: "Users",
      title: "Handoffs that stick",
      description:
        "Written context for the next caretaker—so your future hire isn’t archaeology on Slack archives.",
    },
  ],
} as const;

export const faqSection = {
  id: "faq",
  title: "FAQ",
  subtitle: "Straight answers recruiters repeat across screens—so you don’t have to guess.",
  items: [
    {
      question: "Are you open to relocation or hybrid roles?",
      answer:
        "Yes—happy to discuss relocation timelines or hybrid cadences that keep teams effective. I’m pragmatic about time zones and overlap hours.",
    },
    {
      question: "What does your GitHub actually show?",
      answer:
        "Right now each featured build routes to my profile while individual repos are prepared for public review. You’ll still see commit style, documentation habits, and how I structure README context.",
    },
    {
      question: "How do you collaborate with product and design?",
      answer:
        "Short written recaps after decisions, early spikes when UX risk is high, and shared metrics so trade-offs are visible—not whispered in side channels.",
    },
    {
      question: "What kind of team fit are you looking for?",
      answer:
        "Teams that reward ownership without heroics: psychological safety, reasonable SLOs, and space to refactor when the first pass was intentionally thin.",
    },
  ],
} as const;

export const contactSection = {
  id: "contact",
  title: "Contact",
  lead: "Prefer email for first touch—it keeps context attached.",
  body:
    "Send role scope, stack, and how you measure success in the first 90 days. I’ll reply with availability and anything I need to evaluate fit honestly.",
  emailLabel: "Email",
  availabilityNote:
    "Weekday responses usually land within one business day; Fridays may spill to Monday for deep technical reads.",
  primaryLinkLabel: "Compose email",
  secondaryLinkLabel: "Connect on LinkedIn",
  secondaryHref: "https://www.linkedin.com/in/johnframos/",
} as const;

export const finalCta = {
  title: "If the profile matches, let’s make the next step obvious.",
  subtitle:
    "Skim the repos, send the brief, or forward this page—whatever gets your hiring loop unblocked fastest.",
  primaryCta: {
    label: "View my work",
    href: githubProfileUrl,
  },
  secondaryCta: {
    label: "Email John",
    href: `mailto:${contactEmail}`,
  },
} as const;

export const footer = {
  tagline: `${site.brandName} — ${site.brandDescriptor}`,
  /** // UPDATE YOUR INFO HERE */
  copyright: "© 2026 John Felipe. All rights reserved.",
  socials: [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/johnframos/",
      icon: "Linkedin",
    },
    {
      label: "GitHub",
      href: githubProfileUrl,
      icon: "Github",
    },
    {
      label: "Email",
      href: `mailto:${contactEmail}`,
      icon: "Mail",
    },
  ],
} as const;
