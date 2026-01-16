import { ThemeToggle } from '@/components/common/ThemeToggle';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { EssentialApps } from './components/EssentialApps';
import { Connectivity } from './components/Connectivity';
import { EntryDocs } from './components/EntryDocs';

export default function PhaseA() {
  return (
    <div className="min-h-screen bg-bg-secondary">
      <div className="mx-auto max-w-[430px] min-h-screen bg-bg-secondary">
        {/* Header */}
        <header className="sticky top-0 z-10 bg-bg-secondary/80 backdrop-blur-lg">
          <div className="flex items-center justify-between px-5 py-4">
            <Link
              href="/"
              className="flex items-center gap-2 text-apple-blue text-body"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back</span>
            </Link>
            <ThemeToggle />
          </div>
        </header>

        {/* Main Content */}
        <main className="px-5 pb-12">
          {/* Page Title */}
          <section className="pt-4 pb-6">
            <h1 className="text-large-title text-text-primary">
              Preparing to Leave
            </h1>
            <p className="mt-2 text-[clamp(13px,3.8vw,15px)] text-text-secondary whitespace-nowrap">
              Get ready before your flight to Korea
            </p>
          </section>

          {/* Content Sections */}
          <div className="space-y-8">
            <EssentialApps />
            <Connectivity />
            <EntryDocs />
          </div>
        </main>
      </div>
    </div>
  );
}
