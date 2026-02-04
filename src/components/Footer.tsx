import { Sparkles, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container px-4">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <a href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">CleanSpace</span>
            </a>
            <p className="text-background/70 max-w-sm mb-6">
              Professional cleaning services that bring joy back to your home. Trusted by hundreds of families across the metro area.
            </p>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-background/70 hover:text-background transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-background/70 hover:text-background transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#contact" className="text-background/70 hover:text-background transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-background/70">
              <li>+46 769060301</li>
              <li>hello@cleanspace.com</li>
              <li>Mon-Sat: 9am - 4pm</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/60 text-sm">
            © {new Date().getFullYear()} CleanSpace. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-background/60 hover:text-background transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-background/60 hover:text-background transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
