import Image from "next/image";

const Footer = () => {
    return (
        <footer className="bg-[#ffffff11] rounded-t-full mx-32 pt-28 pb-10 mt-64">
            <div>
                <p className="text-[200px] delirium font-medium text-center">
                    LET&apos;S CONNECT
                </p>
                <p className="text-center mx-auto w-[50%] leading-loose mt-[-4rem]">
                    Feel free to connect with me or reach out for collaboration
                    opportunities. Let&apos;s turn your ideas into visual masterpieces!
                </p>

                <button className="flex items-center px-8 py-4 rounded-full border-2 border-white my-10 mx-auto">
                    <span className="text-[70px] redhat">Contact Me</span>
                    <Image
                        src="/images/right-arrow-white.svg"
                        width={100}
                        height={100}
                        alt="image"
                        className="rotate-[-45deg]"
                    />
                </button>
            </div>

            <div className="flex mx-20 justify-between">
                <div>
                    <p className="text-[#ffffff57]">{`Copyright(cc) Kelvin Duche`}</p>
                    <p className="text-[#ffffff57]">All Right Reserved.</p>
                </div>
                <div className="flex">
                    <Image src="/images/TTwitter.svg" width={30} height={30} alt="Linkedin" />
                    <Image src="/images/LLinkedIn.svg" width={30} height={30} alt="Linkedin" />
                </div>
            </div>
        </footer>
    );
};

export default Footer;