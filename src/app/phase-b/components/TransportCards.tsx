'use client';

import { CreditCard, Ticket, Star, Check } from 'lucide-react';
import cardsData from '@/data/cards.json';

const iconMap: Record<string, React.ReactNode> = {
  'credit-card': <CreditCard className="w-5 h-5" />,
  'ticket': <Ticket className="w-5 h-5" />,
};

interface TransportCard {
  id: string;
  name: string;
  description: string;
  details: string[];
  icon: string;
  recommended: boolean;
}

function TransportCardItem({ card }: { card: TransportCard }) {
  return (
    <div
      className={`p-4 rounded-[16px] ${
        card.recommended
          ? 'bg-apple-blue shadow-elevated'
          : 'bg-bg-primary shadow-card'
      }`}
    >
      <div className="flex items-start gap-3">
        <div
          className={`flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-[10px] ${
            card.recommended
              ? 'bg-white/20 text-white'
              : 'bg-apple-blue/10 text-apple-blue'
          }`}
        >
          {iconMap[card.icon]}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <h3
              className={`text-headline ${
                card.recommended ? 'text-white' : 'text-text-primary'
              }`}
            >
              {card.name}
            </h3>
            {card.recommended && (
              <span className="flex items-center gap-1 px-2 py-0.5 bg-white/20 rounded-full">
                <Star className="w-3 h-3 text-white fill-current" />
                <span className="text-caption text-white font-medium">Recommended</span>
              </span>
            )}
          </div>
          <p
            className={`text-subhead mt-1 ${
              card.recommended ? 'text-white/90' : 'text-text-secondary'
            }`}
          >
            {card.description}
          </p>
        </div>
      </div>

      <ul className="mt-3 space-y-1.5">
        {card.details.map((detail, index) => (
          <li key={index} className="flex items-start gap-2">
            <Check
              className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                card.recommended ? 'text-white/80' : 'text-success'
              }`}
            />
            <span
              className={`text-footnote ${
                card.recommended ? 'text-white/80' : 'text-text-secondary'
              }`}
            >
              {detail}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function TransportCards() {
  return (
    <section>
      <h2 className="text-footnote text-text-secondary uppercase tracking-wider px-1 mb-3">
        Transit Cards
      </h2>

      <div className="space-y-3">
        {cardsData.transportCards.map((card) => (
          <TransportCardItem key={card.id} card={card} />
        ))}
      </div>
    </section>
  );
}
