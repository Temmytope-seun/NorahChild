export type Post = {
  slug: string;
  title: string;
  date: string;
  category: string;
  tone: "orange" | "teal" | "amber" | "stone";
  excerpt: string;
  content: string[];
};

export const posts: Post[] = [
  {
    slug: "back-to-school-2026",
    title: "120 Children Return to School This Term Through NorahChild Sponsorships",
    date: "2026-01-15",
    category: "School Fees",
    tone: "orange",
    excerpt:
      "Thanks to generous donors, 120 children across three states resumed classes this term with fully paid school fees and new uniforms.",
    content: [
      "This term, NorahChild sponsored school fees for 120 children across Lagos, Ogun, and Benue states — many of whom had missed previous terms due to unpaid fees.",
      "Each child received a full uniform set, textbooks, and a backpack of learning materials, thanks to the generosity of individual donors and two corporate partners.",
      "We are grateful to everyone who made this possible and look forward to following these children's progress throughout the school year.",
    ],
  },
  {
    slug: "zoo-excursion-recap",
    title: "A Day at the Zoo: First-Time Smiles for 80 Children",
    date: "2025-12-02",
    category: "Excursions",
    tone: "teal",
    excerpt:
      "For most of the 80 children who joined our zoo excursion, it was their very first time seeing animals outside of a textbook.",
    content: [
      "NorahChild organized a day trip to the zoo for 80 children from our partner communities, many of whom had never left their neighborhoods before.",
      "The day included a guided tour, lunch, and a short educational session on wildlife conservation led by our volunteer team.",
      "We're already planning our next excursion — a waterfall trip — for early next year.",
    ],
  },
  {
    slug: "scholarship-recipients-announced",
    title: "Meet Our 2026 Scholarship Recipients",
    date: "2025-11-10",
    category: "Scholarships",
    tone: "amber",
    excerpt:
      "We're proud to announce 35 new scholarship recipients who will receive full tuition support through the next academic year.",
    content: [
      "After a careful review process involving academic performance, financial need, and interviews with guardians, NorahChild selected 35 new scholarship recipients for the 2026 academic year.",
      "These scholarships cover full tuition, books, and a monthly stipend for transportation and feeding.",
      "Congratulations to all recipients — we can't wait to see what you achieve.",
    ],
  },
  {
    slug: "childrens-day-celebration",
    title: "Children's Day 2025: Games, Gifts & Good Times",
    date: "2025-05-27",
    category: "Celebrations",
    tone: "stone",
    excerpt:
      "Over 300 children joined us for a day of games, music, food, and gifts to mark this year's Children's Day celebration.",
    content: [
      "Our annual Children's Day celebration brought together over 300 children from communities we serve for a full day of games, music, dance, and good food.",
      "Every child went home with a gift bag containing school supplies, toys, and treats.",
      "Thank you to our volunteers and sponsors who made this joyful day possible.",
    ],
  },
];
