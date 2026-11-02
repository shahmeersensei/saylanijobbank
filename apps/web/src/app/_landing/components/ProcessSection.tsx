'use client';

import { motion } from 'framer-motion';
import { BrandMark } from '@/components/brands/BrandMark';

const STEPS = [
  {
    num: '1',
    title: 'Create your free account',
    desc: 'Register quickly with your phone or email. Secure and free.',
  },
  {
    num: '2',
    title: 'Fill your Personal Data',
    desc: 'Complete your registration and prepare your profile for companies.',
  },
  {
    num: '3',
    title: 'Upload your Resume & Credentials',
    desc: 'Upload your CV or let us extract your skills and certifications.',
  },
  {
    num: '4',
    title: 'Get Matched & Secure Rizq',
    desc: 'Find job matches, get interview calls, and begin your career with respect.',
  },
];

export function ProcessSection() {
  return (
    <section className="w-full px-4 md:px-[60px]">
      <div className="mx-auto flex max-w-[1320px] flex-col items-center gap-10 py-10">
        <div className="flex max-w-[639px] flex-col items-center gap-2 text-center">
          <span className="text-[16px] leading-[22px] font-normal text-[#8CC641]">Process</span>
          <h2 className="text-[26px] leading-[1.3] font-semibold text-black sm:text-[32px] sm:leading-[45px]">
            How the Job Bank takes you from registration to a job
          </h2>
          <p className="text-[16px] leading-[22px] font-medium text-black/60">
            Four simple steps for job seekers and for employers. Every candidate is assessed, every
            match is checked, and no fees are charged at any stage.
          </p>
        </div>

        <div className="flex w-full flex-col items-center gap-6 lg:flex-row lg:items-center">
          <div className="flex w-full max-w-[648px] flex-col gap-4">
            {STEPS.map((s, idx) => (
              <motion.div
                key={s.num}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                whileHover={{ x: 4 }}
                className="flex items-center gap-4 rounded-[12px] bg-white p-4"
              >
                <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-black text-[15px] font-medium text-white">
                  {s.num}
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-[20px] leading-[28px] font-medium text-black">{s.title}</h3>
                  <p className="text-[14px] leading-[20px] font-normal text-black">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex w-full max-w-[648px] flex-col items-center gap-6 rounded-[24px] bg-white px-10 py-6"
          >
            <BrandMark />
            <div className="flex w-full max-w-[568px] flex-col gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-[20px] leading-[28px] font-medium text-black">Email</label>
                <input
                  type="email"
                  readOnly
                  value="muneeb@gmail.com"
                  className="h-[54px] w-full rounded-full bg-[#F9F9F9] px-4 text-[16px] leading-[22px] text-black/60 focus:outline-none"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[20px] leading-[28px] font-medium text-black">
                  Password
                </label>
                <input
                  type="password"
                  readOnly
                  value="************"
                  className="h-[54px] w-full rounded-full bg-[#F9F9F9] px-4 text-[16px] leading-[22px] text-black/60 focus:outline-none"
                />
              </div>
            </div>
            <div className="flex w-full max-w-[568px] flex-col items-center gap-4">
              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                type="button"
                className="h-[57px] w-full rounded-full bg-black text-[18px] leading-[25px] font-medium text-white transition-colors hover:bg-neutral-800"
              >
                Create Account
              </motion.button>
              <p className="text-[12px] leading-[17px] font-normal text-black/60">
                Free &amp; secure registration verified by OTP
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
