import Head from "next/head";

import { getSession } from "next-auth/client";
import { getCharacterById } from "../../lib/api-util";

import AllCharacters from "./../../components/characters/all-characters";
import { useRouter } from "next/dist/client/router";
import CharacterItem from "../../components/characters/character-item";
import CharacterSummary from "../../components/characters/character-summary";
import CharacterLogistics from "../../components/characters/character-logistics";

export default function DetailCharactersPage(props) {
  const router = useRouter();

  const { character = {} } = props;
  return (
    <>
      <Head>
        <title>{character.name}</title>
        <meta
          name="description"
          content="The Rick and Morty API is a REST(ish) and GraphQL API based on the television show Rick and Morty. You will have access to about hundreds of characters, images, locations and episodes. The Rick and Morty API is filled with canonical information as seen on the TV show."
        />
      </Head>
      <CharacterSummary title={character.name} />
      <CharacterLogistics {...character} />
    </>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });
  const characterId = context.params.id;

  if (!session) {
    return {
      redirect: {
        destination: "/auth",
        permanent: false,
      },
    };
  }

  const character = await getCharacterById(characterId);

  return {
    props: {
      character,
      session,
    },
  };
}
