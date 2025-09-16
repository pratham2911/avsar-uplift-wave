import { useState, useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Users, BookOpen, Heart, Award, MapPin, Calendar } from "lucide-react";

const stats = [
  {
    icon: Users,
    number: 500,
    suffix: "+",
    label: "Children Educated",
    description: "Providing free education and learning support"
  },
  {
    icon: BookOpen,
    number: 50,
    suffix: "+",
    label: "Programs Conducted",
    description: "Health, skill development & awareness programs"
  },
  {
    icon: Heart,
    number: 1000,
    suffix: "+",
    label: "Lives Impacted",
    description: "Through direct and indirect interventions"
  },
  {
    icon: Award,
    number: 25,
    suffix: "+",
    label: "Government Schemes",
    description: "Facilitated access to rightful benefits"
  }
];

const achievements = [
  {
    icon: MapPin,
    title: "Community Trust Building",
    description: "Established strong relationships within communities, enabling better outreach and program effectiveness."
  },
  {
    icon: Calendar,
    title: "Continuous Impact",
    description: "Regular programs ensuring sustained development and long-term positive change in target communities."
  },
  {
    icon: Users,
    title: "Volunteer Network",
    description: "Growing network of dedicated volunteers committed to our mission of social transformation."
  },
  {
    icon: Heart,
    title: "Holistic Approach",
    description: "Addressing education, health, skill development, and social empowerment in an integrated manner."
  }
];

const CounterAnimation = ({ number, suffix = "", duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const end = number;
    const incrementTime = duration / end;

    const timer = setInterval(() => {
      start += Math.ceil(end / (duration / 50));
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 50);

    return () => clearInterval(timer);
  }, [isVisible, number, duration]);

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-bold text-primary animate-pulse">
      {count}{suffix}
    </div>
  );
};

