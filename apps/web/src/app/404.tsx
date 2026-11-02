import Image from 'next/image';
import { Plus_Jakarta_Sans } from 'next/font/google';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

export const metadata = {
  title: '404 - Saylani Job Bank',
  description: 'Page not found',
};

export default function Page404() {
  return (
    <div className={jakarta.className} style={{ minHeight: '100vh', background: 'var(--bg)' }}>
      <div className="relative flex min-h-screen items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
        {/* Saylani Logo with animation */}
        <div className="mb-12 opacity-90">
          <Image
            src="/assets/logo.svg"
            alt="Saylani Job Bank Logo"
            width={140}
            height={56}
            className="mx-auto block animate-bounce"
          />
        </div>

        {/* Error Icon + 404 */}
        <div className="mb-12 text-center">
          <div className="mb-6 inline-flex items-center gap-3">
            <div className="bg-primary/10 flex h-14 w-14 items-center justify-center rounded-2xl">
              <svg
                className="text-primary h-7 w-7"
                viewBox="0 0 24 24"
                stroke="currentColor"
                fill="none"
                strokeWidth={2}
              >
                <path d="M10 13a5 5 0 0 0 7.54.54l-3 3a5 5 0 0 1-7.07-7l3-3a5 5 0 0 0-7.54-7.54l-3 3a5 5 0 0 1 7.07 7z" />
              </svg>
            </div>
            <h1
              className={`font-extrabold ${jakarta.className} text-primary mb-2 text-7xl tracking-tight lg:text-8xl`}
            >
              404
            </h1>
          </div>
          <p
            className={`text-lg ${jakarta.className} text-fg-muted/60 mx-auto mb-8 max-w-xl leading-relaxed`}
          >
            The page you're looking for doesn't exist.
          </p>
        </div>

        {/* CTA Button */}
        <div className="bg-primary text-primary-fg hover:bg-primary/90 shadow-primary/20 inline-flex items-center gap-2 rounded-full px-8 py-4 font-medium shadow-lg transition-all">
          <span className="iconify" style={{ color: 'var(--primary-fg)' }}>
            heroicons:arrow-left
          </span>
          <span>Back to Home</span>
        </div>

        {/* Features/Info section */}
        <div className="mt-16 text-center">
          <p className={`text-sm ${jakarta.className} text-fg-muted/60 mb-4`}>
            <span className="font-medium">Did you know?</span> This page might have been removed,
            renamed, or the URL was typed incorrectly.
          </p>
          <div className="flex justify-center gap-6">
            <div>
              <p className={`text-xs ${jakarta.className} text-primary mb-1 font-medium`}>Search</p>
              <p className={`text-lg ${jakarta.className} text-fg font-bold`}>🔍</p>
            </div>
            <div>
              <p className={`text-xs ${jakarta.className} text-primary mb-1 font-medium`}>
                Contact
              </p>
              <p className={`text-lg ${jakarta.className} text-fg font-bold`}>📧</p>
            </div>
            <div>
              <p className={`text-xs ${jakarta.className} text-primary mb-1 font-medium`}>Browse</p>
              <p className={`text-lg ${jakarta.className} text-fg font-bold`}>📚</p>
            </div>
          </div>
        </div>

        {/* Footer copyright */}
        <div className="${jakarta.className} text-fg-muted absolute bottom-8 left-1/2 -translate-x-1/2 text-xs">
          © 2026 Saylani Welfare International Trust. All rights reserved.
        </div>
      </div>
    </div>
  );
}
