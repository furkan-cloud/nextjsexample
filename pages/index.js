import Layout from "../components/layout";
import Head from "next/head";
import Navigation from "../components/navigation";
import unfetch from "isomorphic-unfetch";
import Link from "next/link";
var slugify = require("slugify");

function HomePage({ character }) {
  return (
    <Layout>
      <Head>
        <title>Main Page</title>
      </Head>
      <h1 className="title" style={{ color: "pink" }}>
        Hello World
      </h1>
      {/* ilave className de verilebilir ama zaten unique */}
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
      <ul>
        {character?.results.map((character) => (
          <li key={character.id}>
            <Link
              href="/character/[slug]"
              as={`/character/${slugify(character.name)}-${character.id}`}
            >
              <a>{character.name}</a>
            </Link>
          </li>
        ))}
      </ul>

      <style global jsx>{`
        body {
          background-color: cyan;
        }
      `}</style>
    </Layout>
  );
}

export async function getStaticProps(context) {
  // data fetch
  const data = await fetch("https://rickandmortyapi.com/api/character");
  const character = await data.json();
  // console.log(character);
  return {
    props: {
      character,
    }, // will be passed to the page component as props
  };
}

export default HomePage;
