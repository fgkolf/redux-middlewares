import { TOGGLE_FAVORITE } from '../actions/actions'

const whitelist = [TOGGLE_FAVORITE];

const constructGaAction = ({ type, payload }, state) => (
 `${state.movie.favorite ? 'unfavorite' : 'favorite'} ${state.movie.name}`
)

const analyticsMiddleware = store => next => action => {
  if (window.ga && whitelist.includes(action.type)) {
    window.ga('send', 'event', action.type, constructGaAction(action, store.getState()));
  }
  next(action);
}

export default analyticsMiddleware;
