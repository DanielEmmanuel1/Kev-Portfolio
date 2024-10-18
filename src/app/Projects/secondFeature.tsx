import Image from "next/image";

const SecondFeature = () => {
    return (
        <>
            <div className="w-full h-full">
                <div className="flex items-center justify-center"></div>
                <div className="flex flex-col rounded-[3.1rem] max-w-[75rem] mx-auto hover:shadow-[0_4px_20px_rgba(106,176,181,0.8)] cursor-pointer">
                    <div className="bg-[url('/images/peerapp.png')] bg-contain bg-no-repeat max-w-[75rem] h-[32rem] rounded-3xl"></div>
                    <div className="flex justify-between max-w-[75rem] bg-[#0f0f0f] px-12 xl:mt-[-20px] lg:mt-[-125px] rounded-b-[3rem]">
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
            </div>
        </>
    );
}

export default SecondFeature;