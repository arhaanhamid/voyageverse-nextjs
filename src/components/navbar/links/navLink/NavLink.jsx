"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ item }) => {
  const pathName = usePathname();
  const baseClasses =
    "w-[70px] lg:w-[90px] px-1 py-0.5 lg:px-2 lg:py-1 rounded-[12px] font-[14px] text-center";

  const activeClasses = "bg-white text-black font-bold";

  return (
    <Link
      href={item.path}
      className={`${baseClasses} ${
        pathName === item.path ? activeClasses : ""
      }`}
    >
      {item.title}
    </Link>
  );
};

export default NavLink;
