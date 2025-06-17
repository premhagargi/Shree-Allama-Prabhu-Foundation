export interface College {
  id: string;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  imageUrl: string;
  dataAiHint: string;
  logoUrl?: string;
  contact: {
    address: string;
    phone: string;
    email: string;
    website?: string; // Optional specific college website
  };
  courses: string[];
  about: string;
  admissions: string;
  facultyInfo: string;
}

export const colleges: College[] = [
  {
    id: "sapec",
    name: "Shree Allama Prabhu Engineering College",
    shortName: "SAPEC",
    tagline: "Engineering Excellence, Future Forward.",
    description: "A premier institution dedicated to excellence in engineering and technology education, fostering innovation and research.",
    imageUrl: "https://placehold.co/600x400.png",
    dataAiHint: "modern university",
    logoUrl: "https://placehold.co/150x150.png", // Placeholder logo
    contact: {
      address: "123 Engineering Drive, Knowledge City, State 54321",
      phone: "+91-80-12345678",
      email: "admissions.sapec@shreeallamaprabhufoundation.org",
      website: "https://sapec.shreeallamaprabhufoundation.org" // Example
    },
    courses: ["Computer Science & Engineering", "Mechanical Engineering", "Civil Engineering", "Electronics & Communication Engineering", "Electrical Engineering"],
    about: "Established with a vision to impart quality technical education, SAPEC boasts state-of-the-art infrastructure, experienced faculty, and a vibrant research environment. We are committed to producing engineers who can meet global challenges.",
    admissions: "Admissions are based on merit and entrance examination scores. Online applications typically open in April. Please visit our website for detailed brochures, eligibility criteria, and important dates.",
    facultyInfo: "Our distinguished faculty members are experts in their respective fields, actively involved in research and dedicated to mentoring students. They bring a blend of academic rigor and industry experience."
  },
  {
    id: "sapasc",
    name: "Shree Allama Prabhu Arts & Science College",
    shortName: "SAPASC",
    tagline: "Nurturing Minds, Inspiring Futures.",
    description: "A vibrant center for learning in arts, humanities, and sciences, promoting critical thinking and holistic development.",
    imageUrl: "https://placehold.co/600x400.png",
    dataAiHint: "classic library",
    logoUrl: "https://placehold.co/150x150.png", // Placeholder logo
    contact: {
      address: "456 Scholars Avenue, Harmony Town, State 54322",
      phone: "+91-80-23456789",
      email: "info.sapasc@shreeallamaprabhufoundation.org",
      website: "https://sapasc.shreeallamaprabhufoundation.org"
    },
    courses: ["Bachelor of Arts (History, Economics, Literature)", "Bachelor of Science (Physics, Chemistry, Mathematics, Biology)", "Bachelor of Commerce", "Bachelor of Computer Applications"],
    about: "SAPASC offers a diverse range of undergraduate and postgraduate programs. We focus on creating an inclusive environment that encourages intellectual curiosity, creativity, and social responsibility.",
    admissions: "Admission procedures for various courses commence in May. Prospective students are encouraged to check our website for program details, application forms, and admission guidelines.",
    facultyInfo: "A team of dedicated and highly qualified educators who are committed to academic excellence and student welfare. Many are actively engaged in research and community outreach programs."
  },
  {
    id: "sapmi",
    name: "Shree Allama Prabhu Medical Institute",
    shortName: "SAPMI",
    tagline: "Healing Hands, Compassionate Hearts.",
    description: "A leading medical institute committed to producing skilled healthcare professionals and advancing medical research.",
    imageUrl: "https://placehold.co/600x400.png",
    dataAiHint: "medical facility",
    logoUrl: "https://placehold.co/150x150.png", // Placeholder logo
    contact: {
      address: "789 Health Boulevard, Wellness City, State 54323",
      phone: "+91-80-34567890",
      email: "contact.sapmi@shreeallamaprabhufoundation.org",
      website: "https://sapmi.shreeallamaprabhufoundation.org"
    },
    courses: ["MBBS (Bachelor of Medicine, Bachelor of Surgery)", "BDS (Bachelor of Dental Surgery)", "B.Sc Nursing", "B.Pharm (Bachelor of Pharmacy)", "Diploma in Medical Laboratory Technology"],
    about: "SAPMI is renowned for its comprehensive medical education, cutting-edge research facilities, and affiliated multi-specialty hospital. We aim to train compassionate and competent healthcare leaders.",
    admissions: "Admissions to medical and paramedical programs are highly competitive, based on national and state-level entrance examinations. Refer to our official admissions portal for detailed information.",
    facultyInfo: "Our faculty consists of eminent medical practitioners, surgeons, and researchers who bring extensive clinical and academic experience to the classroom and laboratories."
  }
];

export const getCollegeById = (id: string): College | undefined => {
  return colleges.find(college => college.id === id);
};
