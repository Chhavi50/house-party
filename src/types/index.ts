export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  category: GalleryCategory;
  span?: "normal" | "tall" | "wide";
}

export type GalleryCategory =
  | "Party"
  | "Food"
  | "Dance"
  | "DJ"
  | "Games"
  | "People"
  | "Ambience";
