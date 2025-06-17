import { getCollegeById, type College } from '@/app/college/college-data';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Building, BookOpen, GraduationCap, Users, Mail, Phone, MapPin, Globe, Award, Microscope, UsersRound, ArrowRight } from 'lucide-react'; // Added more icons
import CollegeCard from '@/components/college-card';
type Props = {
  params: { collegeId: string };
};

// Helper function to generate a more descriptive course meta description
const generateCourseMetaDescription = (courseName: string, collegeName: string) => {
  return `Explore the ${courseName} program at ${collegeName}. Learn about curriculum, career prospects, and admission requirements.`;
};


export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const college = getCollegeById(params.collegeId);

  if (!college) {
    return {
      title: 'College Not Found',
    };
  }

  const title = `${college.name} | Shree Allama Prabhu Foundation`;
  const description = `Discover ${college.name}: ${college.tagline}. Explore courses, admissions, faculty, campus life, and contact details for ${college.shortName}.`;
  const url = `https://shreeallamaprabhufoundation.org/college/${college.id}`; // Replace with actual domain

  return {
    title,
    description,
    keywords: [college.name, college.shortName, 'education', 'courses', 'admissions', 'faculty', 'contact', ...college.courses.slice(0, 5)],
    openGraph: {
      title,
      description,
      url,
      siteName: 'Shree Allama Prabhu Foundation',
      images: [
        {
          url: college.imageUrl, // This URL comes from college-data.ts and should be placehold.co
          width: 1200,
          height: 630,
          alt: `Campus of ${college.name}`,
        },
      ],
      type: 'article',
      article: {
        publishedTime: new Date().toISOString(), // Placeholder, ideally use actual content update date
        authors: ['Shree Allama Prabhu Foundation'],
        tags: [college.name, 'Education', college.shortName],
      }
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [college.imageUrl], // This URL comes from college-data.ts
      // site: '@YourFoundationTwitterHandle', // Optional: Add Twitter handle
    },
  };
}

