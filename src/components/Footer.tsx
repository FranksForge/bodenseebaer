import { MapPin, Phone, Mail, Instagram, Facebook, Clock, Coffee, Heart, ArrowUp } from "lucide-react";
import craftLogo from "@/assets/craft-logo.jpg";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickLinks = [
    { label: "Our Story", href: "#story" },
    { label: "Menu", href: "#menu" },
    { label: "Gallery", href: "#gallery" },
    { label: "Community", href: "#community" },
    { label: "Visit Us", href: "#location" }
  ];

  const socialLinks = [
    { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/craft_cafe.dn/", handle: "@craft_cafe.dn" },
    { name: "Facebook", icon: Facebook, href: "https://www.facebook.com/profile.php?id=100092554333936&sk=reels_tab", handle: "CRAFT Café Đà Nẵng" },
  ];

  return (
    <footer className="relative bg-charcoal text-white overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 rounded-full gradient-radial opacity-5 floating-element" />
        <div className="absolute bottom-16 right-24 w-24 h-24 rounded-full bg-primary/5 blur-2xl floating-element-delayed" />
        <Coffee className="absolute top-16 right-32 h-8 w-8 text-white/5 floating-element" />
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
                    src={craftLogo} 
                    alt="Craft Café" 
                    className="h-16 w-16 rounded-full object-contain shadow-xl"
                  />
                  <div className="absolute inset-0 rounded-full bg-primary/20 blur-md scale-110 -z-10" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">CRAFT Café</h3>
                  <p className="text-white/70">Đà Nẵng, Vietnam</p>
                </div>
              </div>
              
              <p className="text-white/80 leading-relaxed max-w-md">
                Farm-to-table coffee from our Daklak highlands paired with gluten-free wellness. 
                A leafy sanctuary in Đà Nẵng where quality meets community.
              </p>

              {/* Contact info */}
              <div className="space-y-3">
                <div className="flex items-start gap-3 text-white/70">
                  <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm">126/20 Nguyễn Duy Hiệu, An Hải Đông, Sơn Trà, Đà Nẵng 550000</span>
                </div>
                <div className="flex items-center gap-3 text-white/70">
                  <Phone className="h-4 w-4 text-primary" />
                  <a href="tel:+84902009981" className="text-sm hover:text-primary transition-colors">
                    +84 902 009 981
                  </a>
                </div>
                <div className="flex items-center gap-3 text-white/70">
                  <Mail className="h-4 w-4 text-primary" />
                  <a href="mailto:info@craftcafe-danang.com" className="text-sm hover:text-primary transition-colors">
                    info@craftcafe-danang.com
                  </a>
                </div>
                <div className="flex items-center gap-3 text-white/70">
                  <Clock className="h-4 w-4 text-primary" />
                  <span className="text-sm">Daily: 7:30AM - 7:30PM</span>
                </div>
              </div>
            </div>

            {/* Quick links */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-white">Quick Links</h4>
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
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-white">Follow Us</h4>
              
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
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4 text-sm text-white/60">
              <span>© {new Date().getFullYear()} CRAFT Café Đà Nẵng. All rights reserved.</span>
              <div className="hidden md:flex items-center gap-1">
                <span>Made with</span>
                <Heart className="h-3 w-3 text-red-500 fill-current animate-pulse" />
                <span>in Đà Nẵng</span>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="flex gap-4 text-xs text-white/50">
                <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
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
        </div>

        {/* Decorative tagline */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
          <div className="glass-dark rounded-full px-6 py-2 text-xs text-white/60 whitespace-nowrap">
            ✨ Crafted Coffee. Crafted Moments. ✨
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
