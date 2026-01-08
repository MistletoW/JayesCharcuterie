const About = () => {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-4xl mx-auto text-center">
        {/* Script Header */}
        <p className="font-script text-xl md:text-2xl text-gold mb-4">
          Our Story
        </p>

        {/* Main Heading */}
        <h2 className="font-display text-3xl md:text-5xl text-foreground mb-8">
          Crafted with Love,<br />Served with Elegance
        </h2>

        {/* Ornamental Divider */}
        <div className="divider-ornament max-w-xs mx-auto mb-10">
          <span className="text-gold">✦</span>
        </div>

        {/* Description */}
        <p className="font-body text-lg text-muted-foreground leading-relaxed mb-8">
          At Jaye's Extravagant Charcuterie, we believe that every celebration deserves 
          a centerpiece that sparks conversation and delights the senses. Our artisanal 
          boards are thoughtfully curated with premium cheeses, cured meats, seasonal 
          fruits, and gourmet accompaniments—each arrangement a unique work of edible art.
        </p>

        <p className="font-body text-lg text-muted-foreground leading-relaxed">
          From intimate gatherings to grand celebrations, we pour our passion into every 
          board, ensuring your guests experience the perfect blend of flavor, texture, 
          and visual splendor.
        </p>
      </div>
    </section>
  );
};

export default About;
