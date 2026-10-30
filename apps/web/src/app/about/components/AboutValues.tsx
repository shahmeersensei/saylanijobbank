import { Briefcase, FileCheck, GraduationCap, UserCheck } from 'lucide-react';

const SERVICES = [
  {
    title: 'Job matching',
    desc: 'Candidates are matched with openings through our network of employers.',
    icon: Briefcase,
    color: 'text-[#8CC641]',
  },
  {
    title: 'Skills assessment',
    desc: 'We verify education, skills, and experience, ensuring employers find trustworthy candidates.',
    icon: FileCheck,
    color: 'text-amber-500',
  },
  {
    title: 'Career counselling',
    desc: 'One-to-one guidance to help people choose the right path and prepare for the job ahead.',
    icon: UserCheck,
    color: 'text-blue-500',
  },
  {
    title: 'Training links',
    desc: 'Not job ready yet? We connect people to Saylani’s educational and vocational training.',
    icon: GraduationCap,
    color: 'text-purple-500',
  },
];

export function AboutValues() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold text-black sm:text-[32px]">What the Job Bank does</h2>
          <p className="mt-3 text-base font-medium text-black/80">
            Four services, working together to get people into steady work.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className="rounded-2xl border border-gray-100 bg-[#F9F9F9] p-6 shadow-xs transition-all hover:bg-white hover:shadow-sm"
              >
                <div className="flex size-11 items-center justify-center rounded-xl bg-white shadow-xs">
                  <Icon className={`size-5 ${s.color}`} />
                </div>
                <h3 className="mt-5 text-[21px] font-semibold text-black">{s.title}</h3>
                <p className="mt-2 text-base font-normal text-black/75 leading-relaxed">{s.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
