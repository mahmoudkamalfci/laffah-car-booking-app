import { HeroSection } from "@/components/hero-section";
import FleetSection from "@/components/fleet-section";
import { WhyChooseUs } from "@/components/why-choose-us";
import Testimonials from "@/components/testimonials";
import JoinUs from "@/components/join-us";

import { FAQ } from "@/components/faq";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <FleetSection />
      <WhyChooseUs />
      <Testimonials />
      <JoinUs />
      <FAQ />
    </div>
  );
}
