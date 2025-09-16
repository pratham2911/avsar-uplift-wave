import { useState, useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Users, Heart, Lightbulb, Target, Globe, ChevronDown } from "lucide-react";

// Import images for the slider (replace with your actual image paths)
import image1 from "@/assets/kiddos1.jpg";
import image2 from "@/assets/kiddos2.jpg";
import image3 from "@/assets/kiddos3.jpg";
import image14 from "@/assets/kiddos14.jpg";
import image5 from "@/assets/kiddos5.jpg";
import image6 from "@/assets/kiddos6.jpg";
import image7 from "@/assets/kiddos7.jpg";
import image8 from "@/assets/kiddos8.jpg";
import image9 from "@/assets/kiddos9.jpg";
import image10 from "@/assets/kiddos10.jpg";
import image11 from "@/assets/kiddos11.jpg";
import image23 from "@/assets/kiddos23.jpg";
import image24 from "@/assets/kiddos24.jpg";
import image25 from "@/assets/kiddos25.jpg";
import image15 from "@/assets/kiddos15.jpg";
import image17 from "@/assets/kiddos17.jpeg";
import image16 from "@/assets/kiddos16.jpg";
import image19 from "@/assets/kiddos19.jpg";

const sliderImages = [
  { src: image1, alt: "Free Education Initiative" },
  { src: image2, alt: "Skill Development Workshops" },
  { src: image3, alt: "Health Awareness Camp" },
  { src: image14, alt: "Community Empowerment Event" },
  { src: image5, alt: "Women Empowerment Program" },
  { src: image6, alt: "SDG Alignment Activities" },
  { src: image7, alt: "Educational Outreach" },
  { src: image8, alt: "Youth Training Session" },
  { src: image9, alt: "Health and Hygiene Workshop" },
  { src: image10, alt: "Community Development Project" },
  { src: image11, alt: "Community Development Project" },
  { src: image23, alt: "Community Development Project" },
  { src: image24, alt: "Community Development Project" },
  { src: image25, alt: "Community Development Project" },
  { src: image15, alt: "Community Development Project" },
  { src: image17, alt: "Community Development Project" },
  { src: image16, alt: "Community Development Project" }, 
  { src: image19, alt: "Community Development Project" }, 
];

const programs = [
  {
    icon: BookOpen,
    title: "Free Education Initiative",
    description: "Providing quality education to underprivileged children with focus on creativity and character development.",
    features: ["Free learning materials", "Qualified teachers", "Interactive learning methods", "Character building activities"],
    color: "from-orange-500 to-red-500"
  },
  {
    icon: Lightbulb,
    title: "Skill Development Programs",
    description: "Empowering youth and women with future-ready skills to achieve self-reliance and economic independence.",
    features: ["Technical training", "Soft skills development", "Entrepreneurship guidance", "Job placement support"],
    color: "from-blue-500 to-indigo-500"
  },
  {
    icon: Heart,
    title: "Health & Hygiene Awareness",
    description: "Building healthier communities through comprehensive health education and hygiene awareness programs.",
    features: ["Health workshops", "Hygiene education", "Medical camps", "Nutrition awareness"],
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Users,
    title: "Community Empowerment",
    description: "Strengthening communities by facilitating access to government schemes and social support systems.",
    features: ["Government scheme awareness", "Documentation support", "Community meetings", "Social advocacy"],
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Target,
    title: "Women Empowerment",
    description: "Focusing on women's education, skill development, and creating opportunities for economic participation.",
    features: ["Women's education programs", "Skill training workshops", "Microfinance support", "Leadership development"],
    color: "from-teal-500 to-cyan-500"
  },
  {
    icon: Globe,
    title: "SDG Alignment",
    description: "Working towards Sustainable Development Goals, particularly Quality Education, Health, and Reduced Inequalities.",
    features: ["SDG 4: Quality Education", "SDG 3: Good Health", "SDG 10: Reduced Inequalities", "Sustainable impact"],
    color: "from-amber-500 to-orange-500"
  }
];

