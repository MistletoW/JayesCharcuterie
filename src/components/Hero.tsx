import { ImagePlus } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20 bg-background">
      {/* Logo Placeholder */}
      <div className="mb-12 animate-fade-in" style={{ animationDelay: "0.1s" }}>
        <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full border-2 border-gold flex items-center justify-center bg-cream-dark elegant-shadow">
          <div className="text-center">
            <ImagePlus className="w-16 h-16 mx-auto text-gold mb-2" />
            <span className="text-sm text-muted-foreground font-body">Your Logo Here</span>
          </div>
        </div>
      </div>

      {/* Script Tagline */}
      <p 
        className="font-script text-2xl md:text-3xl text-gold mb-4 animate-fade-in" 
        style={{ animationDelay: "0.3s" }}
      >
        Elevating Every Occasion
      </p>

      {/* Subtitle */}
      <p 
        className="font-body text-lg md:text-xl text-muted-foreground text-center max-w-2xl mb-10 animate-fade-in"
        style={{ animationDelay: "0.7s" }}
      >
        Artfully curated charcuterie boards crafted with passion for weddings, 
        celebrations, and life's most memorable moments.
      </p>

      {/* CTA Button */}
      <div className="animate-fade-in" style={{ animationDelay: "0.9s" }}>
        <a
          href="#contact"
          className="inline-block px-8 py-4 bg-primary text-primary-foreground font-body font-medium text-lg rounded-sm hover:bg-wine-light transition-colors duration-300 elegant-shadow"
        >
          Get in Touch
        </a>
      </div>

      {/* Scroll Indicator */}
      <div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-fade-in"
        style={{ animationDelay: "1.2s" }}
      >
        <div className="w-6 h-10 border-2 border-gold rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-gold rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
