import { Handshake } from 'lucide-react';

export function ValuePropBanner() {
  return (
    <section className="bg-[#F9F9F9] py-16 sm:py-20">
      <div className="mx-auto max-w-[1100px] px-4 text-center sm:px-6 lg:px-8">
        <span className="text-base font-normal text-[#8CC641]">
          About
        </span>

        <h2 className="mt-4 text-3xl font-normal text-black sm:text-4xl lg:text-[48px] leading-[1.25]">
          A free employment service by Saylani Welfare. We match skilled people with employers who are hiring — at zero cost.
          <span className="inline-flex ml-3 align-middle">
            <Handshake className="size-9 text-[#8CC641]" />
          </span>
        </h2>
      </div>
    </section>
  );
}
