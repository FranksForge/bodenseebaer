import cafeExterior from "@/assets/cafe-exterior.jpg";
import cafeInterior from "@/assets/cafe-interior.jpg";
import latteArt from "@/assets/latte-art.jpg";
import coffeeHands from "@/assets/coffee-hands.jpg";
import waffleBerries from "@/assets/waffle-berries.jpg";
import vietnameseCoffee from "@/assets/vietnamese-coffee.jpg";

const galleryImages = [
  { src: cafeExterior, alt: "Lush entrance to Craft Café", span: "md:col-span-2" },
  { src: latteArt, alt: "Perfect latte art", span: "" },
  { src: coffeeHands, alt: "Peaceful coffee moment", span: "" },
  { src: cafeInterior, alt: "Green sanctuary interior", span: "md:col-span-2" },
  { src: waffleBerries, alt: "Fresh berry waffles", span: "" },
  { src: vietnameseCoffee, alt: "Vietnamese iced coffee", span: "" },
];

const Gallery = () => {
  return (
    <section className="bg-background py-24 md:py-32">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-charcoal md:text-5xl">
            Gallery
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Sunlight, shadows, and stories—captured in moments
          </p>
        </div>

        {/* Gallery grid */}
        <div className="grid gap-4 md:grid-cols-3 md:gap-6">
          {galleryImages.map((image, index) => (
            <div 
              key={index}
              className={`group animate-fade-in overflow-hidden rounded-lg shadow-md ${image.span}`}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="aspect-square overflow-hidden">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="h-full w-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
