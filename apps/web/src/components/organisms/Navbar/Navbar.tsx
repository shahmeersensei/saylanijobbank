'use client';

import { Menu, X } from 'lucide-react';
import NextLink from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { BrandMark } from '@/components/brands/BrandMark';
import { cn } from '@/lib/utils/cn';

interface NavbarProps {
  signedIn?: boolean;
  dashboardHref?: string;
  className?: string;
}

export function Navbar({ signedIn = false, dashboardHref = '/login', className }: NavbarProps) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Jobs', href: '/jobs' },
    { label: 'Contact Us', href: '/contact' },
  ];

  return (
    <header className={cn('sticky top-0 z-50 h-[68px] w-full border-b border-gray-100 bg-white/95 backdrop-blur-md', className)}>
      <div className="mx-auto flex h-full max-w-[1240px] items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <NextLink href="/" className="flex items-center gap-2 transition-opacity hover:opacity-90">
          <BrandMark />
        </NextLink>

        {/* Center Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <NextLink
                key={link.href}
                href={link.href}
                className={cn(
                  'text-base transition-colors duration-150',
                  isActive ? 'font-medium text-black' : 'font-normal text-black hover:text-[#8CC641]',
                )}
              >
                {link.label}
              </NextLink>
            );
          })}
        </nav>

        {/* Right Action Buttons (Dual CTA) */}
        <div className="hidden items-center gap-3 sm:flex">
          {signedIn ? (
            <NextLink
              href={dashboardHref}
              className="inline-flex items-center justify-center rounded-full bg-[#8CC641] px-6 py-2.5 text-base font-medium text-white shadow-sm transition-all hover:bg-[#7cb337]"
            >
              Go to Dashboard
            </NextLink>
          ) : (
            <>
              <NextLink
                href="/jobs"
                className="inline-flex items-center justify-center rounded-full bg-[#8CC641] px-6 py-2.5 text-base font-medium text-white shadow-sm transition-all hover:bg-[#7cb337]"
              >
                Find a Job
              </NextLink>
              <NextLink
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-black/30 bg-white px-6 py-2.5 text-base font-medium text-black transition-all hover:bg-neutral-50"
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
        <div className="border-b border-gray-100 bg-white px-4 pt-2 pb-6 shadow-lg md:hidden">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <NextLink
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg px-3 py-2 text-base text-black hover:bg-gray-50"
              >
                {link.label}
              </NextLink>
            ))}
            <div className="mt-4 flex flex-col gap-2 pt-3 border-t border-gray-100">
              <NextLink
                href="/jobs"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center rounded-full bg-[#8CC641] py-3 text-base font-medium text-white shadow-sm"
              >
                Find a Job
              </NextLink>
              <NextLink
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center rounded-full border border-black/30 py-3 text-base font-medium text-black hover:bg-gray-50"
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
