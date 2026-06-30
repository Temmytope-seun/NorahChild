export const siteConfig = {
  name: "NorahChild",
  title: "NorahChild | Giving Every Child a Chance",
  description:
    "NorahChild supports orphans, internally displaced children, and children of low-income families across Nigeria and Africa through school fees, scholarships, excursions, and community programs.",
  url:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
    "https://norah-child.vercel.app",
  locale: "en_US",
  keywords: [
    "NorahChild",
    "charity Nigeria",
    "children's charity Africa",
    "orphan support Nigeria",
    "internally displaced children",
    "school fees sponsorship",
    "scholarships for children Nigeria",
    "child welfare NGO",
    "donate to children Nigeria",
    "out of school children",
  ],
  email: "hello@norahchild.org",
  social: {
    facebook: "https://facebook.com/norahchild",
    instagram: "https://instagram.com/norahchild",
    twitter: "https://twitter.com/norahchild",
  },
} as const;
