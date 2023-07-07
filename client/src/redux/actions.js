import axios from "axios";
export const GET_ALLGAMES = "GET_ALLGAMES";

const URL = "https://jsonplaceholder.typicode.com/users";

export const getGames = () => {
  return async function (dispatch) {
    const { data } = await axios(URL);
    dispatch({ type: GET_ALLGAMES, payload: data });
  };
};
