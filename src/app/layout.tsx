
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
  description: 'Empowering communities through education and service. Discover our colleges, news, events, and initiatives.',
  keywords: ['Shree Allama Prabhu Foundation', 'education', 'charity', 'colleges', 'engineering college', 'arts and science college', 'medical institute', 'news', 'events'],
  openGraph: {
    title: 'Shree Allama Prabhu Foundation',
    description: 'Empowering communities through education and service. Discover our colleges, news, events, and initiatives.',
    url: 'https://shreeallamaprabhufoundation.org', // Replace with your actual domain
    siteName: 'Shree Allama Prabhu Foundation',
    images: [
      {
        url: 'https://placehold.co/1200x630.png', // Updated to placehold.co
        width: 1200,
        height: 630,
        alt: 'Shree Allama Prabhu Foundation Social Preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shree Allama Prabhu Foundation',
    description: 'Empowering communities through education and service. Discover our colleges, news, events, and initiatives.',
    images: ['https://placehold.co/1200x630.png'], // Updated to placehold.co
    // site: '@YourTwitterHandle', // Optional: Add your Twitter handle
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
  // Adding a manifest file is good practice for PWA capabilities
  // manifest: '/site.webmanifest', // Example: create this file in public/
  // themeColor: '#FFC107', // Match your primary color
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable} scroll-smooth`}>
      <head>
        {/* Additional head elements like favicons can go here */}
        {/* Example: <link rel="icon" href="/favicon.ico" sizes="any" /> */}
        {/* Example: <link rel="apple-touch-icon" href="/apple-touch-icon.png" /> */}
      </head>
      <body className="font-sans antialiased flex flex-col min-h-screen bg-background text-foreground">
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
