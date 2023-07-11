import { GET_ALLGAMES, FILTER_GENRES, ORDER } from "./actions";

const initialState = {
  videogames: [],
  filterVideogames: [],
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALLGAMES:
      return { ...state, videogames: payload, filterVideogames: payload };

    case FILTER_GENRES:
      const filterFunction = (vg) => {
        return payload.every((genre) => vg.genres.includes(genre));
      };
      let copy = state.videogames.filter(filterFunction);
      return { ...state, filterVideogames: copy };

    default:
      return { ...state };
  }
};

export default rootReducer;
