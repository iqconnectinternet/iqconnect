import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import logoSvg from '@/assets/digi-mercury-logo.svg';

const footerLinks = {
  services: [
    { name: 'Internet Assistance', path: '/internet' },
    { name: 'Bundle Guidance', path: '/bundles' },
    { name: 'Provider Coverage', path: '/coverage' },
  ],
  company: [
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'FAQ', path: '/faq' },
  ],
  legal: [
    { name: 'Privacy Policy', path: '/privacy-policy' },
    { name: 'Terms & Conditions', path: '/terms' },
    { name: 'Advertising Disclosure', path: '/advertising-disclosure' },
    { name: 'Do Not Sell My Info', path: '/do-not-sell' },
    { name: 'Disclaimer', path: '/disclaimer' },
    { name: 'Cookie Policy', path: '/cookie-policy' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container-isp section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img src={logoSvg} alt="IQ Connects Logo" className="w-10 h-10" />
              <span className="font-display text-2xl font-bold">IQ Connects</span>
            </Link>
            <p className="text-primary-foreground/80 mb-4 max-w-md">
              <strong>IQ Connects</strong> is an independent third-party service assistance provider. We are not affiliated with, authorized by, or endorsed by any internet, cable, or telecom service provider.
            </p>
            <p className="text-primary-foreground/70 text-sm mb-6 max-w-md">
              We provide general guidance and informational support only. We do not sell internet or cable services.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent" />
                <a href="tel:+18445250789" className="hover:text-accent transition-colors">(844) 525-0789</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent" />
                <a href="mailto:help@iqconnects.com" className="hover:text-accent transition-colors">help@iqconnects.com</a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-accent" />
                <span>Informational Assistance Available</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-isp-dark py-6">
        <div className="container-isp">
          <div className="flex flex-col gap-6">
            {/* Prominent Disclaimer Box */}
            <div className="bg-accent/10 border-2 border-accent/30 rounded-xl p-6">
              <p className="font-bold text-accent text-lg mb-2">⚠️ DISCLAIMER</p>
              <p className="text-primary-foreground font-semibold mb-3">
                <strong>IQ Connects is an independent third-party service assistance provider.</strong> We are not affiliated with, authorized by, or endorsed by any internet, broadband, or cable TV service provider.
              </p>
              <p className="text-primary-foreground/80">
                Brand names, if mentioned, are used strictly for informational purposes only. We do not provide internet or cable services directly, nor do we represent or partner with any service providers.
              </p>
            </div>
            
            {/* Copyright and Legal */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/60">
              <div>
                <p>© 2026 IQ Connects. All rights reserved.</p>
                <p className="mt-1">Legal Business Name: IQ Connects</p>
              </div>
              <p className="text-center md:text-right">
                All trademarks, logos, and service marks are the property of their respective owners.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
