import Navbar from "./nav";
import HeroSection from "./hero";
import About from "./about";
import FeaturedWork from "./feature";
import CarouselSlider from "./slider";
import Footer from "./footer";
import KevFooter from "./AboutKev/KevFooter";
export default function Home() {
  return (
    <main className="bg-[#1E1E1E]">
      <div className="p-12">
        <Navbar />
        <HeroSection />
      </div>
      <About />
      <FeaturedWork />
      <div className="pt-[10rem]">
        <CarouselSlider />
      </div>
      <KevFooter />
    </main>
  );
}
