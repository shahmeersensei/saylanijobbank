import NextLink from 'next/link';
import { BrandMark } from '@/components/brands/BrandMark';

export function Footer() {
  const exploreLinks = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Contact Us', href: '/contact' },
    { label: 'Contact', href: '/contact' },
  ];

  const forYouLinks = [
    { label: 'Job Seekers', href: '/jobs' },
    { label: 'Empoylers', href: '/contact' },
    { label: 'Latest Opening', href: '/jobs' },
  ];

  return (
    <footer className="relative overflow-hidden rounded-t-[40px] border-t border-gray-100 bg-white pt-16 pb-8">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <NextLink href="/" className="inline-block">
              <BrandMark />
            </NextLink>
            <p className="mt-4 max-w-sm text-base text-black leading-relaxed">
              A free employment service of Saylani Welfare International Trust, connecting skilled people
              with employers.
            </p>
            <div className="mt-6">
              <a
                href="https://www.saylaniwelfare.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-black px-7 py-3 text-base font-medium text-white shadow-sm transition-all hover:bg-neutral-800"
              >
                Support Saylani
              </a>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-lg font-normal text-black">Explore</h3>
            <ul className="mt-4 space-y-2.5 text-base">
              {exploreLinks.map((l) => (
                <li key={l.label}>
                  <NextLink href={l.href} className="text-black hover:text-[#8CC641] transition-colors">
                    {l.label}
                  </NextLink>
                </li>
              ))}
            </ul>
          </div>

          {/* For You */}
          <div>
            <h3 className="text-lg font-normal text-black">For You</h3>
            <ul className="mt-4 space-y-2.5 text-base">
              {forYouLinks.map((l) => (
                <li key={l.label}>
                  <NextLink href={l.href} className="text-black hover:text-[#8CC641] transition-colors">
                    {l.label}
                  </NextLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-normal text-black">Contact</h3>
            <ul className="mt-4 space-y-2.5 text-base text-black">
              <li>+1 (929) 922-6467</li>
              <li>info@saylanibank.com</li>
              <li className="mt-2 text-black/70">A-25, off Bahadur Shah Zafar Road.</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="mt-14 flex flex-col items-center justify-between border-t border-black/10 pt-6 text-base text-black sm:flex-row">
          <p>2025 Saylani Job Bank all rights reserved.</p>
          <div className="mt-3 flex items-center gap-6 sm:mt-0">
            <NextLink href="/privacy-policy" className="text-[#65748b] hover:text-black transition-colors">
              Privacy Policy
            </NextLink>
            <NextLink href="/terms" className="text-[#65748b] hover:text-black transition-colors">
              Terms of Use
            </NextLink>
          </div>
        </div>

        {/* Exact Giant Green Outline Watermark from Figma */}
        <div className="pointer-events-none mt-10 select-none text-center">
          <span className="text-4xl font-extrabold tracking-wider text-[#8CC641]/20 sm:text-7xl md:text-8xl lg:text-[145px] leading-none uppercase">
            SAYLANI JOB BANK
          </span>
        </div>
      </div>
    </footer>
  );
}
