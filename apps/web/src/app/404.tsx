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
      <div className="relative flex min-h-screen items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        {/* Decorative gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-surface-muted opacity-60 -z-10 select-none"></div>

        {/* Saylani Logo - center stage */}
        <div className="mb-12 text-center">
          <Image
            src="/assets/logo.svg"
            alt="Saylani Job Bank"
            width={160}
            height={64}
            className="block mx-auto animate-bounce text-primary"
          />
        </div>

        {/* Large 404 Display */}
        <div className="text-center mb-16">
          <h1 className={`font-extrabold ${jakarta.className} text-9xl lg:text-10xl tracking-tight text-primary mb-2 select-none`}>
            404
          </h1>
          <p className={`text-lg ${jakarta.className} text-fg-muted/60 mb-8 max-w-xl mx-auto leading-relaxed select-none`}>
            The page you're looking for doesn't exist.
          </p>
        </div>

        {/* Divider */}
        <div className="w-16 h-1 mx-auto border-t border-primary/20 my-12 select-none"></div>

        {/* Action Card */}
        <div className="bg-surface rounded-3xl p-8 max-w-md mx-auto shadow-lg shadow-primary/10 text-center">
          <div className="w-14 h-14 mx-auto mb-6 rounded-2xl bg-primary/5 flex items-center justify-center">
            <svg
              className="w-7 h-7 text-primary"
              viewBox="0 0 24 24"
              stroke="currentColor"
              fill="none"
              strokeWidth={2}
            >
              <path d="M10 13a5 5 0 0 0 7.54.54l-3 3a5 5 0 0 1-7.07-7l3-3a5 5 0 0 0-7.54-7.54l-3 3a5 5 0 0 1 7.07 7z" />
            </svg>
          </div>
          <h2 className={`font-bold ${jakarta.className} text-2xl mb-3 text-primary`}>
            Something went wrong
          </h2>
          <p className={`text-base ${jakarta.className} text-fg-muted/70 mb-6 leading-relaxed`}>
            The page you're looking for might have been removed, renamed, or the URL was typed incorrectly.
          </p>
          <div className="space-y-3">
            <button
              onClick={() => window.location.href = '/'
              }
              className={`w-full px-8 py-3 rounded-full bg-primary text-primary-fg font-medium hover:bg-primary/90 transition-all shadow-lg shadow-primary/20`}
            >
              <span className="iconify" style={{ color: 'var(--primary-fg)' }}>
                heroicons:arrow-left
              </span>
              <span>Back to Home</span>
            </button>
            <button
              onClick={() => window.location.href = '/'
              }
              className={`w-full px-8 py-3 rounded-full bg-primary/10 text-primary border border-primary/20 font-medium hover:bg-primary/5 transition-all`}
            >
              <span className="iconify" style={{ color: 'var(--primary-fg)' }}>
                heroicons:search
              </span>
              <span>Search Jobs</span>
            </button>
          </div>
        </div>

        {/* Quick links section */}
        <div className="mt-16 text-center">
          <p className={`text-sm ${jakarta.className} text-fg-muted/60 mb-4`}>
            <span className="font-medium">Need help?</span> Here are quick links:
          </p>
          <div className="flex justify-center gap-8">
            <a
              href="/"
              className={`inline-flex items-center gap-2 px-6 py-3 text-sm font-medium bg-primary text-primary-fg rounded-full hover:bg-primary/90 transition-all`}
            >
              <span className="iconify" style={{ color: 'var(--primary-fg)' }}>
                heroicons:home
              </span>
              <span>Home</span>
            </a>
            <a
              href="/jobs"
              className={`inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-primary bg-primary/10 hover:bg-primary/20 rounded-full transition-all`}
            >
              <span className="iconify" style={{ color: 'var(--primary-fg)' }}>
                heroicons:briefcase
              </span>
              <span>Jobs</span>
            </a>
            <a
              href="/about"
              className={`inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-primary bg-primary/10 hover:bg-primary/20 rounded-full transition-all`}
            >
              <span className="iconify" style={{ color: 'var(--primary-fg)' }}>
                heroicons:user-group
              </span>
              <span>About</span>
            </a>
          </div>
        </div>

        {/* Footer copyright */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs ${jakarta.className} text-fg-muted">
          © 2026 Saylani Welfare International Trust. All rights reserved.
        </div>
      </div>
    </div>
  );
}