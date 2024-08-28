"use client";
import Image from "next/image";
import React, { useState } from "react";

interface slide {
  image: string;
  username: string;
  role: string;
  content: string;
  socialIcon: string;
}

export const slider: slide[] = [
  {
    image: "/images/guy.png",
    username: "DeonTRM",
    role: "Banker",
    content:
      "I’ve worked with Kelvin for quite sometime and all I can say is that he is an awesome designer. I've seen him create NFT Collections with accuracy and he always provides the team with excellent work and on time. Keep up the good work!",
    socialIcon: "/images/TwitterX.svg",
  },
  {
    image: "/images/guy.png",
    username: "Lori",
    role: "Banker",
    content:
      "I’ve worked with Kelvin for quite sometime and all I can say is that he is an awesome designer. I've seen him create NFT Collections with accuracy and he always provides the team with excellent work and on time. Keep up the good work!",
    socialIcon: "/images/LinkedIn.svg",
  },
  {
    image: "/images/guy.png",
    username: "Design King👑",
    role: "Banker",
    content:
      "I’ve worked with Kelvin for quite sometime and all I can say is that he is an awesome designer. I've seen him create NFT Collections with accuracy and he always provides the team with excellent work and on time. Keep up the good work!",
    socialIcon: "/images/TwitterX.svg",
  },
  {
    image: "/images/guy.png",
    username: "Nathan",
    role: "Banker",
    content:
      "I’ve worked with Kelvin for quite sometime and all I can say is that he is an awesome designer. I've seen him create NFT Collections with accuracy and he always provides the team with excellent work and on time. Keep up the good work!",
    socialIcon: "/images/LinkedIn.svg",
  },
  {
    image: "/images/guy.png",
    username: "KDot",
    role: "Banker",
    content:
      "I’ve worked with Kelvin for quite sometime and all I can say is that he is an awesome designer. I've seen him create NFT Collections with accuracy and he always provides the team with excellent work and on time. Keep up the good work!",
    socialIcon: "/images/LinkedIn.svg",
  },
];

const CarouselSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slider.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slider.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div>
      <div className="relative">
        <p className="text-[200px] text-center delirium">RECOMMENDATIONS</p>
        <Image
          src="/images/icon.svg"
          className="top-14 absolute right-[27.5rem]"
          height={60}
          width={23}
          alt="stuff"
        />
        <Image
          src="/images/icon.svg"
          className="bottom-[4rem] absolute left-[27.5rem] rotate-[180deg]"
          height={60}
          width={23}
          alt="stuff"
        />
      </div>
      <div className="relative">
        <div className="relative w-full max-w-[850px] h-[550px] mx-auto bg-[#0B0B0B] border-4 border-[#B0B300] rounded-[3rem]">
          <div className="overflow-hidden h-full flex p-8 relative">
            <div className="absolute top-0 flex flex-col items-start left-[4.5rem] max-w-[35rem] mt-14 h-fit">
              <div className="flex items-center p-4 mb-10">
                <Image
                  src={slider[currentIndex].image}
                  height={150}
                  width={80}
                  alt={`Image of ${slider[currentIndex].username}`}
                  className="mb-4 object-cover rounded-full"
                />
                <div className="ml-4">
                  <h2 className="text-xl font-semibold mb-2 text-white text-left text-[40px]">
                    {slider[currentIndex].username}
                  </h2>
                  <p className="text-white mb-4 text-left text-[16px]">
                    {slider[currentIndex].role}
                  </p>
                </div>
              </div>
              <p className="text-white text-[20px] redhat mb-4 text-left">
                {slider[currentIndex].content}
              </p>
            </div>
          </div>

          <img
            src={slider[currentIndex].socialIcon}
            alt={`${slider[currentIndex].username}'s social icon`}
            className="w-8 h-8 bg-[#0B0B0B] rounded-lg px-2 py-1 absolute bottom-8 right-24"
          />
        </div>

        <button
          onClick={handlePrevClick}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#1e1e1e] bg-opacity-70 h-[424px] text-white px-3 py-1 rounded-tr-[3rem] rounded-br-[3rem] w-[300px] border-t-2 border-r-2 border-b-2 border-y-[#6AB0B5] border-r-[#6AB0B5] border-l-none shadow-2xl shadow-[#6AB0B5]/80"
        >
          <Image
            src="/images/Group.svg"
            width={100}
            height={40}
            alt="arrow"
            className="rotate-[180deg] mx-auto"
          />
        </button>

        <button
          onClick={handleNextClick}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#1e1e1e] bg-opacity-70 h-[424px] text-white px-3 py-1 rounded-l-[3rem] w-[300px] border-t-2 border-l-2 border-b-2 border-y-[#6AB0B5] border-l-[#6AB0B5] border-r-none shadow-2xl shadow-[#6AB0B5]/80"
        >
          <Image
            src="/images/Group.svg"
            width={100}
            height={40}
            alt="arrow"
            className=" mx-auto"
          />
        </button>
      </div>

      <button className="flex items-center px-8 py-4 rounded-full border-2 border-white my-28 mx-auto">
      <span className="text-[70px] redhat">Contact Me</span>
      <Image src="/images/right-arrow-white.svg" width={100} height={100} alt="image" className="rotate-[-45deg]"/>
      </button>
    </div>
  );
};

export default CarouselSlider;
