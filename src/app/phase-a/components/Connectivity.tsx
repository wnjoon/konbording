'use client';

import { useState } from 'react';
import { Wifi, Smartphone, ExternalLink } from 'lucide-react';
import linksData from '@/data/links.json';

type ConnectionType = 'esim' | 'physical' | null;

export function Connectivity() {
  const [supportsEsim, setSupportsEsim] = useState<ConnectionType>(null);

  return (
    <section>
      <h2 className="text-footnote text-text-secondary uppercase tracking-wider px-1 mb-3">
        Connectivity
      </h2>

      <div className="p-4 bg-bg-primary rounded-[16px] shadow-card">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 flex items-center justify-center rounded-[10px] bg-apple-blue/10 text-apple-blue">
            <Wifi className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-headline text-text-primary">Stay Connected</h3>
            <p className="text-subhead text-text-secondary">Get internet in Korea</p>
          </div>
        </div>

        {/* eSIM Question */}
        <div className="mb-4">
          <p className="text-body text-text-primary mb-3">
            Does your phone support eSIM?
          </p>
          <div className="flex gap-2">
            <button
              onClick={() => setSupportsEsim('esim')}
              className={`flex-1 h-11 rounded-[10px] text-body font-medium transition-apple ${
                supportsEsim === 'esim'
                  ? 'bg-apple-blue text-white'
                  : 'bg-bg-secondary text-text-primary hover:bg-gray-5'
              }`}
            >
              Yes
            </button>
            <button
              onClick={() => setSupportsEsim('physical')}
              className={`flex-1 h-11 rounded-[10px] text-body font-medium transition-apple ${
                supportsEsim === 'physical'
                  ? 'bg-apple-blue text-white'
                  : 'bg-bg-secondary text-text-primary hover:bg-gray-5'
              }`}
            >
              No
            </button>
          </div>
          <p className="text-caption text-text-tertiary mt-2 px-1">
            Not sure? Check your phone manufacturer's website for eSIM compatibility.
          </p>
        </div>

        {/* Result */}
        {supportsEsim === 'esim' && (
          <div className="p-3 bg-bg-secondary rounded-[10px]">
            <div className="flex items-center gap-2 mb-2">
              <Smartphone className="w-4 h-4 text-apple-blue" />
              <span className="text-headline text-text-primary">eSIM Recommended</span>
            </div>
            <p className="text-subhead text-text-secondary mb-3">
              Buy an eSIM before your trip. Instant activation, no physical card needed.
            </p>
            <div className="flex flex-wrap gap-2">
              {linksData.connectivity.esim.providers.map((provider) => (
                <a
                  key={provider.name}
                  href={provider.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 h-8 bg-bg-primary rounded-full text-footnote text-apple-blue shadow-subtle transition-apple hover:shadow-card"
                >
                  <span>{provider.name}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              ))}
            </div>
          </div>
        )}

        {supportsEsim === 'physical' && (
          <div className="space-y-3">
            {/* USIM Option */}
            <div className="p-3 bg-bg-secondary rounded-[10px]">
              <div className="flex items-center gap-2 mb-2">
                <Smartphone className="w-4 h-4 text-apple-blue" />
                <span className="text-headline text-text-primary">Option 1: USIM</span>
              </div>
              <p className="text-subhead text-text-secondary mb-3">
                Buy a physical SIM card at airport telecom booths or convenience stores. You can also order online for airport pickup.
              </p>
              <a
                href="https://krsim.net/category/esim-usim-wifi/57/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 h-8 bg-bg-primary rounded-full text-footnote text-apple-blue shadow-subtle transition-apple hover:shadow-card w-fit"
              >
                <span>Korea eSIM (USIM)</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Pocket WiFi Option */}
            <div className="p-3 bg-bg-secondary rounded-[10px]">
              <div className="flex items-center gap-2 mb-2">
                <Wifi className="w-4 h-4 text-apple-blue" />
                <span className="text-headline text-text-primary">Option 2: Pocket WiFi</span>
              </div>
              <p className="text-subhead text-text-secondary mb-3">
                {linksData.connectivity.pocketWifi.tip}
              </p>
              <a
                href={linksData.connectivity.pocketWifi.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 h-8 bg-bg-primary rounded-full text-footnote text-apple-blue shadow-subtle transition-apple hover:shadow-card w-fit"
              >
                <span>{linksData.connectivity.pocketWifi.name}</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <div className="mt-3 p-2.5 bg-warning/10 rounded-[8px]">
                <p className="text-caption text-warning font-medium">
                  <span>‼️</span>{' '}
                  <span className="font-bold">Check the Pick-up/Return menu to find the pickup location at your arrival airport.</span>
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
