import { MapPin, Phone, Clock, ShoppingBag, Heart, ArrowUp } from "lucide-react";
import bodenseebaerLogo from "@/assets/bodenseebaer-logo-optimized.png";
import sichtbarVorOrtLogo from "@/assets/sichtbar-vor-ort-logo.png";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickLinks = [
    { label: "Kommen Sie herein", href: "#story" },
    { label: "Produkte", href: "#gallery" },
    { label: "Besuchen Sie uns", href: "#location" }
  ];

  const socialLinks: Array<{ name: string; icon: any; href: string; handle: string }> = [];

  return (
    <footer className="relative bg-charcoal text-white overflow-visible pb-12">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 rounded-full gradient-radial opacity-5 floating-element" />
        <div className="absolute bottom-16 right-24 w-24 h-24 rounded-full bg-primary/5 blur-2xl floating-element-delayed" />
        <ShoppingBag className="absolute top-16 right-32 h-8 w-8 text-white/5 floating-element" />
      </div>

      <div className="container-modern relative">
        {/* Main footer content */}
        <div className="py-16 md:py-20">
          <div className="grid gap-12 lg:grid-cols-4 lg:gap-16">
            {/* Brand section */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <img 
                    src={bodenseebaerLogo} 
                    alt="Bodenseebär" 
                    className="h-16 w-16 rounded-full object-contain shadow-xl"
                  />
                  <div className="absolute inset-0 rounded-full bg-primary/20 blur-md scale-110 -z-10" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">
                    <span className="text-white">Bodensee</span>
                    <span className="text-primary">bär</span>
                  </h3>
                  <p className="text-white/70">Hagnau am Bodensee, Deutschland</p>
                </div>
              </div>
              
              <p className="text-white/80 leading-relaxed max-w-md">
                Alles für den See. Alles für Sie. Entdecken Sie unsere vielfältige Auswahl 
                an Produkten für den perfekten Tag am Bodensee.
              </p>

              {/* Contact info */}
              <div className="space-y-3">
                <div className="flex items-start gap-3 text-white/70">
                  <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Seestraße 32, 88709 Hagnau am Bodensee, Deutschland</span>
                </div>
                <div className="flex items-center gap-3 text-white/70">
                  <Phone className="h-4 w-4 text-primary" />
                  <a href="tel:+4917474716412" className="text-sm hover:text-primary transition-colors">
                    +49 174 74716412
                  </a>
                </div>
                <div className="flex items-center gap-3 text-white/70">
                  <Clock className="h-4 w-4 text-primary" />
                  <span className="text-sm">Bitte kontaktieren Sie uns für Öffnungszeiten</span>
                </div>
              </div>
            </div>

            {/* Quick links */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-white">Schnellzugriff</h4>
              <nav className="space-y-3">
                {quickLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="block text-white/70 hover:text-primary transition-colors duration-200 text-sm"
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.querySelector(link.href);
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Social */}
            {socialLinks.length > 0 && (
              <div className="space-y-6">
                <h4 className="text-lg font-semibold text-white">Besuchen Sie uns</h4>
                
                {/* Social links */}
                <div className="space-y-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-white/70 hover:text-primary transition-all duration-200 group"
                    >
                      <div className="glass-dark rounded-full p-2 group-hover:bg-primary/20">
                        <social.icon className="h-4 w-4" />
                      </div>
                      <div>
                        <span className="text-sm font-medium text-white">{social.name}</span>
                        <p className="text-xs text-white/60">{social.handle}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4 text-sm text-white/60">
              <span>© {new Date().getFullYear()} Bodenseebär. Alle Rechte vorbehalten.</span>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="flex gap-4 text-xs text-white/50">
                <a href="#" className="hover:text-primary transition-colors">Datenschutz</a>
                <a href="#" className="hover:text-primary transition-colors">Impressum</a>
              </div>
              
              {/* Scroll to top button */}
              <button
                onClick={scrollToTop}
                className="glass-dark hover:bg-primary/20 rounded-full p-2 text-white/70 hover:text-primary transition-all hover-lift"
                aria-label="Scroll to top"
              >
                <ArrowUp className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="mt-6 flex flex-col items-center gap-2 text-xs text-white/60">
            <span className="uppercase tracking-[0.2em] text-white/50">Website bereitgestellt durch</span>
            <a
              href="https://sichtbar-vor-ort.de"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-white/70 hover:text-primary transition-colors"
            >
              <img
                src={sichtbarVorOrtLogo}
                alt="sichtbar-vor-ort.de Logo"
                className="h-8 w-auto object-contain drop-shadow-lg"
                loading="lazy"
              />
              <span className="text-sm font-medium">sichtbar-vor-ort.de</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