const ProgramsSection = () => {
  const [offset, setOffset] = useState(0);
  const [activeCard, setActiveCard] = useState(null);
  const sliderRef = useRef(null);

  // Auto-slide functionality (right to left)
  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prev) => {
        const newOffset = prev - 1;
        const totalWidth = 200 * sliderImages.length;
        return newOffset <= -totalWidth ? 0 : newOffset;
      });
    }, 16);
    return () => clearInterval(interval);
  }, []);

  // Toggle card visibility on click
  const toggleCard = (index) => {
    setActiveCard(activeCard === index ? null : index);
  };

  return (
    <section id="programs" className="py-20 bg-gradient-to-b from-orange-50/50 to-background">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Header Section */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 relative">
            Our <span className="text-gradient bg-gradient-to-r from-orange-500 to-red-500">Programs</span> & Initiatives
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full" />
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Through our diverse range of programs, we address the root causes of inequality and 
            create sustainable pathways for community development and individual empowerment.
          </p>
        </div>

        {/* Programs Cards */}
        <div className="space-y-4 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8 md:space-y-0 fade-in-up">
          {programs.map((program, index) => (
            <div key={index} className="block md:hidden">
              {/* Mobile: Show title with icon and down arrow, clickable to reveal card */}
              <button
                onClick={() => toggleCard(index)}
                className="w-full text-left p-4 bg-white/80 backdrop-blur-sm border border-orange-500/30 rounded-lg shadow-[0_0_10px_rgba(255,165,0,0.3)] hover:shadow-[0_0_15px_rgba(255,165,0,0.5)] transition-all duration-300 flex items-center justify-between"
              >
                <div className="flex items-center">
                  <div className="hero-gradient p-2 rounded-lg mr-3">
                    <program.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-orange-600 transition-colors">
                    {program.title}
                  </h3>
                </div>
                <ChevronDown
                  className={`h-6 w-6 text-orange-500 transform transition-transform duration-300 ${
                    activeCard === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {/* Full card content shown when active */}
              {activeCard === index && (
                <Card
                  className="mt-2 p-6 card-feature overflow-hidden relative bg-white/80 backdrop-blur-sm border border-orange-500/30 shadow-[0_0_15px_rgba(255,165,0,0.3)] transition-all duration-300"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${program.color} opacity-5 transition-opacity`} />
                  <div className="relative z-10">
                    <div className="hero-gradient p-4 rounded-xl w-fit mb-6">
                      <program.icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-4 transition-colors">
                      {program.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {program.description}
                    </p>
                    <div className="space-y-2 mb-6">
                      {program.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mr-3 shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              )}
            </div>
          ))}
          {/* Desktop: Show all cards as before */}
          {programs.map((program, index) => (
            <Card
              key={index}
              className="hidden md:block card-feature p-6 hover-lift group overflow-hidden relative bg-white/80 backdrop-blur-sm border border-orange-500/30 shadow-[0_0_15px_rgba(255,165,0,0.3)] hover:shadow-[0_0_20px_rgba(255,165,0,0.6)] transition-all duration-300"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${program.color} opacity-5 group-hover:opacity-10 transition-opacity`} />
              <div className="relative z-10">
                <div className="hero-gradient p-4 rounded-xl w-fit mb-6 group-hover:animate-pulse">
                  <program.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4 group-hover:text-orange-600 transition-colors">
                  {program.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {program.description}
                </p>
                <div className="space-y-2 mb-6">
                  {program.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mr-3 shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Image Slider (Right to Left) */}
        <div className="my-16 fade-in-up">
          <div className="relative overflow-hidden h-40 md:h-48 lg:h-56">
            <div
              ref={sliderRef}
              className="flex"
              style={{
                transform: `translateX(${offset}px)`,
                transition: offset === 0 ? 'none' : 'transform 0.016s linear',
                display: 'flex',
                width: `${200 * sliderImages.length * 2}px`,
              }}
            >
              {[...sliderImages, ...sliderImages].map((image, index) => (
                <div key={index} className="flex-shrink-0 w-48 h-40 md:h-48 lg:h-56 mx-2">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover rounded-xl border border-orange-500/50 shadow-[0_0_10px_rgba(255,165,0,0.3)] hover:shadow-[0_0_15px_rgba(255,165,0,0.5)] transition-shadow duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center fade-in-up">
          <Card className="card-warm p-8 rounded-2xl max-w-4xl mx-auto relative overflow-hidden bg-white/90 backdrop-blur-md border border-orange-500/50 shadow-[0_0_20px_rgba(255,165,0,0.4)] hover:shadow-[0_0_25px_rgba(255,165,0,0.7)] transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-orange-600/10" />
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Want to make a difference in someone's life?
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Join us in our mission to create opportunities and transform lives. Your support can help us reach more 
                communities and create lasting impact through education, skill development, and empowerment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="hero-gradient bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white hover-glow"
                  onClick={() => window.open('https://rzp.io/rzp/donate-avsarsocialfoundation', '_blank')}
                >
                  <Heart className="h-5 w-5 mr-2" />
                  Support Our Programs
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-orange-500 text-orange-500 hover:bg-orange-500/10"
                  onClick={() => document.getElementById('volunteer')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <Users className="h-5 w-5 mr-2" />
                  Volunteer With Us
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;