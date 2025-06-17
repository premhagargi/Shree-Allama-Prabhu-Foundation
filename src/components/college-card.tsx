import Link from 'next/link';
import Image from 'next/image';
import type { College } from '@/app/college/college-data';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, School } from 'lucide-react';

interface CollegeCardProps {
  college: College;
}

export default function CollegeCard({ college }: CollegeCardProps) {
  return (
    <Card className="flex flex-col h-full overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out rounded-lg">
      <CardHeader className="p-0">
        <div className="relative w-full h-48 sm:h-56">
          <Image
            src={college.imageUrl}
            alt={`Image of ${college.name}`}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-500 ease-in-out group-hover:scale-105"
            data-ai-hint={college.dataAiHint}
          />
        </div>
      </CardHeader>
      <CardContent className="p-6 flex-grow">
        <div className="flex items-center mb-2">
          <School className="h-6 w-6 mr-2 text-primary" />
          <CardTitle className="font-headline text-xl leading-tight text-primary">
            {college.name}
          </CardTitle>
        </div>
        <CardDescription className="text-sm text-muted-foreground mb-3">{college.tagline}</CardDescription>
        <p className="text-sm text-foreground line-clamp-3">{college.description}</p>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button asChild variant="default" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground transition-colors duration-300 group">
          <Link href={`/college/${college.id}`}>
            Learn More <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
