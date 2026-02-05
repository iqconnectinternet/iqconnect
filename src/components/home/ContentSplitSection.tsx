import { Button } from '@/components/ui/button';
import { CheckCircle, ArrowRight, Phone } from 'lucide-react';
import { AnimateOnScroll } from '@/components/ui/AnimateOnScroll';
import smartHomeImage from '@/assets/smart-home.jpg';

const benefits = [
  'Learn about speed options available from providers',
  'Understand bundle options and packages',
  'Get guidance on connectivity solutions',
  'Explore service availability in your area',
  'Access independent professional advice',
];

export default function ContentSplitSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-isp">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <AnimateOnScroll variant="slideLeft">
              <span className="inline-block bg-accent/10 text-accent font-semibold px-4 py-2 rounded-full text-sm mb-4">
                Why Choose Us
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Making Internet & Cable Choices{' '}
                <span className="text-accent">Simple & Clear</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Finding the right internet and cable service can be confusing. Our independent guidance helps you understand what's available in your area, compare options, and make informed decisions that match your needs.
              </p>

              {/* Benefits List */}
              <ul className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <AnimateOnScroll key={index} variant="slideLeft" delay={index * 0.1}>
                    <li className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-4 h-4 text-accent" />
                      </div>
                      <span className="text-foreground font-medium">{benefit}</span>
                    </li>
                  </AnimateOnScroll>
                ))}
              </ul>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4">
                <Button 
                  variant="cta" 
                  size="lg"
                  onClick={() => window.location.href = 'tel:+18445250789'}
                >
                  <Phone className="w-5 h-5" />
                  Call Now: (844) 525-0789
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => window.location.href = 'tel:+18445250789'}
                >
                  Get Expert Guidance
                </Button>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2">
            <AnimateOnScroll variant="slideRight">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={smartHomeImage}
                  alt="Smart home with connected devices"
                  className="w-full h-full object-cover"
                />
                {/* Floating Card */}
                <div className="absolute bottom-6 left-6 right-6 bg-background/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Average Speed</p>
                      <p className="text-2xl font-bold text-primary">940 Mbps</p>
                    </div>
                    <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
                      <div className="text-center">
                        <span className="text-2xl font-bold text-accent">99%</span>
                        <p className="text-xs text-muted-foreground">Uptime</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
