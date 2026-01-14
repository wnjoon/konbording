import type { Metadata } from 'next';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import './globals.css';

export const metadata: Metadata = {
  title: 'Korea Onbording - Your First 24 Hours in Korea',
  description: 'Essential survival guide for foreign tourists visiting Korea. Get ready before your flight or find help right after arrival.',
  keywords: ['Korea travel', 'Korea tourist guide', 'Incheon airport guide', 'Korea travel tips', 'Korea survival guide'],
  openGraph: {
    title: 'Korea Onbording - Your First 24 Hours in Korea',
    description: 'Essential survival guide for foreign tourists visiting Korea.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
