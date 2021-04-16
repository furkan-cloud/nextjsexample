import Link from "next/link";
import styles from "./nav.module.css";

const Navigation = () => {
  return (
    <nav>
      <Link href="/">
        <a className={styles.link}>Main Page</a>
      </Link>
      <Link href="/about">
        <a>About Us</a>
      </Link>
    </nav>
  );
};

export default Navigation;
