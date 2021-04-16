import Link from "next/link";

function HomePage() {
  return (
    <div>
      <h1>Welcome to about page</h1>
      <Link href="/">
        <a>Ana sayfa</a>
      </Link>
    </div>
  );
}

export default HomePage;
