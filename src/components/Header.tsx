import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Menu, X, Calendar, MapPin } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Doctors", href: "#doctors" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Emergency Bar */}
      <div className="hero-gradient py-2 px-4">
        <div className="container mx-auto flex items-center justify-between text-sm text-primary-foreground">
          <div className="flex items-center gap-6">
            <a href="tel:+1-800-HEALTH" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Phone className="h-4 w-4" />
              <span className="font-semibold">Emergency: 1-800-HEALTH</span>
            </a>
            <span className="hidden md:flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              123 Healthcare Ave, Medical City
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <span>Mon - Sun: 24/7</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="glass-effect border-b border-border/50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#home" className="flex items-center gap-3">
              <div className="w-10 h-10 hero-gradient rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">+</span>
              </div>
              <div>
                <h1 className="font-serif text-xl font-bold text-foreground">MediCare</h1>
                <p className="text-xs text-muted-foreground">Hospital & Medical Center</p>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-foreground/80 hover:text-primary font-medium transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-4">
              <Button variant="outline" size="default">
                Find a Doctor
              </Button>
              <Button variant="default" size="default">
                Book Appointment
              </Button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-foreground" />
              ) : (
                <Menu className="h-6 w-6 text-foreground" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 border-t border-border pt-4 animate-fade-in">
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-foreground/80 hover:text-primary font-medium transition-colors py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
                <div className="flex flex-col gap-3 mt-4">
                  <Button variant="outline" className="w-full">
                    Find a Doctor
                  </Button>
                  <Button variant="default" className="w-full">
                    Book Appointment
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
