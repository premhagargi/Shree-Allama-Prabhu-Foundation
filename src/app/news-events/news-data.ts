
export interface NewsItem {
  id: string;
  title: string;
  date: string; // Consider using a Date object if complex date manipulation is needed later
  imageUrl: string;
  dataAiHint: string;
  summary: string;
  category?: string;
  link: string; // URL to the full news article
}

export interface EventItem {
  id: string;
  title: string;
  date: string;
  time?: string;
  location: string;
  imageUrl: string;
  dataAiHint: string;
  summary: string;
  link: string; // URL to the event details or registration
}

export const newsItems: NewsItem[] = [
  {
    id: "news-1",
    title: "Foundation Announces New Scholarship Program for Aspiring Engineers",
    date: "October 26, 2023",
    imageUrl: "https://placehold.co/600x400.png",
    dataAiHint: "students graduation",
    summary: "Shree Allama Prabhu Foundation is proud to launch a new scholarship initiative aimed at supporting talented students pursuing engineering disciplines at SAPEC.",
    category: "Foundation News",
    link: "/news-events/article/new-scholarship-program", // Placeholder link
  },
  {
    id: "news-2",
    title: "SAPASC Hosts Annual Inter-Collegiate Cultural Festival 'Utsav 2023'",
    date: "October 22, 2023",
    imageUrl: "https://placehold.co/600x400.png",
    dataAiHint: "cultural festival",
    summary: "The vibrant 'Utsav 2023' brought together students from various colleges for a spectacular showcase of talent in music, dance, and drama.",
    category: "College Activities",
    link: "/news-events/article/sapasc-utsav-2023", // Placeholder link
  },
  {
    id: "news-3",
    title: "Groundbreaking Research in AI Ethics Published by SAPEC Faculty",
    date: "October 15, 2023",
    imageUrl: "https://placehold.co/600x400.png",
    dataAiHint: "research lab",
    summary: "Dr. Ananya Sharma from the Computer Science department at SAPEC has published a significant paper on the ethical implications of artificial intelligence.",
    category: "Research",
    link: "/news-events/article/ai-ethics-research", // Placeholder link
  },
  {
    id: "news-4",
    title: "SAPMI Conducts Free Health Camp for Local Community",
    date: "October 10, 2023",
    imageUrl: "https://placehold.co/600x400.png",
    dataAiHint: "medical camp",
    summary: "Shree Allama Prabhu Medical Institute organized a successful free health check-up and awareness camp, benefiting over 500 local residents.",
    category: "Community Outreach",
    link: "/news-events/article/sapmi-health-camp", // Placeholder link
  },
];

export const eventItems: EventItem[] = [
  {
    id: "event-1",
    title: "Workshop: Innovations in Renewable Energy",
    date: "November 5, 2023",
    time: "10:00 AM - 4:00 PM",
    location: "SAPEC Auditorium, Engineering Drive Campus",
    imageUrl: "https://placehold.co/600x400.png",
    dataAiHint: "renewable energy",
    summary: "Join experts and researchers for an insightful workshop exploring the latest advancements and future trends in renewable energy technologies.",
    link: "/news-events/event/renewable-energy-workshop", // Placeholder link
  },
  {
    id: "event-2",
    title: "Guest Lecture: The Future of Liberal Arts Education",
    date: "November 12, 2023",
    time: "2:00 PM - 3:30 PM",
    location: "SAPASC Main Hall, Scholars Avenue Campus",
    imageUrl: "https://placehold.co/600x400.png",
    dataAiHint: "lecture hall",
    summary: "Distinguished academic Prof. R. K. Verma will deliver a thought-provoking lecture on the evolving role of liberal arts in the 21st century.",
    link: "/news-events/event/liberal-arts-lecture", // Placeholder link
  },
  {
    id: "event-3",
    title: "Annual Alumni Meet - SAPMI Graduates",
    date: "December 9, 2023",
    time: "6:00 PM onwards",
    location: "Grand Ballroom, City Convention Center",
    imageUrl: "https://placehold.co/600x400.png",
    dataAiHint: "alumni gathering",
    summary: "A wonderful opportunity for SAPMI alumni to reconnect, network, and reminisce. Dinner and entertainment included.",
    link: "/news-events/event/sapmi-alumni-meet-2023", // Placeholder link
  },
];
