import { Search } from 'lucide-react';

interface HeroSearchProps {
  className?: string;
}

export function HeroSearch({ className }: HeroSearchProps) {
  return (
    <div
      className={`flex flex-col gap-2 rounded-2xl bg-white p-2 shadow-xl border border-gray-100 sm:flex-row sm:items-center sm:rounded-full ${className ?? ''}`}
    >
      <div className="flex flex-1 items-center gap-3 px-4 py-2">
        <Search className="size-5 text-gray-400" />
        <input
          type="text"
          placeholder="Job title or skill"
          className="w-full bg-transparent text-sm text-black placeholder:text-gray-400 focus:outline-none"
        />
      </div>

      <div className="hidden h-6 w-px bg-gray-200 sm:block" />

      <div className="flex items-center px-4 py-2">
        <select className="bg-transparent text-sm font-medium text-black focus:outline-none cursor-pointer">
          <option value="All cities">All cities</option>
          <option value="Karachi">Karachi</option>
          <option value="Lahore">Lahore</option>
          <option value="Islamabad">Islamabad</option>
          <option value="Faisalabad">Faisalabad</option>
        </select>
      </div>

      <button
        type="button"
        className="rounded-full bg-black px-7 py-3 text-sm font-semibold text-white transition-all hover:bg-neutral-800 active:scale-95"
      >
        Search jobs
      </button>
    </div>
  );
}
