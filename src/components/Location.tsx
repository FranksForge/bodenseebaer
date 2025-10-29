import { useEffect, useRef, useState } from "react";
import { MapPin, Clock, Instagram, Phone, Star, Navigation, Wifi, Car, Coffee } from "lucide-react";


const amenities = [
  { icon: Wifi, label: "Free WiFi", description: "High-speed internet" },
  { icon: Car, label: "Parking", description: "Motorbike & car spots" },
  { icon: Coffee, label: "Specialty Coffee", description: "Artisan roasted beans" },
  { icon: Navigation, label: "Easy Access", description: "Near city center" }
];

const Location = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setTimeout(() => setIsVisible(true), 50);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative bg-muted py-24 md:py-32 overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-32 left-32 w-36 h-36 rounded-full gradient-radial opacity-5 floating-element" />
        <div className="absolute bottom-40 right-24 w-32 h-32 rounded-full bg-secondary/5 blur-2xl floating-element-delayed" />
        <MapPin className="absolute top-20 right-32 h-10 w-10 text-primary/5 floating-element" />
      </div>

      <div className="container-modern">
        {/* Section Header */}
        <div className={`mb-20 text-center animate-on-scroll fade-up ${isVisible ? 'animate-fade-in-up' : ''}`}>
          <div className="relative inline-block">
            <h2 className="mb-6 text-5xl font-bold text-charcoal md:text-6xl lg:text-7xl">
              Visit <span className="text-gradient">Us</span>
            </h2>
            <div className="absolute -top-4 -right-8 text-primary/20">
              <MapPin className="h-8 w-8 animate-pulse" />
            </div>
          </div>
          <p className="mx-auto max-w-3xl text-xl text-muted-foreground leading-relaxed">
            Find us nestled in the heart of Da Nang, where every visit feels like coming home
          </p>
        </div>

        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Left Column: Map + Amenities */}
          <div className={`space-y-8 animate-on-scroll slide-left ${isVisible ? 'animate-slide-in-left' : ''}`}>
            {/* Map Section */}
            <div className="glass-card rounded-3xl overflow-hidden shadow-2xl relative group cursor-pointer" 
                 onClick={() => window.open('https://maps.app.goo.gl/xprW7yVv9qFFta9c7', '_blank')}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3834.020547405829!2d108.23767!3d16.0645104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDAzJzUyLjIiTiAxMDjCsDE0JzE1LjYiRQ!5e0!3m2!1sen!2s!4v1635959473267&q=126%2F20+Nguy%E1%BB%85n+Duy+Hi%E1%BB%87u%2C+An+H%E1%BA%A3i+%C4%90%C3%B4ng%2C+S%C6%A1n+Tr%C3%A0%2C+%C4%90%C3%A0+N%E1%BA%B5ng"
                width="100%"
                height="400"
                style={{ border: 0, pointerEvents: 'none' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="CRAFT Café Đà Nẵng - 126/20 Nguyễn Duy Hiệu"
                className="rounded-3xl transition-all duration-300 group-hover:scale-105"
              />
              
              {/* Click to open overlay */}
              <div className="absolute inset-0 bg-transparent group-hover:bg-primary/5 transition-all duration-300 rounded-3xl flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 glass-dark rounded-2xl px-4 py-2 text-white">
                  <div className="flex items-center gap-2">
                    <Navigation className="h-4 w-4" />
                    <span className="text-sm font-medium">Click to open in Maps</span>
                  </div>
                </div>
              </div>
              
              {/* Map overlay info */}
              <div className="absolute top-6 left-6 glass-dark rounded-2xl p-4 text-white pointer-events-none">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="h-4 w-4" />
                  <span className="font-semibold">CRAFT Café</span>
                </div>
                <p className="text-sm opacity-90">Sơn Trà, Đà Nẵng</p>
                <div className="flex items-center gap-2 mt-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-xs">Open Now</span>
                </div>
              </div>
            </div>

            {/* Amenities */}
            <div className={`animate-on-scroll fade-up ${isVisible ? 'animate-fade-in-up stagger-1' : ''}`}>
              <h3 className="mb-6 text-2xl font-bold text-charcoal">What We Offer</h3>
              <div className="grid grid-cols-2 gap-4">
                {amenities.map((amenity, index) => (
                  <div key={index} className="glass rounded-xl p-4 text-center hover-lift">
                    <amenity.icon className="h-8 w-8 text-primary mx-auto mb-2" />
                    <h4 className="font-semibold text-foreground mb-1 text-sm">{amenity.label}</h4>
                    <p className="text-xs text-muted-foreground">{amenity.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Contact Info */}
          <div className={`animate-on-scroll slide-right ${isVisible ? 'animate-slide-in-right' : ''}`}>
            <div className="space-y-8">
              {/* Contact Info */}
              <div className={`space-y-6 animate-on-scroll fade-up ${isVisible ? 'animate-fade-in-up stagger-1' : ''}`}>
                <div className="glass-card rounded-2xl p-6 hover-lift">
                  <div className="flex items-start gap-4">
                    <div className="glass rounded-full p-3">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="mb-2 text-xl font-semibold text-charcoal">Address</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        126/20 Nguyễn Duy Hiệu<br />
                        An Hải Đông, Sơn Trà<br />
                        Đà Nẵng 550000, Vietnam
                      </p>
                      <button 
                        className="mt-3 text-primary hover:text-primary/80 font-medium text-sm transition-colors"
                        onClick={() => window.open('https://maps.app.goo.gl/xprW7yVv9qFFta9c7', '_blank')}
                      >
                        Get Directions →
                      </button>
                    </div>
                  </div>
                </div>

                <div className="glass-card rounded-2xl p-6 hover-lift">
                  <div className="flex items-start gap-4">
                    <div className="glass rounded-full p-3">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="mb-2 text-xl font-semibold text-charcoal">Hours</h3>
                      <div className="space-y-1 text-muted-foreground">
                        <p>Daily: <span className="font-medium">7:30 AM – 7:30 PM</span></p>
                        <p className="text-sm">Every day of the week</p>
                      </div>
                      <div className="mt-3 flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-green-600 font-medium text-sm">Open Now</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="glass-card rounded-2xl p-6 hover-lift">
                  <div className="flex items-start gap-4">
                    <div className="glass rounded-full p-3">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="mb-2 text-xl font-semibold text-charcoal">Contact</h3>
                      <div className="space-y-2">
                        <a href="tel:+84902009981" className="block text-muted-foreground hover:text-primary transition-colors">
                          +84 902 009 981
                        </a>
                        <a href="mailto:info@craftcafe-danang.com" className="block text-muted-foreground hover:text-primary transition-colors">
                          info@craftcafe-danang.com
                        </a>
                        <div className="pt-2">
                          <p className="text-sm font-medium text-charcoal mb-1">Best way to reach us:</p>
                          <a 
                            href="https://www.instagram.com/craft_cafe.dn/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium text-sm transition-colors"
                          >
                            <Instagram className="h-4 w-4" />
                            @craft_cafe.dn
                          </a>
                        </div>
                      </div>
                    </div>
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

export default Location;
