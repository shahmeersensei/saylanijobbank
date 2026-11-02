'use client';

import { CTABanner } from '@/components/organisms/CTABanner';
import { FAQSection } from '@/components/organisms/FAQSection';
import { Footer } from '@/components/organisms/Footer';
import { Navbar } from '@/components/organisms/Navbar';
import { HeroSection } from './components/HeroSection';
import { LatestOpeningsSection } from './components/LatestOpeningsSection';
import { ProcessSection } from './components/ProcessSection';
import { StoriesSection } from './components/StoriesSection';
import { ValuePropBanner } from './components/ValuePropBanner';

interface LandingPageProps {
  signedIn?: boolean;
  dashboardHref?: string;
}

export default function LandingPage({
  signedIn = false,
  dashboardHref = '/login',
}: LandingPageProps) {
  return (
    <div className="min-h-screen bg-[#F9F9F9] text-[#000000]">
      {/* 1. Master Navbar */}
      <Navbar signedIn={signedIn} dashboardHref={dashboardHref} />

      {/* 2. Hero Section */}
      <HeroSection />

      {/* 3. Value Proposition Banner */}
      <ValuePropBanner />

      {/* 4. 4-Step Process Section */}
      <ProcessSection />

      {/* 5. Latest Openings Section */}
      <LatestOpeningsSection />

      {/* 6. Success Stories */}
      <StoriesSection />

      {/* 7. FAQ Section */}
      <FAQSection />

      {/* 8. Master Pre-Footer CTA Banner */}
      <CTABanner />

      {/* 9. Master Footer */}
      <Footer />
    </div>
  );
}
