import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex justify-between">
      <div className="flex gap-3 items-center">
        <p className="text-[35px] font-medium delirium tracking-wider">DESIGN KING</p>
        <Image src="/images/crown.png" width={40} height={30} alt="" />
      </div>

      <div className="flex gap-16 items-center">
        <p className="redhat text-[20px]">About me</p>
        <p className="redhat text-[20px]">Projects</p>
        <button className="border border-white px-6 py-3 rounded-full flex items-center gap-3 redhat text-[20px]">
          {`Let's Talk`}
          <Image
            className=""
            src="/images/right-arrow-white.png"
            width={20}
            height={10}
            alt="rightarrow"
          />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
