'use client';

import { useState } from 'react';
import { ThemeToggle } from '@/components/common/ThemeToggle';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { TerminalSelector } from './components/TerminalSelector';
import { CurrencyExchange } from './components/CurrencyExchange';
import { TransportCards } from './components/TransportCards';

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
            <p className="mt-2 text-subhead text-text-secondary">
              Your guide to getting from the airport to Seoul
            </p>
          </section>

          <div className="space-y-6">
            <TerminalSelector selected={terminal} onSelect={setTerminal} />

            {terminal && (
              <>
                <CurrencyExchange terminal={terminal} />
                <TransportCards />
                {/* Transport Guide will be added here */}
              </>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
