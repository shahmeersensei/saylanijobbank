'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export function ValuePropBanner() {
  return (
    <section className="w-full px-4 py-10 md:px-[60px]">
      <div className="relative mx-auto flex max-w-[1320px] flex-col items-center gap-2 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[16px] leading-[22.38px] font-normal text-[#8CC641]">About</span>
          <h2 className="max-w-[842px] text-center text-[28px] leading-[1.25] font-normal text-black sm:text-[40px] lg:text-[48px] lg:leading-[60px]">
            A free employment service by Saylani Welfare. We match skilled people with employers who
            are hiring.
          </h2>
        </motion.div>

        <div className="pointer-events-none absolute top-[18px] left-[161px] hidden size-[78px] items-center justify-center rounded-[12px] bg-white lg:flex">
          <Image
            src="/assets/icons/about-profile-2user.svg"
            alt=""
            width={52}
            height={52}
            unoptimized
          />
        </div>
        <div className="pointer-events-none absolute top-[154px] left-[931px] hidden size-[78px] items-center justify-center rounded-[12px] bg-white lg:flex">
          <Image
            src="/assets/icons/about-collaboration.svg"
            alt=""
            width={51}
            height={39}
            unoptimized
          />
        </div>
      </div>
    </section>
  );
}
