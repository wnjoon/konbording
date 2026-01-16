'use client';

import Link from 'next/link';
import { ReactNode } from 'react';

interface PhaseCardProps {
  href: string;
  icon: ReactNode;
  title: string;
  description: string;
}

export function PhaseCard({ href, icon, title, description }: PhaseCardProps) {
  return (
    <Link
      href={href}
      className="block w-full p-5 bg-bg-primary rounded-[16px] shadow-card transition-apple hover:shadow-elevated active:scale-[0.98]"
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-[12px] bg-bg-secondary text-2xl">
          {icon}
        </div>
        <div className="flex-1 min-w-0">
          <h2 className="text-headline text-text-primary mb-1">
            {title}
          </h2>
          <p className="text-[clamp(12px,3.2vw,15px)] text-text-secondary whitespace-nowrap">
            {description}
          </p>
        </div>
        <div className="flex-shrink-0 flex items-center justify-center w-6 h-12">
          <svg
            className="w-5 h-5 text-gray-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>
    </Link>
  );
}
