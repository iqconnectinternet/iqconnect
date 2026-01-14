import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { AnimateOnScroll, StaggerContainer, StaggerItem } from '@/components/ui/AnimateOnScroll';
import { CheckCircle, Wifi, Tv, Phone, HelpCircle, BookOpen, Users } from 'lucide-react';
import finalCtaBg from '@/assets/final-cta-bg.jpg';

const guidanceAreas = [
  {
    icon: Wifi,
    title: 'Internet Options',
    description: 'Learn about different internet speeds and connection types available from various providers.',
  },
  {
    icon: Tv,
    title: 'TV Service Packages',
    description: 'Understand cable TV channel lineups and streaming options to find what fits your viewing habits.',
  },
  {
    icon: Phone,
    title: 'Phone Services',
    description: 'Get information about home phone service features and calling plans.',
  },
];

export default function Bundles() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-[120px]">
        {/* Hero */}
        <section
          className="relative py-24 md:py-32 fixed-bg"
          style={{ backgroundImage: `url(${finalCtaBg})` }}
        >
          <div className="absolute inset-0 bg-primary/85" />
          <div className="relative container-isp text-center">
            <AnimateOnScroll variant="fadeUp">
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">
                Bundle Service Guidance
              </h1>
              <p className="text-xl text-white/90 max-w-2xl mx-auto mb-6">
                Learn about bundled service options from various providers. We help you understand
                package combinations and compare offerings to find what fits your needs.
              </p>
              <div className="bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-xl p-4 max-w-2xl mx-auto mb-8">
                <p className="text-white font-semibold">
                  ⚠️ We are an independent assistance provider. We do not sell bundles or services directly.
                </p>
              </div>
              <Button 
                variant="hero"
                onClick={() => window.location.href = 'tel:+18334043389'}
              >
                <Phone className="w-5 h-5" />
                Call Now: (833) 404-3389
              </Button>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Guidance Areas */}
        <section className="section-padding bg-background">
          <div className="container-isp">
            <AnimateOnScroll variant="fadeUp">
              <div className="text-center mb-12">
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                  How We Can <span className="text-accent">Help</span>
                </h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  We provide general information and guidance to help you understand bundle options from various service providers.
                </p>
              </div>
            </AnimateOnScroll>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {guidanceAreas.map((area) => {
                const Icon = area.icon;
                return (
                  <StaggerItem key={area.title}>
                    <div className="bg-card border border-border rounded-2xl p-8 text-center card-hover h-full">
                      <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-6">
                        <Icon className="w-8 h-8 text-accent" />
                      </div>
                      <h3 className="font-display text-xl font-bold text-foreground mb-3">
                        {area.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {area.description}
                      </p>
                    </div>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>

            {/* Important Notice */}
            <AnimateOnScroll variant="fadeUp">
              <div className="bg-muted border-2 border-accent/20 rounded-2xl p-8 max-w-4xl mx-auto">
                <div className="flex items-start gap-4">
                  <HelpCircle className="w-8 h-8 text-accent flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-foreground text-lg mb-2">What We Provide</h3>
                    <p className="text-muted-foreground mb-4">
                      We offer informational support to help you understand bundled service options. Our guidance is educational and designed to help you make informed decisions when contacting service providers directly.
                    </p>
                    <p className="text-sm text-muted-foreground font-semibold">
                      <strong>Note:</strong> Digi Mercury does not sell internet, TV, or phone services. All service enrollments must be completed directly with the provider of your choice.
                    </p>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-muted">
          <div className="container-isp text-center">
            <AnimateOnScroll variant="fadeUp">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Need Help Understanding Your Options?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Contact our independent assistance team to learn more about bundled service options available in your area.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button 
                  variant="cta" 
                  size="lg"
                  onClick={() => window.location.href = 'tel:+18334043389'}
                >
                  <Phone className="w-5 h-5" />
                  Call Now: (833) 404-3389
                </Button>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                Not an ISP • No brand affiliation • Informational support only
              </p>
            </AnimateOnScroll>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
