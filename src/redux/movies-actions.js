import { getMovies } from '../apis/movie-api'
import { initMovies, addMovies } from './store'

export const fetchMovies = ({ category, page }) => async (dispatch) => {
  const movies = await getMovies({ category, page })
  if (page) {
    return dispatch(addMovies(movies))
  }
  return dispatch(initMovies(movies))
}