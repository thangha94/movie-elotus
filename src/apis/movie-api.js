import fetchApi, { BASE_URL } from "../utils/fetch"
import Notify from 'simple-notify'

const pushErrorNetwork = () => {
  new Notify({
    status: 'error',
    title: 'Error',
    text: 'There is a network error.',
    effect: 'fade',
    speed: 300,
    customClass: null,
    customIcon: null,
    showIcon: true,
    showCloseButton: true,
    autoclose: false,
    autotimeout: 3000,
    autoclose: true,
    gap: 20,
    distance: 20,
    type: 1,
    position: 'right top'
  })
}

export const getMovies = async ({ category: category = 'now_playing', page: page = 1}) => {
  try {
    const result = await fetchApi.get(`${BASE_URL}/movie/${category}?page=${page}`)
    return result.data
  } catch (error) {
    pushErrorNetwork()
  }
}

export const getDetailMovie = async(id) => {
  try {
    const result = await fetchApi.get(`${BASE_URL}/movie/${id}`)
    return result.data
  } catch (error) {
    pushErrorNetwork()
  }
}