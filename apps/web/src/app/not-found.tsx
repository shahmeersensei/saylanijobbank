import Link from 'next/link';
import { CTABanner } from '@/components/organisms/CTABanner';
import { Footer } from '@/components/organisms/Footer';
import { Navbar } from '@/components/organisms/Navbar';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#F9F9F9] text-black">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-16 pt-10 lg:gap-[100px]">
        <Navbar />

        <main className="flex w-full flex-col items-center gap-6 px-4 py-20 text-center md:px-[60px]">
          <span className="text-[18px] leading-[24px] font-medium text-[#8CC641]">404</span>
          <h1 className="max-w-[720px] text-[40px] leading-[1.2] font-semibold text-black sm:text-[54px] sm:leading-[76px]">
            This page could not be found
          </h1>
          <p className="max-w-[560px] text-[16px] leading-[22px] font-normal text-black/60">
            The page you are looking for may have been moved or no longer exists.
          </p>
          <Link
            href="/"
            className="mt-2 rounded-full bg-black px-8 py-3 text-[16px] leading-[22px] font-medium text-white transition-opacity hover:opacity-80"
          >
            Back to home
          </Link>
        </main>

        <CTABanner />
        <Footer />
      </div>
    </div>
  );
}
