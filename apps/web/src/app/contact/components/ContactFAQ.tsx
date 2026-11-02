'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { Minus, Plus } from 'lucide-react';
import { useState } from 'react';

const CONTACT_FAQS = [
  {
    q: 'I can’t log in to my account. What should I do?',
    a: 'Use the “Forgot Password” option on the login screen or contact our helpline at +92 21 111 729 526 for immediate OTP reset.',
  },
  {
    q: 'I made a mistake in my profile. How can I correct it?',
    a: 'In your profile page, click the edit profile button to edit any previous changes you have made.',
  },
  {
    q: 'I’m having trouble uploading my documents. What can I do?',
    a: 'Ensure your file is in PDF or JPG format and under 5MB. You can also bring your documents to any Saylani campus for free scanning.',
  },
  {
    q: 'My employer verification is pending. Who can I contact?',
    a: 'Our employer verification team verifies NTN credentials within 24–48 hours. You can email verification@saylanijobbank.org for expedited review.',
  },
];

export function ContactFAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(1); // 2nd open in Figma

  return (
    <section className="overflow-hidden bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-[1000px] px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-base font-normal text-[#8CC641]">Faq</span>
          <h2 className="mt-2 text-3xl leading-tight font-normal text-black sm:text-[40px]">
            Common questions from job seekers and employers
          </h2>
          <p className="mt-3 text-lg leading-relaxed font-normal text-black sm:text-[22px]">
            Find quick answers about registration, matching and fees, or contact our team if you
            can’t find what you need.
          </p>
        </motion.div>

        <div className="mt-12 divide-y divide-gray-100">
          {CONTACT_FAQS.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={item.q} className="py-5">
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="flex w-full items-center justify-between text-left text-lg font-normal text-black transition-colors hover:text-[#8CC641]"
                >
                  <span className={idx === 1 ? 'text-xl font-medium' : ''}>{item.q}</span>
                  <div className="flex size-6 items-center justify-center">
                    {isOpen ? (
                      <Minus className="size-5 shrink-0 text-black" />
                    ) : (
                      <Plus className="size-5 shrink-0 text-gray-400" />
                    )}
                  </div>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pt-3 pr-8 text-lg leading-relaxed font-normal text-black/80">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
