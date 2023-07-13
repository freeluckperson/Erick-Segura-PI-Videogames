const axios = require(`axios`);
require(`dotenv`).config();
const { Videogame, Genre } = require(`../db`);
const { APIKEY, URL_MOCK } = process.env;

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
        imag: game.imag,
        rating: parseInt(game.rating),
        genres: game.genres?.map((genre) => genre.name),
      };
    });
  } catch (error) {
    throw new Error(error.message);
  }
};

const getAllApiVideogames = async () => {
  const url = "https://api.rawg.io/api/games";

  const { data: data1 } = await axios.get(url, {
    params: {
      key: "232664f6fc6541e2a787c5d2528caac5",
      page: 1,
      page_size: 40,
    },
  });
  const { data: data2 } = await axios.get(url, {
    params: {
      key: "232664f6fc6541e2a787c5d2528caac5",
      page: 2,
      page_size: 40,
    },
  });
  const { data: data3 } = await axios.get(url, {
    params: {
      key: "232664f6fc6541e2a787c5d2528caac5",
      page: 3,
      page_size: 25,
    },
  });

  const api = [...data1.results, ...data2.results, ...data3.results];

  const allGames = api.map((game) => ({
    id: game.id.toString(),
    name: game.name,
    released: game.released,
    rating: parseInt(game.rating),
    imag: game.background_image,
    genres: game.genres?.map((genre) => genre.name),
    platforms: game.platforms?.map((p) => p.platform?.name),
  }));

  return allGames;
};

module.exports = getAllVideogames;
