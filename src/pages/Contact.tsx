import { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-[120px]">
        {/* Hero */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container-isp text-center">
            <MessageCircle className="w-16 h-16 mx-auto mb-6 text-accent" />
            <h1 className="font-display text-4xl md:text-5xl font-extrabold mb-6">
              Contact Digi Mercury
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto mb-4">
              Have questions about our informational assistance services? Our independent support team is here to help.
            </p>
            <div className="bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-xl p-4 max-w-2xl mx-auto">
              <p className="text-white font-semibold">
                ⚠️ We are an independent assistance provider, not affiliated with any ISP or cable company.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Grid */}
        <section className="section-padding bg-background">
          <div className="container-isp">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div>
                <h2 className="font-display text-3xl font-bold text-foreground mb-2">
                  Contact Our Team
                </h2>
                <p className="text-muted-foreground mb-8">
                  <strong>Legal Business Name:</strong> Digi Mercury LLC
                </p>

                <div className="space-y-6">
                  <div className="flex gap-4 p-6 bg-muted rounded-xl">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Call Us</h3>
                      <a href="tel:18004438638" className="text-2xl font-bold text-accent hover:underline">1-800-443-8638</a>
                      <p className="text-sm text-muted-foreground">Informational Assistance & General Inquiries</p>
                    </div>
                  </div>

                  <div className="flex gap-4 p-6 bg-muted rounded-xl">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Email Us</h3>
                      <a href="mailto:help@digimercury.com" className="text-lg text-foreground hover:text-accent hover:underline">help@digimercury.com</a>
                      <p className="text-sm text-muted-foreground">We reply within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex gap-4 p-6 bg-muted rounded-xl">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Business Hours</h3>
                      <p className="text-foreground">Monday - Friday: 8am - 10pm EST</p>
                      <p className="text-foreground">Saturday - Sunday: 9am - 8pm EST</p>
                    </div>
                  </div>

                  <div className="flex gap-4 p-6 bg-muted rounded-xl">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Service Area</h3>
                      <p className="text-foreground">Informational assistance available nationwide</p>
                      <p className="text-sm text-muted-foreground">Independent guidance services</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-muted rounded-2xl p-8">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  Request Informational Assistance
                </h2>
                <div className="bg-accent/10 border-2 border-accent/30 rounded-xl p-4 mb-6">
                  <p className="text-sm font-semibold text-foreground">
                    <strong>⚠️ Important:</strong> Digi Mercury is an independent platform. We are not affiliated with any service provider. We provide informational support and guidance only.
                  </p>
                </div>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Full Name
                    </label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-background"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-background"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="(555) 555-5555"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="bg-background"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="How can we help you?"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="bg-background min-h-[120px]"
                      required
                    />
                  </div>
                  <Button type="submit" variant="cta" size="lg" className="w-full">
                    <Send className="w-5 h-5" />
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
