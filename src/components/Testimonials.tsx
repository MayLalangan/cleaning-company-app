import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Homeowner",
    content: "CleanSpace has transformed my home! Their attention to detail is incredible. I actually look forward to coming home on cleaning days now.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Business Owner",
    content: "Professional, punctual, and thorough. They've been cleaning our office for over a year and the consistency is remarkable.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Busy Parent",
    content: "As a working mom of three, CleanSpace has been a lifesaver. The eco-friendly products give me peace of mind with kids around.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="container px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Testimonials</span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground text-lg">
            Don't just take our word for it – hear from the families and businesses we serve.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card 
              key={testimonial.name} 
              className="border-0 bg-card shadow-soft hover:shadow-elevated transition-shadow duration-300"
            >
              <CardContent className="p-8">
                <Quote className="w-10 h-10 text-primary/20 mb-4" />
                
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                
                <p className="text-foreground mb-6 leading-relaxed">"{testimonial.content}"</p>
                
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-hero flex items-center justify-center text-white font-semibold">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
