import { useEffect, useRef, useState } from "react";
import { MapPin, Clock, Phone, Navigation, Car, ShoppingBag, Waves } from "lucide-react";


const amenities = [
  { icon: Car, label: "Parkplätze", description: "In der Nähe verfügbar" },
  { icon: Navigation, label: "Zentral gelegen", description: "In Hagnau am See" },
  { icon: ShoppingBag, label: "Große Auswahl", description: "Vielseitige Produkte" },
  { icon: Waves, label: "Am Bodensee", description: "Perfekte Lage" }
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
              Besuchen Sie <span className="text-gradient">uns</span>
            </h2>
            <div className="absolute -top-4 -right-8 text-primary/20">
              <MapPin className="h-8 w-8 animate-pulse" />
            </div>
          </div>
          <p className="mx-auto max-w-3xl text-xl text-muted-foreground leading-relaxed">
            Besuchen Sie uns in Hagnau am Bodensee und entdecken Sie unsere Auswahl
          </p>
        </div>

        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Left Column: Map + Amenities */}
          <div className={`space-y-8 animate-on-scroll slide-left ${isVisible ? 'animate-slide-in-left' : ''}`}>
            {/* Map Section */}
            <div className="glass-card rounded-3xl overflow-hidden shadow-2xl relative group cursor-pointer" 
                 onClick={() => window.open('https://www.google.com/maps/place/Bodenseebär/@47.674195,9.304015,15z/data=!4m7!3m6!1s0x479af9f0723d9769:0xebdffdab1f93641e!8m2!3d47.674195!4d9.3158409!15sChRib2RlbnNlZSBiw6RyIGhhZ25hdVoWIhRib2RlbnNlZSBiw6RyIGhhZ25hdZIBBXN0b3JlmgEjQ2haRFNVaE5NRzluUzBWSlEwRm5UVU5KYTB4dWJVOTNFQUXgAQD6AQUIkAEQEg!16s%2Fg%2F11tw_st1pj', '_blank')}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2690.123456789!2d9.3158409!3d47.674195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479af9f0723d9769%3A0xebdffdab1f93641e!2sBodenseeb%C3%A4r!5e0!3m2!1sde!2sde!4v1234567890123!5m2!1sde!2sde"
                width="100%"
                height="400"
                style={{ border: 0, pointerEvents: 'none' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Bodenseebär - Seestraße 32, Hagnau am Bodensee"
                className="rounded-3xl transition-all duration-300 group-hover:scale-105"
              />
              
              {/* Click to open overlay */}
              <div className="absolute inset-0 bg-transparent group-hover:bg-primary/5 transition-all duration-300 rounded-3xl flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 glass-dark rounded-2xl px-4 py-2 text-white">
                  <div className="flex items-center gap-2">
                    <Navigation className="h-4 w-4" />
                    <span className="text-sm font-medium">In Google Maps öffnen</span>
                  </div>
                </div>
              </div>
              
            </div>

            {/* Amenities */}
            <div className={`animate-on-scroll fade-up ${isVisible ? 'animate-fade-in-up stagger-1' : ''}`}>
              <h3 className="mb-6 text-2xl font-bold text-charcoal">Was wir bieten</h3>
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
                      <h3 className="mb-2 text-xl font-semibold text-charcoal">Adresse</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Seestraße 32<br />
                        88709 Hagnau am Bodensee<br />
                        Deutschland
                      </p>
                      <button 
                        className="mt-3 text-primary hover:text-primary/80 font-medium text-sm transition-colors"
                        onClick={() => window.open('https://www.google.com/maps/place/Bodenseebär/@47.674195,9.304015,15z/data=!4m7!3m6!1s0x479af9f0723d9769:0xebdffdab1f93641e!8m2!3d47.674195!4d9.3158409!15sChRib2RlbnNlZSBiw6RyIGhhZ25hdVoWIhRib2RlbnNlZSBiw6RyIGhhZ25hdZIBBXN0b3JlmgEjQ2haRFNVaE5NRzluUzBWSlEwRm5UVU5KYTB4dWJVOTNFQUXgAQD6AQUIkAEQEg!16s%2Fg%2F11tw_st1pj', '_blank')}
                      >
                        Route anzeigen →
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
                      <h3 className="mb-2 text-xl font-semibold text-charcoal">Öffnungszeiten</h3>
                      <div className="space-y-1 text-muted-foreground">
                        <p>Bitte <span className="font-medium">kontaktieren Sie uns</span> für aktuelle Öffnungszeiten</p>
                        <p className="text-sm">oder besuchen Sie uns vor Ort</p>
                      </div>
                      <div className="mt-3 flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                        <span className="text-primary font-medium text-sm">Geschäft geöffnet</span>
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
                      <h3 className="mb-2 text-xl font-semibold text-charcoal">Kontakt</h3>
                      <div className="space-y-2">
                        <a href="tel:+491743248431" className="block text-muted-foreground hover:text-primary transition-colors">
                          +49 174 3248431
                        </a>
                        <div className="pt-2">
                          <p className="text-sm font-medium text-charcoal mb-1">Besuchen Sie uns:</p>
                          <p className="text-sm text-muted-foreground">
                            Seestraße 32, Hagnau am Bodensee
                          </p>
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
