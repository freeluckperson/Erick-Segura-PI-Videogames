const { Videogame, Genre } = require(`../db`);
const axios = require(`axios`);
const { Op } = require(`sequelize`);
const { APIKEY } = process.env;

const getVideogamesByName = async (name) => {
  try {
    const dbVideogames = await getDbVideogamesByName(name);
    const apiVideogames = await getApiVideogamesByName(name);
    if ([...dbVideogames, ...apiVideogames].length === 0)
      throw Error(`No matches found`);
    return [...dbVideogames, ...apiVideogames];
  } catch (error) {
    throw Error(error.message);
  }
};

const getDbVideogamesByName = async (name) => {
  try {
    const auxVideogames = await Videogame.findAll({
      where: {
        name: {
          [Op.iLike]: `%${name}%`,
        },
      },
      include: Genre,
    });
    const dbVideogames = auxVideogames.map((vg) => {
      return {
        id: vg.id,
        name: vg.name,
        image: vg.image,
        rating: vg.rating,
        genres: vg.genres.map((genre) => genre.name),
      };
    });
    return dbVideogames;
  } catch (error) {
    throw Error(error.message);
  }
};

const getApiVideogamesByName = async (name) => {
  try {
    const { data } = await axios(
      `https://api.rawg.io/api/games?search=${name}&key=${APIKEY}&page_size=15`
    );
    const api = data.results;
    const apiVideogames = api.map((game) => {
      return {
        id: game.id,
        name: game.name,
        image: game.background_image
          ? game.background_image
          : "https://sm.ign.com/ign_es/screenshot/default/60225-metal-gear-solid-3-subsistence-playstation-2_umwf.jpg",
        rating: game.rating_top,
        genres: game.genres.map((genre) => genre.name),
      };
    });
    return apiVideogames;
  } catch (error) {
    throw Error(error.message);
  }
};

module.exports = getVideogamesByName;
