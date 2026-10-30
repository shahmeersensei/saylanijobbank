import { Mail, MapPin, Phone } from 'lucide-react';
import NextLink from 'next/link';
import { BrandMark } from '@/components/brands/BrandMark';

export function Footer() {
  const exploreLinks = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Jobs', href: '/jobs' },
    { label: 'Contact Us', href: '/contact' },
  ];

  const forYouLinks = [
    { label: 'Job Seekers', href: '/jobs' },
    { label: 'Employers', href: '/contact' },
    { label: 'Latest Opening', href: '/jobs' },
  ];

  return (
    <footer className="relative overflow-hidden rounded-t-[44px] border-t border-gray-100 bg-white pt-16 pb-8 shadow-[0_-8px_30px_rgba(0,0,0,0.02)]">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <NextLink href="/" className="inline-block transition-opacity hover:opacity-90">
              <BrandMark />
            </NextLink>
            <p className="mt-4 max-w-sm text-base text-black/80 leading-relaxed">
              A free employment service of Saylani Welfare International Trust, connecting skilled people
              with employers.
            </p>
            <div className="mt-6">
              <a
                href="https://www.saylaniwelfare.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-black px-7 py-3 text-base font-medium text-white shadow-sm transition-all hover:bg-neutral-800 hover:shadow-md active:scale-95"
              >
                Support Saylani
              </a>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-lg font-semibold text-black">Explore</h3>
            <ul className="mt-4 space-y-3 text-base">
              {exploreLinks.map((l) => (
                <li key={l.label}>
                  <NextLink href={l.href} className="inline-block text-black/80 hover:text-[#8CC641] hover:translate-x-1 transition-all duration-200">
                    {l.label}
                  </NextLink>
                </li>
              ))}
            </ul>
          </div>

          {/* For You */}
          <div>
            <h3 className="text-lg font-semibold text-black">For You</h3>
            <ul className="mt-4 space-y-3 text-base">
              {forYouLinks.map((l) => (
                <li key={l.label}>
                  <NextLink href={l.href} className="inline-block text-black/80 hover:text-[#8CC641] hover:translate-x-1 transition-all duration-200">
                    {l.label}
                  </NextLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact with subtle icon accents */}
          <div>
            <h3 className="text-lg font-semibold text-black">Contact</h3>
            <ul className="mt-4 space-y-3 text-base text-black/80">
              <li className="flex items-center gap-2.5">
                <Phone className="size-4 text-[#8CC641] shrink-0" />
                <span>+1 (929) 922-6467</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="size-4 text-[#8CC641] shrink-0" />
                <span>info@saylanibank.com</span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="size-4 text-[#8CC641] shrink-0 mt-1" />
                <span className="text-black/70">A-25, off Bahadur Shah Zafar Road.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="mt-14 flex flex-col items-center justify-between border-t border-black/10 pt-6 text-base text-black/80 sm:flex-row">
          <p>© 2025 Saylani Job Bank. All rights reserved.</p>
          <div className="mt-3 flex items-center gap-6 sm:mt-0">
            <NextLink href="/privacy-policy" className="text-[#65748b] hover:text-black transition-colors">
              Privacy Policy
            </NextLink>
            <NextLink href="/terms" className="text-[#65748b] hover:text-black transition-colors">
              Terms of Use
            </NextLink>
          </div>
        </div>

        {/* Giant Green Outline Watermark from Figma */}
        <div className="pointer-events-none mt-12 select-none text-center overflow-hidden">
          <span className="text-4xl font-extrabold tracking-wider text-[#8CC641]/15 sm:text-7xl md:text-8xl lg:text-[145px] leading-none uppercase block">
            SAYLANI JOB BANK
          </span>
        </div>
      </div>
    </footer>
  );
}
