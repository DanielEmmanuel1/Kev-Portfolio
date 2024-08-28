import Image from "next/image";

const Footer = () => {
    return ( 
        <div className="flex justify-between p-16">
            <div>
                <p>Designed By Kelvin Duche</p>
                <p>Developed By Deon</p>
            </div>
            <div className="flex gap-2">
                <Image src="/images/TwitterX.svg" width={30} height={50} alt="Logos"/>
                <Image src="/images/Linkedin.svg" width={35} height={50} alt="Logos"/>
            </div>
        </div>
     );
}
 
export default Footer;