'use client';

import { ArrowRight, Search } from 'lucide-react';
import NextLink from 'next/link';
import { useState } from 'react';

const OPENINGS = [
  { id: '1', title: 'Accounts Assistant', tags: ['Karachi', 'Full time', '1-2 years'], salary: 'PKR 50000–100000', period: 'per month', category: 'Office and admin' },
  { id: '2', title: 'Customer Support Executive', tags: ['Lahore', 'Full time', 'Fresh graduates welcome'], salary: 'PKR 60000–120000', period: 'per month', category: 'Sales and support' },
  { id: '3', title: 'Commercial Electrician', tags: ['Karachi', 'Contract', 'Trade certificate'], salary: 'PKR 55000–110000', period: 'per month', category: 'Technical trades' },
  { id: '4', title: 'Data Entry Operator', tags: ['Islamabad', 'Full time', 'Typing skills'], salary: 'PKR 65000–130000', period: 'per month', category: 'Office and admin' },
  { id: '5', title: 'Graphic Designer', tags: ['Lahore', 'Full time', '2-3 years'], salary: 'PKR 70000–140000', period: 'per month', category: 'IT' },
  { id: '6', title: 'Digital Marketing Specialist', tags: ['Islamabad', 'Remote', 'Experience with SEO and SEM'], salary: 'PKR 80000–160000', period: 'per month', category: 'IT' },
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
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight text-black sm:text-[32px]">Latest openings</h2>
          <p className="mt-2 text-base font-medium text-black/80">
            Roles posted by employers across different industries and skill levels.
          </p>
        </div>

        {/* Filter Bar with Search on Left and Category Pills on Right */}
        <div className="mt-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex w-full max-w-sm items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-base">
            <Search className="size-4 text-gray-400" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Job title or skill"
              className="w-full bg-transparent text-black placeholder:text-gray-400 focus:outline-none"
            />
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {TABS.map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`rounded-full px-5 py-2 text-base font-medium transition-all ${
                  activeTab === tab
                    ? 'bg-black text-white shadow-sm'
                    : 'bg-transparent text-black hover:bg-gray-100'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Full-Width Horizontal Job Rows Matching Figma */}
        <div className="mt-8 space-y-3">
          {filtered.map((job) => (
            <div
              key={job.id}
              className="flex flex-col justify-between gap-4 rounded-2xl border border-gray-100 bg-[#F9F9F9] p-6 transition-all hover:bg-white hover:border-gray-200 hover:shadow-xs sm:flex-row sm:items-center"
            >
              <div>
                <h3 className="text-2xl font-normal text-black">{job.title}</h3>
                <div className="mt-2 flex flex-wrap items-center gap-2">
                  {job.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-white px-3.5 py-1 text-sm font-normal text-black border border-gray-100"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="text-left sm:text-right">
                <p className="text-sm font-bold text-black">{job.salary}</p>
                <p className="text-xs text-gray-500">{job.period}</p>
              </div>
            </div>
          ))}
        </div>

        {/* View All Openings Button */}
        <div className="mt-10 text-center">
          <NextLink
            href="/jobs"
            className="inline-flex items-center gap-2 rounded-full bg-[#8CC641] px-8 py-3.5 text-base font-medium text-white shadow-sm transition-all hover:bg-[#7CB337]"
          >
            View all openings
            <ArrowRight className="size-4" />
          </NextLink>
        </div>
      </div>
    </section>
  );
}
