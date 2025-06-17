
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { newsItems, eventItems, type NewsItem, type EventItem } from './news-data';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, CalendarDays, MapPin, Tag } from 'lucide-react';

export const metadata: Metadata = {
  title: 'News & Events',
  description: 'Stay updated with the latest news, announcements, and upcoming events from Shree Allama Prabhu Foundation and its institutions.',
  keywords: ['news', 'events', 'announcements', 'Shree Allama Prabhu Foundation', 'college news', 'college events'],
};

function NewsCard({ item }: { item: NewsItem }) {
  return (
    <Card className="flex flex-col overflow-hidden"> {/* Removed shadow-lg hover:shadow-xl */}
      <div className="relative w-full h-48">
        <Image
          src={item.imageUrl}
          alt={item.title}
          layout="fill"
          objectFit="cover"
          data-ai-hint={item.dataAiHint}
        />
      </div>
      <CardHeader>
        <CardTitle className="font-headline text-xl leading-tight text-primary">{item.title}</CardTitle>
        <CardDescription className="text-sm text-muted-foreground pt-1">
          <span className="flex items-center">
            <CalendarDays className="h-4 w-4 mr-2" />
            {item.date}
          </span>
          {item.category && (
            <span className="flex items-center mt-1">
              <Tag className="h-4 w-4 mr-2" />
              {item.category}
            </span>
          )}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm text-foreground line-clamp-3">{item.summary}</p>
      </CardContent>
      <CardFooter>
        <Button variant="link" asChild className="text-primary hover:text-accent p-0">
          <Link href={item.link}>
            Read More <ArrowRight className="h-4 w-4 ml-2" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

function EventCard({ item }: { item: EventItem }) {
  return (
    <Card className="flex flex-col overflow-hidden"> {/* Removed shadow-lg hover:shadow-xl */}
      <div className="relative w-full h-48">
        <Image
          src={item.imageUrl}
          alt={item.title}
          layout="fill"
          objectFit="cover"
          data-ai-hint={item.dataAiHint}
        />
      </div>
      <CardHeader>
        <CardTitle className="font-headline text-xl leading-tight text-primary">{item.title}</CardTitle>
        <CardDescription className="text-sm text-muted-foreground pt-1">
          <div className="flex items-center">
            <CalendarDays className="h-4 w-4 mr-2" />
            {item.date} {item.time && `at ${item.time}`}
          </div>
          <div className="flex items-center mt-1">
            <MapPin className="h-4 w-4 mr-2" />
            {item.location}
          </div>
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm text-foreground line-clamp-3">{item.summary}</p>
      </CardContent>
      <CardFooter>
        <Button variant="link" asChild className="text-primary hover:text-accent p-0">
          <Link href={item.link}>
            View Details <ArrowRight className="h-4 w-4 ml-2" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

export default function NewsAndEventsPage() {
  return (
    <div className="bg-background min-h-[calc(100vh-var(--header-height,5rem))] mt-[100px]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-12 text-center">
          <h1 className="font-headline text-4xl sm:text-5xl font-bold text-primary mb-4">
            News & Events
          </h1>
          <p className="text-lg text-foreground max-w-2xl mx-auto">
            Stay informed about the latest happenings, achievements, and upcoming events across the Shree Allama Prabhu Foundation and our institutions.
          </p>
        </header>

        <section className="mb-16">
          <h2 className="font-headline text-3xl font-semibold text-primary mb-8 border-b-2 border-primary pb-2">
            Latest News
          </h2>
          {newsItems.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsItems.map((item) => (
                <NewsCard key={item.id} item={item} />
              ))}
            </div>
          ) : (
            <p className="text-muted-foreground">No news articles to display at the moment. Please check back later.</p>
          )}
        </section>

        <section>
          <h2 className="font-headline text-3xl font-semibold text-primary mb-8 border-b-2 border-primary pb-2">
            Upcoming Events
          </h2>
          {eventItems.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {eventItems.map((item) => (
                <EventCard key={item.id} item={item} />
              ))}
            </div>
          ) : (
            <p className="text-muted-foreground">No upcoming events scheduled. Please check back later for updates.</p>
          )}
        </section>
      </div>
    </div>
  );
}
