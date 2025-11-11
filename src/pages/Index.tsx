import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Story from "@/components/Story";
import Gallery from "@/components/Gallery";
import Location from "@/components/Location";
import Footer from "@/components/Footer";
import ScrollProgressCup from "@/components/ScrollProgressCup";
import SEO from "@/components/SEO";
import { Phone } from "lucide-react";

const Index = () => {
  return (
    <main className="min-h-screen">
      <SEO />
      <Navigation />
      <Hero />
      <section id="story">
        <Story />
      </section>
      <section id="gallery">
        <Gallery />
      </section>
      <section id="location">
        <Location />
      </section>
      <Footer />

      {/* Scroll Progress Indicator */}
      <ScrollProgressCup />

      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="relative group">
          <a
            href="tel:+491743248431"
            className="group glass-card hover:glass-dark rounded-full p-4 shadow-2xl hover-lift transition-all duration-300 hover:scale-110 block"
            aria-label="Rufen Sie uns an"
          >
            <Phone className="h-6 w-6 text-primary group-hover:text-white transition-colors duration-300" />
          </a>
          
          {/* Tooltip */}
          <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <div className="glass-dark rounded-lg px-3 py-2 text-white text-sm font-medium whitespace-nowrap">
              Rufen Sie uns an
              <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-black/60"></div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Index;
