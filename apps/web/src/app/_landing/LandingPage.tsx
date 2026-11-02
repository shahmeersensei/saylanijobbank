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
    <div className="min-h-screen w-full bg-[#F9F9F9] text-black">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-16 pt-10 lg:gap-[100px]">
        <Navbar signedIn={signedIn} dashboardHref={dashboardHref} />
        <HeroSection />
        <ValuePropBanner />
        <ProcessSection />
        <LatestOpeningsSection />
        <StoriesSection />
        <FAQSection />
        <CTABanner />
        <Footer />
      </div>
    </div>
  );
}
