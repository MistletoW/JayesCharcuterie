import { Mail, MessageCircle } from "lucide-react";

const Contact = () => {
  // Replace this URL with your actual Google Form link
  const googleFormUrl = "#";

  return (
    <section id="contact" className="py-24 px-6 bg-background">
      <div className="max-w-3xl mx-auto text-center">
        {/* Script Header */}
        <p className="font-script text-xl md:text-2xl text-gold mb-4">
          Let's Create Together
        </p>

        {/* Main Heading */}
        <h2 className="font-display text-3xl md:text-5xl text-foreground mb-6">
          Ready to Elevate Your Event?
        </h2>

        {/* Ornamental Divider */}
        <div className="divider-ornament max-w-xs mx-auto mb-10">
          <span className="text-gold">✦</span>
        </div>

        {/* Description */}
        <p className="font-body text-lg text-muted-foreground leading-relaxed mb-12">
          We'd love to hear about your upcoming celebration. Fill out our inquiry form 
          and we'll get back to you within 24 hours to discuss your vision.
        </p>

        {/* CTA Button */}
        <a
          href={googleFormUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-10 py-5 bg-primary text-primary-foreground font-body font-medium text-lg rounded-sm hover:bg-wine-light transition-colors duration-300 elegant-shadow"
        >
          <MessageCircle className="w-5 h-5" />
          Start Your Inquiry
        </a>

        {/* Alternative Contact */}
        <div className="mt-12 pt-10 border-t border-border">
          <p className="font-body text-muted-foreground mb-4">
            Prefer email? Reach us directly:
          </p>
          <a
            href="mailto:hello@jayescharcuterie.com"
            className="inline-flex items-center gap-2 font-body text-foreground hover:text-gold transition-colors duration-300"
          >
            <Mail className="w-5 h-5" />
            hello@jayescharcuterie.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
