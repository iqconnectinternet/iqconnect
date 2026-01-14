import { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqCategories = [
  {
    name: 'About Our Service',
    faqs: [
      {
        question: 'What is Digi Mercury?',
        answer: 'Digi Mercury is an independent third-party service assistance provider. We are not affiliated with, authorized by, or endorsed by any internet, cable, or telecom service provider. We provide informational support to help you understand your options.',
      },
      {
        question: 'Do you provide internet or cable services?',
        answer: 'No. We do not provide internet, TV, or cable services directly. We are independent guidance providers. When you make a decision to get services, you will contact service providers directly.',
      },
      {
        question: 'How is Digi Mercury different from other companies?',
        answer: 'We are completely independent with no affiliation to any service provider. We provide informational guidance only. We do not sell subscriptions or represent any ISP or cable company.',
      },
    ],
  },
  {
    name: 'Internet Information',
    faqs: [
      {
        question: 'What internet speeds are available in my area?',
        answer: 'Internet speeds vary by location and provider. Different providers offer plans ranging from 25 Mbps to 1 Gbps+. Enter your ZIP code on our coverage page to see what services are available at your address.',
      },
      {
        question: 'What are common connection types?',
        answer: 'Common types include fiber, cable, and DSL internet. Each has different speeds and availability depending on your area. We can help you understand the differences.',
      },
      {
        question: 'What equipment is typically needed?',
        answer: 'Most providers include a modem and router with their plans. Equipment details vary by provider and plan. Contact the provider directly for specific equipment information.',
      },
    ],
  },
  {
    name: 'Service Information',
    faqs: [
      {
        question: 'What TV services are typically available?',
        answer: 'Providers offer different cable TV packages with varying numbers of channels. Packages typically include local channels, sports, and entertainment options. Contact providers directly for current offerings.',
      },
      {
        question: 'Can I bundle services?',
        answer: 'Many providers offer bundled services (internet + TV + phone) that may provide savings. We can help you understand bundling concepts. Contact providers directly for pricing and availability.',
      },
      {
        question: 'What about phone services?',
        answer: 'Many internet and cable providers also offer home phone services. Features and pricing vary by provider. We recommend contacting them directly for current options.',
      },
    ],
  },

  {
    name: 'Getting Started',
    faqs: [
      {
        question: 'How do I get started with Digi Mercury?',
        answer: 'Simply call us at 1-800-443-8638 or use our contact form. We\'ll discuss your service needs and help you understand available options. There\'s no obligation.',
      },
      {
        question: 'How much does your assistance cost?',
        answer: 'Our informational assistance is available through our support services. Contact us for specific details about any services we may offer.',
      },
      {
        question: 'What should I do next?',
        answer: 'Contact us to learn about services available in your area. Once you understand your options, you\'ll contact providers directly to enroll in services.',
      },
    ],
  },
];

export default function FAQ() {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (id: string) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-[120px]">
        {/* Hero */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container-isp text-center">
            <HelpCircle className="w-16 h-16 mx-auto mb-6 text-accent" />
            <h1 className="font-display text-4xl md:text-5xl font-extrabold mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto mb-6">
              Get answers about our independent assistance services and learn what we offer.
            </p>
            <div className="bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-xl p-4 max-w-2xl mx-auto">
              <p className="text-white font-semibold text-sm">
                ⚠️ Digi Mercury is an independent assistance provider, not affiliated with any service providers.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="section-padding bg-background">
          <div className="container-isp max-w-4xl">
            {faqCategories.map((category) => (
              <div key={category.name} className="mb-10">
                <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                  {category.name}
                </h2>
                <div className="space-y-4">
                  {category.faqs.map((faq, index) => {
                    const id = `${category.name}-${index}`;
                    const isOpen = openItems.includes(id);
                    return (
                      <div
                        key={id}
                        className="bg-muted rounded-xl overflow-hidden"
                      >
                        <button
                          onClick={() => toggleItem(id)}
                          className="w-full flex items-center justify-between p-6 text-left"
                        >
                          <span className="font-semibold text-foreground pr-4">
                            {faq.question}
                          </span>
                          <ChevronDown
                            className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform ${
                              isOpen ? 'rotate-180' : ''
                            }`}
                          />
                        </button>
                        {isOpen && (
                          <div className="px-6 pb-6">
                            <p className="text-muted-foreground">{faq.answer}</p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Still Have Questions */}
        <section className="section-padding bg-muted">
          <div className="container-isp text-center">
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">
              Still Have Questions?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our support team is here to help. Give us a call or send us a message.
            </p>
            <p className="text-3xl font-bold text-accent">1-800-555-FAST</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
