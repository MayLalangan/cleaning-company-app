import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 flex items-center justify-center overflow-hidden bg-gradient-hero">
      <div className="absolute inset-0 bg-hero-pattern opacity-30" />
      
      {/* Floating bubbles animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="bubble bubble-1" />
        <div className="bubble bubble-2" />
        <div className="bubble bubble-3" />
        <div className="bubble bubble-4" />
      </div>

      <div className="container relative z-10 px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 text-white mb-8 backdrop-blur-sm">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium tracking-wide">
              Professional Cleaning Services
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.05">
            A Spotless Home 
            <span className="block mt-2 text-white/90 font-semibold text-3xl md:text-5xl lg:text-6xl">So You Can Relax</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-12">
            Professional, reliable cleaning that gives you more time to relax and enjoy your home.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-teal-700 hover:bg-white/50 font-semibold px-8"
              asChild
            >
              <a href="#services">
                See Our Services
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </Button>
          </div>


        </div>
      </div>
    </section>
  );
};

export default Hero;
