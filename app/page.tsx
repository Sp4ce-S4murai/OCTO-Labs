import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { PainPoints } from "@/components/PainPoints";
import { HowItWorks } from "@/components/HowItWorks";
import { Pricing } from "@/components/Pricing";
import { Testimonials } from "@/components/Testimonials";
import { About } from "@/components/About";
import { Faq } from "@/components/Faq";
import { CtaFinal } from "@/components/CtaFinal";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <PainPoints />
        <HowItWorks />
        <Pricing />
        <Testimonials />
        <About />
        <Faq />
        <CtaFinal />
      </main>
      <Footer />
    </>
  );
}
