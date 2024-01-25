"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

import styles from "./Links.module.css";
import NavLink from "./navlink/NavLink";

//! temporary
const session = true;
const isAdmin = true;

// ? NavLinks
const links = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About me",
    path: "/about",
  },
  {
    title: "Contact me",
    path: "/contact",
  },
  {
    title: "Blog",
    path: "/blog",
  },
];

function Links() {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link) => (
          <NavLink item={link} key={link.title} />
        ))}
        {session ? (
          <>
            {isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }} />}
            <button className={styles.logout}>Logout</button>
          </>
        ) : (
          <NavLink item={{ title: "Login", path: "/login" }} />
        )}
      </div>

      <button
        className={styles.menuButton}
        onClick={() => setOpen((prev) => !prev)}
      >
        {open ? <X /> : <Menu />}
      </button>
      {open && (
        <div className={styles.mobileLinks}>
          {links.map((link) => (
            <NavLink item={link} key={link.title} />
          ))}
        </div>
      )}
    </div>
  );
}
export default Links;
