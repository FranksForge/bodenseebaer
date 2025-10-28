import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Story from "@/components/Story";
import Menu from "@/components/Menu";
import Gallery from "@/components/Gallery";
import Location from "@/components/Location";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <section id="story">
        <Story />
      </section>
      <section id="menu">
        <Menu />
      </section>
      <section id="gallery">
        <Gallery />
      </section>
      <section id="location">
        <Location />
      </section>
      <Footer />
    </main>
  );
};

export default Index;
