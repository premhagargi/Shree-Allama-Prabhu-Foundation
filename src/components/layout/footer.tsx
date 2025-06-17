
import Link from 'next/link';
import { Landmark, Newspaper, Home, Info } from 'lucide-react'; // Example icons

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-secondary text-secondary-foreground py-12 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-4 group">
              <Landmark className="h-8 w-8 text-primary group-hover:text-accent transition-colors" />
              <span className="font-headline text-xl font-bold text-primary group-hover:text-accent transition-colors">
                Shree Allama Prabhu Foundation
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Empowering communities through dedicated service in education and beyond.
            </p>
          </div>
          <div>
            <h5 className="font-semibold text-foreground mb-4">Quick Links</h5>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm hover:text-primary transition-colors flex items-center">
                  <Home className="h-4 w-4 mr-2" /> Home
                </Link>
              </li>
              <li>
                <Link href="/news-events" className="text-sm hover:text-primary transition-colors flex items-center">
                  <Newspaper className="h-4 w-4 mr-2" /> News & Events
                </Link>
              </li>
              {/* Add more links as your site grows, e.g., About Us, Contact */}
              {/* <li>
                <Link href="/about" className="text-sm hover:text-primary transition-colors flex items-center">
                  <Info className="h-4 w-4 mr-2" /> About Us
                </Link>
              </li> */}
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-foreground mb-4">Contact Us</h5>
            <address className="text-sm not-italic space-y-1 text-muted-foreground">
              <p>123 Foundation Avenue, Knowledge City, State 54321</p>
              <p>Phone: <a href="tel:+918012340000" className="hover:text-primary transition-colors">+91-80-1234-0000</a></p>
              <p>Email: <a href="mailto:info@shreeallamaprabhufoundation.org" className="hover:text-primary transition-colors">info@shreeallamaprabhufoundation.org</a></p>
            </address>
          </div>
        </div>
        <div className="border-t border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Shree Allama Prabhu Foundation. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            Committed to building a brighter future.
            {/* Optional: <Link href="/privacy-policy" className="hover:text-primary">Privacy Policy</Link> | <Link href="/terms-of-service" className="hover:text-primary">Terms of Service</Link> */}
          </p>
        </div>
      </div>
    </footer>
  );
}
