import { useEffect, useRef, useState } from "react";
import { X, ZoomIn, Download, Share2, Camera, Instagram } from "lucide-react";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import gallery7 from "@/assets/gallery-7.jpg";
import gallery8 from "@/assets/gallery-8.jpg";
import gallery9 from "@/assets/gallery-9.jpg";
import gallery10 from "@/assets/gallery-10.jpg";

const galleryRows = [
  // Row 1: 4 small (left) + 1 big (right)
  {
    type: "small-left-big-right",
    smallImages: [
      { 
        src: gallery4, 
        alt: "Banutella - A must try signature dish"
      },
      { 
        src: gallery8, 
        alt: "Organic fresh juices and smoothies"
      },
      { 
        src: gallery7, 
        alt: "Caramelized gluten-free pancakes"
      },
      { 
        src: gallery9, 
        alt: "Fresh smoothies and seasonal specials"
      }
    ],
    bigImage: {
      src: gallery2, 
      alt: "CRAFT Café - A hidden gem in Da Nang"
    }
  },
  
  // Row 2: 1 big (left) + 4 small (right)  
  {
    type: "big-left-small-right",
    bigImage: {
      src: gallery6, 
      alt: "Comfy seating in our green sanctuary"
    },
    smallImages: [
      { 
        type: "instagram-card"
      },
      { 
        src: gallery5, 
        alt: "Close to nature dining experience"
      },
      { 
        src: gallery1, 
        alt: "Daily coffee moments at CRAFT"
      },
      { 
        src: gallery10, 
        alt: "Artisan coffee creation"
      }
    ]
  }
];

