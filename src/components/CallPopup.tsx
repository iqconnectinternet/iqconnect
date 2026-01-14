import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function CallPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Check if already dismissed in this session
    const dismissed = sessionStorage.getItem('callPopupDismissed');
    if (dismissed) {
      setIsDismissed(true);
      return;
    }

    // Show popup immediately when component mounts
    setIsVisible(true);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
    sessionStorage.setItem('callPopupDismissed', 'true');
  };

  const handleCall = () => {
    window.location.href = 'tel:+18334043389';
  };

  if (isDismissed) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Backdrop with blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={handleDismiss}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          />

          {/* Modal popup centered */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              transition={{ duration: 0.4, type: 'spring' }}
              className="relative w-full max-w-md"
            >
              <div className="relative bg-gradient-to-br from-primary to-primary/90 text-primary-foreground rounded-2xl shadow-2xl border-2 border-accent/50 overflow-hidden">
                {/* Animated background effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-transparent animate-pulse" />
                
                {/* Close button */}
                <button
                  onClick={handleDismiss}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors z-10"
                  aria-label="Close popup"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="relative p-8">
                  {/* Icon */}
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                    className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mb-6 mx-auto"
                  >
                    <Phone className="w-8 h-8 text-accent-foreground" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="font-display text-2xl font-bold text-center mb-3">
                    Need Help Now?
                  </h3>
                  <p className="text-base text-primary-foreground/80 text-center mb-6">
                    Talk to our independent assistance team
                  </p>

                  {/* Phone number */}
                  <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-4 mb-6">
                    <p className="text-center text-sm text-primary-foreground/70 mb-2">
                      Call Us Now
                    </p>
                    <a 
                      href="tel:+18334043389"
                      className="block text-center text-3xl font-bold text-accent hover:text-accent/80 transition-colors"
                    >
                      (833) 404-3389
                    </a>
                  </div>

                  {/* Call button */}
                  <Button
                    onClick={handleCall}
                    variant="hero"
                    className="w-full"
                    size="lg"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call Now for Guidance
                  </Button>

                  <p className="text-sm text-center text-primary-foreground/60 mt-4">
                    Independent assistance • No ISP affiliation
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
