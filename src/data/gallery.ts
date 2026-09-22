import type { GalleryItem } from "@/types";

/**
 * Replace these paths with your real party photos.
 * Keep categories as: Party | Food | Dance | DJ | Games | People | Ambience
 *
 * Suggested local paths:
 * /gallery/party-01.jpg
 * /gallery/food-01.jpg
 * etc.
 */
export const galleryItems: GalleryItem[] = [
  {
    id: "1",
    src: "/gallery/party-01.png",
    alt: "Neon house party crowd under pink lights",
    category: "Party",
    span: "wide",
  },
  {
    id: "2",
    src: "/gallery/food-01.png",
    alt: "Late-night party snacks spread",
    category: "Food",
  },
  {
    id: "3",
    src: "/gallery/dance-01.png",
    alt: "Silhouettes dancing in red neon",
    category: "Dance",
    span: "tall",
  },
  {
    id: "4",
    src: "/gallery/dj-01.png",
    alt: "DJ booth with glowing decks",
    category: "DJ",
  },
  {
    id: "5",
    src: "/gallery/people-01.png",
    alt: "Friends playing party games and hanging out",
    category: "Games",
  },
  {
    id: "6",
    src: "/gallery/people-01.png",
    alt: "Guests laughing together at night",
    category: "People",
    span: "wide",
  },
  {
    id: "7",
    src: "/gallery/ambience-01.png",
    alt: "Dark room with neon pink ambience",
    category: "Ambience",
  },
  {
    id: "8",
    src: "/gallery/party-01.png",
    alt: "House party vibes in Chandigarh",
    category: "Party",
  },
  {
    id: "9",
    src: "/gallery/dance-01.png",
    alt: "Dance floor energy",
    category: "Dance",
  },
  {
    id: "10",
    src: "/gallery/food-01.png",
    alt: "Veg and non-veg party bites",
    category: "Food",
  },
  {
    id: "11",
    src: "/gallery/ambience-01.png",
    alt: "Hookah lounge glow",
    category: "Ambience",
    span: "tall",
  },
  {
    id: "12",
    src: "/gallery/people-01.png",
    alt: "Strangers becoming friends",
    category: "People",
  },
];

export const galleryCategories = [
  "All",
  "Party",
  "Food",
  "Dance",
  "DJ",
  "Games",
  "People",
  "Ambience",
] as const;
