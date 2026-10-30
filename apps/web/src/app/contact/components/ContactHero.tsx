'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export function ContactHero() {
  return (
    <section className="bg-white pt-12 pb-16 lg:pt-20 lg:pb-24 border-b border-gray-100 overflow-hidden">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between"
        >
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
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#message-form"
                className="inline-flex items-center justify-center rounded-full bg-[#8CC641] px-7 py-3 text-base font-medium text-white shadow-sm transition-all hover:bg-[#7CB337]"
              >
                Contact us
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Real Support Representative Photo from Figma with subtle hover */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          whileHover={{ y: -4 }}
          className="mt-12 overflow-hidden rounded-[32px] border border-gray-200/80 bg-neutral-900 shadow-xl transition-shadow hover:shadow-2xl cursor-pointer"
        >
          <div className="relative aspect-[21/8.5] w-full">
            <Image
              src="/assets/contact-support.png"
              alt="Saylani Support Representative at Helpdesk"
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
