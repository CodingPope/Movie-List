import React from 'react';

const IMGPATH = 'https://image.tmdb.org/t/p/w1280';
console.log();
console.log();
const setVoteClass = (vote) => {
  if (vote >= 8) {
    return 'green';
  } else if (vote >= 6) {
    return 'orange';
  } else {
    return 'red';
  }
};

const Movie = ({ title, poster_path, overview, vote_average }) => (
  <div className="movie">
    <img
      src={
        poster_path
          ? IMGPATH + poster_path
          : 'https://afridocs.net/wp-content/uploads/2017/07/500x735blank.png'
      }
      alt={title}
    />
    <div className="movie-over">
      <h2>Overview:</h2>
      <p>{overview}</p>
    </div>
    <div className="movie-info">
      <h3>{title}</h3>
      <span className={`tag ${setVoteClass(vote_average)}`}>
        {vote_average}
      </span>
    </div>
  </div>
);

export default Movie;
