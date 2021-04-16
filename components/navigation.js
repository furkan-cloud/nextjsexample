import Link from "next/link";

const Navigation = () => {
  return (
    <nav>
      <Link href="/">
        <a>Main Page</a>
      </Link>
      <Link href="/about">
        <a>About Us</a>
      </Link>
    </nav>
  );
};

export default Navigation;
