import { GET_ALLGAMES } from "./actions";

const initialState = {
  videogames: [],
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALLGAMES:
      return { ...state, videogames: payload };

    default:
      return { ...state };
  }
};

export default rootReducer;
