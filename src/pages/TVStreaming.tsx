import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { AnimateOnScroll, StaggerContainer, StaggerItem } from '@/components/ui/AnimateOnScroll';
import { CheckCircle, Tv, Play, Film, ArrowRight, Phone } from 'lucide-react';
import streamingImage from '@/assets/streaming-devices.jpg';
import zipSearchBg from '@/assets/zip-search-bg.jpg';

const channels = [
  'ESPN', 'HBO', 'CNN', 'Discovery', 'Disney', 'Nickelodeon', 'Fox Sports', 'AMC',
  'TNT', 'USA', 'Bravo', 'HGTV', 'Food Network', 'MTV', 'Comedy Central', 'Syfy',
];

const streamingApps = [
  { name: 'Netflix', included: true },
  { name: 'Disney+', included: true },
  { name: 'HBO Max', included: true },
  { name: 'Hulu', included: true },
  { name: 'Prime Video', included: false },
  { name: 'Paramount+', included: false },
];

export default function TVStreaming() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-[120px]">
        {/* Hero */}
        <section
          className="relative py-24 md:py-32 fixed-bg"
          style={{ backgroundImage: `url(${zipSearchBg})` }}
        >
          <div className="absolute inset-0 bg-primary/80" />
          <div className="relative container-isp text-center">
            <AnimateOnScroll variant="fadeUp">
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">
                TV & Streaming Help
              </h1>
              <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
                We guide you through understanding TV packages, streaming options, and channel lineups
                available from different providers in your area.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button 
                  variant="hero"
                  onClick={() => window.location.href = 'tel:+18334043389'}
                >
                  <Phone className="w-5 h-5" />
                  Call Now: (833) 404-3389
                </Button>
                <Button 
                  variant="hero-outline"
                  onClick={() => window.location.href = 'tel:+18334043389'}
                >
                  <Play className="w-5 h-5" />
                  Get Expert Help
                </Button>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Channels Grid */}
        <section className="section-padding bg-background">
          <div className="container-isp">
            <AnimateOnScroll variant="fadeUp">
              <div className="text-center mb-12">
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Understanding <span className="text-accent">Channel Options</span>
                </h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  Examples of popular channels offered by various providers. Actual channel lineups vary.
                </p>
              </div>
            </AnimateOnScroll>

            <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 mb-12">
              {channels.map((channel) => (
                <StaggerItem key={channel}>
                  <div className="bg-muted rounded-lg p-4 text-center font-semibold text-foreground hover:bg-accent hover:text-accent-foreground transition-colors cursor-pointer">
                    {channel}
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            <div className="text-center">
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => window.location.href = 'tel:+18334043389'}
              >
                <Phone className="w-5 h-5" />
                Call Now: (833) 404-3389
              </Button>
            </div>
          </div>
        </section>

        {/* Streaming Apps */}
        <section className="section-padding bg-muted">
          <div className="container-isp">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <AnimateOnScroll variant="slideLeft">
                <span className="inline-block bg-accent/10 text-accent font-semibold px-4 py-2 rounded-full text-sm mb-4">
                  All-in-One Entertainment
                </span>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Your Favorite <span className="text-accent">Streaming Apps</span> Built-In
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  No more switching between apps and remotes. Access all your streaming favorites from one easy interface.
                </p>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  {streamingApps.map((app) => (
                    <div
                      key={app.name}
                      className={`flex items-center gap-3 p-4 rounded-lg ${
                        app.included ? 'bg-background' : 'bg-background/50'
                      }`}
                    >
                      <CheckCircle className={`w-5 h-5 ${app.included ? 'text-accent' : 'text-muted-foreground'}`} />
                      <span className={app.included ? 'font-semibold' : 'text-muted-foreground'}>
                        {app.name}
                        {app.included && <span className="text-accent text-xs ml-1">Included</span>}
                      </span>
                    </div>
                  ))}
                </div>

                <Button 
                  variant="cta" 
                  size="lg"
                  onClick={() => window.location.href = 'tel:+18334043389'}
                >
                  <Phone className="w-5 h-5" />
                  Call Now: (833) 404-3389
                </Button>
              </AnimateOnScroll>
              <AnimateOnScroll variant="slideRight">
                <img
                  src={streamingImage}
                  alt="Streaming on multiple devices"
                  className="rounded-2xl shadow-2xl"
                />
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* DVR Feature */}
        <section className="section-padding bg-primary text-primary-foreground">
          <div className="container-isp text-center">
            <AnimateOnScroll variant="scale">
              <Film className="w-16 h-16 mx-auto mb-6 text-accent" />
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                Cloud DVR Included
              </h2>
              <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto mb-8">
                Record up to 500 hours of your favorite shows and watch them anytime, anywhere—on any device.
              </p>
              <div className="flex flex-wrap gap-8 justify-center">
                {['500+ Hours Storage', 'Watch Anywhere', 'Skip Commercials', 'Never Miss a Show'].map((feature) => (
                  <div key={feature} className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    <span className="font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </AnimateOnScroll>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
