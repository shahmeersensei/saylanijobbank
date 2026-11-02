'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { Bookmark, Briefcase, Clock, MapPin, Share2 } from 'lucide-react';

interface JobDetailCardProps {
  job: {
    id: string;
    title: string;
    company?: string;
    location: string;
    salary: string;
    type: string;
    description: string;
    responsibilities: string[];
  };
}

export function JobDetailCard({ job }: JobDetailCardProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={job.id}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.2 }}
        className="flex-1 rounded-3xl border border-gray-100 bg-white p-8 shadow-xs"
      >
        <div className="flex flex-col justify-between gap-4 border-b border-gray-100 pb-6 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-3xl font-semibold text-black">{job.title}</h2>
            <p className="mt-1 text-base text-black/70">
              {job.company ? `${job.company} · ` : ''}
              {job.location}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              className="rounded-full bg-black px-7 py-3 text-base font-medium text-white shadow-sm transition-all hover:bg-neutral-800"
            >
              Apply now
            </button>
            <button
              type="button"
              className="flex size-11 items-center justify-center rounded-full border border-gray-200 text-gray-700 hover:bg-gray-50"
              aria-label="Save Job"
            >
              <Bookmark className="size-5" />
            </button>
            <button
              type="button"
              className="flex size-11 items-center justify-center rounded-full border border-gray-200 text-gray-700 hover:bg-gray-50"
              aria-label="Share Job"
            >
              <Share2 className="size-5" />
            </button>
          </div>
        </div>

        {/* Job Details Meta */}
        <div className="mt-6">
          <h3 className="text-base font-semibold text-black">Job details</h3>
          <div className="mt-3 space-y-2.5 text-base text-black/80">
            <p className="flex items-center gap-2.5">
              <Briefcase className="size-5 text-[#8CC641]" />
              <span>{job.salary}</span>
            </p>
            <p className="flex items-center gap-2.5">
              <Clock className="size-5 text-[#8CC641]" />
              <span>{job.type}</span>
            </p>
            <p className="flex items-center gap-2.5">
              <MapPin className="size-5 text-[#8CC641]" />
              <span>{job.location}</span>
            </p>
          </div>
        </div>

        {/* Full Job Description */}
        <div className="mt-8 border-t border-gray-100 pt-6">
          <h3 className="text-base font-semibold text-black">Full job description</h3>
          <p className="mt-3 text-base leading-relaxed text-black/80">{job.description}</p>
        </div>

        {/* Key Responsibilities */}
        <div className="mt-8 border-t border-gray-100 pt-6">
          <h3 className="text-base font-semibold text-black">Key Responsibilities</h3>
          <ul className="mt-3 space-y-2 text-base text-black/80">
            {job.responsibilities.map((r, i) => (
              <li key={i} className="flex items-start gap-2.5">
                <span className="font-bold text-[#8CC641]">•</span>
                <span className="leading-relaxed">{r}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
