import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Heart, Users, Target } from "lucide-react";
import heroEducation from "@/assets/hero-education.jpg";
import volunteersImage from "@/assets/community-learning.jpg";
import skillsImage from "@/assets/skills-development.jpg";

const slides = [
  {
    image: skillsImage,
    title: "Education for Every Child",
    subtitle: "Providing free, quality education to underprivileged children",
    description: "Join us in creating opportunities for those who need them most"
  },
  {
    image: volunteersImage,
    title: "Community Empowerment",
    subtitle: "Building stronger, healthier communities together",
    description: "Through health awareness and social empowerment programs"
  },
  {
    image: heroEducation,
    title: "Skill Development",
    subtitle: "Empowering youth and women with future-ready skills",
    description: "Creating pathways to self-reliance and growth"
  }
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Image Slider */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors z-10"
      >
        <ChevronLeft className="h-6 w-6 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors z-10"
      >
        <ChevronRight className="h-6 w-6 text-white" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-primary scale-125" : "bg-white/40"
            }`}
          />
        ))}
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex items-center z-10">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-2xl">
            <div className="fade-in-up">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                {slides[currentSlide].title}
              </h1>
            </div>
            <div className="fade-in-up-delay">
              <p className="text-xl md:text-2xl text-white/90 mb-4 font-medium">
                {slides[currentSlide].subtitle}
              </p>
              <p className="text-lg text-white/80 mb-8 leading-relaxed">
                {slides[currentSlide].description}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 fade-in-up-delay">
              <Button 
                size="lg" 
                className="hero-gradient hover-glow text-lg px-8 py-3"
                onClick={() => window.open('https://rzp.io/rzp/donate-avsarsocialfoundation', '_blank')}
              >
                <Heart className="h-5 w-5 mr-2" />
                Donate Now
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30 text-lg px-8 py-3"
                onClick={() => scrollToSection('volunteer')}
              >
                <Users className="h-5 w-5 mr-2" />
                Join as Volunteer
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 animate-bounce z-10">
        <button
          onClick={() => scrollToSection('about')}
          className="flex flex-col items-center text-white/80 hover:text-white transition-colors"
        >
          <Target className="h-6 w-6 mb-2" />
          <span className="text-sm">Scroll to explore</span>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;