"use client";
import Link from "next/link";
import Links from "./links/Links";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Navbar = ({ session }) => {
  const pathname = usePathname();
  return (
    <div
      className={`relative bg-gray-500 w-full h-[100%] flex items-center justify-between px-[15px] py-[15px] sm:px-[25px] md:px-[30px] lg:px-[70px] xl:px-[100px] z-10 ${
        pathname !== "/" &&
        pathname !== "/profile" &&
        "bg-[#ADB5BD] shadow-navbar-shadow"
      }`}
    >
      <span className="flex items-center min-w-[30%]">
        <Link href="/">
          <Image
            src="/logo_white.png"
            alt="logo"
            width={300}
            height={100}
            className="w-[150px] sm:w-[180px] lg:w-[210px]"
          />
        </Link>
      </span>
      <div className="flex justify-end">
        <Links session={session} />
      </div>
    </div>
  );
};

export default Navbar;
