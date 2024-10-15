import Image from "next/image";
import Head from "next/head";

const About = () => {
  return (
    <div className="bg-[#C8CDCE] flex items-center text-black py-16">
      <div className="basis-[90%]">
        <div className="">
          <Image
            src="/images/right-arrow-black.svg"
            width={500}
            height={200}
            alt="blackarrow"
            className="xl:w-[500px] lg:w-[300px]"
          />
        </div>
        <p className="xl:text-[200px] lg:text-[100px] delirium tracking-wide pl-20">ABOUT ME</p>
      </div>

      <div>
        <p className="xl:text-[160px] lg:text-[100px] delirium leading-[10rem]">
          5 YEARS EXPERIENCE
        </p>
        <p className="xl:w-[664px] redhat xl:text-[20px] lg:text-[15px]">
          With over 5 years of experience in brand and UI design, I bring ideas
          to life through compelling visuals and intuitive interfaces. My
          passion lies in creating designs that not only look great but also
          solve real problems and enhance user experiences.
        </p>

        <div>
          <p className="delirium text-[50px]">KEY SKILLS</p>
          <div className="flex gap-8">
            <div>
              <div className="flex items-center gap-2 border-b border-gray-500 pr-24 py-4">
                <div className="w-3 h-3 bg-[#6AB0B5] rounded-full"></div>
                <p className="redhat">Brand Design</p>
              </div>

              <div className="flex items-center gap-2 border-b border-gray-500 pr-24 py-4">
                <div className="w-3 h-3 bg-[#6AB0B5] rounded-full"></div>
                <p className="redhat">Visual Design</p>
              </div>

              <div className="flex items-center gap-2 py-4">
                <div className="w-3 h-3 bg-[#6AB0B5] rounded-full"></div>
                <p className="redhat">UI Design</p>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2 border-b border-gray-500 pr-24 py-4">
                <div className="w-3 h-3 bg-[#6AB0B5] rounded-full"></div>
                <p className="redhat">Collaboration</p>
              </div>
              <div className="flex items-center gap-2 border-b border-gray-500 pr-24 py-4">
                <div className="w-3 h-3 bg-[#6AB0B5] rounded-full"></div>
                <p className="redhat">Fast Learning</p>
              </div>
              <div className="flex items-center gap-2 py-4">
                <div className="w-3 h-3 bg-[#6AB0B5] rounded-full"></div>
                <p className="redhat">Communication</p>
              </div>
            </div>
          </div>
        </div>
        <button className="bg-[#000000] bg-opacity-[20%] flex py-1 px-8 rounded-full redhat font-semibold tracking-wider border-2 border-black my-4 items-center">
          <span className="text-black">View My Work</span>
          <Image
            src="/images/right-arrow-white.svg"
            width={40}
            height={20}
            alt="arrow"
          />
        </button>
      </div>
    </div>
  );
};

export default About;
