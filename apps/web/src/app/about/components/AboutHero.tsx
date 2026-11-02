'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import NextLink from 'next/link';

export function AboutHero() {
  return (
    <section className="overflow-hidden bg-[#F9F9F9] pt-12 pb-16 lg:pt-20 lg:pb-24">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between"
        >
          {/* Left Title */}
          <div className="max-w-xl">
            <h1 className="text-4xl leading-tight font-semibold tracking-tight text-black sm:text-5xl lg:text-[54px]">
              Every skill deserves a job.
            </h1>
          </div>

          {/* Right Subtitle & Buttons */}
          <div className="max-w-md">
            <p className="text-base leading-relaxed font-medium text-black/85">
              Saylani Job Bank is a free service of Saylani Welfare International Trust. We connect
              skilled people with employers who are hiring, at zero cost.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <NextLink
                  href="/jobs"
                  className="inline-block rounded-full bg-[#8CC641] px-6 py-2.5 text-base font-medium text-white shadow-sm transition-all hover:bg-[#7CB337]"
                >
                  Register for Free
                </NextLink>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <NextLink
                  href="/contact"
                  className="inline-block rounded-full border border-black/30 bg-white px-6 py-2.5 text-base font-medium text-black shadow-sm transition-all hover:bg-neutral-50"
                >
                  Hire talent
                </NextLink>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Real Classroom Photo Container with subtle lift */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          whileHover={{ y: -4 }}
          className="mt-12 cursor-pointer overflow-hidden rounded-[32px] border border-gray-200/80 bg-neutral-900 shadow-xl transition-shadow hover:shadow-2xl"
        >
          <div className="relative aspect-[21/8.5] w-full">
            <Image
              src="/assets/about-classroom.png"
              alt="Saylani Classroom and Vocational Labs"
              fill
              priority
              className="object-cover object-center select-none"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
