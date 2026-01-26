import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "(555) 123-4567",
    href: "tel:+15551234567",
  },
  {
    icon: Mail,
    label: "Email",
    value: "hello@cleanspace.com",
    href: "mailto:hello@cleanspace.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Serving the Greater Metro Area",
    href: null,
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon-Sat: 8am - 6pm",
    href: null,
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-20 md:py-32 bg-muted/30">
      <div className="container px-4">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Contact Us</span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-4 mb-6">
              Ready for a Cleaner Home?
            </h2>
            <p className="text-muted-foreground text-lg mb-10">
              Get in touch for a free quote or to schedule your first cleaning. We typically respond within 2 hours.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((info) => (
                <div key={info.label} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">{info.label}</div>
                    {info.href ? (
                      <a 
                        href={info.href} 
                        className="font-medium text-foreground hover:text-primary transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <div className="font-medium text-foreground">{info.value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Card className="border-0 shadow-elevated bg-card">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold text-foreground mb-6">Get Your Free Quote</h3>
              
              <form className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">First Name</label>
                    <Input placeholder="John" className="bg-background" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Last Name</label>
                    <Input placeholder="Doe" className="bg-background" />
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Email</label>
                  <Input type="email" placeholder="john@example.com" className="bg-background" />
                </div>
                
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Phone</label>
                  <Input type="tel" placeholder="(555) 123-4567" className="bg-background" />
                </div>
                
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Message</label>
                  <Textarea 
                    placeholder="Tell us about your home and cleaning needs..." 
                    rows={4}
                    className="bg-background resize-none"
                  />
                </div>
                
                <Button type="submit" className="w-full" size="lg">
                  Request Quote
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
