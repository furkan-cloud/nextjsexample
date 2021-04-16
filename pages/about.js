import Layout from "../components/layout";
import Navigation from "../components/navigation";
import Head from "next/head";

function HomePage() {
  return (
    <Layout>
      <Head>
        <title>About Page</title>
      </Head>
      <h1>Welcome to about page</h1>
    </Layout>
  );
}

export default HomePage;
