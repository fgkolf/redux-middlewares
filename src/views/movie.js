import React from 'react';
import { connect } from 'react-redux';

const starClassName = favorite => (`star ${favorite ? 'favorite' : ''}`);

const Movie = ({ movie }) => (
  <div className="movie">
    <h2>{movie.name}</h2>
    <img src="https://upload.wikimedia.org/wikipedia/en/c/c1/The_Matrix_Poster.jpg" alt="movie" />
    <p>{movie.plot}</p>
    <p>
      <button className={starClassName(movie.favorite)}>&#9734;</button>
    </p>
  </div>)

const mapStateToProps = state => ({
       movie: state.movie
});

export default connect(mapStateToProps)(Movie);
