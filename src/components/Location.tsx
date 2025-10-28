import { MapPin, Clock, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const Location = () => {
  return (
    <section className="bg-muted py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          {/* Map */}
          <div className="animate-fade-in overflow-hidden rounded-xl shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3833.840482374598!2d108.20778931533205!3d16.070510388889946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314219c792252a43%3A0x1df0cb4b86727e06!2sDa%20Nang%2C%20Vietnam!5e0!3m2!1sen!2s!4v1234567890123"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Craft Café Location"
            />
          </div>

          {/* Info */}
          <div className="animate-fade-in flex flex-col justify-center space-y-8">
            <div>
              <h2 className="mb-6 text-4xl font-bold text-charcoal md:text-5xl">
                Visit Us
              </h2>
              <p className="text-lg text-muted-foreground">
                Find us nestled in the heart of Da Nang, where every visit feels like coming home.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 flex-shrink-0 text-primary" />
                <div>
                  <h3 className="mb-1 font-semibold text-charcoal">Address</h3>
                  <p className="text-muted-foreground">
                    123 Leafy Lane, Hải Châu District<br />
                    Da Nang, Vietnam
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="h-6 w-6 flex-shrink-0 text-primary" />
                <div>
                  <h3 className="mb-1 font-semibold text-charcoal">Hours</h3>
                  <p className="text-muted-foreground">
                    Monday – Friday: 7:00 AM – 8:00 PM<br />
                    Saturday – Sunday: 8:00 AM – 9:00 PM
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-primary/20 bg-background p-6">
              <div className="mb-4 flex items-center gap-3">
                <Instagram className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold text-charcoal">Stay Connected</h3>
              </div>
              <p className="mb-4 text-muted-foreground">
                Follow our journey on Instagram—where coffee meets craft
              </p>
              <Button 
                variant="default"
                className="bg-primary text-primary-foreground hover:bg-primary/90"
                asChild
              >
                <a 
                  href="https://instagram.com/craftcafe_danang" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Follow Us
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
