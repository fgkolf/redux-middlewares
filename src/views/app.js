import React from 'react';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import movie from '../reducers/movie'
import movies from '../reducers/movies'
import MovieList from './movieList';
import Movie from './movie';
import logMiddleware from '../middlewares/log';
import analyticsMiddleware from '../middlewares/analytics'
import mySaga from '../middlewares/saga'

const rootReducer =  combineReducers({
  movie,
  movies
})

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  {},
  applyMiddleware(
    logMiddleware,
    analyticsMiddleware,
    sagaMiddleware
  )
);

sagaMiddleware.run(mySaga)

const App = () => (
  <Provider store={store}>
    <div className="main">
      <MovieList />
      <Movie />
    </div>
  </Provider>
)

export default App;
