'use client';

import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { newsItems, eventItems } from '@/app/news-events/news-data';
import Link from 'next/link';
import { Newspaper, Calendar } from 'lucide-react';

// Format date to a readable string
const formatDate = (date: Date) => {
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });
};

// Combine and format news and events for the ticker
const tickerItems = [
  ...newsItems.map(item => ({
    text: item.title,
    link: item.link,
    type: 'news',
    date: new Date(item.date),
    category: item.category,
    dateStr: formatDate(new Date(item.date))
  })),
  ...eventItems.map(item => ({
    text: item.title,
    link: item.link,
    type: 'event',
    date: new Date(item.date),
    category: item.time,
    dateStr: formatDate(new Date(item.date))
  }))
].sort((a, b) => a.date.getTime() - b.date.getTime()); // Sort by date

export default function NewsTicker() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSliding, setIsSliding] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsSliding(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % tickerItems.length);
        setIsSliding(false);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const currentItem = tickerItems[currentIndex];
  const nextItem = tickerItems[(currentIndex + 1) % tickerItems.length];

  return (
    <div className="w-full h-9 overflow-hidden bg-white border-b border-gray-100 relative">
      <div className="absolute whitespace-nowrap animate-marquee flex items-center h-full">
        {[...tickerItems, ...tickerItems].map((item, index) => (
  <Link 
  key={index}
  href={item.link}
  className="inline-flex items-center h-full px-4 mr-[250px] text-[#8B0000] font-medium hover:text-[#A52A2A] transition-colors group"
>

            <span className="flex items-center gap-2 h-full">
              {item.type === 'news' ? (
                <Newspaper className="h-4 w-4 text-[#8B0000] group-hover:text-[#A52A2A] flex-shrink-0" />
              ) : (
                <Calendar className="h-4 w-4 text-[#8B0000] group-hover:text-[#A52A2A] flex-shrink-0" />
              )}
              <span className="text-xs uppercase tracking-wider font-semibold bg-[#8B0000]/10 text-[#8B0000] px-2 py-0.5 rounded flex-shrink-0">
                {item.type === 'news' ? 'News' : 'Event'}
              </span>
              <span className="text-xs text-gray-600 flex-shrink-0">
                {item.dateStr}
                {item.type === 'event' && item.category && ` • ${item.category}`}
              </span>
              <span className="mx-2 text-gray-300 flex-shrink-0">|</span>
              <span className="truncate">{item.text}</span>
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
  
} 