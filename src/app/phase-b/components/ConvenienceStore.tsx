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

function StoreItemCard({ store }: { store: StoreItem }) {
  const hasBadge = store.featured || store.note;

  return (
    <div className="p-3 bg-bg-secondary rounded-[12px]">
      {hasBadge && (
        <div className="mb-2">
          {store.featured && (
            <span className="inline-block px-2 py-0.5 bg-success/10 text-success text-caption font-medium rounded-full">
              24-hour service
            </span>
          )}
          {store.note && !store.featured && (
            <span className="inline-block px-2 py-0.5 bg-bg-primary text-text-secondary text-caption rounded-full">
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
  const [isExpanded, setIsExpanded] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const terminalData = storesData.terminals[terminal];

  if (!terminalData || terminalData.stores.length === 0) {
    return (
      <section id="convenience-store" className="bg-bg-primary rounded-[16px] shadow-card overflow-hidden">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full flex items-center justify-between p-4"
        >
          <div className="flex items-center gap-3">
            <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-[10px] bg-apple-blue/10 text-apple-blue">
              <Store className="w-5 h-5" />
            </div>
            <div className="text-left">
              <h3 className="text-headline text-text-primary">Convenience Store</h3>
              <p className="text-subhead text-text-secondary">Buy transit cards here</p>
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
                Convenience store information for {terminalData?.name || `Terminal ${terminal}`} coming soon.
              </p>
            </div>
          </div>
        )}
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
    <section id="convenience-store" className="bg-bg-primary rounded-[16px] shadow-card overflow-hidden">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between p-4"
      >
        <div className="flex items-center gap-3">
          <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-[10px] bg-apple-blue/10 text-apple-blue">
            <Store className="w-5 h-5" />
          </div>
          <div className="text-left">
            <h3 className="text-headline text-text-primary">Convenience Store</h3>
            <p className="text-subhead text-text-secondary">{sortedStores.length} locations in {terminalData.name}</p>
          </div>
        </div>
        <div className="text-text-tertiary">
          {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
        </div>
      </button>

      {isExpanded && (
        <div className="px-4 pb-4 space-y-2">
          {displayedStores.map((store) => (
            <StoreItemCard key={store.id} store={store} />
          ))}

          {hasMore && !showAll && (
            <button
              onClick={() => setShowAll(true)}
              className="w-full flex items-center justify-center gap-2 py-3 text-body text-apple-blue"
            >
              <span>Show {sortedStores.length - 1} more locations</span>
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

              {terminalData.allStoresUrl && (
                <a
                  href={terminalData.allStoresUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 text-body text-apple-blue"
                >
                  <span>View all store locations</span>
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
