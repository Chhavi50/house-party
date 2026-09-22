export const eventConfig = {
  eventName: "Our First House Party",
  tagline: "GOOD PEOPLE. BAD DECISIONS.",
  location: "Chandigarh",
  locationNote: "DM for exact address",
  date: "26",
  day: "Saturday Night",
  time: "8 PM onwards",
  price: 2299,
  currency: "INR",
  currencySymbol: "₹",
  byobNote: "BYOB Available",
  googleFormUrl:
    "https://docs.google.com/forms/d/e/1FAIpQLScToOC0Lnddb3KfQvwN5p9QeVfbCULaQH8PQK4SY8aERIdQWQ/viewform?usp=header",
  posterImage: "/poster-placeholder.svg",
  heroImage: "/hero-party.png",
  year: 2026,
  contactNumbers: [
    { name: "Tanya", phone: "7807283822" },
    { name: "Katin", phone: "9682308381" },
  ],
  slogans: [
    "GOOD PEOPLE, BAD DECISIONS",
    "SAME PEOPLE, DIFFERENT NIGHT",
    "STRANGERS TODAY, FRIENDS TOMORROW",
    "IT'S GONNA BE LIT",
    "EAT · DRINK · DANCE · REPEAT",
    "GOOD DRINKS, BETTER COMPANY",
    "GOOD FOOD, GREAT COMPANY",
  ],
} as const;

export type EventConfig = typeof eventConfig;
