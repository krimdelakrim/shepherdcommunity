export type SiteContent = {
  orgName: string;
  tagline: string;
  motto: string;
  mission: string;
  values: string[];
  serviceHighlights: { title: string; desc: string }[];
};

export const DEFAULT_CONTENT: SiteContent = {
  orgName: "Shepherd Community",
  tagline: "Filling the gaps with practical help, connection, and dignity.",
  motto: "Duty to this realm — blessed is he who regards the weak and the meek.",
  mission:
    "We help seniors, youth, people with disabilities, and low-income neighbors access support, solve practical problems, and feel less alone. We bridge gaps by coordinating volunteers, referrals, and community resources.",
  values: [
    "The Golden Rule: treat others the way we want to be treated.",
    "Service across diverse religious perspectives and backgrounds.",
    "Respect, privacy, and dignity for every person.",
    "Practical action: show up, follow through, and connect people to solutions.",
  ],
  serviceHighlights: [
    {
      title: "Handyman & Home Support",
      desc: "Minor repairs, safety checks, basic maintenance, and light help around the home when available.",
    },
    {
      title: "Companionship & Visits",
      desc: "Friendly visits and check-ins for seniors, including nursing home companionship where permitted.",
    },
    {
      title: "Benefits & Paperwork Help",
      desc: "Administrative help preparing documents and organizing information to pursue benefits (we are not attorneys).",
    },
    {
      title: "Meals & Community Partners",
      desc: "Meal support through partners like Lasagna Love and other community resources when available.",
    },
    {
      title: "Referrals & Resource Navigation",
      desc: "We help connect people to local services, agencies, and programs that fit their needs.",
    },
    {
      title: "Furniture & Basic Needs",
      desc: "When we have items and volunteers available, we help deliver donated furniture and essentials.",
    },
    {
      title: "Self-Reliance & Growth",
      desc: "Classes and community support focused on self-help, emotional growth, and practical self-reliance (not therapy; we can refer).",
    },
  ],
};

