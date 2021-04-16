import Layout from "../components/layout";
import Head from "next/head";
import Navigation from "../components/navigation";

function HomePage() {
  return (
    <Layout>
      <Head>
        <title>Main Page</title>
      </Head>
      <h1 className="title" style={{ color: "pink" }}>
        Hello World
      </h1>
      // ilave className de verilebilir ama zaten unique
      {/* <style jsx>{`
        .title {
          background-color: yellow;
        }
      `}</style> */}
      <style jsx>{`
        h1 {
          background-color: yellow;
        }
      `}</style>
      <style global jsx>{`
        body {
          background-color: cyan;
        }
      `}</style>
    </Layout>
  );
}

export default HomePage;
