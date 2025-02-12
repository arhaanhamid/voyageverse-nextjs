"use client";
import { useState } from "react";
import NavLink from "./navLink/NavLink";
import Image from "next/image";
import { handleLogout } from "@/lib/action";
import Link from "next/link";
import styles from "./links.module.css";

const links = [
  { title: "Home", path: "/" },
  { title: "Feed", path: "/feed" },
  { title: "About", path: "/about" },
  { title: "Contact", path: "/contact" },
];

const Links = ({ session }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative">
      {/* Desktop Links (hidden on small screens) */}
      <div className="hidden md:flex items-center gap-1 lg:gap-2 text-white">
        {links.map((link) => (
          <NavLink item={link} key={link.title} />
        ))}

        <button
          id="openButton"
          className={`mr-5 flex items-center gap-1.5 font-medium ${
            !session && "text-gray-400"
          }`}
          disabled={!session}
        >
          <span className="material-symbols-outlined">add</span>
          Create
        </button>

        {session?.user ? (
          <>
            {session.user?.isAdmin && (
              <NavLink item={{ title: "Admin", path: "/admin" }} />
            )}
            {!session.user?.isAdmin && (
              <Link href="/profile">
                <Image
                  src={session?.user.image || "/noAvatar.png"}
                  width={37}
                  height={37}
                  alt="profile"
                  className="flex self-center rounded-full"
                />
              </Link>
            )}
            <form action={handleLogout}>
              <button className="p-2 ml-2 cursor-pointer font-bold">
                Logout
              </button>
            </form>
          </>
        ) : (
          <NavLink item={{ title: "Login", path: "/login" }} />
        )}
      </div>

      {/* Mobile Menu Button (visible on small screens) */}
      <div className="md:hidden">
        <Image
          src="/menu.png"
          alt="Menu"
          width={30}
          height={30}
          className="cursor-pointer"
          onClick={() => setOpen((prev) => !prev)}
        />
      </div>

      {/* Mobile Links (visible when open on small screens) */}
      {open && (
        <div className={styles.mobileLinks}>
          {links.map((link) => (
            <NavLink item={link} key={link.title} closeSidebar={setOpen} />
          ))}
          <button
            id="openButton"
            className={`mr-5 flex items-center gap-1.5 font-medium ${
              !session && "text-gray-400"
            }`}
            disabled={!session}
            onClick={() => setOpen((prev) => !prev)}
          >
            <span className="material-symbols-outlined">add</span>
            Create
          </button>

          {session?.user ? (
            <>
              {session.user?.isAdmin && (
                <NavLink
                  item={{ title: "Admin", path: "/admin" }}
                  closeSidebar={setOpen}
                />
              )}
              {!session.user?.isAdmin && (
                <Link href="/profile">
                  <Image
                    src={session?.user.image || "/noAvatar.png"}
                    width={37}
                    height={37}
                    alt="profile"
                    className="flex self-center rounded-full"
                    onClick={() => setOpen((prev) => !prev)}
                  />
                </Link>
              )}
              <form action={handleLogout}>
                <button
                  className="p-2 ml-2 cursor-pointer font-bold"
                  onClick={() => setOpen((prev) => !prev)}
                >
                  Logout
                </button>
              </form>
            </>
          ) : (
            <NavLink
              item={{ title: "Login", path: "/login" }}
              closeSidebar={setOpen}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default Links;
