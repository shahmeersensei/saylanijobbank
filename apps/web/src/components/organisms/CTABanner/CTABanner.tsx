'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import NextLink from 'next/link';
import { cn } from '@/lib/utils/cn';

interface CTABannerProps {
  className?: string;
}

export function CTABanner({ className }: CTABannerProps) {
  return (
    <section className={cn('overflow-hidden py-12 sm:py-16 lg:py-20', className)}>
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-[36px] bg-gradient-to-r from-[#8CC641] via-[#85C03B] to-[#72A830] px-8 pt-8 text-white shadow-xl sm:px-12 sm:pt-12 lg:px-14 lg:pt-14"
        >
          <div className="grid grid-cols-1 items-end gap-6 lg:grid-cols-12">
            {/* Left Content */}
            <div className="pb-8 sm:pb-12 lg:col-span-7">
              <h2 className="text-3xl leading-tight font-semibold tracking-tight text-white sm:text-4xl lg:text-[54px]">
                Find your next job or great hire at the Job Bank.
              </h2>

              <p className="mt-4 max-w-xl text-base leading-relaxed font-medium text-white">
                Job seekers can register for free and get matched with employers who are hiring.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <NextLink
                    href="/jobs"
                    className="inline-block rounded-full bg-black px-8 py-3.5 text-base font-medium text-white shadow transition-all hover:bg-neutral-800"
                  >
                    Find a Job
                  </NextLink>
                </motion.div>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <NextLink
                    href="/contact"
                    className="inline-block rounded-full bg-white px-8 py-3.5 text-base font-medium text-black shadow transition-all hover:bg-gray-100"
                  >
                    Hire talent
                  </NextLink>
                </motion.div>
              </div>
            </div>

            {/* Right Cutout Real Photo from Figma */}
            <div className="relative flex justify-center lg:col-span-5 lg:justify-end">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="relative h-[280px] w-[260px] sm:h-[360px] sm:w-[326px]"
              >
                <Image
                  src="/assets/cta-graduate.png"
                  alt="Verified Candidate"
                  fill
                  priority
                  className="object-contain object-bottom select-none"
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
