
'use client'; 

import React, { useState, useEffect } from 'react';
import CollegeCard from '@/components/college-card';
import { colleges } from '@/app/college/college-data';
import { Button } from '@/components/ui/button';
import { Landmark, Users, BookOpen, HeartHandshake } from 'lucide-react';

export default function HomePage() {
  const [showHeroContent, setShowHeroContent] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHeroContent(false);
    }, 3000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-background">
      {/* Animated Hero / College Cards Section */}
      <section className="relative min-h-screen flex flex-col bg-gradient-to-br from-primary to-yellow-600 text-primary-foreground overflow-hidden">
        {/* Hero Text Content - Fades Out */}
        <div
          className={`absolute inset-0 flex flex-col items-center justify-center text-center p-4 transition-all duration-1000 ease-in-out ${
            showHeroContent ? 'opacity-100 z-10 scale-100' : 'opacity-0 -z-10 scale-95 pointer-events-none'
          }`}
        >
          <Landmark className="h-24 w-24 mx-auto mb-6 text-accent" />
          <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Shree Allama Prabhu Foundation
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10">
            Dedicated to fostering education, empowering communities, and building a brighter future through our esteemed institutions and initiatives.
          </p>
          <Button 
            size="lg" 
            variant="secondary" 
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold py-3 px-8 rounded-md shadow-lg transition-transform hover:scale-105"
          >
            Explore Our Colleges
          </Button>
        </div>

        {/* College Cards Stack - Fades In */}
        <div
          className={`flex-grow flex flex-col w-full transition-all duration-1000 ease-in-out ${
            !showHeroContent ? 'opacity-100 scale-100 z-20 delay-700' : 'opacity-0 scale-100 -z-10 pointer-events-none'
          }`}
        >
          {colleges.map((college) => (
            <CollegeCard key={college.id} college={college} />
          ))}
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
    </div>
  );
}
