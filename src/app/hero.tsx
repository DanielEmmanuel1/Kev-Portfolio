import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div>
      <div className="relative">
        {/* Kelvin Duche text with high z-index */}
        <div className="text-[15rem] delirium font-medium tracking-[1rem] text-center relative z-30">
          KELVIN DUCHE
          <div className="flex items-end pl-36 py-12 cursor-pointer absolute right-[15%] top-[70%]">
            <Link href="#Footer" className="cursor-pointer">
              <Image
                src="/images/scroll.png"
                height={150}
                width={100}
                alt="scroll"
                className="animate-slow-spin cursor-pointer"
              />
            </Link>
          </div>

          {/* stones */}
          {/* <div className="absolute left-[5%] top-[80%]">
            <div className="flex gap-1 py-1">
              <p className=" py-2 rounded-full text-lg bg-[#f3f467] text-black tracking-normal redhat px-4">
                Visual Design
              </p>
              <div className="w-[200px] max-h-[50px] rounded-[90%] bg-white"></div>
            </div>
            <div className="flex py-1">
              <div className="bg-white rounded-full"></div>
              <p className="py-2 rounded-full bg-[#f9fbaa] text-black text-2xl redhat tracking-normal px-28">
                Product Design
              </p>
            </div>
            <div className="flex gap-1 py-1">
              <p className="py-2 rounded-full bg-[#fcff00] text-black text-3xl redhat tracking-normal px-4">
                Brand Designer
              </p>
              <div>
                <p className="py-2 rounded-full bg-[#b0b300] text-black text-3xl redhat tracking-normal px-4">
                  Illustrator
                </p>
              </div>
              <div className=" bg-white rounded-full"></div>
            </div>
          </div> */}
        </div>

        {/* Blue background (lower z-index than text) */}
        <div className="absolute w-[40%] h-[78%] rounded-t-full left-1/2 transform -translate-x-1/2 top-[35%] z-10 bg-[#6ab0b5]">
          {/* This is the blue background */}
        </div>

        {/* Kev Image with the highest z-index */}
        <div className="absolute left-1/2 transform -translate-x-1/2 top-[35%] z-50">
          <Image
            src="/images/kevimage.png"
            width={359.5}
            height={100}
            alt="kev"
            className="relative"
          />
        </div>

        {/* Designing the Future text */}
        <p className="border border-white rounded-full text-sm w-fit px-6 py-3 absolute top-[1.5rem] right-[4rem] z-20">
          DESIGNING THE FUTURE
        </p>

        {/* Additional images */}
        <div>
          <Image
            src="/images/figma.png"
            className="absolute top-[20%] left-[8%] z-40"
            height={150}
            width={80}
            alt="figma"
          />
          <Image
            src="/images/photoshop.svg"
            className="absolute right-[32%] bottom-[30%] z-40"
            height={150}
            width={80}
            alt="photoshop"
          />
          <Image
            src="/images/illustrator.svg"
            className="absolute right-[12%] top-[20%] z-40"
            height={150}
            width={80}
            alt="illustrator"
          />
        </div>
      </div>
      {/* <Link href="#Footer" className="cursor-pointer">
          <Image
            src="/images/scroll.png"
            height={150}
            width={150}
            alt="scroll"
            className="animate-slow-spin cursor-pointer"
          />
        </Link> */}
    </div>
  );
};

export default HeroSection;
