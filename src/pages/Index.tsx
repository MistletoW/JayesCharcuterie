import Hero from "@/components/Hero";
import ImageCarousel from "@/components/ImageCarousel";
import About from "@/components/About";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <ImageCarousel />
      <About />
      <Services />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