const Gallery = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState<any | null>(null);
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
        className="relative bg-background py-24 md:py-32 overflow-hidden"
      >
        {/* Background decorations */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-32 left-20 w-36 h-36 rounded-full gradient-radial opacity-5 floating-element" />
          <div className="absolute bottom-40 right-24 w-28 h-28 rounded-full bg-secondary/5 blur-2xl floating-element-delayed" />
          <Camera className="absolute top-20 right-32 h-10 w-10 text-primary/5 floating-element" />
          <Instagram className="absolute bottom-20 left-32 h-8 w-8 text-primary/5 floating-element-delayed" />
        </div>

        <div className="container-modern">
          {/* Enhanced Header */}
          <div className={`mb-20 text-center animate-on-scroll fade-up ${isVisible ? 'animate-fade-in-up' : ''}`}>
            <div className="relative inline-block">
              <h2 className="mb-6 text-5xl font-bold text-charcoal md:text-6xl lg:text-7xl">
                <span className="text-gradient">Gallery</span>
          </h2>
              <div className="absolute -top-4 -right-8 text-primary/20">
                <Camera className="h-8 w-8 animate-pulse" />
              </div>
            </div>
            <p className="mx-auto max-w-3xl text-xl text-muted-foreground leading-relaxed">
              Sunlight, shadows, and stories—captured in moments that tell our tale
          </p>
        </div>

          {/* Structured Gallery Layout */}
          <div className="space-y-12 max-w-7xl mx-auto">
            {galleryRows.map((row, rowIndex) => (
              <div 
                key={rowIndex}
                className={`grid grid-cols-1 lg:grid-cols-5 gap-6 animate-on-scroll fade-up ${
                  isVisible ? 'animate-fade-in-up' : ''
                }`}
                style={{ animationDelay: `${rowIndex * 0.2}s` }}
              >
                {row.type === "small-left-big-right" ? (
                  <>
                    {/* 4 Small Images - Left Side */}
                    <div className="lg:col-span-2 grid grid-cols-2 gap-4">
                      {row.smallImages.map((image, index) => (
                        <div
                          key={index}
                          className="group relative cursor-pointer animate-scale-in"
                          style={{ animationDelay: `${(rowIndex * 5 + index) * 0.1}s` }}
                          onClick={() => setSelectedImage(image)}
                        >
                          <div className="glass-card rounded-2xl overflow-hidden hover-lift transition-all duration-500 group-hover:shadow-2xl">
                            <div className="aspect-square overflow-hidden relative">
                              <img 
                                src={image.src} 
                                alt={image.alt}
                                className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110"
                                loading="lazy"
                              />
                              
                              {/* Hover overlay */}
                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                                <div className="absolute bottom-3 left-3 right-3">
                                  <div className="flex items-center justify-between">
                                    <p className="text-white text-xs opacity-90">
                                      {image.alt}
                                    </p>
                                    <div className="glass-dark rounded-full p-1.5">
                                      <ZoomIn className="h-3 w-3 text-white" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          
                          {/* Decorative glow */}
                          <div className="absolute -z-10 inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl blur-xl scale-0 group-hover:scale-110 transition-all duration-500" />
                        </div>
                      ))}
                    </div>

                    {/* 1 Big Image - Right Side */}
                    <div className="lg:col-span-3">
                      <div
                        className="group relative cursor-pointer animate-scale-in"
                        style={{ animationDelay: `${(rowIndex * 5 + 4) * 0.1}s` }}
                        onClick={() => setSelectedImage(row.bigImage)}
                      >
                        <div className="glass-card rounded-2xl overflow-hidden hover-lift transition-all duration-500 group-hover:shadow-2xl">
                          <div className="aspect-[4/3] overflow-hidden relative">
                            <img 
                              src={row.bigImage.src} 
                              alt={row.bigImage.alt}
                              className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110"
                              loading="lazy"
                            />
                            
                            {/* Hover overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                              <div className="absolute bottom-6 left-6 right-6">
                                <div className="flex items-center justify-between">
                                  <div>
                                    <p className="text-white text-lg font-medium mb-1">
                                      {row.bigImage.alt}
                                    </p>
                                    <span className="text-white/80 text-sm">Featured Image</span>
                                  </div>
                                  <div className="glass-dark rounded-full p-3">
                                    <ZoomIn className="h-5 w-5 text-white" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Decorative glow */}
                        <div className="absolute -z-10 inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl blur-2xl scale-0 group-hover:scale-110 transition-all duration-500" />
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    {/* 1 Big Image - Left Side */}
                    <div className="lg:col-span-3">
                      <div
                        className="group relative cursor-pointer animate-scale-in"
                        style={{ animationDelay: `${rowIndex * 5 * 0.1}s` }}
                        onClick={() => setSelectedImage(row.bigImage)}
                      >
                        <div className="glass-card rounded-2xl overflow-hidden hover-lift transition-all duration-500 group-hover:shadow-2xl">
                          <div className="aspect-[4/3] overflow-hidden relative">
                            <img 
                              src={row.bigImage.src} 
                              alt={row.bigImage.alt}
                              className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110"
                              loading="lazy"
                            />
                            
                            {/* Hover overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                              <div className="absolute bottom-6 left-6 right-6">
                                <div className="flex items-center justify-between">
                                  <div>
                                    <p className="text-white text-lg font-medium mb-1">
                                      {row.bigImage.alt}
                                    </p>
                                    <span className="text-white/80 text-sm">Featured Image</span>
                                  </div>
                                  <div className="glass-dark rounded-full p-3">
                                    <ZoomIn className="h-5 w-5 text-white" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Decorative glow */}
                        <div className="absolute -z-10 inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl blur-2xl scale-0 group-hover:scale-110 transition-all duration-500" />
                      </div>
                    </div>

                    {/* 4 Small Images - Right Side */}
                    <div className="lg:col-span-2 grid grid-cols-2 gap-4">
                      {row.smallImages.map((image, index) => {
                        // Handle Instagram Card
                        if (image.type === "instagram-card") {
                          return (
                            <div
                              key={`instagram-${index}`}
                              className="group relative cursor-pointer animate-scale-in"
                              style={{ animationDelay: `${(rowIndex * 5 + index + 1) * 0.1}s` }}
                              onClick={() => window.open('https://ig.me/m/craft_cafe.dn', '_blank')}
                            >
                              <div className="glass-card rounded-2xl overflow-hidden hover-lift transition-all duration-500 group-hover:shadow-2xl">
                                <div className="aspect-square bg-gradient-to-br from-amber-500/20 to-orange-500/20 flex flex-col items-center justify-center p-4 text-center relative overflow-hidden">
                                  
                                  {/* Background Pattern */}
                                  <div className="absolute inset-0 opacity-10">
                                    <div className="absolute top-2 left-2 w-4 h-4 rounded-full bg-white/20"></div>
                                    <div className="absolute bottom-3 right-3 w-6 h-6 rounded-full bg-white/10"></div>
                                    <div className="absolute top-1/2 right-2 w-3 h-3 rounded-full bg-white/15"></div>
                                  </div>

                                  {/* Instagram Icon */}
                                  <div className="glass-dark rounded-full p-2 mb-2 group-hover:scale-110 transition-transform duration-300">
                                    <Instagram className="h-4 w-4 text-amber-400" />
                                  </div>

                                  {/* Content */}
                                  <h4 className="text-sm font-bold text-charcoal mb-1">Follow Us</h4>
                                  <p className="text-xs text-muted-foreground mb-2 leading-tight">
                                    Daily moments & stories
                                  </p>
                                  
                                  {/* Handle */}
                                  <div className="glass rounded-full px-2 py-1 group-hover:bg-primary/20 transition-colors duration-300">
                                    <span className="text-primary font-medium text-xs">@craft_cafe.dn</span>
                                  </div>

                                  {/* Hover Effect */}
                                  <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-2xl" />
                                </div>
                              </div>

                              {/* Decorative glow */}
                              <div className="absolute -z-10 inset-0 bg-gradient-to-br from-amber-500/10 to-orange-500/10 rounded-2xl blur-xl scale-0 group-hover:scale-110 transition-all duration-500" />
                            </div>
                          );
                        }

                        // Handle regular images
                        return (
            <div 
              key={index}
                            className="group relative cursor-pointer animate-scale-in"
                            style={{ animationDelay: `${(rowIndex * 5 + index + 1) * 0.1}s` }}
                            onClick={() => setSelectedImage(image)}
            >
                            <div className="glass-card rounded-2xl overflow-hidden hover-lift transition-all duration-500 group-hover:shadow-2xl">
                              <div className="aspect-square overflow-hidden relative">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                                
                                {/* Hover overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                                  <div className="absolute bottom-3 left-3 right-3">
                                    <div className="flex items-center justify-between">
                                      <p className="text-white text-xs opacity-90">
                                        {image.alt}
                                      </p>
                                      <div className="glass-dark rounded-full p-1.5">
                                        <ZoomIn className="h-3 w-3 text-white" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            
                            {/* Decorative glow */}
                            <div className="absolute -z-10 inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl blur-xl scale-0 group-hover:scale-110 transition-all duration-500" />
                          </div>
                        );
                      })}
              </div>
                  </>
                )}
            </div>
          ))}
        </div>
      </div>
    </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in">
          {/* Modal content */}
          <div className="relative max-w-5xl max-h-full">
            {/* Close button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 glass-dark rounded-full p-3 text-white hover:bg-white/20 transition-all z-10"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Image */}
            <div className="glass-card rounded-2xl overflow-hidden">
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-w-full max-h-[80vh] object-contain"
                loading="lazy"
              />
              
              {/* Image info */}
              <div className="p-6 bg-white/95 backdrop-blur-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-charcoal mb-1">
                      {selectedImage.alt}
                    </h3>
                    <span className="glass rounded-full px-3 py-1 text-sm font-medium text-primary">
                      {selectedImage.category}
                    </span>
                  </div>
                  
                  <div className="flex gap-2">
                    <button className="glass hover:glass-card rounded-full p-3 text-muted-foreground hover:text-primary transition-all">
                      <Download className="h-4 w-4" />
                    </button>
                    <button className="glass hover:glass-card rounded-full p-3 text-muted-foreground hover:text-primary transition-all">
                      <Share2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
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

export default Gallery;
