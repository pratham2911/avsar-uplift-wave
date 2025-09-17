import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Heart } from "lucide-react";
import logo1 from "@/assets/avsrlogo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo and Tagline */}
          <div className="flex flex-col sm:flex-row items-center sm:space-x-3">
            <img
              src={logo1}
              alt="AVSAR Social Foundation Logo"
              className="h-10 sm:h-12 w-auto max-w-[180px] object-contain"
            />
            
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4 lg:space-x-6">
            <button
              onClick={() => scrollToSection("home")}
              className="text-foreground hover:text-primary transition-colors text-sm lg:text-base"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-foreground hover:text-primary transition-colors text-sm lg:text-base"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("programs")}
              className="text-foreground hover:text-primary transition-colors text-sm lg:text-base"
            >
              Programs
            </button>
            <button
              onClick={() => scrollToSection("impact")}
              className="text-foreground hover:text-primary transition-colors text-sm lg:text-base"
            >
              Impact
            </button>
            <button
              onClick={() => scrollToSection("volunteer")}
              className="text-foreground hover:text-primary transition-colors text-sm lg:text-base"
            >
              Volunteer
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() =>
                window.open(
                  "https://rzp.io/rzp/donate-avsarsocialfoundation",
                  "_blank"
                )
              }
              className="hover-glow px-3"
            >
              <Heart className="h-4 w-4 mr-2" />
              Donate Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 sm:top-20 left-0 right-0 bg-background border-b border-border shadow-lg min-h-screen sm:min-h-fit">
            <nav className="flex flex-col p-4 space-y-4">
              <button
                onClick={() => scrollToSection("home")}
                className="text-left text-foreground hover:text-primary transition-colors py-2 text-base"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-left text-foreground hover:text-primary transition-colors py-2 text-base"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("programs")}
                className="text-left text-foreground hover:text-primary transition-colors py-2 text-base"
              >
                Programs
              </button>
              <button
                onClick={() => scrollToSection("impact")}
                className="text-left text-foreground hover:text-primary transition-colors py-2 text-base"
              >
                Impact
              </button>
              <button
                onClick={() => scrollToSection("volunteer")}
                className="text-left text-foreground hover:text-primary transition-colors py-2 text-base"
              >
                Volunteer
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-left text-foreground hover:text-primary transition-colors py-2 text-base"
              >
                Contact
              </button>
              <Button
                onClick={() =>
                  window.open(
                    "https://rzp.io/rzp/donate-avsarsocialfoundation",
                    "_blank"
                  )
                }
                className="w-full mt-4"
              >
                <Heart className="h-4 w-4 mr-2" />
                Donate Now
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;