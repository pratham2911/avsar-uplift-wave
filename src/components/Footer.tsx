import { Heart, Mail, Phone, MapPin, Facebook, Instagram, Youtube, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/avsar_logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "Facebook",
      icon: Facebook,
      url: "https://www.facebook.com/avsarsocialfoundationofficial"
    },
    {
      name: "Instagram", 
      icon: Instagram,
      url: "https://www.instagram.com/avsarsocialfoundation"
    },
    {
      name: "YouTube",
      icon: Youtube,
      url: "https://youtube.com/@ekpahal2024?si=YHfV0qPXULFDna3J"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/company/avsar-social-foundation"
    }
  ];

  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Programs", href: "#programs" },
    { name: "Our Impact", href: "#impact" },
    { name: "Volunteer", href: "#volunteer" },
    { name: "Contact", href: "#contact" }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 gap-8 py-16">
          {/* Organization Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 flex items-center justify-center overflow-hidden rounded-full">
                <img
                  src={logo}
                  alt="AVSAR Social Foundation Logo"
                  className="h-10 w-10 object-contain"
                />
              </div>
              <div>
                <h3 className="font-bold text-xl text-background">AVSAR Social Foundation</h3>
                <p className="text-sm text-background/80">A Vision for Social Awareness and Reform</p>
              </div>
            </div>
            <p className="text-background/80 mb-6 leading-relaxed max-w-md">
              Dedicated to uplifting underprivileged children and communities by providing them with 
              the opportunity to learn, grow, and live with dignity through education, skill development, 
              and social empowerment.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3 text-background/80">
                <Phone className="h-4 w-4 text-primary shrink-0" />
                <span className="text-sm">+91 89594 44059</span>
              </div>
              <div className="flex items-center space-x-3 text-background/80">
                <Mail className="h-4 w-4 text-primary shrink-0" />
                <span className="text-sm">avsarsocialfoundation@gmail.com</span>
              </div>
              <div className="flex items-start space-x-3 text-background/80">
                <MapPin className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                <button
                  onClick={() => window.open('https://maps.app.goo.gl/qd5biZT1qssTjPop9', '_blank')}
                  className="text-sm hover:text-primary transition-colors text-left"
                >
                  Visit our location (Click to view on map)
                </button>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold text-background mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <button
                    key={social.name}
                    onClick={() => window.open(social.url, '_blank')}
                    className="w-10 h-10 bg-background/10 hover:bg-primary rounded-lg flex items-center justify-center transition-colors group"
                  >
                    <social.icon className="h-5 w-5 text-background/80 group-hover:text-primary-foreground" />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-background mb-6">Quick Links</h4>
            <nav className="space-y-3">
              {quickLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="block text-background/80 hover:text-primary transition-colors text-left"
                >
                  {link.name}
                </button>
              ))}
            </nav>
          </div>

          {/* Support & Donate */}
          <div>
            <h4 className="font-semibold text-background mb-6">Support Our Mission</h4>
            <div className="space-y-4">
              <p className="text-sm text-background/80">
                Your support can change lives and create opportunities for those who need them most.
              </p>
              <Button 
                className="w-full hero-gradient hover-glow"
                onClick={() => window.open('https://rzp.io/rzp/donate-avsarsocialfoundation', '_blank')}
              >
                <Heart className="h-4 w-4 mr-2" />
                Donate Now
              </Button>
              <div className="text-xs text-background/60">
                <p className="mb-2">Alternative donation methods:</p>
                <button
                  onClick={() => window.open('https://i.postimg.cc/N0G3GTrV/IMG-20250917-210345-030.jpg', '_blank')}
                  className="text-primary hover:underline block mb-1"
                >
                  View QR Code for donations
                </button>
                <button
                  onClick={() => window.open('https://wa.me/p/8892970007457009/918959444059', '_blank')}
                  className="text-primary hover:underline block"
                >
                  WhatsApp for support
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-background/20 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between text-sm text-background/60">
            <div className="mb-4 md:mb-0">
              <p>&copy; {currentYear} AVSAR Social Foundation. All rights reserved.</p>
            </div>
            <div className="flex items-center space-x-6">
              <span>Founded by Shivam Singh Rajawat</span>
              <span className="hidden md:inline">•</span>
              <span>Registered Non-Profit Organization</span>
            </div>
          </div>
        </div>
      </div>

      {/* Inspiring Footer Message */}
      <div className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-6 py-6 text-center">
          <p className="font-medium">
            ✨ "Education is the most powerful weapon which you can use to change the world." - Nelson Mandela
          </p>
          <p className="text-sm mt-2 text-primary-foreground/80">
            Join us in creating a brighter future through education, empowerment, and hope. 💙
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;