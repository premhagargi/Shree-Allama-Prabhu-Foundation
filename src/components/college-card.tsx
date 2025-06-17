import Link from 'next/link';
import Image from 'next/image';
import type { College } from '@/app/college/college-data';
import { Card, CardDescription, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, School } from 'lucide-react';

interface CollegeCardProps {
  college: College;
}

export default function CollegeCard({ college }: CollegeCardProps) {
  return (
    <Card className="relative w-full h-72 sm:h-80 md:h-96 overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out rounded-lg group">
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
      <div className="absolute bottom-0 left-0 p-6 text-white w-full">
        <div className="flex items-center mb-2">
          <School className="h-6 w-6 mr-3 text-shadow flex-shrink-0" />
          <CardTitle className="font-headline text-2xl md:text-3xl leading-tight text-shadow">
            {college.name}
          </CardTitle>
        </div>
        <CardDescription className="text-base text-gray-200 mb-4 text-shadow-sm line-clamp-2">
          {college.tagline}
        </CardDescription>
        <Button 
          asChild 
          variant="outline" 
          className="mt-2 border-white text-white hover:bg-white hover:text-primary transition-colors duration-300 group-hover:bg-accent group-hover:text-accent-foreground group-hover:border-accent"
        >
          <Link href={`/college/${college.id}`}>
            Learn More <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </div>
    </Card>
  );
}
