import axios from 'axios'

export const BASE_URL = 'https://api.themoviedb.org/3/'  
// Assuming that the configuration regarding images.base_url is fixed.
export const IMAGE_BASE_URL = 'http://image.tmdb.org/t/p/'
export const POSTER_WIDTH = 'w342'
export const BACKDROP_WIDTH = 'w780'
const fetchApi = axios.create({
  headers: {
    Authorization: `Bearer ${API_V4_AUTH}`
  }
})

export default fetchApi