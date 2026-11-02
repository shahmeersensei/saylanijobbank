'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { HeroSearch } from '@/components/molecules/HeroSearch';
import { HeroGraphicCard } from './HeroGraphicCard';

export function HeroSection() {
  return (
    <section className="overflow-hidden bg-[#F9F9F9] pt-12 pb-16 lg:pt-20 lg:pb-24">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          {/* Left Column with stagger animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, staggerChildren: 0.12 }}
            className="lg:col-span-7"
          >
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl leading-[1.18] font-semibold tracking-tight text-black sm:text-5xl lg:text-[54px]"
            >
              Connecting skilled people with the jobs that need them.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-5 max-w-xl text-base leading-relaxed font-medium text-black/90"
            >
              Register, get your skills assessed, and be matched with employers who are hiring
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8 max-w-xl"
            >
              <HeroSearch />
            </motion.div>

            {/* Partner Brands from Figma */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="mt-14 border-t border-gray-200/70 pt-6"
            >
              <p className="text-2xl font-normal text-black">Our partners</p>
              <p className="mt-1 text-lg font-normal text-black">
                The companies we've helped succeed
              </p>
              <div className="mt-5 flex items-center gap-8 opacity-85">
                <motion.div whileHover={{ scale: 1.08 }} transition={{ duration: 0.2 }}>
                  <Image
                    src="/assets/partner-logo-1.png"
                    alt="Partner Logo 1"
                    width={82}
                    height={82}
                    className="h-10 w-auto cursor-pointer object-contain"
                  />
                </motion.div>
                <motion.div whileHover={{ scale: 1.08 }} transition={{ duration: 0.2 }}>
                  <Image
                    src="/assets/partner-logo-2.png"
                    alt="Partner Logo 2"
                    width={195}
                    height={61}
                    className="h-9 w-auto cursor-pointer object-contain"
                  />
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column */}
          <div className="relative flex justify-center lg:col-span-5">
            <HeroGraphicCard />
          </div>
        </div>
      </div>
    </section>
  );
}
