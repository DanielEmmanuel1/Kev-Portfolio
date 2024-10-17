import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="relative h-[calc(100vh-80px)] overflow-hidden px-8">
      <div className="absolute inset-0 flex flex-col justify-center items-center">
        {/* Blue background */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-10 
                        rounded-t-full bg-[#6ab0b5] w-1/2 aspect-[4/3]">
        </div>

        {/* Hero title */}
        <p className="xl:text-[28rem] lg:text-[15rem] delirium font-medium tracking-[2rem] text-center z-20 mt-[-15%] relative">
          KELVIN DUCHE
        </p>

        {/* Tagline */}
        <div className="absolute top-4 right-16 border border-white rounded-full px-4 py-2 text-sm z-50">
          DESIGNING THE FUTURE
        </div>

        {/* Kelvin image */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-30 w-1/2">
          <Image
            src="/images/kevimage.png"
            width={800}
            height={800}
            alt="Kelvin Duche"
            className="w-full h-auto relative"
          />
        </div>

        {/* Scroll icon */}
        <div className="absolute bottom-8 right-[10%] z-50">
          <Image
            src="/images/scroll.png"
            height={80}
            width={150}
            alt="Scroll"
            className="animate-slow-spin"
          />
        </div>

        {/* Software icons */}
        <Image src="/images/figma.png" className="absolute top-[10%] left-[10%] z-40 rotate-[-15deg]" width={100} height={60} alt="Figma" />
        <Image src="/images/photoshop.svg" className="absolute top-[20%] right-[15%] z-40 rotate-[15deg]" width={100} height={60} alt="Photoshop" />
        <Image src="/images/illustrator.svg" className="absolute bottom-[50%] left-[20%] z-40 rotate-[15deg]" width={100} height={60} alt="Illustrator" />

        {/* Skill tags */}
        <div className="absolute bottom-40 left-16 flex flex-col gap-2 z-50">
          <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm">Visual Designer</span>
          <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm">Product Designer</span>
          <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm">Brand Designer</span>
          <span className="bg-gray-700 text-white px-3 py-1 rounded-full text-sm">Illustrator</span>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;