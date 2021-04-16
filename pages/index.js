import Layout from "../components/layout";
import Head from "next/head";
import Navigation from "../components/navigation";

function HomePage() {
  return (
    <Layout>
      <Head>
        <title>Main Page</title>
      </Head>
      <h1>Hello World</h1>
    </Layout>
  );
}

export default HomePage;
