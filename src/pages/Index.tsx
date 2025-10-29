import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Story from "@/components/Story";
import Menu from "@/components/Menu";
import Gallery from "@/components/Gallery";
import Community from "@/components/Community";
import Location from "@/components/Location";
import Footer from "@/components/Footer";
import ScrollProgressCup from "@/components/ScrollProgressCup";
import { Instagram, MessageCircle } from "lucide-react";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <section id="story">
        <Story />
      </section>
      <section id="menu">
        <Menu />
      </section>
      <section id="gallery">
        <Gallery />
      </section>
      <section id="community">
        <Community />
      </section>
      <section id="location">
        <Location />
      </section>
      <Footer />

      {/* Coffee Cup Scroll Progress Indicator */}
      <ScrollProgressCup />

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
        {/* WhatsApp Button */}
        <div className="relative group">
          <a
            href="https://wa.me/84902009981"
            target="_blank"
            rel="noopener noreferrer"
            className="group glass-card hover:glass-dark rounded-full p-4 shadow-2xl hover-lift transition-all duration-300 hover:scale-110 block"
            aria-label="Contact us on WhatsApp"
          >
            <MessageCircle className="h-6 w-6 text-green-600 group-hover:text-white transition-colors duration-300" />
          </a>
          
          {/* Tooltip */}
          <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <div className="glass-dark rounded-lg px-3 py-2 text-white text-sm font-medium whitespace-nowrap">
              Chat on WhatsApp
              <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-black/60"></div>
            </div>
          </div>
        </div>

        {/* Instagram Button */}
        <div className="relative group">
          <a
            href="https://ig.me/m/craft_cafe.dn"
            target="_blank"
            rel="noopener noreferrer"
            className="group glass-card hover:glass-dark rounded-full p-4 shadow-2xl hover-lift transition-all duration-300 hover:scale-110 block"
            aria-label="Message us on Instagram"
          >
            <Instagram className="h-6 w-6 text-pink-600 group-hover:text-white transition-colors duration-300" />
          </a>
          
          {/* Tooltip */}
          <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <div className="glass-dark rounded-lg px-3 py-2 text-white text-sm font-medium whitespace-nowrap">
              DM us on Instagram
              <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-black/60"></div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Index;
