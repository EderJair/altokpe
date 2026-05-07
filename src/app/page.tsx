import { SmoothScroll } from "@/components/smooth-scroll";
import { OrderProvider } from "@/components/order-modal";
import { Header } from "@/components/sections/header";
import { Hero } from "@/components/sections/hero";
import { Marquee } from "@/components/sections/marquee";
import { SpecStrip } from "@/components/sections/spec-strip";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Benefits } from "@/components/sections/benefits";
import { Pricing } from "@/components/sections/pricing";
import { Testimonials } from "@/components/sections/testimonials";
import { Faq } from "@/components/sections/faq";
import { Footer } from "@/components/sections/footer";
import { MobileCTA } from "@/components/sections/mobile-cta";

export default function HomePage() {
  return (
    <SmoothScroll>
      <OrderProvider>
        <Header />
        <main className="flex-1">
          <Hero />
          <Marquee />
          <section id="producto" className="sr-only" aria-hidden />
          <SpecStrip />
          <HowItWorks />
          <Benefits />
          <Pricing />
          <Testimonials />
          <Faq />
        </main>
        <Footer />
        <MobileCTA />
      </OrderProvider>
    </SmoothScroll>
  );
}
