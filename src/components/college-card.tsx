
import Link from 'next/link';
import Image from 'next/image';
import type { College } from '@/app/college/college-data';
import { ArrowRight, School } from 'lucide-react';

interface CollegeCardProps {
  college: College;
}

export default function CollegeCard({ college }: CollegeCardProps) {
  return (
    <Link 
      href={`/college/${college.id}`} 
      className="block group flex-1 min-h-0 w-full" // Added flex-1 and min-h-0, removed fixed height classes
      aria-label={`Learn more about ${college.name}`}
    >
      <div className="relative w-full h-full overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out"> {/* Changed to h-full */}
        <Image
          src={college.imageUrl}
          alt={`Image of ${college.name}`}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-500 ease-in-out group-hover:scale-105"
          data-ai-hint={college.dataAiHint}
          priority // Consider adding priority for LCP images if these are high on the page
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
        <div className="absolute bottom-0 left-0 p-6 md:p-8 text-white w-full flex justify-between items-end"> {/* Increased padding slightly */}
          <div className="max-w-[calc(100%-3rem)]"> {/* Ensure text doesn't overlap arrow */}
            <div className="flex items-center mb-2">
              <School className="h-6 w-6 mr-3 text-shadow flex-shrink-0" />
              <h2 className="font-headline text-2xl md:text-3xl leading-tight text-shadow line-clamp-2">
                {college.name}
              </h2>
            </div>
            <p className="text-base text-gray-200 text-shadow-sm line-clamp-2">
              {college.tagline}
            </p>
          </div>
          <ArrowRight className="h-8 w-8 text-white transition-transform duration-300 ease-in-out group-hover:translate-x-1 shrink-0" />
        </div>
      </div>
    </Link>
  );
}
