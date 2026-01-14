import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/home/HeroSection';
import ServicesSection from '@/components/home/ServicesSection';
import WhatWeDoNotSection from '@/components/home/WhatWeDoNotSection';
import FeatureBanner from '@/components/home/FeatureBanner';
import ContentSplitSection from '@/components/home/ContentSplitSection';
import ZipSearchSection from '@/components/home/ZipSearchSection';
import BenefitsSection from '@/components/home/BenefitsSection';
import GallerySection from '@/components/home/GallerySection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import FinalCTASection from '@/components/home/FinalCTASection';
import CallPopup from '@/components/CallPopup';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-[120px]">
        <HeroSection />
        <ServicesSection />
        <WhatWeDoNotSection />
        <FeatureBanner />
        <ContentSplitSection />
        <ZipSearchSection />
        <BenefitsSection />
        <GallerySection />
        <TestimonialsSection />
        <FinalCTASection />
      </main>
      <Footer />
      <CallPopup />
    </div>
  );
};

export default Index;
