import { useEffect, useRef, useState } from "react";
import { Heart, Users, ShoppingBag, Waves } from "lucide-react";
import eintrittImage from "@/assets/eintritt.jpg";

const Story = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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

  const stats = [
    { icon: ShoppingBag, value: "2020", label: "Gründung" },
    { icon: Heart, value: "500+", label: "Zufriedene Kunden" },
    { icon: Users, value: "3", label: "Team-Mitglieder" },
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative overflow-hidden bg-background py-24 md:py-32"
    >
      {/* Enhanced floating decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <Waves className="absolute right-12 top-24 h-8 w-8 text-primary/10 floating-element" />
        <ShoppingBag className="absolute left-16 top-40 h-8 w-8 text-primary/10 floating-element-delayed" />
        <div className="absolute top-20 left-1/4 w-32 h-32 rounded-full gradient-radial opacity-5 floating-element" />
        <div className="absolute bottom-32 right-1/4 w-24 h-24 rounded-full bg-secondary/5 blur-xl floating-element-delayed" />
      </div>
      
      <div className="container-modern">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Image Section */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              {/* Eintritt Image */}
              <div className="group relative overflow-hidden rounded-2xl shadow-2xl">
                <img 
                  src={eintrittImage}
                  alt="Bodenseebär Eingang"
                  className="w-full h-auto transition-all duration-700 group-hover:scale-105 rounded-2xl"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Decorative elements */}
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
                  Kommen Sie <span className="text-gradient">herein</span>
                </h2>
                <p className="mt-2 text-lg text-muted-foreground">
                  Entdecken Sie unsere einzigartige Auswahl am Bodensee
                </p>
              </div>

              {/* Story paragraphs with staggered animations */}
              <div className="space-y-6">
                <div className={`glass-card rounded-xl p-6 animate-on-scroll fade-up ${isVisible ? 'animate-fade-in-up stagger-1' : ''}`}>
                  <p className="text-lg leading-relaxed text-foreground">
                    Willkommen im <strong className="text-primary">Bodenseebär</strong> in Hagnau am Bodensee! Unser Geschäft bietet Ihnen 
                    eine sorgfältig kuratierte Auswahl an Produkten für Ihren Aufenthalt am See.
                  </p>
                </div>

                <div className={`animate-on-scroll fade-up ${isVisible ? 'animate-fade-in-up stagger-2' : ''}`}>
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    Von Badeschuhen über praktische Taschen bis hin zur neuesten Seemode - wir haben alles, was Sie für den perfekten Tag am Bodensee brauchen.
                  </p>
                </div>

                <div className={`glass rounded-xl p-6 border-l-4 border-primary animate-on-scroll fade-up ${isVisible ? 'animate-fade-in-up stagger-3' : ''}`}>
                  <p className="text-xl font-medium text-primary italic">
                    "Alles für den See. Alles für Sie."
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
                    Erleben Sie unser Geschäft selbst
                  </p>
                  <div className="flex items-center justify-center gap-2 text-primary">
                    <Heart className="h-4 w-4 animate-pulse" />
                    <span className="font-medium">Besuchen Sie uns noch heute</span>
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
