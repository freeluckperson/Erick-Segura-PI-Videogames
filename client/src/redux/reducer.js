import { GET_ALLGAMES, FILTER_GENRES, ORDER, ALPHABETH, FILTER_ORIGIN, GET_VIDEOGAME_BY_NAME } from './index'

const initialState = {
  videogames: [],
  filterVideogames: [],
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALLGAMES:
      return { ...state, videogames: payload, filterVideogames: payload }

    case GET_VIDEOGAME_BY_NAME:
      return { ...state, videogames: payload, filterVideogames: payload }
      
    case FILTER_GENRES:
      const filterFunction = vg => payload.some((genre) => vg.genres.includes(genre))    
      let copy = state.videogames.filter(filterFunction)
      return { ...state, filterVideogames: copy }
      

    case FILTER_ORIGIN:
      let copy4 = state.videogames.filter(vg =>  vg.Created === payload )
      return { ...state, filterVideogames: copy4 };

    case ORDER:
      let copy2 = state.videogames;
      let order = copy2.sort((a, b) => (
        payload === "Mayor" ? b.rating - a.rating : a.rating - b.rating
        
      ));
      return { ...state, filterVideogames: order };

    case ALPHABETH:
      let copy3 = state.videogames;
      let alpha = copy3.sort((a, b) => ( 
        payload === "A" ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)        
     ));
      return { ...state, filterVideogames: alpha };

    default:
      return { ...state };
  }
};

export default rootReducer;
