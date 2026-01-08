import { Instagram, Facebook } from "lucide-react";

const TikTokIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

const Footer = () => {
  return (
    <footer className="py-12 px-6 bg-primary text-primary-foreground">
      <div className="max-w-4xl mx-auto text-center">
        {/* Logo/Brand Name */}
        <h3 className="font-display text-2xl mb-4">
          Jaye's Extravagant Charcuterie
        </h3>

        {/* Tagline */}
        <p className="font-script text-lg text-gold-light mb-8">
          Elevating Every Occasion
        </p>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mb-8">
          <a
            href="#"
            className="w-10 h-10 rounded-full border border-primary-foreground/30 flex items-center justify-center hover:border-gold hover:text-gold transition-colors duration-300"
            aria-label="Follow us on Instagram"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="w-10 h-10 rounded-full border border-primary-foreground/30 flex items-center justify-center hover:border-gold hover:text-gold transition-colors duration-300"
            aria-label="Follow us on Facebook"
          >
            <Facebook className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="w-10 h-10 rounded-full border border-primary-foreground/30 flex items-center justify-center hover:border-gold hover:text-gold transition-colors duration-300"
            aria-label="Follow us on TikTok"
          >
            <TikTokIcon />
          </a>
        </div>

        {/* Copyright */}
        <p className="font-body text-sm text-primary-foreground/60">
          © {new Date().getFullYear()} Jaye's Extravagant Charcuterie. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
