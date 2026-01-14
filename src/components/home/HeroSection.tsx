import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Play, CheckCircle, Sparkles, Zap, Shield } from 'lucide-react';
import heroImage from '@/assets/hero-family-tv.jpg';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 hero-overlay" />
        </div>
        
        {/* Animated Gradient Overlay */}
        <motion.div
          animate={{
            background: [
              'linear-gradient(45deg, rgba(251, 146, 60, 0.2) 0%, transparent 70%)',
              'linear-gradient(135deg, transparent 30%, rgba(251, 146, 60, 0.2) 100%)',
              'linear-gradient(225deg, rgba(251, 146, 60, 0.2) 0%, transparent 70%)',
              'linear-gradient(315deg, transparent 30%, rgba(251, 146, 60, 0.2) 100%)',
              'linear-gradient(45deg, rgba(251, 146, 60, 0.2) 0%, transparent 70%)'
            ]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-0"
        />

        {/* Floating Orbs */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-20 right-20 w-64 h-64 bg-accent/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 80, 0],
            scale: [1, 1.3, 1]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute bottom-20 left-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"
        />
      </div>

      {/* Main Content */}
      <div className="relative container-isp py-20 md:py-24 min-h-screen flex items-center">
        <div className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              {/* Animated Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, type: 'spring' }}
                className="inline-block mb-6"
              >
                <div className="relative">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                    className="absolute inset-0 bg-gradient-to-r from-accent to-orange-500 rounded-full blur-md opacity-50"
                  />
                  <div className="relative bg-primary/80 backdrop-blur-xl border border-accent/50 rounded-full px-5 py-2.5 flex items-center gap-3">
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                    >
                      <Sparkles className="w-4 h-4 text-accent" />
                    </motion.div>
                    <span className="text-primary-foreground font-bold text-sm">
                      Independent Third-Party Assistance
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Main Headline */}
              <div className="mb-6">
                <motion.h1
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                  className="font-display text-5xl md:text-6xl lg:text-7xl font-extrabold text-primary-foreground leading-[1.1] mb-4"
                >
                  <span className="block">Independent Internet</span>
                  <span className="block">
                    <span className="bg-gradient-to-r from-accent via-orange-400 to-accent bg-clip-text text-transparent">
                      & Cable Service
                    </span>
                  </span>
                  <span className="block">Assistance</span>
                </motion.h1>
              </div>

              {/* Subheadline */}
              <motion.p
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-lg md:text-xl text-primary-foreground/90 mb-4 max-w-xl leading-relaxed"
              >
                Get general guidance and informational support related to internet, broadband, Wi-Fi, and cable TV services from an independent third-party assistance provider.
              </motion.p>
              
              {/* Disclaimer */}
              <motion.p
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.25 }}
                className="text-sm md:text-base text-primary-foreground/70 mb-8 max-w-xl font-medium bg-primary-foreground/10 backdrop-blur-sm p-4 rounded-lg border border-primary-foreground/20"
              >
                <strong className="text-accent">Digi Mercury</strong> is an independent third-party service assistance provider. We are not affiliated with, authorized by, or endorsed by any internet, cable, or telecom service provider.
              </motion.p>

              {/* Feature Pills */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap gap-3 mb-10"
              >
                {[
                  { icon: Zap, text: 'General Guidance' },
                  { icon: Shield, text: 'No Brand Affiliation' },
                  { icon: CheckCircle, text: 'Informational Support' }
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.text}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-full px-5 py-2.5 flex items-center gap-2 hover:bg-primary-foreground/15 transition-colors"
                    >
                      <Icon className="w-4 h-4 text-accent" />
                      <span className="text-primary-foreground font-medium text-sm">{item.text}</span>
                    </motion.div>
                  );
                })}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button 
                    variant="hero" 
                    className="w-full sm:w-auto px-8 py-6 text-base font-bold shadow-lg shadow-accent/30"
                    onClick={() => window.location.href = 'tel:18004438638'}
                  >
                    Talk to a Third-Party Internet Advisor
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button 
                    variant="hero-outline" 
                    className="w-full sm:w-auto px-8 py-6 text-base font-bold"
                    onClick={() => window.location.href = 'tel:18004438638'}
                  >
                    <Play className="w-5 h-5" />
                    Call for Independent Service Guidance
                  </Button>
                </motion.div>
              </motion.div>
              
              {/* Micro-text Below CTA */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mt-4 text-center sm:text-left text-sm text-primary-foreground/60 font-medium"
              >
                Not an ISP. No brand affiliation.
              </motion.p>

              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="mt-8 flex flex-wrap items-center gap-6 text-primary-foreground/70"
              >
                {['Independent Service', 'No Subscriptions Sold', 'Informational Guidance Only'].map((text, index) => (
                  <motion.div
                    key={text}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                    className="flex items-center gap-2"
                  >
                    <CheckCircle className="w-4 h-4 text-accent" />
                    <span className="text-sm font-medium">{text}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Right Content - Floating Card */}
            <div className="lg:col-span-5 hidden lg:block">
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative"
              >
                {/* Floating Price Card */}
                <motion.div
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                  className="relative"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-accent to-orange-500 rounded-3xl blur-xl opacity-50" />
                  <div className="relative bg-primary/90 backdrop-blur-2xl border border-primary-foreground/20 rounded-3xl p-8 shadow-2xl">
                    {/* Header */}
                    <div className="text-center mb-6">
                      <motion.div
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                        className="inline-block mb-4"
                      >
                        <div className="w-16 h-16 bg-gradient-to-br from-accent to-orange-500 rounded-2xl flex items-center justify-center">
                          <Zap className="w-8 h-8 text-white" />
                        </div>
                      </motion.div>
                      <h3 className="text-xl font-bold text-primary-foreground mb-2">
                        Assistance Service
                      </h3>
                      <p className="text-primary-foreground/70 text-sm">
                        Independent guidance for service options
                      </p>
                    </div>

                    {/* Features List */}
                    <div className="space-y-4 mb-6">
                      {[
                        'Understand Service Options',
                        'General Connectivity Guidance',
                        'Learn Provider Processes',
                        'Informational Support',
                        'Compare Service Features'
                      ].map((feature, index) => (
                        <motion.div
                          key={feature}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                          className="flex items-center gap-3"
                        >
                          <div className="flex-shrink-0 w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center">
                            <CheckCircle className="w-3.5 h-3.5 text-accent" />
                          </div>
                          <span className="text-primary-foreground/90 text-sm font-medium">
                            {feature}
                          </span>
                        </motion.div>
                      ))}
                    </div>

                    {/* CTA */}
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button 
                        variant="hero" 
                        className="w-full py-4 font-bold shadow-lg shadow-accent/30"
                        onClick={() => window.location.href = 'tel:18004438638'}
                      >
                        Request Guidance Now
                      </Button>
                    </motion.div>
                    
                    <p className="mt-4 text-center text-xs text-primary-foreground/50">
                      Independent assistance • No direct sales
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-primary-foreground/50 text-xs uppercase tracking-wider font-medium">
            Scroll
          </span>
          <div className="w-6 h-10 border-2 border-primary-foreground/40 rounded-full flex justify-center pt-2">
            <motion.div
              animate={{ opacity: [0, 1, 0], height: ['8px', '16px', '8px'] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 bg-primary-foreground/60 rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
