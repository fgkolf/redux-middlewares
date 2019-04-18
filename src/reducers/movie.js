import { TOGGLE_FAVORITE, SET_MOVIE } from '../actions/actions'

const movie = (state = {}, action) => {
  switch (action.type) {
    case SET_MOVIE: {
      return action.payload.movie;
    }
    case TOGGLE_FAVORITE: {
      return { ...state, favorite: !state.favorite }
    }
    default:
      return state;
  }
}

export default movie;
