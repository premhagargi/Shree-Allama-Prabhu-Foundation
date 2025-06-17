
'use client';

import { useRouter } from 'next/navigation';
import type { College } from '@/app/college/college-data';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';

interface CollegeSelectorClientProps {
  colleges: College[];
  currentCollegeId: string;
}

export default function CollegeSelectorClient({ colleges, currentCollegeId }: CollegeSelectorClientProps) {
  const router = useRouter();

  const handleCollegeChange = (newCollegeId: string) => {
    if (newCollegeId !== currentCollegeId) {
      router.push(`/college/${newCollegeId}`);
    }
  };

  return (
    <div className="w-full md:w-auto md:min-w-[300px]">
      <Label htmlFor="college-selector" className="text-sm font-medium text-foreground sr-only">
        Select College
      </Label>
      <Select value={currentCollegeId} onValueChange={handleCollegeChange}>
        <SelectTrigger id="college-selector" className="w-full bg-card text-card-foreground border-border hover:bg-muted focus:ring-primary"> {/* Removed shadow-sm */}
          <SelectValue placeholder="Select a college" />
        </SelectTrigger>
        <SelectContent>
          {colleges.map((college) => (
            <SelectItem key={college.id} value={college.id}>
              {college.name} ({college.shortName})
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
