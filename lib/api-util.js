let BASE_URL = "https://rickandmortyapi.com/api/";

export async function getCharacters(page = undefined) {
  BASE_URL = BASE_URL.concat("character");
  if (page) BASE_URL = `${BASE_URL}?page${page}`;

  const response = await fetch(`${BASE_URL}`);
  const characters = await response.json();

  return characters;
}

export async function getCharacterById(id = undefined) {
  BASE_URL = BASE_URL.concat("character");
  if (id) BASE_URL = `${BASE_URL}/${id}`;

  const response = await fetch(`${BASE_URL}`);
  const character = await response.json();

  return character;
}

export async function getEpisodeById(url) {
  const response = await fetch(url);
  const episode = await response.json();

  return episode;
}
