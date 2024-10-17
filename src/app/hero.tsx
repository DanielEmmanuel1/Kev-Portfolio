import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div>
      <div>
        <div className="relative">
          <div className="mt-[-5%]">
            <p className="xl:text-[28rem] lg:text-[15rem] delirium font-medium tracking-[1rem] text-center z-30">
              KELVIN DUCHE
            </p>
            <p className="border border-white rounded-full text-sm w-fit px-6 py-3 absolute top-[1.5rem] lg:right-[5%] xl:top-[15%] xl:right-[7%] z-20">
              DESIGNING THE FUTURE
            </p>
          </div>
          <div className="absolute left-1/2 transform -translate-x-1/2 z-50 xl:top-[18%] lg:top-[74.5%]">
            <Image
              src="/images/kevimage.png"
              width={620}
              height={100}
              alt="Kelvin Duche"
              className="xl:w-[620px] lg:w-[500px]"
            />
          </div>
          <div className="absolute xl:h-[70%] lg:h-[100%] rounded-t-full left-1/2 transform -translate-x-1/2 z-10 bg-[#6ab0b5] xl:top-[20%] lg:top-[74.5%] md:w-[50%]">
            {/* Blue background */}
          </div>
        </div>
        <div className="flex items-end pl-36 py-12 cursor-pointer absolute xl:right-[15%] xl:top-[70%] lg:right-[10%] lg:top-[130%]">
          <Link href="#Footer">
            <Image
              src="/images/scroll.png"
              height={150}
              width={150}
              alt="Scroll"
              className="animate-slow-spin"
            />
          </Link>
        </div>
        <div>
          {/* Kev Image with the highest z-index */}
        </div>
        <div>
          <Image
            src="/images/figma.png"
            className="absolute top-[20%] left-[10%] z-40"
            height={150}
            width={120}
            alt="Figma"
          />
          <Image
            src="/images/photoshop.svg"
            className="absolute right-[20%] bottom-[30%] z-40"
            height={150}
            width={120}
            alt="Photoshop"
          />
          <Image
            src="/images/illustrator.svg"
            className="absolute right-[15%] top-[30%] z-40"
            height={150}
            width={120}
            alt="Illustrator"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
