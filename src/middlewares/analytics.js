import { INCREMENT, DECREMENT, RESET } from '../actions/actions'

const whitelist = [INCREMENT, DECREMENT];

/* eslint-disable no-unused-vars */
const blacklist = [RESET];

const constructGaAction = ({ type, payload }, state) => (
 `${type} value ${state.counter}`
)

const analyticsMiddleware = store => next => action => {
  if (window.ga && whitelist.includes(action.type)) {
    window.ga('send', 'event', action.type, constructGaAction(action, store.getState()));
  }
   next(action);
}

export default analyticsMiddleware;
