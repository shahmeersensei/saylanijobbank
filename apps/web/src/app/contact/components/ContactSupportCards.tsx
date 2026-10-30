import { ArrowRight } from 'lucide-react';
import NextLink from 'next/link';

export function ContactSupportCards() {
  return (
    <section className="bg-[#F9F9F9] pb-16">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {/* Applicant Support */}
          <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-xs">
            <h3 className="text-2xl font-normal text-black sm:text-[32px]">Applicant Support</h3>
            <p className="mt-2 text-base font-medium text-black/80 leading-relaxed">
              Need help with your profile, documents, or job application? We&apos;re here to guide you.
            </p>
            <div className="mt-6">
              <NextLink
                href="/jobs"
                className="inline-flex items-center gap-2 rounded-full bg-black px-7 py-3 text-lg font-medium text-white shadow transition-all hover:bg-neutral-800"
              >
                Get Applicant Support
                <ArrowRight className="size-4" />
              </NextLink>
            </div>
          </div>

          {/* Employer Support */}
          <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-xs">
            <h3 className="text-2xl font-normal text-black sm:text-[32px]">Employer Support</h3>
            <p className="mt-2 text-base font-medium text-black/80 leading-relaxed">
              Need help with your profile, documents, or job application? We&apos;re here to guide you.
            </p>
            <div className="mt-6">
              <NextLink
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-black px-7 py-3 text-lg font-medium text-white shadow transition-all hover:bg-neutral-800"
              >
                Get Employer Support
                <ArrowRight className="size-4" />
              </NextLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
