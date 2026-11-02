'use client';

import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import Image from 'next/image';

const STORIES = [
  { name: 'Zubair ali', role: 'Apointee. Systems LTD.', image: '/assets/story-zubair.png' },
  { name: 'Abu Zar', role: 'Apointee. Saylani Schools', image: '/assets/story-abuzar.png' },
];

export function StoriesSection() {
  return (
    <section className="w-full px-4 md:px-[60px]">
      <div className="mx-auto flex max-w-[1320px] flex-col items-center gap-10 py-10">
        <div className="flex max-w-[652px] flex-col items-center gap-2 text-center">
          <span className="text-[16px] leading-[22px] font-normal text-[#8CC641]">Stories</span>
          <h2 className="text-[26px] leading-[1.3] font-semibold text-black sm:text-[32px] sm:leading-[45px]">
            Real people, real jobs, and the employers who hired them
          </h2>
          <p className="max-w-[490px] text-[16px] leading-[22px] font-medium text-black/60">
            Hear from candidates who found steady work through the Job Bank, and from the employers
            who trusted us to find them.
          </p>
        </div>

        <div className="grid w-full grid-cols-1 gap-[30px] md:grid-cols-2">
          {STORIES.map((s, idx) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.12 }}
              whileHover={{ y: -6 }}
              className="group relative aspect-[648/349] w-full overflow-hidden rounded-[24px] bg-neutral-900"
            >
              <Image
                src={s.image}
                alt={s.name}
                fill
                sizes="(max-width: 768px) 100vw, 648px"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

              <button
                type="button"
                aria-label={`Play ${s.name} story`}
                className="absolute top-1/2 left-1/2 flex size-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition-colors group-hover:bg-[#8CC641]"
              >
                <Play className="size-5 fill-white text-white" />
              </button>

              <div className="absolute bottom-0 left-0 w-full p-5">
                <h3
                  style={{ fontFamily: 'var(--font-plus-jakarta), sans-serif' }}
                  className="text-[33.74px] leading-[42.51px] font-semibold text-white"
                >
                  {s.name}
                </h3>
                <p
                  style={{ fontFamily: 'var(--font-plus-jakarta), sans-serif' }}
                  className="text-[13.89px] leading-[17.5px] font-semibold text-white"
                >
                  {s.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
