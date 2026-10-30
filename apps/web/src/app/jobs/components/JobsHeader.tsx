import { MapPin, Search } from 'lucide-react';

interface JobsHeaderProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedCity: string;
  setSelectedCity: (city: string) => void;
}

export function JobsHeader({
  searchQuery,
  setSearchQuery,
  selectedCity,
  setSelectedCity,
}: JobsHeaderProps) {
  return (
    <section className="bg-white py-12 lg:py-16 border-b border-gray-100">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-black sm:text-5xl lg:text-[58px] leading-tight">
            Search latest job posts on Saylani Job Bank
          </h1>
          <p className="mt-4 text-base font-medium text-black/80 leading-relaxed">
            Have a question, need assistance, or want to connect with our team? Reach out to us through any of the channels below.
          </p>
        </div>

        {/* Search Capsule matching Figma */}
        <div className="mt-8 flex flex-col gap-2 rounded-2xl bg-white p-2 shadow-xl border border-gray-100 sm:flex-row sm:items-center sm:rounded-full max-w-xl">
          <div className="flex flex-1 items-center gap-3 px-4 py-2">
            <Search className="size-5 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Job title or skill"
              className="w-full bg-transparent text-base text-black placeholder:text-gray-400 focus:outline-none"
            />
          </div>

          <div className="hidden h-6 w-px bg-gray-200 sm:block" />

          <div className="flex items-center px-4 py-2">
            <MapPin className="size-5 text-gray-400 mr-2" />
            <select
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              className="bg-transparent text-base font-medium text-black focus:outline-none cursor-pointer"
            >
              <option value="All cities">All cities</option>
              <option value="Karachi">Karachi</option>
              <option value="Lahore">Lahore</option>
              <option value="Islamabad">Islamabad</option>
              <option value="Faisalabad">Faisalabad</option>
              <option value="Multan">Multan</option>
              <option value="Peshawar">Peshawar</option>
              <option value="Quetta">Quetta</option>
            </select>
          </div>

          <button
            type="button"
            className="rounded-full bg-black px-7 py-3 text-base font-medium text-white transition-all hover:bg-neutral-800 shadow-sm"
          >
            Search jobs
          </button>
        </div>
      </div>
    </section>
  );
}
