'use client';

import { motion } from 'framer-motion';
import { Volume2 } from 'lucide-react';
import Image from 'next/image';

export function StoriesSection() {
  const stories = [
    {
      name: 'Zubair ali',
      role: 'Apointee. Systems LTD.',
      image: '/assets/story-zubair.png',
    },
    {
      name: 'Abu Zar',
      role: 'Apointee. Saylani Schools',
      image: '/assets/story-abuzar.png',
    },
  ];

  return (
    <section className="overflow-hidden bg-[#F9F9F9] py-16 sm:py-24">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-base font-normal text-[#8CC641]">Stories</span>
          <h2 className="mt-2 text-3xl leading-tight font-semibold text-black sm:text-[32px]">
            Real people, real jobs, and the employers who hired them
          </h2>
          <p className="mt-3 text-base font-medium text-black/80">
            Hear from candidates who found steady work through the Job Bank, and from the employers
            who trusted us to find them.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {stories.map((s, idx) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              whileHover={{ y: -6 }}
              className="group relative flex h-[340px] cursor-pointer flex-col justify-between overflow-hidden rounded-[32px] bg-neutral-900 p-8 text-white shadow-xl sm:h-[380px]"
            >
              <Image
                src={s.image}
                alt={s.name}
                fill
                className="object-cover object-center transition-transform duration-700 select-none group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent transition-opacity group-hover:opacity-90" />

              {/* Play / Audio Center Button with spring hover and gentle pulse */}
              <motion.div
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
                className="relative z-10 m-auto flex size-14 items-center justify-center rounded-full bg-white/25 text-white shadow-lg backdrop-blur-md transition-colors group-hover:bg-[#8CC641]"
              >
                <Volume2 className="size-6 fill-white" />
              </motion.div>

              {/* Bottom Candidate Info Overlay */}
              <div className="relative z-10">
                <h3 className="text-[32px] leading-none font-semibold tracking-tight text-white">
                  {s.name}
                </h3>
                <p className="mt-2 text-sm font-semibold text-white/90">{s.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
