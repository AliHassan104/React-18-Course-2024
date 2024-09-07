import React from "react";
import "../styles.css";

function MovieCard({ movie, isWatchlisted, toggleWatchlist }) {
  const handleError = (e) => {
    e.target.src = "resources/images/default.jpg";
  };

  const getRatingClass = (rating) => {
    if (rating > 8) {
      return "rating-good";
    }
    if (rating >= 5 && rating < 8) {
      return "rating-ok";
    }

    return "rating-bad";
  };

  return (
    <div key={movie.id} className="movie-card">
      <img
        src={`resources/images/${movie.image}`}
        alt={movie.title}
        onError={handleError}
      />
      <div className="movie-card-info">
        <h3 className="movie-card-title">{movie.title}</h3>
        <span className="movie-card-genre">{movie.genre}</span>
        <span className={`movie-card-rating ${getRatingClass(movie.rating)}`}>
          {movie.rating}
        </span>
      </div>
      <label className="switch">
        <input
          type="checkbox"
          checked={isWatchlisted}
          onChange={() => toggleWatchlist(movie.id)}
        ></input>
        <span className="slider">
          <span className="slider-label">
            {isWatchlisted ? "In watchlist" : "Add to watch list"}
          </span>
        </span>
      </label>
    </div>
  );
}

export default MovieCard;
