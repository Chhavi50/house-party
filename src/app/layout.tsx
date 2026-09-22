import type { Metadata } from "next";
import { Bebas_Neue, Caveat, Outfit } from "next/font/google";
import { eventConfig } from "@/config/event";
import "./globals.css";

const display = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
});

const brush = Caveat({
  subsets: ["latin"],
  variable: "--font-brush",
});

const body = Outfit({
  subsets: ["latin"],
  variable: "--font-body",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  title: "Our First House Party Chandigarh | ₹1999",
  description:
    "One night. Good people. DJ music, dance, games, unlimited snacks, soft drinks and hookah. Join Our First House Party in Chandigarh.",
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: "Our First House Party Chandigarh | ₹1999",
    description:
      "One night. Good people. DJ music, dance, games, unlimited snacks, soft drinks and hookah. Join Our First House Party in Chandigarh.",
    url: siteUrl,
    siteName: eventConfig.eventName,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: eventConfig.posterImage,
        width: 1200,
        height: 630,
        alt: "Our First House Party Chandigarh",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our First House Party Chandigarh | ₹1999",
    description:
      "One night. Good people. DJ music, dance, games, unlimited snacks, soft drinks and hookah.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${brush.variable} ${body.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-bg font-body text-text">{children}</body>
    </html>
  );
}
