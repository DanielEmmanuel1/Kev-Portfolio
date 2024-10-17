// Navbar.js
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-6 px-16">
      <div className="flex items-center gap-2">
        <h1 className="text-2xl font-bold">DESIGN KING</h1>
        <Image src="/images/crown.png" width={24} height={24} alt="Crown" />
      </div>

      <div className="flex items-center gap-8">
        <Link href="/" className="text-sm hover:text-gray-300 transition-colors">Home</Link>
        <Link href="/AboutKev" className="text-sm hover:text-gray-300 transition-colors">About me</Link>
        <Link href="/Projects" className="text-sm hover:text-gray-300 transition-colors">Projects</Link>
        <button className="border border-white px-4 py-2 rounded-full text-sm hover:bg-white hover:text-black transition-colors flex items-center gap-2">
          Lets Talk
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;