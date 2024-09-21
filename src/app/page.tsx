import Navbar from "./nav";
import HeroSection from "./hero";
import About from "./about";
import FeaturedWork from "./feature";
import CarouselSlider from "./slider";
import Footer from "./footer";
export default function Home() {
  return (
    <main>
      <div className="h-screen p-12 bg-[#1E1E1E]">
        <Navbar />
        <HeroSection />
      </div>
      <About />
      <FeaturedWork />
      <div className="pt-[10rem]">
        <CarouselSlider />
      </div>
      <Footer />
    </main>
  );
}
