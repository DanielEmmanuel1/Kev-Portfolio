import Image from "next/image";

const FeaturedWork = () => {
  return (
    <div className="flex justify-center items-center min-h-screen px-4">
      <div className="w-full h-full">
        <div className="flex items-center ml-60">
          <p className="delirium text-[10rem]">Featured Work</p>
          <Image
            src="/images/myarrow.png"
            height={100}
            width={200}
            alt="arrow"
            className="rotate-[-10deg] ml-[-30px] mt-[-30px]"
          />
        </div>
        <div className="flex items-center justify-center"></div>
        <div className="flex flex-col rounded-3xl max-w-[75rem] mx-auto ">
          <div className="bg-[url('/images/honua.png')] bg-contain bg-no-repeat max-w-[75rem] h-[32rem] rounded-b-[3rem]"></div>
          <div className="flex justify-between max-w-[75rem] bg-[#181818] px-12 mt-[-6rem] rounded-b-[3rem] py-3">
            <div className="flex gap-4 items-center">
              <p className="delirium text-[50px]">HONUA</p>
              <p className="redhat bg-opacity-[50%] bg-[#6AB0B5] h-fit px-4 py-1 rounded-full">
                Product Manager
              </p>
            </div>
            <button className="bg-opacity-[20%] flex py-1 px-8 rounded-full redhat font-semibold tracking-wider my-4 items-center border-2 border-white gap-4">
              <span className="">View My Work</span>
              <Image
                src="/images/right-arrow-white.svg"
                width={40}
                height={20}
                alt="arrow"
                className="rotate-[-45deg]"
              />
            </button>
          </div>
        </div>
        <button className="bg-opacity-[20%] flex py-1 px-8 rounded-full redhat font-semibold tracking-wider my-4 items-center border-2 border-white gap-4 mx-auto">
          <span className="">View My Work</span>
          <Image
            src="/images/right-arrow-white.svg"
            width={40}
            height={20}
            alt="arrow"
            className="rotate-[-45deg]"
          />
        </button>
      </div>
    </div>
  );
};

export default FeaturedWork;
