import CollegeCard from '@/components/college-card';
import { colleges } from '@/app/college/college-data';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Landmark, Users, BookOpen, HeartHandshake } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary to-blue-700 text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Landmark className="h-24 w-24 mx-auto mb-6 text-accent" />
          <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Shree Allama Prabhu Foundation
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10">
            Dedicated to fostering education, empowering communities, and building a brighter future through our esteemed institutions and initiatives.
          </p>
          <Button size="lg" variant="secondary" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold py-3 px-8 rounded-md shadow-lg transition-transform hover:scale-105">
            <Link href="#colleges">
              Explore Our Colleges
            </Link>
          </Button>
        </div>
      </section>

      {/* Introduction/About Foundation Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-headline text-3xl sm:text-4xl font-bold text-center mb-6 text-primary">
            Our Mission & Vision
          </h2>
          <p className="text-center text-lg text-foreground max-w-3xl mx-auto mb-12">
            Shree Allama Prabhu Foundation is committed to providing accessible, high-quality education and contributing to societal development. We believe in nurturing talent, promoting ethical values, and creating leaders for tomorrow.
          </p>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6 bg-card rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <BookOpen className="h-12 w-12 mx-auto mb-4 text-accent" />
              <h3 className="font-headline text-xl font-semibold mb-2 text-primary">Quality Education</h3>
              <p className="text-sm text-muted-foreground">Providing comprehensive learning experiences across diverse disciplines.</p>
            </div>
            <div className="p-6 bg-card rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Users className="h-12 w-12 mx-auto mb-4 text-accent" />
              <h3 className="font-headline text-xl font-semibold mb-2 text-primary">Community Empowerment</h3>
              <p className="text-sm text-muted-foreground">Uplifting communities through various social and educational initiatives.</p>
            </div>
            <div className="p-6 bg-card rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <HeartHandshake className="h-12 w-12 mx-auto mb-4 text-accent" />
              <h3 className="font-headline text-xl font-semibold mb-2 text-primary">Ethical Values</h3>
              <p className="text-sm text-muted-foreground">Instilling integrity, compassion, and responsibility in our students.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Colleges Section */}
      <section id="colleges" className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-headline text-3xl sm:text-4xl font-bold text-center mb-12 text-primary">
            Our Institutions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {colleges.map((college) => (
              <CollegeCard key={college.id} college={college} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
