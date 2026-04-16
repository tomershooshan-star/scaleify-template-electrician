import { DealsBanner } from "@/components/sections/DealsBanner";
import { Navigation } from "@/components/sections/Navigation";
import { Hero } from "@/components/sections/Hero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { Services } from "@/components/sections/Services";
import { WhyChoose } from "@/components/sections/WhyChoose";
import { Process } from "@/components/sections/Process";
import { Stats } from "@/components/sections/Stats";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { ServiceArea } from "@/components/sections/ServiceArea";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { ContactForm } from "@/components/sections/ContactForm";
import { Footer } from "@/components/sections/Footer";
import { SEO, localBusinessJsonLd } from "@/components/SEO";

export default function Home() {
  return (
    <>
      <SEO path="/" jsonLd={localBusinessJsonLd()} />
      <DealsBanner />
      <Navigation />
      <main>
        <Hero />
        <TrustStrip />
        <Services />
        <WhyChoose />
        <Process />
        <Stats />
        <Testimonials />
        <FAQ />
        <ServiceArea />
        <FinalCTA />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
