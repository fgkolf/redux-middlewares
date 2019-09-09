import React from 'react';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import { Router, hashHistory, Route } from 'react-router'
import movie from '../reducers/movie'
import movies from '../reducers/movies'
import Page1 from './page1';
import Page2 from './page2';
import mySaga from '../middlewares/saga1'

const rootReducer =  combineReducers({
  movie,
  movies
})

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, {}, composeEnhancers(
  applyMiddleware(
    sagaMiddleware
  )
));



sagaMiddleware.run(mySaga)

const App = () => (
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={Page1} />
      <Route path="/page2" component={Page2} />
    </Router>
  </Provider>
)

export default App;
