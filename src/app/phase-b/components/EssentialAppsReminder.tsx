'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Star, ChevronDown, ChevronUp } from 'lucide-react';
import appsData from '@/data/apps.json';

function AppStoreButtons({ appStore, playStore, isRecommended }: { appStore: string; playStore: string; isRecommended?: boolean }) {
  return (
    <div className="flex gap-2 mt-3">
      <button
        onClick={() => window.open(appStore, '_blank', 'noopener,noreferrer')}
        className={`flex-1 flex items-center justify-center gap-1.5 h-9 rounded-lg text-footnote transition-apple active:scale-[0.98] ${
          isRecommended
            ? 'bg-white/20 text-white hover:bg-white/30'
            : 'bg-bg-primary text-text-primary hover:bg-gray-5'
        }`}
      >
        <span>App Store</span>
      </button>
      <button
        onClick={() => window.open(playStore, '_blank', 'noopener,noreferrer')}
        className={`flex-1 flex items-center justify-center gap-1.5 h-9 rounded-lg text-footnote transition-apple active:scale-[0.98] ${
          isRecommended
            ? 'bg-white/20 text-white hover:bg-white/30'
            : 'bg-bg-primary text-text-primary hover:bg-gray-5'
        }`}
      >
        <span>Play Store</span>
      </button>
    </div>
  );
}

interface AppItem {
  id: string;
  name: string;
  description: string;
  icon: string;
  appStore: string;
  playStore: string;
  recommended?: boolean;
}

function AppItemCard({ app }: { app: AppItem }) {
  const isRecommended = app.recommended;

  return (
    <div
      className={`p-3 rounded-[12px] ${isRecommended ? 'bg-success' : 'bg-bg-secondary'}`}
    >
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0 w-12 h-12 rounded-[12px] overflow-hidden">
          <Image
            src={app.icon}
            alt={`${app.name} icon`}
            width={48}
            height={48}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <h3 className={`text-headline ${isRecommended ? 'text-white' : 'text-text-primary'}`}>
              {app.name}
            </h3>
            {isRecommended && (
              <span className="flex items-center gap-1 px-2 py-0.5 bg-white/20 rounded-full">
                <Star className="w-3 h-3 text-white fill-current" />
                <span className="text-caption text-white font-medium">Recommended</span>
              </span>
            )}
          </div>
          <p className={`text-subhead mt-0.5 ${isRecommended ? 'text-white/90' : 'text-text-secondary'}`}>
            {app.description}
          </p>
          <AppStoreButtons appStore={app.appStore} playStore={app.playStore} isRecommended={isRecommended} />
        </div>
      </div>
    </div>
  );
}

export function EssentialAppsReminder() {
  const [isExpanded, setIsExpanded] = useState(false);

  // Combine essential apps and taxi apps
  const allApps: AppItem[] = [
    ...appsData.essential,
    { ...appsData.taxi.taba, recommended: true },
    { ...appsData.taxi.kakaoT, recommended: false },
  ];

  return (
    <section className="bg-bg-primary rounded-[16px] shadow-card overflow-hidden">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between p-4"
      >
        <div className="flex items-center gap-3">
          <span className="text-2xl">🤔</span>
          <div className="text-left">
            <h3 className="text-headline text-text-primary">Did you forget something?</h3>
            <p className="text-subhead text-text-secondary">Essential apps for your trip</p>
          </div>
        </div>
        <div className="text-text-tertiary">
          {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
        </div>
      </button>

      {isExpanded && (
        <div className="px-4 pb-4 space-y-2">
          {allApps.map((app) => (
            <AppItemCard key={app.id} app={app} />
          ))}
        </div>
      )}
    </section>
  );
}
