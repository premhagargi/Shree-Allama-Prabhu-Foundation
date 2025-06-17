
'use client';

import React, { useState, useEffect } from 'react';
import CollegeCard from '@/components/college-card';
import { colleges } from '@/app/college/college-data';
import { Button } from '@/components/ui/button';
import { Landmark, Users, BookOpen, HeartHandshake, ArrowRight, Newspaper, CalendarDays } from 'lucide-react';
import { newsItems, eventItems, type NewsItem, type EventItem } from './news-events/news-data'; // Import news/events data
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';


// Small card for news/event previews on homepage
function PreviewCard({ item, type }: { item: NewsItem | EventItem; type: 'news' | 'event' }) {
  const link = type === 'news' ? `/news-events#news-${item.id}` : `/news-events#event-${item.id}`; // Link to section on news page
  return (
    <Card className="shadow-md hover:shadow-lg transition-shadow h-full flex flex-col">
      <div className="relative w-full h-40">
        <Image
          src={item.imageUrl}
          alt={item.title}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
          data-ai-hint={item.dataAiHint}
        />
      </div>
      <CardHeader className="pb-2">
        <CardTitle className="font-headline text-lg text-primary line-clamp-2">{item.title}</CardTitle>
        <CardDescription className="text-xs text-muted-foreground pt-1 flex items-center">
          <CalendarDays className="h-3 w-3 mr-1.5" /> {item.date}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow pt-0">
        <p className="text-sm text-foreground line-clamp-3">{item.summary}</p>
      </CardContent>
      <div className="p-4 pt-0">
        <Button variant="link" asChild className="text-primary hover:text-accent p-0 text-sm">
          <Link href={link}>
            {type === 'news' ? 'Read More' : 'View Details'} <ArrowRight className="h-4 w-4 ml-1" />
          </Link>
        </Button>
      </div>
    </Card>
  );
}


export default function HomePage() {
  const [showHeroContent, setShowHeroContent] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHeroContent(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const latestNews = newsItems.slice(0, 2); // Get first 2 news items
  const upcomingEvents = eventItems.slice(0, 1); // Get first 1 event item


  return (
    <div className="bg-background">
      {/* Animated Hero / College Cards Section */}
      <section className="relative min-h-screen flex flex-col bg-gradient-to-br from-primary to-yellow-600 text-primary-foreground overflow-hidden">
        <div
          className={`absolute inset-0 flex flex-col items-center justify-center text-center p-4 transition-all duration-1000 ease-in-out ${
            showHeroContent ? 'opacity-100 z-10 scale-100' : 'opacity-0 -z-10 scale-95 pointer-events-none'
          }`}
        >
          <Landmark className="h-24 w-24 mx-auto mb-6 text-accent" />
          <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Shree Allama Prabhu Foundation
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10">
            Dedicated to fostering education, empowering communities, and building a brighter future through our esteemed institutions and initiatives.
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold py-3 px-8 rounded-md shadow-lg transition-transform hover:scale-105"
            onClick={() => setShowHeroContent(false)} // Added onClick to also trigger fade
          >
            Explore Our Colleges
          </Button>
        </div>

        <div
          className={`flex-grow flex flex-col w-full transition-all duration-1000 ease-in-out ${
            !showHeroContent ? 'opacity-100 scale-100 z-20 delay-700' : 'opacity-0 scale-100 -z-10 pointer-events-none'
          }`}
        >
          {colleges.map((college) => (
            <CollegeCard key={college.id} college={college} />
          ))}
        </div>
      </section>

      {/* Introduction/About Foundation Section */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl sm:text-4xl font-bold text-primary mb-4">
              Our Mission & Vision
            </h2>
            <p className="text-lg text-foreground max-w-3xl mx-auto">
              Shree Allama Prabhu Foundation is committed to providing accessible, high-quality education and contributing to societal development. We believe in nurturing talent, promoting ethical values, and creating leaders for tomorrow.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-8 bg-card rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <BookOpen className="h-16 w-16 mx-auto mb-6 text-accent" />
              <h3 className="font-headline text-2xl font-semibold mb-3 text-primary">Quality Education</h3>
              <p className="text-base text-muted-foreground">Providing comprehensive learning experiences across diverse disciplines to foster intellectual growth.</p>
            </div>
            <div className="p-8 bg-card rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Users className="h-16 w-16 mx-auto mb-6 text-accent" />
              <h3 className="font-headline text-2xl font-semibold mb-3 text-primary">Community Empowerment</h3>
              <p className="text-base text-muted-foreground">Uplifting communities through various social, economic, and educational initiatives.</p>
            </div>
            <div className="p-8 bg-card rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <HeartHandshake className="h-16 w-16 mx-auto mb-6 text-accent" />
              <h3 className="font-headline text-2xl font-semibold mb-3 text-primary">Ethical Values</h3>
              <p className="text-base text-muted-foreground">Instilling integrity, compassion, and a strong sense of responsibility in all our endeavors.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News & Events Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl sm:text-4xl font-bold text-primary mb-4">
              Stay Updated
            </h2>
            <p className="text-lg text-foreground max-w-3xl mx-auto">
              Discover the latest news and upcoming events from our foundation and institutions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {latestNews.map(item => (
              <PreviewCard key={`news-${item.id}`} item={item} type="news" />
            ))}
            {upcomingEvents.map(item => (
              <PreviewCard key={`event-${item.id}`} item={item} type="event" />
            ))}
            {/* Fallback if no news/events */}
            {latestNews.length === 0 && upcomingEvents.length === 0 && (
              <p className="md:col-span-3 text-center text-muted-foreground">No recent updates. Check back soon!</p>
            )}
          </div>
          <div className="text-center mt-12">
            <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
              <Link href="/news-events">
                View All News & Events <Newspaper className="h-5 w-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
