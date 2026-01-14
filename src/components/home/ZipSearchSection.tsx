import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { AnimateOnScroll } from '@/components/ui/AnimateOnScroll';
import { MapPin, Search } from 'lucide-react';
import zipSearchBg from '@/assets/zip-search-bg.jpg';

export default function ZipSearchSection() {
  const [zipCode, setZipCode] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle zip code search
    console.log('Searching for:', zipCode);
  };

  return (
    <section
      className="relative py-24 fixed-bg"
      style={{ backgroundImage: `url(${zipSearchBg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/80" />

      {/* Content */}
      <div className="relative container-isp text-center">
        <AnimateOnScroll variant="fadeUp">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-accent rounded-full px-4 py-2 mb-6">
              <MapPin className="w-5 h-5 text-accent-foreground" />
              <span className="text-accent-foreground font-semibold">Check Your Area</span>
            </div>
            
            <h2 className="font-display text-3xl md:text-5xl font-extrabold text-primary-foreground mb-6">
              Check Service Availability in Your Area
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-10">
              Enter your ZIP code to learn what internet and cable services are available in your area. We'll help you understand your options.
            </p>

            {/* Search Form */}
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <div className="relative flex-1">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Enter your ZIP code"
                  value={zipCode}
                  onChange={(e) => setZipCode(e.target.value)}
                  className="pl-12 h-14 text-lg bg-background border-0 shadow-lg"
                  maxLength={5}
                />
              </div>
              <Button 
                type="button" 
                variant="cta" 
                size="xl" 
                className="shadow-lg"
                onClick={() => window.location.href = 'tel:18004438638'}
              >
                <Search className="w-5 h-5" />
                Get Guidance
              </Button>
            </form>

            <p className="text-primary-foreground/70 text-sm mt-6">
              Available in 45+ states. Your information is secure and private.
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
