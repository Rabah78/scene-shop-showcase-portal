
import HeroSection from "@/components/HeroSection";
import ProductHighlights from "@/components/ProductHighlights";
import TechnologySection from "@/components/TechnologySection";
import UseCaseShowcase from "@/components/UseCaseShowcase";
import BusinessImpact from "@/components/BusinessImpact";
import AboutSection from "@/components/AboutSection";
import CTAFooter from "@/components/CTAFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-midnight-900 text-white overflow-x-hidden">
      <HeroSection />
      <ProductHighlights />
      <TechnologySection />
      <UseCaseShowcase />
      <BusinessImpact />
      <AboutSection />
      <CTAFooter />
    </div>
  );
};

export default Index;
