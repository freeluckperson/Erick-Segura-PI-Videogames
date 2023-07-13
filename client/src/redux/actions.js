import axios from "axios";
export const GET_ALLGAMES = "GET_ALLGAMES";
export const GET_GAME = "GET_GAMES";
export const FILTER_GENRES = "FILTER_GENRES";
export const FILTER_ORIGIN = "FILTER_ORIGIN";
export const ORDER = "ORDER";
export const ALPHABETH = "ALPHABETH";
export const GET_VIDEOGAME_BY_NAME = "GET_VIDEOGAME_BY_NAME";

const URL = "http://localhost:3001/videogames/";

export const getGames = () => {
  return async (dispatch) => {
    const { data } = await axios(URL);
    dispatch({ type: GET_ALLGAMES, payload: data });
  };
};

export const getVideogameByName = (name) => {
  return async function (dispatch) {
    const { data } = await axios(`http://localhost:3001/videogames?name=${name}`);
    dispatch({ type: GET_VIDEOGAME_BY_NAME, payload: data });
  };
};

export const filterByGenres = (payload) => {
  return { type: FILTER_GENRES, payload };
};

// export const filterByOrigin = (payload) => {
//   console.log(payload);
//   return { type: FILTER_ORIGIN, payload };
// };

export const filterByOrigin=(origen)=>{
  return {
    type: FILTER_ORIGIN,
    payload:origen}
};

export const orderByRating = (order) => {
  return { type: ORDER, payload: order };
};

export const alphabetically = (order) => {
  return { type: ALPHABETH, payload: order };
};

// export const getGame = (id) => {
//   return async (dispatch) => {
//     const { data } = await axios(URL + id);
//     dispatch({ type: GET_GAME, payload: data });
//   };
// };
