"use client";
import Link from "next/link";
import Links from "./links/Links";
import styles from "./navbar.module.css";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Navbar = ({ session }) => {
  const pathname = usePathname();
  return (
    <div
      className={`${
        styles.container
      } w-full h-[100%] flex items-center p-[15px] pl-[160px] pr-[160px] justify-between z-10 ${
        pathname !== "/" && "bg-[#ADB5BD] shadow-navbar-shadow"
      }`}
    >
      <span className={styles.logo}>
        <Link href="/">
          <Image
            className={styles.logo_icon}
            src="/logo.png"
            alt="logo"
            width={100}
            height={100}
          />
        </Link>
        <p className={styles.logo_text}>VoyageVerse</p>
      </span>
      <div>
        <Links session={session} />
      </div>
    </div>
  );
};

export default Navbar;
