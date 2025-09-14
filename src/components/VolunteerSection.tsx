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
  },
  {
    icon: Lightbulb,
    title: "Skill Development",
    description: "Share your professional skills to train youth and women in various trades and technologies.",
  },
  {
    icon: Users,
    title: "Community Outreach",
    description: "Assist in organizing community programs, health camps, and awareness sessions.",
  },
  {
    icon: Target,
    title: "Program Support",
    description: "Help with program planning, documentation, and connecting families with government schemes.",
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

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

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
    <section id="volunteer" className="py-20 bg-gradient-to-b from-orange-50/50 to-background">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Header Section */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 relative">
            Join Our <span className="text-gradient bg-gradient-to-r from-orange-500 to-red-500">Volunteer</span> Community
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full" />
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Be part of something meaningful. Your time, skills, and passion can help us create lasting 
            change in the lives of underprivileged children and communities.
          </p>
        </div>

        {/* Volunteer Opportunities */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 fade-in-up">
          {volunteerOpportunities.map((opportunity, index) => (
            <Card
              key={index}
              className="card-feature p-6 hover-lift group text-center relative overflow-hidden bg-white/80 backdrop-blur-sm border border-orange-500/30 shadow-[0_0_15px_rgba(255,165,0,0.3)] hover:shadow-[0_0_20px_rgba(255,165,0,0.6)] transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-100/10 to-orange-200/10 group-hover:opacity-20 transition-opacity" />
              <div className="relative z-10">
                <div className="hero-gradient p-4 rounded-xl w-fit mx-auto mb-4 group-hover:animate-pulse">
                  <opportunity.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-orange-600 transition-colors">
                  {opportunity.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {opportunity.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Volunteer Application Form & Why Volunteer */}
        <div className="grid lg:grid-cols-2 gap-12 items-start fade-in-up">
          {/* Form */}
          <Card className="card-warm p-8 relative overflow-hidden bg-white/90 backdrop-blur-md border border-orange-500/50 shadow-[0_0_20px_rgba(255,165,0,0.4)] hover:shadow-[0_0_25px_rgba(255,165,0,0.7)] transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-orange-600/10" />
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Volunteer Application Form
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="flex items-center mb-2 text-foreground font-medium">
                      <User className="h-4 w-4 mr-2 text-orange-500" />
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter your full name"
                      className="border-orange-500/30 focus:ring-orange-500 focus:border-orange-500"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="flex items-center mb-2 text-foreground font-medium">
                      <Mail className="h-4 w-4 mr-2 text-orange-500" />
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
                      className="border-orange-500/30 focus:ring-orange-500 focus:border-orange-500"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phone" className="flex items-center mb-2 text-foreground font-medium">
                      <Phone className="h-4 w-4 mr-2 text-orange-500" />
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+91 98765 43210"
                      className="border-orange-500/30 focus:ring-orange-500 focus:border-orange-500"
                    />
                  </div>
                  <div>
                    <Label htmlFor="interest" className="flex items-center mb-2 text-foreground font-medium">
                      <Heart className="h-4 w-4 mr-2 text-orange-500" />
                      Area of Interest
                    </Label>
                    <select
                      id="interest"
                      name="interest"
                      value={formData.interest}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-orange-500/30 rounded-md bg-background focus:ring-orange-500 focus:border-orange-500"
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
                  <Label htmlFor="availability" className="flex items-center mb-2 text-foreground font-medium">
                    <CheckCircle className="h-4 w-4 mr-2 text-orange-500" />
                    Availability
                  </Label>
                  <Input
                    id="availability"
                    name="availability"
                    value={formData.availability}
                    onChange={handleInputChange}
                    placeholder="e.g., Weekends, 2-3 hours/week"
                    className="border-orange-500/30 focus:ring-orange-500 focus:border-orange-500"
                  />
                </div>
                <div>
                  <Label htmlFor="message" className="flex items-center mb-2 text-foreground font-medium">
                    <Heart className="h-4 w-4 mr-2 text-orange-500" />
                    Why Volunteer with AVSAR?
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Share your motivation and any relevant experience..."
                    rows={4}
                    className="border-orange-500/30 focus:ring-orange-500 focus:border-orange-500"
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full hero-gradient bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white hover-glow"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit Application"}
                  <Users className="h-5 w-5 ml-2" />
                </Button>
              </form>
            </div>
          </Card>

          {/* Why Volunteer */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6 relative">
              Why Volunteer with AVSAR?
              <div className="absolute -bottom-1 left-0 w-16 h-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full" />
            </h3>
            <div className="space-y-6">
              {[
                { icon: Heart, title: "Make a Real Impact", description: "Directly contribute to improving the lives of underprivileged children and communities through education and empowerment programs." },
                { icon: Users, title: "Join a Community", description: "Connect with like-minded individuals who share your passion for social change and community development." },
                { icon: Lightbulb, title: "Develop Skills", description: "Enhance your leadership, communication, and problem-solving skills while contributing to meaningful causes." },
                { icon: Target, title: "Flexible Commitment", description: "Choose volunteer opportunities that fit your schedule and interests, from regular commitments to project-based involvement." }
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-4 group">
                  <div className="hero-gradient p-2 rounded-lg shrink-0 group-hover:animate-pulse">
                    <item.icon className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2 group-hover:text-orange-600 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Info */}
            <Card className="card-feature p-6 mt-8 rounded-xl relative overflow-hidden bg-white/80 backdrop-blur-sm border border-orange-500/30 shadow-[0_0_15px_rgba(255,165,0,0.3)] hover:shadow-[0_0_20px_rgba(255,165,0,0.6)] transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-100/10 to-orange-200/10" />
              <div className="relative z-10">
                <h4 className="font-semibold text-foreground mb-4">Have Questions?</h4>
                <p className="text-muted-foreground mb-4">
                  We're here to help! Reach out to learn more about volunteer opportunities.
                </p>
                <div className="space-y-2 text-sm">
                  <p className="flex items-center text-muted-foreground">
                    <Phone className="h-4 w-4 mr-2 text-orange-500" />
                    +91 89594 44059
                  </p>
                  <p className="flex items-center text-muted-foreground">
                    <Mail className="h-4 w-4 mr-2 text-orange-500" />
                    avsarsocialfoundation@gmail.com
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VolunteerSection;