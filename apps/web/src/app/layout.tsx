import type { Metadata, Viewport } from 'next';
import { Inter, Manrope, Plus_Jakarta_Sans } from 'next/font/google';
import type { ReactNode } from 'react';
import { Toaster } from '@/components/molecules/Toast';
import '@/design-system/global.css';
import { ThemeProvider } from '@/design-system/theme-provider';
import { themeScript } from '@/design-system/theme-script';

const fontSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-plus-jakarta',
  display: 'swap',
});

const fontInter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const fontManrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
});

export const metadata: Metadata = {
  title: { default: 'Saylani Job Bank', template: '%s · Saylani Job Bank' },
  description: 'Saylani Job Bank - Connecting skilled people with the jobs that need them.',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#8CC641',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${fontSans.variable} ${fontInter.variable} ${fontManrope.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-dvh bg-[#F9F9F9] font-sans text-black antialiased">
        <ThemeProvider>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
