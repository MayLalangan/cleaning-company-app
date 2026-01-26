import { Check, Clock, Users, Award, ShieldCheck, Recycle } from "lucide-react";

const benefits = [
  {
    icon: Users,
    title: "Trained Professionals",
    description: "Our team undergoes rigorous training and background checks.",
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description: "Book at your convenience with easy online scheduling.",
  },
  {
    icon: Award,
    title: "Quality Guaranteed",
    description: "Not satisfied? We'll re-clean for free within 24 hours.",
  },
  {
    icon: ShieldCheck,
    title: "Fully Insured",
    description: "Complete peace of mind with comprehensive insurance coverage.",
  },
  {
    icon: Recycle,
    title: "Eco-Friendly Products",
    description: "Safe, non-toxic cleaning supplies for your family.",
  },
  {
    icon: Check,
    title: "Consistent Results",
    description: "Same great clean, every single time we visit.",
  },
];

const Benefits = () => {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Why Choose Us</span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-4 mb-6">
              The CleanSpace Difference
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              We're not just another cleaning company. We're committed to delivering an exceptional experience that goes beyond just a clean home.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-accent flex items-center justify-center">
                    <benefit.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{benefit.title}</h4>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-3xl bg-gradient-hero overflow-hidden shadow-elevated">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-white/20 flex items-center justify-center">
                    <Award className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">5+ Years</h3>
                  <p className="text-white/80">Of trusted service excellence</p>
                </div>
              </div>
            </div>
            
            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl shadow-elevated p-6 max-w-[200px]">
              <div className="flex items-center gap-3 mb-2">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-primary/20" />
                  <div className="w-8 h-8 rounded-full bg-primary/40" />
                  <div className="w-8 h-8 rounded-full bg-primary/60" />
                </div>
              </div>
              <p className="text-sm font-medium text-foreground">Trusted by 500+ families</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
