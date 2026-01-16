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
    <div className="p-3 bg-bg-secondary rounded-[12px]">
      {/* Header */}
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between"
      >
        <div className="flex items-center gap-3">
          <div
            className={`flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-[10px] ${
              card.recommended
                ? 'bg-success/20 text-success'
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
        <div className="mt-3">
          <ul className="space-y-1.5 ml-[52px]">
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
              className="flex items-center justify-center gap-2 mt-3 ml-[52px] h-10 bg-bg-primary rounded-[10px] text-footnote text-apple-blue font-medium transition-apple hover:bg-gray-5"
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
  const [isExpanded, setIsExpanded] = useState(false);
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
    <section id="transit-cards" className="bg-bg-primary rounded-[16px] shadow-card overflow-hidden">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between p-4"
      >
        <div className="flex items-center gap-3">
          <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-[10px] bg-apple-blue/10 text-apple-blue">
            <CreditCard className="w-5 h-5" />
          </div>
          <div className="text-left">
            <h3 className="text-headline text-text-primary">Transit Cards</h3>
            <p className="text-subhead text-text-secondary">T-money, Climate Card & more</p>
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
                Korea has an excellent public transit system. You can easily get anywhere by subway or bus. There are <span className="text-apple-blue font-medium">2 main transit cards</span> available at airport convenience stores.
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
          <div id="transit-card-list" className="space-y-2">
            {cardsData.transportCards.map((card) => (
              <TransportCardItem
                key={card.id}
                card={card}
                isExpanded={expandedCard === card.id}
                onToggle={() => handleToggle(card.id)}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
