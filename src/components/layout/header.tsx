
import Link from 'next/link';
import { Landmark, Newspaper } from 'lucide-react'; // Added Newspaper for News & Events

export default function Header() {
  return (
    <header className="bg-primary text-primary-foreground shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20"> {/* Increased height for a bit more presence */}
          <Link href="/" className="flex items-center space-x-3 group">
            <Landmark className="h-10 w-10 text-accent group-hover:text-accent-foreground transition-colors duration-300" />
            <span className="font-headline text-xl sm:text-2xl md:text-3xl font-bold tracking-tight group-hover:text-gray-200 transition-colors duration-300">
              Shree Allama Prabhu Foundation
            </span>
          </Link>
          <nav className="flex space-x-4 md:space-x-6 items-center">
            <Link href="/" className="font-medium hover:text-accent transition-colors duration-300 px-3 py-2 rounded-md text-sm">
              Home
            </Link>
            <Link href="/news-events" className="font-medium hover:text-accent transition-colors duration-300 px-3 py-2 rounded-md text-sm flex items-center">
              <Newspaper className="h-4 w-4 mr-1 md:mr-2" /> News & Events
            </Link>
            {/* Future navigation links can be added here */}
            {/* e.g., <Link href="/about" className="font-medium hover:text-accent transition-colors">About Us</Link> */}
          </nav>
        </div>
      </div>
    </header>
  );
}
