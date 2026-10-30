import Image from 'next/image';
import NextLink from 'next/link';

export function AboutHero() {
  return (
    <section className="bg-[#F9F9F9] pt-12 pb-16 lg:pt-20 lg:pb-24">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          {/* Left Title */}
          <div className="max-w-xl">
            <h1 className="text-4xl font-semibold tracking-tight text-black sm:text-5xl lg:text-[54px] leading-tight">
              Every skill deserves a job.
            </h1>
          </div>

          {/* Right Subtitle & Buttons */}
          <div className="max-w-md">
            <p className="text-base font-medium text-black/85 leading-relaxed">
              Saylani Job Bank is a free service of Saylani Welfare International Trust. We connect skilled people with employers who are hiring, at zero cost.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <NextLink
                href="/jobs"
                className="rounded-full bg-[#8CC641] px-6 py-2.5 text-base font-medium text-white shadow-sm transition-all hover:bg-[#7CB337]"
              >
                Register for Free
              </NextLink>

              <NextLink
                href="/contact"
                className="rounded-full border border-black/30 bg-white px-6 py-2.5 text-base font-medium text-black shadow-sm transition-all hover:bg-neutral-50"
              >
                Hire talent
              </NextLink>
            </div>
          </div>
        </div>

        {/* Real Classroom Photo Container from Figma (Rectangle 17) */}
        <div className="mt-12 overflow-hidden rounded-[32px] border border-gray-200/80 bg-neutral-900 shadow-xl">
          <div className="relative aspect-[21/8.5] w-full">
            <Image
              src="/assets/about-classroom.png"
              alt="Saylani Classroom and Vocational Labs"
              fill
              priority
              className="object-cover object-center select-none"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
