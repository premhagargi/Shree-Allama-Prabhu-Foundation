export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-secondary text-secondary-foreground py-8 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm">
          &copy; {currentYear} Shree Allama Prabhu Foundation. All rights reserved.
        </p>
        <p className="text-xs mt-2">
          Designed with care for a brighter future.
        </p>
      </div>
    </footer>
  );
}
