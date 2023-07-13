const axios = require(`axios`);
require(`dotenv`).config();
const { Videogame, Genre } = require(`../db`);
const { APIKEY } = process.env;

const getAllVideogames = async () => {
  try {
    const apiVideogames = await getAllApiVideogames();
    const dbVideogames = await getAllDbVideogames();
    if (![...dbVideogames, ...apiVideogames].length)
      throw new Error(`Videogames is empty`);
    return [...dbVideogames, ...apiVideogames];
  } catch (error) {
    throw new Error(error.message);
  }
};

const getAllDbVideogames = async () => {
  try {
    const videogames = await Videogame.findAll({
      include: Genre,
    });
    return videogames.map((game) => {
      return {
        id: game.id,
        name: game.name,
        released: game.released,
        rating: parseInt(game.rating),
        imag: game.imag,
        Created: game.Created,
        genres: game.genres?.map((genre) => genre.name),
        platforms: game.platforms?.map((genre) => genre),
      };
    });
  } catch (error) {
    throw new Error(error.message);
  }
};

const getAllApiVideogames = async () => {
  // const getVideogamesInfo = async (url) => {
  //   const { data } = await axios.get(url);
  //   return data.results;
  // };

  // const getData = (url) => getVideogamesInfo(url);

  // const url = `https://api.rawg.io/api/games?key=${APIKEY}&page=1&page_size=40`;
  // const url2 = `https://api.rawg.io/api/games?key=${APIKEY}&page=2&page_size=40`;
  // const url3 = `https://api.rawg.io/api/games?key=${APIKEY}&page=3&page_size=25`;

  // const pendingPromises = [url, url2, url3].map(getData);
  // const allData = await Promise.all(pendingPromises);
  // const api = allData.flat();

  const { data } = await axios(
    `https://api.rawg.io/api/games?key=${APIKEY}&page=2&page_size=40`
  );
  const api = data.results;

  const allGames = api.map((game) => ({
    id: game.id.toString(),
    name: game.name,
    released: game.released,
    rating: parseInt(game.rating),
    imag: game.background_image,
    Created: "NO",
    genres: game.genres?.map((genre) => genre.name),
    platforms: game.platforms?.map((p) => p.platform?.name),
  }));

  return allGames;
};

module.exports = getAllVideogames;
