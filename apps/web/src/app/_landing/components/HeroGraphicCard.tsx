import Image from 'next/image';

export function HeroGraphicCard() {
  return (
    <div className="relative w-full max-w-[480px]">
      {/* Green rounded frame from Figma */}
      <div className="relative aspect-[4/4.4] w-full overflow-hidden rounded-[36px] bg-[#8CC641] shadow-2xl">
        {/* Real Graduate Cutout Photo from Figma (image 32) */}
        <div className="absolute inset-0 flex items-end justify-center">
          <Image
            src="/assets/hero-graduate.png"
            alt="Saylani Qualified Candidate"
            width={501}
            height={476}
            priority
            className="h-[92%] w-auto object-contain object-bottom select-none"
          />
        </div>

        {/* Floating Badge Top Right: Product Designer / Microsoft (Figma Frame) */}
        <div className="absolute right-3 top-6 z-20 flex items-center gap-3 rounded-2xl bg-white p-3 shadow-xl border border-gray-100">
          <div className="flex size-9 items-center justify-center rounded-lg bg-gray-50 p-1.5 shadow-xs">
            <svg className="size-5 shrink-0" viewBox="0 0 21 21" fill="none">
              <rect x="1" y="1" width="9" height="9" fill="#f25022" />
              <rect x="11" y="1" width="9" height="9" fill="#7fba00" />
              <rect x="1" y="11" width="9" height="9" fill="#00a4ef" />
              <rect x="11" y="11" width="9" height="9" fill="#ffb900" />
            </svg>
          </div>
          <div>
            <p className="text-sm font-medium text-black leading-none">Product Deisgner</p>
            <p className="text-xs text-gray-500 mt-1">Microsoft</p>
            <p className="text-sm font-medium text-black mt-1">$12000 Yearly</p>
          </div>
        </div>

        {/* Floating Badge Bottom Left: Motion Designer / Google (Figma Frame) */}
        <div className="absolute bottom-6 left-3 z-20 flex items-center gap-3 rounded-2xl bg-white p-3 shadow-xl border border-gray-100">
          <div className="flex size-9 items-center justify-center rounded-lg bg-gray-50 p-1.5 shadow-xs">
            <svg className="size-5 shrink-0" viewBox="0 0 24 24">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
            </svg>
          </div>
          <div>
            <p className="text-sm font-medium text-black leading-none">Motion Designer</p>
            <p className="text-xs text-gray-500 mt-1">Google</p>
            <p className="text-sm font-medium text-black mt-1">$12000 Yearly</p>
          </div>
        </div>
      </div>
    </div>
  );
}
