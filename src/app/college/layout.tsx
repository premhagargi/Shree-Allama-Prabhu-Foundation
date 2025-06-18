import { colleges } from '@/app/college/college-data';
import CollegeSelectorClient from '@/components/college-selector-client';
import { ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function CollegeLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { collegeId: string };
}) {
  const currentCollegeId = params.collegeId;

  return (
    <div className="bg-background mt-10 min-h-[calc(100vh-var(--header-height,5rem))]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <Button variant="outline" asChild className="self-start md:self-center">
            <Link href="/" className="flex items-center text-primary hover:text-primary/80">
              <ChevronLeft className="h-4 w-4 mr-2" />
              Back to Foundation Home
            </Link>
          </Button>
          <div className="w-full md:w-auto">
            <p className="text-sm text-muted-foreground mb-1 text-center md:text-right">Currently viewing:</p>
            <CollegeSelectorClient colleges={colleges} currentCollegeId={currentCollegeId} />
          </div>
        </div>
        {children}
      </div>
    </div>
  );
}
