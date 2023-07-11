import { GET_ALLGAMES, FILTER_GENRES, ORDER, ALPHABETH } from "./actions";

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

    case ORDER:
      let copy2 = state.videogames;
      let order = copy2.sort((a, b) => {
        if (payload === "Mayor") {
          return b.rating - a.rating;
        } else if (payload === "Menor") {
          return a.rating - b.rating;
        } else {
          return 0;
        }
      });
      return { ...state, filterVideogames: order };

    case ALPHABETH:
      let copy3 = state.videogames;
      let alpha = copy3.sort((a, b) => {
        if (payload === "A") {
          return a.name.localeCompare(b.name);
        } else if (payload === "Z") {
          return b.name.localeCompare(a.name);
        } else {
          return 0;
        }
      });
      return { ...state, filterVideogames: alpha };

    default:
      return { ...state };
  }
};

export default rootReducer;
