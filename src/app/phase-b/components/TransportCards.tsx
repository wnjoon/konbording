'use client';

import { useState } from 'react';
import { CreditCard, Ticket, Star, Check, Banknote, ChevronUp, ChevronDown, ExternalLink, Store } from 'lucide-react';
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
  officialLink?: string;
}

function TransportCardItem({ card, isExpanded, onToggle }: { card: TransportCard; isExpanded: boolean; onToggle: () => void }) {
  return (
    <div className="bg-bg-primary rounded-[16px] shadow-card overflow-hidden">
      {/* Collapsed Header */}
      <button
        onClick={onToggle}
        className="w-full p-4 flex items-center justify-between"
      >
        <div className="flex items-center gap-3">
          <div
            className={`flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-[10px] ${
              card.recommended
                ? 'bg-success/10 text-success'
                : 'bg-apple-blue/10 text-apple-blue'
            }`}
          >
            {iconMap[card.icon]}
          </div>
          <div className="text-left">
            <div className="flex items-center gap-2">
              <h3 className="text-headline text-text-primary">{card.name}</h3>
              {card.recommended && (
                <span className="flex items-center gap-1 px-2 py-0.5 bg-success/10 rounded-full">
                  <Star className="w-3 h-3 text-success fill-current" />
                  <span className="text-caption text-success font-medium">Recommended</span>
                </span>
              )}
            </div>
            <p className="text-subhead text-text-secondary mt-0.5">{card.description}</p>
          </div>
        </div>
        <div className="flex-shrink-0 text-text-tertiary">
          {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
        </div>
      </button>

      {/* Expanded Content */}
      {isExpanded && (
        <div className="px-4 pb-4 pt-0">
          <ul className="space-y-1.5 border-t border-separator pt-3">
            {card.details.map((detail, index) => (
              <li key={index} className="flex items-start gap-2">
                <Check className="w-4 h-4 flex-shrink-0 mt-0.5 text-success" />
                <span className="text-footnote text-text-secondary">{detail}</span>
              </li>
            ))}
          </ul>

          {/* Official link */}
          {card.officialLink && (
            <a
              href={card.officialLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 mt-3 w-full h-10 bg-bg-secondary rounded-[10px] text-footnote text-apple-blue font-medium transition-apple hover:bg-gray-5"
            >
              <span>Learn more about {card.name}</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      )}
    </div>
  );
}

export function TransportCards() {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  const handleToggle = (cardId: string) => {
    setExpandedCard(expandedCard === cardId ? null : cardId);
  };

  const scrollToExchange = () => {
    const exchangeSection = document.getElementById('currency-exchange');
    if (exchangeSection) {
      exchangeSection.scrollIntoView({ behavior: 'smooth' });
      exchangeSection.classList.add('ring-2', 'ring-apple-blue', 'ring-offset-8', 'ring-offset-bg-secondary');
      setTimeout(() => {
        exchangeSection.classList.remove('ring-2', 'ring-apple-blue', 'ring-offset-8', 'ring-offset-bg-secondary');
      }, 2000);
    }
  };

  const scrollToStore = () => {
    const storeSection = document.getElementById('convenience-store');
    if (storeSection) {
      storeSection.scrollIntoView({ behavior: 'smooth' });
      storeSection.classList.add('ring-2', 'ring-apple-blue', 'ring-offset-8', 'ring-offset-bg-secondary');
      setTimeout(() => {
        storeSection.classList.remove('ring-2', 'ring-apple-blue', 'ring-offset-8', 'ring-offset-bg-secondary');
      }, 2000);
    }
  };

  return (
    <section>
      <h2 className="text-footnote text-text-secondary uppercase tracking-wider px-1 mb-3">
        Transit Cards
      </h2>

      {/* Speech Bubble */}
      <div className="flex items-start gap-3 mb-4">
        <span className="text-[32px] flex-shrink-0">🤵‍♂️</span>
        <div className="relative flex-1 p-4 bg-bg-primary rounded-[16px] shadow-card">
          {/* Bubble tail */}
          <div className="absolute left-[-8px] top-4 w-0 h-0 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent border-r-[8px] border-r-bg-primary" />

          <p className="text-subhead text-text-primary leading-relaxed">
            Korea has an excellent public transit system. You can easily get anywhere by subway or bus. There are{' '}
            <button
              onClick={() => {
                const cardList = document.getElementById('transit-card-list');
                if (cardList) {
                  cardList.scrollIntoView({ behavior: 'smooth' });
                  cardList.classList.add('ring-2', 'ring-apple-blue', 'ring-offset-8', 'ring-offset-bg-secondary');
                  setTimeout(() => {
                    cardList.classList.remove('ring-2', 'ring-apple-blue', 'ring-offset-8', 'ring-offset-bg-secondary');
                  }, 2000);
                }
              }}
              className="text-apple-blue font-medium underline underline-offset-2 cursor-pointer"
            >
              2 main transit cards
            </button>
            {' '}available at airport convenience stores.
          </p>
          <p className="mt-2 text-footnote text-warning">
            <span>‼️</span>{' '}
            <span className="font-bold">Cash payment only! Make sure to exchange currency first.</span>
          </p>

          <div className="flex flex-col gap-2 mt-3">
            <button
              onClick={scrollToExchange}
              className="flex items-center justify-center gap-2 h-10 bg-apple-blue rounded-[10px] text-footnote text-white font-medium transition-apple hover:bg-apple-blue/90 active:scale-[0.98]"
            >
              <Banknote className="w-4 h-4" />
              <span>Currency Exchange</span>
            </button>
            <button
              onClick={scrollToStore}
              className="flex items-center justify-center gap-2 h-10 bg-apple-blue rounded-[10px] text-footnote text-white font-medium transition-apple hover:bg-apple-blue/90 active:scale-[0.98]"
            >
              <Store className="w-4 h-4" />
              <span>Convenience Store</span>
            </button>
          </div>
        </div>
      </div>

      {/* Card List */}
      <div id="transit-card-list" className="space-y-3 rounded-[20px] transition-all duration-300">
        {cardsData.transportCards.map((card) => (
          <TransportCardItem
            key={card.id}
            card={card}
            isExpanded={expandedCard === card.id}
            onToggle={() => handleToggle(card.id)}
          />
        ))}
      </div>
    </section>
  );
}
