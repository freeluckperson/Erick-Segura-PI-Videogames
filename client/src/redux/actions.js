import axios from "axios";
export const GET_ALLGAMES = "GET_ALLGAMES";
export const GET_GAME = "GET_GAMES";

const URL = "http://localhost:3001/videogames/";
const MOCKY = "https://run.mocky.io/v3/056a0c57-d0f3-4970-a938-2efa5e20fc98";

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
