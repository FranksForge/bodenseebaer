import { useEffect, useRef, useState } from "react";
import { Star, Quote, Users, MessageCircle, Heart } from "lucide-react";
import reviewerMaiLinh from "@/assets/reviewer-mai-linh.jpg";
import reviewerTomWilson from "@/assets/reviewer-tom-wilson.jpg";
import reviewerLinhTran from "@/assets/reviewer-linh-tran.jpg";

const testimonials = [
  {
    name: "Mai Linh",
    handle: "@mai_danang",
    rating: 5,
    text: "CRAFT Café on Nguyễn Duy Hiệu is my favorite workspace in Đà Nẵng! Love following @craft_cafe.dn for their daily updates. Perfect coffee, perfect vibes! 🇻🇳☕",
    image: reviewerMaiLinh,
    verified: true
  },
  {
    name: "Tom Wilson",
    handle: "@tom_nomad",
    rating: 5,
    text: "Found CRAFT through their Instagram @craft_cafe.dn - best discovery in Sơn Trà! Authentic Vietnamese coffee, fast WiFi, amazing atmosphere. Digital nomad paradise! 🌏",
    image: reviewerTomWilson,
    verified: true
  },
  {
    name: "Linh Trần",
    handle: "@linh_coffee",
    rating: 5,
    text: "Quán cà phê đẹp nhất An Hải Đông! Their IG @craft_cafe.dn always shows the most aesthetic shots. DMed them for a reservation and they're so responsive! ❤️",
    image: reviewerLinhTran,
    verified: true
  }
];

const Community = () => {
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
        <div className="absolute top-32 right-32 w-40 h-40 rounded-full gradient-radial opacity-5 floating-element" />
        <div className="absolute bottom-40 left-24 w-32 h-32 rounded-full bg-secondary/5 blur-2xl floating-element-delayed" />
        <Users className="absolute top-20 left-20 h-12 w-12 text-primary/5 floating-element" />
        <MessageCircle className="absolute bottom-32 right-20 h-10 w-10 text-primary/5 floating-element-delayed" />
      </div>

      <div className="container-modern">
        {/* Section Header */}
        <div className={`mb-20 text-center animate-on-scroll fade-up ${isVisible ? 'animate-fade-in-up' : ''}`}>
          <div className="relative inline-block">
            <h2 className="mb-6 text-5xl font-bold text-charcoal md:text-6xl lg:text-7xl">
              Our <span className="text-gradient">Community</span>
            </h2>
            <div className="absolute -top-4 -right-8 text-primary/20">
              <Heart className="h-8 w-8 animate-pulse" />
            </div>
          </div>
          <p className="mx-auto max-w-3xl text-xl text-muted-foreground leading-relaxed">
            Join thousands of coffee lovers who've made Craft Café their second home
          </p>
        </div>

        <div className="grid gap-16 lg:gap-24">
          {/* Testimonials Section */}
          <div className={`animate-on-scroll fade-up ${isVisible ? 'animate-fade-in-up stagger-1' : ''}`}>
            <div className="mb-12 text-center">
              <h3 className="mb-4 text-3xl font-bold text-charcoal">
                What Our Community Says
              </h3>
              <p className="text-muted-foreground">
                Real stories from real customers who've become part of our family
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className={`glass-card rounded-2xl p-6 hover-lift animate-on-scroll scale ${isVisible ? 'animate-scale-in' : ''}`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="mb-4">
                    <Quote className="h-8 w-8 text-primary/30 mb-4" />
                    <p className="text-foreground leading-relaxed mb-4">
                      {testimonial.text}
                    </p>
                    
                    {/* Star rating */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                      ))}
                    </div>
                  </div>

                  {/* Customer info */}
                  <div className="flex items-center gap-3">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="flex items-center gap-2">
                        <p className="font-semibold text-foreground">{testimonial.name}</p>
                        {testimonial.verified && (
                          <div className="w-4 h-4 rounded-full bg-blue-500 flex items-center justify-center">
                            <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">{testimonial.handle}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
