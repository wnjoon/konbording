'use client';

import { useState } from 'react';
import { ThemeToggle } from '@/components/common/ThemeToggle';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { TerminalSelector } from './components/TerminalSelector';
import { CurrencyExchange } from './components/CurrencyExchange';
import { TelecomCenters } from './components/TelecomCenters';
import { TransportCards } from './components/TransportCards';
import { ConvenienceStore } from './components/ConvenienceStore';
import { EssentialAppsReminder } from './components/EssentialAppsReminder';

type Terminal = '1' | '2' | null;

export default function PhaseB() {
  const [terminal, setTerminal] = useState<Terminal>(null);

  return (
    <div className="min-h-screen bg-bg-secondary">
      <div className="mx-auto max-w-[430px] min-h-screen bg-bg-secondary">
        {/* Header */}
        <header className="sticky top-0 z-10 bg-bg-secondary/80 backdrop-blur-lg">
          <div className="flex items-center justify-between px-5 py-4">
            <Link
              href="/"
              className="flex items-center gap-2 text-apple-blue text-body"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back</span>
            </Link>
            <ThemeToggle />
          </div>
        </header>

        {/* Main Content */}
        <main className="px-5 pb-12">
          <section className="pt-4 pb-8">
            <h1 className="text-large-title text-text-primary">
              Just Arrived
            </h1>
            <p className="mt-2 text-[clamp(12px,3.2vw,15px)] text-text-secondary whitespace-nowrap">
              Your guide to getting from the airport to Seoul
            </p>
          </section>

          <TerminalSelector selected={terminal} onSelect={setTerminal} />

          {terminal && (
            <div className="mt-10">
              <p className="text-footnote text-text-secondary uppercase tracking-wider px-1 mb-4">
                {/* Terminal {terminal} Guide */}
                Before you leave the airport
              </p>
              <div className="space-y-4">
                <CurrencyExchange terminal={terminal} />
                <TelecomCenters terminal={terminal} />
                <TransportCards />
                <ConvenienceStore terminal={terminal} />
                <EssentialAppsReminder />
                {/* Transport Guide will be added here */}
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
