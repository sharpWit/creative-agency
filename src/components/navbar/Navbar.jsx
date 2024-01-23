import Links from "./links/Links";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.container}>
      <div className={styles.logo}>Logo</div>
      <div>
        <Links />
      </div>
    </nav>
  );
}
export default Navbar;
