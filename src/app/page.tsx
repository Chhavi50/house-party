import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { EventDetails } from "@/components/EventDetails";
import { Included } from "@/components/Included";
import { Experience } from "@/components/Experience";
import { Gallery } from "@/components/Gallery";
import { BookingSection } from "@/components/BookingSection";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <EventDetails />
        <Included />
        <Experience />
        <Gallery />
        <BookingSection />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}
