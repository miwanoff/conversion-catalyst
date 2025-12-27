import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CredibilityStrip from "@/components/CredibilityStrip";
import ProblemSolution from "@/components/ProblemSolution";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import FeaturedWork from "@/components/FeaturedWork";
import TestimonialsSection from "@/components/TestimonialsSection";
import AboutSection from "@/components/AboutSection";
import CTASection from "@/components/CTASection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <CredibilityStrip />
        <ProblemSolution />
        <ServicesSection />
        <ProcessSection />
        <FeaturedWork />
        <TestimonialsSection />
        <AboutSection />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
};

export default Index;
