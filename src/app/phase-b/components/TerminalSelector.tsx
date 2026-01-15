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
        Which terminal are you at?
      </h2>

      <div className="space-y-3">
        <button
          onClick={() => onSelect('1')}
          className={`w-full p-4 rounded-[16px] text-left transition-apple ${
            selected === '1'
              ? 'bg-apple-blue text-white shadow-elevated'
              : 'bg-bg-primary text-text-primary shadow-card hover:shadow-elevated'
          }`}
        >
          <div className="flex items-center gap-3">
            <div
              className={`w-10 h-10 flex items-center justify-center rounded-[10px] ${
                selected === '1'
                  ? 'bg-white/20 text-white'
                  : 'bg-apple-blue/10 text-apple-blue'
              }`}
            >
              <Plane className="w-5 h-5" />
            </div>
            <span className="text-headline font-semibold whitespace-nowrap">
              Incheon International Airport Terminal 1
            </span>
          </div>
        </button>

        <button
          onClick={() => onSelect('2')}
          className={`w-full p-4 rounded-[16px] text-left transition-apple ${
            selected === '2'
              ? 'bg-apple-blue text-white shadow-elevated'
              : 'bg-bg-primary text-text-primary shadow-card hover:shadow-elevated'
          }`}
        >
          <div className="flex items-center gap-3">
            <div
              className={`w-10 h-10 flex items-center justify-center rounded-[10px] ${
                selected === '2'
                  ? 'bg-white/20 text-white'
                  : 'bg-apple-blue/10 text-apple-blue'
              }`}
            >
              <Plane className="w-5 h-5" />
            </div>
            <span className="text-headline font-semibold whitespace-nowrap">
              Incheon International Airport Terminal 2
            </span>
          </div>
        </button>
      </div>
    </section>
  );
}
