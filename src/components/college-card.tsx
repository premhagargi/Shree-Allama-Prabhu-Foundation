import Link from 'next/link';
import Image from 'next/image';
import { type College } from '@/app/college/college-data';
import { ArrowRight } from 'lucide-react';

interface CollegeCardProps {
  college: College;
}

export default function CollegeCard({ college }: CollegeCardProps) {
  return (
    <Link
      href={`/college/${college.id}`}
      className="group relative overflow-hidden flex flex-col justify-end text-white flex-1"
      aria-label={`Learn more about ${college.name}`}
    >
      <Image
        src={college.imageUrl}
        alt={`Image of ${college.name}`}
        fill
        style={{ objectFit: 'cover' }}
        className="transition-transform duration-500 ease-in-out group-hover:scale-105"
        data-ai-hint={college.dataAiHint}
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent -z-10" />

      <div className="relative p-6 md:p-8 lg:p-10 z-10 mr-auto text-left w-full">
        <span className="block text-sm font-semibold uppercase tracking-wider mb-2">
          {college.heroCategory || college.shortName}
        </span>
        <h4 className="font-headline text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-normal leading-tight mb-6 line-clamp-3">
          {college.heroTitle || college.name}
        </h4>
        <div
          className="inline-flex items-center justify-center px-5 py-2.5 border-2 border-white text-white rounded-none text-sm font-semibold hover:bg-white hover:text-primary transition-colors duration-300 group-hover:bg-white group-hover:text-primary cursor-pointer"
        >
          Explore {college.shortName} <ArrowRight className="h-4 w-4 ml-2" />
        </div>
      </div>
    </Link>
  );
}
