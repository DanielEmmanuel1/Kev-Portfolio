import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="relative">
      <div className="relative">
        <p className="border border-white rounded-full w-fit px-6 py-4 absolute right-28 top-20">
          DESIGNING THE FUTURE
        </p>

        <div className="flex justify-center items-center w-full relative">
          <span className="text-[450px] delirium font-medium tracking-[1rem] z-10">
            KELVIN DUCHE
          </span>
          <div>
            <Image src="/images/figma.png" className="absolute top-[20%] left-[5%] z-50" height={150} width={120} alt="figma" />
            <Image src="/images/photoshop.svg" className="absolute right-[39%] bottom-[30%] z-50" height={150} width={120} alt="figma" />
            <Image src="/images/illustrator.svg" className="absolute right-[10%] bottom-[60%] z-50" height={150} width={120} alt="figma" />
          </div>
        </div>
      </div>

      <div className="flex justify-center absolute top-[20rem] w-full">
        <div className="flex justify-between w-full relative left-10">
          <div className="flex items-end basis-[90%] relative">
            <div className="max-w-fit z-0 relative left-10">
              <div className="flex gap-1 py-1">
                <p className=" py-2 px-4 rounded-full text-2xl bg-[#f3f467] text-black w-fit tracking-wide">
                  Visual Design
                </p>
                <div className="w-[200px] max-h-[50px] rounded-[90%] bg-white"></div>
              </div>
              <div className="flex py-1">
                <div className="w-[50px] bg-white rounded-full ml-20"></div>
                <p className="py-2 rounded-full bg-[#f9fbaa] text-black w-fit text-2xl px-8">
                  Product Design
                </p>
              </div>
              <div className="flex gap-1 py-1">
                <p className="px-4 py-2 rounded-full bg-[#fcff00] text-black w-fit text-2xl">
                  Brand Designer
                </p>
                <div>
                  <p className="px-8 py-2 rounded-full bg-[#b0b300] text-black w-fit text-2xl">
                    Illustrator
                  </p>
                </div>
                <div className="w-[50px] bg-white rounded-full"></div>
              </div>
            </div>
            <div className="bg-[#6ab0b5] w-fit rounded-t-full relative left-4 bottom-[0.18rem]">
              <Image
                src="/images/kevimage.png"
                width={578}
                height={100}
                alt="kev"
                className="relative z-50"
              />
            </div>

            <div className="flex items-end pl-36 py-12 cursor-pointer">
              <Link href="#Footer" className="cursor-pointer">
                <Image
                  src="/images/scroll.png"
                  height={150}
                  width={150}
                  alt="scroll"
                  className="animate-slow-spin cursor-pointer"
                />
              </Link>

            </div>


          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
