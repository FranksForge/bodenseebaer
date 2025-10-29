import { useEffect, useRef, useState } from "react";
import { Star, ZoomIn, X, Instagram, ChefHat, Coffee, Heart } from "lucide-react";
import menuCraftImage from "@/assets/menu-craft.png";
import menuFoodImage from "@/assets/menu-food.jpg";
import menuHealthyImage from "@/assets/menu-healthy.png";
import menuCraftImageVN from "@/assets/menu-craft-vn.png";
import menuFoodImageVN from "@/assets/menu-food-vn.jpg";
import menuHealthyImageVN from "@/assets/menu-healthy-vn.png";

const menuSections = {
  en: [
    {
      id: "craft",
      title: "Craft Menu",
      subtitle: "More Espresso, Less Depresso",
      description: "Premium coffee, teas, and specialty beverages from our Daklak highlands farm",
      image: menuCraftImage,
      icon: Coffee,
      color: "from-amber-500/20 to-orange-500/20"
    },
    {
      id: "food", 
      title: "Craft Food",
      subtitle: "Gluten-Free Waffles & Pancakes",
      description: "Wholesome gluten-free brunch options made with almond & oat flour",
      image: menuFoodImage,
      icon: ChefHat,
      color: "from-green-500/20 to-emerald-500/20"
    },
    {
      id: "healthy",
      title: "Craft Healthy", 
      subtitle: "Organic Smoothies & Fresh Juices",
      description: "Nutrient-packed smoothies, protein shakes, and fresh juices for wellness",
      image: menuHealthyImage,
      icon: Heart,
      color: "from-teal-500/20 to-cyan-500/20"
    }
  ],
  vn: [
    {
      id: "craft",
      title: "Thực Đơn Craft",
      subtitle: "Nhiều Espresso Hơn, Ít Stress Hơn",
      description: "Cà phê cao cấp, trà và đồ uống đặc biệt từ trang trại Daklak của chúng tôi",
      image: menuCraftImageVN,
      icon: Coffee,
      color: "from-amber-500/20 to-orange-500/20"
    },
    {
      id: "food",
      title: "Craft Food", 
      subtitle: "Bánh Waffle & Pancake Không Gluten",
      description: "Món ăn sáng lành mạnh không gluten làm từ bột hạnh nhân & yến mạch",
      image: menuFoodImageVN,
      icon: ChefHat,
      color: "from-green-500/20 to-emerald-500/20"
    },
    {
      id: "healthy",
      title: "Craft Healthy",
      subtitle: "Sinh Tố Organic & Nước Ép Tươi", 
      description: "Sinh tố giàu dinh dưỡng, protein shake và nước ép tươi cho sức khỏe",
      image: menuHealthyImageVN,
      icon: Heart,
      color: "from-teal-500/20 to-cyan-500/20"
    }
  ]
};

