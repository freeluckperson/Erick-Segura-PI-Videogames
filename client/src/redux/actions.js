import axios from "axios";
export const GET_ALLGAMES = "GET_ALLGAMES";
export const GET_GAME = "GET_GAMES";



const URL = `https://jsonplaceholder.typicode.com/users/`;
const URL_API_DB = `http://localhost:3001/videogames/`;
const UURL_API_DB = `/videogames/`;

export const getGames = () => {
  return async (dispatch) => {
    const { data } = await axios(URL);
    dispatch({ type: GET_ALLGAMES, payload: data });
  };
};




// export const getGame = (id) => {
//   return async (dispatch) => {
//     const { data } = await axios(URL + id);
//     dispatch({ type: GET_GAME, payload: data });
//   };
// };
