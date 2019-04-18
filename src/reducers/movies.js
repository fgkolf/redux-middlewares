const initialState = [
  { name: 'The Matrix' },
  { name: 'The Big Lebowski' },
  { name: 'Synecdoche, New York' }
  ]

const movies = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

export default movies;
