"use client";
import Link from "next/link";
import Links from "./links/Links";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Navbar = ({ session }) => {
  const pathname = usePathname();
  return (
    <div
      className={` w-full h-[100%] flex items-center p-[15px] pl-[160px] pr-[160px] justify-between z-10 ${
        pathname !== "/" && "bg-[#ADB5BD] shadow-navbar-shadow"
      }`}
    >
      <span className="flex items-center">
        <Link href="/">
          <Image src="/logo_white.png" alt="logo" width={300} height={100} />
        </Link>
      </span>
      <div>
        <Links session={session} />
      </div>
    </div>
  );
};

export default Navbar;
