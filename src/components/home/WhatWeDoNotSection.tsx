import { AnimateOnScroll, StaggerContainer, StaggerItem } from '@/components/ui/AnimateOnScroll';
import { X } from 'lucide-react';

const doNotItems = [
  'We are not an Internet Service Provider (ISP)',
  'We do not provide official customer support for any brand',
  'We are not affiliated, authorized, or endorsed by any telecom or cable company',
  'We do not sell internet or cable subscriptions',
  'We do not provide guaranteed technical fixes',
  'We do not represent or partner with any service provider',
];

export default function WhatWeDoNotSection() {
  return (
    <section className="section-padding bg-muted">
      <div className="container-isp">
        <AnimateOnScroll variant="fadeUp">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              What We Do <span className="text-accent">NOT</span> Do
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              To avoid confusion, please note the following important clarifications about our services.
            </p>
          </div>
        </AnimateOnScroll>

        <StaggerContainer className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {doNotItems.map((item, index) => (
              <StaggerItem key={index}>
                <div className="bg-background border-2 border-destructive/20 rounded-xl p-6 flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-destructive/10 flex items-center justify-center">
                    <X className="w-5 h-5 text-destructive" />
                  </div>
                  <p className="text-foreground font-medium">{item}</p>
                </div>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>

        <AnimateOnScroll variant="fadeUp">
          <div className="mt-12 bg-accent/5 border-2 border-accent/20 rounded-2xl p-8 max-w-4xl mx-auto">
            <p className="text-center text-lg text-foreground">
              <strong className="text-accent">Important:</strong> All mentions of providers, if any, are strictly for informational purposes only. We do not represent, endorse, or have partnerships with any internet, cable, or telecommunications company.
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
