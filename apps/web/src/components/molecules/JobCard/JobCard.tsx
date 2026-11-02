'use client';

import { Bookmark, Briefcase, Building2, Clock, MapPin } from 'lucide-react';
import NextLink from 'next/link';
import { useState } from 'react';
import { cn } from '@/lib/utils/cn';

export interface JobCardProps {
  id: string;
  title: string;
  companyName: string;
  location: string;
  type: string;
  experience: string;
  salaryMin?: number;
  salaryMax?: number;
  currency?: string;
  salaryPeriod?: string;
  className?: string;
}

export function JobCard({
  id,
  title,
  companyName,
  location,
  type,
  experience,
  salaryMin = 50000,
  salaryMax = 100000,
  currency = 'PKR',
  salaryPeriod = 'per month',
  className,
}: JobCardProps) {
  const [bookmarked, setBookmarked] = useState(false);

  return (
    <div
      className={cn(
        'group flex flex-col justify-between rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-[var(--primary)]/40 hover:shadow-xl',
        className,
      )}
    >
      <div>
        {/* Header: Company & Bookmark */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex size-11 items-center justify-center rounded-xl border border-gray-100 bg-gray-50 text-[var(--primary)]">
              <Building2 className="size-5" />
            </div>
            <div>
              <p className="text-xs font-medium text-gray-500">{companyName}</p>
              <h3 className="text-lg font-semibold text-black transition-colors group-hover:text-[var(--primary)]">
                {title}
              </h3>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setBookmarked(!bookmarked)}
            className="rounded-lg p-1.5 text-gray-400 transition-colors hover:bg-gray-50 hover:text-[var(--primary)]"
            aria-label="Save job"
          >
            <Bookmark
              className={cn('size-5', bookmarked && 'fill-[var(--primary)] text-[var(--primary)]')}
            />
          </button>
        </div>

        {/* Tags / Metadata Pills */}
        <div className="mt-4 flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-1 rounded-full bg-gray-50 px-3 py-1 text-xs font-medium text-[#10261A]">
            <MapPin className="size-3 text-[var(--primary)]" />
            {location}
          </span>
          <span className="inline-flex items-center gap-1 rounded-full bg-gray-50 px-3 py-1 text-xs font-medium text-[#10261A]">
            <Clock className="size-3 text-gray-500" />
            {type}
          </span>
          <span className="inline-flex items-center gap-1 rounded-full bg-gray-50 px-3 py-1 text-xs font-medium text-[#10261A]">
            <Briefcase className="size-3 text-gray-500" />
            {experience}
          </span>
        </div>
      </div>

      {/* Footer: Salary & Action Button */}
      <div className="mt-6 flex items-center justify-between border-t border-gray-100 pt-4">
        <div>
          <p className="text-base font-bold text-[#10261A]">
            {currency} {salaryMin.toLocaleString()}–{salaryMax.toLocaleString()}
          </p>
          <p className="text-xs text-[#54614F]">{salaryPeriod}</p>
        </div>

        <NextLink
          href={`/jobs/${id}`}
          className="inline-flex items-center justify-center rounded-full bg-black px-5 py-2 text-xs font-semibold text-white transition-all hover:bg-[var(--primary)] active:scale-95"
        >
          Apply Now
        </NextLink>
      </div>
    </div>
  );
}
