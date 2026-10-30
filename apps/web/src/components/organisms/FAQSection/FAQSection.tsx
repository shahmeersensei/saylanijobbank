'use client';

import { Minus, Plus } from 'lucide-react';
import { useState } from 'react';

const FAQS = [
  {
    q: 'Is the Job Bank really free?',
    a: 'Yes, Saylani Job Bank is 100% free for job seekers and employers. We never charge any registration fees or placement commissions.',
  },
  {
    q: 'How does matching work?',
    a: 'We register each applicant and check their education, skills and experience. Eligible candidates are then matched with employers who have posted matching vacancies.',
  },
  {
    q: 'How long does it take to get placed?',
    a: 'Placement timelines depend on demand, your trade qualifications, and interview scheduling, typically ranging from a few days to 2 weeks.',
  },
  {
    q: 'Who can register as a job seeker?',
    a: 'Anyone looking for employment with vocational skills, trade certificates, or academic diplomas can register.',
  },
  {
    q: 'What documents do I need to register?',
    a: 'A valid CNIC or Form-B, your latest resume or educational credentials, and any relevant trade certificates.',
  },
  {
    q: 'How do employers post a vacancy?',
    a: 'Employers register their organization, verify their business profile, and can post vacancies immediately at zero cost.',
  },
];

export function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(1); // 2nd open in Figma

  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-[1000px] px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-base font-normal text-[#8CC641]">
            Faq
          </span>
          <h2 className="mt-2 text-3xl font-normal text-black sm:text-[40px] leading-tight">
            Common questions from job seekers and employers
          </h2>
          <p className="mt-3 text-lg sm:text-[22px] font-normal text-black leading-relaxed">
            Find quick answers about registration, matching and fees, or contact our team if you have any questions.
          </p>
        </div>

        <div className="mt-12 divide-y divide-gray-100">
          {FAQS.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={item.q} className="py-5">
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="flex w-full items-center justify-between text-left text-lg font-normal text-black hover:text-[#8CC641] transition-colors"
                >
                  <span>{item.q}</span>
                  {isOpen ? (
                    <Minus className="size-5 shrink-0 text-black" />
                  ) : (
                    <Plus className="size-5 shrink-0 text-gray-400" />
                  )}
                </button>
                {isOpen && (
                  <p className="mt-3 text-lg font-normal text-black/80 leading-relaxed pr-8">
                    {item.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
