import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logoSvg from '@/assets/digi-mercury-logo.svg';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Internet', path: '/internet' },
  { name: 'Bundles', path: '/bundles' },
  { name: 'Speed Test', path: '/speed-test' },
  { name: 'Coverage', path: '/coverage' },
  { name: 'About Us', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/80 backdrop-blur-xl shadow-lg border-b border-border/50'
          : 'bg-background/95 backdrop-blur-md'
      }`}
    >
      {/* Top Promo Bar */}
      <AnimatePresence>
        {!isScrolled && (
          <motion.div
            initial={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-gradient-to-r from-accent via-orange-500 to-accent overflow-hidden"
          >
            <div className="container-isp">
              <div className="flex items-center justify-center md:justify-between py-2.5 px-4">
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="flex items-center gap-2 text-white"
                >
                  <Phone className="w-4 h-4" />
                  <span className="font-bold text-sm">Call: (833) 404-3389</span>
                </motion.div>
                <div className="hidden md:flex items-center gap-2 text-white">
                  <span className="text-sm font-semibold">🎉 Get Expert Assistance Today</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Navigation */}
      <nav className="container-isp">
        <div className="flex items-center justify-between h-20 px-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
              className="relative w-11 h-11"
            >
              <img src={logoSvg} alt="Digi Mercury Logo" className="w-full h-full" />
            </motion.div>
            <div className="flex flex-col">
              <span className="font-display text-xl md:text-2xl font-extrabold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent leading-none">
                Digi Mercury
              </span>
              <span className="text-[10px] text-muted-foreground font-medium tracking-wider">
                SERVICE ASSISTANCE
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className="relative px-4 py-2 group"
                >
                  <span
                    className={`font-medium text-sm transition-colors ${
                      isActive
                        ? 'text-accent'
                        : 'text-foreground/80 hover:text-foreground'
                    }`}
                  >
                    {link.name}
                  </span>
                  {isActive && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  {!isActive && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* CTA & Menu Button */}
          <div className="flex items-center gap-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:block"
            >
              <Button
                variant="cta"
                size="lg"
                className="font-bold shadow-lg shadow-accent/20 hover:shadow-accent/40 transition-shadow"
                onClick={() => window.location.href = 'tel:+18334043389'}
              >
                <Phone className="w-4 h-4" />
                Call Now
              </Button>
            </motion.div>

            {/* Mobile Menu Toggle */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2.5 rounded-xl hover:bg-muted transition-colors"
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden border-t border-border"
            >
              <div className="py-4 px-4 space-y-1">
                {navLinks.map((link, index) => {
                  const isActive = location.pathname === link.path;
                  return (
                    <motion.div
                      key={link.path}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        to={link.path}
                        onClick={() => setIsMenuOpen(false)}
                        className={`block px-4 py-3 rounded-xl font-medium transition-all ${
                          isActive
                            ? 'bg-accent text-white shadow-md'
                            : 'text-foreground hover:bg-muted'
                        }`}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  );
                })}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navLinks.length * 0.05 }}
                  className="pt-4"
                >
                  <Button
                    variant="cta"
                    size="lg"
                    className="w-full font-bold shadow-lg"
                    onClick={() => {
                      setIsMenuOpen(false);
                      window.location.href = 'tel:+18334043389';
                    }}
                  >
                    <Phone className="w-4 h-4" />
                    Call Now: (833) 404-3389
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
