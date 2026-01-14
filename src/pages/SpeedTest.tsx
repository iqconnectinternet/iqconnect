import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { AnimateOnScroll } from '@/components/ui/AnimateOnScroll';
import { Gauge, Download, Upload, Wifi, Activity, RefreshCw, CheckCircle, ArrowRight } from 'lucide-react';
import speedTestBg from '@/assets/speed-test-bg.jpg';

type TestPhase = 'idle' | 'ping' | 'download' | 'upload' | 'complete';

interface SpeedResults {
  ping: number;
  download: number;
  upload: number;
}

export default function SpeedTest() {
  const [phase, setPhase] = useState<TestPhase>('idle');
  const [currentSpeed, setCurrentSpeed] = useState(0);
  const [progress, setProgress] = useState(0);
  const [results, setResults] = useState<SpeedResults | null>(null);

  const simulateTest = useCallback(async () => {
    setPhase('ping');
    setResults(null);
    setProgress(0);
    setCurrentSpeed(0);

    // Simulate ping test
    await new Promise(resolve => setTimeout(resolve, 1000));
    const ping = Math.floor(Math.random() * 20) + 5;
    
    // Simulate download test
    setPhase('download');
    const targetDownload = Math.floor(Math.random() * 400) + 100;
    
    for (let i = 0; i <= 100; i += 2) {
      setProgress(i);
      const fluctuation = Math.random() * 50 - 25;
      setCurrentSpeed(Math.max(0, Math.min(targetDownload + fluctuation, targetDownload * 1.2)));
      await new Promise(resolve => setTimeout(resolve, 50));
    }
    
    // Simulate upload test
    setPhase('upload');
    setProgress(0);
    const targetUpload = Math.floor(Math.random() * 100) + 20;
    
    for (let i = 0; i <= 100; i += 2) {
      setProgress(i);
      const fluctuation = Math.random() * 20 - 10;
      setCurrentSpeed(Math.max(0, targetUpload + fluctuation));
      await new Promise(resolve => setTimeout(resolve, 50));
    }
    
    // Complete
    setPhase('complete');
    setResults({
      ping,
      download: targetDownload,
      upload: targetUpload,
    });
  }, []);

  const getGaugeRotation = () => {
    const maxSpeed = phase === 'download' ? 500 : 150;
    const rotation = Math.min((currentSpeed / maxSpeed) * 180, 180);
    return rotation - 90; // Start from left (-90deg) to right (90deg)
  };

  const getSpeedColor = () => {
    if (currentSpeed < 50) return 'text-yellow-500';
    if (currentSpeed < 200) return 'text-isp-blue';
    return 'text-green-500';
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-[120px]">
        {/* Hero */}
        <section
          className="relative py-20 md:py-28 fixed-bg"
          style={{ backgroundImage: `url(${speedTestBg})` }}
        >
          <div className="absolute inset-0 bg-primary/90" />
          <div className="relative container-isp text-center">
            <AnimateOnScroll variant="fadeUp">
              <Activity className="w-16 h-16 mx-auto mb-6 text-accent" />
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">
                Internet Speed Test
              </h1>
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                Test your current internet speed and see how it compares to our available plans.
              </p>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Speed Test Interface */}
        <section className="section-padding bg-background">
          <div className="container-isp max-w-4xl">
            <AnimateOnScroll variant="scale">
              <div className="bg-card rounded-3xl shadow-xl overflow-hidden">
                {/* Gauge Area */}
                <div className="bg-gradient-to-b from-primary to-isp-navy p-8 md:p-12">
                  <div className="relative w-64 h-32 mx-auto">
                    {/* Gauge Background */}
                    <svg className="w-full h-full" viewBox="0 0 200 100">
                      {/* Background arc */}
                      <path
                        d="M 20 100 A 80 80 0 0 1 180 100"
                        fill="none"
                        stroke="rgba(255,255,255,0.2)"
                        strokeWidth="12"
                        strokeLinecap="round"
                      />
                      {/* Progress arc */}
                      <motion.path
                        d="M 20 100 A 80 80 0 0 1 180 100"
                        fill="none"
                        stroke="hsl(var(--accent))"
                        strokeWidth="12"
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: phase !== 'idle' ? progress / 100 : 0 }}
                        transition={{ duration: 0.1 }}
                      />
                    </svg>
                    
                    {/* Needle */}
                    <motion.div
                      className="absolute bottom-0 left-1/2 origin-bottom"
                      style={{ width: 4, height: 70, marginLeft: -2 }}
                      animate={{ rotate: phase !== 'idle' && phase !== 'complete' ? getGaugeRotation() : -90 }}
                      transition={{ type: 'spring', stiffness: 100 }}
                    >
                      <div className="w-full h-full bg-white rounded-full shadow-lg" />
                    </motion.div>
                    
                    {/* Center dot */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-6 bg-white rounded-full shadow-lg" />
                  </div>

                  {/* Speed Display */}
                  <div className="text-center mt-8">
                    <AnimatePresence mode="wait">
                      {phase === 'idle' && (
                        <motion.div
                          key="idle"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                        >
                          <p className="text-white/80 text-lg">Ready to test</p>
                        </motion.div>
                      )}
                      
                      {phase === 'ping' && (
                        <motion.div
                          key="ping"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                        >
                          <p className="text-white/80 text-lg">Testing latency...</p>
                          <div className="flex justify-center gap-1 mt-2">
                            {[0, 1, 2].map((i) => (
                              <motion.div
                                key={i}
                                className="w-2 h-2 bg-accent rounded-full"
                                animate={{ scale: [1, 1.5, 1] }}
                                transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.2 }}
                              />
                            ))}
                          </div>
                        </motion.div>
                      )}
                      
                      {(phase === 'download' || phase === 'upload') && (
                        <motion.div
                          key={phase}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0 }}
                          className="space-y-2"
                        >
                          <div className="flex items-center justify-center gap-2 text-white/80">
                            {phase === 'download' ? (
                              <Download className="w-5 h-5" />
                            ) : (
                              <Upload className="w-5 h-5" />
                            )}
                            <span className="capitalize">{phase}</span>
                          </div>
                          <motion.p
                            key={currentSpeed}
                            className={`text-5xl md:text-6xl font-bold ${getSpeedColor()}`}
                          >
                            {currentSpeed.toFixed(1)}
                          </motion.p>
                          <p className="text-white/60 text-sm">Mbps</p>
                          <div className="w-48 h-2 bg-white/20 rounded-full mx-auto overflow-hidden">
                            <motion.div
                              className="h-full bg-accent rounded-full"
                              style={{ width: `${progress}%` }}
                            />
                          </div>
                        </motion.div>
                      )}
                      
                      {phase === 'complete' && results && (
                        <motion.div
                          key="complete"
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                        >
                          <div className="flex items-center justify-center gap-2 text-green-400 mb-4">
                            <CheckCircle className="w-6 h-6" />
                            <span className="font-semibold">Test Complete</span>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                {/* Results / Action Area */}
                <div className="p-8">
                  {phase === 'complete' && results ? (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="space-y-6"
                    >
                      {/* Results Grid */}
                      <div className="grid grid-cols-3 gap-4">
                        <div className="text-center p-4 bg-muted rounded-xl">
                          <Wifi className="w-6 h-6 mx-auto mb-2 text-accent" />
                          <p className="text-sm text-muted-foreground">Ping</p>
                          <p className="text-2xl font-bold text-foreground">{results.ping} <span className="text-sm font-normal">ms</span></p>
                        </div>
                        <div className="text-center p-4 bg-muted rounded-xl">
                          <Download className="w-6 h-6 mx-auto mb-2 text-isp-blue" />
                          <p className="text-sm text-muted-foreground">Download</p>
                          <p className="text-2xl font-bold text-foreground">{results.download} <span className="text-sm font-normal">Mbps</span></p>
                        </div>
                        <div className="text-center p-4 bg-muted rounded-xl">
                          <Upload className="w-6 h-6 mx-auto mb-2 text-green-500" />
                          <p className="text-sm text-muted-foreground">Upload</p>
                          <p className="text-2xl font-bold text-foreground">{results.upload} <span className="text-sm font-normal">Mbps</span></p>
                        </div>
                      </div>

                      {/* Speed Assessment */}
                      <div className="bg-accent/10 rounded-xl p-6 text-center">
                        <h3 className="font-display text-xl font-bold text-foreground mb-2">
                          {results.download >= 300 ? 'Excellent Speed!' : results.download >= 100 ? 'Good Speed' : 'Want Faster?'}
                        </h3>
                        <p className="text-muted-foreground mb-4">
                          {results.download >= 300
                            ? 'Your connection is great for streaming 4K, gaming, and working from home.'
                            : 'Upgrade to our faster plans for buffer-free streaming and gaming.'}
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center">
                          <Button variant="cta" size="lg">
                            View Faster Plans
                            <ArrowRight className="w-5 h-5" />
                          </Button>
                          <Button
                            variant="outline"
                            size="lg"
                            onClick={() => {
                              setPhase('idle');
                              setResults(null);
                            }}
                          >
                            <RefreshCw className="w-5 h-5" />
                            Test Again
                          </Button>
                        </div>
                      </div>
                    </motion.div>
                  ) : (
                    <div className="text-center">
                      <Button
                        variant="cta"
                        size="xl"
                        onClick={simulateTest}
                        disabled={phase !== 'idle'}
                        className="min-w-[200px]"
                      >
                        {phase === 'idle' ? (
                          <>
                            <Gauge className="w-6 h-6" />
                            Start Speed Test
                          </>
                        ) : (
                          <>
                            <RefreshCw className="w-5 h-5 animate-spin" />
                            Testing...
                          </>
                        )}
                      </Button>
                      <p className="text-muted-foreground text-sm mt-4">
                        The test takes about 30 seconds to complete.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </AnimateOnScroll>

            {/* Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              {[
                {
                  icon: Download,
                  title: 'Download Speed',
                  description: 'How fast you can pull data from the internet. Important for streaming, browsing, and downloading files.',
                },
                {
                  icon: Upload,
                  title: 'Upload Speed',
                  description: 'How fast you can send data. Critical for video calls, uploading files, and online gaming.',
                },
                {
                  icon: Wifi,
                  title: 'Ping / Latency',
                  description: 'Response time between your device and server. Lower is better for gaming and video calls.',
                },
              ].map((item, index) => (
                <AnimateOnScroll key={item.title} variant="fadeUp" delay={index * 0.1}>
                  <div className="bg-card rounded-xl p-6 card-hover h-full">
                    <item.icon className="w-10 h-10 text-accent mb-4" />
                    <h3 className="font-display text-lg font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-muted">
          <div className="container-isp text-center">
            <AnimateOnScroll variant="fadeUp">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Need Faster Internet?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Upgrade to our high-speed plans and experience lightning-fast downloads, 
                buffer-free streaming, and lag-free gaming.
              </p>
              <Button variant="cta" size="lg">
                View All Plans
                <ArrowRight className="w-5 h-5" />
              </Button>
            </AnimateOnScroll>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
