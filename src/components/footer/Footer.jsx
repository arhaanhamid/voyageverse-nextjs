import Link from "next/link";
import styles from "./footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className="flex items-center">
        <Link href="/">
          <Image src="/logo.png" alt="logo" width={180} height={100} />
        </Link>
      </div>
      <div className={styles.text}>
        © All rights reserved under VoyageVerse.
      </div>
    </div>
  );
};

export default Footer;
