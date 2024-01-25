import Link from "next/link";

import Links from "./links/Links";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.container}>
      <Link href="/" className={styles.logo}>
        Logo
      </Link>
      <div>
        <Links />
      </div>
    </nav>
  );
}
export default Navbar;
