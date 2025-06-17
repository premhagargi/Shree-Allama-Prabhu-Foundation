
import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

export const metadata: Metadata = {
  title: {
    default: 'Shree Allama Prabhu Foundation',
    template: '%s | Shree Allama Prabhu Foundation',
  },
  description: 'Empowering communities through education and service. Discover our colleges and initiatives.',
  keywords: ['Shree Allama Prabhu Foundation', 'education', 'charity', 'colleges', 'engineering college', 'arts and science college', 'medical institute'],
  openGraph: {
    title: 'Shree Allama Prabhu Foundation',
    description: 'Empowering communities through education and service.',
    url: 'https://shreeallamaprabhufoundation.org',
    siteName: 'Shree Allama Prabhu Foundation',
    images: [
      {
        url: 'https://shreeallamaprabhufoundation.org/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shree Allama Prabhu Foundation',
    description: 'Empowering communities through education and service.',
    images: ['https://shreeallamaprabhufoundation.org/twitter-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

// GeistSans and GeistMono are imported as objects directly.
// Their '.variable' property provides the CSS variable name.
// Tailwind is configured to use these variable names.

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable} scroll-smooth`}>
      <head>
      </head>
      <body className="font-sans antialiased flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
