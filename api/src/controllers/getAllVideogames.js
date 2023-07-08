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
        rating: game.rating,
        genres: game.genres?.map((genre) => genre.name),
        
      };
    });
  } catch (error) {
    throw new Error(error.message);
  }
};

const getAllApiVideogames = async () => {
  try {
    //const { data } = await axios(`https://api.rawg.io/api/games?key=${APIKEY}&page_size=100`);
    const { data } = await axios(URL_MOCK);
    const api = data.results;

    const allGames = api.map((game) => ({
      id: game.id,
      name: game.name,
      released: game.released,
      rating: game.rating,
      imag: game.background_image,
      genres: game.genres?.map((genre) => genre.name),
      platforms: game.platforms?.map((p) => p.platform?.name),
    }));

    return allGames;
  } catch (error) {
    throw new Error(error.message);
  }
  
};

module.exports = getAllVideogames;
