import { Zap, Shield, DollarSign, HeartHandshake, Wifi, Clock } from 'lucide-react';
import { AnimateOnScroll, StaggerContainer, StaggerItem } from '@/components/ui/AnimateOnScroll';

const benefits = [
  {
    icon: Zap,
    title: 'Blazing Fast Speeds',
    description: 'Up to 1 Gbps download speeds for seamless streaming, gaming, and working from home.',
  },
  {
    icon: Shield,
    title: 'Reliable Network',
    description: '99.9% uptime guarantee with our advanced fiber-optic infrastructure.',
  },
  {
    icon: DollarSign,
    title: 'Affordable Pricing',
    description: 'Competitive rates with no hidden fees. Get more value for your money.',
  },
  {
    icon: HeartHandshake,
    title: 'Trusted Providers',
    description: 'Partnered with top-rated national and regional service providers.',
  },
  {
    icon: Wifi,
    title: 'Whole-Home Coverage',
    description: 'Advanced WiFi technology ensures coverage in every corner of your home.',
  },
  {
    icon: Clock,
    title: '24/7 Support',
    description: 'Expert customer support available around the clock when you need it.',
  },
];

export default function BenefitsSection() {
  return (
    <section className="section-padding bg-muted">
      <div className="container-isp">
        {/* Section Header */}
        <AnimateOnScroll variant="fadeUp">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Families <span className="text-accent">Choose Us</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We're committed to providing the best internet and entertainment experience for your home.
            </p>
          </div>
        </AnimateOnScroll>

        {/* Benefits Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <StaggerItem key={benefit.title}>
                <div className="bg-background rounded-xl p-8 card-hover h-full">
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {benefit.description}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
