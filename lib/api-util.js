const BASE_URL = "https://rickandmortyapi.com/api/";

export async function getCharacters(page = undefined) {
  let url = BASE_URL.concat("character");
  if (page) url = `${url}?page${page}`;

  return getApiResponse(url);
}

export async function getCharacterById(id = undefined) {
  let url = BASE_URL.concat("character");
  if (id) url = `${url}/${id}`;

  return getApiResponse(url);
}

export async function getEpisodeById(url) {
  return getApiResponse(url);
}

async function getApiResponse(url) {
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return await response.json();
}
