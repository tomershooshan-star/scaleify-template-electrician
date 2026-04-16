import { Hero } from "@/components/sections/Hero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { OneStop } from "@/components/sections/OneStop";
import { FeaturePanel } from "@/components/sections/FeaturePanel";
import { Services } from "@/components/sections/Services";
import { WhyChoose } from "@/components/sections/WhyChoose";
import { Process } from "@/components/sections/Process";
import { Stats } from "@/components/sections/Stats";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { ServiceArea } from "@/components/sections/ServiceArea";
import { ContactForm } from "@/components/sections/ContactForm";
import { Footer } from "@/components/sections/Footer";
import { SEO, localBusinessJsonLd } from "@/components/SEO";

export default function Home() {
  return (
    <>
      <SEO path="/" jsonLd={localBusinessJsonLd()} />
      <main>
        <Hero />
        <TrustStrip />
        <OneStop />
        <FeaturePanel />
        <Services />
        <Stats />
        <WhyChoose />
        <Process />
        <Testimonials />
        <FAQ />
        <ServiceArea />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
