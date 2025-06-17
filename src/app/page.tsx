'use client';

import React, { useState, useEffect } from 'react';
import CollegeCard from '@/components/college-card';
import { colleges } from '@/app/college/college-data';
import { Button } from '@/components/ui/button';
import { Users, BookOpen, HeartHandshake, ArrowRight, Newspaper } from 'lucide-react';
import { newsItems, eventItems, type NewsItem, type EventItem } from './news-events/news-data';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { CalendarDays } from 'lucide-react';


// Small card for news/event previews on homepage
function PreviewCard({ item, type }: { item: NewsItem | EventItem; type: 'news' | 'event' }) {
  const newsPageLink = `/news-events#${type === 'news' ? 'news-item' : 'event-item'}-${item.id}`;
  return (
    <Card className="h-full flex flex-col"> {/* Removed shadow-md hover:shadow-lg */}
      <Link href={newsPageLink} className="block h-full flex flex-col">
        <div className="relative w-full h-40">
        <Image
    src={item.imageUrl}
    alt={item.title}
    fill
    style={{ objectFit: 'cover' }}
    className="rounded-none"
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
        <div className="p-4 pt-0 mt-auto">
           <Button variant="link" asChild className="text-primary hover:text-accent p-0 text-sm">
            {/* The parent Link handles navigation, this is for visual consistency */}
            <span>
              {type === 'news' ? 'Read More' : 'View Details'} <ArrowRight className="h-4 w-4 ml-1" />
            </span>
          </Button>
        </div>
      </Link>
    </Card>
  );
}


export default function HomePage() {
  const latestNews = newsItems.slice(0, 2);
  const upcomingEvents = eventItems.slice(0, 1);

  return (
    <div className="bg-background">
      {/* College Sections - Full Viewport Height */}
      <section className="flex flex-col md:flex-row h-screen -mt-24">
        {colleges.map((college) => (
          <CollegeCard key={college.id} college={college} />
        ))}
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
            <div className="p-8 bg-card rounded-none"> {/* Removed rounded-lg shadow-lg hover:shadow-xl */}
              <BookOpen className="h-16 w-16 mx-auto mb-6 text-accent" />
              <h3 className="font-headline text-2xl font-semibold mb-3 text-primary">Quality Education</h3>
              <p className="text-base text-muted-foreground">Providing comprehensive learning experiences across diverse disciplines to foster intellectual growth.</p>
            </div>
            <div className="p-8 bg-card rounded-none"> {/* Removed rounded-lg shadow-lg hover:shadow-xl */}
              <Users className="h-16 w-16 mx-auto mb-6 text-accent" />
              <h3 className="font-headline text-2xl font-semibold mb-3 text-primary">Community Empowerment</h3>
              <p className="text-base text-muted-foreground">Uplifting communities through various social, economic, and educational initiatives.</p>
            </div>
            <div className="p-8 bg-card rounded-none"> {/* Removed rounded-lg shadow-lg hover:shadow-xl */}
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
