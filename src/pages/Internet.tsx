import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { AnimateOnScroll, StaggerContainer, StaggerItem } from '@/components/ui/AnimateOnScroll';
import { CheckCircle, Wifi, Zap, Shield, ArrowRight, HelpCircle, BookOpen, Phone } from 'lucide-react';
import routerImage from '@/assets/router-modem.jpg';
import coverageMapBg from '@/assets/coverage-map-bg.jpg';

const speedCategories = [
  {
    name: 'Basic Speeds',
    range: '25-100 Mbps',
    useCases: ['Email & web browsing', 'Standard video calls', '1-2 users'],
  },
  {
    name: 'Medium Speeds',
    range: '100-300 Mbps',
    useCases: ['HD streaming', 'Online gaming', '3-4 users', 'Work from home'],
  },
  {
    name: 'High Speeds',
    range: '300-500 Mbps',
    useCases: ['4K streaming', 'Multiple devices', '4-6 users', 'Large file downloads'],
  },
  {
    name: 'Ultra Speeds',
    range: '500 Mbps - 1 Gbps+',
    useCases: ['Smart home devices', 'Professional streaming', '6+ users', 'Gaming & streaming simultaneously'],
  },
];

export default function Internet() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-[120px]">
        {/* Hero */}
        <section
          className="relative py-24 md:py-32 fixed-bg"
          style={{ backgroundImage: `url(${coverageMapBg})` }}
        >
          <div className="absolute inset-0 bg-primary/80" />
          <div className="relative container-isp text-center">
            <AnimateOnScroll variant="fadeUp">
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">
                Internet Service Assistance
              </h1>
              <p className="text-xl text-white/90 max-w-2xl mx-auto mb-6">
                Get independent guidance to help you understand internet service options. We provide informational support about speeds, connection types, and provider services available in your area.
              </p>
              <div className="bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-xl p-4 max-w-2xl mx-auto mb-8">
                <p className="text-white font-semibold">
                  ⚠️ We are an independent assistance provider. We do not provide internet services or represent any ISP.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button 
                  variant="hero"
                  onClick={() => window.location.href = 'tel:+18334043389'}
                >
                  <Phone className="w-5 h-5" />
                  Call Now: (833) 404-3389
                </Button>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Speed Education Section */}
        <section className="section-padding bg-background">
          <div className="container-isp">
            <AnimateOnScroll variant="fadeUp">
              <div className="text-center mb-12">
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Understanding <span className="text-accent">Internet Speeds</span>
                </h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  We help you understand different internet speed tiers and what they mean for your household. This information is for educational purposes only.
                </p>
              </div>
            </AnimateOnScroll>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {speedCategories.map((category) => (
                <StaggerItem key={category.name}>
                  <div className="bg-card border border-border rounded-2xl p-6 card-hover h-full">
                    <div className="text-center mb-6">
                      <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                        <Wifi className="w-6 h-6 text-accent" />
                      </div>
                      <h3 className="font-display text-xl font-bold mb-2">{category.name}</h3>
                      <p className="text-accent font-semibold">{category.range}</p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm font-semibold text-muted-foreground mb-3">Typical Uses:</p>
                      {category.useCases.map((useCase, i) => (
                        <div key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0 text-accent" />
                          <span>{useCase}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            <AnimateOnScroll variant="fadeUp">
              <div className="bg-muted border-2 border-accent/20 rounded-2xl p-8 max-w-4xl mx-auto">
                <div className="flex items-start gap-4">
                  <BookOpen className="w-8 h-8 text-accent flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-foreground text-lg mb-2">Educational Information Only</h3>
                    <p className="text-muted-foreground mb-4">
                      The speed categories and information shown above are examples to help you understand what different internet speeds can support. Actual speeds, availability, and pricing vary by provider and location.
                    </p>
                    <p className="text-sm text-muted-foreground font-semibold">
                      <strong>Digi Mercury does not sell internet services.</strong> We provide guidance to help you understand your options before contacting providers directly.
                    </p>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Features Section */}
        <section className="section-padding bg-muted">
          <div className="container-isp">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <AnimateOnScroll variant="slideLeft">
                <img src={routerImage} alt="Modern router" className="rounded-2xl shadow-2xl" />
              </AnimateOnScroll>
              <AnimateOnScroll variant="slideRight">
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Common <span className="text-accent">Connection Types</span>
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Learn about different types of internet connections available and how they might fit your needs.
                </p>
                <div className="space-y-4">
                  {[
                    { icon: Zap, title: 'Fiber Internet', desc: 'Fastest speeds using fiber-optic cables' },
                    { icon: Wifi, title: 'Cable Internet', desc: 'High speeds via coaxial cable lines' },
                    { icon: Shield, title: 'DSL Internet', desc: 'Internet through phone lines' },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 p-4 bg-background rounded-xl">
                      <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <Button 
                  variant="cta" 
                  size="lg" 
                  className="mt-8"
                  onClick={() => window.location.href = 'tel:+18334043389'}
                >
                  <Phone className="w-5 h-5" />
                  Call Now: (833) 404-3389
                </Button>
                <p className="mt-4 text-sm text-muted-foreground">
                  Independent guidance • No sales • Informational support only
                </p>
              </AnimateOnScroll>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
