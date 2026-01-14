import { Logo } from '@/components/common/Logo';
import { ThemeToggle } from '@/components/common/ThemeToggle';
import { PhaseCard } from '@/components/landing/PhaseCard';

export default function Home() {
  return (
    <div className="min-h-screen bg-bg-secondary">
      {/* Mobile Container */}
      <div className="mx-auto max-w-[430px] min-h-screen bg-bg-secondary">
        {/* Header */}
        <header className="sticky top-0 z-10 bg-bg-secondary/80 backdrop-blur-lg">
          <div className="flex items-center justify-end px-5 py-4">
            <ThemeToggle />
          </div>
        </header>

        {/* Main Content */}
        <main className="px-5 pb-12">
          {/* Hero Section */}
          <section className="pt-8 pb-10 text-center">
            <Logo size="lg" />
            <p className="mt-3 text-subhead text-text-secondary">
              Your First 24 Hours in Korea
            </p>
            <p className="mt-2 text-footnote text-text-tertiary">
              Essential guide for foreign tourists
            </p>
          </section>

          {/* Phase Selection */}
          <section className="space-y-4">
            <h2 className="text-footnote text-text-secondary uppercase tracking-wider px-1 mb-3">
              Where are you now?
            </h2>

            <PhaseCard
              href="/phase-a"
              icon="🛫"
              title="Preparing to Leave"
              description="Get ready before your flight to Korea"
            />

            <PhaseCard
              href="/phase-b"
              icon="🛬"
              title="Just Arrived in Korea"
              description="Find help at the airport right now"
            />
          </section>

          {/* Footer */}
          <footer className="mt-16 text-center">
            <p className="text-caption text-text-tertiary">
              Made for travelers, by travelers
            </p>
          </footer>
        </main>
      </div>
    </div>
  );
}
