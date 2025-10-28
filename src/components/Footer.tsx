import craftLogo from "@/assets/craft-logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-charcoal py-12 text-white/80">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-6">
          <img 
            src={craftLogo} 
            alt="Craft Café" 
            className="h-20 w-20 rounded-full object-contain"
          />
          <p className="text-center text-sm">
            Craft Café Da Nang · Crafted Coffee. Crafted Moments.
          </p>
          <p className="text-center text-xs text-white/50">
            © {new Date().getFullYear()} Craft Café. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
