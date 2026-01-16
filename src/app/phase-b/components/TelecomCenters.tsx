'use client';

import { useState } from 'react';
import { MapPin, Clock, ExternalLink, ChevronDown, ChevronUp, Wifi } from 'lucide-react';
import telecomData from '@/data/telecom.json';

interface TelecomCenter {
  id: string;
  name: string;
  hours: string;
  location: string;
  mapUrl: string;
  featured?: boolean;
}

interface TelecomCentersProps {
  terminal: '1' | '2';
}

function CenterItem({ center }: { center: TelecomCenter }) {
  const is24h = center.hours === '00:00 ~ 24:00';

  return (
    <div className="p-3 bg-bg-secondary rounded-[12px]">
      {is24h && (
        <div className="mb-2">
          <span className="inline-block px-2 py-0.5 bg-success/10 text-success text-caption font-medium rounded-full">
            24-hour service
          </span>
        </div>
      )}

      <div className="flex items-start justify-between gap-3">
        <h3 className="text-headline text-text-primary">
          {center.name}
        </h3>
        <a
          href={center.mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-shrink-0 w-9 h-9 flex items-center justify-center rounded-full bg-apple-blue/10 text-apple-blue transition-apple hover:bg-apple-blue/20"
        >
          <MapPin className="w-4 h-4" />
        </a>
      </div>

      <div className="mt-2 space-y-1">
        <div className="flex items-start gap-2">
          <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5 text-text-tertiary" />
          <span className="text-footnote text-text-secondary flex-1">
            {center.location}
          </span>
        </div>
        <div className="flex items-start gap-2">
          <Clock className="w-4 h-4 flex-shrink-0 mt-0.5 text-text-tertiary" />
          <span className="text-footnote text-text-secondary flex-1">
            {center.hours}
          </span>
        </div>
      </div>
    </div>
  );
}

export function TelecomCenters({ terminal }: TelecomCentersProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const terminalData = telecomData.terminals[terminal];

  if (!terminalData || terminalData.centers.length === 0) {
    return (
      <section id="telecom-centers" className="bg-bg-primary rounded-[16px] shadow-card overflow-hidden">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full flex items-center justify-between p-4"
        >
          <div className="flex items-center gap-3">
            <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-[10px] bg-apple-blue/10 text-apple-blue">
              <Wifi className="w-5 h-5" />
            </div>
            <div className="text-left">
              <h3 className="text-headline text-text-primary">Buy Internet at Airport</h3>
              <p className="text-subhead text-text-secondary">SIM cards & WiFi rental</p>
            </div>
          </div>
          <div className="text-text-tertiary">
            {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
          </div>
        </button>
        {isExpanded && (
          <div className="px-4 pb-4">
            <div className="p-3 bg-bg-secondary rounded-[12px]">
              <p className="text-body text-text-secondary text-center">
                Telecom center information for {terminalData?.name || `Terminal ${terminal}`} coming soon.
              </p>
            </div>
          </div>
        )}
      </section>
    );
  }

  // Sort centers: 24h first
  const sortedCenters = [...terminalData.centers].sort((a, b) => {
    const aIs24h = a.hours === '00:00 ~ 24:00';
    const bIs24h = b.hours === '00:00 ~ 24:00';
    if (aIs24h && !bIs24h) return -1;
    if (!aIs24h && bIs24h) return 1;
    return 0;
  });

  const displayedCenters = showAll ? sortedCenters : sortedCenters.slice(0, 1);
  const hasMore = sortedCenters.length > 1;

  return (
    <section id="telecom-centers" className="bg-bg-primary rounded-[16px] shadow-card overflow-hidden">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between p-4"
      >
        <div className="flex items-center gap-3">
          <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-[10px] bg-apple-blue/10 text-apple-blue">
            <Wifi className="w-5 h-5" />
          </div>
          <div className="text-left">
            <h3 className="text-headline text-text-primary">Buy Internet at Airport</h3>
            <p className="text-subhead text-text-secondary">{sortedCenters.length} locations in {terminalData.name}</p>
          </div>
        </div>
        <div className="text-text-tertiary">
          {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
        </div>
      </button>

      {isExpanded && (
        <div className="px-4 pb-4 space-y-2">
          {/* Speech Bubble */}
          <div className="flex items-start gap-3">
            <span className="text-[32px] flex-shrink-0">🤵‍♂️</span>
            <div className="relative flex-1 p-4 bg-bg-secondary rounded-[12px]">
              {/* Bubble tail */}
              <div className="absolute left-[-8px] top-4 w-0 h-0 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent border-r-[8px] border-r-bg-secondary" />
              <p className="text-subhead text-text-primary leading-relaxed">
                Didn't book internet in advance? No problem! You can buy SIM cards or rent WiFi devices at these locations.
              </p>
            </div>
          </div>

          {displayedCenters.map((center) => (
            <CenterItem key={center.id} center={center} />
          ))}

          {hasMore && !showAll && (
            <button
              onClick={() => setShowAll(true)}
              className="w-full flex items-center justify-center gap-2 py-3 text-body text-apple-blue"
            >
              <span>Show {sortedCenters.length - 1} more locations</span>
              <ChevronDown className="w-4 h-4" />
            </button>
          )}

          {showAll && (
            <>
              <button
                onClick={() => setShowAll(false)}
                className="w-full flex items-center justify-center gap-2 py-3 text-body text-text-secondary"
              >
                <span>Show less</span>
                <ChevronUp className="w-4 h-4" />
              </button>

              {terminalData.allCentersUrl && (
                <a
                  href={terminalData.allCentersUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 text-body text-apple-blue"
                >
                  <span>View all telecom locations</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </>
          )}
        </div>
      )}
    </section>
  );
}
