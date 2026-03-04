import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import AboutSnapshot from "@/components/home/AboutSnapshot";
import ServicesSection from "@/components/home/ServicesSection";
import CalculatorSection from "@/components/home/CalculatorSection";
import WhyChooseSection from "@/components/home/WhyChooseSection";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <AboutSnapshot />
      <ServicesSection />
      <CalculatorSection />
      <WhyChooseSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
