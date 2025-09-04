import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Users, Heart, Lightbulb, Target, CheckCircle, Mail, Phone, User } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const volunteerOpportunities = [
  {
    icon: Heart,
    title: "Teaching & Mentoring",
    description: "Help us provide quality education to underprivileged children through teaching and mentoring.",
    commitment: "2-3 hours/week"
  },
  {
    icon: Lightbulb,
    title: "Skill Development",
    description: "Share your professional skills to train youth and women in various trades and technologies.",
    commitment: "4-6 hours/month"
  },
  {
    icon: Users,
    title: "Community Outreach",
    description: "Assist in organizing community programs, health camps, and awareness sessions.",
    commitment: "Flexible"
  },
  {
    icon: Target,
    title: "Program Support",
    description: "Help with program planning, documentation, and connecting families with government schemes.",
    commitment: "Project-based"
  }
];

const VolunteerSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    availability: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Application Submitted Successfully!",
      description: "Thank you for your interest in volunteering. We'll get back to you soon.",
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      interest: "",
      availability: "",
      message: ""
    });
    setIsSubmitting(false);
  };

  return (
    <section id="volunteer" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Join Our <span className="text-gradient">Volunteer</span> Community
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Be part of something meaningful. Your time, skills, and passion can help us create lasting 
            change in the lives of underprivileged children and communities.
          </p>
        </div>

        {/* Volunteer Opportunities */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 fade-in-up">
          {volunteerOpportunities.map((opportunity, index) => (
            <Card key={index} className="card-feature p-6 hover-lift group text-center">
              <div className="hero-gradient p-4 rounded-xl w-fit mx-auto mb-4 group-hover:animate-pulse-warm">
                <opportunity.icon className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                {opportunity.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {opportunity.description}
              </p>
              <div className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                {opportunity.commitment}
              </div>
            </Card>
          ))}
        </div>

        {/* Volunteer Application Form */}
        <div className="grid lg:grid-cols-2 gap-12 items-start fade-in-up">
          {/* Form */}
          <Card className="card-warm p-8">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Volunteer Application Form
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name" className="flex items-center mb-2">
                    <User className="h-4 w-4 mr-2 text-primary" />
                    Full Name *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="flex items-center mb-2">
                    <Mail className="h-4 w-4 mr-2 text-primary" />
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="phone" className="flex items-center mb-2">
                    <Phone className="h-4 w-4 mr-2 text-primary" />
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+91 98765 43210"
                  />
                </div>
                <div>
                  <Label htmlFor="interest" className="flex items-center mb-2">
                    <Heart className="h-4 w-4 mr-2 text-primary" />
                    Area of Interest
                  </Label>
                  <select
                    id="interest"
                    name="interest"
                    value={formData.interest}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-input rounded-md bg-background"
                    required
                  >
                    <option value="">Select your interest</option>
                    <option value="teaching">Teaching & Mentoring</option>
                    <option value="skills">Skill Development</option>
                    <option value="outreach">Community Outreach</option>
                    <option value="support">Program Support</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <Label htmlFor="availability" className="flex items-center mb-2">
                  <CheckCircle className="h-4 w-4 mr-2 text-primary" />
                  Availability
                </Label>
                <Input
                  id="availability"
                  name="availability"
                  value={formData.availability}
                  onChange={handleInputChange}
                  placeholder="e.g., Weekends, 2-3 hours/week"
                />
              </div>

              <div>
                <Label htmlFor="message" className="mb-2 block">
                  Tell us why you want to volunteer with AVSAR
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Share your motivation and any relevant experience..."
                  rows={4}
                />
              </div>

              <Button 
                type="submit" 
                className="w-full hero-gradient hover-glow"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit Application"}
                <Users className="h-5 w-5 ml-2" />
              </Button>
            </form>
          </Card>

          {/* Why Volunteer */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Why Volunteer with AVSAR?
            </h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="hero-gradient p-2 rounded-lg shrink-0">
                  <Heart className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Make a Real Impact</h4>
                  <p className="text-muted-foreground">
                    Directly contribute to improving the lives of underprivileged children and communities 
                    through education and empowerment programs.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="hero-gradient p-2 rounded-lg shrink-0">
                  <Users className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Join a Community</h4>
                  <p className="text-muted-foreground">
                    Connect with like-minded individuals who share your passion for social change 
                    and community development.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="hero-gradient p-2 rounded-lg shrink-0">
                  <Lightbulb className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Develop Skills</h4>
                  <p className="text-muted-foreground">
                    Enhance your leadership, communication, and problem-solving skills while 
                    contributing to meaningful causes.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="hero-gradient p-2 rounded-lg shrink-0">
                  <Target className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Flexible Commitment</h4>
                  <p className="text-muted-foreground">
                    Choose volunteer opportunities that fit your schedule and interests, 
                    from regular commitments to project-based involvement.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="card-feature p-6 mt-8 rounded-xl">
              <h4 className="font-semibold text-foreground mb-4">Have Questions?</h4>
              <p className="text-muted-foreground mb-4">
                We're here to help! Reach out to learn more about volunteer opportunities.
              </p>
              <div className="space-y-2 text-sm">
                <p className="flex items-center text-muted-foreground">
                  <Phone className="h-4 w-4 mr-2 text-primary" />
                  +91 89594 44059
                </p>
                <p className="flex items-center text-muted-foreground">
                  <Mail className="h-4 w-4 mr-2 text-primary" />
                  avsarsocialfoundation@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VolunteerSection;