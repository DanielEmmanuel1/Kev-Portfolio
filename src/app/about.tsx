import Image from "next/image";

const About = () => {
  return (
    <div className="bg-[#C8CDCE] text-black flex justify-between px-28 gap-28 py-16 bg-[url('/images/About.svg')] bg-cover">
      <div className="basis-[90%]">
        <div className="">
          <Image
            src="/images/right-arrow-black.svg"
            width={400}
            height={200}
            alt="blackarrow"
          />
        </div>
        <p className="text-[200px] delirium tracking-wide">ABOUT ME</p>
      </div>

      <div>
        <p className="text-[160px] delirium leading-[10rem]">
          5 YEARS EXPERIENCE
        </p>
        <p className="w-[664px] redhat text-[20px]">
          With over 5 years of experience in brand and UI design, I bring ideas
          to life through compelling visuals and intuitive interfaces. My
          passion lies in creating designs that not only look great but also
          solve real problems and enhance user experiences.
        </p>

        <div>
          <p className="delirium text-[50px]">KEY SKILLS</p>
          <div className="flex justify-between pr-16">
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
