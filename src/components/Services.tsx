import { Home, Building2, Sparkles, Calendar, Leaf, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Home,
    title: "Regular Home Cleaning",
    description: "Weekly or bi-weekly cleaning to keep your home consistently fresh and tidy.",
  },
  {
    icon: Sparkles,
    title: "Deep Cleaning",
    description: "Thorough top-to-bottom cleaning that reaches every corner and crevice.",
  },
  {
    icon: Calendar,
    title: "Move In/Out Cleaning",
    description: "Complete cleaning service for seamless transitions between homes.",
  },
  {
    icon: Building2,
    title: "Office Cleaning",
    description: "Professional workspace cleaning for a productive environment.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Options",
    description: "Green cleaning solutions that are safe for your family and the planet.",
  },
  {
    icon: Shield,
    title: "Post-Construction",
    description: "Specialized cleaning to remove dust and debris after renovations.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 md:py-32 bg-muted/30">
      <div className="container px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Our Services</span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            Cleaning Solutions for Every Need
          </h2>
          <p className="text-muted-foreground text-lg">
            From regular maintenance to deep cleans, we've got you covered with our comprehensive range of services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className="group hover:shadow-elevated transition-all duration-300 border-0 bg-card hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
