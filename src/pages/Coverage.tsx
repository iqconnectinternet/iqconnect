import { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { AnimateOnScroll, StaggerContainer, StaggerItem } from '@/components/ui/AnimateOnScroll';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, CheckCircle, Search, ArrowRight, Phone } from 'lucide-react';
import coverageMapBg from '@/assets/coverage-map-bg.jpg';

export default function Coverage() {
  const [zipCode, setZipCode] = useState('');
  const [searched, setSearched] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (zipCode.length === 5) {
      setSearched(true);
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-[120px]">
        {/* Hero */}
        <section
          className="relative py-24 md:py-32 fixed-bg"
          style={{ backgroundImage: `url(${coverageMapBg})` }}
        >
          <div className="absolute inset-0 bg-primary/85" />
          <div className="relative container-isp text-center">
            <AnimateOnScroll variant="fadeUp">
              <MapPin className="w-16 h-16 mx-auto mb-6 text-accent" />
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">
                Check Service Availability
              </h1>
              <p className="text-xl text-white/90 max-w-2xl mx-auto mb-6">
                Enter your ZIP code to learn about services available in your area. This is informational assistance only.
              </p>
              <div className="bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-xl p-4 max-w-2xl mx-auto">
                <p className="text-white font-semibold text-sm">
                  ⚠️ We are an independent assistance provider. We help you understand what services are available - you will contact providers directly to enroll.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Search Section */}
        <section className="section-padding bg-background">
          <div className="container-isp max-w-2xl">
            <AnimateOnScroll variant="scale">
              <form onSubmit={handleSearch} className="bg-muted rounded-2xl p-8">
                <h2 className="font-display text-2xl font-bold text-foreground text-center mb-6">
                  Enter Your ZIP Code
                </h2>
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="relative flex-1">
                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      type="text"
                      placeholder="Enter 5-digit ZIP code"
                      value={zipCode}
                      onChange={(e) => setZipCode(e.target.value.replace(/\D/g, '').slice(0, 5))}
                      className="pl-12 h-14 text-lg bg-background border-0"
                    />
                  </div>
                  <Button type="submit" variant="cta" size="xl">
                    <Search className="w-5 h-5" />
                    Check Now
                  </Button>
                </div>
              </form>
            </AnimateOnScroll>

            {/* Results */}
            <AnimatePresence>
              {searched && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="mt-8 bg-card rounded-2xl p-8 border border-border"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-bold text-foreground">Great News!</h3>
                      <p className="text-muted-foreground">Services are available in your area ({zipCode})</p>
                    </div>
                  </div>

                  <div className="grid gap-4 mb-6">
                    {[
                      { name: 'High-Speed Internet', speeds: 'Up to 1 Gbps' },
                      { name: 'TV & Streaming', speeds: '200+ Channels' },
                      { name: 'Home Phone', speeds: 'Unlimited Calling' },
                      { name: 'Bundle Packages', speeds: 'Save up to $80/mo' },
                    ].map((service) => (
                      <div key={service.name} className="flex items-center justify-between p-4 bg-muted rounded-lg">
                        <div className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-accent" />
                          <span className="font-semibold text-foreground">{service.name}</span>
                        </div>
                        <span className="text-sm text-muted-foreground">{service.speeds}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button 
                      variant="cta" 
                      size="lg" 
                      className="flex-1"
                      onClick={() => window.location.href = 'tel:+18334043389'}
                    >
                      <Phone className="w-5 h-5" />
                      Call Now: (833) 404-3389
                    </Button>
                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="flex-1"
                      onClick={() => window.location.href = 'tel:+18334043389'}
                    >
                      Get Expert Guidance
                    </Button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>

        {/* Coverage Stats */}
        <section className="section-padding bg-muted">
          <div className="container-isp">
            <AnimateOnScroll variant="fadeUp">
              <div className="text-center mb-12">
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Nationwide <span className="text-accent">Coverage</span>
                </h2>
              </div>
            </AnimateOnScroll>
            <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { stat: '45+', label: 'States Covered' },
                { stat: '2M+', label: 'Homes Connected' },
                { stat: '99.9%', label: 'Uptime Guarantee' },
                { stat: '24/7', label: 'Support Available' },
              ].map((item) => (
                <StaggerItem key={item.label}>
                  <div className="text-center">
                    <p className="font-display text-4xl md:text-5xl font-extrabold text-accent mb-2">
                      {item.stat}
                    </p>
                    <p className="text-muted-foreground font-medium">{item.label}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
