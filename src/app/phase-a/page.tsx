import { Logo } from '@/components/common/Logo';
import { ThemeToggle } from '@/components/common/ThemeToggle';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

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
          <section className="pt-4 pb-8">
            <h1 className="text-large-title text-text-primary">
              Preparing to Leave
            </h1>
            <p className="mt-2 text-subhead text-text-secondary">
              Get ready before your flight to Korea
            </p>
          </section>

          {/* Placeholder Content */}
          <section className="py-12 text-center">
            <div className="text-6xl mb-4">🛫</div>
            <p className="text-body text-text-secondary">
              Coming soon...
            </p>
            <p className="mt-2 text-footnote text-text-tertiary">
              Connectivity, Apps, Documents & More
            </p>
          </section>
        </main>
      </div>
    </div>
  );
}
