import {
  GET_ALLGAMES,
  FILTER_GENRES,
  ORDER,
  ALPHABETH,
  FILTER_ORIGIN,
  GET_VIDEOGAME_BY_NAME,
} from "./actions";

const initialState = {
  videogames: [],
  filterVideogames: [],
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALLGAMES:
      return { ...state, videogames: payload, filterVideogames: payload };

    case GET_VIDEOGAME_BY_NAME:
      return { ...state, videogames: payload, filterVideogames: payload };

    case FILTER_GENRES:
      const filterFunction = (vg) => {
        return payload.every((genre) => vg.genres.includes(genre));
      };
      let copy = state.videogames.filter(filterFunction);
      return { ...state, filterVideogames: copy };

    // case FILTER_ORIGIN:
    //   let copy4 = state.videogames.filter((vg) => {
    //     if (payload === "DB") {
    //       return vg.id.length > 8;
    //     } else if (payload === "API") {
    //       return vg.id.length < 8;
    //     } else {
    //       return true; // Devuelve true para que no se filtre ningún elemento
    //     }
    //   });
    //   console.log(copy4);
    //   return { ...state, filterVideogames: copy4 };

    case FILTER_ORIGIN:
      let copy4 = state.videogames.filter(({ id }) => {
        if (payload === "DB") {
          return id.length > 8;
        }
        if (payload === "API") {
          return id.length < 8;
        }
      });

      console.log(copy4);
      return { ...state, videogames: copy4 };

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
        }
        //else {
        //   return 0;
        // }
      });

      return { ...state, filterVideogames: alpha };

    default:
      return { ...state };
  }
};

export default rootReducer;
