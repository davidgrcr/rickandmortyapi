export async function getCharacters(page = undefined) {
  let BASE_URL = "https://rickandmortyapi.com/api/character";

  if (page) BASE_URL = `${BASE_URL}?page${page}`;

  const response = await fetch(`${BASE_URL}`);

  const characters = await response.json();

  return characters;
}
