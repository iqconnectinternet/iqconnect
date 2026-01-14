import { Button } from '@/components/ui/button';
import { Phone, ArrowRight } from 'lucide-react';
import { AnimateOnScroll } from '@/components/ui/AnimateOnScroll';
import finalCtaBg from '@/assets/final-cta-bg.jpg';

export default function FinalCTASection() {
  return (
    <section
      className="relative py-32 fixed-bg"
      style={{ backgroundImage: `url(${finalCtaBg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-primary/85" />

      {/* Content */}
      <div className="relative container-isp text-center">
        <AnimateOnScroll variant="fadeUp">
          <h2 className="font-display text-3xl md:text-5xl font-extrabold text-primary-foreground mb-6">
            Ready to Make an Informed Decision?
          </h2>
        </AnimateOnScroll>
        <AnimateOnScroll variant="fadeUp" delay={0.1}>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto mb-10">
            Call Digi Mercury today for independent, unbiased guidance on internet and cable services in your area. Our advisors are ready to help.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll variant="fadeUp" delay={0.2}>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button 
              variant="hero"
              onClick={() => window.location.href = 'tel:18004438638'}
            >
              Call Now for Guidance
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button 
              variant="hero-outline"
              onClick={() => window.location.href = 'tel:18004438638'}
            >
              <Phone className="w-5 h-5" />
              1-800-443-8638
            </Button>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll variant="fadeIn" delay={0.3}>
          <div className="mt-12 pt-8 border-t border-primary-foreground/20">
            <p className="text-primary-foreground/70 text-sm">
              * Digi Mercury is an independent third-party service assistance provider. Not affiliated with any ISP or service provider. We provide guidance only, not direct service.
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
