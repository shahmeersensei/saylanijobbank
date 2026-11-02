'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

function MicrosoftLogo() {
  return (
    <svg viewBox="0 0 21 21" className="size-7" aria-hidden>
      <rect x="0" y="0" width="10" height="10" fill="#F25022" />
      <rect x="11" y="0" width="10" height="10" fill="#7FBA00" />
      <rect x="0" y="11" width="10" height="10" fill="#00A4EF" />
      <rect x="11" y="11" width="10" height="10" fill="#FFB900" />
    </svg>
  );
}

function GoogleLogo() {
  return (
    <svg viewBox="0 0 24 24" className="size-6" aria-hidden>
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.1s.13-1.44.35-2.1V7.06H2.18A10.97 10.97 0 0 0 1 12c0 1.78.43 3.45 1.18 4.94l2.85-2.22.81-.62z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84C6.71 7.3 9.14 5.38 12 5.38z"
        fill="#EA4335"
      />
    </svg>
  );
}

interface JobCardProps {
  icon: React.ReactNode;
  title: string;
  company: string;
  salary: string;
  className?: string;
  delay?: number;
}

function JobCard({ icon, title, company, salary, className, delay = 0 }: JobCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className={`flex h-[95px] w-[203px] items-center gap-4 rounded-[10px] bg-white p-3 shadow-[0_8px_24px_rgba(0,0,0,0.12)] ${className ?? ''}`}
    >
      <div className="flex size-[46px] shrink-0 items-center justify-center rounded-[7px] bg-[#F9F9F9] p-2">
        {icon}
      </div>
      <div className="min-w-0">
        <p className="truncate text-[16px] leading-[22px] font-medium text-black">{title}</p>
        <p className="text-[12px] leading-[17px] font-normal text-black/60">{company}</p>
        <p className="mt-1 text-[16px] leading-[22px] font-medium text-black">{salary}</p>
      </div>
    </motion.div>
  );
}

export function HeroGraphicCard() {
  return (
    <div className="relative mx-auto w-full max-w-[534px]">
      <div className="relative aspect-[534/517] w-full overflow-hidden rounded-[28px] border border-black/10 bg-gradient-to-br from-[#8CC641] to-[#B1DF76]">
        <Image
          src="/assets/image_32_107_2766.png"
          alt="Skilled candidate"
          width={501}
          height={476}
          priority
          className="absolute bottom-0 left-4 h-auto w-[501px] max-w-none"
        />

        <JobCard
          icon={<MicrosoftLogo />}
          title="Product Designer"
          company="Microsoft"
          salary="$12000 Yearly"
          delay={0.2}
          className="absolute top-[172px] left-[315px] hidden lg:flex"
        />

        <div className="absolute bottom-[18px] left-[238px] flex h-3 w-[58px] items-center gap-1 rounded-full bg-[#8CC641] px-0.5">
          <span className="h-2 flex-1 rounded-full bg-white" />
          <span className="h-2 flex-1 rounded-full bg-white/20" />
          <span className="h-2 flex-1 rounded-full bg-white/20" />
        </div>
      </div>

      <JobCard
        icon={<GoogleLogo />}
        title="Motion Designer"
        company="Google"
        salary="$12000 Yearly"
        delay={0.35}
        className="absolute top-[356px] left-[-107px] hidden lg:flex"
      />
    </div>
  );
}
