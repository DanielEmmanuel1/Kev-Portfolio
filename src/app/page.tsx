import Navbar from "./nav";
import HeroSection from "./hero";
import About from "./about";
import FeaturedWork from "./feature";
import CarouselSlider from "./slider";
import KevFooter from "./AboutKev/KevFooter";
// pages/index.js

export default function Home() {
  return (
    <main className="bg-[#1E1E1E] min-h-screen">
      <div className="min-h-screen bg-[url('/images/hero-bg.svg')] bg-no-repeat bg-cover bg-center">
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
