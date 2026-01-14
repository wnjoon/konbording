'use client';

import { Plane } from 'lucide-react';

type Terminal = '1' | '2' | null;

interface TerminalSelectorProps {
  selected: Terminal;
  onSelect: (terminal: Terminal) => void;
}

export function TerminalSelector({ selected, onSelect }: TerminalSelectorProps) {
  return (
    <section>
      <h2 className="text-footnote text-text-secondary uppercase tracking-wider px-1 mb-3">
        Incheon International Airport
      </h2>

      <div className="p-4 bg-bg-primary rounded-[16px] shadow-card">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 flex items-center justify-center rounded-[10px] bg-apple-blue/10 text-apple-blue">
            <Plane className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-headline text-text-primary">Which terminal are you at?</h3>
            <p className="text-subhead text-text-secondary">Select your terminal to get started</p>
          </div>
        </div>

        <div className="flex gap-3">
          <button
            onClick={() => onSelect('1')}
            className={`flex-1 h-14 rounded-[12px] text-body font-semibold transition-apple ${
              selected === '1'
                ? 'bg-apple-blue text-white shadow-elevated'
                : 'bg-bg-secondary text-text-primary hover:bg-gray-5'
            }`}
          >
            Terminal 1
          </button>
          <button
            onClick={() => onSelect('2')}
            className={`flex-1 h-14 rounded-[12px] text-body font-semibold transition-apple ${
              selected === '2'
                ? 'bg-apple-blue text-white shadow-elevated'
                : 'bg-bg-secondary text-text-primary hover:bg-gray-5'
            }`}
          >
            Terminal 2
          </button>
        </div>
      </div>
    </section>
  );
}
