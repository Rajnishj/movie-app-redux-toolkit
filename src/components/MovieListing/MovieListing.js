import React from "react";
import { useSelector } from "react-redux";

import MovieCard from "../MovieCard/MovieCard";
import "./MovieListing.scss";

const MovieListing = () => {
  const movies = useSelector((state) => state.movies.movies);
  console.log(movies);
  const shows = useSelector((state) => state.movies.shows);
  console.log("object", shows);
  let renderMovies,
    renderShows = "";
  renderMovies =
    movies.Response === "True" ? (
      movies.Search.map((movie, index) => {
        return <MovieCard key={index} data={movie} />;
      })
    ) : (
      <div className="movie-error">
        <h3>{movies.Error}</h3>
      </div>
    );
  renderShows =
    shows.Response === "True" ? (
      shows.Search.map((show, index) => {
        return <MovieCard key={index} data={show} />;
      })
    ) : (
      <div className="movie-error">
        <h3>{shows.Error}</h3>
      </div>
    );
  return (
    <>
      <div className="movie-Wrapper">
        <div className="movie-list">
          <h2>Movies</h2>
          <div className="movie-container">{renderMovies}</div>
        </div>
      </div>
      <br />
      <div className="movie-Wrapper">
        <div className="movie-list">
          <h2>Shows</h2>
          <div className="movie-container">{renderShows}</div>
        </div>
      </div>
    </>
  );
};

export default MovieListing;
