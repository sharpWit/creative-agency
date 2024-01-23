import styles from "./Links.module.css";
import NavLink from "./navlink/NavLink";

function Links() {
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

  //! temporary
  const session = true;
  const isAdmin = true;

  return (
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
  );
}
export default Links;
