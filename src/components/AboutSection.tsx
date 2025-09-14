import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Heart, Users, Target, Shield, Handshake, Lightbulb } from "lucide-react";
import founderImage from "@/assets/founder-portrait.jpg";

// Import images for the slider (replace with your actual image paths)
import image1 from "@/assets/kiddos1.jpg";
import image2 from "@/assets/kiddos2.jpg";
import image3 from "@/assets/kiddos3.jpg";
import image11 from "@/assets/kiddos11.jpg";
// import image24 from "@/assets/kiddos24.jpg";
import image8 from "@/assets/kiddos8.jpg";

const sliderImages = [
  { src: image1, alt: "Educational programs at AVSAR" },
  { src: image2, alt: "Community outreach and inclusion" },
  { src: image3, alt: "Youth skill development workshops" },
  { src: image11, alt: "Youth skill development workshops" },
  // { src: image24, alt: "Youth skill development workshops" },
  { src: image8, alt: "Youth skill development workshops" }
];

const values = [
  {
    icon: Heart,
    title: "Education First",
    description: "Believing education is the strongest tool for transformation"
  },
  {
    icon: Users,
    title: "Equality & Inclusion",
    description: "Ensuring opportunities reach the most marginalized sections"
  },
  {
    icon: Shield,
    title: "Empathy & Humanity",
    description: "Serving with compassion, respect, and care for every life"
  },
  {
    icon: Target,
    title: "Transparency & Integrity",
    description: "Building trust through honesty, accountability, and openness"
  },
  {
    icon: Handshake,
    title: "Collaboration & Community",
    description: "Working together with people, partners, and institutions"
  },
  {
    icon: Lightbulb,
    title: "Innovation & Growth",
    description: "Finding creative, practical ways to uplift society"
  }
];

