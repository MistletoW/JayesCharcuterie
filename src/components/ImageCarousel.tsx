import { ImagePlus } from "lucide-react";

// Placeholder images - replace with actual images
const placeholderImages = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  placeholder: true,
}));

const ImageCarousel = () => {
  // Duplicate the array to create seamless infinite scroll
  const images = [...placeholderImages, ...placeholderImages];

  return (
    <section className="py-20 bg-cream-dark overflow-hidden">
      {/* Section Header */}
      <div className="text-center px-6 mb-12">
        <p className="font-script text-xl md:text-2xl text-gold mb-2">
          Our Creations
        </p>
        <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
          A Feast for the Eyes
        </h2>
        <div className="divider-ornament max-w-xs mx-auto">
          <span className="text-gold">✦</span>
        </div>
      </div>

      {/* Carousel Container */}
      <div className="relative">
        <div className="carousel-track flex gap-6 w-max">
          {images.map((image, index) => (
            <div
              key={`${image.id}-${index}`}
              className="flex-shrink-0 w-72 h-72 md:w-80 md:h-80 rounded-lg overflow-hidden elegant-shadow bg-card border border-border"
            >
              <div className="w-full h-full flex flex-col items-center justify-center text-muted-foreground">
                <ImagePlus className="w-10 h-10 mb-3 text-gold" />
                <span className="font-body text-sm">Image {image.id}</span>
                <span className="font-body text-xs text-muted-foreground/60 mt-1">
                  Click to upload
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Hint Text */}
      <p className="text-center text-muted-foreground font-body text-sm mt-8 px-6">
        Hover over the gallery to pause
      </p>
    </section>
  );
};

export default ImageCarousel;
