"use client";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="relative h-[calc(100vh-80px)] overflow-hidden px-8">
      <style jsx global>{`
        @keyframes circular-motion {
          0% {
            transform: rotate(0deg) translateX(20px) rotate(0deg);
          }
          100% {
            transform: rotate(0deg) translateX(20px) rotate(360deg);
          }
        }
        .circular-animation {
          animation: circular-motion 10s linear infinite;
        }

      @keyframes spin {
          0% { transform: rotate(0deg) translateX(10px) rotate(0deg); }
          100% { transform: rotate(360deg) translateX(10px) rotate(-360deg); }
        }
      .spin-animation {
          animation: spin 3s linear infinite;
        }

        @keyframes shake {
          0% { transform: rotate(15deg); }
          25% { transform: rotate(15deg) translate(-4px, -4px); }
          50% { transform: rotate(15deg) translate(4px, 4px); }
          75% { transform: rotate(15deg) translate(-4px, 4px); }
          100% { transform: rotate(15deg) translate(4px, -4px); }
        }
        .shake-on-hover:hover {
          animation: shake 0.8s ease-in-out infinite;
        }
      `}</style>

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
        <Link href="#Footer">
          <div className="absolute bottom-8 right-[10%] z-50">
            <Image
              src="/images/scroll.png"
              height={80}
              width={150}
              alt="Scroll"
              className="circular-animation cursor-pointer"
            />
          </div>
        </Link>

        {/* Software icons */}
        <Image
          src="/images/figma.png"
          className="absolute top-[20%] left-[5%] z-40 rotate-[-15deg] shake-on-hover cursor-pointer spin-animation"
          width={100}
          height={60}
          alt="Figma"
        />
        <Image
          src="/images/photoshop.svg"
          className="absolute top-[30%] right-[10%] z-40 rotate-[15deg] shake-on-hover cursor-pointer spin-animation"
          width={100}
          height={60}
          alt="Photoshop"
        />
        <Image
          src="/images/illustrator.svg"
          className="absolute bottom-[50%] left-[20%] z-40 rotate-[15deg] shake-on-hover cursor-pointer spin-animation"
          width={100}
          height={60}
          alt="Illustrator"
        />

        {/* Skill tags */}
        <div className="absolute bottom-0 left-[5%] grid gap-2 z-0 py-6">
          {/* First row with 3 columns */}
          <div className="grid grid-cols-3 items-center gap-2">
            <span className="bg-yellow-400 text-black px-3 py-3 rounded-full text-xl tracking-widest text-center">Visual Designer</span>
            <Image src="/images/Ellipse11.svg" width={150} height={30} alt="Ellipse" />
          </div>

          {/* Second row with 2 columns */}
          <div className="flex gap-3 ml-16">
            <Image src="/images/Ellipse9.svg" width={30} height={30} alt="Ellipse" />
            <span className="bg-yellow-400 text-black px-3 py-3 rounded-full text-xl tracking-widest text-center">Product Designer</span>
          </div>

          {/* Third row with 1 column */}
          <div className="flex gap-2 ml-[-1%]">
            <span className="bg-yellow-400 text-black px-3 py-3 rounded-full text-xl tracking-widest text-center">Brand Designer</span>
            <span className="bg-gray-700 text-white px-3 py-3 rounded-full text-xl tracking-widest text-center">Illustrator</span>
            <Image src="/images/Ellipse9.svg" width={30} height={30} alt="Ellipse" />
          </div>
        </div>

      </div >
    </div >
  );
};

export default HeroSection;