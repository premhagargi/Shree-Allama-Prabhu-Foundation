import Link from 'next/link';
import Image from 'next/image';
import NewsTicker from './news-ticker';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <NewsTicker />
      <div className="bg-transparent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-6">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/images/logo.png"
                alt="Shree Allama Prabhu Foundation Logo"
                width={40}
                height={40}
                className="w-10 h-10"
              />
              <span className="font-headline text-xl font-bold text-white">Shree Allama Prabhu Foundation</span>
            </Link>
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/colleges" className="text-white hover:text-accent transition-colors">
                Colleges
              </Link>
              <Link href="/news-events" className="text-white hover:text-accent transition-colors">
                News & Events
              </Link>
              <Link href="/about" className="text-white hover:text-accent transition-colors">
                About Us
              </Link>
              <Link href="/contact" className="text-white hover:text-accent transition-colors">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