const AboutSection = () => {
  // State for controlling the active slide
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <section id="about" className="py-8 warm-gradient">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Mission Section with Slider on Left, Cards on Right */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our <span className="text-gradient">Mission</span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Avsar Social Foundation is committed to creating meaningful opportunities for underprivileged 
              children and communities by focusing on education, skill development, health awareness, and social empowerment.
            </p>
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Left Side: Image Slider */}
              <div className="relative h-64 md:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0">
                  {sliderImages.map((image, index) => (
                    <img
                      key={index}
                      src={image.src}
                      alt={image.alt}
                      className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
                      style={{ opacity: index === currentSlide ? 1 : 0 }}
                    />
                  ))}
                </div>
                {/* Navigation Dots */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {sliderImages.map((_, index) => (
                    <button
                      key={index}
                      className={`w-3 h-3 rounded-full ${
                        index === currentSlide ? "bg-white" : "bg-white/50"
                      } hover:bg-white transition-colors`}
                      onClick={() => setCurrentSlide(index)}
                    />
                  ))}
                </div>
                {/* Overlay Gradient for better readability if needed */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/8 via-transparent to-transparent" />
              </div>

              {/* Right Side: Mission Cards */}
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div className="card-warm p-6 rounded-xl hover-lift relative overflow-hidden border border-transparent shadow-[0_0_10px_rgba(255,165,0,0.5)] hover:shadow-[0_0_11px_rgba(255,165,0,0.8)] transition-shadow duration-300">
                  <h3 className="font-semibold text-primary mb-3">Quality Education</h3>
                  <p className="text-muted-foreground">
                    Provide free, quality education that nurtures knowledge, creativity, and character.
                  </p>
                </div>
                <div className="card-warm p-6 rounded-xl hover-lift relative overflow-hidden border border-transparent shadow-[0_0_10px_rgba(255,165,0,0.5)] hover:shadow-[0_0_11px_rgba(255,165,0,0.8)] transition-shadow duration-300">
                  <h3 className="font-semibold text-primary mb-3">Skill Development</h3>
                  <p className="text-muted-foreground">
                    Equip youth and women with skills and training that enable them to become self-reliant and future-ready.
                  </p>
                </div>
                <div className="card-warm p-6 rounded-xl hover-lift relative overflow-hidden border border-transparent shadow-[0_0_10px_rgba(255,165,0,0.5)] hover:shadow-[0_0_11px_rgba(255,165,0,0.8)] transition-shadow duration-300">
                  <h3 className="font-semibold text-primary mb-3">Health Awareness</h3>
                  <p className="text-muted-foreground">
                    Spread awareness on health, hygiene, and social issues, building healthier communities.
                  </p>
                </div>
                <div className="card-warm p-6 rounded-xl hover-lift relative overflow-hidden border border-transparent shadow-[0_0_10px_rgba(255,165,0,0.5)] hover:shadow-[0_0_11px_rgba(255,165,0,0.8)] transition-shadow duration-300">
                  <h3 className="font-semibold text-primary mb-3">Equal Access</h3>
                  <p className="text-muted-foreground">
                    Bridge the gap between privilege and underprivilege by ensuring equal access to resources.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-8 fade-in-up">
          <h3 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            🤝 Core <span className="text-gradient">Values</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="card-feature p-6 hover-lift relative overflow-hidden border border-transparent shadow-[0_0_10px_rgba(255,165,0,0.5)] hover:shadow-[0_0_11px_rgba(255,165,0,0.8)] transition-shadow duration-300">
                <div className="flex items-start space-x-4">
                  <div className="hero-gradient p-3 rounded-lg shrink-0">
                    <value.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">{value.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* About Foundation */}
        <div className="fade-in-up">
          <h3 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            🌟 About <span className="text-gradient">AVSAR Social Foundation</span>
          </h3>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative bg-gradient-to-r from-orange-50 to-amber-50 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="absolute top-0 left-0 w-16 h-16 bg-orange-80 rounded-full opacity-30 -translate-x-8 -translate-y-8" />
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-amber-80 rounded-full opacity-30 translate-x-12 translate-y-12" />
              <p className="text-lg text-foreground font-medium mb-6 leading-relaxed relative z-10">
                Avsar Social Foundation is a beacon of hope, dedicated to uplifting underprivileged children and communities. 
                Our mission is to provide the opportunity ("Avsar") to learn, grow, and thrive with dignity, fostering a brighter future for all.
              </p>
              <p className="text-foreground mb-6 leading-relaxed relative z-10">
                Founded by <strong className="text-primary">Shivam Singh Rajawat</strong>, a former Border Security Force (BSF) officer, 
                the foundation was born from his unwavering passion for social change. His vision was sparked by a deep concern for children 
                denied access to education and basic opportunities, driving him to dedicate his life to this cause.
              </p>
              <p className="text-foreground mb-6 leading-relaxed relative z-10">
                Since our inception, we’ve empowered countless underprivileged children through free education, mentorship, and 
                community trust. Our work is rooted in compassion, ensuring every step we take builds stronger, more inclusive communities.
              </p>
              <blockquote className="border-l-4 border-orange-400 pl-6 italic text-foreground/80 text-lg relative z-10">
                <span className="text-orange-500">“Education is the most powerful weapon which you can use to change the world.”</span> — Nelson Mandela
              </blockquote>
            </div>
            <div className="text-center relative">
              <div className="relative inline-block group">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-300 to-amber-300 opacity-0 group-hover:opacity-8 rounded-2xl transition-opacity duration-300 blur-md" />
                <img
                  src={founderImage}
                  alt="Shivam Singh Rajawat - Founder"
                  className="w-80 h-80 object-cover rounded-2xl shadow-xl mx-auto relative z-10 transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute -bottom-6 -right-6 hero-gradient p-4 rounded-xl shadow-lg">
                  <Heart className="h-8 w-8 text-primary-foreground animate-pulse" />
                </div>
              </div>
              <div className="mt-8 relative z-10">
                <h4 className="text-xl font-semibold text-foreground mb-2">Shivam Singh Rajawat</h4>
                <p className="text-primary font-medium mb-4">Founder, AVSAR Social Foundation</p>
                <p className="text-sm text-foreground italic max-w-md mx-auto bg-orange-50/50 p-4 rounded-lg">
                  “Creating a society where every child has access to education, every youth has opportunities 
                  to grow, and every community can live with dignity.”
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;