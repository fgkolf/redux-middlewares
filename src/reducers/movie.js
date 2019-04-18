import { TOGGLE_FAVORITE, SET_MOVIE, SET_IS_FETCHING } from '../actions/actions'

const initialState = {
  "id": 0,
  "name": "Matrix",
  "imgUrl": "https://upload.wikimedia.org/wikipedia/en/c/c1/The_Matrix_Poster.jpg",
  "plot": "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
  "favorite": true
}

const movie = (state = initialState, action) => {
  switch (action.type) {
    case SET_IS_FETCHING: {
      return { ...state, isFetching: action.payload }
    }
    case SET_MOVIE: {
      return action.payload;
    }
    case TOGGLE_FAVORITE: {
      return { ...state, favorite: !state.favorite }
    }
    default:
      return state;
  }
}

export default movie;
