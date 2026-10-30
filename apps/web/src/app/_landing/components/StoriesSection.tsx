import { Volume2 } from 'lucide-react';
import Image from 'next/image';

export function StoriesSection() {
  const stories = [
    {
      name: 'Zubair ali',
      role: 'Apointee. Systems LTD.',
      image: '/assets/story-zubair.png',
    },
    {
      name: 'Abu Zar',
      role: 'Apointee. Saylani Schools',
      image: '/assets/story-abuzar.png',
    },
  ];

  return (
    <section className="bg-[#F9F9F9] py-16 sm:py-24">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-base font-normal text-[#8CC641]">
            Stories
          </span>
          <h2 className="mt-2 text-3xl font-semibold text-black sm:text-[32px] leading-tight">
            Real people, real jobs, and the employers who hired them
          </h2>
          <p className="mt-3 text-base font-medium text-black/80">
            Hear from candidates who found steady work through the Job Bank, and from the employers who
            trusted us to find them.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {stories.map((s) => (
            <div
              key={s.name}
              className="relative overflow-hidden rounded-[32px] bg-neutral-900 text-white shadow-xl h-[340px] sm:h-[380px] flex flex-col justify-between p-8"
            >
              <Image
                src={s.image}
                alt={s.name}
                fill
                className="object-cover object-center select-none"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

              {/* Play / Audio Center Button */}
              <div className="relative z-10 m-auto flex size-14 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur shadow-md transition-transform hover:scale-110 cursor-pointer">
                <Volume2 className="size-6 fill-white" />
              </div>

              {/* Bottom Candidate Info Overlay */}
              <div className="relative z-10">
                <h3 className="text-[32px] font-semibold text-white tracking-tight leading-none">{s.name}</h3>
                <p className="text-sm font-semibold text-white/90 mt-2">{s.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
