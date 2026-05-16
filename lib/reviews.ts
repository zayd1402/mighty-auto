export interface Review {
  name: string;
  location: string;
  rating: number;
  text: string;
  date: string;
}

export const featuredReviews: Review[] = [
  {
    name: "Michael R.",
    location: "Merrylands",
    rating: 5,
    text: "Fantastic service! They explained everything clearly and didn't try to upsell me on things I didn't need. My car has never run better. Will definitely be coming back.",
    date: "March 2026",
  },
  {
    name: "Sarah K.",
    location: "Wentworthville",
    rating: 5,
    text: "Called at 3pm with a flat tyre, they fitted me in that afternoon. Professional, fast, and the price was fair. These guys know what they're doing.",
    date: "February 2026",
  },
  {
    name: "David T.",
    location: "Greystanes",
    rating: 5,
    text: "Been using Mighty Auto's for years. Honest, reliable, and they remember my car. The whole family uses them now. Couldn't recommend them more highly.",
    date: "January 2026",
  },
];