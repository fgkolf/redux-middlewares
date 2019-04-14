import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import counter from '../reducers/counter'
import MyCounter from './counter';
import logMiddleware from '../middlewares/log';
import analyticsMiddleware from '../middlewares/analytics'

const store = createStore(
  counter,
  {},
  applyMiddleware(
    logMiddleware,
    analyticsMiddleware
  )
);

const App = () => (
  <Provider store={store}>
    <MyCounter />
  </Provider>
)

export default App;
