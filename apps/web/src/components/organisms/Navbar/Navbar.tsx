'use client';

import { Menu, X } from 'lucide-react';
import NextLink from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { BrandMark } from '@/components/brands/BrandMark';
import { cn } from '@/lib/utils/cn';

interface NavbarProps {
  signedIn?: boolean;
  dashboardHref?: string;
  className?: string;
}

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Jobs', href: '/jobs' },
  { label: 'Contact Us', href: '/contact' },
];

export function Navbar({ signedIn = false, dashboardHref = '/login', className }: NavbarProps) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 15);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 h-[70px] w-full transition-all duration-300',
        scrolled
          ? 'border-b border-gray-200/80 bg-white/90 shadow-xs backdrop-blur-md'
          : 'border-b border-gray-100 bg-white/95 backdrop-blur-sm',
        className,
      )}
    >
      <div className="mx-auto flex h-full max-w-[1240px] items-center justify-between px-4 sm:px-6 lg:px-8">
        <NextLink href="/" className="flex items-center gap-2 transition-opacity hover:opacity-90">
          <BrandMark />
        </NextLink>

        {/* Center Desktop Navigation with Distinct Active Indicator */}
        <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <NextLink
                key={link.href}
                href={link.href}
                className={cn(
                  'relative py-1 text-base transition-colors duration-200',
                  isActive
                    ? 'font-semibold text-[#8CC641]'
                    : 'font-normal text-black/80 hover:text-black',
                )}
              >
                {link.label}
                {isActive && (
                  <span className="absolute right-0 bottom-[-5px] left-0 h-[2.5px] rounded-full bg-[#8CC641]" />
                )}
              </NextLink>
            );
          })}
        </nav>

        {/* Right Action Buttons */}
        <div className="hidden items-center gap-3 sm:flex">
          {signedIn ? (
            <NextLink
              href={dashboardHref}
              className="inline-flex items-center justify-center rounded-full bg-[#8CC641] px-6 py-2.5 text-base font-medium text-white shadow-sm hover:bg-[#7cb337]"
            >
              Go to Dashboard
            </NextLink>
          ) : (
            <>
              <NextLink
                href="/jobs"
                className="inline-flex items-center justify-center rounded-full bg-[#8CC641] px-6 py-2.5 text-base font-medium text-white shadow-sm hover:bg-[#7cb337] active:scale-95"
              >
                Find a Job
              </NextLink>
              <NextLink
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-black/30 bg-white px-6 py-2.5 text-base font-medium text-black hover:bg-neutral-50 active:scale-95"
              >
                Hire talent
              </NextLink>
            </>
          )}
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="inline-flex size-10 items-center justify-center rounded-lg p-2 text-gray-700 hover:bg-gray-100 md:hidden"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="border-b border-gray-100 bg-white px-4 pt-2 pb-6 shadow-xl md:hidden">
          <nav className="flex flex-col gap-2">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <NextLink
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    'rounded-xl px-4 py-2.5 text-base transition-all',
                    isActive
                      ? 'bg-[#8CC641]/10 font-semibold text-[#8CC641]'
                      : 'text-black/80 hover:bg-gray-50',
                  )}
                >
                  {link.label}
                </NextLink>
              );
            })}
            <div className="mt-3 flex flex-col gap-2 border-t border-gray-100 pt-3">
              <NextLink
                href="/jobs"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full rounded-full bg-[#8CC641] py-3 text-center text-base font-medium text-white shadow-sm"
              >
                Find a Job
              </NextLink>
              <NextLink
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full rounded-full border border-black/30 py-3 text-center text-base font-medium text-black hover:bg-gray-50"
              >
                Hire talent
              </NextLink>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
