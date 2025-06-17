import Link from 'next/link';
import { Landmark } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-primary text-primary-foreground shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center space-x-3 group">
            <Landmark className="h-10 w-10 text-accent group-hover:text-accent-foreground transition-colors duration-300" />
            <span className="font-headline text-2xl md:text-3xl font-bold tracking-tight group-hover:text-gray-200 transition-colors duration-300">
              Shree Allama Prabhu Foundation
            </span>
          </Link>
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="font-medium hover:text-accent transition-colors duration-300">
              Home
            </Link>
            {/* Future navigation links can be added here */}
            {/* e.g., <Link href="/about" className="font-medium hover:text-accent transition-colors">About Us</Link> */}
          </nav>
        </div>
      </div>
    </header>
  );
}
