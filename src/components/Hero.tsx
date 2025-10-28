import { useEffect, useState } from "react";
import craftLogo from "@/assets/craft-logo.jpg";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background image with parallax */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${"/src/assets/cafe-exterior.jpg"})`,
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4">
        <div className="animate-fade-in text-center">
          <img 
            src={craftLogo} 
            alt="Craft Café Logo" 
            className="mx-auto mb-8 h-48 w-48 rounded-full object-contain"
          />
          <h1 className="mb-4 text-5xl font-bold tracking-wide text-white md:text-7xl">
            Craft Café
          </h1>
          <p className="text-xl font-light tracking-wider text-white/90 md:text-2xl">
            Crafted Coffee. Crafted Moments.
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 animate-bounce">
          <svg 
            className="h-8 w-8 text-white/70" 
            fill="none" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
