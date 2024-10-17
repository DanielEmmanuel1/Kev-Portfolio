import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div>
      <div className="relative mt-[-5%]">
        {/* Kelvin Duche text with high z-index */}
        <div className="xl:text-[28rem] lg:text-[15rem] delirium font-medium tracking-[1.975rem] text-center relative z-30">
          KELVIN DUCHE
          <div className="flex items-end pl-36 py-12 cursor-pointer absolute xl:right-[15%] xl:top-[80%] lg:right-[10%] lg:top-[130%]">
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
        </div>


        <div>
          {/* Blue background (lower z-index than text) */}
          <div className="absolute xl:h-[80%] lg:h-[100%] rounded-t-full left-1/2 transform -translate-x-1/2  z-10 bg-[#6ab0b5] xl:top-[4.5%] lg:top-[74.5%] md:w-[50%]">
            {/* This is the blue background */}
          </div>

          {/* Kev Image with the highest z-index */}
          <div className="absolute left-1/2 transform -translate-x-1/2 z-50 xl:top-[12.5%] lg:top-[74.5%]">
            <Image
              src="/images/kevimage.png"
              width={620}
              height={100}
              alt="kev"
              className="xl:w-[620px] lg:w-[500px]"
            />
          </div>
        </div>

        {/* Designing the Future text */}
        <p className="border border-white rounded-full text-sm w-fit px-6 py-3 absolute top-[1.5rem] lg:right-[5%] xl:right-[5%] xl:top-[5rem] z-20">
          DESIGNING THE FUTURE
        </p>

        {/* Additional images */}
        <div>
          <Image
            src="/images/figma.png"
            className="absolute top-[20%] left-[10%] z-40"
            height={150}
            width={120}
            alt="figma"
          />
          <Image
            src="/images/photoshop.svg"
            className="absolute right-[32%] bottom-[30%] z-40"
            height={150}
            width={120}
            alt="photoshop"
          />
          <Image
            src="/images/illustrator.svg"
            className="absolute right-[15%] top-[20%] z-40"
            height={150}
            width={120}
            alt="illustrator"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
