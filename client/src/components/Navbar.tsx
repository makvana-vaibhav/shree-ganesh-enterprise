import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Process", href: "/process" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-md py-2" : "bg-white py-4 shadow-sm"
      }`}
    >
      {/* Top Bar (Contact Info) - Hidden on Mobile */}
      <div className={`hidden lg:block border-b border-gray-100 mb-2 transition-all duration-300 ${scrolled ? "h-0 overflow-hidden opacity-0 mb-0" : "h-auto opacity-100"}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-end gap-6 text-sm text-gray-600 pb-2">
          <a href="tel:+1234567890" className="flex items-center gap-2 hover:text-primary transition-colors">
            <Phone className="w-4 h-4" /> +1 (555) 123-4567
          </a>
          <a href="mailto:info@industrial.com" className="flex items-center gap-2 hover:text-primary transition-colors">
            <Mail className="w-4 h-4" /> info@industrial.com
          </a>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">M</span>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-xl text-secondary leading-none">MODERN</span>
              <span className="text-xs text-gray-500 font-medium tracking-widest">INDUSTRIAL</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location === link.href ? "text-primary font-semibold" : "text-gray-700"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link href="/contact">
              <Button size="sm" className="bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20">
                Get a Quote
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700 hover:text-primary transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-xl animate-in slide-in-from-top-5">
          <div className="flex flex-col p-4 gap-4">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className={`text-base font-medium py-2 px-4 rounded-lg transition-colors ${
                  location === link.href ? "bg-primary/10 text-primary" : "text-gray-700 hover:bg-gray-50"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link href="/contact" onClick={() => setIsOpen(false)}>
              <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                Get a Quote
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
