'use client';

import { useState } from 'react';
import { MapPin, Clock, ExternalLink, ChevronDown, ChevronUp, Store } from 'lucide-react';
import storesData from '@/data/stores.json';

interface StoreItem {
  id: string;
  name: string;
  location: string;
  hours: string;
  mapUrl: string;
  featured?: boolean;
  note?: string;
}

interface ConvenienceStoreProps {
  terminal: '1' | '2';
}

function StoreCard({ store }: { store: StoreItem }) {
  const hasBadge = store.featured || store.note;

  return (
    <div className="p-4 bg-bg-primary rounded-[16px] shadow-card">
      {hasBadge && (
        <div className="mb-2">
          {store.featured && (
            <span className="inline-block px-2 py-0.5 bg-success/10 text-success text-caption font-medium rounded-full">
              24-hour service
            </span>
          )}
          {store.note && !store.featured && (
            <span className="inline-block px-2 py-0.5 bg-bg-secondary text-text-secondary text-caption rounded-full">
              {store.note}
            </span>
          )}
        </div>
      )}

      <div className="flex items-start justify-between gap-3">
        <h3 className="text-headline text-text-primary">
          {store.name}
        </h3>
        <a
          href={store.mapUrl}
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
            {store.location}
          </span>
        </div>
        <div className="flex items-start gap-2">
          <Clock className="w-4 h-4 flex-shrink-0 mt-0.5 text-text-tertiary" />
          <span className="text-footnote text-text-secondary flex-1">
            {store.hours}
          </span>
        </div>
      </div>
    </div>
  );
}

export function ConvenienceStore({ terminal }: ConvenienceStoreProps) {
  const [showAll, setShowAll] = useState(false);
  const terminalData = storesData.terminals[terminal];

  if (!terminalData || terminalData.stores.length === 0) {
    return (
      <section>
        <h2 className="text-footnote text-text-secondary uppercase tracking-wider px-1 mb-3">
          Convenience Store
        </h2>
        <div className="p-4 bg-bg-primary rounded-[16px] shadow-card text-center">
          <p className="text-body text-text-secondary">
            Convenience store information for {terminalData?.name || `Terminal ${terminal}`} coming soon.
          </p>
        </div>
      </section>
    );
  }

  // Sort stores: featured first
  const sortedStores = [...terminalData.stores].sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return 0;
  });

  const displayedStores = showAll ? sortedStores : sortedStores.slice(0, 1);
  const hasMore = sortedStores.length > 1;

  return (
    <section id="convenience-store" className="rounded-[20px] transition-all duration-300">
      <h2 className="text-footnote text-text-secondary uppercase tracking-wider px-1 mb-3">
        Convenience Store
      </h2>

      <div className="space-y-3">
        {displayedStores.map((store) => (
          <StoreCard key={store.id} store={store} />
        ))}
      </div>

      {hasMore && !showAll && (
        <button
          onClick={() => setShowAll(true)}
          className="flex items-center justify-center gap-2 mt-3 w-full h-11 bg-bg-primary rounded-[12px] shadow-card text-body text-apple-blue transition-apple hover:shadow-elevated"
        >
          <span>Show {sortedStores.length - 1} more locations</span>
          <ChevronDown className="w-4 h-4" />
        </button>
      )}

      {showAll && (
        <>
          <button
            onClick={() => setShowAll(false)}
            className="flex items-center justify-center gap-2 mt-3 w-full h-11 bg-bg-secondary rounded-[12px] text-body text-text-secondary transition-apple hover:bg-gray-5"
          >
            <span>Show less</span>
            <ChevronUp className="w-4 h-4" />
          </button>

          {terminalData.allStoresUrl && (
            <a
              href={terminalData.allStoresUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 mt-3 h-11 bg-bg-primary rounded-[12px] shadow-card text-body text-apple-blue transition-apple hover:shadow-elevated"
            >
              <span>View all store locations</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </>
      )}
    </section>
  );
}
