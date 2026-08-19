import Hero from "@/components/sections/Hero";
import Advantages from "@/components/sections/Advantages";
import ServicesPreview from "@/components/sections/ServicesPreview";
import Portfolio from "@/components/sections/Portfolio";
import ReviewsPreview from "@/components/sections/ReviewsPreview";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <Advantages />
      <ServicesPreview />
      <Portfolio />
      <ReviewsPreview />
      <ContactSection />
    </>
  );
}
