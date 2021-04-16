import Layout from "../../components/layout";
import Head from "next/head";
import unfetch from "isomorphic-unfetch";
import Link from "next/link";
var slugify = require("slugify");

function CharacterDetail({ character }) {
  console.log(character);
  return (
    <Layout>
      <Head>
        <title>Detail Page</title>
      </Head>
      <h1>{character.name}</h1>
      <figure>
        <img src={character.image} alt={character.name} />
      </figure>
    </Layout>
  );
}

export async function getStaticPaths() {
  const data = await fetch("https://rickandmortyapi.com/api/character");
  const characters = await data.json();
  // Get the paths we want to pre-render based on posts
  const paths = characters.results.map((character) => {
    return { params: { slug: `${slugify(character.name)}-${character.id}` } };
  });

  return {
    paths,
    fallback: false, // See the "fallback" section below
  };
}

export async function getStaticProps({ params }) {
  console.log(params.slug);
  // data fetch

  const id = params.slug.split("-").slice(-1)[0];

  const data = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
  const character = await data.json();
  //   console.log(character);
  return {
    props: {
      character,
    }, // will be passed to the page component as props
  };
}

export default CharacterDetail;
