import React from 'react';
import { connect } from 'react-redux';
import { toggleFavoriteAction } from '../actions/actions'

const starClassName = favorite => (`star ${favorite ? 'favorite' : ''}`);

const Movie = ({ movie, toggleFavorite }) => (
    <div className="movie">
      {movie.isFetching ?
        <div className="loading">Loading...</div> :
        <React.Fragment>
          <h2>{movie.name}</h2>
          <img src={movie.imgUrl} alt="movie" />
          <p>{movie.plot}</p>
          <p>
            <button
              className={starClassName(movie.favorite)}
              onClick={() => toggleFavorite(movie.id)}
            >
              &#9734;
            </button>
          </p>
        </React.Fragment>}
    </div>)

const mapStateToProps = state => ({
  movie: state.movie
});

const mapDispatchToProps = dispatch => ({
  toggleFavorite: (id) => {
    dispatch(toggleFavoriteAction(id));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Movie);
