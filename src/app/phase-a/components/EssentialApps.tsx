'use client';

import Image from 'next/image';
import { Star } from 'lucide-react';
import appsData from '@/data/apps.json';

function AppStoreButtons({ appStore, playStore }: { appStore: string; playStore: string }) {
  const handleClick = (e: React.MouseEvent, url: string) => {
    e.preventDefault();
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="flex gap-2 mt-3">
      <button
        onClick={(e) => handleClick(e, appStore)}
        className="flex-1 flex items-center justify-center gap-1.5 h-9 bg-bg-secondary rounded-lg text-footnote text-text-primary transition-apple hover:bg-gray-5 active:scale-[0.98]"
      >
        <span>App Store</span>
      </button>
      <button
        onClick={(e) => handleClick(e, playStore)}
        className="flex-1 flex items-center justify-center gap-1.5 h-9 bg-bg-secondary rounded-lg text-footnote text-text-primary transition-apple hover:bg-gray-5 active:scale-[0.98]"
      >
        <span>Play Store</span>
      </button>
    </div>
  );
}

function EssentialAppCard({ app }: { app: typeof appsData.essential[0] }) {
  return (
    <div className="p-4 bg-bg-primary rounded-[16px] shadow-card">
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
          <h3 className="text-headline text-text-primary">{app.name}</h3>
          <p className="text-subhead text-text-secondary mt-0.5">{app.description}</p>
        </div>
      </div>
      <AppStoreButtons appStore={app.appStore} playStore={app.playStore} />
    </div>
  );
}

interface TaxiApp {
  id: string;
  name: string;
  tagline: string;
  description: string;
  icon: string;
  recommended: boolean;
  appStore: string;
  playStore: string;
}

function TaxiAppCard({ app }: { app: TaxiApp }) {
  return (
    <div className={`p-4 rounded-[16px] ${
      app.recommended
        ? 'bg-success shadow-elevated'
        : 'bg-bg-primary shadow-card'
    }`}>
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
            <h3 className={`text-headline ${app.recommended ? 'text-white' : 'text-text-primary'}`}>
              {app.name}
            </h3>
            {app.recommended && (
              <span className="flex items-center gap-1 px-2 py-0.5 bg-white/20 rounded-full">
                <Star className="w-3 h-3 text-white fill-current" />
                <span className="text-caption text-white font-medium">Recommended</span>
              </span>
            )}
          </div>
          <p className={`text-subhead mt-1 ${app.recommended ? 'text-white/90' : 'text-text-secondary'}`}>
            {app.description}
          </p>
        </div>
      </div>
      <div className="flex gap-2 mt-3">
        <button
          onClick={() => window.open(app.appStore, '_blank', 'noopener,noreferrer')}
          className={`flex-1 flex items-center justify-center gap-1.5 h-9 rounded-lg text-footnote transition-apple active:scale-[0.98] ${
            app.recommended
              ? 'bg-white/20 text-white hover:bg-white/30'
              : 'bg-bg-secondary text-text-primary hover:bg-gray-5'
          }`}
        >
          <span>App Store</span>
        </button>
        <button
          onClick={() => window.open(app.playStore, '_blank', 'noopener,noreferrer')}
          className={`flex-1 flex items-center justify-center gap-1.5 h-9 rounded-lg text-footnote transition-apple active:scale-[0.98] ${
            app.recommended
              ? 'bg-white/20 text-white hover:bg-white/30'
              : 'bg-bg-secondary text-text-primary hover:bg-gray-5'
          }`}
        >
          <span>Play Store</span>
        </button>
      </div>
    </div>
  );
}

export function EssentialApps() {
  return (
    <div className="space-y-6">
      {/* Essential Apps Section */}
      <section>
        <h2 className="text-footnote text-text-secondary uppercase tracking-wider px-1 mb-3">
          Essential Apps
        </h2>
        <div className="space-y-3">
          {appsData.essential.map((app) => (
            <EssentialAppCard key={app.id} app={app} />
          ))}
        </div>
      </section>

      {/* Taxi Apps Section */}
      <section>
        <h2 className="text-footnote text-text-secondary uppercase tracking-wider px-1 mb-3">
          Taxi Apps for Korea
        </h2>
        <div className="space-y-3">
          <TaxiAppCard app={appsData.taxi.taba} />
          <TaxiAppCard app={appsData.taxi.kakaoT} />
        </div>
        <p className="text-footnote text-text-tertiary mt-3 px-1">
          Uber is also available in Korea if you prefer.
        </p>
      </section>
    </div>
  );
}
