import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <div
      className="
        h-[60px] lg:h-[80px]
        flex items-center justify-between
        text-black
        shadow-[0px_-10px_10px_-10px_rgba(0,0,0,0.95)]
        px-2 md:px-10 
        bg-[#ADB5BD]
      "
    >
      <div className="flex items-center">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="logo"
            width={120}
            height={100}
            className="md:w-[160px] lg:w-[180px]"
          />
        </Link>
      </div>
      <div className="text-[10px] md:text-[12px] lg:text-[14px]">
        © All rights reserved under VoyageVerse.
      </div>
    </div>
  );
};

export default Footer;