const Menu = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [language, setLanguage] = useState<'en' | 'vn'>('en');
  const sectionRef = useRef<HTMLElement>(null);

  const currentMenuSections = menuSections[language];

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

  // Handle escape key for lightbox
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedImage(null);
      }
    };

    if (selectedImage) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage]);

  return (
    <>
      <section 
        ref={sectionRef}
        className="relative bg-muted py-24 md:py-32 overflow-hidden"
      >
        {/* Background decorations */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-20 w-40 h-40 rounded-full gradient-radial opacity-5 floating-element" />
          <div className="absolute bottom-32 left-16 w-28 h-28 rounded-full bg-primary/5 blur-2xl floating-element-delayed" />
          <ChefHat className="absolute top-40 left-20 h-12 w-12 text-primary/5 floating-element" />
        </div>

        <div className="container-modern">
          {/* Enhanced Header */}
          <div className={`mb-20 text-center animate-on-scroll fade-up ${isVisible ? 'animate-fade-in-up' : ''}`}>
            <div className="relative inline-block">
              <h2 className="mb-6 text-5xl font-bold text-charcoal md:text-6xl lg:text-7xl">
                Our <span className="text-gradient">Menu</span>
              </h2>
              <div className="absolute -top-6 -left-6 text-primary/20">
                <Star className="h-8 w-8 animate-pulse" />
              </div>
              
              {/* Compact Language Toggle */}
              <div className="absolute -top-2 -right-20 md:-right-24">
                <div className="glass rounded-full p-1 flex gap-1">
                  <button
                    onClick={() => setLanguage('en')}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 ${
                      language === 'en'
                        ? 'bg-primary text-white shadow-md'
                        : 'text-muted-foreground hover:text-primary hover:bg-primary/10'
                    }`}
                  >
                    En
                  </button>
                  <button
                    onClick={() => setLanguage('vn')}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 ${
                      language === 'vn'
                        ? 'bg-primary text-white shadow-md'
                        : 'text-muted-foreground hover:text-primary hover:bg-primary/10'
                    }`}
                  >
                    Vn
                  </button>
                </div>
              </div>
            </div>
            <p className="mx-auto max-w-3xl text-xl text-muted-foreground leading-relaxed">
              Farm-to-table coffee from our Daklak highlands paired with wholesome gluten-free brunch options
            </p>
          </div>

          {/* Menu Preview Grid */}
          <div className={`animate-on-scroll fade-up ${isVisible ? 'animate-fade-in-up stagger-1' : ''}`}>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
              {currentMenuSections.map((section, index) => (
                <div 
                  key={section.id}
                  className={`group relative animate-on-scroll scale ${isVisible ? 'animate-scale-in' : ''}`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Menu Preview Card */}
                  <div className="glass-card rounded-2xl overflow-hidden hover-lift transition-all duration-500 group-hover:shadow-2xl">
                    {/* Header */}
                    <div className={`p-6 bg-gradient-to-r ${section.color}`}>
                      <div className="flex items-center gap-3 mb-2">
                        <section.icon className="h-6 w-6 text-primary" />
                        <h3 className="text-xl font-bold text-charcoal">{section.title}</h3>
                      </div>
                      <p className="text-sm font-medium text-primary mb-1">{section.subtitle}</p>
                      <p className="text-xs text-muted-foreground">{section.description}</p>
                    </div>

                    {/* Menu Image Preview */}
                    <div 
                      className="relative cursor-pointer group/image"
                      onClick={() => setSelectedImage(section.image)}
                    >
                      <img 
                        src={section.image} 
                        alt={`${section.title} Menu`}
                        className="w-full h-auto transition-all duration-500 group-hover/image:scale-105"
                        loading="lazy"
                      />
                      
                      {/* Hover overlay with zoom icon */}
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/image:opacity-100 transition-all duration-300 flex items-center justify-center">
                        <div className="glass-dark rounded-full p-3">
                          <ZoomIn className="h-6 w-6 text-white" />
                        </div>
                      </div>

                      {/* Click to zoom text */}
                      <div className="absolute bottom-3 left-3 right-3 glass-dark rounded-lg p-2 opacity-0 group-hover/image:opacity-100 transition-all duration-300">
                        <p className="text-white text-center text-xs font-medium">
                          Click to view full menu
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Decorative background glow */}
                  <div className={`absolute -z-10 inset-0 bg-gradient-to-br ${section.color} rounded-2xl blur-xl scale-0 group-hover:scale-110 transition-all duration-500`} />
                </div>
              ))}
            </div>
          </div>

          {/* Call to action */}
          <div className={`mt-20 text-center animate-on-scroll fade-up ${isVisible ? 'animate-fade-in-up stagger-2' : ''}`}>
            <div className="glass-card rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-charcoal mb-4">
                Visit Our Café
              </h3>
              <p className="text-muted-foreground mb-6">
                Experience our authentic menu crafted with love and creativity.
                <br />
                <strong>Follow us on Instagram @craft_cafe.dn for daily updates!</strong>
              </p>
              <div className="flex gap-4 justify-center">
                <button 
                  className="glass-dark hover:bg-primary/10 rounded-xl px-8 py-3 font-medium text-primary hover:text-primary/80 transition-all duration-200 hover-glow"
                  onClick={() => window.open('https://www.instagram.com/craft_cafe.dn/', '_blank')}
                >
                  <Instagram className="h-4 w-4 mr-2 inline" />
                  @craft_cafe.dn
                </button>
                <button className="glass hover:glass-card rounded-xl px-8 py-3 font-medium text-primary hover:text-primary/80 transition-all duration-200">
                  Visit Us Today
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal for Menu Images */}
      {selectedImage && (
        <div className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in">
          {/* Modal content */}
          <div className="relative max-w-6xl max-h-full w-full">
            {/* Close button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-4 glass-dark rounded-full p-3 text-white hover:bg-white/20 transition-all z-10"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Menu Image */}
            <div className="glass-card rounded-2xl overflow-hidden">
              <img
                src={selectedImage}
                alt="Menu Details"
                className="w-full h-auto max-h-[85vh] object-contain"
                loading="lazy"
              />
            </div>

            {/* Instructions */}
            <div className="mt-4 text-center">
              <p className="text-white/80 text-sm">
                Press <kbd className="glass-dark rounded px-2 py-1 text-xs">ESC</kbd> or click outside to close
              </p>
            </div>
          </div>

          {/* Click outside to close */}
          <div 
            className="absolute inset-0 -z-10"
            onClick={() => setSelectedImage(null)}
          />
        </div>
      )}
    </>
  );
};

export default Menu;
