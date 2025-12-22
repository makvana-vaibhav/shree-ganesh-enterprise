import { Link } from "wouter";
import { Facebook, Twitter, Linkedin, Instagram, MapPin, Phone, Mail, ArrowRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-secondary text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
                <span className="text-white font-bold text-lg">M</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-lg leading-none">MODERN</span>
                <span className="text-[10px] text-gray-300 font-medium tracking-widest">INDUSTRIAL</span>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              We deliver precision engineering solutions and high-quality industrial components. ISO 9001:2015 certified manufacturer dedicated to excellence.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 font-display">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: "About Us", href: "/about" },
                { name: "Our Products", href: "/products" },
                { name: "Manufacturing Process", href: "/process" },
                { name: "Contact Us", href: "/contact" },
                { name: "Request Quote", href: "/contact" },
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-gray-300 hover:text-primary transition-colors flex items-center gap-2 text-sm group">
                    <ArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 font-display">Contact Us</h3>
            <ul className="space-y-4 text-sm text-gray-300">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>123 Industrial Park Drive,<br />Tech Valley, CA 94043</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a href="tel:+15551234567" className="hover:text-white transition-colors">+1 (555) 123-4567</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a href="mailto:info@industrial.com" className="hover:text-white transition-colors">info@industrial.com</a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-6 font-display">Newsletter</h3>
            <p className="text-gray-300 text-sm mb-4">Subscribe to our newsletter for latest updates and news.</p>
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-gray-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
              />
              <button className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-2.5 rounded-lg transition-colors text-sm">
                Subscribe
              </button>
            </form>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
          <p>© {new Date().getFullYear()} Modern Industrial. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
