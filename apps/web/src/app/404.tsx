import Image from 'next/image';
import { Plus_Jakarta_Sans } from 'next/font/google';
import { Navbar } from '@/components/organisms/Navbar';
import { CTABanner } from '@/components/organisms/CTABanner';
import { Footer } from '@/components/organisms/Footer';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

export const metadata = {
  title: '404 - Saylani Job Bank',
  description: 'Page not found',
};

export default function Page404() {
  return (
    <div className="min-h-screen bg-[#F9F9F9] text-[#000000]">
      {/* 1. Master Navbar */}
      <Navbar />

      {/* 2. 404 Hero Section */}
      <div className="py-12 sm:py-24">
        <div className="mx-auto max-w-[840px] px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-semibold tracking-tight text-black sm:text-5xl lg:text-[54px]">
            404
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-black/85 sm:text-[20px]">
            The page you're looking for doesn't exist.
          </p>
        </div>
      </div>

      {/* 3. CTA Banner */}
      <CTABanner />

      {/* 4. Master Footer */}
      <Footer />
    </div>
  );
}
