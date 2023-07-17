import axios from 'axios'
import {GET_VIDEOGAME_BY_NAME, ALPHABETH, ORDER, FILTER_ORIGIN, FILTER_GENRES, GET_ALLGAMES } from './index'

const URL = 'http://localhost:3001/videogames/'

export const getGames = () => {
  return async (dispatch) => {
    const { data } = await axios(URL);
    dispatch({ type: GET_ALLGAMES, payload: data })
  }
}

export const getVideogameByName = (name) => {
  return async function (dispatch) {
    const { data } = await axios(`${URL}?name=${name}`)
    dispatch({ type: GET_VIDEOGAME_BY_NAME, payload: data })
  }
}

export const filterByGenres = (payload) => {
  console.log(payload)
  return { type: FILTER_GENRES, payload }
}

export const filterByOrigin = (payload) => {
  console.log(payload)
  return { type: FILTER_ORIGIN,  payload }
}

export const orderByRating = (order) => {
  return { type: ORDER, payload: order }
};

export const alphabetically = (order) => {
  return { type: ALPHABETH, payload: order }
}


