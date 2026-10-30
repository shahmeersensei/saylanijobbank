'use client';

import { motion } from 'framer-motion';
import { Handshake } from 'lucide-react';
import Image from 'next/image';

export function AboutStory() {
  return (
    <section className="bg-[#F9F9F9] py-16 sm:py-24 overflow-hidden">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
        {/* Mission Statement Quote Banner from Figma */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-[1050px] text-center"
        >
          <h2 className="text-2xl font-normal text-black sm:text-3xl lg:text-[48px] leading-tight">
            We exist to Reduce unemployment by matching Skilled people with the Employers who are hiring — at zero cost.
            <motion.span
              whileHover={{ rotate: 15, scale: 1.15 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="inline-flex ml-3 align-middle cursor-pointer"
            >
              <Handshake className="size-9 text-[#8CC641]" />
            </motion.span>
          </h2>
        </motion.div>

        {/* 2-Column: A service of Saylani Welfare International Trust */}
        <div className="mt-20 grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          {/* Left Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6"
          >
            <h3 className="text-3xl font-semibold text-black leading-tight sm:text-[32px]">
              A service of Saylani Welfare International Trust
            </h3>
            <p className="mt-5 text-base font-medium text-black/80 leading-relaxed">
              The Job Bank is part of Saylani Welfare’s social welfare work, helping people move from need
              toward a steady livelihood. Where the Trust provides relief, the Job Bank provides a way
              forward.
            </p>

            <div className="mt-8">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://www.saylaniwelfare.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-black px-8 py-3.5 text-lg font-medium text-white shadow-sm transition-all hover:bg-neutral-800"
              >
                Visit Saylani Welfare
              </motion.a>
            </div>
          </motion.div>

          {/* Right Real Photo from Figma */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            whileHover={{ scale: 1.02 }}
            className="lg:col-span-6"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-gray-200/80 bg-neutral-900 shadow-xl">
              <Image
                src="/assets/about-mentorship.png"
                alt="Saylani Welfare Mentorship and Vocational Guidance"
                fill
                className="object-cover object-center select-none"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
