"use client";

import { useState } from "react";
import styles from "./links.module.css";
import NavLink from "./navLink/NavLink";
import Image from "next/image";
import { handleLogout } from "@/lib/action";
import Link from "next/link";

const links = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Feed",
    path: "/feed",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },
];

const Links = ({ session }) => {
  const [open, setOpen] = useState(false);

  function handlePopUp() {}

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link) => (
          <NavLink item={link} key={link.title} />
        ))}
        {session?.user ? (
          <>
            {session.user?.isAdmin && (
              <NavLink item={{ title: "Admin", path: "/admin" }} />
            )}

            {!session.user?.isAdmin && (
              <button
                className="mr-5 flex justify-center items-center gap-1.5 font-medium"
                onClick={handlePopUp}
              >
                <span className="material-symbols-outlined">add</span>
                Create
              </button>
            )}

            {!session.user?.isAdmin && (
              <Link href="/profile">
                <Image
                  src={session?.user.image || "/noAvatar.png"}
                  width={37}
                  height={37}
                  className={styles.avatar}
                  alt="profile"
                />
              </Link>
            )}

            <form action={handleLogout}>
              <button className={styles.logout}>Logout</button>
            </form>
          </>
        ) : (
          <NavLink item={{ title: "Login", path: "/login" }} />
        )}
      </div>
      <Image
        className={styles.menuButton}
        src="/menu.png"
        alt=""
        width={30}
        height={30}
        onClick={() => setOpen((prev) => !prev)}
      />
      {open && (
        <div className={styles.mobileLinks}>
          {links.map((link) => (
            <NavLink item={link} key={link.title} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Links;
