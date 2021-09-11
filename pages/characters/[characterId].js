import Head from "next/head";

import { getSession } from "next-auth/client";
import { getCharacterById } from "../../lib/api-util";

import { useEffect, useState } from "react";

import { useRouter } from "next/router";
import CharacterSummary from "../../components/characters/character-summary";
import CharacterLogistics from "../../components/characters/character-logistics";

export default function DetailCharactersPage() {
  const router = useRouter();
  const [character, setCharacter] = useState({});
  const characterId = router.query.characterId;

  useEffect(async () => {
    setCharacter(await getCharacterById(characterId));
  }, [characterId]);

  useEffect(() => {
    getSession().then((session) => {
      if (!session) router.replace("/auth");
    });
  }, [router]);

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
/* 
export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });
  const characterId = context.params.id;

  console.log("characterId", characterId, context.params);
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
} */