export default function CollegePage({ params }: Props) {
  const college = getCollegeById(params.collegeId);

  if (!college) {
    notFound();
  }

  // Improved JSON-LD based on schema.org for EducationalOrganization
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollegeOrUniversity", // More specific type
    "name": college.name,
    "alternateName": college.shortName,
    "url": `https://shreeallamaprabhufoundation.org/college/${college.id}`, // Replace with actual domain
    "logo": college.logoUrl || `https://placehold.co/200x200.png`, // Fallback to a placeholder
    "description": college.description,
    "image": college.imageUrl,
    "address": {
      "@type": "PostalAddress",
      // Basic parsing, improve if address format is consistent
      "streetAddress": college.contact.address.split(',')[0]?.trim() || "Street Address",
      "addressLocality": college.contact.address.split(',')[1]?.trim() || "City",
      "addressRegion": college.contact.address.split(',')[2]?.trim() || "State",
      "postalCode": college.contact.address.split(',')[3]?.trim() || "00000",
      "addressCountry": "IN" // Assuming India
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": college.contact.phone,
      "contactType": "Admissions", // Can be more specific
      "email": college.contact.email,
      "areaServed": "IN",
      "availableLanguage": ["English", "Kannada"] // Example languages
    },
    "hasCourse": college.courses.map(courseName => ({
      "@type": "Course",
      "name": courseName,
      "description": generateCourseMetaDescription(courseName, college.name),
      "provider": {
        "@type": "EducationalOrganization",
        "name": college.name,
        "sameAs": `https://shreeallamaprabhufoundation.org/college/${college.id}`
      }
    })),
    "department": college.courses.map(courseName => ({ // Representing courses as departments for richer schema
      "@type": "EducationalOrganizationRole",
      "roleName": "department",
      "department": {
        "@type": "EducationalOrganization",
        "name": `Department of ${courseName}` // Example naming
      }
    }))
    // Potentially add "founder", "foundingDate" if available
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="h-[calc(var(--header-height,5rem)+2.25rem)]" /> {/* Spacer for header */}
      {/* College Card Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#8B0000] to-[#A52A2A] opacity-90" />
        <div className="relative">
          <CollegeCard college={college} />
        </div>
      </div>

      {/* Rest of the content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-6 py-12">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <div className="space-y-10 pb-12">
          <Tabs defaultValue="about" className="w-full">
            <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2 bg-secondary p-2"> {/* Removed rounded-lg shadow-sm */}
              <TabsTrigger value="about" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-sm py-2.5">
                <Building className="h-4 w-4 mr-2" /> About Us
              </TabsTrigger>
              <TabsTrigger value="courses" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-sm py-2.5">
                <BookOpen className="h-4 w-4 mr-2" /> Programs
              </TabsTrigger>
              <TabsTrigger value="admissions" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-sm py-2.5">
                <GraduationCap className="h-4 w-4 mr-2" /> Admissions
              </TabsTrigger>
              <TabsTrigger value="faculty" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-sm py-2.5">
                <UsersRound className="h-4 w-4 mr-2" /> Faculty
              </TabsTrigger>
              <TabsTrigger value="research" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-sm py-2.5">
                <Microscope className="h-4 w-4 mr-2" /> Research
              </TabsTrigger>
              <TabsTrigger value="contact" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-sm py-2.5">
                <Mail className="h-4 w-4 mr-2" /> Contact
              </TabsTrigger>
            </TabsList>

            <div className="mt-8"> {/* Increased top margin for content */}
              <TabsContent value="about">
                <Card className="border-border"> {/* Removed shadow-lg */}
                  <CardHeader>
                    <CardTitle className="font-headline text-2xl md:text-3xl text-primary flex items-center">
                      <Award className="h-6 w-6 mr-3 text-accent" /> About {college.shortName}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-foreground prose prose-lg max-w-none leading-relaxed"> {/* Increased prose size and leading */}
                    <p>{college.about}</p>
                    {/* Placeholder for more detailed about sections */}
                    <h3 className="font-headline text-xl text-primary mt-6">Our History</h3>
                    <p>Detailed history of the college, its founding principles, and significant milestones...</p>
                    <h3 className="font-headline text-xl text-primary mt-6">Mission & Values</h3>
                    <p>Elaboration on the college's core mission, vision, and guiding values...</p>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="courses">
                <Card className="border-border"> {/* Removed shadow-lg */}
                  <CardHeader>
                    <CardTitle className="font-headline text-2xl md:text-3xl text-primary flex items-center">
                      <BookOpen className="h-6 w-6 mr-3 text-accent" /> Academic Programs
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-6 text-foreground">
                      {college.name} offers a diverse range of undergraduate and postgraduate programs designed to equip students with the knowledge and skills for successful careers. Explore our offerings:
                    </p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-foreground">
                      {college.courses.map((course, index) => (
                        <li key={index} className="flex items-center p-3 bg-secondary/50 rounded-none hover:bg-secondary transition-colors"> {/* Changed rounded-md to rounded-none */}
                          <GraduationCap className="h-5 w-5 mr-3 text-primary shrink-0" />
                          <span>{course}</span>
                        </li>
                      ))}
                    </ul>
                    {/* Placeholder for more course details link */}
                    <p className="mt-6 text-sm text-muted-foreground">For detailed curriculum, eligibility, and duration for each program, please refer to the official prospectus or contact the admissions office.</p>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="admissions">
                <Card className="border-border"> {/* Removed shadow-lg */}
                  <CardHeader>
                    <CardTitle className="font-headline text-2xl md:text-3xl text-primary flex items-center">
                       <GraduationCap className="h-6 w-6 mr-3 text-accent" /> Admission Process & Criteria
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-foreground prose prose-lg max-w-none leading-relaxed">
                    <p>{college.admissions}</p>
                    {/* Placeholder for detailed admission steps */}
                    <h4 className="font-semibold mt-4">Application Steps:</h4>
                    <ol className="list-decimal list-inside space-y-1">
                      <li>Visit the official college website or admissions portal.</li>
                      <li>Fill out the online application form with accurate details.</li>
                      <li>Upload necessary documents (mark sheets, certificates, photograph).</li>
                      <li>Pay the application fee through the provided payment gateway.</li>
                      <li>Submit the application and keep a copy for reference.</li>
                    </ol>
                    <h4 className="font-semibold mt-4">Important Dates:</h4>
                    <p>Application Start: [Date], Application End: [Date], Entrance Test (if any): [Date]. Please check the website for the latest schedule.</p>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="faculty">
                <Card className="border-border"> {/* Removed shadow-lg */}
                  <CardHeader>
                    <CardTitle className="font-headline text-2xl md:text-3xl text-primary flex items-center">
                      <UsersRound className="h-6 w-6 mr-3 text-accent" /> Our Esteemed Faculty
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-foreground prose prose-lg max-w-none leading-relaxed">
                    <p>{college.facultyInfo}</p>
                    {/* Placeholder for faculty profiles or department links */}
                    <p className="mt-4">Our faculty members are not only teachers but also mentors, researchers, and industry experts dedicated to fostering a stimulating learning environment. Many hold advanced degrees from prestigious universities and are actively involved in cutting-edge research and publications.</p>
                    <p className="mt-2 text-sm text-muted-foreground">Detailed faculty profiles and department-specific information can be found on individual department pages or by contacting the respective departments.</p>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="research">
                <Card className="border-border"> {/* Removed shadow-lg */}
                  <CardHeader>
                    <CardTitle className="font-headline text-2xl md:text-3xl text-primary flex items-center">
                      <Microscope className="h-6 w-6 mr-3 text-accent" /> Research & Innovation
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-foreground prose prose-lg max-w-none leading-relaxed">
                    <p>{college.research || "Placeholder: Information about research facilities, focus areas, ongoing projects, and publications at " + college.name + ". We are committed to advancing knowledge and fostering a culture of innovation."}</p>
                    {/* Placeholder for more research details */}
                     <h4 className="font-semibold mt-4">Key Research Areas:</h4>
                     <ul className="list-disc list-inside space-y-1">
                          <li>Artificial Intelligence and Machine Learning (if applicable)</li>
                          <li>Sustainable Development and Green Technologies (if applicable)</li>
                          <li>Advanced Materials Science (if applicable)</li>
                          <li>Biomedical Engineering and Healthcare Innovation (if applicable)</li>
                          <li>Social Sciences and Policy Research (if applicable)</li>
                     </ul>
                     <p className="mt-4">We encourage interdisciplinary collaboration and provide state-of-the-art laboratories and resources to support our researchers and students.</p>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="contact">
                <Card className="border-border"> {/* Removed shadow-lg */}
                  <CardHeader>
                    <CardTitle className="font-headline text-2xl md:text-3xl text-primary flex items-center">
                      <Mail className="h-6 w-6 mr-3 text-accent" /> Get in Touch
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6 text-foreground"> {/* Increased spacing */}
                    <div className="flex items-start p-4 bg-secondary/30 rounded-none"> {/* Changed rounded-lg to rounded-none */}
                      <MapPin className="h-6 w-6 mr-4 mt-1 text-primary shrink-0" />
                      <div>
                        <h4 className="font-semibold text-lg">Our Address:</h4>
                        <p className="text-base">{college.contact.address}</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex items-center p-4 bg-secondary/30 rounded-none"> {/* Changed rounded-lg to rounded-none */}
                        <Phone className="h-6 w-6 mr-4 text-primary shrink-0" />
                        <div>
                          <h4 className="font-semibold text-lg">Phone:</h4>
                          <a href={`tel:${college.contact.phone}`} className="hover:text-accent transition-colors text-base">{college.contact.phone}</a>
                        </div>
                      </div>
                      <div className="flex items-center p-4 bg-secondary/30 rounded-none"> {/* Changed rounded-lg to rounded-none */}
                        <Mail className="h-6 w-6 mr-4 text-primary shrink-0" />
                        <div>
                          <h4 className="font-semibold text-lg">Email:</h4>
                          <a href={`mailto:${college.contact.email}`} className="hover:text-accent transition-colors text-base">{college.contact.email}</a>
                        </div>
                      </div>
                    </div>
                    {college.contact.website && (
                      <div className="flex items-center p-4 bg-secondary/30 rounded-none"> {/* Changed rounded-lg to rounded-none */}
                        <Globe className="h-6 w-6 mr-4 text-primary shrink-0" />
                        <div>
                          <h4 className="font-semibold text-lg">College Website:</h4>
                          <a href={college.contact.website} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors text-base break-all">{college.contact.website}</a>
                        </div>
                      </div>
                    )}
                    {/* Placeholder for a map or further contact details */}
                    <div className="mt-4 p-4 bg-secondary/30 rounded-none"> {/* Changed rounded-lg to rounded-none */}
                      <h4 className="font-semibold text-lg mb-2">Office Hours:</h4>
                      <p className="text-base">Monday - Friday: 9:00 AM - 5:00 PM</p>
                      <p className="text-base">Saturday: 9:00 AM - 1:00 PM (Administrative Office)</p>
                      <p className="text-base">Sunday: Closed</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
