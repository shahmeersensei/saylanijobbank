'use client';

import { motion } from 'framer-motion';
import { Handshake } from 'lucide-react';

export function ValuePropBanner() {
  return (
    <section className="overflow-hidden bg-[#F9F9F9] py-16 sm:py-20">
      <div className="mx-auto max-w-[1100px] px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-base font-normal text-[#8CC641]">About</span>

          <h2 className="mt-4 text-3xl leading-[1.25] font-normal text-black sm:text-4xl lg:text-[48px]">
            A free employment service by Saylani Welfare. We match skilled people with employers who
            are hiring — at zero cost.
            <motion.span
              whileHover={{ rotate: 15, scale: 1.15 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="ml-3 inline-flex cursor-pointer align-middle"
            >
              <Handshake className="size-9 text-[#8CC641]" />
            </motion.span>
          </h2>
        </motion.div>
      </div>
    </section>
  );
}
