import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Provider } from "react-redux";

import Home from "./components/home";
import MovieDetail from "./components/movie-detail";
import store from "./redux/store";

import './app.scss'

const App = (props)  => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path=":movieId/detail" element={<MovieDetail />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;