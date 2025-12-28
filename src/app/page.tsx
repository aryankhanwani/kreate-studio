import HeroSection from '@/components/HeroSection';
import ProjectsSection from '@/components/ProjectsSection';
import ProcessSection from '@/components/ProcessSection';
import ServicesSection from '@/components/ServicesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import BannerCTASection from '@/components/BannerCTASection';
import FAQSection from '@/components/FAQSection';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ProjectsSection />
      <ProcessSection />
      <ServicesSection />
      <TestimonialsSection />
      <BannerCTASection />
      <FAQSection />
      <ContactSection />
    </div>
  );
}
