import Image from 'next/image';

export function ContactHero() {
  return (
    <section className="bg-white pt-12 pb-16 lg:pt-20 lg:pb-24 border-b border-gray-100">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-xl">
            <h1 className="text-4xl font-bold tracking-tight text-black sm:text-5xl lg:text-[58px] leading-tight">
              We&apos;re Here to Help.
            </h1>
          </div>

          <div className="max-w-md">
            <p className="text-base font-medium text-black/80 leading-relaxed">
              Have a question, need assistance, or want to connect with our team? Reach out to us through any of the channels below.
            </p>

            <div className="mt-6">
              <a
                href="#message-form"
                className="inline-flex items-center justify-center rounded-full bg-[#8CC641] px-7 py-3 text-base font-medium text-white shadow-sm transition-all hover:bg-[#7CB337]"
              >
                Contact us
              </a>
            </div>
          </div>
        </div>

        {/* Real Support Representative Photo from Figma */}
        <div className="mt-12 overflow-hidden rounded-[32px] border border-gray-200/80 bg-neutral-900 shadow-xl">
          <div className="relative aspect-[21/8.5] w-full">
            <Image
              src="/assets/contact-support.png"
              alt="Saylani Support Representative at Helpdesk"
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