const ImpactSection = () => {
  const cardsRef = useRef(null);
  const videosRef = useRef(null);

  useEffect(() => {
    const adjustVideoHeight = () => {
      if (cardsRef.current && videosRef.current) {
        const cardsHeight = cardsRef.current.getBoundingClientRect().height;
        videosRef.current.style.height = `${cardsHeight}px`;
      }
    };

    adjustVideoHeight();
    window.addEventListener('resize', adjustVideoHeight);
    return () => window.removeEventListener('resize', adjustVideoHeight);
  }, []);

  return (
    <section id="impact" className="py-20 bg-gradient-to-b from-orange-50/50 to-background">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Header Section */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 relative">
            Our <span className="text-gradient bg-gradient-to-r from-orange-500 to-red-500">Impact</span> & Achievements
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full" />
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Since our inception, we have been committed to creating meaningful change in the lives of 
            underprivileged children and communities. Here's the impact we've made together.
          </p>
        </div>

        {/* AVSAR Full Form Overlay */}
        <div className="text-center mb-12 fade-in-up">
          <div className="relative inline-block bg-gradient-to-r from-orange-500/90 to-red-500/90 text-white p-4 rounded-xl shadow-[0_0_15px_rgba(255,165,0,0.6)] backdrop-blur-sm">
            <h3 className="text-lg md:text-xl font-bold tracking-wide animate-pulse-slow text-center">
              AVSAR: A Vision For Social Awareness and Reform
            </h3>
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-red-500 opacity-50 blur-sm rounded-xl" />
          </div>
        </div>

        {/* Statistics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 fade-in-up">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="card-feature p-6 text-center hover-lift group relative overflow-hidden bg-white/80 backdrop-blur-sm border border-orange-500/30 shadow-[0_0_15px_rgba(255,165,0,0.3)] hover:shadow-[0_0_20px_rgba(255,165,0,0.6)] transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-100/10 to-orange-200/10 group-hover:opacity-20 transition-opacity" />
              <div className="relative z-10">
                <div className="hero-gradient p-4 rounded-xl w-fit mx-auto mb-4 group-hover:animate-pulse">
                  <stat.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <CounterAnimation number={stat.number} suffix={stat.suffix} />
                <h3 className="text-xl font-semibold text-foreground mt-2 mb-3 group-hover:text-orange-600 transition-colors">
                  {stat.label}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {stat.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Achievements and Videos */}
        <div className="fade-in-up">
          <h3 className="text-3xl font-bold text-center text-foreground mb-12 relative">
            Key <span className="text-gradient bg-gradient-to-r from-orange-500 to-red-500">Achievements</span>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full" />
          </h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {/* YouTube Videos (Left Side) */}
            <div ref={videosRef} className="flex flex-col justify-start items-center space-y-6">
              {/* First Video */}
              <Card className="w-full max-w-md p-4 bg-white/80 backdrop-blur-sm border border-orange-500/30 shadow-[0_0_15px_rgba(255,165,0,0.3)] hover:shadow-[0_0_20px_rgba(255,165,0,0.6)] transition-all duration-300">
                <div className="relative w-full" style={{ paddingBottom: "56.25%" /* 16:9 aspect ratio */ }}>
                  <iframe
                    src="https://www.youtube.com/embed/0JXqBqkcYxk?si=-d3SXlFQnta3_4U_&autoplay=1&mute=1"
                    title="A Happy Day | AVSAR Social Foundation"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute top-0 left-0 w-full h-full rounded-lg"
                  ></iframe>
                </div>
              </Card>
              {/* Second Video */}
              <Card className="w-full max-w-md p-4 bg-white/80 backdrop-blur-sm border border-orange-500/30 shadow-[0_0_15px_rgba(255,165,0,0.3)] hover:shadow-[0_0_20px_rgba(255,165,0,0.6)] transition-all duration-300">
                <div className="relative w-full" style={{ paddingBottom: "56.25%" /* 16:9 aspect ratio */ }}>
                  <iframe
                    src="https://www.youtube.com/embed/Zyo1DtBWhaA?si=zEuQCuOwJtnlvY5C&autoplay=1&mute=1"
                    title="Celebrating Independence Day | AVSAR Social Foundation"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute top-0 left-0 w-full h-full rounded-lg"
                  ></iframe>
                </div>
              </Card>
            </div>
            {/* Achievements Cards (Right Side) */}
            <div ref={cardsRef} className="space-y-6">
              {achievements.map((achievement, index) => (
                <Card
                  key={index}
                  className="card-warm p-6 hover-lift relative overflow-hidden bg-white/80 backdrop-blur-sm border border-orange-500/30 shadow-[0_0_15px_rgba(255,165,0,0.3)] hover:shadow-[0_0_20px_rgba(255,165,0,0.6)] transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-100/10 to-orange-200/10 group-hover:opacity-20 transition-opacity" />
                  <div className="relative z-10 flex items-start space-x-4">
                    <div className="hero-gradient p-3 rounded-lg shrink-0">
                      <achievement.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-2 group-hover:text-orange-600 transition-colors">
                        {achievement.title}
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Quote Section */}
        <div className="text-center mt-8 fade-in-up">
          <Card className="card-feature p-8 rounded-2xl max-w-4xl mx-auto relative overflow-hidden bg-white/90 backdrop-blur-md border border-orange-500/50 shadow-[0_0_20px_rgba(255,165,0,0.4)] hover:shadow-[0_0_25px_rgba(255,165,0,0.7)] transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-orange-600/10" />
            <div className="relative z-10">
              <blockquote className="text-xl md:text-2xl font-medium text-foreground mb-6 leading-relaxed italic">
                "Real change begins at the grassroots. Through AVSAR, we aim to create lasting impact 
                by ensuring that progress is not just immediate but also sustainable."
              </blockquote>
              <div className="flex items-center justify-center space-x-4">
                <div className="w-12 h-12 hero-gradient rounded-full flex items-center justify-center ring-2 ring-orange-500/50">
                  <Heart className="h-6 w-6 text-primary-foreground" />
                </div>
                <div className="text-left">
                  <p className="font-semibold text-foreground">Shivam Singh Rajawat</p>
                  <p className="text-sm text-muted-foreground">Founder, AVSAR Social Foundation</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;