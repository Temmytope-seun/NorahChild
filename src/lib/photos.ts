// Free-to-use photography sourced from Pexels (Pexels License — free for
// commercial use, no attribution required). These are stock photos used to
// represent NorahChild's work, not photos of actual NorahChild beneficiaries.
// Swap these out for real program photos as they become available.
export const heroPhotos = {
  smilingChild: {
    src: "https://images.pexels.com/photos/14640360/pexels-photo-14640360.jpeg?auto=compress&cs=tinysrgb&w=900",
    alt: "A smiling child",
    credit: "Bwalya Marcel Ngosa / Pexels",
  },
  classroom: {
    src: "https://images.pexels.com/photos/28593055/pexels-photo-28593055.jpeg?auto=compress&cs=tinysrgb&w=900",
    alt: "Children learning together in a classroom",
    credit: "Şeyhmus Kino / Pexels",
  },
  scholarshipRecipients: {
    src: "https://images.pexels.com/photos/19348206/pexels-photo-19348206.jpeg?auto=compress&cs=tinysrgb&w=900",
    alt: "Students in school uniform walking together with their books",
    credit: "Workman House / Pexels",
  },
  outreach: {
    src: "https://images.pexels.com/photos/9968380/pexels-photo-9968380.jpeg?auto=compress&cs=tinysrgb&w=900",
    alt: "Children gathered together during a community outreach visit",
    credit: "Lagos Food Bank Initiative / Pexels",
  },
} as const;

// Same classroom photo (landscape, crops cleanly into the 1200x630 OG
// canvas) at a higher resolution for social share images.
export const ogHeroPhoto =
  "https://images.pexels.com/photos/28593055/pexels-photo-28593055.jpeg?auto=compress&cs=tinysrgb&w=1600";
