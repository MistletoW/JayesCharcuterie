import { Heart, PartyPopper, Baby, Gift, Snowflake, Sparkles } from "lucide-react";

const occasions = [
  {
    icon: Heart,
    title: "Weddings",
    description: "Elegant spreads that complement your special day",
  },
  {
    icon: PartyPopper,
    title: "Parties",
    description: "Show-stopping boards for any celebration",
  },
  {
    icon: Baby,
    title: "Baby Showers",
    description: "Sweet and savory delights for welcoming new life",
  },
  {
    icon: Gift,
    title: "Bridal Showers",
    description: "Sophisticated selections for the bride-to-be",
  },
  {
    icon: Snowflake,
    title: "Holiday Gatherings",
    description: "Festive arrangements for Christmas and beyond",
  },
  {
    icon: Sparkles,
    title: "Special Events",
    description: "Custom creations for any memorable occasion",
  },
];

const Services = () => {
  return (
    <section className="py-24 px-6 bg-cream-dark">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="font-script text-xl md:text-2xl text-gold mb-4">
            Perfect For
          </p>
          <h2 className="font-display text-3xl md:text-5xl text-foreground mb-6">
            Every Occasion Deserves Elegance
          </h2>
          <div className="divider-ornament max-w-xs mx-auto">
            <span className="text-gold">✦</span>
          </div>
        </div>

        {/* Occasions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {occasions.map((occasion, index) => (
            <div
              key={occasion.title}
              className="group p-8 bg-card rounded-lg border border-border elegant-shadow hover:border-gold transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center mb-6 group-hover:bg-gold/10 transition-colors duration-300">
                <occasion.icon className="w-7 h-7 text-gold" />
              </div>
              <h3 className="font-display text-2xl text-foreground mb-3">
                {occasion.title}
              </h3>
              <p className="font-body text-muted-foreground">
                {occasion.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
