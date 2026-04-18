import { UtilityBar } from "@/components/UtilityBar";
import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { About } from "@/components/sections/About";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { OneStop } from "@/components/sections/OneStop";
import { Stats } from "@/components/sections/Stats";
import { FeaturePanel } from "@/components/sections/FeaturePanel";
import { Services } from "@/components/sections/Services";
import { TextSlider } from "@/components/sections/TextSlider";
import { WhyChoose } from "@/components/sections/WhyChoose";
import { Process } from "@/components/sections/Process";
import { Testimonials } from "@/components/sections/Testimonials";
import { CtaBand } from "@/components/sections/CtaBand";
import { FAQ } from "@/components/sections/FAQ";
import { ServiceArea } from "@/components/sections/ServiceArea";
import { ContactForm } from "@/components/sections/ContactForm";
import { Footer } from "@/components/sections/Footer";
import { SEO, localBusinessJsonLd } from "@/components/SEO";

export default function Home() {
  return (
    <>
      <SEO path="/" jsonLd={localBusinessJsonLd()} />
      <UtilityBar />
      <main>
        <Hero />
        <Features />
        <About />
        <TrustStrip />
        <OneStop />
        <Stats />
        <FeaturePanel />
        <Services />
        <TextSlider />
        <WhyChoose />
        <Process />
        <Testimonials />
        <CtaBand />
        <FAQ />
        <ServiceArea />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
