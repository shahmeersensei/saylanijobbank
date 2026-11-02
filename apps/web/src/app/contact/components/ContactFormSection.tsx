'use client';

import Image from 'next/image';

export function ContactFormSection() {
  return (
    <section id="message-form" className="bg-[#F9F9F9] py-16 sm:py-24">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
          {/* Left Column: Send us a message */}
          <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm sm:p-10 lg:col-span-6">
            <h2 className="text-2xl font-normal text-black sm:text-[36px]">Send us a message</h2>

            <form onSubmit={(e) => e.preventDefault()} className="mt-8 space-y-5">
              <div>
                <label className="text-lg font-medium text-black">Full Name</label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="mt-2 w-full rounded-2xl border border-gray-100 bg-gray-50 px-4 py-3 text-base text-black placeholder:text-gray-400 focus:ring-1 focus:ring-black focus:outline-none"
                />
              </div>

              <div>
                <label className="text-lg font-medium text-black">Email address</label>
                <input
                  type="email"
                  placeholder="Enter your Email address"
                  className="mt-2 w-full rounded-2xl border border-gray-100 bg-gray-50 px-4 py-3 text-base text-black placeholder:text-gray-400 focus:ring-1 focus:ring-black focus:outline-none"
                />
              </div>

              <div>
                <label className="text-lg font-medium text-black">I am a</label>
                <select className="mt-2 w-full cursor-pointer rounded-2xl border border-gray-100 bg-gray-50 px-4 py-3 text-base text-black focus:ring-1 focus:ring-black focus:outline-none">
                  <option>Select the desired occupation</option>
                  <option>Job Seeker</option>
                  <option>Employer / Hiring Partner</option>
                  <option>Saylani Vocational Alum</option>
                </select>
              </div>

              <div>
                <label className="text-lg font-medium text-black">Subject</label>
                <input
                  type="text"
                  placeholder="Enter the subject"
                  className="mt-2 w-full rounded-2xl border border-gray-100 bg-gray-50 px-4 py-3 text-base text-black placeholder:text-gray-400 focus:ring-1 focus:ring-black focus:outline-none"
                />
              </div>

              <div>
                <label className="text-lg font-medium text-black">Your Message</label>
                <textarea
                  rows={4}
                  placeholder="Please provide a detailed description of your message here..."
                  className="mt-2 w-full resize-none rounded-2xl border border-gray-100 bg-gray-50 px-4 py-3 text-base text-black placeholder:text-gray-400 focus:ring-1 focus:ring-black focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-full bg-black py-4 text-base font-medium text-white shadow transition-all hover:bg-neutral-800"
              >
                Send Message &gt;
              </button>
            </form>
          </div>

          {/* Right Column: Sticky Saylani Job Bank Info */}
          <div className="flex flex-col justify-between rounded-3xl border border-gray-100 bg-white p-8 shadow-sm sm:p-10 lg:sticky lg:top-24 lg:col-span-6">
            <div>
              <h2 className="text-2xl font-normal text-black sm:text-[36px]">
                Saylani Job Bank Info
              </h2>
              <p className="mt-3 text-base leading-relaxed font-medium text-black/80">
                A trusted employment platform by{' '}
                <span className="font-semibold text-[#8CC641]">Saylani Welfare Trust</span>, helping
                people find better opportunities and building a stronger future.
              </p>

              <div className="mt-8 space-y-4 border-t border-gray-100 pt-6 text-base text-black/80">
                <div>
                  <p className="font-semibold text-black">Main Branch (Karachi)</p>
                  <p className="mt-0.5 text-gray-600">A 169, Block 3, Clifton, Karachi, Pakistan</p>
                </div>
                <div>
                  <p className="font-semibold text-black">Opening Hours</p>
                  <p className="mt-0.5 text-gray-600">Mon - Sat | 9:00 AM - 5:00 PM</p>
                </div>
                <div>
                  <p className="font-semibold text-black">Helpline Numbers</p>
                  <p className="mt-0.5 text-gray-600">
                    +92 300 846 4772 &nbsp; · &nbsp; +92 21 111 729 526
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-black">Official Email</p>
                  <p className="mt-0.5 text-gray-600">info@saylanijobbank.org</p>
                </div>
              </div>
            </div>

            {/* Real Meeting Photo from Figma */}
            <div className="mt-8 overflow-hidden rounded-2xl border border-gray-100 bg-neutral-900 shadow-inner">
              <div className="relative aspect-[16/9] w-full">
                <Image
                  src="/assets/contact-meeting.png"
                  alt="Saylani Consultation Desk"
                  fill
                  className="object-cover object-center select-none"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
