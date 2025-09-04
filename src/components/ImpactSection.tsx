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

const CounterAnimation = ({ number, suffix = "", duration = 2000 }: { number: number, suffix?: string, duration?: number }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

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
    <div ref={ref} className="text-4xl md:text-5xl font-bold text-primary animate-count-up">
      {count}{suffix}
    </div>
  );
};

const ImpactSection = () => {
  return (
    <section id="impact" className="py-20 warm-gradient">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our <span className="text-gradient">Impact</span> & Achievements
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Since our inception, we have been committed to creating meaningful change in the lives of 
            underprivileged children and communities. Here's the impact we've made together.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 fade-in-up">
          {stats.map((stat, index) => (
            <Card key={index} className="card-feature p-6 text-center hover-lift group">
              <div className="hero-gradient p-4 rounded-xl w-fit mx-auto mb-4 group-hover:animate-pulse-warm">
                <stat.icon className="h-8 w-8 text-primary-foreground" />
              </div>
              <CounterAnimation number={stat.number} suffix={stat.suffix} />
              <h3 className="text-xl font-semibold text-foreground mt-2 mb-3">
                {stat.label}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {stat.description}
              </p>
            </Card>
          ))}
        </div>

        {/* Achievements */}
        <div className="fade-in-up">
          <h3 className="text-3xl font-bold text-center text-foreground mb-12">
            Key <span className="text-gradient">Achievements</span>
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <Card key={index} className="card-warm p-6 hover-lift">
                <div className="flex items-start space-x-4">
                  <div className="hero-gradient p-3 rounded-lg shrink-0">
                    <achievement.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">
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

        {/* Quote Section */}
        <div className="text-center mt-16 fade-in-up">
          <div className="card-feature p-8 rounded-2xl max-w-4xl mx-auto relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-primary/10" />
            <div className="relative z-10">
              <blockquote className="text-xl md:text-2xl font-medium text-foreground mb-6 leading-relaxed">
                "Real change begins at the grassroots. Through AVSAR, we aim to create lasting impact 
                by ensuring that progress is not just immediate but also sustainable."
              </blockquote>
              <div className="flex items-center justify-center space-x-4">
                <div className="w-12 h-12 hero-gradient rounded-full flex items-center justify-center">
                  <Heart className="h-6 w-6 text-primary-foreground" />
                </div>
                <div className="text-left">
                  <p className="font-semibold text-foreground">Shivam Singh Rajawat</p>
                  <p className="text-sm text-muted-foreground">Founder, AVSAR Social Foundation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;