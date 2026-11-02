import type { ReactNode } from 'react';
import { Footer } from '@/components/organisms/Footer';
import { Navbar } from '@/components/organisms/Navbar';

interface PublicLayoutProps {
  children: ReactNode;
  signedIn?: boolean;
  dashboardHref?: string;
}

export function PublicLayout({
  children,
  signedIn = false,
  dashboardHref = '/login',
}: PublicLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col bg-[var(--bg)] text-[#0C1812]">
      <Navbar signedIn={signedIn} dashboardHref={dashboardHref} />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
