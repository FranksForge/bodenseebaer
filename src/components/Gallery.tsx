import { useEffect, useRef, useState } from "react";
import { X, ZoomIn, Camera, ShoppingBag } from "lucide-react";
// Group 1 images
import badeschuhe0 from "@/assets/products/group1/badeschuhe0.jpg";
import badeschuh1 from "@/assets/products/group1/badeschuh1.JPG";
import badeschuh2 from "@/assets/products/group1/badeschuh2.JPG";
import badeschuh3 from "@/assets/products/group1/badeschuh3.JPG";
import mainUndvielesmehr2 from "@/assets/products/group1/main_undvielesmehr2.jpg";
// Group 2 images
import mainSeemode from "@/assets/products/group2/main_01seemode.jpg";
import tasche1 from "@/assets/products/group2/tachee1.JPG";
import tasche2 from "@/assets/products/group2/tasche2.JPG";
import tasche3 from "@/assets/products/group2/tasche3.JPG";
import tasche4 from "@/assets/products/group2/tasche4.JPG";
// Group 3 images
import allesfuerdensee1 from "@/assets/products/group3/02allesfuerdensee.jpg";
import allesfuerdensee2 from "@/assets/products/group3/03allesfuerdensee2.jpg";
import mainUndvielmehr1 from "@/assets/products/group3/main_undvielmehr1.jpg";
import tasche5 from "@/assets/products/group3/tasche5.JPG";
import tasche6 from "@/assets/products/group3/tasche6.JPG";

// Group 1: Badeschuhe + Produktvielfalt
const group1 = {
  title: "Badeschuhe & Accessoires",
  subtitle: "Für sicheren Stand am See",
  smallImages: [
    { src: badeschuhe0, alt: "Badeschuhe Auswahl - Bodenseebär", category: "Badeschuhe" },
    { src: badeschuh1, alt: "Badeschuhe - Modell 1", category: "Badeschuhe" },
    { src: badeschuh2, alt: "Badeschuhe - Modell 2", category: "Badeschuhe" },
    { src: badeschuh3, alt: "Badeschuhe - Modell 3", category: "Badeschuhe" },
  ],
  mainImage: { src: mainUndvielesmehr2, alt: "Produktvielfalt - Bodenseebär Hagnau", category: "Vieles Mehr" },
};

// Group 2: Taschen + Seemode
const group2 = {
  title: "Seemode & Taschen",
  subtitle: "Stylisch und praktisch für Ihren Seetag",
  smallImages: [
    { src: tasche1, alt: "Tasche - Modell 1", category: "Taschen" },
    { src: tasche2, alt: "Tasche - Modell 2", category: "Taschen" },
    { src: tasche3, alt: "Tasche - Modell 3", category: "Taschen" },
    { src: tasche4, alt: "Tasche - Modell 4", category: "Taschen" },
  ],
  mainImage: { src: mainSeemode, alt: "Seemode Kollektion - Bodenseebär", category: "Seemode" },
};

// Group 3: Taschen + Alles für den See + Vieles mehr
const group3 = {
  title: "Und vieles mehr",
  subtitle: "Entdecken Sie unsere Vielfalt am schönen Bodensee",
  smallImages: [
    { src: tasche5, alt: "Tasche - Modell 5", category: "Taschen" },
    { src: tasche6, alt: "Tasche - Modell 6", category: "Taschen" },
    { src: allesfuerdensee1, alt: "Alles für den See - Kollektion 1", category: "Seemode" },
    { src: allesfuerdensee2, alt: "Alles für den See - Kollektion 2", category: "Seemode" },
  ],
  mainImage: { src: mainUndvielmehr1, alt: "Weitere Produkte - Vieles mehr am Bodensee", category: "Vieles Mehr" },
};

const galleryRows = [
  // Gruppe 1: 4 x Badeschuhe (klein) + Produktvielfalt (groß)
  {
    title: group1.title,
    subtitle: group1.subtitle,
    type: "small-left-big-right",
    smallImages: group1.smallImages,
    bigImage: group1.mainImage,
  },
  // Gruppe 2: Seemode (groß) + 4 x Taschen (klein)
  {
    title: group2.title,
    subtitle: group2.subtitle,
    type: "big-left-small-right",
    smallImages: group2.smallImages,
    bigImage: group2.mainImage,
  },
  // Gruppe 3: 4 x Bilder (klein) + Vieles mehr (groß)
  {
    title: group3.title,
    subtitle: group3.subtitle,
    type: "small-left-big-right",
    smallImages: group3.smallImages,
    bigImage: group3.mainImage,
  },
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
          <ShoppingBag className="absolute bottom-20 left-32 h-8 w-8 text-primary/5 floating-element-delayed" />
        </div>

        <div className="container-modern">
          {/* Enhanced Header */}
          <div className={`mb-20 text-center animate-on-scroll fade-up ${isVisible ? 'animate-fade-in-up' : ''}`}>
            <div className="relative inline-block">
              <h2 className="mb-6 text-5xl font-bold text-charcoal md:text-6xl lg:text-7xl">
                Unsere <span className="text-gradient">Produkte</span>
          </h2>
              <div className="absolute -top-4 -right-8 text-primary/20">
                <ShoppingBag className="h-8 w-8 animate-pulse" />
              </div>
            </div>
            <p className="mx-auto max-w-3xl text-xl text-muted-foreground leading-relaxed">
              Entdecken Sie unsere vielfältige Auswahl an Produkten für den perfekten Tag am Bodensee
            </p>
            
            {/* Product Categories List */}
            <nav aria-label="Produktkategorien" className="mt-8 flex flex-wrap items-center justify-center gap-3 md:gap-4">
              <span className="text-base font-medium text-charcoal">Seemode</span>
              <span className="text-primary">•</span>
              <span className="text-base font-medium text-charcoal">Taschen</span>
              <span className="text-primary">•</span>
              <span className="text-base font-medium text-charcoal">Badeschuhe</span>
              <span className="text-primary">•</span>
              <span className="text-base font-medium text-charcoal">Accessoires</span>
              <span className="text-primary">•</span>
              <span className="text-base font-medium text-charcoal">Kaltgetränke</span>
              <span className="text-primary">•</span>
              <span className="text-base font-medium text-primary">Und Vieles mehr</span>
            </nav>
          </div>

          {/* Structured Gallery Layout */}
          <div className="space-y-16 max-w-7xl mx-auto">
            {galleryRows.map((row, rowIndex) => (
              <article key={rowIndex} className="space-y-6">
                {/* Subheader */}
                <header className="text-center mb-8">
                  <h3 className="text-3xl md:text-4xl font-bold text-charcoal mb-2">
                    {row.title}
                  </h3>
                  {row.subtitle && (
                    <p className="text-lg text-muted-foreground font-light">
                      {row.subtitle}
                    </p>
                  )}
                </header>
                
                <div 
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

                    {/* Small Images - Right Side */}
                    <div className="lg:col-span-2 grid grid-cols-2 gap-4">
                      {row.smallImages && row.smallImages.length > 0 ? row.smallImages.map((image, index) => {
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
                      }) : null}
                    </div>
                  </>
                )}
                </div>
              </article>
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
                    <button className="glass hover:glass-card rounded-full p-3 text-muted-foreground hover:text-primary transition-all" aria-label="Download">
                      <ZoomIn className="h-4 w-4" />
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
