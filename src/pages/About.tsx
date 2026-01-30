import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { AnimateOnScroll, StaggerContainer, StaggerItem } from '@/components/ui/AnimateOnScroll';
import { Users, Target, Award, Heart, ArrowRight } from 'lucide-react';
import familyBrowsingImage from '@/assets/family-browsing.jpg';
import supportTeamImage from '@/assets/support-team.jpg';

const values = [
  {
    icon: Users,
    title: 'Independent Guidance',
    description: 'We provide unbiased assistance without affiliation to any service provider.',
  },
  {
    icon: Target,
    title: 'Transparency',
    description: 'Clear information about our separate assistance fees and independent status.',
  },
  {
    icon: Award,
    title: 'Expert Support',
    description: 'Our team helps you understand your options and make informed decisions.',
  },
  {
    icon: Heart,
    title: 'Customer Focus',
    description: 'Your satisfaction is our priority. We offer 7-15 day refund policy on our assistance services.',
  },
];

export default function About() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-[120px]">
        {/* Hero */}
        <section
          className="relative py-24 md:py-32 fixed-bg"
          style={{ backgroundImage: `url(${supportTeamImage})` }}
        >
          <div className="absolute inset-0 bg-primary/85" />
          <div className="relative container-isp text-center">
            <AnimateOnScroll variant="fadeUp">
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">
                About IQ Connects
              </h1>
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                An independent third-party service assistance provider offering general guidance for internet, TV, and home services. Launched in 2026, we are not affiliated with any provider.
              </p>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Story Section */}
        <section className="section-padding bg-background">
          <div className="container-isp">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <AnimateOnScroll variant="slideLeft">
                <span className="inline-block bg-accent/10 text-accent font-semibold px-4 py-2 rounded-full text-sm mb-4">
                  Who We Are
                </span>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Independent <span className="text-accent">Service Assistance</span>
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  <strong>IQ Connects</strong> is an independent third-party service assistance provider offering general guidance related to internet, broadband, Wi-Fi, and cable TV services.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  We assist users by providing informational support, helping them understand service options, and offering general guidance on common connectivity-related concerns.
                </p>
                <p className="text-lg text-muted-foreground mb-8">
                  We do not provide internet or cable services directly, and we do not represent or partner with any telecom, internet, or cable TV provider. Our focus is transparency, clarity, and responsible service assistance.
                </p>
                <div className="bg-accent/5 border-2 border-accent/20 rounded-xl p-6">
                  <p className="font-semibold text-foreground">
                    ⚠️ <strong>Important:</strong> IQ Connects is not an ISP. We are not affiliated with, authorized by, or endorsed by any internet, cable, or telecom service provider.
                  </p>
                </div>
              </AnimateOnScroll>
              <AnimateOnScroll variant="slideRight">
                <img
                  src={familyBrowsingImage}
                  alt="Happy customers enjoying our service"
                  className="rounded-2xl shadow-2xl"
                />
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="section-padding bg-muted">
          <div className="container-isp">
            <AnimateOnScroll variant="fadeUp">
              <div className="text-center mb-12">
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Our <span className="text-accent">Core Principles</span>
                </h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  These values guide how we provide informational assistance and support.
                </p>
              </div>
            </AnimateOnScroll>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value) => {
                const Icon = value.icon;
                return (
                  <StaggerItem key={value.title}>
                    <div className="bg-background rounded-xl p-8 text-center card-hover h-full">
                      <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-6">
                        <Icon className="w-8 h-8 text-accent" />
                      </div>
                      <h3 className="font-display text-xl font-bold text-foreground mb-3">
                        {value.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {value.description}
                      </p>
                    </div>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </div>
        </section>

        {/* Stats */}
        <section className="section-padding bg-primary text-primary-foreground">
          <div className="container-isp">
            <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { stat: '2026', label: 'Founded' },
                { stat: '100%', label: 'Independent' },
                { stat: 'No ISP', label: 'Affiliation' },
                { stat: 'Info', label: 'Only Support' },
              ].map((item) => (
                <StaggerItem key={item.label}>
                  <div>
                    <p className="font-display text-4xl md:text-5xl font-extrabold text-accent mb-2">
                      {item.stat}
                    </p>
                    <p className="text-primary-foreground/80 font-medium">{item.label}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="py-12 bg-muted">
          <div className="container-isp">
            <div className="max-w-4xl mx-auto bg-accent/5 border-2 border-accent/30 rounded-2xl p-8">
              <h3 className="font-bold text-foreground text-xl mb-4 text-center">
                ⚠️ Important Disclosure
              </h3>
              <p className="text-muted-foreground mb-4">
                <strong>IQ Connects is an independent third-party service assistance provider.</strong> We are 
                <strong> not affiliated with, authorized by, or endorsed by any internet, broadband, or cable TV service provider</strong>. We do not provide internet, TV, or home services directly.
              </p>
              <p className="text-muted-foreground">
                Brand names, if mentioned anywhere on this site, are used strictly for informational purposes only. We do not represent or partner with any service providers. All trademarks are property of their respective owners.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
