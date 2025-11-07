import { useEffect, useState } from "react";
import { Sparkles, ShoppingBag, Waves } from "lucide-react";
import heroImage from "@/assets/hero.jpg";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [zoomScale, setZoomScale] = useState(1.0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Slow zoom animation (0% to 20% over 20 seconds, one-way, stops at max)
  useEffect(() => {
    const startTime = Date.now();
    const duration = 20000; // 20 seconds
    const minScale = 1.0;
    const maxScale = 1.2; // 20% zoom

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1); // Clamp to 1 (don't exceed)
      
      // Ease in-out function for smooth animation
      const eased = progress < 0.5
        ? 2 * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 2) / 2;
      
      const scale = minScale + (maxScale - minScale) * eased;
      setZoomScale(scale);
      
      // Continue animation only if not yet at maximum
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    animate();
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background image with enhanced parallax and slow zoom */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-75 ease-out"
        style={{
          backgroundImage: `url(${heroImage})`,
          transform: `translateY(${scrollY * 0.5}px) scale(${zoomScale})`,
        }}
      >
        {/* Modern gradient overlay - lighter for better visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/45" />
        {/* Additional top gradient for navbar contrast - lighter */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-transparent to-transparent h-32" />
        
        {/* Subtle pattern overlay */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(255,255,255,0.1) 0%, transparent 50%)`,
          }}
        />
      </div>

      {/* Floating decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <Sparkles 
          className="absolute top-20 left-20 h-6 w-6 text-white/20 floating-element" 
        />
        <ShoppingBag 
          className="absolute top-32 right-32 h-8 w-8 text-white/15 floating-element-delayed" 
        />
        <Waves 
          className="absolute bottom-40 left-16 h-7 w-7 text-white/20 floating-element" 
        />
        <Sparkles 
          className="absolute bottom-32 right-20 h-5 w-5 text-white/15 floating-element-delayed" 
        />
        
        {/* Floating orbs */}
        <div className="absolute top-40 right-40 w-32 h-32 rounded-full gradient-radial opacity-10 floating-element" />
        <div className="absolute bottom-60 left-40 w-24 h-24 rounded-full gradient-radial opacity-5 floating-element-delayed" />
      </div>

      {/* Main content with glassmorphism */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4">
        <div className="text-center">

          {/* Main heading with modern typography */}
          <h1 className="animate-on-scroll fade-up animate-fade-in-up stagger-1 mb-8 text-6xl font-bold tracking-tight md:text-8xl lg:text-9xl">
            <span className="block">
              <span className="text-white">Der Bodensee</span>
              <span className="text-primary">bär</span>
            </span>
            <span className="block text-2xl md:text-3xl lg:text-4xl font-normal tracking-normal mt-4">
              <span className="text-white/90">In Hagnau am Bodensee</span>
            </span>
          </h1>

          {/* Tagline with glassmorphism */}
          <div className="animate-on-scroll fade-up animate-fade-in-up stagger-2 mx-auto max-w-2xl">
            <div className="glass rounded-2xl px-8 py-4 backdrop-blur-md">
              <p className="text-xl font-light tracking-wider text-white/95 md:text-2xl lg:text-3xl">
                Alles für den See. Alles für Sie.
              </p>
            </div>
          </div>

          {/* Additional tagline */}
          <p className="animate-on-scroll fade-up animate-fade-in-up stagger-3 mt-6 text-lg text-white/80 md:text-xl">
            Seemode • Taschen • Badeschuhe • Accessoires • Kaltgetränke • Und Vieles mehr
          </p>
        </div>

        {/* Enhanced scroll indicator */}
        <div className="animate-on-scroll fade-up animate-fade-in-up stagger-4 absolute bottom-12">
          <div className="flex flex-col items-center space-y-2">
            <p className="text-sm text-white/60 tracking-wide">Mehr entdecken</p>
            <div className="animate-bounce">
              <div className="glass-dark rounded-full p-3">
                <svg 
                  className="h-6 w-6 text-white/80" 
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
          </div>
        </div>
      </div>

      {/* Ambient light effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute w-96 h-96 rounded-full bg-primary/5 blur-3xl transition-all duration-1000 ease-out"
          style={{
            left: `${mousePosition.x * 0.5}%`,
            top: `${mousePosition.y * 0.5}%`,
            transform: 'translate(-50%, -50%)',
          }}
        />
      </div>
    </section>
  );
};

export default Hero;
