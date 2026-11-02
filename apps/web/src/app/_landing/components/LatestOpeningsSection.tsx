'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Search } from 'lucide-react';
import NextLink from 'next/link';
import { useState } from 'react';

const OPENINGS = [
  {
    id: '1',
    title: 'Accounts Assistant',
    tags: ['Karachi', 'Full time', '1–2 years'],
    salary: 'PKR 50000–100000',
    category: 'Office and admin',
  },
  {
    id: '2',
    title: 'Customer Support Executive',
    tags: ['Lahore', 'Full time', 'Fresh graduates welcome'],
    salary: 'PKR 60000–120000',
    category: 'Sales and support',
  },
  {
    id: '3',
    title: 'Commercial Electrician',
    tags: ['Karachi', 'Contract', 'Trade certificate'],
    salary: 'PKR 55000–110000',
    category: 'Technical trades',
  },
  {
    id: '4',
    title: 'Data Entry Operator',
    tags: ['Islamabad', 'Full time', 'Typing skills'],
    salary: 'PKR 65000–130000',
    category: 'Office and admin',
  },
  {
    id: '5',
    title: 'Graphic Designer',
    tags: ['Lahore', 'Full time', '2–3 years'],
    salary: 'PKR 70000–140000',
    category: 'IT',
  },
  {
    id: '6',
    title: 'Digital Marketing Specialist',
    tags: ['Islamabad', 'Remote', 'Experience with SEO and SEM'],
    salary: 'PKR 80000–160000',
    category: 'IT',
  },
];

const TABS = ['All roles', 'Office and admin', 'Technical trades', 'IT', 'Sales and support'];

export function LatestOpeningsSection() {
  const [activeTab, setActiveTab] = useState('All roles');
  const [query, setQuery] = useState('');

  const filtered = OPENINGS.filter((job) => {
    if (activeTab !== 'All roles' && job.category !== activeTab) return false;
    if (query && !job.title.toLowerCase().includes(query.toLowerCase())) return false;
    return true;
  });

  return (
    <section className="w-full px-4 md:px-[60px]">
      <div className="mx-auto flex max-w-[1320px] flex-col gap-6">
        <div className="flex flex-col gap-1">
          <h2 className="text-[28px] leading-[1.2] font-semibold text-black sm:text-[32px] sm:leading-[45px]">
            Latest openings
          </h2>
          <p className="text-[16px] leading-[22px] font-medium text-black/60">
            Roles posted by employers across different industries and skill levels.
          </p>
        </div>

        <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
          <div className="flex h-12 w-full max-w-[711px] items-center gap-2 rounded-full bg-white px-3.5">
            <Search className="size-5 shrink-0 text-[#54614F]" strokeWidth={1.8} />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Job title or skill"
              className="w-full bg-transparent text-[16px] leading-[22px] text-black placeholder:text-black/60 focus:outline-none"
            />
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {TABS.map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`relative h-9 rounded-full px-3.5 text-[16px] leading-[22px] whitespace-nowrap transition-colors ${
                  activeTab === tab
                    ? 'bg-black font-normal text-white'
                    : 'bg-white text-[#54614F] hover:text-black'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-2 overflow-hidden rounded-[24px] bg-white">
          {filtered.map((job) => (
            <NextLink
              key={job.id}
              href="/jobs"
              className="flex flex-col justify-between gap-3 border-b border-[#E6ECDE] px-7 py-6 last:border-b-0 sm:flex-row sm:items-center"
            >
              <div className="flex flex-col gap-2.5">
                <h3 className="text-[20px] leading-[28px] font-semibold tracking-[-0.2px] text-black">
                  {job.title}
                </h3>
                <div className="flex flex-wrap items-center gap-2">
                  {job.tags.map((t) => (
                    <span
                      key={t}
                      className="inline-flex h-7 items-center rounded-full bg-[#F9F9F9] px-3 text-[13px] leading-[18px] font-medium text-black/60"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="text-left sm:text-right">
                <p className="text-[17px] leading-[24px] font-semibold text-[#10261A]">
                  {job.salary}
                </p>
                <p className="text-[14px] leading-[20px] font-normal text-[#54614F]">per month</p>
              </div>
            </NextLink>
          ))}
          {filtered.length === 0 && (
            <p className="px-7 py-10 text-center text-[16px] text-black/60">No openings found.</p>
          )}
        </div>

        <div className="flex justify-center pt-2">
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <NextLink
              href="/jobs"
              className="inline-flex h-[52px] items-center gap-2 rounded-full bg-[#8CC641] px-5 text-[15px] leading-[21px] font-semibold text-white transition-colors hover:bg-[#7CB337]"
            >
              View all openings
              <ArrowRight className="size-[18px]" strokeWidth={2} />
            </NextLink>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
