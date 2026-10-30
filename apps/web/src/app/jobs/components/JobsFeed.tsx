import { Bookmark } from 'lucide-react';

export interface JobSummary {
  id: string;
  title: string;
  company?: string;
  location: string;
  salary: string;
  type: string;
  description: string;
  responsibilities: string[];
}

interface JobsFeedProps {
  jobs: JobSummary[];
  selectedId: string;
  onSelect: (job: JobSummary) => void;
}

export function JobsFeed({ jobs, selectedId, onSelect }: JobsFeedProps) {
  return (
    <div className="w-full lg:w-[400px] shrink-0 space-y-3">
      {jobs.map((job) => {
        const isSelected = selectedId === job.id;
        return (
          <div
            key={job.id}
            onClick={() => onSelect(job)}
            className={`cursor-pointer rounded-2xl border p-5 transition-all ${
              isSelected
                ? 'border-black bg-white shadow-md ring-1 ring-black'
                : 'border-gray-100 bg-white hover:border-gray-300'
            }`}
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-xl font-normal text-black">{job.title}</h3>
                <p className="mt-1 text-sm text-black/70">
                  {job.company ? `${job.company} · ` : ''}{job.location}
                </p>
              </div>
              <button
                type="button"
                className="text-gray-400 hover:text-black p-1"
                aria-label="Bookmark"
                onClick={(e) => e.stopPropagation()}
              >
                <Bookmark className="size-5" />
              </button>
            </div>
            <div className="mt-3">
              <span className="inline-block rounded-md bg-gray-50 px-2.5 py-1 text-xs font-bold text-black">
                {job.salary}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
