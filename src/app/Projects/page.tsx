import Navbar from "@/app/nav";
// import Footer from "../AboutKev/Footer";
import Image from "next/image";
import NewFeature from "./newFeature";
import Footer from "../AboutKev/KevFooter";
import SecondFeature from "./secondFeature";
const Projects = () => {
    return (
        <>
            <main className="bg-[#1e1e1e]">
                <div className="">
                    <Navbar />
                </div>
                <div className="pt-20">
                    <div className="flex justify-center">
                        <div className="text-[200px] delirium relative">
                            <p>PROJECTS</p>

                            <Image
                                src="/images/icon.svg"
                                className="absolute top-[17%] right-[-1rem]"
                                height={80}
                                width={30}
                                alt="stuff"
                            />
                            <Image
                                src="/images/icon.svg"
                                className="absolute rotate-[180deg] left-[-1rem] bottom-[20%]"
                                height={80}
                                width={30}
                                alt="stuff"
                            />
                        </div>

                    </div>
                    <div className="flex flex-col gap-20 px-12">
                        <NewFeature />
                        <SecondFeature />
                    </div>
                </div>
                <Footer />
            </main>

        </>
    );
}

export default Projects;