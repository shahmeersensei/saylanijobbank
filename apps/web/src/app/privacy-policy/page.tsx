import type { Metadata } from 'next';
import { Footer } from '@/components/organisms/Footer';
import { Navbar } from '@/components/organisms/Navbar';
import { PRIVACY_SECTIONS } from './privacyData';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Saylani Job Bank official Privacy Policy and candidate data protections.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#F9F9F9] text-[#000000]">
      <Navbar />

      <main className="py-16 sm:py-24">
        <div className="mx-auto max-w-[840px] px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-semibold tracking-tight text-black sm:text-5xl lg:text-[54px]">
            Privacy Policy
          </h1>

          <div className="mt-16 space-y-14">
            {PRIVACY_SECTIONS.map((sec) => (
              <div key={sec.title} className="text-left">
                <h2 className="text-2xl font-semibold text-black sm:text-[32px] leading-snug">
                  {sec.title}
                </h2>

                <div className="mt-6 space-y-4 text-lg sm:text-[20px] leading-relaxed text-black/85">
                  {sec.paragraphs.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}

                  {sec.bullets && (
                    <ul className="mt-3 list-inside list-disc space-y-2 pl-2">
                      {sec.bullets.map((b, idx) => (
                        <li key={idx}>{b}</li>
                      ))}
                    </ul>
                  )}

                  {sec.subsections?.map((sub) => (
                    <div key={sub.title} className="mt-6">
                      <p className="font-semibold text-black">{sub.title}</p>
                      <ul className="mt-2 list-inside list-disc space-y-2 pl-2">
                        {sub.bullets.map((b, idx) => (
                          <li key={idx}>{b}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
