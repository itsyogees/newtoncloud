import type {Metadata} from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TawkChat from '@/components/TawkChat';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'NewtonCloud | High-Performance Cloud Hosting & Domain Services',
    template: '%s | NewtonCloud'
  },
  description: 'NewtonCloud offers lightning-fast cloud hosting, secure VPS, dedicated servers, and domain registration. 99.9% uptime guarantee and 24/7 expert support.',
  keywords: ['cloud hosting', 'VPS hosting', 'domain registration', 'dedicated servers', 'NewtonCloud', 'secure hosting'],
  authors: [{ name: 'NewtonCloud Team' }],
  openGraph: {
    title: 'NewtonCloud | High-Performance Cloud Hosting',
    description: 'Lightning-fast cloud hosting and domain services for modern businesses.',
    url: 'https://ais-dev-6hwvjtuvkel2qv5gfcdkty-406494126570.asia-southeast1.run.app',
    siteName: 'NewtonCloud',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NewtonCloud | High-Performance Cloud Hosting',
    description: 'Lightning-fast cloud hosting and domain services for modern businesses.',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className} suppressHydrationWarning>
        <Navbar />
        {children}
        <Footer />
        <TawkChat />
      </body>
    </html>
  );
}
