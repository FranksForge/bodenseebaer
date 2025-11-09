import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import bodenseebaerLogo from "@/assets/bodenseebaer-logo-optimized.png";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);

      // Determine active section
      const sections = ["story", "gallery", "location"];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      setActiveSection(currentSection || "");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { id: "story", label: "Kommen Sie herein", icon: "story" },
    { id: "gallery", label: "Produkte", icon: "gallery" },
    { id: "location", label: "Besuchen Sie uns", icon: "location" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
          isScrolled
            ? "glass-card shadow-lg border-b border-white/10"
            : "bg-white/15 backdrop-blur-xl border-b border-white/30 shadow-[0_20px_60px_rgba(15,23,42,0.18)]"
        }`}
      >
        <div className="container-modern">
          <div className="flex items-center justify-between h-20">
            {/* Logo with enhanced styling */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="group flex items-center gap-3 hover-scale transition-all duration-300"
            >
              <div className="relative">
                <img
                  src={bodenseebaerLogo}
                  alt="Bodenseebär"
                  className="h-12 w-12 rounded-full object-contain transition-all duration-300 group-hover:shadow-lg"
                />
                {/* Subtle glow effect */}
                <div className="absolute inset-0 rounded-full bg-primary/20 blur-md scale-0 group-hover:scale-110 transition-all duration-300 -z-10" />
              </div>
              <div className="flex flex-col">
                <span
                  className={`font-display text-xl font-semibold tracking-tight transition-all duration-300 ${
                    isScrolled
                      ? "text-foreground"
                      : "text-white drop-shadow-[0_6px_18px_rgba(15,23,42,0.75)]"
                  }`}
                >
                  <span className={isScrolled ? "text-foreground" : "text-white"}>Bodensee</span>
                  <span className="text-primary">bär</span>
                </span>
                <span className={`text-xs font-medium tracking-[0.08em] uppercase transition-all ${
                  isScrolled
                    ? "text-muted-foreground"
                    : "text-white drop-shadow-[0_4px_14px_rgba(15,23,42,0.65)]"
                }`}>
                  Hagnau am Bodensee
                </span>
              </div>
            </button>

            {/* Desktop Navigation with enhanced styling */}
            <div className="hidden md:flex items-center">
              <div className={`flex items-center gap-2 rounded-full px-6 py-2 transition-all duration-300 ${
                isScrolled ? "glass" : "bg-white/25 backdrop-blur-lg border border-white/50 shadow-[0_10px_30px_rgba(15,23,42,0.15)]"
              }`}>
                {navLinks.map((link, index) => {
                  const isVisitUs = link.id === "location";
                  const isMenu = link.id === "menu";
                  
                  return (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full group ${
                      // Special styling for "Visit Us" (CTA button)
                      isVisitUs 
                        ? isScrolled 
                          ? "bg-primary text-white shadow-md hover:bg-primary/90" 
                          : "bg-primary/80 text-white shadow-lg backdrop-blur-sm hover:bg-primary"
                        : // Special styling for "Menu" (add border)
                          isMenu && isScrolled 
                          ? "border border-primary/30 text-foreground hover:text-primary hover:bg-primary/10 hover:border-primary" 
                            : activeSection === link.id
                            ? isScrolled 
                              ? "bg-primary/20 text-primary" 
                              : "bg-white/25 text-white shadow-sm"
                            : isScrolled 
                              ? "text-foreground hover:text-primary hover:bg-primary/10" 
                              : "text-white hover:text-white hover:bg-white/30 shadow-sm"
                    }`}
                  >
                    <span className="relative z-10">{link.label}</span>
                    
                    {/* Active indicator */}
                    {activeSection === link.id && !isVisitUs && (
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 animate-scale-in" />
                    )}
                    
                    {/* Hover effect */}
                    {!isVisitUs && (
                      <div className="absolute inset-0 rounded-full bg-primary/10 scale-0 group-hover:scale-100 transition-transform duration-200" />
                    )}
                  </button>
                );
              })}
              </div>
              
              {/* Decorative element removed */}
            </div>

            {/* Mobile Menu Button with enhanced styling */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden relative p-3 rounded-full transition-all duration-300 ${
                isScrolled ? "glass hover:bg-primary/10" : "bg-white/20 hover:bg-white/30"
              }`}
              aria-label="Toggle menu"
            >
              <div className="relative">
                {isMobileMenuOpen ? (
                  <X className={`h-5 w-5 transition-all duration-200 ${
                    isScrolled ? "text-foreground" : "text-white"
                  }`} />
                ) : (
                  <Menu className={`h-5 w-5 transition-all duration-200 ${
                    isScrolled ? "text-foreground" : "text-white"
                  }`} />
                )}
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Enhanced Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          isMobileMenuOpen 
            ? "opacity-100 pointer-events-auto" 
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        
        {/* Menu content */}
        <div className={`absolute top-20 left-4 right-4 glass-card rounded-2xl p-6 transform transition-all duration-300 ${
          isMobileMenuOpen ? "translate-y-0 scale-100" : "-translate-y-4 scale-95"
        }`}>
          <div className="flex flex-col space-y-2">
            {navLinks.map((link, index) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`text-left px-4 py-3 rounded-xl font-medium transition-all duration-200 animate-fade-in-up ${
                  activeSection === link.id
                    ? "bg-primary/20 text-primary"
                    : "text-foreground hover:bg-primary/10 hover:text-primary"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {link.label}
              </button>
            ))}
            
            {/* Mobile menu footer */}
            <div className="border-t border-border/50 pt-4 mt-4">
              <p className="text-sm text-muted-foreground text-center">
                Alles für den See. Alles für Sie.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
