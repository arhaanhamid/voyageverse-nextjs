import Link from "next/link";
import Links from "./links/Links";
import styles from "./navbar.module.css";
import { auth } from "@/lib/auth";
import Image from "next/image";

const Navbar = async () => {
  const session = await auth();
  return (
    <div className={styles.container}>
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
