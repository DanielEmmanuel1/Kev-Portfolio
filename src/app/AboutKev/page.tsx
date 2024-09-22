import Footer from "../../app/AboutKev/Footer";
import Navbar from "../nav";
import Image from "next/image";

const AboutKev = () => {
  return (
      <main className="flex flex-col min-h-screen px-12 pt-12 bg-[#1e1e1e]">
        <Navbar />

      {/* Page Content */}
      <div className="flex-grow">
        <div className="flex justify-between items-center h-screen">
          {/* Left Side Content */}
          <div className="flex flex-col px-12">
            <div className="relative px-4">
              <p className="delirium font-medium text-[200px]">ABOUT ME</p>
              <Image
                src="/images/icon.svg"
                className="absolute top-[3rem] left-[25.5rem]"
                height={60}
                width={23}
                alt="stuff"
              />
              <Image
                src="/images/icon.svg"
                className="absolute top-[13.5rem] left-[0rem] rotate-[180deg]"
                height={60}
                width={23}
                alt="stuff"
              />
            </div>
            {/* Profile Image Section */}
            <div>
              <div className="flex gap-16 my-auto">
                <div className="bg-[#6ab0b5] w-fit rounded-t-full relative bottom-[4rem] left-[-2rem]">
                  <Image
                    src="/images/kevimage.png"
                    width={530}
                    height={100}
                    alt="kev"
                    className="relative z-50"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Right Side Content */}
          <div className="w-[65%] leading-loose tracking-wide">
            <p className="text-[26px] font-light redhat">
              Welcome to my portfolio! I&apos;m Duche Kelvin, a freelance Visual
              Designer/UI designer with over 5 years of experience in the
              industry. I specialize in crafting captivating visuals for a
              diverse spectrum of products, including magazines, flyers, book
              covers, brochures, logos, custom visual designs, and UI design.
              My work is characterized by a fusion of creativity, meticulous
              attention to detail, and a deep understanding of the technical
              aspects of design.
            </p>
          </div>
        </div>

        {/* MY JOURNEY Section */}
        <div>
          <p className="delirium font-medium text-[2rem] tracking-wide bg-[#fbff0077] w-fit px-6 rounded-full mb-10">
            MY JOURNEY
          </p>
          <p className="w-[80%] leading-[3rem] tracking-wider text-[26px] font-light redhat">
            I hold a degree in Computer Science from the esteemed University of
            Nigeria Nsukka. This unique blend of technical knowledge and
            creative prowess sets me apart in the world of design. Over the
            years, I have honed my skills and delivered high-quality results in
            various roles at AlphaBlocks, GDSC UNN, GDG Enugu, Yorochitv
            Facebook Community, BAMBA Global, Vinpay, and as a co-founder
            building PeerProtocol.
          </p>
        </div>

        {/* DESIGN PHILOSOPHY Section */}
        <div className="mt-32">
          <p className="delirium font-medium text-[2rem] tracking-wide bg-[#6ab0b597] w-fit px-6 rounded-full mb-10">
            DESIGN PHILOSOPHY
          </p>
          <p className="w-[80%] leading-[3rem] tracking-wider text-[26px] font-light redhat">
            My design philosophy centers on the belief that exceptional design
            should not only be visually appealing but also serve as a powerful
            means of conveying the intended message and purpose effectively. I
            am committed to staying at the forefront of the design industry,
            continuously adapting to emerging trends, tools, and techniques.
            This dedication ensures that I consistently deliver cutting-edge
            designs that meet and exceed client expectations.
          </p>
        </div>

        {/* IM AVAILABLE FOR Section */}
        <div className="mt-32">
          <div className="flex items-center gap-3">
            <Image
              src="/images/rect.png"
              height={30}
              width={15}
              alt="icon"
              className="mb-8"
            />
            <p className="delirium font-medium text-[2rem] tracking-widest">
              I&apos;M AVAILABLE FOR
            </p>
          </div>
          <p className="w-[80%] leading-[3rem] tracking-wider text-[26px] font-light redhat">
            My design philosophy centers on the belief that exceptional design
            should not only be visually appealing but also serve as a powerful
            means of conveying the intended message and purpose effectively.
            I’m committed to staying at the forefront of the design industry,
            continuously adapting to emerging trends, tools, and techniques.
          </p>
        </div>

        {/* CERTIFICATIONS Section */}
        <p className="delirium font-medium text-[200px] text-center mt-[10rem]">
          CERTIFICATIONS
        </p>

        {/* Certifications */}
        <div className="flex justify-between items-center">
          <div className="flex gap-8 items-center">
            <Image
              src="/images/udemy.png"
              width={80}
              height={50}
              alt="udemyLogo"
            />
            <div>
              <p className="text-[50px] delirium font-medium">
                Learning Graphic Design: Things Every Designer Should Know
              </p>
              <p>Udemy</p>
            </div>
          </div>
          <div>
            <button className="flex items-center redhat text-[15px] px-4 gap-3 py-1 bg-[#01ff276f] border-2 border-[#17b92f] rounded-full">
              Show Credentials
              <Image
                src="/images/arrrow.svg"
                alt="Arrow"
                width={30}
                height={30}
              />
            </button>
          </div>
        </div>

        <hr className="custom-hr my-12" />

        <div className="flex justify-between items-center">
          <div className="flex gap-8 items-center">
            <Image
              src="/images/link.png"
              width={80}
              height={50}
              alt="udemyLogo"
            />
            <div>
              <p className="text-[50px] delirium font-medium">
                Learning Graphic Design: Things Every Designer Should Know
              </p>
              <p>LinkedIn</p>
            </div>
          </div>
          <div>
            <button className="flex items-center redhat text-[15px] px-4 gap-3 py-1 bg-[#01ff276f] border-2 border-[#17b92f] rounded-full">
              Show Credentials
              <Image
                src="/images/arrrow.svg"
                alt="Arrow"
                width={30}
                height={30}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
};

export default AboutKev;