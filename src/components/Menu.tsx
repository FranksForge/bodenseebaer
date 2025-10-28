import latteArt from "@/assets/latte-art.jpg";
import waffleBerries from "@/assets/waffle-berries.jpg";
import vietnameseCoffee from "@/assets/vietnamese-coffee.jpg";

const menuItems = [
  {
    name: "Artisan Latte",
    description: "Smooth espresso with perfectly steamed milk and delicate latte art",
    image: latteArt,
  },
  {
    name: "Signature Waffles",
    description: "Belgian-style waffles topped with fresh berries and maple syrup",
    image: waffleBerries,
  },
  {
    name: "Vietnamese Iced Coffee",
    description: "Bold robusta coffee with sweetened condensed milk over ice",
    image: vietnameseCoffee,
  },
];

const Menu = () => {
  return (
    <section className="bg-muted py-24 md:py-32">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-charcoal md:text-5xl">
            Signature Menu
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Every drink, every dish—crafted with intention and served with care
          </p>
        </div>

        {/* Menu grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {menuItems.map((item, index) => (
            <div 
              key={item.name}
              className="group animate-fade-in hover-lift overflow-hidden rounded-xl bg-card shadow-md"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-square overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-2xl font-semibold text-charcoal">
                  {item.name}
                </h3>
                <p className="text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
