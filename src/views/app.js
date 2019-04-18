import React from 'react';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';
import movie from '../reducers/movie'
import movies from '../reducers/movies'
import MovieList from './movieList';
import Movie from './movie';
import logMiddleware from '../middlewares/log';
import analyticsMiddleware from '../middlewares/analytics'

const rootReducer =  combineReducers({
  movie,
  movies
})

const store = createStore(
  rootReducer,
  {},
  applyMiddleware(
    logMiddleware,
    analyticsMiddleware,
    thunk
  )
);

const App = () => (
  <Provider store={store}>
    <div className="main">
      <MovieList />
      <Movie />
    </div>
  </Provider>
)

export default App;
