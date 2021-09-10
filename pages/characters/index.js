import Head from "next/head";

import { getSession } from "next-auth/client";
import { getCharacters } from "../../lib/api-util";

import AllCharacters from "./../../components/characters/all-characters";

export default function AllCharactersPage(props) {
  return (
    <>
      <Head>
        <title>All Characters</title>
        <meta
          name="description"
          content="The Rick and Morty API is a REST(ish) and GraphQL API based on the television show Rick and Morty. You will have access to about hundreds of characters, images, locations and episodes. The Rick and Morty API is filled with canonical information as seen on the TV show."
        />
      </Head>
      <AllCharacters characters={props.characters} />
    </>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });

  if (!session) {
    return {
      redirect: {
        destination: "/auth",
        permanent: false,
      },
    };
  }

  const data = await getCharacters(1);
  const characters = data.results;

  return {
    props: {
      characters,
      session,
    },
  };
}
