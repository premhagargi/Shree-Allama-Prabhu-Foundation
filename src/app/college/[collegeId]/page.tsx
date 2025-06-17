import { getCollegeById, type College } from '@/app/college/college-data';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Building, BookOpen, GraduationCap, Users, Mail, Phone, MapPin, Globe } from 'lucide-react';

type Props = {
  params: { collegeId: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const college = getCollegeById(params.collegeId);

  if (!college) {
    return {
      title: 'College Not Found',
    };
  }

  const title = `${college.name} | Shree Allama Prabhu Foundation`;
  const description = `Learn about ${college.name}: ${college.tagline}. Courses, admissions, faculty, and contact information.`;
  const url = `https://shreeallamaprabhufoundation.org/college/${college.id}`; // Replace with actual domain

  return {
    title,
    description,
    keywords: [college.name, college.shortName, 'education', 'courses', 'admissions', ...college.courses.slice(0, 5)],
    openGraph: {
      title,
      description,
      url,
      siteName: 'Shree Allama Prabhu Foundation',
      images: [
        {
          url: college.imageUrl, // Use college image for OG
          width: 600,
          height: 400,
          alt: `Image of ${college.name}`,
        },
      ],
      type: 'article', // More specific than 'website' for a college page
      article: { // Optional: more details for 'article' type
        publishedTime: new Date().toISOString(), // Placeholder, ideally use actual publish/update date
        authors: ['Shree Allama Prabhu Foundation'],
      }
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [college.imageUrl],
    },
  };
}

export default function CollegePage({ params }: Props) {
  const college = getCollegeById(params.collegeId);

  if (!college) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": college.name,
    "alternateName": college.shortName,
    "url": `https://shreeallamaprabhufoundation.org/college/${college.id}`, // Replace with actual domain
    "logo": college.logoUrl || `https://shreeallamaprabhufoundation.org/logos/${college.id}-logo.png`, // Replace with actual logo URL
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": college.contact.phone,
      "contactType": "Admissions Office", // Generic, can be more specific
      "email": college.contact.email,
      "areaServed": "IN", // Assuming India, adjust as needed
      "availableLanguage": ["English"]
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": college.contact.address.split(',')[0].trim(), // Basic parsing
      "addressLocality": college.contact.address.split(',')[1]?.trim() || "City", // Basic parsing
      "addressRegion": college.contact.address.split(',')[2]?.trim() || "State", // Basic parsing
      "postalCode": college.contact.address.split(',')[3]?.trim() || "00000", // Basic parsing
      "addressCountry": "IN" // Assuming India
    },
    "description": college.description,
    "image": college.imageUrl,
    "hasCourse": college.courses.map(courseName => ({
      "@type": "Course",
      "name": courseName,
      "description": `A comprehensive course in ${courseName} offered at ${college.name}.`, // Generic description
      "provider": {
        "@type": "EducationalOrganization",
        "name": college.name,
        "sameAs": `https://shreeallamaprabhufoundation.org/college/${college.id}`
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="space-y-12">
        <header className="relative overflow-hidden rounded-lg shadow-xl">
          <div className="relative w-full h-64 md:h-96">
            <Image
              src={college.imageUrl}
              alt={`Campus of ${college.name}`}
              layout="fill"
              objectFit="cover"
              priority
              data-ai-hint={college.dataAiHint}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          </div>
          <div className="absolute bottom-0 left-0 p-6 md:p-10 text-white">
            {college.logoUrl && (
              <Image
                src={college.logoUrl}
                alt={`${college.name} Logo`}
                width={80}
                height={80}
                className="mb-4 rounded-md bg-white p-1 shadow-md"
                data-ai-hint="college logo"
              />
            )}
            <h1 className="font-headline text-3xl md:text-5xl font-bold mb-2 text-shadow">
              {college.name}
            </h1>
            <p className="text-lg md:text-xl font-medium text-accent text-shadow-sm">{college.tagline}</p>
          </div>
        </header>

        <Tabs defaultValue="about" className="w-full">
          <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 bg-secondary p-2 rounded-lg">
            <TabsTrigger value="about" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <Building className="h-4 w-4 mr-2" /> About
            </TabsTrigger>
            <TabsTrigger value="courses" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <BookOpen className="h-4 w-4 mr-2" /> Courses
            </TabsTrigger>
            <TabsTrigger value="admissions" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <GraduationCap className="h-4 w-4 mr-2" /> Admissions
            </TabsTrigger>
            <TabsTrigger value="faculty" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <Users className="h-4 w-4 mr-2" /> Faculty
            </TabsTrigger>
            <TabsTrigger value="contact" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <Mail className="h-4 w-4 mr-2" /> Contact
            </TabsTrigger>
          </TabsList>

          <div className="mt-6">
            <TabsContent value="about">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="font-headline text-2xl text-primary">About {college.shortName}</CardTitle>
                </CardHeader>
                <CardContent className="text-foreground prose max-w-none">
                  <p>{college.about}</p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="courses">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="font-headline text-2xl text-primary">Programs Offered</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2 text-foreground">
                    {college.courses.map((course, index) => (
                      <li key={index}>{course}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="admissions">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="font-headline text-2xl text-primary">Admission Process</CardTitle>
                </CardHeader>
                <CardContent className="text-foreground prose max-w-none">
                  <p>{college.admissions}</p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="faculty">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="font-headline text-2xl text-primary">Our Faculty</CardTitle>
                </CardHeader>
                <CardContent className="text-foreground prose max-w-none">
                  <p>{college.facultyInfo}</p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="contact">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="font-headline text-2xl text-primary">Get in Touch</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-foreground">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 mr-3 mt-1 text-primary shrink-0" />
                    <div>
                      <h4 className="font-semibold">Address:</h4>
                      <p>{college.contact.address}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 mr-3 text-primary shrink-0" />
                    <div>
                      <h4 className="font-semibold">Phone:</h4>
                      <a href={`tel:${college.contact.phone}`} className="hover:text-accent transition-colors">{college.contact.phone}</a>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 mr-3 text-primary shrink-0" />
                    <div>
                      <h4 className="font-semibold">Email:</h4>
                      <a href={`mailto:${college.contact.email}`} className="hover:text-accent transition-colors">{college.contact.email}</a>
                    </div>
                  </div>
                  {college.contact.website && (
                    <div className="flex items-center">
                      <Globe className="h-5 w-5 mr-3 text-primary shrink-0" />
                      <div>
                        <h4 className="font-semibold">Website:</h4>
                        <a href={college.contact.website} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">{college.contact.website}</a>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </>
  );
}
