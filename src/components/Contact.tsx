import { Phone, Mail, MapPin, Clock } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "+46 769060301",
    href: "tel:+46769060301",
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
    value: "Mon-Sat: 9am - 4pm",
    href: null,
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-20 md:py-32 bg-muted/30">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Contact Us</span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            Ready for a Cleaner Home?
          </h2>
          <p className="text-muted-foreground text-lg mb-12">
            Get in touch for a free quote or to schedule your first cleaning. We typically respond within 1 hour.
          </p>

          <div className="grid sm:grid-cols-2 gap-8 justify-center text-left max-w-2xl mx-auto">
            {contactInfo.map((info) => (
              <div key={info.label} className="flex items-start gap-4 p-4 rounded-2xl bg-card shadow-soft hover:shadow-elevated transition-shadow">
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
      </div>
    </section>
  );
};

export default Contact;
