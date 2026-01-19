'use client';

import { useState } from 'react';
import { Phone, Flame, Headphones, Stethoscope, Building2, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';

interface EmergencyContact {
  icon: React.ReactNode;
  number: string;
  label: string;
  description: string;
}

const emergencyContacts: EmergencyContact[] = [
  {
    icon: <Phone className="w-5 h-5" />,
    number: '112',
    label: 'Police',
    description: 'Crime, accidents, emergencies',
  },
  {
    icon: <Flame className="w-5 h-5" />,
    number: '119',
    label: 'Fire / Ambulance',
    description: 'Fire, medical emergencies',
  },
  {
    icon: <Headphones className="w-5 h-5" />,
    number: '1330',
    label: 'Tourism Helpline',
    description: '24/7 travel assistance in English',
  },
  {
    icon: <Stethoscope className="w-5 h-5" />,
    number: '1339',
    label: 'Medical Info',
    description: 'Hospital & pharmacy information',
  },
];

export function EmergencyContacts() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="bg-bg-primary rounded-[16px] shadow-card overflow-hidden">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between p-4"
      >
        <div className="flex items-center gap-3">
          <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-[10px] bg-error/10 text-error">
            <Phone className="w-5 h-5" />
          </div>
          <div className="text-left">
            <h3 className="text-headline text-text-primary">Emergency Contacts</h3>
            <p className="text-subhead text-text-secondary">Police, fire, medical & more</p>
          </div>
        </div>
        <div className="text-text-tertiary">
          {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
        </div>
      </button>

      {isExpanded && (
        <div className="px-4 pb-4 space-y-2">
          {emergencyContacts.map((contact) => (
            <a
              key={contact.number}
              href={`tel:${contact.number}`}
              className="flex items-center gap-3 p-3 bg-bg-secondary rounded-[12px] transition-apple active:scale-[0.98]"
            >
              <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-error/10 text-error">
                {contact.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-baseline gap-2">
                  <span className="text-title3 text-text-primary font-semibold">
                    {contact.number}
                  </span>
                  <span className="text-headline text-text-primary">
                    {contact.label}
                  </span>
                </div>
                <p className="text-footnote text-text-secondary">
                  {contact.description}
                </p>
              </div>
            </a>
          ))}

          {/* Embassy Link */}
          <a
            href="https://www.findembassykorea.site/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-3 bg-bg-secondary rounded-[12px] transition-apple active:scale-[0.98]"
          >
            <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-apple-blue/10 text-apple-blue">
              <Building2 className="w-5 h-5" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <span className="text-headline text-text-primary">
                  Find Your Embassy
                </span>
                <ExternalLink className="w-4 h-4 text-text-tertiary" />
              </div>
              <p className="text-footnote text-text-secondary">
                Contact your country's embassy in Korea
              </p>
            </div>
          </a>
        </div>
      )}
    </section>
  );
}
