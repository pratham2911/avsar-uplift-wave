import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Users, Heart, Lightbulb, Target, Globe } from "lucide-react";

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
  return (
    <section id="programs" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our <span className="text-gradient">Programs</span> & Initiatives
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Through our diverse range of programs, we address the root causes of inequality and 
            create sustainable pathways for community development and individual empowerment.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 fade-in-up">
          {programs.map((program, index) => (
            <Card key={index} className="card-feature p-6 hover-lift group overflow-hidden relative">
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${program.color} opacity-5 group-hover:opacity-10 transition-opacity`} />
              
              <div className="relative z-10">
                {/* Icon */}
                <div className="hero-gradient p-4 rounded-xl w-fit mb-6 group-hover:animate-pulse-warm">
                  <program.icon className="h-8 w-8 text-primary-foreground" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {program.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {program.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {program.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3 shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                >
                  Learn More
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 fade-in-up">
          <div className="card-warm p-8 rounded-2xl max-w-4xl mx-auto">
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
                className="hero-gradient hover-glow"
                onClick={() => window.open('https://rzp.io/rzp/donate-avsarsocialfoundation', '_blank')}
              >
                <Heart className="h-5 w-5 mr-2" />
                Support Our Programs
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => document.getElementById('volunteer')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Users className="h-5 w-5 mr-2" />
                Volunteer With Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;