import _get from 'lodash/get'

export const selectMovies = state => _get(state, 'movies.results', [])

export const selectMovieById = ({ state, id }) => {
  const movies = selectMovies(state)
  const movie = movies.find(item => item.id === id)
  return movie
}

export const selectLoadMore = state => Number.isInteger(_get(state, 'movies.page')) && _get(state, 'movies.page') !== _get(state, 'movies.total_pages')

export const selectCurrentPage = state =>_get(state, 'movies.page')