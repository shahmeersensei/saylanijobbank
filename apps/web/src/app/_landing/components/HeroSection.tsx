import Image from 'next/image';
import { HeroSearch } from '@/components/molecules/HeroSearch';
import { HeroGraphicCard } from './HeroGraphicCard';

export function HeroSection() {
  return (
    <section className="bg-[#F9F9F9] pt-12 pb-16 lg:pt-20 lg:pb-24">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          {/* Left Column */}
          <div className="lg:col-span-7">
            <h1 className="text-4xl font-semibold tracking-tight text-black sm:text-5xl lg:text-[54px] leading-[1.18]">
              Connecting skilled people with the jobs that need them.
            </h1>
            <p className="mt-5 max-w-xl text-base font-medium text-black/90 leading-relaxed">
              Register, get your skills assessed, and be matched with employers who are hiring
            </p>

            <div className="mt-8 max-w-xl">
              <HeroSearch />
            </div>

            {/* Partner Brands from Figma */}
            <div className="mt-14 border-t border-gray-200/70 pt-6">
              <p className="text-2xl font-normal text-black">Our partners</p>
              <p className="text-lg font-normal text-black mt-1">The companies we've helped succeed</p>
              <div className="mt-5 flex items-center gap-8 opacity-85">
                <Image
                  src="/assets/partner-logo-1.png"
                  alt="Partner Logo 1"
                  width={82}
                  height={82}
                  className="h-10 w-auto object-contain"
                />
                <Image
                  src="/assets/partner-logo-2.png"
                  alt="Partner Logo 2"
                  width={195}
                  height={61}
                  className="h-9 w-auto object-contain"
                />
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="relative flex justify-center lg:col-span-5">
            <HeroGraphicCard />
          </div>
        </div>
      </div>
    </section>
  );
}
