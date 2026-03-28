import { AboutSection } from "@/components/about-section";
import { ContactSection } from "@/components/contact-section";
import { CtaSection } from "@/components/cta-section";
import { FaqSection } from "@/components/faq-section";
import { HeroSection } from "@/components/hero-section";
import { PortfolioSection } from "@/components/portfolio-section";
import { ServicesSection } from "@/components/services-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SocialProofSection } from "@/components/social-proof-section";

export default function Home() {
  return (
    <div className="flex min-h-dvh flex-col overflow-x-hidden bg-zinc-50 text-zinc-900 antialiased">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <SocialProofSection />
        <AboutSection />
        <PortfolioSection />
        <ServicesSection />
        <FaqSection />
        <ContactSection />
        <CtaSection />
      </main>
      <SiteFooter />
    </div>
  );
}
