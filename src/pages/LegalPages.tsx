import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

interface LegalPageProps {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}

function LegalPage({ title, lastUpdated, children }: LegalPageProps) {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-[120px]">
        <section className="py-12 bg-primary text-primary-foreground">
          <div className="container-isp">
            <h1 className="font-display text-3xl md:text-4xl font-bold">{title}</h1>
            <p className="text-primary-foreground/80 mt-2">Last updated: {lastUpdated}</p>
          </div>
        </section>
        <section className="section-padding bg-background">
          <div className="container-isp max-w-4xl prose prose-lg">
            {children}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export function PrivacyPolicy() {
  return (
    <LegalPage title="Privacy Policy" lastUpdated="January 1, 2026">
      <div className="space-y-6 text-muted-foreground">
        <p>
          IQ Connects ("we," "our," or "us") is committed to protecting your privacy. 
          This Privacy Policy explains how we collect, use, disclose, and safeguard your 
          information when you visit our website or use our services.
        </p>
        
        <h2 className="text-xl font-bold text-foreground">Information We Collect</h2>
        <p>
          We may collect information about you in a variety of ways, including:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Personal Data: Name, email address, phone number, mailing address</li>
          <li>Financial Data: Payment information for billing purposes</li>
          <li>Usage Data: Browser type, access times, pages viewed</li>
          <li>Location Data: ZIP code and service address</li>
        </ul>

        <h2 className="text-xl font-bold text-foreground">How We Use Your Information</h2>
        <p>
          We use the information we collect to provide, maintain, and improve our services, 
          process transactions, send communications, and comply with legal obligations.
        </p>

        <h2 className="text-xl font-bold text-foreground">Disclosure of Your Information</h2>
        <p>
          We may share information with service providers, business partners, and as required 
          by law. We do not sell your personal information to third parties.
        </p>

        <h2 className="text-xl font-bold text-foreground">Contact Us</h2>
        <p>
          If you have questions about this Privacy Policy, please contact us at:
          <br />
          Email: privacy@iqconnects.com
          <br />
          Phone: (844) 525-0789
        </p>
      </div>
    </LegalPage>
  );
}

export function Terms() {
  return (
    <LegalPage title="Terms & Conditions" lastUpdated="January 1, 2026">
      <div className="space-y-6 text-muted-foreground">
        <p>
          Welcome to IQ Connects. By accessing or using our website and services, 
          you agree to be bound by these Terms and Conditions.
        </p>

        <h2 className="text-xl font-bold text-foreground">Services</h2>
        <p>
          IQ Connects acts as an independent authorized dealer for various internet, 
          TV, and phone service providers. We facilitate connections between customers 
          and service providers but are not the service provider ourselves.
        </p>

        <h2 className="text-xl font-bold text-foreground">Pricing and Availability</h2>
        <p>
          All prices shown are subject to change and availability at your service address. 
          Final pricing will be confirmed during the order process. Promotional pricing 
          may require specific terms or commitment periods.
        </p>

        <h2 className="text-xl font-bold text-foreground">Limitation of Liability</h2>
        <p>
          IQ Connects shall not be liable for any indirect, incidental, special, 
          consequential, or punitive damages resulting from your use of our services.
        </p>

        <h2 className="text-xl font-bold text-foreground">Changes to Terms</h2>
        <p>
          We reserve the right to modify these terms at any time. Your continued use 
          of the service following any changes constitutes acceptance of those changes.
        </p>
      </div>
    </LegalPage>
  );
}

export function AdvertisingDisclosure() {
  return (
    <LegalPage title="Advertising Disclosure" lastUpdated="January 1, 2026">
      <div className="space-y-6 text-muted-foreground">
        <p>
          IQ Connects is an independent authorized dealer and marketing affiliate. 
          We may receive compensation from service providers when you sign up through 
          our website or phone lines.
        </p>

        <h2 className="text-xl font-bold text-foreground">How We Make Money</h2>
        <p>
          We earn commissions from service providers when customers sign up for services 
          through our platform. This compensation helps us maintain our website and 
          provide customer service at no cost to you.
        </p>

        <h2 className="text-xl font-bold text-foreground">Our Recommendations</h2>
        <p>
          Our service recommendations are based on available options in your area, 
          customer reviews, and value for money. While we receive compensation from 
          providers, we strive to present options that best meet your needs.
        </p>

        <h2 className="text-xl font-bold text-foreground">Trademarks</h2>
        <p>
          All trademarks, logos, and brand names displayed on this website are the 
          property of their respective owners. IQ Connects is not affiliated with 
          or endorsed by these companies unless otherwise stated.
        </p>
      </div>
    </LegalPage>
  );
}

export function DoNotSell() {
  return (
    <LegalPage title="Do Not Sell My Personal Information" lastUpdated="January 1, 2026">
      <div className="space-y-6 text-muted-foreground">
        <p>
          Under the California Consumer Privacy Act (CCPA) and similar state laws, 
          you have the right to opt out of the "sale" of your personal information.
        </p>

        <h2 className="text-xl font-bold text-foreground">Our Practice</h2>
        <p>
          IQ Connects does not sell your personal information in the traditional sense. 
          However, certain data sharing with our service provider partners may be 
          considered a "sale" under some state laws.
        </p>

        <h2 className="text-xl font-bold text-foreground">Your Rights</h2>
        <p>
          You have the right to:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Know what personal information is being collected</li>
          <li>Request deletion of your personal information</li>
          <li>Opt out of the sale of your personal information</li>
          <li>Non-discrimination for exercising your rights</li>
        </ul>

        <h2 className="text-xl font-bold text-foreground">How to Opt Out</h2>
        <p>
          To exercise your right to opt out, please contact us at:
          <br />
          Email: privacy@iqconnects.com
          <br />
          Phone: (844) 525-0789
        </p>
      </div>
    </LegalPage>
  );
}

export function Disclaimer() {
  return (
    <LegalPage title="Disclaimer" lastUpdated="January 1, 2026">
      <div className="space-y-6 text-muted-foreground">
        <h2 className="text-xl font-bold text-foreground">Independent Dealer Status</h2>
        <p>
          IQ Connects is an <strong>independent authorized dealer</strong> and 
          is not the service provider. We help connect customers with internet, 
          TV, and phone services but do not directly provide these services ourselves.
        </p>

        <h2 className="text-xl font-bold text-foreground">Service Availability</h2>
        <p>
          Services, speeds, and pricing vary by location and are subject to availability 
          at your specific address. All offers are subject to change without notice.
        </p>

        <h2 className="text-xl font-bold text-foreground">Accuracy of Information</h2>
        <p>
          While we strive to provide accurate and up-to-date information, we make no 
          warranties or representations about the accuracy, reliability, or completeness 
          of information on this website.
        </p>

        <h2 className="text-xl font-bold text-foreground">Trademarks</h2>
        <p>
          All trademarks, service marks, and logos displayed on this website are the 
          property of their respective owners. Reference to any products, services, 
          or companies does not constitute or imply endorsement.
        </p>
      </div>
    </LegalPage>
  );
}

export function CookiePolicy() {
  return (
    <LegalPage title="Cookie Policy" lastUpdated="January 1, 2026">
      <div className="space-y-6 text-muted-foreground">
        <p>
          This Cookie Policy explains how IQ Connects uses cookies and similar 
          technologies to recognize you when you visit our website.
        </p>

        <h2 className="text-xl font-bold text-foreground">What Are Cookies?</h2>
        <p>
          Cookies are small data files placed on your device when you visit a website. 
          They help websites remember your preferences and understand how you interact 
          with the site.
        </p>

        <h2 className="text-xl font-bold text-foreground">Types of Cookies We Use</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
          <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our site</li>
          <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements</li>
          <li><strong>Preference Cookies:</strong> Remember your settings and choices</li>
        </ul>

        <h2 className="text-xl font-bold text-foreground">Managing Cookies</h2>
        <p>
          Most web browsers allow you to control cookies through their settings. 
          You can set your browser to refuse cookies or delete certain cookies. 
          Note that disabling cookies may affect website functionality.
        </p>

        <h2 className="text-xl font-bold text-foreground">Contact Us</h2>
        <p>
          For questions about our use of cookies, contact us at privacy@iqconnects.com.
        </p>
      </div>
    </LegalPage>
  );
}
