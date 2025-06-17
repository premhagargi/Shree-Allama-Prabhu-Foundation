
export interface College {
  id: string;
  name: string;
  shortName: string;
  tagline: string;
  description: string; // General description for listings or summaries
  imageUrl: string;
  dataAiHint: string;
  logoUrl?: string;
  contact: {
    address: string;
    phone: string;
    email: string;
    website?: string;
  };
  courses: string[];
  about: string; // Detailed about section for the college page
  admissions: string; // Detailed admission info for the college page
  facultyInfo: string; // Detailed faculty info for the college page
  research?: string; // Optional detailed research info
  heroCategory?: string; // For the homepage college card category label
  heroTitle?: string; // For the homepage college card main title
}

export const colleges: College[] = [
  {
    id: "sapec",
    name: "Shree Allama Prabhu Engineering College",
    shortName: "SAPEC",
    tagline: "Engineering Excellence, Future Forward.",
    description: "A premier institution dedicated to excellence in engineering and technology education, fostering innovation and research across various disciplines.",
    imageUrl: "https://placehold.co/1200x800", 
    dataAiHint: "modern university architecture",
    logoUrl: "https://placehold.co/200x200",
    contact: {
      address: "123 Engineering Drive, Knowledge City, Tech State 54321, India",
      phone: "+91-80-12345678",
      email: "admissions.sapec@shreeallamaprabhufoundation.org",
      website: "https://sapec.shreeallamaprabhufoundation.org"
    },
    courses: [
      "Computer Science & Engineering",
      "Artificial Intelligence & Machine Learning",
      "Mechanical Engineering",
      "Civil Engineering",
      "Electronics & Communication Engineering",
      "Electrical & Electronics Engineering",
      "Information Science & Engineering"
    ],
    about: "Established with a vision to impart world-class technical education, SAPEC is a hub of innovation and learning. Our state-of-the-art infrastructure, experienced faculty, and strong industry connections provide students with a holistic educational experience. We are committed to producing engineers who are not only technically proficient but also socially responsible leaders capable of addressing global challenges. Our curriculum emphasizes hands-on learning, research, and interdisciplinary collaboration.",
    admissions: "Admissions to undergraduate and postgraduate programs are primarily based on merit in qualifying examinations and scores from relevant national/state-level entrance tests. The online application portal typically opens in April each year. Prospective students are advised to visit our official website for detailed brochures, eligibility criteria, fee structures, important deadlines, and the comprehensive admission process. We also offer scholarships for meritorious and deserving students.",
    facultyInfo: "SAPEC boasts a distinguished team of faculty members, many of whom hold doctoral degrees from eminent institutions worldwide. They are experts in their respective fields, actively engaged in pioneering research, and dedicated to mentoring students. Our faculty brings a rich blend of academic rigor and industry experience, ensuring that students receive a well-rounded and contemporary education. They regularly publish in high-impact journals and participate in international conferences.",
    research: "SAPEC is at the forefront of research and innovation in engineering and technology. We have dedicated research centers focusing on areas like AI, IoT, Renewable Energy, and Advanced Manufacturing. Our faculty and students are encouraged to undertake research projects, publish their findings, and develop innovative solutions to real-world problems. We collaborate with industry partners and research organizations to foster a vibrant ecosystem of inquiry and discovery.",
    heroCategory: "Engineering & Technology",
    heroTitle: "Shape Tomorrow's Innovations"
  },
  {
    id: "sapasc",
    name: "Shree Allama Prabhu Arts & Science College",
    shortName: "SAPASC",
    tagline: "Nurturing Minds, Inspiring Futures.",
    description: "A vibrant center for learning in arts, humanities, and sciences, promoting critical thinking, creativity, and holistic student development.",
    imageUrl: "https://placehold.co/1200x800",
    dataAiHint: "university library students",
    logoUrl: "https://placehold.co/200x200",
    contact: {
      address: "456 Scholars Avenue, Harmony Town, Culture State 54322, India",
      phone: "+91-80-23456789",
      email: "info.sapasc@shreeallamaprabhufoundation.org",
      website: "https://sapasc.shreeallamaprabhufoundation.org"
    },
    courses: [
      "Bachelor of Arts (History, Economics, English Literature, Political Science)",
      "Bachelor of Science (Physics, Chemistry, Mathematics, Botany, Zoology, Computer Science)",
      "Bachelor of Commerce (General, Finance, Accounting)",
      "Bachelor of Computer Applications (BCA)",
      "Master of Arts (English Literature)",
      "Master of Science (Mathematics)"
    ],
    about: "Shree Allama Prabhu Arts & Science College (SAPASC) offers a diverse range of undergraduate and postgraduate programs across the arts, sciences, and commerce streams. We are dedicated to creating an inclusive and stimulating environment that encourages intellectual curiosity, fosters creativity, and promotes social responsibility. Our curriculum is designed to provide a strong academic foundation while also developing critical thinking, communication, and problem-solving skills essential for success in a dynamic world.",
    admissions: "Admission procedures for various undergraduate and postgraduate courses typically commence in May. Prospective students are encouraged to visit our official website for detailed information on program offerings, eligibility criteria, application forms, fee structures, and important admission timelines. Selection is based on merit in the qualifying examination, and for some programs, an entrance test or interview may be conducted.",
    facultyInfo: "Our faculty comprises a team of dedicated, highly qualified, and experienced educators who are passionate about teaching and mentoring. They are committed to academic excellence and the holistic development of our students. Many of our faculty members are actively engaged in research, publication, and community outreach programs, bringing contemporary knowledge and real-world perspectives into the classroom.",
    research: "SAPASC encourages a spirit of inquiry and research among its faculty and students. We support research activities in various fields of arts, science, and commerce. Faculty members are actively involved in research projects, and students are encouraged to participate in research-oriented activities, seminars, and workshops. Our library and laboratories provide essential resources for academic and research pursuits.",
    heroCategory: "Arts, Science & Commerce",
    heroTitle: "Explore Diverse Knowledge"
  },
  {
    id: "sapmi",
    name: "Shree Allama Prabhu Medical Institute",
    shortName: "SAPMI",
    tagline: "Healing Hands, Compassionate Hearts.",
    description: "A leading medical institute committed to producing skilled and ethical healthcare professionals and advancing medical research for a healthier society.",
    imageUrl: "https://placehold.co/1200x800",
    dataAiHint: "medical professionals team",
    logoUrl: "https://placehold.co/200x200",
    contact: {
      address: "789 Health Boulevard, Wellness City, Life State 54323, India",
      phone: "+91-80-34567890",
      email: "contact.sapmi@shreeallamaprabhufoundation.org",
      website: "https://sapmi.shreeallamaprabhufoundation.org"
    },
    courses: [
      "MBBS (Bachelor of Medicine, Bachelor of Surgery)",
      "BDS (Bachelor of Dental Surgery)",
      "B.Sc Nursing",
      "Bachelor of Pharmacy (B.Pharm)",
      "Master of Pharmacy (M.Pharm - various specializations)",
      "Diploma in Medical Laboratory Technology (DMLT)",
      "Diploma in X-Ray Technology"
    ],
    about: "Shree Allama Prabhu Medical Institute (SAPMI) is renowned for its comprehensive medical education, cutting-edge research facilities, and its affiliated multi-specialty teaching hospital. We are dedicated to training compassionate, skilled, and ethical healthcare professionals who can serve the diverse needs of society. Our programs integrate rigorous academic learning with extensive clinical practice, ensuring our graduates are well-prepared for the challenges of the medical field.",
    admissions: "Admissions to medical, dental, nursing, and paramedical programs at SAPMI are highly competitive and are based on scores obtained in national and state-level entrance examinations (e.g., NEET-UG, NEET-PG). For detailed information on eligibility, application procedures, counseling schedules, and fee structures, please refer to the official admissions portal of the institute and relevant government regulatory bodies.",
    facultyInfo: "Our faculty at SAPMI consists of eminent medical practitioners, experienced surgeons, dedicated researchers, and compassionate educators. They bring extensive clinical and academic experience to the classroom, laboratories, and hospital wards. Committed to excellence in medical education and patient care, our faculty members actively contribute to medical research and mentor the next generation of healthcare leaders.",
    research: "SAPMI is a hub for medical research, with a focus on translational research that bridges laboratory discoveries with clinical applications. Our research areas include clinical trials, public health, infectious diseases, non-communicable diseases, and innovative medical technologies. We provide advanced research facilities and encourage faculty and students to engage in research that contributes to improving healthcare outcomes.",
    heroCategory: "Medical & Health Sciences",
    heroTitle: "Dedicated to Health & Care"
  }
];

export const getCollegeById = (id: string): College | undefined => {
  return colleges.find(college => college.id === id);
};
