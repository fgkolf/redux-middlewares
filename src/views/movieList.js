import React from 'react';
import { connect } from 'react-redux';
import { requestMovieAction } from '../actions/actions';

const MovieList = ({ movies, requestMovie }) => (
  <div className="movie-list">
    <h2>Movies</h2>
    <ul>
      {movies.map(({ name }, id) => (
        <li key={name}>
          <button onClick={() => requestMovie(id)}>
            {name}
          </button>
        </li>
      ))}
    </ul>
  </div>)

const mapStateToProps = state => ({
  movies: state.movies
});

const mapDispatchToProps = dispatch => ({
  requestMovie: (id) => {
    dispatch(requestMovieAction(id));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
