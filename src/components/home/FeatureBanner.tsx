import { Button } from '@/components/ui/button';
import { AnimateOnScroll } from '@/components/ui/AnimateOnScroll';
import speedImage from '@/assets/speed-visualization.jpg';

export default function FeatureBanner() {
  return (
    <section
      className="relative py-32 fixed-bg"
      style={{ backgroundImage: `url(${speedImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-primary/70" />

      {/* Content */}
      <div className="relative container-isp text-center">
        <AnimateOnScroll variant="fadeUp">
          <h2 className="font-display text-3xl md:text-5xl font-extrabold text-primary-foreground mb-6">
            Understand Your Internet & Cable Options
          </h2>
        </AnimateOnScroll>
        <AnimateOnScroll variant="fadeUp" delay={0.1}>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto mb-8">
            As an independent third-party assistance provider, we help you navigate internet and cable service options available in your area. Make informed decisions with our guidance.
          </p>
        </AnimateOnScroll>
        <AnimateOnScroll variant="fadeUp" delay={0.2}>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="hero">
              Get Guidance
            </Button>
            <Button variant="hero-outline">
              Call Us Today
            </Button>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
