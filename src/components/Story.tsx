import { useEffect, useRef, useState } from "react";
import { Heart, Users, Coffee, Leaf } from "lucide-react";
import cafeVideo from "@/assets/cafe-story.mp4";
import cafeInterior from "@/assets/cafe-interior.jpg";
import leafDecoration from "@/assets/leaf-decoration.png";

const Story = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { 
        threshold: 0,
        rootMargin: '100px 0px 0px 0px' // Trigger 100px before section comes into view
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Video autoplay on scroll
  useEffect(() => {
    const videoObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && videoRef.current) {
          // Auto-play when video comes into view
          videoRef.current.play().catch(() => {
            // Auto-play prevented by browser policy - user interaction required
          });
        } else if (!entry.isIntersecting && videoRef.current) {
          // Pause when video goes out of view
          videoRef.current.pause();
        }
      },
      { threshold: 0.2 }
    );

    if (videoRef.current) {
      videoObserver.observe(videoRef.current);
    }

    return () => videoObserver.disconnect();
  }, []);

  const stats = [
    { icon: Coffee, value: "2019", label: "Established" },
    { icon: Heart, value: "1000+", label: "Happy Customers" },
    { icon: Users, value: "5", label: "Team Members" },
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative overflow-hidden bg-background py-24 md:py-32"
    >
      {/* Enhanced floating decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <img 
          src={leafDecoration} 
          alt="" 
          className="absolute right-12 top-24 w-24 floating-element opacity-20"
        />
        <Leaf className="absolute left-16 top-40 h-8 w-8 text-primary/10 floating-element-delayed" />
        <div className="absolute top-20 left-1/4 w-32 h-32 rounded-full gradient-radial opacity-5 floating-element" />
        <div className="absolute bottom-32 right-1/4 w-24 h-24 rounded-full bg-secondary/5 blur-xl floating-element-delayed" />
      </div>
      
      <div className="container-modern">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Enhanced Video Section */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              {/* Main video with multiple effects */}
              <div className="group relative overflow-hidden rounded-2xl shadow-2xl">
                <video 
                  ref={videoRef}
                  src={cafeVideo}
                  className="max-w-full h-auto max-h-[90vh] transition-all duration-700 group-hover:scale-105 rounded-2xl mx-auto block"
                  controls
                  muted
                  playsInline
                  loop
                  preload="metadata"
                >
                  Your browser does not support the video tag.
                </video>
                
                {/* Video overlay with glassmorphism */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
                
                {/* Floating badge */}
                <div className="absolute top-6 left-6 glass-card rounded-full px-4 py-2 pointer-events-none">
                  <span className="text-sm font-medium text-foreground">Since 2019</span>
                </div>

                {/* Auto-play indicator */}
                <div className="absolute bottom-4 right-4 glass-dark rounded-lg px-3 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <span className="text-white text-xs font-medium">🎬 Auto-plays on scroll</span>
                </div>
              </div>

              {/* Decorative elements around video */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary/20 rounded-full blur-sm animate-pulse" />
              <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-secondary/20 rounded-full blur-lg animate-pulse" style={{ animationDelay: '1s' }} />
            </div>
          </div>

          {/* Enhanced Text Section */}
          <div className={`order-1 lg:order-2 animate-on-scroll slide-right ${isVisible ? 'animate-slide-in-right' : ''}`}>
            <div className="space-y-8">
              {/* Header with decorative element */}
              <div className="relative">
                <div className="absolute -left-4 top-0 w-1 h-16 bg-gradient-to-b from-primary to-secondary rounded-full" />
                <h2 className="text-5xl font-bold text-charcoal md:text-6xl lg:text-7xl">
                  Our <span className="text-gradient">Story</span>
                </h2>
                <p className="mt-2 text-lg text-muted-foreground">
                  From highlands to cup - farm-to-table excellence
                </p>
              </div>

              {/* Story paragraphs with staggered animations */}
              <div className="space-y-6">
                <div className={`glass-card rounded-xl p-6 animate-on-scroll fade-up ${isVisible ? 'animate-fade-in-up stagger-1' : ''}`}>
                  <p className="text-lg leading-relaxed text-foreground">
                    At CRAFT Café, our story begins in the <strong className="text-primary">highlands of Daklak</strong>, where we cultivate premium 
                    Robusta and Arabica beans on our very own farm. Every cup served in our leafy sanctuary in Đà Nẵng 
                    carries the authentic taste of Vietnamese terroir.
                  </p>
                </div>

                <div className={`glass-card rounded-xl p-6 animate-on-scroll fade-up ${isVisible ? 'animate-fade-in-up stagger-2' : ''}`}>
                  <p className="text-lg leading-relaxed text-foreground">
                    We specialize in <em>farm-to-table coffee</em> paired with wholesome, <strong className="text-secondary">gluten-free brunch options</strong>. 
                    From bold Robusta to smooth Arabica, every bean is ethically grown, freshly roasted, and expertly brewed for the perfect cup.
                  </p>
                </div>

                <div className={`animate-on-scroll fade-up ${isVisible ? 'animate-fade-in-up stagger-3' : ''}`}>
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    Our commitment to <strong>quality, sustainability, and delicious flavors</strong> makes every visit a special experience. 
                    Whether you're here for farm-fresh coffee or nourishing gluten-free waffles, we strive to make each moment memorable.
                  </p>
                </div>

                <div className={`glass rounded-xl p-6 border-l-4 border-primary animate-on-scroll fade-up ${isVisible ? 'animate-fade-in-up stagger-4' : ''}`}>
                  <p className="text-xl font-medium text-primary italic">
                    "From our highland farm to your cup - crafting moments that matter."
                  </p>
                </div>
              </div>

              {/* Stats section */}
              <div className={`grid grid-cols-3 gap-6 animate-on-scroll fade-up ${isVisible ? 'animate-fade-in-up stagger-5' : ''}`}>
                {stats.map((stat, index) => (
                  <div key={index} className="text-center group">
                    <div className="glass-card rounded-xl p-4 hover-lift">
                      <stat.icon className="mx-auto h-8 w-8 text-primary mb-2 group-hover:scale-110 transition-transform" />
                      <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Call to action */}
              <div className={`animate-on-scroll fade-up ${isVisible ? 'animate-fade-in-up stagger-6' : ''}`}>
                <div className="glass rounded-2xl p-6 text-center">
                  <p className="text-sm text-muted-foreground mb-3">
                    Experience the craft yourself
                  </p>
                  <div className="flex items-center justify-center gap-2 text-primary">
                    <Heart className="h-4 w-4 animate-pulse" />
                    <span className="font-medium">Visit us today</span>
                    <Heart className="h-4 w-4 animate-pulse" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
