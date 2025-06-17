import type { Metadata } from 'next';
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
    url: 'https://shreeallamaprabhufoundation.org', // Replace with actual domain
    siteName: 'Shree Allama Prabhu Foundation',
    images: [
      {
        url: 'https://shreeallamaprabhufoundation.org/og-image.png', // Replace with actual OG image URL
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
    // site: '@yourtwitterhandle', // Optional: if foundation has a Twitter account
    // creator: '@creatorhandle', // Optional
    images: ['https://shreeallamaprabhufoundation.org/twitter-image.png'], // Replace
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased flex flex-col min-h-screen">
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
