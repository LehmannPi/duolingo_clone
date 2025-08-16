import type { Metadata } from 'next';

import { Toaster } from '@/components/ui/sonner';
import { ClerkProvider } from '@clerk/nextjs';
import { Nunito } from 'next/font/google';
import './globals.css';
import { ExitModal } from '@/components/modals/exit-modal';

const font = Nunito({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Lingo – Language Learning SaaS',
  description:
    'Lingo is a language learning platform inspired by Duolingo. Choose a course, enjoy guided lessons, beautiful design, characters, audio & visual effects.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={font.className}>
          <Toaster />
          <ExitModal />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
