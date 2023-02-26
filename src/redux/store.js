import { configureStore, createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: 'movies',
  initialState: {},
  reducers: {
    init: (state, action) => {
      return action.payload
    },
    add: (state, action) => {
      return {
        ...state,
        page: action.payload.page,
        results: [
          ...state.results,
          ...action.payload.results
        ]
      }
    }
  }
})

const store = configureStore({
  reducer: {
    movies: moviesSlice.reducer
  }
})

const { actions: { add, init }} = moviesSlice
export { add as addMovies, init as initMovies }
export default store