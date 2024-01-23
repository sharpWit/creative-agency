import Link from "next/link";

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
  return (
    <div>
      {links.map((link) => (
        <Link href={link.path} key={link.title}>
          {link.title}
        </Link>
      ))}
    </div>
  );
}
export default Links;
