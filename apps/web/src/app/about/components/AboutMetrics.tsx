export function AboutMetrics() {
  const stats = [
    { value: '148959', label: 'People registered' },
    { value: '14849', label: 'Employers on board' },
    { value: '19526', label: 'People placed in jobs' },
    { value: '08', label: 'Cities covered' },
  ];

  return (
    <section className="bg-[#F9F9F9] pb-16">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-gray-100 bg-white p-6 text-left shadow-xs"
            >
              <p className="text-[32px] leading-tight font-semibold text-black">{s.value}</p>
              <p className="mt-2 text-sm font-normal text-black/75">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
