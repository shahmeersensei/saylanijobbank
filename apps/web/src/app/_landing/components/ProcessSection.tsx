import { BrandMark } from '@/components/brands/BrandMark';

const STEPS = [
  {
    num: '1',
    active: true,
    title: 'Create your free account',
    desc: 'Register quickly with your phone or email. Secure and free.',
  },
  {
    num: '2',
    active: false,
    title: 'Fill your Personal Data',
    desc: 'Complete your registration and prepare your profile for companies.',
  },
  {
    num: '3',
    active: false,
    title: 'Upload your Resume & Credentials',
    desc: 'Upload your CV or let us extract your skills and certifications.',
  },
  {
    num: '4',
    active: false,
    title: 'Get Matched & Secure Rizq',
    desc: 'Find job matches, get interview calls, and begin your career with respect.',
  },
];

export function ProcessSection() {
  return (
    <section className="bg-[#F9F9F9] py-16 sm:py-24">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-base font-normal text-[#8CC641]">
            Process
          </span>
          <h2 className="mt-2 text-3xl font-semibold text-black sm:text-[32px] leading-tight">
            How the Job Bank takes you from registration to a job
          </h2>
          <p className="mt-3 text-base font-medium text-black/80">
            Four simple steps for job seekers and for employers. Every candidate is assessed, every match
            is checked, and no fees are charged at any stage.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          {/* Left Column: 4 Steps */}
          <div className="space-y-4 lg:col-span-7">
            {STEPS.map((s) => (
              <div
                key={s.num}
                className="flex items-start gap-4 rounded-2xl bg-white p-6 border border-gray-100 shadow-xs"
              >
                <div
                  className={`flex size-8 shrink-0 items-center justify-center rounded-full text-sm font-medium ${s.active ? 'bg-black text-white' : 'bg-gray-300 text-white'
                    }`}
                >
                  {s.num}
                </div>
                <div>
                  <h3 className="text-xl font-medium text-black">{s.title}</h3>
                  <p className="mt-1 text-sm font-normal text-black/70 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Exact Registration Card from Figma */}
          <div className="lg:col-span-5">
            <div className="mx-auto w-full max-w-md rounded-3xl border border-gray-100 bg-white p-8 shadow-sm">
              <div className="flex justify-center">
                <BrandMark />
              </div>

              <div className="mt-8 space-y-5">
                <div>
                  <label className="text-xl font-medium text-black">Email</label>
                  <input
                    type="email"
                    readOnly
                    value="muneeb@gmail.com"
                    className="mt-2 w-full rounded-2xl border border-gray-100 bg-gray-50 px-4 py-3 text-base font-normal text-black focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-xl font-medium text-black">Password</label>
                  <input
                    type="password"
                    readOnly
                    value="••••••••••••"
                    className="mt-2 w-full rounded-2xl border border-gray-100 bg-gray-50 px-4 py-3 text-base font-normal text-black tracking-widest focus:outline-none"
                  />
                </div>

                <button
                  type="button"
                  className="w-full rounded-full bg-black py-3.5 text-lg font-medium text-white transition-all hover:bg-neutral-800"
                >
                  Create Account
                </button>

                <p className="text-center text-xs font-normal text-black/60">
                  Free & secure registration verified by OTP
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
