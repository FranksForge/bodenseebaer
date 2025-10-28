import cafeInterior from "@/assets/cafe-interior.jpg";
import leafDecoration from "@/assets/leaf-decoration.png";

const Story = () => {
  return (
    <section className="relative overflow-hidden bg-background py-24 md:py-32">
      {/* Floating leaf decoration */}
      <img 
        src={leafDecoration} 
        alt="" 
        className="absolute right-12 top-24 w-24 animate-float opacity-20"
      />
      
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
          {/* Image */}
          <div className="animate-fade-in order-2 md:order-1">
            <div className="overflow-hidden rounded-lg shadow-xl">
              <img 
                src={cafeInterior} 
                alt="Craft Café interior with lush plants" 
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>

          {/* Text */}
          <div className="animate-fade-in order-1 md:order-2">
            <h2 className="mb-6 text-4xl font-bold text-charcoal md:text-5xl">
              Our Story
            </h2>
            <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
              <p>
                Tucked away on a sunny Da Nang street, Craft Café is a leafy sanctuary 
                where time slows down and every moment is savored.
              </p>
              <p>
                We believe in the beauty of simplicity—artisanal coffee brewed with care, 
                waffles made by hand, and a space that invites you to pause, breathe, and connect.
              </p>
              <p>
                Surrounded by cascading greenery and the gentle warmth of sunlight, 
                we've created more than a café. We've crafted a feeling.
              </p>
              <p className="font-medium text-primary">
                A place where coffee meets craft, and strangers become community.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
