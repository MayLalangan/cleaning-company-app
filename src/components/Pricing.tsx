import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const plans = [
  {
    name: "Basic Clean",
    price: 99,
    description: "Perfect for regular maintenance",
    features: [
      "All rooms dusted & vacuumed",
      "Bathrooms cleaned & sanitized",
      "Kitchen surfaces wiped down",
      "Floors mopped",
      "Trash emptied",
    ],
    popular: false,
  },
  {
    name: "Deep Clean",
    price: 199,
    description: "Comprehensive top-to-bottom cleaning",
    features: [
      "Everything in Basic Clean",
      "Inside appliances cleaned",
      "Window sills & tracks",
      "Baseboards wiped",
      "Cabinet exteriors",
      "Light fixtures dusted",
    ],
    popular: true,
  },
  {
    name: "Premium",
    price: 299,
    description: "The ultimate cleaning experience",
    features: [
      "Everything in Deep Clean",
      "Inside windows",
      "Oven deep clean",
      "Refrigerator cleaned",
      "Closet organization",
      "Laundry & folding",
    ],
    popular: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 md:py-32 bg-background">
      <div className="container px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Pricing</span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            Simple, Transparent Pricing
          </h2>
          <p className="text-muted-foreground text-lg">
            Choose the plan that fits your needs. All prices are for a standard 2-bedroom home.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <Card 
              key={plan.name} 
              className={`relative border-0 transition-all duration-300 hover:-translate-y-2 ${
                plan.popular 
                  ? 'bg-gradient-hero text-white shadow-elevated scale-105' 
                  : 'bg-card shadow-soft hover:shadow-elevated'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-accent text-accent-foreground text-sm font-medium px-4 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}
              
              <CardHeader className="text-center pb-2">
                <h3 className={`text-xl font-semibold ${plan.popular ? 'text-white' : 'text-foreground'}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm ${plan.popular ? 'text-white/80' : 'text-muted-foreground'}`}>
                  {plan.description}
                </p>
              </CardHeader>
              
              <CardContent className="text-center">
                <div className="my-6">
                  <span className={`text-5xl font-bold ${plan.popular ? 'text-white' : 'text-foreground'}`}>
                    ${plan.price}
                  </span>
                  <span className={plan.popular ? 'text-white/80' : 'text-muted-foreground'}>/visit</span>
                </div>
                
                <ul className="space-y-3 mb-8 text-left">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                        plan.popular ? 'bg-white/20' : 'bg-primary/10'
                      }`}>
                        <Check className={`w-3 h-3 ${plan.popular ? 'text-white' : 'text-primary'}`} />
                      </div>
                      <span className={`text-sm ${plan.popular ? 'text-white/90' : 'text-muted-foreground'}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className="w-full" 
                  variant={plan.popular ? "secondary" : "default"}
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
