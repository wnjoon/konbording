'use client';

import { QrCode, FileCheck, ExternalLink, AlertCircle, CheckCircle } from 'lucide-react';
import linksData from '@/data/links.json';

const iconMap: Record<string, React.ReactNode> = {
  'qr-code': <QrCode className="w-5 h-5" />,
  'file-check': <FileCheck className="w-5 h-5" />,
};

export function EntryDocs() {
  return (
    <section>
      <h2 className="text-footnote text-text-secondary uppercase tracking-wider px-1 mb-3">
        Entry Documents
      </h2>

      <div className="space-y-3">
        {linksData.entryDocs.map((doc) => {
          const isRequired = doc.tip.toLowerCase().includes('required');

          return (
            <a
              key={doc.id}
              href={doc.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 bg-bg-primary rounded-[16px] shadow-card transition-apple hover:shadow-elevated active:scale-[0.99]"
            >
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-[10px] bg-apple-blue/10 text-apple-blue">
                  {iconMap[doc.icon]}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h3 className="text-headline text-text-primary">{doc.name}</h3>
                    <ExternalLink className="w-3.5 h-3.5 text-gray-3" />
                  </div>
                  <div className="flex items-center gap-1 mt-1">
                    {isRequired ? (
                      <>
                        <AlertCircle className="w-3.5 h-3.5 text-warning" />
                        <span className="text-caption text-warning font-medium">{doc.tip}</span>
                      </>
                    ) : (
                      <>
                        <CheckCircle className="w-3.5 h-3.5 text-success" />
                        <span className="text-caption text-success font-medium">{doc.tip}</span>
                      </>
                    )}
                  </div>
                </div>
              </div>
              <p className="text-subhead text-text-secondary mt-3">{doc.description}</p>
            </a>
          );
        })}
      </div>
    </section>
  );
}
