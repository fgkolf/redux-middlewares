import React from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux'
import counter from '../reducers/counter'
import MyCounter from './counter';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  counter,
  {},
  composeEnhancers(
    applyMiddleware()
  )
);

const App = () => (
  <Provider store={store}>
    <MyCounter />
  </Provider>
)

export default App;
