import Image from 'next/image';

export function AboutShowcase() {
  return (
    <section className="bg-white py-14 border-t border-gray-100">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-2xl font-normal text-black">Our partners</p>
            <p className="text-lg font-normal text-black mt-1">The companies we've helped succeed</p>
          </div>

          <div className="flex items-center gap-8 opacity-85">
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
    </section>
  );
}
