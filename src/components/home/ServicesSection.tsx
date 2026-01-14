import { Tv, Wifi, Phone, ArrowRight, BookOpen, Search, HelpCircle } from 'lucide-react';
import { AnimateOnScroll, StaggerContainer, StaggerItem } from '@/components/ui/AnimateOnScroll';

const services = [
  {
    id: 1,
    title: 'Internet Service Guidance',
    description: 'Understand internet and broadband service options available in your area. Learn about speeds, types of connections, and provider processes.',
    icon: Wifi,
  },
  {
    id: 2,
    title: 'Cable TV Assistance',
    description: 'Receive general informational support related to cable TV services, channel packages, and streaming options.',
    icon: Tv,
  },
  {
    id: 3,
    title: 'Connectivity Support',
    description: 'Get practical guidance on common connectivity issues and learn how to navigate service provider support processes.',
    icon: HelpCircle,
  },
];

export default function ServicesSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-isp">
        {/* Section Header */}
        <AnimateOnScroll variant="fadeUp">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              What We <span className="text-accent">Do</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              At Digi Mercury, we help users navigate internet and cable service options through independent guidance and informational support.
            </p>
          </div>
        </AnimateOnScroll>

        {/* Service Cards */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <StaggerItem key={service.id}>
                <div className="bg-card border border-border rounded-2xl p-8 card-hover h-full">
                  <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {service.description}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
        
        {/* Key Points */}
        <AnimateOnScroll variant="fadeUp">
          <div className="bg-muted rounded-2xl p-8 text-center max-w-3xl mx-auto">
            <p className="text-lg text-foreground">
              <strong>Our role is limited to independent guidance and assistance only.</strong> We provide informational support to help you understand your options and make informed decisions.
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
