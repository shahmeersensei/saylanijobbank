import type { Metadata } from 'next';
import { CTABanner } from '@/components/organisms/CTABanner';
import { Footer } from '@/components/organisms/Footer';
import { Navbar } from '@/components/organisms/Navbar';
import { ContactFAQ } from './components/ContactFAQ';
import { ContactFormSection } from './components/ContactFormSection';
import { ContactHero } from './components/ContactHero';
import { ContactSupportCards } from './components/ContactSupportCards';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Saylani Job Bank - We’re Here to Help. Contact our Karachi Clifton branch and nationwide support team.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#F9F9F9] text-[#000000]">
      <Navbar />
      <ContactHero />
      <ContactFormSection />
      <ContactSupportCards />
      <ContactFAQ />
      <CTABanner />
      <Footer />
    </div>
  );
}
