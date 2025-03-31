import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { Partners } from "@/components/sections/partners";
import { Services } from "@/components/sections/services";
import { Team } from "@/components/sections/team";
import { Testimonials } from "@/components/sections/testimonials";
import { Map } from "@/components/sections/map";
import { FAQ } from "@/components/sections/faq";
import { CaseStudies } from "@/components/sections/case-studies";
import { MobileBookButton } from "@/components/ui/mobile-book-button";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <div> {/* Increased padding to account for fixed header */}
        <Hero />
        <Partners />
        <Services />
        <Testimonials />
        <Map />
        <Team />
        <CaseStudies />
        <FAQ />
        {/* Other sections will go here */}
      </div>
      <Footer />
      
      {/* Fixed Book a Survey button - client component */}
      <MobileBookButton />
    </main>
  );
}