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
          <section className="pt-8 pb-10">
            <div className="text-center mb-6">
              <Logo size="lg" />
            </div>

            {/* Speech Bubble */}
            <div className="flex items-start gap-3">
              <span className="text-[40px] flex-shrink-0">🙋🏻‍♂️</span>
              <div className="relative flex-1 p-4 bg-bg-primary rounded-[16px] shadow-card">
                {/* Bubble tail */}
                <div className="absolute left-[-8px] top-4 w-0 h-0 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent border-r-[8px] border-r-bg-primary" />

                <p className="text-headline text-text-primary">
                  Welcome to Korea!
                </p>
                <p className="mt-2 text-subhead text-text-secondary leading-relaxed">
                  This guide is here to help first-time visitors prepare before their trip and find their way through the airport upon arrival.
                </p>
                <p className="mt-2 text-footnote text-text-tertiary">
                  We hope your first moments in Korea become wonderful memories.
                </p>
                <p className="mt-3 pt-3 border-t border-separator text-caption text-text-tertiary">
                  Have feedback or suggestions? Feel free to reach out at{' '}
                  <a href="mailto:konbording@gmail.com" className="text-apple-blue">
                    konbording@gmail.com
                  </a>
                </p>
              </div>
            </div>
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
