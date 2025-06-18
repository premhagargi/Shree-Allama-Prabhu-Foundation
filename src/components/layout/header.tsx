"use client";
import Link from 'next/link';
import Image from 'next/image';
import NewsTicker from './news-ticker';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X } from 'lucide-react'; // Optional: for hamburger icons

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      {pathname === '/' && <NewsTicker />}
      <div className="bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-6">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-2">
            {/* logo here */}
              {/* <Image
                src="/images/logo.png"
                alt="Shree Allama Prabhu Foundation Logo"
                width={40}
                height={40}
                className="w-10 h-10"
              /> */}
          <span className="font-headline text-lg sm:text-xl md:text-2xl font-extrabold text-black">
  Shree Allama Prabhu Foundation
</span>

            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/colleges" className="text-black hover:text-blue-600 transition-colors">
                Colleges
              </Link>
              <Link href="/news-events" className="text-black hover:text-blue-600 transition-colors">
                News & Events
              </Link>
              <Link href="/about" className="text-black hover:text-blue-600 transition-colors">
                About Us
              </Link>
              <Link href="/contact" className="text-black hover:text-blue-600 transition-colors">
                Contact
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-black"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <nav className="md:hidden flex flex-col space-y-4 mt-2 bg-white p-4 shadow-md rounded">
              <Link href="/colleges" className="text-black hover:text-blue-600">
                Colleges
              </Link>
              <Link href="/news-events" className="text-black hover:text-blue-600">
                News & Events
              </Link>
              <Link href="/about" className="text-black hover:text-blue-600">
                About Us
              </Link>
              <Link href="/contact" className="text-black hover:text-blue-600">
                Contact
              </Link>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}
