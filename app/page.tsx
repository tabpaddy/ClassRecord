import { Navbar } from "./components/navbar";
import HeroSection from "./components/heroSection";
import ProblemSection from "./components/problemSection";
import WhySection from "./components/whySection";
import FeatureSection from "./components/featureSection";
import HowSection from "./components/howSection";
import StakeholderSection from "./components/stakeholderSection";
import CTASection from "./components/ctaSection";
import FooterSection from "./components/footerSection";
import ScrollUpSection from "./components/scrollUpSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* problem section */}
      <ProblemSection/>

      {/* why section */}
      <WhySection/>

      {/* Features Section */}
      <FeatureSection/>

      {/* how section */}
      <HowSection/>

      {/* stakeholder section */}
      <StakeholderSection/>

      {/* CTA section */}
      <CTASection/>

      {/* footer */}
      <FooterSection/>

      <ScrollUpSection/>
    </div>
  );
}
