import { Header } from "@/components/sections/header";
import { Hero } from "@/components/sections/hero";
import { StatBar } from "@/components/sections/stat-bar";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Benefits } from "@/components/sections/benefits";
import { Pricing } from "@/components/sections/pricing";
import { Testimonials } from "@/components/sections/testimonials";
import { Faq } from "@/components/sections/faq";
import { Footer } from "@/components/sections/footer";
import { MobileCTA } from "@/components/sections/mobile-cta";
import { OrderProvider } from "@/components/order-modal";

export default function HomePage() {
  return (
    <OrderProvider>
      <Header />
      <main className="flex-1">
        <Hero />
        <StatBar />
        <section id="producto" className="sr-only" aria-hidden />
        <HowItWorks />
        <Benefits />
        <Pricing />
        <Testimonials />
        <Faq />
      </main>
      <Footer />
      <MobileCTA />
    </OrderProvider>
  );
}
