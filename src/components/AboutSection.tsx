import { Card } from "@/components/ui/card";
import { Heart, Users, Target, Shield, Handshake, Lightbulb } from "lucide-react";
import founderImage from "@/assets/founder-portrait.jpg";

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
  return (
    <section id="about" className="py-20 warm-gradient">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Mission Section */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our <span className="text-gradient">Mission</span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Avsar Social Foundation is committed to creating meaningful opportunities for underprivileged 
              children and communities by focusing on education, skill development, health awareness, and social empowerment.
            </p>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div className="card-warm p-6 rounded-xl hover-lift">
                <h3 className="font-semibold text-primary mb-3">Quality Education</h3>
                <p className="text-muted-foreground">
                  Provide free, quality education that nurtures knowledge, creativity, and character.
                </p>
              </div>
              <div className="card-warm p-6 rounded-xl hover-lift">
                <h3 className="font-semibold text-primary mb-3">Skill Development</h3>
                <p className="text-muted-foreground">
                  Equip youth and women with skills and training that enable them to become self-reliant and future-ready.
                </p>
              </div>
              <div className="card-warm p-6 rounded-xl hover-lift">
                <h3 className="font-semibold text-primary mb-3">Health Awareness</h3>
                <p className="text-muted-foreground">
                  Spread awareness on health, hygiene, and social issues, building healthier communities.
                </p>
              </div>
              <div className="card-warm p-6 rounded-xl hover-lift">
                <h3 className="font-semibold text-primary mb-3">Equal Access</h3>
                <p className="text-muted-foreground">
                  Bridge the gap between privilege and underprivilege by ensuring equal access to resources.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-20 fade-in-up">
          <h3 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            🤝 Core <span className="text-gradient">Values</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="card-feature p-6 hover-lift">
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
            <div>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Avsar Social Foundation is a non-profit organization dedicated to uplifting underprivileged 
                children and communities by providing them with the opportunity ("Avsar") to learn, grow, and 
                live with dignity.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Founded by <strong>Shivam Singh Rajawat</strong>, who left his job in the Border Security Force (BSF) 
                to fully dedicate himself to social service, the foundation was born out of his deep concern for 
                children who lack access to education and basic opportunities.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Since its inception, we have been teaching several underprivileged children, providing them with 
                free learning support and mentorship while building strong trust within the community.
              </p>
              <blockquote className="border-l-4 border-primary pl-6 italic text-muted-foreground">
                "Education is the most powerful weapon which you can use to change the world." — Nelson Mandela
              </blockquote>
            </div>
            <div className="text-center">
              <div className="relative inline-block">
                <img
                  src={founderImage}
                  alt="Shivam Singh Rajawat - Founder"
                  className="w-80 h-80 object-cover rounded-2xl shadow-xl mx-auto"
                />
                <div className="absolute -bottom-6 -right-6 hero-gradient p-4 rounded-xl shadow-lg">
                  <Heart className="h-8 w-8 text-primary-foreground" />
                </div>
              </div>
              <div className="mt-8">
                <h4 className="text-xl font-semibold text-foreground mb-2">Shivam Singh Rajawat</h4>
                <p className="text-primary font-medium mb-4">Founder, AVSAR Social Foundation</p>
                <p className="text-sm text-muted-foreground italic">
                  "Creating a society where every child has access to education, every youth has opportunities 
                  to grow, and every community can live with dignity."
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