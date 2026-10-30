import Image from 'next/image';

const TEAM = [
  { name: 'Abu Zar', role: 'Operational Manager', image: '/assets/team-abuzar.png' },
  { name: 'Kamran Ali', role: 'Accounts Assistant', image: '/assets/team-kamran.png' },
  { name: 'Ali Azmat', role: 'Data Entry Operator', image: '/assets/team-aliazmat.png' },
  { name: 'Javed Khan', role: 'Customer Support Executive', image: '/assets/team-javed.png' },
];

export function AboutLeadership() {
  return (
    <section className="bg-[#F9F9F9] py-16 sm:py-24">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold text-black sm:text-[32px]">The people behind the Job Bank</h2>
          <p className="mt-3 text-base font-medium text-black/80">
            The team that registers, assesses and matches every candidate.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TEAM.map((member) => (
            <div
              key={member.name}
              className="relative overflow-hidden rounded-[28px] bg-neutral-900 text-white shadow-md h-[340px] flex flex-col justify-end p-6"
            >
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover object-top select-none"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

              <div className="relative z-10 border-t border-white/20 pt-3">
                <h3 className="text-2xl font-semibold text-white leading-tight">{member.name}</h3>
                <p className="text-sm font-medium text-white/90 mt-1">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
