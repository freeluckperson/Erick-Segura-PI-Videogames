import axios from "axios";
export const GET_ALLGAMES = "GET_ALLGAMES";
export const GET_GAME = "GET_GAMES";
export const FILTER_GENRES = "FILTER_GENRES";
export const ORDER = "ORDER";

const URL = "http://localhost:3001/videogames/";


export const getGames = () => {
  return async (dispatch) => {
    const { data } = await axios(URL);
    dispatch({ type: GET_ALLGAMES, payload: data });
  };
};

export const filterByGenres = (genres) => {
  
  return { type: FILTER_GENRES, payload: genres };
};



// export const getGame = (id) => {
//   return async (dispatch) => {
//     const { data } = await axios(URL + id);
//     dispatch({ type: GET_GAME, payload: data });
//   };
// };
