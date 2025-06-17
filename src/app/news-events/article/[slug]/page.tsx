'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import { newsItems, eventItems } from '../../news-data';
import Image from 'next/image';
import { CalendarDays, Clock, MapPin } from 'lucide-react';
import { Card } from '@/components/ui/card';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

export default function ArticlePage() {
  const params = useParams();
  const slug = params.slug as string;

  // Find the article in either news or events
  const newsArticle = newsItems.find(item => item.link === `/news-events/article/${slug}`);
  const eventArticle = eventItems.find(item => item.link === `/news-events/event/${slug}`);
  const article = newsArticle || eventArticle;

  if (!article) {
    return (
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-2xl font-bold text-primary">Article not found</h1>
        <p className="mt-4">The article you're looking for doesn't exist.</p>
        <Button asChild className="mt-6">
          <Link href="/news-events">Back to News & Events</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-background min-h-screen">
      <div className="container mx-auto px-4 py-16">
        {/* Back Button */}
        <Button variant="ghost" asChild className="mb-8">
          <Link href="/news-events" className="flex items-center">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to News & Events
          </Link>
        </Button>

        {/* Article Header */}
        <div className="max-w-4xl mx-auto">
          <div className="relative w-full h-[400px] mb-8">
            <Image
              src={article.imageUrl}
              alt={article.title}
              fill
              style={{ objectFit: 'cover' }}
              className="rounded-lg"
              data-ai-hint={article.dataAiHint}
            />
          </div>

          <div className="space-y-6">
            <div>
              <h1 className="font-headline text-3xl md:text-4xl font-bold text-primary mb-4">
                {article.title}
              </h1>
              
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <CalendarDays className="h-4 w-4 mr-2" />
                  {article.date}
                </div>
                {'time' in article && (
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2" />
                    {article.time}
                  </div>
                )}
                {'location' in article && (
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2" />
                    {article.location}
                  </div>
                )}
                {'category' in article && (
                  <span className="px-3 py-1 bg-secondary rounded-full">
                    {article.category}
                  </span>
                )}
              </div>
            </div>

            {/* Article Content */}
            <Card className="p-6">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-foreground">
                  {article.summary}
                </p>
                
                {/* Additional content would go here */}
                <p className="mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                
                <p className="mt-4">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </div>
            </Card>

            {/* Call to Action */}
            {'link' in article && article.link && (
              <div className="text-center mt-8">
                <Button size="lg" asChild>
                  <Link href={article.link}>
                    Learn More
                  </Link>
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 